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
      "Fullstack-gruppprojekt för byteshandel där jag ansvarade för backend-logik: API-endpoints, autentisering, åtkomstkontroll och validering av användarbehörigheter för bytesförfrågningar.",
    learned: "Bygga säkra API-endpoints, autentisering och rollbaserad behörighetsstyre i team.",
    decision:
      "Strukturerade behörighetskontroller på servernivå för att säkerställa att endast behöriga användare kan ändra eller ta bort sina egna bytesförfrågningar.",
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
    title: "Chattapp",
    description: "Enkel realtidschatt byggd i HTML och JavaScript.",
    learned: "Hantering av realtids-events och asynkrona meddelandeflöden i DOM.",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/Shayaa63/Chattapp",
    live: "",
  },
  {
    title: "Road2",
    description:
      "App som hjälper dig sätta mål, bryta ner dem i steg och följa din progress.",
    tech: [],
    github: "https://github.com/Shayaa63/Road2",
    live: "",
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