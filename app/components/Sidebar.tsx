import { profile, stack } from "../data/profile";

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Om mig">
      <section className="profile-panel">
        <div className="profile-monogram">{profile.initials}</div>

        <span className="eyebrow">OM MIG</span>
        <h2>{profile.name}</h2>
        <p className="profile-role">{profile.role}</p>

        <p className="profile-description">
          Jag har en bakgrund inom elektronik och vill förstå hur ett system
          hänger ihop, från hårdvara till gränssnitt. Jag bygger med fokus på
          problemlösning, tydlig struktur och användarupplevelse.
        </p>

        <a className="profile-email" href={`mailto:${profile.email}`}>
          Säg hej <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="stack-panel">
        <span className="eyebrow">VERKTYGSLÅDA</span>
        <h2 className="sidebar-heading">Min stack.</h2>

        {stack.map((group) => (
          <div key={group.group} className="stack-group">
            <h3>{group.group}</h3>
            <div className="stack-items">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="links-panel">
        <span className="eyebrow">HITTA MIG</span>
        <a
          className="social-link"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
        <a className="social-link" href={`mailto:${profile.email}`}>
          E-post <span aria-hidden="true">↗</span>
        </a>
      </section>
    </aside>
  );
}