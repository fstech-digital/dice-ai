import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao início
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 mb-6">
              Ao acessar e usar o DICE AI, você concorda com estes Termos de Uso. 
              Se não concordar, não utilize nossos serviços.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-700 mb-6">
              O DICE AI é um sistema de análise cognitiva de conteúdo que utiliza inteligência artificial 
              para ajudar criadores a otimizar seus conteúdos de forma ética, identificando potenciais 
              vulnerabilidades e sugerindo melhorias.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Programa Beta</h2>
            <p className="text-gray-700 mb-6">
              Durante o período beta, o serviço é oferecido gratuitamente aos primeiros 100 usuários. 
              O acesso beta pode ser limitado ou modificado sem aviso prévio.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Uso Responsável</h2>
            <p className="text-gray-700 mb-4">Você se compromete a:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Usar o serviço apenas para fins legítimos</li>
              <li>Não enviar conteúdo ilegal, ofensivo ou malicioso</li>
              <li>Respeitar direitos autorais e propriedade intelectual</li>
              <li>Não tentar burlar ou hackear o sistema</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Propriedade Intelectual</h2>
            <p className="text-gray-700 mb-6">
              O DICE AI, incluindo seu algoritmo, interface e marca, são propriedade da DICE AI. 
              O conteúdo analisado permanece de propriedade do usuário.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 mb-6">
              O DICE AI fornece sugestões baseadas em análise automatizada. As decisões finais 
              sobre o conteúdo são sempre do usuário. Não nos responsabilizamos por 
              consequências do uso das sugestões.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Modificações</h2>
            <p className="text-gray-700 mb-6">
              Podemos modificar estes termos a qualquer momento. Mudanças significativas 
              serão comunicadas por email ou na plataforma.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contato</h2>
            <p className="text-gray-700 mb-6">
              Para dúvidas sobre estes termos, entre em contato:
              <br />
              Email: <a href="mailto:contato@dice-ia.com" className="text-primary hover:underline">contato@dice-ia.com</a>
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-blue-800 text-sm">
                <strong>Nota:</strong> Estes termos são válidos durante o período beta. 
                Termos definitivos serão apresentados antes do lançamento comercial.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}