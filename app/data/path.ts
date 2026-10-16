// Min lärandekurva: ett steg per nytt område, med de projekt där jag använde det.
// Ordningen är en berättelse, justera texterna så de stämmer med din egen väg.
export type Step = {
  title: string;
  text: string;
  projects: string[];
  current?: boolean;
};

export const path: Step[] = [
  {
    title: "Grunden i vanlig JavaScript",
    text: "Jag började utan ramverk för att förstå hur DOM, events och state faktiskt fungerar.",
    projects: ["Bloggplattform", "Chattapp"],
  },
  {
    title: "React och externa API:er",
    text: "Nästa steg var komponenter och data från ett API. Jag löste async-problem genom att ändra hur state hanteras.",
    projects: ["Pokémon App"],
  },
  {
    title: "Next.js och headless CMS",
    text: "Sedan innehåll från ett CMS med egna sidor för listor och detaljer. Jag byggde samma mönster två gånger för att befästa det.",
    projects: ["Jobbportalen", "Artikelportalen"],
  },
{
    title: "Backend, API:er och databaslogik",
    text: "Fördjupning i backend-utveckning, API-endpoints, autentisering, behörigheter och datamodellering i team.",
    projects: ["Plot Twist"],
  },
  {
    title: "Ett eget projekt från grunden",
    text: "Nu sätter jag ihop det jag lärt mig i en egen app.",
    projects: ["Road2"],
    current: true,
  },
];