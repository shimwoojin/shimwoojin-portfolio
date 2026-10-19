import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Experience.css'

// locales의 experience.items와 인덱스 순서가 일치해야 한다 (인쇄 페이지도 이 배열을 재사용)
export const experienceSkills = [
  [],
  ["DirectX11", "C++20", "HLSL", "PhysX", "Lua", "Unreal5", "Perforce"],
  ["Unreal5", "C++", "TCP/IP", "SQLite", "SVN", "Unity", "C#", "Git"],
  ["C++", "DirectX11", "Unreal4", "Blueprint", "Windows API"],
  ["Network", "Database", "IoT", "C"]
]

function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="experience">
      <h2>{t.experience.title}</h2>
      <div className="timeline">
        {t.experience.items.map((exp, index) => {
          const type = exp.type || 'education'
          return (
            <div key={index} className={`timeline-item ${type}`}>
              <div className="timeline-marker">
                {type === 'career' ? '💼' : '🎓'}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  {type === 'career' && <span className="badge career-badge">{t.experience.workBadge}</span>}
                  <h3>{exp.company}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="position">{exp.position}</p>
                {exp.description && <p className="description">{exp.description}</p>}
                {experienceSkills[index].length > 0 && (
                  <div className="exp-skills">
                    {experienceSkills[index].map((skill, skillIndex) => (
                      <span key={skillIndex} className="exp-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
