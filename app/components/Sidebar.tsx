const stack = ["React", "Next.js", "Node.js", "Express", "Python", "PostgreSQL", "MongoDB"];

export default function Sidebar() {
  return (
    <aside style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      position: "sticky",
      top: "24px",
    }}>

      {/* Om mig */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "20px",
      }}>
        <div style={{
          width: "44px", height: "44px",
          borderRadius: "50%",
          background: "var(--accent-light)",
          color: "var(--accent)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: "16px",
          marginBottom: "14px",
        }}>AH</div>

        <p style={{fontSize: "17px", fontWeight: 700, color: "var(--text)", margin: "0 0 4px"}}>
          Aisha Hashi
        </p>
        <p style={{fontSize: "13px", color: "var(--accent)", margin: "0 0 12px"}}>
          Fullstackutvecklare
        </p>
        <p style={{fontSize: "13px", lineHeight: "1.7", color: "var(--muted)", margin: 0}}>
          Bygger webbapplikationer från databas till gränssnitt. Bakgrund inom elektronik — förstår hela systemet från krets till kod.
        </p>
      </div>

      {/* Stack */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "20px",
      }}>
        <p style={{
          fontSize: "11px", fontWeight: 600,
          letterSpacing: "1.2px", textTransform: "uppercase",
          color: "var(--muted)", margin: "0 0 12px",
        }}>Stack</p>
        <div style={{display: "flex", flexWrap: "wrap", gap: "6px"}}>
          {stack.map((s) => (
            <span key={s} style={{
              fontSize: "12px",
              padding: "4px 10px",
              borderRadius: "6px",
              background: "var(--surface-nested)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
            }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Kontakt */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "14px",
        padding: "20px",
      }}>
        <p style={{
          fontSize: "11px", fontWeight: 600,
          letterSpacing: "1.2px", textTransform: "uppercase",
          color: "var(--muted)", margin: "0 0 12px",
        }}>Kontakt</p>
        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
          {[
            {label: "GitHub", href: "https://github.com/Shayaa63"},
            {label: "aisha@email.com", href: "mailto:aisha@email.com"},
          ].map((link) => (
            <a key={link.label} href={link.href}
              target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                background: "var(--surface-nested)",
                border: "1px solid var(--border)",
                display: "block",
                transition: "color 0.15s",
              }}
            >{link.label} ↗</a>
          ))}
        </div>
      </div>

    </aside>
  );
}