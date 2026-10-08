import React from "react" 
import { img } from "@/utils/images"

const UNIVERSO = [
  { title: 'O espaço que criamos para você', sub: 'Ambiente', photo: '1562322140-8baeececf3df' },
  { title: 'Os produtos que selecionamos com cuidado', sub: 'Produtos', photo: '1581824043583-6904b080a19c' },
  { title: 'A história de como o Tria nasceu', sub: 'História', photo: '1616394584738-fc6e612e71b9' },
]


// ─── Label ────────────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5 font-medium">
      {children}
    </p>
  )
}

// ─── Universo Tria ────────────────────────────────────────────────────────────
function UniversoSection() {
  return (
    <section id="universo" className="py-24 md:py-40 max-w-[1400px] mx-auto px-6 md:px-12">
      <div data-animate className="mb-14">
        <SectionLabel>Editorial</SectionLabel>
        <h2 className="font-display text-4xl md:text-[52px] text-cream leading-[1.05]">
          O Universo Tria
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5" data-animate data-animate-delay="1">
        {UNIVERSO.map((item, i) => (
          <div key={i} className="group relative overflow-hidden bg-panel cursor-pointer">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={img(item.photo, 700, 600)}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-canvas/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-2">{item.sub}</p>
                <h3 className="font-display text-xl md:text-2xl text-cream leading-tight">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UniversoSection