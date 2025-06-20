import { motion } from 'framer-motion';
import { ExternalLink, Brain, Target, CheckCircle, BarChart3, AlertCircle, RefreshCw } from 'lucide-react';

interface ValidationScore {
  logico: number;
  consistente: number;
  parcimonioso: number;
  empirico: number;
  explicativo: number;
}

interface DetectedTechnique {
  nome: string;
  score: number;
  descricao: string;
}

interface MetaReview {
  pontoMaisFraco: string;
  resolucaoConflitos: string;
  limitacoes: string;
  flexibilizacaoAplicada?: string;
}

interface AnalysisData {
  id: string;
  titulo: string;
  autor: string;
  dataAnalise: string;
  tipoConteudo: 'video' | 'artigo' | 'post' | 'email' | 'outro';
  urlOrigem?: string;
  desafioUsuario?: string;
  
  scoreDice: number;
  classificacao: 'Ético' | 'Neutro' | 'Tendencioso' | 'Manipulativo' | 'Prejudicial';
  
  descoberta: string;
  scoresValidacao: ValidationScore;
  confianca: number;
  lacunas?: string;
  testes?: string;
  
  contexto: string;
  tecnicasDetectadas: DetectedTechnique[];
  riscosIdentificados: string;
  fatoresMitigantes?: string;
  
  conteudoOtimizado: string;
  
  recomendacoes: string[];
  nivelPrioridade: 'Baixo' | 'Médio' | 'Alto' | 'Crítico';
  
  metaRevisao?: MetaReview;
  
  proximosPassos: string[];
}

const getScoreColor = (score: number): string => {
  if (score >= 0.8) return 'bg-green-500';
  if (score >= 0.6) return 'bg-yellow-500';
  if (score >= 0.4) return 'bg-orange-500';
  return 'bg-red-500';
};

const getClassificationColor = (classification: string): string => {
  switch (classification) {
    case 'Ético': return 'text-green-600 bg-green-50';
    case 'Neutro': return 'text-blue-600 bg-blue-50';
    case 'Tendencioso': return 'text-yellow-600 bg-yellow-50';
    case 'Manipulativo': return 'text-orange-600 bg-orange-50';
    case 'Prejudicial': return 'text-red-600 bg-red-50';
    default: return 'text-gray-600 bg-gray-50';
  }
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

interface AnalysisProps {
  data: AnalysisData;
  betaTesterName?: string;
}

export default function AnalysisReport({ data, betaTesterName = 'Usuário' }: AnalysisProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-deep-navy to-dice-gold text-white">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center mb-4"
          >
            <img 
              src="/dice-logo.png" 
              alt="DICE AI" 
              className="h-24 w-auto"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-light-gold mb-2"
          >
            Relatório de Análise Personalizada
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light-gold opacity-90"
          >
            Ethical Content Intelligence
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Personal Greeting */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-deep-navy mb-4">Olá {betaTesterName}! 👋</h2>
          <p className="text-gray-600 mb-4">
            Aqui está a análise DICE AI para o conteúdo <strong>"{data.titulo}"</strong> de <strong>{data.autor}</strong>.
            {data.desafioUsuario && (
              <span> Nossa análise focou especificamente em: <em>"{data.desafioUsuario}"</em></span>
            )}
          </p>
          
          {/* Source Link */}
          {data.urlOrigem && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4 border-deep-navy">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <strong>🎥 Conteúdo analisado:</strong>
                <a 
                  href={data.urlOrigem} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-deep-navy hover:text-dice-gold transition-colors flex items-center gap-1"
                >
                  Ver original <ExternalLink size={16} />
                </a>
              </p>
            </div>
          )}
          
          <div className="mt-4 text-sm text-gray-500">
            Análise realizada em {formatDate(data.dataAnalise)}
          </div>
        </motion.div>

        {/* DICE Score */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="bg-gray-50 border-l-4 border-dice-gold p-6 rounded-lg">
            <h3 className="text-xl font-bold text-deep-navy flex items-center gap-3 mb-4">
              <Brain className="text-dice-gold" />
              Score DICE
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 bg-gray-200 h-3 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${data.scoreDice * 100}%` }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className={`h-full rounded-full ${getScoreColor(data.diceScore)}`}
                />
              </div>
              <span className="font-bold text-lg text-gray-800">
                {data.scoreDice.toFixed(1)}/1.0
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Classificação:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getClassificationColor(data.classificacao)}`}>
                {data.classificacao}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Validation Framework */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="bg-yellow-50 border-2 border-dice-gold p-6 rounded-lg">
            <h3 className="text-lg font-bold text-deep-navy flex items-center gap-3 mb-4">
              <BarChart3 className="text-dice-gold" />
              Framework de Validação Analítica
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Descoberta:</strong> {data.descoberta}
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Scores de Validação:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Object.entries(data.scoresValidacao).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-white rounded border">
                      <span className="capitalize font-medium">{key}:</span>
                      <span className="font-bold text-deep-navy">{value}%</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700">
                <strong>Confiança:</strong> {data.confianca}%
              </p>
              
              {data.lacunas && (
                <p className="text-gray-700">
                  <strong>Lacunas:</strong> {data.lacunas}
                </p>
              )}
              
              {data.testes && (
                <p className="text-gray-700">
                  <strong>Testes:</strong> {data.testes}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Detailed Analysis */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h3 className="text-lg font-bold text-deep-navy mb-4">🔍 Análise Detalhada</h3>
          
          <div className="space-y-4 text-gray-700">
            <p><strong>Contexto Identificado:</strong> {data.contexto}</p>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Técnicas Detectadas:</h4>
              <ul className="space-y-3">
                {data.tecnicasDetectadas.map((technique, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                    <AlertCircle size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{technique.nome} [Score {technique.score.toFixed(1)}]:</strong> {technique.descricao}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p><strong>Riscos Identificados:</strong> {data.riscosIdentificados}</p>
            
            {data.fatoresMitigantes && (
              <p><strong>Fatores Mitigantes:</strong> {data.fatoresMitigantes}</p>
            )}
          </div>
        </motion.div>

        {/* Optimized Version */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-green-800 flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-600" />
              Versão Otimizada
            </h3>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {data.conteudoOtimizado}
            </div>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="bg-yellow-50 border-2 border-dice-gold p-6 rounded-lg">
            <h3 className="text-lg font-bold text-deep-navy flex items-center gap-3 mb-4">
              <Target className="text-dice-gold" />
              Recomendações Específicas
            </h3>
            <ul className="space-y-2 text-gray-700 mb-4">
              {data.recomendacoes.map((recommendation, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-dice-gold mt-1">•</span>
                  {recommendation}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">Nível de Prioridade:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                data.nivelPrioridade === 'Crítico' ? 'text-red-600 bg-red-50' :
                data.nivelPrioridade === 'Alto' ? 'text-orange-600 bg-orange-50' :
                data.nivelPrioridade === 'Médio' ? 'text-yellow-600 bg-yellow-50' :
                'text-green-600 bg-green-50'
              }`}>
                {data.nivelPrioridade}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Meta-Review */}
        {data.metaRevisao && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
          >
            <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-3 mb-4">
                <RefreshCw className="text-gray-600" />
                Meta-Review
              </h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Ponto mais fraco:</strong> {data.metaRevisao.pontoMaisFraco}</p>
                <p><strong>Resolução de Conflitos:</strong> {data.metaRevisao.resolucaoConflitos}</p>
                <p><strong>Limitações da Análise:</strong> {data.metaRevisao.limitacoes}</p>
                {data.metaRevisao.flexibilizacaoAplicada && (
                  <p><strong>Flexibilização Aplicada:</strong> {data.metaRevisao.flexibilizacaoAplicada}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Next Steps */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h3 className="text-lg font-bold text-deep-navy mb-4">📋 Próximos Passos:</h3>
          <ol className="space-y-2 text-gray-700">
            {data.proximosPassos.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-deep-navy text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-gray-50 rounded-lg p-8 text-center"
        >
          <p className="text-gray-600 mb-4">
            Para dúvidas, sugestões ou feedback sobre a análise
          </p>
          <a 
            href="mailto:contato@dice-ia.com"
            className="inline-flex items-center gap-2 bg-dice-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-dice-gold transition-colors"
          >
            📧 Entrar em Contato
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-deep-navy text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/dice-logo.png" 
              alt="DICE AI" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-light-gold mb-2">
            <strong>Ethical Content Intelligence</strong>
          </p>
          <p className="text-gray-400 text-sm mb-4">
            Protegendo autonomia cognitiva na era digital
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="https://dice-ia.com" className="text-dice-gold hover:text-light-gold transition-colors">
              Website
            </a>
            <a href="mailto:contato@dice-ia.com" className="text-dice-gold hover:text-light-gold transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}