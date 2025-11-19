import { Award, HelpCircle, Download } from 'lucide-react'

const faqs = [
  { q: 'Is this real integration with Azure DevOps?', a: 'This demo simulates authenticated ADO events and pipelines with accurate fields. Production connects via OAuth PAT and organization/project scope.' },
  { q: 'How secure is CAP?', a: 'All inputs are processed under secure policies. Security checks include SAST, dependency audits, and secrets scanning across pipelines.' },
  { q: 'Can agents scale to new modules?', a: 'Yes — agents can be extended per domain or repository. The orchestration dynamically adds lanes for new services.' },
]

export default function ScienceAndFAQ() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-white font-semibold mb-3"><Award size={18}/> Science‑backed Results</div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-white/10 rounded-xl p-4">
                <div className="text-blue-200/70 text-xs">Development Time Reduced</div>
                <div className="text-white text-2xl font-semibold">Up to 60%</div>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl p-4">
                <div className="text-blue-200/70 text-xs">Real‑time Compliance</div>
                <div className="text-white text-2xl font-semibold">Security checks</div>
              </div>
              <div className="bg-slate-900/60 border border-white/10 rounded-xl p-4">
                <div className="text-blue-200/70 text-xs">Scalability</div>
                <div className="text-white text-2xl font-semibold">1‑click agent extension</div>
              </div>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10"><Download size={16}/> Download Demo Pack</button>
          </div>
          <aside className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-white font-semibold mb-3"><HelpCircle size={18}/> FAQ</div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i}>
                  <div className="text-blue-100/90 font-medium">{f.q}</div>
                  <div className="text-blue-200/80 text-sm">{f.a}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
