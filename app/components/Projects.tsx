import { projects, slug } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projekt"
      className="projects-section"
      aria-labelledby="projekt-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">UTVALDA ARBETEN / 01—07</span>
          <h2 id="projekt-title" className="section-title">
            Saker jag har <span>byggt.</span>
          </h2>
        </div>
        <span className="section-count">
          {String(projects.length).padStart(2, "0")} projekt
        </span>
      </div>

      <div className="projects-masonry">
        {projects.map((p, index) => (
          <article
            key={p.title}
            id={slug(p.title)}
            className={`project project-${index + 1} ${
              index === 0 ? "project-featured" : ""
            }`}
          >
            <div className="project-topline">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")} / PROJECT
              </span>

              {p.inProgress && (
                <span className="badge">
                  <span className="badge-dot" />
                  Pågår
                </span>
              )}
            </div>

            <div className="project-head">
              <h3 className="project-title">{p.title}</h3>

              <div className="project-links">
                {p.live && (
                  <a
                    className="project-link-live"
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title}, live-demo`}
                  >
                    Live ↗
                  </a>
                )}

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.title} på GitHub`}
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <p className="project-desc">{p.description}</p>

            {p.learned && (
              <div className="project-note">
                <span className="note-label">VAD JAG LÄRT MIG</span>
                <p>{p.learned}</p>
              </div>
            )}

            {p.decision && (
              <div className="project-decision">
                <span className="decision-icon" aria-hidden="true">
                  ✳
                </span>
                <p>{p.decision}</p>
              </div>
            )}

            {p.tech.length > 0 && (
              <div className="project-tech">
                {p.tech.map((tech) => (
                  <span key={tech} className="chip-accent">
                    {tech}
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