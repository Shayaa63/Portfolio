import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="kontakt" className="card contact" aria-labelledby="kontakt-title">
      <div>
        <h2
          id="kontakt-title"
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "var(--text)",
            margin: "0 0 4px",
          }}
        >
          Hör av dig
        </h2>
        <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>
          Jag letar efter jobb, LIA och samarbeten där jag får lära mig mer.
        </p>
      </div>
      <div className="contact-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          Mejla mig
        </a>
        <a
          className="btn btn-ghost"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}