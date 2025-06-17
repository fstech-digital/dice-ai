import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      content: "DICE me deu a confiança que eu precisava. Agora publico sem medo e meu canal cresceu 300% em 3 meses.",
      author: "Prof. Gabriel",
      role: "Professor de Geopolítica",
      avatar: "PG",
      stats: "+300% crescimento"
    },
    {
      content: "Como jornalista independente, precisava de algo assim. DICE preserva minha voz enquanto me protege.",
      author: "Marina Silva",
      role: "Jornalista Independente", 
      avatar: "MS",
      stats: "Zero polêmicas"
    },
    {
      content: "Reduzi críticas negativas em 60% e aumentei retenção em 40%. Os números falam por si.",
      author: "Rafael Costa",
      role: "Coach de Negócios",
      avatar: "RC",
      stats: "-60% críticas"
    }
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
            Criadores Beta Já Validaram
          </h2>
          <p className="text-xl text-gray-600">
            Resultados reais de quem já usa o DICE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow"
            >
              <Quote className="h-8 w-8 text-primary opacity-50 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {testimonial.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Resultados Médios dos Usuários Beta
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">+40%</div>
                <div className="text-gray-700">Engajamento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">-60%</div>
                <div className="text-gray-700">Críticas Negativas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
                <div className="text-gray-700">Menos Tempo Editando</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}