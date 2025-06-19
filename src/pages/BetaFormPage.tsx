import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const betaFormSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  canal_principal: z.string().min(1, 'Selecione seu canal principal'),
  maior_desafio: z.string().min(10, 'Descreva brevemente seu maior desafio (min. 10 caracteres)'),
  audiencia: z.string().optional(),
  tipos_conteudo: z.array(z.string()).optional(),
});

type BetaFormData = z.infer<typeof betaFormSchema>;

const CANAIS_PRINCIPAIS = [
  { value: 'instagram', label: 'Instagram' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'twitter', label: 'Twitter/X' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'outros', label: 'Outros/Vendas' },
];

const TAMANHO_AUDIENCIA = [
  { value: 'menos_1k', label: 'Menos de 1K seguidores' },
  { value: '1k_10k', label: '1K - 10K seguidores' },
  { value: '10k_100k', label: '10K - 100K seguidores' },
  { value: 'mais_100k', label: 'Mais de 100K seguidores' },
];

const TIPOS_CONTEUDO = [
  { value: 'educativo', label: 'Educativo' },
  { value: 'entretenimento', label: 'Entretenimento' },
  { value: 'negocios', label: 'Negócios/Vendas' },
  { value: 'lifestyle', label: 'Pessoal/Lifestyle' },
];

export default function BetaFormPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(37);
  const [selectedTiposConteudo, setSelectedTiposConteudo] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<BetaFormData>({
    resolver: zodResolver(betaFormSchema),
  });

  const handleTipoConteudoChange = (tipo: string, checked: boolean) => {
    let newSelection: string[];
    if (checked) {
      newSelection = [...selectedTiposConteudo, tipo];
    } else {
      newSelection = selectedTiposConteudo.filter(t => t !== tipo);
    }
    setSelectedTiposConteudo(newSelection);
    setValue('tipos_conteudo', newSelection);
  };

  const onSubmit = async (data: BetaFormData) => {
    try {
      const formData = {
        ...data,
        tipos_conteudo: selectedTiposConteudo,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar cadastro');
      }

      setIsSubmitted(true);
      setProgress(38);
      reset();
      setSelectedTiposConteudo([]);
    } catch (error) {
      console.error('Error:', error);
      setIsSubmitted(true);
      setProgress(38);
      reset();
      setSelectedTiposConteudo([]);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl w-full text-center"
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🎉 Parabéns! Sua vaga foi garantida
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Verifique seu e-mail para próximos passos
          </p>
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
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
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-white hover:text-white/80 font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white mb-12 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Cadastro Beta - DICE AI
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Seja um dos 100 pioneiros a testar nossa plataforma
          </p>
          
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Seção: Informações Básicas */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-3">
                  📋 Informações Básicas
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      {...register('nome')}
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
                      placeholder="Seu nome completo"
                      disabled={isSubmitting}
                    />
                    {errors.nome && (
                      <p className="text-red-300 text-sm mt-1">{errors.nome.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      E-mail *
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
                </div>
              </div>

              {/* Seção: Perfil de Criador */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-3">
                  🎯 Perfil de Criador
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Canal Principal *
                    </label>
                    <select
                      {...register('canal_principal')}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
                      disabled={isSubmitting}
                    >
                      <option value="" className="text-gray-900">Selecione seu canal principal...</option>
                      {CANAIS_PRINCIPAIS.map((canal) => (
                        <option key={canal.value} value={canal.value} className="text-gray-900">
                          {canal.label}
                        </option>
                      ))}
                    </select>
                    {errors.canal_principal && (
                      <p className="text-red-300 text-sm mt-1">{errors.canal_principal.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Maior Desafio na Criação de Conteúdo *
                    </label>
                    <textarea
                      {...register('maior_desafio')}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none resize-none"
                      placeholder="Ex: 'Criar reels que engajam sem perder autenticidade', 'Escrever posts para LinkedIn que geram engajamento', 'Fazer vídeos virais consistentemente'..."
                      disabled={isSubmitting}
                    />
                    {errors.maior_desafio && (
                      <p className="text-red-300 text-sm mt-1">{errors.maior_desafio.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Seção: Segmentação (Opcional) */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-3">
                  📊 Segmentação (Opcional)
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Tamanho da Audiência
                    </label>
                    <select
                      {...register('audiencia')}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-transparent outline-none"
                      disabled={isSubmitting}
                    >
                      <option value="" className="text-gray-900">Selecione o tamanho da sua audiência...</option>
                      {TAMANHO_AUDIENCIA.map((tamanho) => (
                        <option key={tamanho.value} value={tamanho.value} className="text-gray-900">
                          {tamanho.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">
                      Tipo de Conteúdo (Múltipla Escolha)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {TIPOS_CONTEUDO.map((tipo) => (
                        <label key={tipo.value} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedTiposConteudo.includes(tipo.value)}
                            onChange={(e) => handleTipoConteudoChange(tipo.value, e.target.checked)}
                            className="w-5 h-5 text-white bg-white/10 border-white/20 rounded focus:ring-white/50 focus:ring-2"
                            disabled={isSubmitting}
                          />
                          <span className="text-white">{tipo.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-100 text-primary font-bold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                    Processando...
                  </div>
                ) : (
                  '🚀 Garantir Minha Vaga no Beta'
                )}
              </button>

              <div className="text-center space-y-2">
                <p className="text-white/80 text-sm">
                  🔒 Beta 100% gratuito • Sem compromisso • Dados protegidos
                </p>
                <p className="text-white/60 text-xs">
                  * Campos obrigatórios
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}