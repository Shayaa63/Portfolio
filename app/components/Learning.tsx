import { path } from "../data/path";
import { slug } from "../data/projects";

export default function Learning() {
  return (
    <section id="larande" className="card" aria-labelledby="larande-title">
      <h2 id="larande-title" className="card-title">
        Min lärandekurva
      </h2>

      <ol className="path">
        {path.map((step) => (
          <li
            key={step.title}
            className={step.current ? "step current" : "step"}
          >
            <span className="step-marker" aria-hidden="true" />
            <div>
              <h3>
                {step.title}
                {step.current && (
                  <>
                    {" "}
                    <span className="badge">Pågår</span>
                  </>
                )}
              </h3>
              <p>{step.text}</p>
              <div className="step-projects">
                {step.projects.map((name) => (
                  <a key={name} className="chip" href={`#${slug(name)}`}>
                    {name}
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