import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona a análise?',
      answer: 'DICE usa inteligência artificial avançada para analisar seu conteúdo em 4 dimensões: clareza, impacto, vulnerabilidades e oportunidades. Em segundos, você recebe sugestões práticas para melhorar sem perder sua autenticidade.'
    },
    {
      question: 'É manipulação disfarçada?',
      answer: 'Absolutamente não. DICE foi criado com princípios éticos rígidos. Nunca sugerimos manipulação ou distorção da verdade. Nosso objetivo é ajudar você a comunicar suas ideias de forma mais clara e defensável, sempre preservando sua mensagem original.'
    },
    {
      question: 'Quanto vai custar após o beta?',
      answer: 'Os 100 primeiros criadores terão acesso gratuito durante todo o período beta (3-6 meses) e um desconto vitalício de 50% quando lançarmos. O preço final será definido com base no feedback dos usuários beta.'
    },
    {
      question: 'Funciona para vídeo também?',
      answer: 'Atualmente, DICE analisa textos, roteiros e scripts. Estamos desenvolvendo análise de vídeo e áudio que será lançada em breve para usuários beta testarem primeiro.'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Sim, totalmente. Seguimos as normas da LGPD e nunca compartilhamos seu conteúdo. Toda análise é processada de forma segura e seus dados são criptografados.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o DICE AI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}