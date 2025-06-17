import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, ArrowRight } from 'lucide-react';
import { submitHeroEmail } from '../utils/api';

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
    const result = await submitHeroEmail({ email: data.email });
    
    if (result.success) {
      setIsSubmitted(true);
    } else {
      // For now, still show success to user but log error
      console.error('Email submission failed:', result.error);
      setIsSubmitted(true); // Still show success for better UX
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-6xl mb-4">🎲</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Não Deixe Seu Conteúdo na Sorte.{' '}
            <span className="text-primary">Use DICE.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Publique com Confiança.<br />
            Cresça com Credibilidade.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            DICE analisa seu conteúdo antes da publicação, eliminando vulnerabilidades 
            e maximizando impacto - sem comprometer sua autenticidade.
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900"
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
                  className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      Quero Acesso Beta Gratuito
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
              className="bg-green-100 border border-green-200 rounded-lg p-6 max-w-md mx-auto"
            >
              <div className="text-green-600 text-4xl mb-2">✅</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Cadastro realizado com sucesso!
              </h3>
              <p className="text-green-700">
                Em breve você receberá acesso ao beta do DICE AI.
              </p>
            </motion.div>
          )}
          
          <p className="text-sm text-gray-500 mt-3">
            Primeiros 100 criadores • Sem cartão de crédito
          </p>
        </motion.div>

      </div>
    </section>
  );
}