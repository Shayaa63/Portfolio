import { profile, stack } from "../data/profile";

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Om mig">
      <div className="card">
        <div className="avatar" aria-hidden="true">
          {profile.initials}
        </div>
        <p
          style={{
            fontSize: "17px",
            fontWeight: 700,
            color: "var(--text)",
            margin: "0 0 4px",
          }}
        >
          {profile.name}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "var(--accent)",
            margin: "0 0 12px",
          }}
        >
          {profile.role}
        </p>
        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.7",
            color: "var(--muted)",
            margin: 0,
          }}
        >
          Jag har en bakgrund inom elektronik och vill förstå hur ett system
          hänger ihop, från hårdvara till gränssnitt. Jag bygger med fokus på
          ren kod och en genomtänkt användarupplevelse.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title" style={{ marginBottom: "12px" }}>
          Stack
        </h2>
        {stack.map((g) => (
          <div key={g.group} className="stack-group">
            <h3>{g.group}</h3>
            <div className="stack-items">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h2 className="card-title" style={{ marginBottom: "12px" }}>
          Länkar
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <a
            className="link-row"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a className="link-row" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>
    </aside>
  );
}