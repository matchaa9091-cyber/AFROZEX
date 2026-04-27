"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    },
    {
      title: "ACADEMICS",
      description: "Empowering minds through structured learning and educational resources.",
      icon: "🎓",
      link: "https://academics.afrozex.com",
    },
    {
      title: "SPORTS ANALYSIS",
      description: "Deep insights and statistical breakdowns of the sporting world.",
      icon: "📊",
      link: "https://dailypredictorug.afrozex.com/",
    },
    {
      title: "ENTERTAINMENT",
      description: "The pulse of modern culture, art, and immersive experiences.",
      icon: "🎭",
      link: "https://entertainment.afrozex.com",
    },
  ];

  return (
    <main className={styles.main}>
      <div 
        className={styles.pointerGlow} 
        style={{ 
          left: mousePos.x, 
          top: mousePos.y,
        }} 
      />

      <nav className={styles.nav}>
        <div className={styles.logo}>AFROZEX</div>
        <div className={styles.navLinks}>
          <Link href="#ecosystem" className={styles.navLink}>Ecosystem</Link>
          <Link href="#resources" className={styles.navLink}>Resources</Link>
          <Link href="#about" className={styles.navLink}>About Us</Link>
        </div>
        <Link href="#explore" className={styles.primaryBtn}>
          Explore
        </Link>
      </nav>

      <div className={styles.grid} id="ecosystem">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className={`${styles.card} glass animate-fadeIn`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardIcon}>{project.icon}</div>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardDescription}>{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
