import React, { useState } from "react"

type GalleryFilter =
  | "todos"
  | "loiros"
  | "morenas"
  | "cortes"
  | "transformacoes"
  | "tratamentos"
  | "eventos"

interface GalleryItem {
  id: number
  photo: string
  category: string
  tall: boolean
  label: string
  technique: string
  professional: string
}

const GALLERY: GalleryItem[] = [
  {
    id: 1,
    photo: "1522337360788-8b13dee7a37e",
    category: "loiros",
    tall: true,
    label: "Loiro Acinzentado",
    technique: "Balayage + Matização",
    professional: "Ana Beatriz",
  },
  {
    id: 2,
    photo: "1554342872-034a06541bad",
    category: "loiros",
    tall: false,
    label: "Golden Blonde",
    technique: "Iluminação Francesa",
    professional: "Ana Beatriz",
  },
  {
    id: 3,
    photo: "1560066984-138dadb4c035",
    category: "tratamentos",
    tall: false,
    label: "Reconstrução Intensiva",
    technique: "Tratamento Profundo",
    professional: "Renata Oliveira",
  },
  {
    id: 4,
    photo: "1519345182560-3f2917c472ef",
    category: "morenas",
    tall: true,
    label: "Morena Iluminada",
    technique: "Ombre Natural",
    professional: "Ana Beatriz",
  },
  {
    id: 5,
    photo: "1487412720507-e7ab37603c6f",
    category: "eventos",
    tall: false,
    label: "Noiva Radiante",
    technique: "Tria Bride",
    professional: "Carla Mendes",
  },
  {
    id: 6,
    photo: "1547425260-76bcadfb4f2c",
    category: "cortes",
    tall: false,
    label: "Bob Estruturado",
    technique: "Corte + Finalização",
    professional: "Carla Mendes",
  },
  {
    id: 7,
    photo: "1521590832167-7bcbfaa6381f",
    category: "transformacoes",
    tall: true,
    label: "Transformação Completa",
    technique: "Colorimetria + Corte",
    professional: "Ana Beatriz",
  },
  {
    id: 8,
    photo: "1595476108010-b4d1f102b1b1",
    category: "loiros",
    tall: false,
    label: "Loiro Platinado",
    technique: "Descoloração + Tônico",
    professional: "Ana Beatriz",
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-5 font-medium">
      {children}
    </p>
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

const img = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

// ─── Gallery ──────────────────────────────────────────────────────────────────

function GallerySection() {
  const [filter, setFilter] = useState<GalleryFilter>("todos")
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const [fading, setFading] = useState(false)

  const FILTERS: { id: GalleryFilter; label: string }[] = [
    { id: "todos", label: "Todos" },
    { id: "loiros", label: "Loiros" },
    { id: "morenas", label: "Morenas" },
    { id: "cortes", label: "Cortes" },
    { id: "transformacoes", label: "Transformações" },
    { id: "tratamentos", label: "Tratamentos" },
    { id: "eventos", label: "Eventos" },
  ]

  const handleFilter = (f: GalleryFilter) => {
    setFading(true)

    setTimeout(() => {
      setFilter(f)
      setFading(false)
    }, 280)
  }

  const items =
    filter === "todos"
      ? GALLERY
      : GALLERY.filter((i) => i.category === filter)

  return (
    <section
      id="inspiracoes"
      className="py-24 md:py-40 max-w-[1400px] mx-auto px-6 md:px-12"
    >
      <div data-animate className="mb-12">
        <SectionLabel>Galeria</SectionLabel>

        <h2 className="font-display text-4xl md:text-[52px] text-cream leading-[1.05]">
          Inspirações
        </h2>
      </div>

      <div
        className="flex flex-wrap gap-2 mb-12"
        data-animate
        data-animate-delay="1"
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => handleFilter(f.id)}
            className={`text-[10px] tracking-[0.18em] uppercase px-5 py-2.5 border transition-all duration-300 ${
              filter === f.id
                ? "border-gold text-gold"
                : "border-white/10 text-muted hover:border-white/20 hover:text-warm"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        className={`columns-2 md:columns-3 gap-3 md:gap-4 transition-opacity duration-300 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
        data-animate
        data-animate-delay="2"
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="group relative overflow-hidden bg-panel mb-3 md:mb-4 cursor-pointer break-inside-avoid"
          >
            <div
              className={`relative overflow-hidden ${
                item.tall ? "h-80 md:h-[440px]" : "h-48 md:h-60"
              }`}
            >
              <img
                src={img(item.photo, 600, item.tall ? 800 : 400)}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-canvas/20 group-hover:bg-canvas/50 transition-colors duration-400" />

              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                <p className="text-[9px] tracking-[0.25em] uppercase text-gold mb-1">
                  {item.technique}
                </p>

                <p className="text-cream text-sm font-medium">
                  {item.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-canvas/96 flex items-center justify-center p-5 md:p-10"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-w-2xl w-full bg-panel overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={img(selected.photo, 900, 600)}
                alt={selected.label}
                className="w-full h-72 md:h-96 object-cover"
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-canvas/80 flex items-center justify-center text-warm hover:text-cream transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="p-7 md:p-9">
              <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-2">
                {selected.technique}
              </p>

              <h3 className="font-display text-3xl text-cream mb-2">
                {selected.label}
              </h3>

              <p className="text-muted text-sm mb-1">
                Por <span className="text-warm">{selected.professional}</span>
              </p>

              <p className="text-warm text-sm leading-relaxed mt-4 mb-8">
                Uma experiência de transformação realizada com dedicação e
                técnica exclusiva. Cada detalhe pensado para o seu momento
                único no Tria Salon.
              </p>

              <div className="flex items-center justify-between">
                <CTAPrimary href="#agendar">
                  Quero esse resultado
                </CTAPrimary>

                <button
                  onClick={() => setSelected(null)}
                  className="text-[10px] tracking-[0.15em] uppercase text-muted hover:text-warm transition-colors"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection