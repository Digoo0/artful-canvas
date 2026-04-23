import artistHero from "@/assets/artist-hero.jpg";
import artistWorking from "@/assets/artist-working.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

/**
 * White-label content for an artist site.
 * Edit values below to customize for any artist (tattoo, photographer, visual artist...).
 */
export const site = {
  brand: "Rapha Lopes",
  tagline: "Artista",
  ctaLabel: "Quero viver essa experiência",

  hero: {
    name: "Rapha Lopes",
    headline: "Mais que tinta na pele, cada marca é um capítulo da sua vida.",
    image: artistHero,
    imageAlt: "Retrato do artista",
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
    items: [
      { src: work1, alt: "Tatuagem botânica delicada" },
      { src: work2, alt: "Tatuagem orgânica nas costas" },
      { src: work3, alt: "Símbolo minimalista no pulso" },
      { src: work4, alt: "Manga floral detalhada" },
      { src: work5, alt: "Tatuagens nos dedos" },
      { src: work6, alt: "Símbolo no peito" },
    ],
  },

  invite: {
    title: "Agende sua vivência",
    body: "Nem sempre é fácil colocar em palavras o que a gente sente. Mas quando essa vontade de marcar algo na pele aparece, ela carrega um chamado: um desejo de tornar visível o que é invisível, de dar forma ao que pulsa por dentro.",
  },

  form: {
    title: "Conte sua ideia",
    subtitle:
      "No meu atelier, cada criação nasce da escuta, da presença e da conexão. Esse formulário é o primeiro passo.",
  },

  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "E-mail", href: "mailto:hello@example.com" },
  ],
};

export type SiteContent = typeof site;
