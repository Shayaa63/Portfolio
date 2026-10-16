import { profile } from "../data/profile";
import { projects, liveCount } from "../data/projects";

export default function Hero() {
  return (
    <section className="card hero" aria-labelledby="hero-title">
      <p className="status">
        <span className="status-dot" aria-hidden="true" />
        Öppen för jobb, LIA och samarbeten
      </p>

      <h1 id="hero-title">Ny som utvecklare, snabb på att lära mig.</h1>

      <p className="hero-text">
        Jag kombinerar min bakgrund inom elektronik med problemlösning i
        fullstackutveckling. Jag tar snabbt till mig nya tekniker, bygger
        funktionella projekt och fördjupar mig i allt från moderna
        frontend-ramverk (React/Next.js) till stabil backend-logik och
        databaser.
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projekt">
          Se mina projekt
        </a>
        <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
          Kontakta mig
        </a>
      </div>

      <dl className="stats">
        <div className="stat">
          <dt>projekt byggda</dt>
          <dd>{projects.length}</dd>
        </div>
        <div className="stat">
          <dt>live på nätet</dt>
          <dd>{liveCount}</dd>
        </div>
        <div className="stat">
          <dt>nya tekniker på vägen</dt>
          <dd>JS, React, Next.js, Node.js/Express, SQL/Datastrukturer</dd>
        </div>
      </dl>
    </section>
  );
}
