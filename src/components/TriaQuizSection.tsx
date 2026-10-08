import type React from 'react'
import { useState } from 'react'
import { EXPERIENCES, QUIZ_STEPS } from '../data'
import { img } from '../utils/images'


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

// ─── Quiz ─────────────────────────────────────────────────────────────────────
function TriaQuizSection() {
  const [step, setStep] = useState<'idle' | 1 | 2 | 3 | 'result'>('idle')
  const [resultId, setResultId] = useState<string>('blonde')

  const handleAnswer = (result?: string) => {
    if (step === 'idle') return
    if (step === 1) {
      if (result) setResultId(result)
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    } else if (step === 3) {
      setStep('result')
    }
  }

  const currentStepNum = step === 'idle' ? 0 : step === 'result' ? 4 : (step as number)
  const quiz = QUIZ_STEPS[Math.max(0, currentStepNum - 1)]
  const resultExp = EXPERIENCES.find((e) => e.id === resultId) || EXPERIENCES[0]

  return (
    <section className="py-24 md:py-40 bg-panel">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-xl mx-auto text-center" data-animate>
          <SectionLabel>Descoberta</SectionLabel>
          <h2 className="font-display text-4xl md:text-[52px] text-cream leading-[1.05] mb-4">
            Qual é o seu Tria?
          </h2>
          <p className="text-warm text-lg">
            Algumas escolhas dizem muito sobre o que você deseja viver.
          </p>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          {step === 'idle' && (
            <div className="text-center" data-animate data-animate-delay="2">
              <button
                onClick={() => setStep(1)}
                className="text-[10px] tracking-[0.25em] uppercase border border-gold/50 text-gold px-12 py-4 hover:bg-gold hover:text-canvas transition-all duration-300"
              >
                Descobrir meu Tria
              </button>
            </div>
          )}

          {(step === 1 || step === 2 || step === 3) && (
            <div data-animate>
              <div className="flex gap-2 mb-10">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className={`h-px flex-1 transition-all duration-600 ${
                      n <= currentStepNum ? 'bg-gold' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>

              <p className="text-[10px] tracking-[0.2em] uppercase text-muted mb-5">
                {currentStepNum} de 3
              </p>
              <h3 className="font-display text-3xl md:text-4xl text-cream mb-10 leading-tight">
                {quiz.question}
              </h3>

              <div className="flex flex-col gap-3">
                {quiz.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(opt.result || undefined)}
                    className="flex items-center justify-between px-6 py-4 border border-white/10 text-left hover:border-gold/40 hover:bg-gold/[0.06] transition-all duration-300 group"
                  >
                    <span className="text-cream text-sm font-light">{opt.label}</span>
                    <IconChevronRight size={15} />

                  </button>
                ))}
              </div>

              <button
                onClick={() => { setStep('idle') }}
                className="mt-8 text-[10px] tracking-[0.2em] uppercase text-muted hover:text-warm transition-colors"
              >
                ← Recomeçar
              </button>
            </div>
          )}

          {step === 'result' && (
            <div className="text-center" data-animate>
              <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-6">
                Seu momento combina com:
              </p>
              <div className="relative overflow-hidden mb-8 bg-panel2">
                <img
                  src={img(resultExp.photo, 900, 450)}
                  alt={resultExp.name}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-left">
                  <h3 className="font-display text-3xl text-cream">{resultExp.name}</h3>
                  <p className="text-gold text-[10px] tracking-[0.2em] uppercase mt-1">{resultExp.tagline}</p>
                </div>
              </div>
              <p className="text-warm text-base leading-relaxed mb-10 text-left">{resultExp.description}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <CTAPrimary href="#agendar" className="flex-1 text-center">Quero conhecer</CTAPrimary>
                <button
                  onClick={() => { setStep('idle'); setResultId('blonde') }}
                  className="flex-1 text-[10px] tracking-[0.2em] uppercase border border-white/10 text-muted px-6 py-4 hover:border-white/20 hover:text-warm transition-all duration-300"
                >
                  Começar de novo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TriaQuizSection