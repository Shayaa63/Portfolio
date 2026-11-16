import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="contact-section"
      aria-labelledby="kontakt-title"
    >
      <span className="eyebrow">NÄSTA KAPITEL</span>

      <div className="contact-content">
        <div>
          <h2 id="kontakt-title">
            Har du något
            <span> på gång?</span>
          </h2>
          <p>
            Jag är öppen för nya möjligheter, LIA och samarbeten. Hör gärna av
            dig!
          </p>
        </div>

        <a className="contact-button" href={`mailto:${profile.email}`}>
          Kontakta mig <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="contact-footer">
        <span>AISHA HASHI © 2026</span>
        <a href="#main">Till toppen ↑</a>
      </div>
    </section>
  );
}