export const egiptologiaAnalysis = {
  id: 'egiptologia-educacional-001',
  titulo: 'Divulgação Científica - História do Egito Antigo',
  autor: 'Egiptólogo/Divulgador Científico',
  dataAnalise: '2025-06-20',
  tipoConteudo: 'video' as const,
  urlOrigem: undefined,
  desafioUsuario: 'análise de qualidade ética em divulgação científica histórica',
  
  scoreDice: 0.2,
  classificacao: 'Ético' as const,
  
  descoberta: 'Conteúdo educacional exemplar que demonstra as melhores práticas de divulgação científica ética, combinando rigor acadêmico com acessibilidade, transparência metodológica e humildade intelectual.',
  
  scoresValidacao: {
    logico: 95,
    consistente: 95,
    parcimonioso: 90,
    empirico: 98,
    explicativo: 92
  },
  
  confianca: 95,
  lacunas: 'Nenhuma lacuna significativa identificada - conteúdo segue padrões exemplares de comunicação científica',
  testes: 'Verificar se audiência consegue distinguir entre fatos estabelecidos e debates acadêmicos em andamento; avaliar retenção de conhecimento histórico preciso',
  
  contexto: 'Conteúdo educacional sobre história do Egito Antigo criado por profissional com conhecimento técnico em egiptologia e história antiga. Demonstra metodologia científica rigorosa, cita fontes arqueológicas específicas (papiros de Merer, Mark Lehner, Zahi Hawass) e mantém transparência sobre limitações do conhecimento atual.',
  
  tecnicasDetectadas: [
    {
      nome: 'Autoridade Acadêmica Baseada em Evidências',
      score: 0.1,
      descricao: 'Cita fontes arqueológicas específicas (papiros de Merer, Mark Lehner, Zahi Hawass), demonstra metodologia científica rigorosa'
    },
    {
      nome: 'Contextualização Geográfica e Temporal',
      score: 0.2,
      descricao: 'Usa comparações didáticas apropriadas para facilitar compreensão sem simplificar excessivamente'
    },
    {
      nome: 'Reconhecimento de Limitações do Conhecimento',
      score: 0.1,
      descricao: 'Admite incertezas acadêmicas ("isso é muito debatido", "não há uma certeza absoluta"), demonstra humildade intelectual'
    },
    {
      nome: 'Desmistificação Respeitosa',
      score: 0.2,
      descricao: 'Aborda questões sobre escravidão nas pirâmides com nuance acadêmica, evitando sensacionalismo'
    },
    {
      nome: 'Uso de Analogias Didáticas',
      score: 0.2,
      descricao: 'Emprega comparações geográficas e históricas para facilitar entendimento sem distorcer fatos'
    }
  ],
  
  riscosIdentificados: 'Nenhum risco significativo identificado. O conteúdo segue padrões exemplares de comunicação científica ética.',
  
  fatoresMitigantes: 'Transparência metodológica total, citação de fontes específicas, reconhecimento explícito de limitações do conhecimento, evita sensacionalismo, mantém rigor acadêmico acessível.',
  
  conteudoOtimizado: `O conteúdo original já demonstra excelente qualidade ética e educacional. Uma versão otimizada mínima seria:

"Vamos explorar um pouco da história do Egito Antigo, uma das primeiras grandes civilizações que conhecemos através de evidências arqueológicas concretas.

**Baseando-nos em evidências históricas e arqueológicas**, sabemos que o Egito desenvolveu-se em torno do Nilo aproximadamente a partir de 3000 a.C., estabelecendo uma civilização complexa com administração sofisticada.

**É importante contextualizar geograficamente:** diferente da Mesopotâmia (atual região do Iraque), o Egito concentrava-se numa faixa estreita ao longo do Nilo, aproveitando suas cheias para agricultura.

**Uma descoberta arqueológica fascinante** são os papiros de Merer - possivelmente o documento egípcio mais antigo que temos - que registra o diário de um inspetor responsável por equipes de construção das pirâmides de Gizé (cerca de 2500 a.C.).

**Sobre a construção das pirâmides**, as evidências arqueológicas atuais sugerem que foram construídas por trabalhadores especializados, não por escravos como frequentemente se imagina. Egiptólogos renomados como Mark Lehner e Zahi Hawass defendem esta interpretação baseada em evidências dos sítios arqueológicos.

**É importante ressaltar** que ainda há debates acadêmicos sobre diversos aspectos da sociedade egípcia, incluindo a natureza exata das relações de trabalho da época."`,
  
  recomendacoes: [
    'Manter o padrão atual - o conteúdo já segue as melhores práticas de comunicação científica ética',
    'Continuar citando fontes específicas - referências a arqueólogos e descobertas concretas fortalecem credibilidade',
    'Manter reconhecimento de limitações - admitir incertezas acadêmicas demonstra integridade intelectual',
    'Usar como modelo para outros conteúdos de divulgação científica'
  ],
  
  nivelPrioridade: 'Baixo' as const,
  
  metaRevisao: {
    pontoMaisFraco: 'Nenhum ponto fraco significativo - conteúdo exemplar em todos os critérios avaliados.',
    resolucaoConflitos: 'Empirical > Explanatory > Logical > Consistent > Parsimony - Evidências arqueológicas sólidas sustentam todas as afirmações.',
    limitacoes: 'Análise limitada pela ausência de pontos problemáticos significativos. Framework DICE otimizado para detectar manipulação pode ser menos sensível para avaliar excelência educacional.',
    flexibilizacaoAplicada: 'Critérios mantidos rigorosos devido à natureza educacional do conteúdo e ausência de técnicas manipulativas.'
  },
  
  proximosPassos: [
    'Usar este conteúdo como exemplo de boas práticas em divulgação científica',
    'Monitorar se padrão de qualidade é mantido em conteúdos futuros',
    'Verificar se metodologia pode ser aplicada a outras áreas de conhecimento',
    'Avaliar impacto educacional na audiência',
    'Considerar como modelo para treinamento de comunicadores científicos'
  ]
};

export const danielLopezAnalysis = {
  id: 'daniel-lopez-001',
  titulo: 'Análise Tecnológica Escatológica',
  autor: 'Daniel Lopez',
  dataAnalise: '2024-12-20',
  tipoConteudo: 'video' as const,
  urlOrigem: 'https://www.youtube.com/watch?v=-yIgCX1wiFc',
  desafioUsuario: 'detecção de técnicas de influência em comunicação religiosa contemporânea',
  
  scoreDice: 0.6,
  classificacao: 'Tendencioso' as const,
  
  descoberta: 'Comunicação híbrida que combina análise geopolítica legítima com interpretação religiosa especulativa, criando zona cinzenta entre expertise acadêmica e advocacy teológico.',
  
  scoresValidacao: {
    logico: 65,
    consistente: 70,
    parcimonioso: 40,
    empirico: 75,
    explicativo: 45
  },
  
  confianca: 75,
  lacunas: 'Fronteira entre interpretação religiosa legítima e manipulação pseudocientífica permanece subjetiva',
  testes: 'Verificar se audiência entende distinção entre dados factuais e interpretação teológica; medir influência em decisões práticas vs. espirituais',
  
  contexto: 'Daniel Lopez, com formação acadêmica sólida (UFRJ, UERJ, UFF), aplica expertise geopolítica através de framework escatológico cristão para audiência de 1.3M+ inscritos. O conteúdo representa comunicação religiosa contemporânea que utiliza dados técnicos para validar interpretações proféticas.',
  
  tecnicasDetectadas: [
    {
      nome: 'Transferência de Autoridade Científica',
      score: 0.6,
      descricao: 'Utiliza credibilidade acadêmica em geopolítica para validar interpretações teológicas especulativas'
    },
    {
      nome: 'Framing Apocalíptico Determinístico',
      score: 0.7,
      descricao: 'Apresenta desenvolvimentos tecnológicos neutros como cumprimento profético inevitável'
    },
    {
      nome: 'Ancoragem em Dados Técnicos',
      score: 0.5,
      descricao: 'Combina informações verificáveis (Palantir, V2K, CBDCs) com especulações não fundamentadas'
    },
    {
      nome: 'Pressuposições de Conhecimento Privilegiado',
      score: 0.7,
      descricao: 'Afirma interpretar "corretamente" eventos através de framework religioso específico'
    }
  ],
  
  riscosIdentificados: 'Simplificação excessiva de complexidades tecnológicas, viés de confirmação religiosa extremo, e apresentação de interpretações especulativas como análise factual. Potencial para influenciar decisões práticas baseadas em interpretações proféticas não verificáveis.',
  
  fatoresMitigantes: 'Transparência sobre perspectiva cristã, formação acadêmica relevante em geopolítica, audiência que compartilha framework interpretativo, e objetivo educativo claro dentro do contexto religioso.',
  
  conteudoOtimizado: `"Como analista com formação em geopolítica e perspectiva cristã, gostaria de compartilhar reflexões sobre desenvolvimentos tecnológicos contemporâneos que podem ter implicações para cenários descritos nas Escrituras.

**Contextualizando minha abordagem:** Como cristão e analista, observo padrões tecnológicos que parecem convergir com descrições bíblicas sobre os últimos tempos, embora reconheça que interpretações proféticas envolvem discernimento e podem ter múltiplas perspectivas legítimas.

**Dados técnicos verificáveis:** Peter Thiel investiu em Palantir, Facebook e PayPal; tecnologia V2K foi documentada pela Wired Magazine; CBDCs são desenvolvimentos reais em moedas digitais.

**Minha interpretação à luz das Escrituras:** Observo que essas tecnologias têm potencial para sistemas descritos em Apocalipse 13. Esta é minha leitura pessoal baseada em minha compreensão das Escrituras.

**Importante ressaltar:** Outros estudiosos cristãos podem ter perspectivas diferentes sobre timing e aplicação profética. Tecnologias podem ser usadas tanto para bem quanto para mal. Recomendo discernimento pessoal através de oração e estudo bíblico."`,
  
  recomendacoes: [
    'Distinguir claramente dados técnicos de interpretações proféticas usando qualificadores como "minha interpretação bíblica sugere"',
    'Reconhecer diversidade interpretativa dentro do cristianismo - evitar apresentar uma leitura específica como única válida',
    'Incluir disclaimers sobre incerteza profética - mesmo dentro de framework religioso, timing é questão de discernimento',
    'Separar análise geopolítica secular de aplicação teológica especulativa'
  ],
  
  nivelPrioridade: 'Médio' as const,
  
  metaRevisao: {
    pontoMaisFraco: 'Critério de Parcimônia - explicações religiosas complexas são aplicadas onde fatores múltiplos e mundanos são mais prováveis.',
    resolucaoConflitos: 'Empirical > Logical > Explanatory > Parsimony - Dados técnicos corretos sustentam análise, mesmo com interpretações especulativas.',
    limitacoes: 'Fronteira entre interpretação religiosa legítima e manipulação pseudocientífica permanece subjetiva. Framework DICE otimizado para contexto secular pode subestimar validade de comunicação religiosa contextualizada.',
    flexibilizacaoAplicada: 'Critérios relaxados devido à natureza especializada do domínio religioso e transparência sobre framework interpretativo do autor.'
  },
  
  proximosPassos: [
    'Implementar separação clara entre dados factuais e interpretação teológica',
    'Adicionar disclaimers sobre diversidade interpretativa cristã',
    'Monitorar se audiência compreende distinções metodológicas',
    'Avaliar impacto em decisões práticas vs. preparação espiritual',
    'Refinar framework DICE para contextos religiosos especializados'
  ]
};