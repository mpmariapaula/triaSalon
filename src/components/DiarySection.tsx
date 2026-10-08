import React from "react"
import { img } from "@/utils/images"


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] uppercase text-amber-400/90 mb-5 font-medium">
      {children}
    </p>
  )
}

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const DIARY = [
  { title: 'Como cuidar do seu loiro depois da transformação', category: 'Cuidados', time: '5 min', photo: '1554342872-034a06541bad' },
  { title: 'Como saber se é hora de mudar o corte', category: 'Tendências', time: '4 min', photo: '1521590832167-7bcbfaa6381f' },
  { title: 'O que fazer antes de uma grande transformação', category: 'Preparação', time: '6 min', photo: '1519345182560-3f2917c472ef' },
]

// ─── Diary ────────────────────────────────────────────────────────────────────
function DiarySection() {
  return (
    <section className="py-24 md:py-40 bg-panel border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div data-animate className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionLabel>Conteúdo</SectionLabel>
            <h2 className="font-display text-4xl md:text-[52px] text-cream leading-[1.05]">
              Diário Tria
            </h2>
          </div>
          <a href="#" className="text-[10px] tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold transition-colors flex items-center gap-2">
            Ver tudo <IconArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-animate data-animate-delay="1">
          {DIARY.map((item, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-canvas mb-5">
                <div className="h-52 md:h-60 overflow-hidden">
                  <img
                    src={img(item.photo, 600, 450)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
              </div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-3">
                {item.category} · {item.time} de leitura
              </p>
              <h3 className="font-display text-xl text-cream leading-snug group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiarySection