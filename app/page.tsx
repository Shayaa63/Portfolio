"use client";
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Learning from "./components/Learning";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import { profile } from "./data/profile";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      if (localStorage.getItem("theme") === "light") {
        setDark(false);
        document.documentElement.setAttribute("data-theme", "light");
      }
    } catch {
      // localStorage kan vara blockerat, då används mörkt tema
    }
  }, []);

  function toggleTheme() {
    const next = dark ? "light" : "dark";
    setDark(!dark);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // ignoreras
    }
  }

  return (
    <main id="main" className="page">
      <a className="skip-link" href="#projekt">
        Hoppa till projekten
      </a>

      <div className="page-inner">
        {/* Topbar */}
        <header className="topbar">
          <p className="topbar-name">{profile.name}</p>
          <nav className="topbar-right" aria-label="Sidor">
            <a className="nav-link" href="#larande">
              Lärande
            </a>
            <a className="nav-link" href="#projekt">
              Projekt
            </a>
            <a className="nav-link" href="#kontakt">
              Kontakt
            </a>
            {mounted && (
              <button
                className="theme-btn"
                onClick={toggleTheme}
                aria-label={dark ? "Byt till ljust tema" : "Byt till mörkt tema"}
              >
                {dark ? "☀ Ljust" : "☾ Mörkt"}
              </button>
            )}
          </nav>
        </header>

        {/* Sidebar + innehåll. Staplas på mobil via .layout i globals.css */}
        <div className="layout">
          <Sidebar />
          <div className="content">
            <Hero />
            <Learning />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}