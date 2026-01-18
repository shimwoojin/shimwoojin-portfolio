import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import './About.css'

function About() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollFadeIn()

  return (
    <section id="about" className={`about fade-in-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2>{t.about.title}</h2>
      <div className="about-content">
        <div className="profile-image">
          <img src="/picture_shimwoojin.jpg" alt={t.about.profileAlt} />
        </div>
        <div className="about-text">
          <h3>{t.about.greeting}</h3>
          <p>{t.about.intro1}</p>
          <p>{t.about.intro2}</p>
          <div className="skills">
            <h4>{t.about.skills}</h4>
            <div className="skill-tags">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Unreal Engine</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Unity</span>
            </div>
          </div>
          <div className="skills">
            <h4>{t.about.devTools}</h4>
            <div className="skill-tags">
              <span className="skill-tag tool">Git</span>
              <span className="skill-tag tool">SVN</span>
              <span className="skill-tag tool">Visual Studio</span>
              <span className="skill-tag tool">Rider</span>
              <span className="skill-tag tool">VS Code</span>
              <span className="skill-tag tool">Claude Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
