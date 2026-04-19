"use client";
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDark(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <main style={{
      minHeight: "100vh",
      padding: "24px 16px",
      background: "var(--bg)",
    }}>
      <div style={{maxWidth: "1100px", margin: "0 auto"}}>

        {/* Topbar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}>
          <p style={{fontSize: "14px", fontWeight: 600, color: "var(--text)"}}>
            Aisha Hashi
          </p>
          {mounted && (
            <button onClick={toggleTheme} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--muted)",
              borderRadius: "8px",
              padding: "6px 12px",
               fontSize: "12px",
              cursor: "pointer",
            }}>
              {dark ? "☀ Ljust" : "☾ Mörkt"}
            </button>
          )}
        </div>

        {/* Layout — sidebar + innehåll */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "clamp(220px, 25%, 280px) 1fr",
          gap: "16px",
          alignItems: "start",
        }}>
          <Sidebar />
          <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
            <Projects />
            <Contact />
          </div>
        </div>

        {/* Mobil — stapla vertikalt under 768px */}
        <style>{`
          @media (max-width: 768px) {
            .portfolio-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

      </div>
    </main>
  );
}