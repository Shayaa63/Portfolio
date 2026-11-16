export type Project = {
  title: string;
  description: string;
  /** Vad jag lärde mig eller använde för första gången i projektet */
  learned?: string;
  /** Ett tekniskt beslut jag tog och varför */
  decision?: string;
  tech: string[];
  github: string;
  live: string;
  inProgress?: boolean;
};

export const projects: Project[] = [

{
  title: "StayFinder",
  description:
    "Fullstackbokningsplattform där gäster kan söka boenden och hantera bokningar. Värdar kan publicera boenden och hantera bokningsförfrågningar.",
  learned:
    "Bygga en fullstackapplikation med Next.js, Hono och Supabase. Arbeta med autentisering, cookies, REST API:er, PostgreSQL och behörighetskontroll.",
  decision:
    "Implementerade bokningsregler på backend- och databasnivå. Avbokning sker genom statusändring i stället för permanent radering, med separata behörigheter för gäster och värdar.",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Hono",
    "Supabase",
    "PostgreSQL",
    "REST API",
  ],
  github: "https://github.com/Shayaa63/stayfinder",
  live: "https://stayfinder-2qvs.vercel.app/",
  inProgress: true,
},
  {
    title: "Jobbportalen",
    description:
      "Dynamisk jobbportal med jobbannonser som hämtas från ett CMS. Separata sidor för jobblista och jobbdetaljer.",
    learned:
      "Hämta innehåll från ett headless CMS och bygga separata sidor för lista och detaljer i Next.js.",
    tech: ["Next.js", "React", "Storyblok", "CMS"],
    github: "https://github.com/Shayaa63/jobbportalenex",
    live: "https://jobbportalenex.vercel.app/",
  },
  {
    title: "Artikelportalen",
    description:
      "Dynamisk artikelportal med innehåll som presenteras på en webbplats med separata vyer för artiklar och artikelinformation.",
    learned: "Använde CMS-mönstret igen för ett annat slags innehåll.",
    tech: ["Next.js", "React", "Storyblok", "CMS"],
    github: "https://github.com/Shayaa63/Artikelportalenex",
    live: "https://artikelportalenex.vercel.app/",
  },
  {
    title: "Plot Twist",
    description:
  "Fullstack-gruppprojekt för växt- och sticklingsbyte där jag ansvarade för backend-logik: API-endpoints, autentisering, åtkomstkontroll och validering av användarbehörigheter.",

learned:
  "Bygga REST API:er, arbeta med JWT-autentisering och implementera behörighetskontroll i ett team.",

decision:
  "Strukturerade behörighetskontroller på servernivå så att endast behöriga användare kan ändra eller ta bort sina egna bytesförfrågningar.",
  tech: ["Node.js", "Express", "REST API", "JavaScript", "Fullstack"],
    github: "https://github.com/Shayaa63/webb25_alm_group_task", // Lägg till den exakta GitHub-länken till Plot Twist
    live: "https://michelaslan.github.io/webbshop-2026-fe/",
  },
  {
    title: "Pokémon App",
    description:
      "Sökbar Pokédex som hämtar data från PokéAPI. Separerade sök och karusell i distinkta flöden med egna loading states och en 3D-karusellanimation.",
    learned: "Asynkron data, loading states och animation i React.",
    decision:
      "Refaktorerade från URL-state till objekt-state, eliminerade async-race conditions och gav direkt access till all data utan extra fetch.",
    tech: ["React", "PokéAPI", "CSS"],
    github: "https://github.com/Shayaa63/pokemon-app",
    live: "https://shayaa-pokemon.vercel.app/",
  },
  {
    title: "Bloggplattform",
    description:
      "Dynamisk blogg med kommentarer, likes och responsiv design. Modulär struktur med separata funktioner för rendering, state och events.",
    learned: "DOM, events och state utan ramverk.",
    decision:
      "Valde vanilla JS medvetet för att förstå DOM utan abstraktioner, samma grund som React bygger på.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Shayaa63/Bloggplattform",
    live: "https://bloggplattform.vercel.app/",
  },
  {
    title: "Road2",
    description:
      "Personlig mål- och progressapp som hjälper användare att omvandla större ambitioner till konkreta steg och följa sin utveckling visuellt. Projektet fokuserar på att göra mål enklare att planera, organisera och följa upp.",
    learned:
  "Bygga interaktiva funktioner med DOM, events, state och LocalStorage.",

decision:
  "Valde vanilla JavaScript för att förstå grunderna i webbutveckling innan jag började använda större ramverk.",tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Shayaa63/Road2",
    live: "https://frontend-one-kappa-41.vercel.app/",
    inProgress: true,
  },
];

export const liveCount = projects.filter((p) => p.live).length;

/** "Pokémon App" -> "pokemon-app", används som ankare för länkar */
export const slug = (title: string) =>
  title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");