import { motion } from 'framer-motion';
import { FileText, Bot, BarChart3, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      number: '1',
      title: 'Cole seu roteiro',
      description: 'Insira o texto do seu vídeo, podcast ou post',
    },
    {
      icon: Bot,
      number: '2',
      title: 'IA analisa em 30s',
      description: 'Nossa IA processa o conteúdo em múltiplas dimensões',
    },
    {
      icon: BarChart3,
      number: '3',
      title: 'Receba score + sugestões',
      description: 'Veja métricas detalhadas e melhorias específicas',
    },
    {
      icon: Sparkles,
      number: '4',
      title: 'Publique com confiança',
      description: 'Lance seu conteúdo sabendo que está otimizado',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como o DICE Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo simples e poderoso que transforma insegurança em confiança
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-primary text-sm font-bold mb-2">PASSO {step.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary opacity-30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}