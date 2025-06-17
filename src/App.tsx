import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/termos" element={<TermsOfService />} />
      <Route path="/privacidade" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
