import { useParams } from 'react-router-dom';
import AnalysisReport from '../components/AnalysisReport';
import { danielLopezAnalysis, egiptologiaAnalysis } from '../data/sampleAnalysis';

// Mock database - em produção, seria uma consulta à API
const analysisDatabase: Record<string, any> = {
  'daniel-lopez-001': danielLopezAnalysis,
  'egiptologia-educacional-001': egiptologiaAnalysis
};

export default function AnalysisPage() {
  const { analysisId } = useParams<{ analysisId: string }>();
  
  const analysisData = analysisId ? analysisDatabase[analysisId] : null;
  
  if (!analysisData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">Análise não encontrada</h1>
          <p className="text-gray-600 mb-8">A análise solicitada não existe ou foi removida.</p>
          <a 
            href="/" 
            className="bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-700 transition-colors"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    );
  }
  
  return <AnalysisReport data={analysisData} />;
}