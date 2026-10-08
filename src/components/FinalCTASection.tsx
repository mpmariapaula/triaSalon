import React from "react"
import { img } from "@/utils/images"

function IconWhatsApp({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.2.1.4.2.4.4v.5c0 .3-.1.5-.4.7-.4.2-.9.3-1.3.2-2.8-.7-5.1-3-5.8-5.8-.1-.4 0-.9.2-1.3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Label ────────────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5 font-medium">
      {children}
    </p>
  )
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section id="agendar" className="relative py-36 md:py-52 overflow-hidden bg-canvas">
      <div className="absolute inset-0">
        <img
          src={img('1522337360788-8b13dee7a37e', 1600, 900)}
          alt="Agendar experiência Tria Salon"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/60 via-canvas/70 to-canvas/90" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <div data-animate>
          <SectionLabel>Tria Salon</SectionLabel>
          <h2 className="font-display text-4xl md:text-[60px] lg:text-[72px] text-cream leading-[1.0] mb-7 max-w-2xl mx-auto">
            Seu próximo momento<br />
            <em>pode começar agora.</em>
          </h2>
          <p className="text-warm text-lg mb-12 max-w-sm mx-auto leading-relaxed">
            Reserve sua experiência e deixe o Tria cuidar do seu momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-[10px] tracking-[0.25em] uppercase bg-gold text-canvas px-10 py-4 font-medium hover:bg-gold-light transition-colors duration-300"
            >
              <IconWhatsApp size={16} />
              Agendar experiência
            </a>
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-[10px] tracking-[0.25em] uppercase border border-white/15 text-cream px-10 py-4 hover:border-white/30 transition-colors duration-300"
            >
              Falar com o Tria
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTASection