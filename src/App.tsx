import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import HowItWorks from './components/HowItWorks'
import FrameworkSection from './components/FrameworkSection'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import BetaForm from './components/BetaForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <FrameworkSection />
      <Benefits />
      <Testimonials />
      <FAQ />
      <BetaForm />
      <Footer />
    </div>
  )
}

export default App
