import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw } from 'lucide-react';

export default function DemoSimulator() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [inputText, setInputText] = useState('');

  const sampleTexts = [
    "Hoje vou falar sobre investimentos. Muita gente perde dinheiro porque não entende nada...",
    "Este produto é revolucionário! Todos deveriam comprar agora antes que seja tarde...",
    "Vou ensinar uma técnica que mudou minha vida financeira completamente..."
  ];

  const mockResults = {
    score: 4.2,
    clarity: 85,
    impact: 78,
    controversy: 15,
    suggestions: [
      "Considere suavizar a linguagem no início para ser mais inclusivo",
      "Adicione exemplos práticos para aumentar a credibilidade",
      "Inclua disclaimers sobre riscos financeiros"
    ]
  };

  const runAnalysis = async () => {
    if (!inputText.trim()) return;
    
    setIsAnalyzing(true);
    setShowResults(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const reset = () => {
    setShowResults(false);
    setIsAnalyzing(false);
    setInputText('');
  };

  const useExample = (text: string) => {
    setInputText(text);
    setShowResults(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Teste o DICE Agora
          </h2>
          <p className="text-xl text-gray-600">
            Experimente nossa análise com seu próprio conteúdo
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cole seu texto aqui:
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ex: Hoje vou falar sobre um assunto polêmico..."
              className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
              disabled={isAnalyzing}
            />
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">Ou use um exemplo:</p>
            <div className="flex flex-wrap gap-2">
              {sampleTexts.map((text, index) => (
                <button
                  key={index}
                  onClick={() => useExample(text)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                  disabled={isAnalyzing}
                >
                  Exemplo {index + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button
              onClick={runAnalysis}
              disabled={!inputText.trim() || isAnalyzing}
              className="flex-1 bg-primary hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Analisando...
                </>
              ) : (
                <>
                  <Play className="h-5 w-5" />
                  Analisar com DICE
                </>
              )}
            </button>
            
            <button
              onClick={reset}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence>
            {isAnalyzing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-6"
              >
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    <span className="font-medium text-primary">Análise em andamento...</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white rounded p-2 text-sm">✓ Verificando clareza da mensagem</div>
                    <div className="bg-white rounded p-2 text-sm">✓ Analisando potencial de controvérsia</div>
                    <div className="bg-white rounded p-2 text-sm">✓ Calculando impacto emocional</div>
                  </div>
                </div>
              </motion.div>
            )}

            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold text-primary">
                    {mockResults.score}/5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Score DICE</h3>
                    <p className="text-gray-600">Ótimo! Seu conteúdo está bem otimizado</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{mockResults.clarity}%</div>
                    <div className="text-sm text-gray-600">Clareza</div>
                  </div>
                  <div className="bg-white rounded p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{mockResults.impact}%</div>
                    <div className="text-sm text-gray-600">Impacto</div>
                  </div>
                  <div className="bg-white rounded p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">{mockResults.controversy}%</div>
                    <div className="text-sm text-gray-600">Controvérsia</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Sugestões de Melhoria:</h4>
                  <ul className="space-y-2">
                    {mockResults.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-sm">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}