import React, { useState } from 'react'


// ─── Ícones ───────────────────────────────────────────────────────────────────
function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconUpload({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconWhatsApp({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.124 1.522 5.858L.044 23.956a.5.5 0 00.612.608l6.285-1.648A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.089-1.392l-.364-.217-3.733.979.994-3.64-.239-.378A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

// ─── Componentes Auxiliares ───────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.35em] uppercase text-amber-400/90 mb-5 font-medium">
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

export default function WantResultSection() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased">
      {/* Container Principal */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Banner Hero */}
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden mb-12 border border-neutral-800">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80"
            alt="Interior do Tria Salon"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <SectionLabel>Alta Cordoaria & Estilo</SectionLabel>
              <h1 className="text-4xl font-light tracking-wide text-white">TRIA SALON</h1>
            </div>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-neutral-900/80 hover:bg-neutral-800 backdrop-blur-md rounded-full border border-neutral-700 transition-colors text-white"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-neutral-900/80 hover:bg-neutral-800 backdrop-blur-md rounded-full border border-neutral-700 transition-colors text-white"
                aria-label="WhatsApp"
              >
                <IconWhatsApp />
              </a>
            </div>
          </div>
        </div>

        {/* Seção de Upload de Fotos de Diagnóstico */}
        <section className="bg-neutral-900/50 rounded-2xl border border-neutral-800 p-8 backdrop-blur-sm">
          <SectionLabel>Análise Personalizada</SectionLabel>
          <h2 className="text-2xl font-light text-white mb-2">Envie a Foto do seu Cabelo</h2>
          <p className="text-sm text-neutral-400 mb-6">
            Para uma pré-avaliação do estado atual e histórico capilar antes do seu agendamento.
          </p>

          <label
            htmlFor="photo-upload"
            className="flex flex-col items-center justify-center w-full h-48 rounded-xl border border-dashed border-neutral-700 hover:border-amber-400/50 bg-neutral-950/50 hover:bg-neutral-950 cursor-pointer transition-all duration-200 overflow-hidden relative group"
          >
            {previewUrl ? (
              <div className="relative w-full h-full flex items-center justify-center p-2">
                <img
                  src={previewUrl}
                  alt="Pré-visualização da foto enviada"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center text-center p-4">
                <div className="text-neutral-400 group-hover:text-amber-400 transition-colors mb-3">
                  <IconUpload />
                </div>
                <span className="text-sm text-neutral-300 font-medium">Clique para selecionar uma imagem</span>
                <span className="text-xs text-neutral-500 mt-1">PNG, JPG ou WEBP até 10MB</span>
              </div>
            )}
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>

          {selectedFile && (
            <p className="text-xs text-amber-400/90 mt-3 font-mono">
              Arquivo selecionado: {selectedFile.name}
            </p>
          )}
        </section>
      </main>
    </div>
  )
}