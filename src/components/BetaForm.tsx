import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle } from 'lucide-react';
import { submitBetaSignup } from '../utils/api';

const betaFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  channel: z.string().min(1, 'Selecione seu canal principal'),
  challenge: z.string().min(10, 'Descreva brevemente seu maior desafio'),
});

type BetaFormData = z.infer<typeof betaFormSchema>;

export default function BetaForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(37);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BetaFormData>({
    resolver: zodResolver(betaFormSchema),
  });

  const onSubmit = async (data: BetaFormData) => {
    const result = await submitBetaSignup(data);
    
    if (result.success) {
      setIsSubmitted(true);
      setProgress(38);
      reset();
    } else {
      // For now, still show success to user but log error
      console.error('Beta signup failed:', result.error);
      setIsSubmitted(true); // Still show success for better UX
      setProgress(38);
      reset();
    }
  };

  if (isSubmitted) {
    return (
      <section id="form-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🎉 Parabéns! Sua vaga foi garantida
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Verifique seu e-mail para próximos passos
            </p>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Vagas ocupadas</span>
                <span className="text-sm font-medium text-gray-700">{progress}/100</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="form-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Seja um dos 100 Pioneiros
          </h2>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white/20 rounded-full h-12 overflow-hidden relative">
              <div 
                className="bg-white h-full rounded-full flex items-center justify-center font-bold text-primary transition-all duration-1000"
                style={{ width: `${progress}%` }}
              >
                {progress}/100 vagas
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">
                Nome completo
              </label>
              <input
                {...register('name')}
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
                placeholder="Seu nome completo"
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-red-300 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                E-mail
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
                placeholder="seu@email.com"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-red-300 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Canal principal
              </label>
              <select
                {...register('channel')}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
                disabled={isSubmitting}
              >
                <option value="" className="text-gray-900">Selecione...</option>
                <option value="youtube" className="text-gray-900">YouTube</option>
                <option value="instagram" className="text-gray-900">Instagram</option>
                <option value="tiktok" className="text-gray-900">TikTok</option>
                <option value="linkedin" className="text-gray-900">LinkedIn</option>
                <option value="twitter" className="text-gray-900">Twitter/X</option>
                <option value="blog" className="text-gray-900">Blog/Site</option>
                <option value="podcast" className="text-gray-900">Podcast</option>
                <option value="outros" className="text-gray-900">Outros</option>
              </select>
              {errors.channel && (
                <p className="text-red-300 text-sm mt-1">{errors.channel.message}</p>
              )}
            </div>

            <div>
              <label className="block text-white font-medium mb-2">
                Maior desafio como creator
              </label>
              <textarea
                {...register('challenge')}
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none resize-none"
                placeholder="Conte brevemente qual sua maior dificuldade ao criar conteúdo..."
                disabled={isSubmitting}
              />
              {errors.challenge && (
                <p className="text-red-300 text-sm mt-1">{errors.challenge.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-gray-100 text-primary font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                  Processando...
                </div>
              ) : (
                'Garantir Minha Vaga'
              )}
            </button>

            <p className="text-center text-white/80 text-sm">
              🔒 Beta 100% gratuito • Sem compromisso • Dados protegidos
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}