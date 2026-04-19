export default function Contact() {
  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "14px",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "16px",
      flexWrap: "wrap",
    }}>
      <div>
        <p style={{fontSize: "15px", fontWeight: 700, color: "var(--text)", margin: "0 0 4px"}}>
          Låt oss prata
        </p>
        <p style={{fontSize: "13px", color: "var(--muted)", margin: 0}}>
          Öppen för jobb, LIA och samarbeten.
        </p>
      </div>
      <a href="mailto:aisha@email.com" style={{
        background: "var(--accent)",
        color: "#ffffff",
        borderRadius: "8px",
        padding: "10px 20px",
        fontSize: "13px",
        fontWeight: 600,
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}>
        Kontakta mig
      </a>
    </div>
  );
}