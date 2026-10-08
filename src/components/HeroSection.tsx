import type React from "react"
import { img } from "../utils/images"
function CTAOutline({ children, href = "#", className = "" }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center border border-white/20 text-cream text-[10px] tracking-[0.2em] uppercase px-7 py-3 hover:border-gold hover:text-gold transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  )
}

function CTAPrimary({ children, href = '#agendar', className = '' }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-block text-[10px] tracking-[0.25em] uppercase bg-gold text-canvas px-8 py-4 font-medium hover:bg-gold-light transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-canvas">
      <div className="absolute inset-0">
        <img
          src={img('1522337360788-8b13dee7a37e', 1800, 1200)}
          alt="Tria Salon — experiência premium de beleza"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/50 to-canvas/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/70 via-canvas/30 to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 w-full pb-20 md:pb-32">
        <div className="max-w-2xl">
          <p
            className="text-[10px] tracking-[0.4em] uppercase text-gold mb-7 opacity-0 animate-[fadeUp_0.8s_0.3s_ease_forwards]"
            style={{ animation: 'fadeUp 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            Tria Experience — Rio de Janeiro
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-cream leading-[0.92] mb-8 opacity-0"
            style={{ animation: 'fadeUp 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            Seu momento<br />
            <em>começa aqui.</em>
          </h1>
          <p
            className="text-warm text-lg md:text-xl leading-relaxed mb-10 max-w-md opacity-0"
            style={{ animation: 'fadeUp 0.9s 0.6s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            Mais do que transformar cabelos, criamos experiências para você se sentir ainda mais você.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0"
            style={{ animation: 'fadeUp 0.9s 0.75s cubic-bezier(0.16,1,0.3,1) forwards' }}
          >
            <CTAPrimary href="#momento">Descobrir minha experiência</CTAPrimary>
            <CTAOutline href="#inspiracoes">Ver inspirações</CTAOutline>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:right-12 hidden md:flex items-center gap-3 text-muted">
        <span className="text-[9px] tracking-[0.25em] uppercase">Role para explorar</span>
        <div className="w-12 h-px bg-muted/60" />
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

