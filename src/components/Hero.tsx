import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, ArrowRight } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().email('Email inválido'),
});

type EmailForm = z.infer<typeof emailSchema>;

export default function Hero() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailForm) => {
    try {
      const response = await fetch('/api/hero-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar email');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitted(true);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-soft-gray to-light-gold flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="mb-6">
            <img src="/dice-logo.png" alt="DICE AI Logo" className="h-[200px] w-auto mx-auto" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold text-deep-navy mb-4">
            Não jogue dados com seu conteúdo.{' '}
            <span className="text-dice-gold">Use DICE.</span>
          </h1>
          <p className="text-lg font-open-sans font-light text-medium-navy mb-6">ETHICAL CONTENT INTELLIGENCE</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-montserrat font-medium text-deep-navy mb-4">
            Protegendo autonomia cognitiva na era digital
          </h2>
          <p className="text-lg sm:text-xl font-open-sans text-medium-navy max-w-3xl mx-auto">
            Primeira detecção de manipulação em tempo real. Democratizando o acesso à detecção de manipulação e promovendo comunicação transparente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Seu melhor email"
                      className="w-full pl-10 pr-4 py-3 border border-medium-navy rounded-lg focus:ring-2 focus:ring-dice-gold focus:border-transparent outline-none text-deep-navy font-open-sans"
                      disabled={isSubmitting}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-dice-gold hover:bg-yellow-600 text-deep-navy font-montserrat font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Acesso Beta DICE
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-light-gold border border-dice-gold rounded-lg p-6 max-w-md mx-auto"
            >
              <div className="text-dice-gold text-4xl mb-2">✅</div>
              <h3 className="text-lg font-montserrat font-medium text-deep-navy mb-2">
                Cadastro realizado com sucesso!
              </h3>
              <p className="text-medium-navy font-open-sans">
                Em breve você receberá acesso ao beta do DICE AI.
              </p>
            </motion.div>
          )}
          
          <p className="text-sm text-medium-navy font-open-sans mt-3">
            Primeiros 100 criadores • Sem cartão de crédito
          </p>
        </motion.div>

      </div>
    </section>
  );
}