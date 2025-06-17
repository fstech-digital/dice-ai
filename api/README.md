# DICE AI - Email API

API backend para capturar emails da landing page do DICE AI e enviar para contato@dice-ia.com.

## Configuração

### 1. Instalar dependências
```bash
cd api
npm install
```

### 2. Configurar variáveis de ambiente
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```bash
# Email Configuration - Hostinger SMTP
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=seu-email@dice-ia.com
SMTP_PASS=sua-senha-de-app

# Destination Email
DESTINATION_EMAIL=contato@dice-ia.com

# Server Configuration
PORT=3001
NODE_ENV=production

# CORS Origins (comma separated)
CORS_ORIGINS=http://localhost:5173,https://seu-dominio.com
```

### 3. Executar API

**Desenvolvimento:**
```bash
npm run dev
```

**Produção:**
```bash
npm start
```

## Endpoints

### POST /api/hero-email
Captura email da seção hero da landing page.

**Body:**
```json
{
  "email": "usuario@exemplo.com"
}
```

### POST /api/beta-signup
Processa cadastro completo do beta.

**Body:**
```json
{
  "name": "Nome do Usuário",
  "email": "usuario@exemplo.com", 
  "channel": "youtube",
  "challenge": "Meu maior desafio como criador..."
}
```

### GET /health
Health check da API.

## Configuração SMTP Hostinger

Utilize as seguintes configurações:

- **Host:** smtp.hostinger.com
- **Porta:** 465
- **Criptografia:** SSL
- **Autenticação:** Necessária

## Deploy

### Vercel
1. Fazer upload do diretório `api` para Vercel
2. Configurar variáveis de ambiente no painel da Vercel
3. Deploy automático

### Outros Provedores
1. Configure as variáveis de ambiente
2. Execute `npm start`
3. Certifique-se que a porta está configurada corretamente

## Segurança

- Rate limiting implementado (5 emails/minuto por IP)
- CORS configurado
- Helmet.js para headers de segurança
- Validação de dados de entrada
- Logs de segurança

## Estrutura de Email

### Hero Email
Template otimizado para captura rápida com informações básicas.

### Beta Signup
Template completo com todos os dados do formulário para análise detalhada.

## Monitoramento

Monitore os logs para:
- Emails capturados com sucesso
- Erros de SMTP
- Tentativas de spam
- Rate limiting ativado