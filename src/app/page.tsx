"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "TECHNOLOGY",
      description: "Cutting-edge solutions and innovations in the digital frontier.",
      icon: "💻",
      link: "https://tech.afrozex.com",
      class: styles.tech,
    },
    // ... rest same
    {
      title: "ACADEMICS",
      description: "Empowering minds through structured learning and educational resources.",
      icon: "🎓",
      link: "https://academics.afrozex.com",
      class: styles.academics,
    },
    {
      title: "SPORTS ANALYSIS",
      description: "Deep insights and statistical breakdowns of the sporting world.",
      icon: "📊",
      link: "https://sports.afrozex.com",
      class: styles.sports,
    },
    {
      title: "ENTERTAINMENT",
      description: "The pulse of modern culture, art, and immersive experiences.",
      icon: "🎭",
      link: "https://entertainment.afrozex.com",
      class: styles.entertainment,
    },
  ];

  return (
    <main className={styles.main}>
      {/* Dynamic Spotlight */}
      <div 
        className="spotlight" 
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
        }} 
      />

      <div className="glow-bg" style={{ top: "-100px", left: "-100px" }} />
      <div className="glow-bg" style={{ bottom: "-100px", right: "-100px", animationDelay: "-5s" }} />
      
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <header className={`${styles.header} animate-fadeIn`}>
        <h1 className={styles.title}>AFROZEX</h1>
        <p className={styles.subtitle}>
          A multi-dimensional portal bridging innovation, knowledge, and entertainment.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className={`${styles.card} glass ${project.class} animate-fadeIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardGlow} />
            <span className={styles.cardIcon}>{project.icon}</span>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDescription}>{project.description}</p>
            <span className={styles.cardArrow}>→</span>
          </a>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AFROZEX. All rights reserved.</p>
      </footer>
    </main>
  );
}
