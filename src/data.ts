export type MomentId = 'transform' | 'care' | 'change' | 'event' | 'selfcare'

export interface Experience {
  id: string
  name: string
  tag: string
  tagline: string
  description: string
  photo: string
}

export const EXPERIENCES: Experience[] = [
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

export const MOMENT_MAP: Record<MomentId, string[]> = {
  transform: ['blonde', 'signature'],
  care: ['care', 'signature'],
  change: ['blonde', 'care'],
  event: ['bride', 'signature'],
  selfcare: ['care', 'blonde'],
}

export const QUIZ_STEPS = [
  {
    question: 'O que você deseja viver hoje?',
    options: [
      { label: 'Uma grande transformação', result: 'blonde' },
      { label: 'Cuidado e regeneração', result: 'care' },
      { label: 'Algo sofisticado e atemporal', result: 'signature' },
      { label: 'Me preparar para algo especial', result: 'bride' },
    ],
  },
  {
    question: 'Como estão seus fios agora?',
    options: [
      { label: 'Precisam de uma nova vida', result: '' },
      { label: 'Bem, mas quero mais brilho', result: '' },
      { label: 'Precisam de tratamento urgente', result: '' },
      { label: 'Ótimos — quero mantê-los assim', result: '' },
    ],
  },
  {
    question: 'Qual sensação você quer levar daqui?',
    options: [
      { label: 'Completamente renovada', result: '' },
      { label: 'Radiante e luminosa', result: '' },
      { label: 'Poderosa e confiante', result: '' },
      { label: 'Especial e inesquecível', result: '' },
    ],
  },
]