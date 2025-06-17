import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Trash2, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: AlertTriangle,
      stat: '73%',
      text: 'dos criadores vivem com medo de críticas',
    },
    {
      icon: Clock,
      stat: '68%',
      text: 'gastam tempo excessivo editando por insegurança',
    },
    {
      icon: Trash2,
      stat: '54%',
      text: 'já deletaram conteúdo valioso após backlash',
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
            O Problema que Todo Criador Enfrenta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Criar conteúdo hoje é navegar em um campo minado. Uma palavra errada pode destruir sua reputação.
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
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <problem.icon className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-red-600 mb-2">{problem.stat}</div>
              <p className="text-gray-700 text-lg">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 sm:p-12 text-center text-white"
        >
          <div className="text-5xl mb-6">🎯</div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            DICE Resolve Isso com IA Ética
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Nossa inteligência artificial analisa seu conteúdo em múltiplas dimensões: 
            impacto emocional, clareza, potencial controverso e efetividade da mensagem.
          </p>
          <div className="flex items-center justify-center gap-4 text-lg font-semibold">
            <span>Problema Identificado</span>
            <ArrowRight className="h-6 w-6" />
            <span>Solução Inteligente</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}