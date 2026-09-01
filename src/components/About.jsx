import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './About.css'

// 핵심(깊게 방어 가능) / 사용 경험(무엇에 썼는지 설명 가능) / 개발 도구
// 인쇄 페이지(/print)도 이 배열들을 그대로 재사용한다
export const coreSkills = ['C++', 'Unreal Engine', 'DirectX11', 'HLSL']
export const experiencedSkills = ['Unity', 'C#', 'PhysX', 'Lua']
export const devTools = ['Perforce', 'Git', 'SVN', 'Visual Studio', 'Rider']

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
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
            <div className="skill-tier">
              <span className="skill-tier-label">{t.about.skillsCore}</span>
              <div className="skill-tags">
                {coreSkills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-tier">
              <span className="skill-tier-label">{t.about.skillsExperienced}</span>
              <div className="skill-tags">
                {experiencedSkills.map(skill => (
                  <span key={skill} className="skill-tag secondary">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="skills">
            <h4>{t.about.devTools}</h4>
            <div className="skill-tags">
              {devTools.map(tool => (
                <span key={tool} className="skill-tag tool">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
