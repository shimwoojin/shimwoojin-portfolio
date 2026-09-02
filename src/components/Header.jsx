import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Header.css'

function Header({ isDarkMode, toggleDarkMode }) {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo" onClick={() => window.location.reload()}>Shim Woojin</div>
        <ul className="nav-links">
          <li><a href="#about">{t.header.about}</a></li>
          <li><a href="#experience">{t.header.experience}</a></li>
          <li><a href="#projects">{t.header.projects}</a></li>
          <li><a href="#contact">{t.header.contact}</a></li>
          <li><Link to="/resume" className="nav-resume">{t.header.resume}</Link></li>
        </ul>
        <div className="header-controls">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {language === 'ko' ? 'EN' : '한'}
          </button>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
