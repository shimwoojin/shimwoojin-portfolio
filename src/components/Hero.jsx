import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Hero.css'

// 첫 화면 3초 피치 - 직군 / 대표 성과 4개 / 경력기술서·프로젝트·GitHub 진입점
function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">{t.hero.eyebrow}</p>
        <h1 className="hero-name">{t.hero.name}</h1>
        <p className="hero-role">{t.hero.role}</p>
        <p className="hero-pitch">{t.hero.pitch}</p>

        <ul className="hero-highlights">
          {t.hero.highlights.map((item, index) => (
            <li key={index} className="hero-highlight">
              <span className="hero-highlight-value">{item.value}</span>
              <span className="hero-highlight-label">{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="hero-actions">
          <Link to="/resume" className="hero-btn hero-btn-primary">
            {t.hero.ctaResume}
          </Link>
          <a href="#projects" className="hero-btn hero-btn-secondary">
            {t.hero.ctaProjects}
          </a>
          <a
            href="https://github.com/shimwoojin"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn-ghost"
          >
            {t.hero.ctaGithub}
          </a>
        </div>

        <p className="hero-stack">{t.hero.stack}</p>
      </div>
    </section>
  )
}

export default Hero
