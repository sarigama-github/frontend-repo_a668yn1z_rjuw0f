import Spline from '@splinetool/react-spline'
import { Quote } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-blue-100 text-xs mb-6">
          IIT Bombay × Azure • Enterprise-grade agentic automation
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
          Accelerate. Automate. Innovate —
          <span className="block bg-gradient-to-r from-indigo-300 via-sky-300 to-violet-300 bg-clip-text text-transparent"> Agentic AI for Full-Stack Development</span>
        </h1>
        <p className="mt-5 text-blue-100/90 max-w-2xl mx-auto">
          A collaborative platform where specialized AI agents plan, generate, test, and integrate code end‑to‑end with Azure DevOps.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#launch" className="px-6 py-3 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-500/30 transition">Launch Automated Project</a>
          <a href="#how" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10 transition">How CAP Works</a>
        </div>

        <div className="mt-10 max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-5 text-left">
          <div className="flex items-start gap-3 text-blue-100/90">
            <Quote className="mt-0.5" size={18} />
            <p>
              "AI-driven collaboration will redefine software development—turning ideas into production-grade systems with unprecedented speed and reliability."
              <span className="block mt-2 text-blue-200/70">— Satya Nadella (inspired)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
