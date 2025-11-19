import { GraduationCap, BadgeCheck } from "lucide-react"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 ring-2 ring-white/20 shadow" />
          <div>
            <p className="text-xs text-blue-200/80">IIT Bombay × Azure</p>
            <p className="text-sm font-semibold text-white tracking-wide">Collaborative Agentic Platform</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs text-blue-200/80">
          <div className="flex items-center gap-1"><GraduationCap size={14} /> Institute Showcase</div>
          <div className="flex items-center gap-1"><BadgeCheck size={14} /> Built with Azure AI</div>
        </div>
        <a href="#home" className="text-blue-200/80 hover:text-white text-sm">Back</a>
      </div>
    </header>
  )
}
