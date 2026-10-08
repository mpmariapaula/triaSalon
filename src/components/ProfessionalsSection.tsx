import React from "react"
import { img } from '../utils/images'



const PROFESSIONALS = [
  {
    name: 'Ana Beatriz',
    role: 'Colorista Sênior',
    specialty: 'Loiros · Balayage · Iluminação',
    bio: 'Com 12 anos de experiência, Ana transforma cada fio com precisão e sensibilidade. Especialista em loiros naturais e técnicas de iluminação francesa.',
    photo: '1529626455594-4ff0802cfb7e',
  },
  {
    name: 'Carla Mendes',
    role: 'Stylist & Cortes',
    specialty: 'Cortes Geométricos · Finalização',
    bio: 'Apaixonada por formas e movimento, Carla cria cortes que se adaptam à sua rotina e realçam o melhor de cada rosto.',
    photo: '1534528741775-53994a69daeb',
  },
  {
    name: 'Renata Oliveira',
    role: 'Especialista em Tratamentos',
    specialty: 'Restauração · Saúde Capilar',
    bio: 'Renata escuta, diagnostica e cria protocolos únicos para transformar a sua relação com os fios. Cada visita começa com uma conversa.',
    photo: '1544717305-2604a8e84e42',
  },
]

// ─── Label ────────────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5 font-medium">
      {children}
    </p>
  )
}

// ─── Professionals ────────────────────────────────────────────────────────────
function ProfessionalsSection() {
  return (
    <section id="profissionais" className="py-24 md:py-40 bg-panel">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div data-animate className="mb-14 md:mb-20">
          <SectionLabel>Time</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] text-cream leading-[1.05]">
            Quem transforma<br className="hidden md:block" /> seu momento
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PROFESSIONALS.map((pro, i) => (
            <div key={pro.name} data-animate data-animate-delay={String(i + 1) as '1' | '2' | '3'}>
              <div className="group relative overflow-hidden bg-canvas mb-6">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={img(pro.photo, 600, 750)}
                    alt={pro.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 to-transparent" />
                </div>
              </div>
              <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-1.5">{pro.role}</p>
              <h3 className="font-display text-2xl text-cream mb-1">{pro.name}</h3>
              <p className="text-muted text-[11px] tracking-wide mb-4">{pro.specialty}</p>
              <p className="text-warm text-sm leading-relaxed mb-5">{pro.bio}</p>
              <a href="#agendar" className="text-[10px] tracking-[0.2em] uppercase text-gold border-b border-gold/40 pb-0.5 hover:border-gold transition-colors">
                Agendar com {pro.name.split(' ')[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfessionalsSection