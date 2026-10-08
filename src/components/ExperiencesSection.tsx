import type React from 'react'
import { useState } from 'react'
import { EXPERIENCES } from '../data'
import { img } from '../utils/images'


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5 font-medium">
      {children}
    </p>
  )
}

function IconChevronRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Experiences ──────────────────────────────────────────────────────────────
function ExperiencesSection() {
  return (
    <section id="experiencias" className="py-24 md:py-40 max-w-[1400px] mx-auto px-6 md:px-12">
      <div data-animate className="mb-14">
        <SectionLabel>Experiências</SectionLabel>
        <h2 className="font-display text-4xl md:text-[52px] text-cream leading-[1.05]">
          Experiências Tria
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" data-animate data-animate-delay="1">
        {/* Large — Tria Blonde */}
        <div className="group relative overflow-hidden bg-panel cursor-pointer md:row-span-2">
          <div className="relative h-72 md:h-full md:min-h-[520px] overflow-hidden">
            <img
              src={img('1554342872-034a06541bad', 900, 900)}
              alt="Tria Blonde"
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-[9px] tracking-[0.35em] uppercase text-gold mb-3">Transformação</p>
              <h3 className="font-display text-3xl md:text-4xl text-cream mb-3">Tria Blonde</h3>
              <p className="text-warm text-sm leading-relaxed max-w-xs mb-6">
                Transformação e iluminação. Uma experiência pensada para iluminar, transformar e manter a saúde dos fios.
              </p>
              <a href="#agendar" className="text-[10px] tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors">
                Conhecer
              </a>
            </div>
          </div>
        </div>

        {/* Tria Care */}
        <div className="group relative overflow-hidden bg-panel cursor-pointer">
          <div className="relative h-56 md:h-64 overflow-hidden">
            <img
              src={img('1560066984-138dadb4c035', 800, 500)}
              alt="Tria Care"
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 flex items-end justify-between w-full">
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-1">Cuidado</p>
                <h3 className="font-display text-2xl text-cream">Tria Care</h3>
              </div>
              <a href="#agendar" className="text-[10px] tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors flex items-center gap-1">
                Conhecer <IconChevronRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Tria Signature */}
        <div className="group relative overflow-hidden bg-panel cursor-pointer">
          <div className="relative h-56 md:h-64 overflow-hidden">
            <img
              src={img('1519345182560-3f2917c472ef', 800, 500)}
              alt="Tria Signature"
              className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 flex items-end justify-between w-full">
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-1">Exclusivo</p>
                <h3 className="font-display text-2xl text-cream">Tria Signature</h3>
              </div>
              <a href="#agendar" className="text-[10px] tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors flex items-center gap-1">
                Conhecer <IconChevronRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tria Bride — full width */}
      <div className="group relative overflow-hidden bg-panel cursor-pointer mt-5" data-animate data-animate-delay="2">
        <div className="relative h-72 md:h-80 overflow-hidden">
          <img
            src={img('1487412720507-e7ab37603c6f', 1600, 700)}
            alt="Tria Bride"
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas/80 via-canvas/40 to-canvas/10" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 p-8 md:p-12">
            <p className="text-[9px] tracking-[0.35em] uppercase text-gold mb-4">Para ocasiões especiais</p>
            <h3 className="font-display text-4xl md:text-5xl text-cream mb-4">Tria Bride</h3>
            <p className="text-warm text-sm leading-relaxed max-w-sm mb-7">
              Uma experiência completa e exclusiva para noivas e momentos que merecem ser eternizados.
            </p>
            <a href="#agendar" className="text-[10px] tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors">
              Conhecer
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperiencesSection