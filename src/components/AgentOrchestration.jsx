import { useEffect, useState } from 'react'
import { Users, Code2, Shield, FlaskConical, GitMerge, Cog, CheckCircle2, XCircle } from 'lucide-react'

const phases = [
  { key: 'frontend', label: 'Frontend', icon: Code2 },
  { key: 'backend', label: 'Backend', icon: Code2 },
  { key: 'data', label: 'Data', icon: Cog },
  { key: 'testing', label: 'Testing', icon: FlaskConical },
  { key: 'integration', label: 'Integration', icon: GitMerge },
  { key: 'devops', label: 'DevOps', icon: Shield },
]

function StatusPill({ status }) {
  const map = {
    queued: 'bg-white/5 text-blue-200',
    running: 'bg-amber-500/20 text-amber-200',
    passed: 'bg-emerald-500/20 text-emerald-200',
    failed: 'bg-rose-500/20 text-rose-200',
  }
  return <span className={`px-2 py-1 rounded-full text-xs ${map[status]}`}>{status}</span>
}

export default function AgentOrchestration() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const run = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/pipeline/start`)
      const data = await res.json()
      // progressively reveal events
      const evs = data.events
      for (let i = 0; i < evs.length; i++) {
        await new Promise(r => setTimeout(r, 600))
        setEvents(prev => [...prev, { ...evs[i], reveal: true }])
      }
    }
    run()
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-blue-100/90 mb-6"><Users size={18}/> Agent Team Orchestration</div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="space-y-3">
              {events.map((e, idx) => (
                <div key={idx} className="flex items-center justify-between bg-slate-900/60 border border-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-violet-500"/>
                    <div>
                      <div className="text-white font-medium">{e.stage}</div>
                      <div className="text-xs text-blue-200/70">{e.message}</div>
                    </div>
                  </div>
                  <StatusPill status={e.status} />
                </div>
              ))}
            </div>
          </div>
          <aside className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="font-semibold text-white mb-2">Live Code & Reviews</div>
            <div className="text-xs text-blue-200/80">As stages run, CAP previews code changes, runs security checks (SAST), and performs automated reviews. Tests execute with animated pass/fail signals.</div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {phases.map(p => (
                <div key={p.key} className="bg-slate-900/60 border border-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-blue-100/90"><p.icon size={16}/> {p.label}</div>
                  <div className="mt-2 text-xs text-blue-200/60">Queued</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
