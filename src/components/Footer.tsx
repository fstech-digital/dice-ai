export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Termos de Uso
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Sobre o DICE
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Contato
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-gray-400 mb-2">
            © 2025 DICE AI. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 italic">
            "Não Deixe Seu Conteúdo na Sorte. Use DICE." 🎲
          </p>
        </div>
      </div>
    </footer>
  );
}