const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Muitas tentativas. Tente novamente em 15 minutos.'
});
app.use(limiter);

// Email rate limiting (more restrictive)
const emailLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 email requests per minute
  message: 'Muitos emails enviados. Tente novamente em 1 minuto.'
});

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : ['http://localhost:5173'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// SMTP transporter configuration for Hostinger
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true' || true, // SSL
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email templates
const createHeroEmailTemplate = (email) => {
  return {
    subject: '🎲 Novo Lead Capturado - DICE AI Hero Section',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🎲 DICE AI</h1>
          <p style="color: white; margin: 10px 0 0 0;">Novo Lead Capturado</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Detalhes do Lead</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Origem:</strong> Hero Section (Interesse rápido)</p>
            <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af;"><strong>Ação Sugerida:</strong> Enviar email de boas-vindas com acesso ao beta</p>
          </div>
        </div>
      </div>
    `
  };
};

const createBetaEmailTemplate = (formData) => {
  return {
    subject: '🚀 Novo Cadastro Beta - DICE AI (PRIORITÁRIO)',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">🎲 DICE AI</h1>
          <p style="color: white; margin: 10px 0 0 0;">Novo Usuário Beta Cadastrado</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Dados Completos do Beta Tester</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
            <h3 style="color: #2563eb; margin-top: 0;">Informações Pessoais</h3>
            <p><strong>Nome:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Canal Principal:</strong> ${formData.channel}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
            <h3 style="color: #2563eb; margin-top: 0;">Maior Desafio</h3>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 6px; font-style: italic;">
              "${formData.challenge}"
            </p>
          </div>
          
          <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #2563eb; margin-top: 0;">Metadados</h3>
            <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
            <p><strong>Origem:</strong> Formulário Beta Completo</p>
            <p><strong>Status:</strong> Aguardando aprovação</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #dcfce7; border-radius: 8px;">
            <p style="margin: 0; color: #15803d;"><strong>Próximos Passos:</strong></p>
            <ul style="margin: 10px 0 0 0; color: #15803d;">
              <li>Revisar perfil do candidato</li>
              <li>Enviar email de boas-vindas personalizado</li>
              <li>Adicionar à lista de beta testers</li>
              <li>Agendar onboarding se necessário</li>
            </ul>
          </div>
        </div>
      </div>
    `
  };
};

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'DICE AI Email API'
  });
});

// Hero section email capture
app.post('/api/hero-email', emailLimiter, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email válido é obrigatório' 
      });
    }

    const transporter = createTransporter();
    const emailTemplate = createHeroEmailTemplate(email);

    console.log('Tentando enviar email via SMTP...');
    const result = await transporter.sendMail({
      from: `"DICE AI System" <${process.env.SMTP_USER}>`,
      to: process.env.DESTINATION_EMAIL,
      subject: emailTemplate.subject,
      html: emailTemplate.html
    });

    console.log(`Hero email captured: ${email}`);
    console.log('Email enviado com sucesso:', result.messageId);
    
    res.json({ 
      success: true, 
      message: 'Email registrado com sucesso!' 
    });

  } catch (error) {
    console.error('Hero email error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro interno do servidor' 
    });
  }
});

// Beta form submission
app.post('/api/beta-signup', emailLimiter, async (req, res) => {
  try {
    const { name, email, channel, challenge } = req.body;

    // Validation
    if (!name || !email || !channel || !challenge) {
      return res.status(400).json({ 
        success: false, 
        error: 'Todos os campos são obrigatórios' 
      });
    }

    if (!email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email inválido' 
      });
    }

    if (challenge.length < 10) {
      return res.status(400).json({ 
        success: false, 
        error: 'Descreva seu desafio com mais detalhes (mínimo 10 caracteres)' 
      });
    }

    const transporter = createTransporter();
    const emailTemplate = createBetaEmailTemplate({ name, email, channel, challenge });

    console.log('Tentando enviar email beta via SMTP...');
    const result = await transporter.sendMail({
      from: `"DICE AI System" <${process.env.SMTP_USER}>`,
      to: process.env.DESTINATION_EMAIL,
      subject: emailTemplate.subject,
      html: emailTemplate.html
    });

    console.log(`Beta signup: ${name} (${email})`);
    console.log('Email beta enviado com sucesso:', result.messageId);
    
    res.json({ 
      success: true, 
      message: 'Cadastro realizado com sucesso!' 
    });

  } catch (error) {
    console.error('Beta signup error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro interno do servidor' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    error: 'Algo deu errado!' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'Endpoint não encontrado' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎲 DICE AI Email API rodando na porta ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`SMTP Host: ${process.env.SMTP_HOST || 'smtp.hostinger.com'}`);
});