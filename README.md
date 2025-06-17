# 🎲 DICE AI - Landing Page

Uma landing page moderna e responsiva para o DICE AI, sistema de análise cognitiva de conteúdo com IA.

## 🚀 Sobre o Projeto

O DICE AI é posicionado como o "Grammarly para persuasão ética", ajudando criadores de conteúdo a analisar e otimizar seus textos antes da publicação. Esta landing page foi desenvolvida para capturar leads do programa beta.

## ✨ Funcionalidades

- **Hero Section** com captura de email e validação em tempo real
- **Seção Problema/Solução** com estatísticas impactantes
- **Como Funciona** com processo em 4 etapas
- **Simulador de Demo** interativo para testar a análise DICE
- **Benefícios** com resultados comprovados e case study
- **Design Responsivo** otimizado para mobile-first
- **Animações Suaves** com Framer Motion

## 🛠️ Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **React Hook Form** com validação Zod
- **Lucide React** para ícones

## 🎨 Design System

### Cores
- **Primary:** #2563EB (Blue 600)
- **Secondary:** #7C3AED (Purple 600)  
- **Accent:** #059669 (Green 600)
- **Text:** #1F2937 (Gray 800)
- **Background:** #FFFFFF

### Tipografia
- **Font Family:** Inter (Google Fonts)
- **Weights:** 400, 500, 600, 700

## 📱 Responsividade

O projeto utiliza breakpoints Tailwind:
- **sm:** 640px (Tablets pequenos)
- **md:** 768px (Tablets)
- **lg:** 1024px (Desktops pequenos)
- **xl:** 1280px (Desktops grandes)
- **2xl:** 1536px (Telas extra grandes)

## 🏃‍♂️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd dice-landing

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### Scripts Disponíveis

```bash
# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint
```

## 📁 Estrutura do Projeto

```
dice-landing/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   └── DemoSimulator.tsx
│   ├── hooks/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── tailwind.config.js
└── vite.config.ts
```

## 🎯 Objetivos de Performance

- **Lighthouse Score:** 95+ em todas as métricas
- **Core Web Vitals:** Todos verdes
- **Bundle Size:** <100kb gzipped
- **Load Time:** <2s em 3G

## 🔄 Próximos Passos

- [ ] Integração com serviço de email (EmailJS/Netlify Forms)
- [ ] Google Analytics 4 + Meta Pixel
- [ ] Seção de FAQ
- [ ] Seção de Preços
- [ ] Footer com links legais
- [ ] Otimizações SEO
- [ ] Testes A/B para CTAs

## 📊 Métricas de Sucesso

### Semana 1
- 500+ visitantes únicos
- 15%+ taxa de conversão de email
- 75%+ tráfego mobile
- <3% bounce rate nos signups

### Mês 1
- 100+ signups beta qualificados
- 5+ consultas enterprise
- 25%+ visitantes recorrentes

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**DICE AI Team**  
Email: felipe@dice-ai.com  
Telefone: +55 11 99999-9999

---

*"Don't roll the dice with your content. Use DICE."* 🎲
