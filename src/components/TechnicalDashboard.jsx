import { useEffect, useState } from 'react'
import { Gauge, ChartBar, ShieldCheck, FileDown } from 'lucide-react'

export default function TechnicalDashboard() {
  const [metrics, setMetrics] = useState(null)

  useEffect(() => {
    const load = async () => {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/metrics`)
      const data = await res.json()
      setMetrics(data)
    }
    load()
  }, [])

  const exportReport = async () => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const res = await fetch(`${baseUrl}/report`)
    const blob = new Blob([JSON.stringify(await res.json(), null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cap_project_report.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-2 text-blue-100/90 mb-6"><Gauge size={18}/> Technical Dashboard</div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            {!metrics ? (
              <div className="text-blue-200/70">Loading metrics…</div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(metrics).map(([k,v]) => (
                  <div key={k} className="bg-slate-900/60 border border-white/10 rounded-xl p-4">
                    <div className="text-blue-200/70 text-xs uppercase tracking-wide">{k.replaceAll('_',' ')}</div>
                    <div className="text-white text-2xl font-semibold mt-1">{typeof v === 'number' ? v.toLocaleString() : v}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <aside className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-white font-semibold mb-3"><ShieldCheck size={18}/> Security & Compliance</div>
            <ul className="text-sm text-blue-100/90 list-disc list-inside space-y-1">
              <li>Static analysis (SAST) and dependency checks</li>
              <li>License compliance and OSS policy enforcement</li>
              <li>Secrets scanning and artifact signing</li>
            </ul>
            <button onClick={exportReport} className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10"><FileDown size={16}/> Project Report</button>
          </aside>
        </div>
      </div>
    </section>
  )
}
