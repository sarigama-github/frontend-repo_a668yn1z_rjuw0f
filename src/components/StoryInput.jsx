import { useState } from 'react'
import { Files, UploadCloud, ShieldCheck } from 'lucide-react'

export default function StoryInput({ onImport }) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (!text.trim()) return
    setLoading(true)
    const lines = text.split('\n').filter(Boolean)
    const items = lines.map((l, i) => ({
      title: l.slice(0, 60),
      description: l,
      acceptance_criteria: ["Defined by CAP agents"],
      sprint: "Sprint 1",
      priority: "Medium",
      tags: ["imported"],
    }))

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/stories/import`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'manual', items }),
      })
      const data = await res.json()
      onImport?.(data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="launch" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4 text-blue-100/90"><Files size={18}/> User Story Input (Azure DevOps / Upload)</div>
          <textarea value={text} onChange={e=>setText(e.target.value)} rows={8} placeholder="Paste ADO user stories or type sample stories here...\nAs a user, I want to sign in with SSO so that my sessions are secure.\nAs an admin, I need a dashboard to approve deployments..."
            className="w-full bg-slate-900/60 border border-white/10 rounded-xl p-4 text-blue-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-blue-200/40"/>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={submit} disabled={loading} className="px-5 py-2.5 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-white font-semibold disabled:opacity-60">
              {loading ? 'Importing…' : 'Import Stories'}
            </button>
            <div className="text-xs text-blue-200/80 flex items-center gap-2"><ShieldCheck size={14}/> Secure, compliant processing</div>
          </div>
        </div>
        <aside className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="font-semibold text-white mb-2">Agent Assistant</div>
          <p className="text-blue-100/90 text-sm">CAP deciphers requirements and assigns tasks to expert AI agents. All input is secure and compliant.</p>
          <div className="mt-4 text-xs text-blue-200/80">Animated parsing shows dependencies, modules, and sprint goals.</div>
        </aside>
      </div>
    </section>
  )
}
