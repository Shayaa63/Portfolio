const projects = [
  {
    title: "Bloggplattform",
    description: "Dynamisk blogg med kommentarer, likes och responsiv design byggd med vanilla JS.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://bloggplattform.vercel.app/",
    live: "https://bloggplattform.vercel.app/",
  },
  {
    title: "Pokémon App",
    description: "React-app som hämtar data från PokéAPI. Välj bland de första 151 Pokémon och se detaljer.",
    tech: ["React", "PokéAPI", "CSS"],
    github: "https://github.com/Shayaa63/pokemon-app",
    live: "",
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
    description: "App som hjälper dig sätta mål, bryta ner dem i steg och följa din progress.",
    tech: ["Pågår"],
    github: "https://github.com/Shayaa63/Road2",
    live: "",
  },
];

export default function Projects() {
  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "14px",
      padding: "20px",
    }}>
      <p style={{
        fontSize: "11px", fontWeight: 600,
        letterSpacing: "1.2px", textTransform: "uppercase",
        color: "var(--muted)", margin: "0 0 16px",
      }}>Projekt</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "12px",
      }}>
        {projects.map((p) => (
          <div key={p.title} style={{
            background: "var(--surface-nested)",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}>
            {/* Titel + GitHub */}
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px"}}>
              <p style={{fontSize: "14px", fontWeight: 600, color: "var(--text)", margin: 0}}>
                {p.title}
              </p>
              <a href={p.github} target="_blank" rel="noopener noreferrer"
                style={{fontSize: "11px", color: "var(--accent)", textDecoration: "none", whiteSpace: "nowrap"}}>
                GitHub ↗
              </a>
            </div>

            {/* Beskrivning */}
            <p style={{fontSize: "12px", lineHeight: "1.6", color: "var(--muted)", margin: 0}}>
              {p.description}
            </p>

            {/* Tech-pills */}
            <div style={{display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "auto"}}>
              {p.tech.map((t) => (
                <span key={t} style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: "var(--accent-light)",
                  color: "var(--accent-text)",
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}