import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import BetaFormPage from './pages/BetaFormPage'
import AnalysisPage from './pages/AnalysisPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beta" element={<BetaFormPage />} />
      {/* Rota para análises DICE */}
      <Route path="/analise/:analysisId" element={<AnalysisPage />} />
      <Route path="/termos" element={<TermsOfService />} />
      <Route path="/privacidade" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
