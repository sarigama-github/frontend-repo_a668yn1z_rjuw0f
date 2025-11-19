import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StoryInput from './components/StoryInput'
import AgentOrchestration from './components/AgentOrchestration'
import TechnicalDashboard from './components/TechnicalDashboard'
import HowItWorks from './components/HowItWorks'
import ScienceAndFAQ from './components/ScienceAndFAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <Hero />
      <StoryInput />
      <AgentOrchestration />
      <TechnicalDashboard />
      <HowItWorks />
      <ScienceAndFAQ />
      <Footer />
    </div>
  )
}

export default App
