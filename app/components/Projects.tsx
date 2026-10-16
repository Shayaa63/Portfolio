import { projects, slug } from "../data/projects";

export default function Projects() {
  return (
    <section id="projekt" className="card" aria-labelledby="projekt-title">
      <h2 id="projekt-title" className="card-title">
        Projekt
      </h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.title} id={slug(p.title)} className="project">
            <div className="project-head">
              <h3 className="project-title">
                {p.title}
                {p.inProgress && <span className="badge">Pågår</span>}
              </h3>

              <div className="project-links">
                {p.live && (
                  <a
                    className="live"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title}, live-demo (öppnas i ny flik)`}
                  >
                    Live ↗
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} på GitHub (öppnas i ny flik)`}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <p className="project-desc">{p.description}</p>

            {p.learned && (
              <p className="project-note">
                <strong>Lärde mig:</strong> {p.learned}
              </p>
            )}

            {p.decision && <p className="project-decision">💡 {p.decision}</p>}

            <div className="project-spacer" />

            {p.tech.length > 0 && (
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t} className="chip-accent">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}