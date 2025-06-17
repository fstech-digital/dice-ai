import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Share2, Shield } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      percentage: '-60%',
      text: 'críticas negativas',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: TrendingUp,
      percentage: '+40%',
      text: 'retenção de audiência',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Share2,
      percentage: '+35%',
      text: 'compartilhamentos',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Shield,
      percentage: '+25%',
      text: 'credibilidade percebida',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
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
            Resultados Comprovados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dados reais de criadores que já usam o DICE em beta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`${benefit.bgColor} rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              <div className={`text-3xl font-bold ${benefit.color} mb-2`}>
                {benefit.percentage}
              </div>
              <p className="text-gray-700 font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}