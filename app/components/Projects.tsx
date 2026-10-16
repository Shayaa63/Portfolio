const projects = [
  {
    title: "Jobbportalen",
    description:
      "Dynamisk jobbportal med jobbannonser som hämtas från ett CMS. Separata sidor för jobblista och jobbdetaljer.",
    tech: ["Next.js", "React", "Storyblok", "CMS"],
    github: "https://github.com/Shayaa63/jobbportalenex",
    live: "https://jobbportalenex.vercel.app/",
  },
  {
    title: "Artikelportalen",
    description:
      "Dynamisk artikelportal med innehåll som presenteras på en webbplats med separata vyer för artiklar och artikelinformation.",
    tech: ["Next.js", "React", "Storyblok", "CMS"],
    github: "https://github.com/Shayaa63/Artikelportalenex",
    live: "https://artikelportalenex.vercel.app/",
  },
  {
    title: "Pokémon App",
    description:
      "Sökbar Pokédex som hämtar data från PokéAPI. Separerade sök och karusell i distinkta flöden med egna loading states och en 3D-karusellanimation.",
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
    decision:
      "Valde vanilla JS medvetet för att förstå DOM utan abstraktioner, samma grund som React bygger på.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Shayaa63/Bloggplattform",
    live: "https://bloggplattform.vercel.app/",
  },
  {
    title: "Chattapp",
    description: "Enkel realtidschatt byggd i HTML och JavaScript.",
    tech: ["HTML", "JavaScript"],
    github: "https://github.com/Shayaa63/Chattapp",
    live: "",
  },
  {
    title: "Road2",
    description:
      "App som hjälper dig sätta mål, bryta ner dem i steg och följa din progress.",
    tech: ["Pågår"],
    github: "https://github.com/Shayaa63/Road2",
    live: "",
  },
];

export default function Projects() {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "1.2px",
          textTransform: "uppercase",
          color: "var(--muted)",
          margin: "0 0 16px",
        }}
      >
        Projekt
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.title}
            style={{
              background: "var(--surface-nested)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {/* Titel + länkar */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--text)",
                  margin: 0,
                }}
              >
                {p.title}
              </p>

              <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "11px",
                      color: "var(--accent)",
                      textDecoration: "none",
                    }}
                  >
                    Live ↗
                  </a>
                )}

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "11px",
                    color: "var(--muted)",
                    textDecoration: "none",
                  }}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            {/* Beskrivning — växer för att fylla utrymmet */}
            <p
              style={{
                fontSize: "12px",
                lineHeight: "1.6",
                color: "var(--muted)",
                margin: 0,
                flex: 1,
              }}
            >
              {p.description}
            </p>

            {/* Tekniskt beslut — alltid samma höjd, centrerat */}
            <div
              style={{
                minHeight: "52px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {p.decision ? (
                <p
                  style={{
                    fontSize: "11px",
                    lineHeight: "1.5",
                    color: "var(--accent-text)",
                    padding: "6px 10px",
                    background: "var(--accent-light)",
                    borderRadius: "6px",
                    fontStyle: "italic",
                    margin: 0,
                    width: "100%",
                  }}
                >
                  💡 {p.decision}
                </p>
              ) : (
                <div style={{ width: "100%", height: "52px" }} />
              )}
            </div>

            {/* Tech-pills — alltid längst ned */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
              {p.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "11px",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "var(--accent-light)",
                    color: "var(--accent-text)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}