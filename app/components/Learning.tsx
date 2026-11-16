import { path } from "../data/path";
import { slug } from "../data/projects";

export default function Learning() {
  return (
    <section
      id="larande"
      className="learning-section"
      aria-labelledby="larande-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">UTVECKLING / STEG FÖR STEG</span>
          <h2 id="larande-title" className="section-title">
            Min väg <span>hit.</span>
          </h2>
        </div>
      </div>

      <ol className="path">
        {path.map((step, index) => (
          <li
            key={step.title}
            className={step.current ? "step current" : "step"}
          >
            <div className="step-index">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="step-content">
              <div className="step-heading">
                <h3>{step.title}</h3>
                {step.current && <span className="badge">Pågår</span>}
              </div>

              <p>{step.text}</p>

              <div className="step-projects">
                {step.projects.map((name) => (
                  <a key={name} href={`#${slug(name)}`}>
                    {name} ↗
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}