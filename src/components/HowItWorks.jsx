import { Workflow, Settings2, Shield, Rocket, ClipboardList, Repeat } from 'lucide-react'

const steps = [
  { title: 'Requirement Extraction', desc: 'Connects to Azure DevOps or upload — NLP parses stories, dependencies, and sprint goals.', icon: ClipboardList },
  { title: 'AI Task Assignment', desc: 'Agentic specialization allocates tasks across frontend, backend, data, testing, and DevOps.', icon: Settings2 },
  { title: 'Autonomous Code Generation / Review', desc: 'Generates code, runs static analysis and security checks for quality.', icon: Shield },
  { title: 'Automated Testing & CI', desc: 'Executes unit/integration tests and triggers pipeline events.', icon: Workflow },
  { title: 'Secure Deployment', desc: 'Builds and signs artifacts, promotes through environments.', icon: Rocket },
  { title: 'Continuous Optimization', desc: 'Monitors, detects bottlenecks, and recommends improvements.', icon: Repeat },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-white text-2xl font-bold mb-6">How CAP Works — Steps</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-blue-100/90 mb-2"><s.icon size={18}/> {s.title}</div>
              <p className="text-blue-200/80 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
