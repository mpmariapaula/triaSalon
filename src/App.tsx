import HeroSection from "./components/HeroSection"
import { useState, useEffect } from 'react'

import FindMomentSection from "./components/FindMomentSection"
import TriaQuizSection from "./components/TriaQuizSection"
import ExperiencesSection from "./components/ExperiencesSection"
import WantResultSection from "./components/WantResultSection"
import GallerySection from "./components/GallerySection"
import ProfessionalsSection from "./components/ProfessionalsSection"
import UniversoSection from "./components/UniversoSection"
import DiarySection from "./components/DiarySection"
import FinalCTASection from "./components/FinalCTASection"


// ─── Types ────────────────────────────────────────────────────────────────────
type MomentId = 'transform' | 'care' | 'change' | 'event' | 'selfcare'
type GalleryFilter = 'todos' | 'loiros' | 'morenas' | 'cortes' | 'transformacoes' | 'tratamentos' | 'eventos'

interface Experience {
  id: string
  name: string
  tag: string
  tagline: string
  description: string
  photo: string
}

interface GalleryItem {
  id: number
  photo: string
  category: string
  tall: boolean
  label: string
  technique: string
  professional: string
}

// ─── Data ────────────────────────────────────────────────────────────────────
const EXPERIENCES: Experience[] = [
  {
    id: 'blonde',
    name: 'Tria Blonde',
    tag: 'Transformação',
    tagline: 'Transformação e iluminação.',
    description:
      'Uma experiência pensada para quem deseja iluminar, transformar e manter a saúde dos fios com técnicas exclusivas de colorimetria.',
    photo: '1554342872-034a06541bad',
  },
  {
    id: 'care',
    name: 'Tria Care',
    tag: 'Cuidado',
    tagline: 'Cuidado e saúde dos fios.',
    description:
      'Tratamentos profundos que restauram, nutrem e devolvem a vitalidade de cada fio com protocolos personalizados.',
    photo: '1560066984-138dadb4c035',
  },
  {
    id: 'signature',
    name: 'Tria Signature',
    tag: 'Exclusivo',
    tagline: 'O melhor da casa.',
    description:
      'Os serviços mais icônicos do Tria Salon, desenvolvidos para realçar a sua beleza única com refinamento e precisão.',
    photo: '1519345182560-3f2917c472ef',
  },
  {
    id: 'bride',
    name: 'Tria Bride',
    tag: 'Especial',
    tagline: 'Para momentos inesquecíveis.',
    description:
      'Uma experiência completa e exclusiva para noivas e ocasiões especiais que merecem ser lembradas para sempre.',
    photo: '1487412720507-e7ab37603c6f',
  },
]

const MOMENT_MAP: Record<MomentId, string[]> = {
  transform: ['blonde', 'signature'],
  care: ['care', 'signature'],
  change: ['blonde', 'care'],
  event: ['bride', 'signature'],
  selfcare: ['care', 'blonde'],
}

const MOMENTS: { id: MomentId; label: string; sub: string }[] = [
  { id: 'transform', label: 'Quero transformar', sub: 'Uma mudança que vai surpreender' },
  { id: 'care', label: 'Quero cuidar', sub: 'Saúde e vitalidade para os fios' },
  { id: 'change', label: 'Quero mudar', sub: 'Um novo visual, uma nova versão' },
  { id: 'event', label: 'Tenho um evento', sub: 'Para o momento mais especial' },
  { id: 'selfcare', label: 'Quero me cuidar', sub: 'Um momento só seu' },
]



// ─── Helpers ──────────────────────────────────────────────────────────────────
const img = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  })
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconArrowRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
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

// ─── CTA Button ───────────────────────────────────────────────────────────────
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

function CTAOutline({ children, href = '#', className = '' }: { children: React.ReactNode; href?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-block text-[10px] tracking-[0.25em] uppercase border border-white/15 text-cream px-8 py-4 hover:border-white/35 transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  )
}

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

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

// ─── Header ───────────────────────────────────────────────────────────────────
function Header({ scrolled, menuOpen, setMenuOpen }: { scrolled: boolean; menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-white/[0.05]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-base tracking-[0.25em] text-cream uppercase">
          Tria Salon
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: 'Experiências', href: '#experiencias' },
            { label: 'Inspirações', href: '#inspiracoes' },
            { label: 'Profissionais', href: '#profissionais' },
            { label: 'Universo Tria', href: '#universo' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] tracking-[0.18em] uppercase text-warm hover:text-cream transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://www.instagram.com/_triasalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-cream transition-colors duration-300"
            aria-label="Instagram Tria Salon"
          >
            <IconInstagram size={17} />
          </a>
          <a
            href="#agendar"
            className="text-[10px] tracking-[0.2em] uppercase border border-gold/50 text-gold px-6 py-2.5 hover:bg-gold hover:text-canvas transition-all duration-300"
          >
            Agendar experiência
          </a>
        </div>

        <button
          className="md:hidden text-cream p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-canvas/98 backdrop-blur-md border-t border-white/[0.05] px-6 py-8 flex flex-col gap-6">
          {[
            { label: 'Experiências', href: '#experiencias' },
            { label: 'Inspirações', href: '#inspiracoes' },
            { label: 'Profissionais', href: '#profissionais' },
            { label: 'Universo Tria', href: '#universo' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] tracking-[0.18em] uppercase text-warm hover:text-cream transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/_triasalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-muted hover:text-cream transition-colors"
          >
            <IconInstagram size={14} />
            Instagram
          </a>
          <CTAPrimary href="#agendar" className="text-center mt-2">
            Agendar experiência
          </CTAPrimary>
        </div>
      )}
    </header>
  )
}

// ─── Find Your Moment ─────────────────────────────────────────────────────────
function FindMomentSection() {
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



// ─── Footer ───────────────────────────────────────────────────────────────────
function FooterSection() {
  return (
    <footer className="bg-canvas border-t border-white/[0.05] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-base tracking-[0.25em] text-cream uppercase mb-5">
              Tria Salon
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Uma experiência de beleza pensada para quem valoriza o cuidado com intenção e sofisticação.
            </p>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-5">Localização</p>
            <div className="flex flex-col gap-2 text-sm text-warm">
              <span>Rio de Janeiro, RJ</span>
              <span className="text-muted">Brasil</span>
            </div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mt-7 mb-5">Horário</p>
            <div className="flex flex-col gap-1 text-sm text-warm">
              <span>Seg – Sex: 9h às 19h</span>
              <span>Sábado: 9h às 17h</span>
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-5">Contato</p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-warm hover:text-cream transition-colors"
              >
                <IconWhatsApp size={14} />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/_triasalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-warm hover:text-cream transition-colors"
              >
                <IconInstagram size={14} />
                @_triasalon
              </a>
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-5">Navegação</p>
            <div className="flex flex-col gap-3">
              {['Experiências', 'Inspirações', 'Profissionais', 'Universo Tria', 'Diário Tria'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-warm hover:text-cream transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-[11px]">
            © {new Date().getFullYear()} Tria Salon. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted text-[11px] hover:text-warm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-muted text-[11px] hover:text-warm transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useScrollAnimation()

  return (
    <div className="bg-canvas text-cream font-sans">
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <FindMomentSection />
      <TriaQuizSection />
      <ExperiencesSection />
      <WantResultSection />
      <GallerySection />
      <ProfessionalsSection />
      <UniversoSection />
      <DiarySection />
      <FinalCTASection />
      <FooterSection />
    </div>
  )
}
