import artistHero from "@/assets/artist-hero.jpg";
import artistWorking from "@/assets/artist-working.jpg";
import tatoo1 from "@/assets/tatoo-1.jpg";
import tatoo2 from "@/assets/tatoo-2.jpg";
import tatoo3 from "@/assets/tatoo-3.jpg";
import tatoo4 from "@/assets/tatoo-4.jpg";
import tatoo5 from "@/assets/tatoo-5.jpg";
import tatoo6 from "@/assets/tatoo-6.jpg";
import tatoo7 from "@/assets/tatoo-7.jpg";
import tatoo8 from "@/assets/tatoo-8.jpg";

const sharedGalleryItems = [
  { src: tatoo1, altPt: "Tatuagem autoral 1", altEn: "Authorial tattoo 1" },
  { src: tatoo2, altPt: "Tatuagem autoral 2", altEn: "Authorial tattoo 2" },
  { src: tatoo3, altPt: "Tatuagem autoral 3", altEn: "Authorial tattoo 3" },
  { src: tatoo4, altPt: "Tatuagem autoral 4", altEn: "Authorial tattoo 4" },
  { src: tatoo5, altPt: "Tatuagem autoral 5", altEn: "Authorial tattoo 5" },
  { src: tatoo6, altPt: "Tatuagem autoral 6", altEn: "Authorial tattoo 6" },
  { src: tatoo7, altPt: "Tatuagem autoral 7", altEn: "Authorial tattoo 7" },
  { src: tatoo8, altPt: "Tatuagem autoral 8", altEn: "Authorial tattoo 8" },
];

const sitePt = {
  brand: "Patricia Ferreira",
  tagline: "Artista",
  ctaLabel: "Quero viver essa experiência",
  nav: {
    manifesto: "Manifesto",
    philosophy: "Filosofia",
    works: "Obras",
    book: "Agendar",
  },

  hero: {
    name: "Patricia Ferreira",
    headline: "Mais que tinta na pele, cada marca é um capítulo da sua vida.",
    image: artistHero,
    imageAlt: "Retrato do artista",
    scrollHint: "Role para descobrir",
  },

  manifesto: {
    title: "O que você sente, eu transformo em arte.",
    paragraphs: [
      "Nem sempre dá pra explicar o que a gente sente.",
      "Mas existe um jeito de dar forma ao invisível.",
      "Aqui, cada criação nasce do que pulsa dentro — e se transforma em arte na pele.",
    ],
  },

  philosophy: {
    eyebrow: "Filosofia",
    title: "A arte começa na escuta",
    image: artistWorking,
    imageAlt: "Artista trabalhando",
    paragraphs: [
      "Mais de 10 anos transformando emoções e vivências em arte na pele. Uma missão que vai além da técnica: acessar a alma de quem chega, ressignificar cicatrizes e criar conexões profundas através da tatuagem.",
      "Cada trabalho nasce da escuta e da interpretação sensível de cada pessoa que passa pelo atelier no Rio de Janeiro. Uma abordagem autoral, criada no tempo da conversa — de forma intuitiva, presente e sempre única.",
      "Cada tatuagem é mais do que estética: é uma expressão simbólica da alma, criada em parceria com quem a carrega. A técnica é impecável. Mas o que torna cada obra verdadeiramente singular é a conexão.",
    ],
  },

  gallery: {
    eyebrow: "Portfólio",
    title: "Obras que falam",
    description: "Cada peça carrega uma história. Um arquivo vivo de presença, escuta e símbolo.",
    items: sharedGalleryItems.map((item) => ({ src: item.src, alt: item.altPt })),
  },

  invite: {
    eyebrow: "Convite",
    title: "Agende sua vivência",
    body: "Nem sempre é fácil colocar em palavras o que a gente sente. Mas quando essa vontade de marcar algo na pele aparece, ela carrega um chamado: um desejo de tornar visível o que é invisível, de dar forma ao que pulsa por dentro.",
  },

  form: {
    eyebrow: "Primeiro passo",
    title: "Conte sua ideia",
    subtitle:
      "No meu atelier, cada criação nasce da escuta, da presença e da conexão. Esse formulário é o primeiro passo.",
    fields: {
      name: "Seu nome",
      contact: "Contato (e-mail ou telefone)",
      idea: "Conte sua ideia ou o que te traz aqui",
    },
    submit: "Enviar mensagem",
    sent: "Recebido com carinho",
  },
  footer: {
    rights: "Todos os direitos reservados.",
  },

  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "E-mail", href: "mailto:hello@example.com" },
  ],
};

const siteEn: SiteContent = {
  brand: "Patricia Ferreira",
  tagline: "Artist",
  ctaLabel: "I want to live this experience",
  nav: {
    manifesto: "Manifesto",
    philosophy: "Philosophy",
    works: "Works",
    book: "Book",
  },
  hero: {
    name: "Patricia Ferreira",
    headline: "More than ink on skin, each mark is a chapter of your story.",
    image: artistHero,
    imageAlt: "Portrait of the artist",
    scrollHint: "Scroll to explore",
  },
  manifesto: {
    title: "What you feel, I transform into art.",
    paragraphs: [
      "It is not always easy to explain what we feel.",
      "But there is a way to give shape to the invisible.",
      "Here, every creation is born from what pulses within and becomes art on the skin.",
    ],
  },
  philosophy: {
    eyebrow: "Philosophy",
    title: "Art begins with listening",
    image: artistWorking,
    imageAlt: "Artist working",
    paragraphs: [
      "Over 10 years transforming emotions and life stories into art on skin. A mission that goes beyond technique: reaching the soul of each person, reframing scars, and creating deep connections through tattooing.",
      "Each piece is born from listening and a sensitive interpretation of every person who visits the studio in Rio de Janeiro. An authorial approach, created at the rhythm of conversation with intuition, presence, and uniqueness.",
      "Each tattoo is more than aesthetics: it is a symbolic expression of the soul, created in partnership with the person who carries it. The technique is impeccable, but what makes each work truly singular is connection.",
    ],
  },
  gallery: {
    eyebrow: "Portfolio",
    title: "Works that speak",
    description: "Each piece carries a story. A living archive of presence, listening, and symbol.",
    items: sharedGalleryItems.map((item) => ({ src: item.src, alt: item.altEn })),
  },
  invite: {
    eyebrow: "Invitation",
    title: "Schedule your experience",
    body: "It is not always easy to put feelings into words. But when the desire to mark something on your skin appears, it carries a calling: the will to make the invisible visible and give shape to what pulses inside.",
  },
  form: {
    eyebrow: "First step",
    title: "Share your idea",
    subtitle:
      "In my studio, each creation is born from listening, presence, and connection. This form is the first step.",
    fields: {
      name: "Your name",
      contact: "Contact (email or phone)",
      idea: "Tell me your idea or what brings you here",
    },
    submit: "Send message",
    sent: "Message received with care",
  },
  footer: {
    rights: "All rights reserved.",
  },
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "E-mail", href: "mailto:hello@example.com" },
  ],
};

export const siteByLanguage = {
  pt: sitePt,
  en: siteEn,
};

export const site = sitePt;

export type SiteContent = typeof sitePt;
export type Language = keyof typeof siteByLanguage;
