import type React from "react"
import { useState } from "react"
import { EXPERIENCES, MOMENT_MAP, MOMENTS, type MomentId } from "../data"

function IconChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5 font-medium">
      {children}
    </p>
  )
}

const img = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`


export default function FindMomentSection() {
  const [selected, setSelected] = useState<MomentId | null>(null)

  const filtered = selected ? EXPERIENCES.filter((e) => MOMENT_MAP[selected].includes(e.id)) : []

  return (
    <section id="momento" className="py-24 md:py-40 max-w-[1400px] mx-auto px-6 md:px-12">
      <div data-animate className="mb-14 md:mb-18">
        <SectionLabel>Encontre seu momento</SectionLabel>
        <h2 className="font-display text-4xl md:text-[52px] text-cream leading-[1.05] mb-5">
          Cada mulher chega com<br className="hidden md:block" /> um desejo diferente.
        </h2>
        <p className="text-warm text-lg max-w-sm">Encontre a experiência que combina com você.</p>
      </div>

      <div className="flex flex-wrap gap-3 mb-14" data-animate data-animate-delay="1">
        {MOMENTS.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelected(selected === m.id ? null : m.id)}
            className={`flex flex-col items-start px-6 py-4 border transition-all duration-350 text-left ${
              selected === m.id
                ? 'border-gold bg-gold/[0.08] text-gold'
                : 'border-white/10 hover:border-white/22 text-cream'
            }`}
          >
            <span className="text-sm font-medium tracking-wide">{m.label}</span>
            <span className="text-[11px] text-muted mt-0.5">{m.sub}</span>
          </button>
        ))}
      </div>

      {selected && filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((exp) => (
            <div key={exp.id} className="group relative overflow-hidden bg-panel cursor-pointer">
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={img(exp.photo, 800, 600)}
                  alt={exp.name}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/85 via-canvas/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[9px] tracking-[0.35em] uppercase text-gold mb-2">{exp.tagline}</p>
                  <h3 className="font-display text-2xl md:text-3xl text-cream">{exp.name}</h3>
                </div>
              </div>
              <div className="p-6 flex items-start justify-between gap-4 bg-panel">
                <p className="text-warm text-sm leading-relaxed">{exp.description.slice(0, 90)}…</p>
                <a href="#agendar" className="flex-shrink-0 text-[9px] tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors flex items-center gap-1.5 mt-0.5">
                  Conhecer <IconChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}