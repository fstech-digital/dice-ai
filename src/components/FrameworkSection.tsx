import { motion } from 'framer-motion';
import { Eye, UserCheck, Brain, Shield } from 'lucide-react';

export default function FrameworkSection() {
  const framework = [
    {
      letter: 'D',
      title: 'Deception',
      subtitle: 'Detecta falta de transparência',
      description: 'Identifica quando há objetivos ocultos ou conflitos de interesse não declarados',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      letter: 'I',
      title: 'Informed Consent',
      subtitle: 'Preserva autonomia de escolha',
      description: 'Evita pressão emocional excessiva que remove a capacidade de decisão consciente',
      icon: UserCheck,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      letter: 'C',
      title: 'Cognitive Bypass',
      subtitle: 'Protege pensamento crítico',
      description: 'Impede técnicas que contornam a análise racional e reflexão do público',
      icon: Brain,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      letter: 'E',
      title: 'Exploitation',
      subtitle: 'Previne exploração psicológica',
      description: 'Detecta uso antiético de vulnerabilidades emocionais e medos irracionais',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Framework DICE: 4 Dimensões de Análise Ética
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema científico que detecta manipulação em conteúdo digital e sugere melhorias éticas sem perder o impacto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {framework.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-gray-200"
            >
              <div className={`w-20 h-20 mx-auto mb-4 ${item.bgColor} rounded-full flex items-center justify-center`}>
                <span className={`text-4xl font-bold ${item.color}`}>
                  {item.letter}
                </span>
              </div>
              <div className={`${item.bgColor} rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {item.title}
              </h3>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                {item.subtitle}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}