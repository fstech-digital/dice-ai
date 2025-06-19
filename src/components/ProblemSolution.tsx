import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Trash2, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: AlertTriangle,
      stat: '78%',
      text: 'do conteúdo digital contém elementos manipulativos',
    },
    {
      icon: Clock,
      stat: '65%',
      text: 'das pessoas não conseguem identificar manipulação',
    },
    {
      icon: Trash2,
      stat: '84%',
      text: 'das decisões são influenciadas por conteúdo enviesado',
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
          <h2 className="text-3xl sm:text-4xl font-montserrat font-bold text-deep-navy mb-4">
            O Desafio da Comunicação Digital
          </h2>
          <p className="text-xl font-open-sans text-medium-navy max-w-2xl mx-auto">
            Na era digital, a manipulação de conteúdo compromete a autonomia cognitiva humana. É hora de democratizar a detecção.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-light-gold rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <problem.icon className="h-8 w-8 text-medium-navy" />
              </div>
              <div className="text-4xl font-montserrat font-bold text-deep-navy mb-2">{problem.stat}</div>
              <p className="text-medium-navy font-open-sans text-lg">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-deep-navy to-medium-navy rounded-2xl p-8 sm:p-12 text-center text-white"
        >
          <div className="text-5xl mb-6">🎯</div>
          <h3 className="text-2xl sm:text-3xl font-montserrat font-bold mb-4">
            DICE: Ethical Content Intelligence
          </h3>
          <p className="text-xl font-open-sans opacity-90 mb-8 max-w-2xl mx-auto">
            Sistema dual pioneiro que detecta e neutraliza manipulação digital em tempo real, 
            protegendo sua autonomia cognitiva e promovendo comunicação transparente.
          </p>
          <div className="flex items-center justify-center gap-4 text-lg font-montserrat font-medium">
            <span>Manipulação Detectada</span>
            <ArrowRight className="h-6 w-6" />
            <span>Comunicação Consciente</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}