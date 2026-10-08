import type { ReactNode } from 'react'

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function CTAPrimary({
  children,
  href = '#agendar',
  className = '',
}: {
  children: ReactNode
  href?: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center bg-gold text-canvas text-[10px] tracking-[0.2em] uppercase px-7 py-3 hover:bg-gold-light transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  )
}

export default function Header({
  scrolled,
  menuOpen,
  setMenuOpen,
}: {
  scrolled: boolean
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
}) {
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