import { profile } from "../data/profile";
import { projects, liveCount } from "../data/projects";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="eyebrow">PORTFOLIO / 2026</span>
        <p className="status">
          <span className="status-dot" aria-hidden="true" />
          Öppen för jobb, LIA och samarbeten
        </p>
      </div>

      <div className="hero-main">
        <p className="hero-intro">Hej, jag heter Aisha.</p>

        <h1 id="hero-title">
          Jag bygger digitala lösningar
          <span> från idé till kod.</span>
        </h1>

        <p className="hero-text">
          Fullstackutvecklare med bakgrund inom elektronik. Jag tycker om att
          förstå hur saker hänger ihop – från logiken bakom ett system till
          upplevelsen framför skärmen.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projekt">
            Utforska mina projekt <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href={`mailto:${profile.email}`}>
            Låt oss prata <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-note">
          <span className="hero-note-mark">AH</span>
          <span>Nyfikenhet möter problemlösning.</span>
        </div>

        <dl className="stats">
          <div className="stat">
            <dd>{String(projects.length).padStart(2, "0")}</dd>
            <dt>Projekt</dt>
          </div>
          <div className="stat">
            <dd>{String(liveCount).padStart(2, "0")}</dd>
            <dt>Liveprojekt</dt>
          </div>
          <div className="stat stat-wide">
            <dd>Fullstack</dd>
            <dt>Mitt fokus</dt>
          </div>
        </dl>
      </div>
    </section>
  );
}