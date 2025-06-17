import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">Compromisso com sua Privacidade</h3>
              </div>
              <p className="text-green-700">
                O DICE AI foi desenvolvido com princípios éticos. Seus dados são protegidos 
                e jamais compartilhados sem seu consentimento explícito.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Dados Coletados</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">📧 Dados de Cadastro</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Nome:</strong> Para personalizar sua experiência</li>
              <li><strong>Email:</strong> Para comunicação sobre o beta</li>
              <li><strong>Canal principal:</strong> Para entender seu perfil de criador</li>
              <li><strong>Maior desafio:</strong> Para melhorar nossos serviços</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">📝 Dados de Uso</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Conteúdo analisado:</strong> Textos enviados para análise</li>
              <li><strong>Dados técnicos:</strong> IP, navegador, dispositivo (apenas para segurança)</li>
              <li><strong>Cookies essenciais:</strong> Para funcionamento da plataforma</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Como Usamos seus Dados</h2>
            
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <Lock className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-blue-900 mb-2">Análise de Conteúdo</h4>
                <p className="text-blue-800 text-sm">Processamos seu texto para fornecer sugestões éticas</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <Eye className="h-8 w-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-purple-900 mb-2">Melhoria do Serviço</h4>
                <p className="text-purple-800 text-sm">Dados agregados ajudam a aprimorar algoritmos</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <Shield className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-semibold text-green-900 mb-2">Comunicação</h4>
                <p className="text-green-800 text-sm">Enviamos atualizações sobre o beta</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Proteção de Dados</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Criptografia:</strong> Todos os dados são criptografados em trânsito e repouso</li>
              <li><strong>Acesso limitado:</strong> Apenas desenvolvedores autorizados acessam dados</li>
              <li><strong>Retenção mínima:</strong> Mantemos dados apenas pelo tempo necessário</li>
              <li><strong>Backup seguro:</strong> Cópias de segurança protegidas</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Seus Direitos (LGPD)</h2>
            <p className="text-gray-700 mb-4">Conforme a Lei Geral de Proteção de Dados, você tem direito a:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Acesso:</strong> Saber quais dados temos sobre você</li>
              <li><strong>Correção:</strong> Corrigir dados incorretos</li>
              <li><strong>Exclusão:</strong> Solicitar remoção de seus dados</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato legível</li>
              <li><strong>Oposição:</strong> Rejeitar processamento para certas finalidades</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Compartilhamento de Dados</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <p className="text-red-800 font-semibold mb-2">❌ Nunca Compartilhamos:</p>
              <ul className="list-disc pl-6 text-red-700">
                <li>Dados pessoais com terceiros para marketing</li>
                <li>Conteúdo analisado com outras empresas</li>
                <li>Informações de contato com parceiros</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6">
              <strong>Exceções legais:</strong> Apenas se exigido por ordem judicial ou 
              para proteger direitos, propriedade ou segurança.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cookies e Tecnologias</h2>
            <p className="text-gray-700 mb-6">
              Usamos apenas cookies essenciais para funcionamento da plataforma. 
              Não utilizamos cookies de rastreamento ou publicidade.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contato</h2>
            <p className="text-gray-700 mb-6">
              Para exercer seus direitos ou esclarecer dúvidas sobre privacidade:
              <br />
              <strong>Email:</strong> <a href="mailto:contato@dice-ia.com" className="text-primary hover:underline">contato@dice-ia.com</a>
              <br />
              <strong>Assunto:</strong> "LGPD - Privacidade"
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Alterações</h2>
            <p className="text-gray-700 mb-6">
              Mudanças nesta política serão comunicadas com 30 dias de antecedência 
              por email para todos os usuários cadastrados.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <p className="text-blue-800 text-sm">
                <strong>🛡️ Garantia:</strong> Esta política reflete nosso compromisso com ética 
                e transparência. Se tiver dúvidas, estamos sempre disponíveis para esclarecimentos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}