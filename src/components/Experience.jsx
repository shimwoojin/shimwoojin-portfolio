import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Experience.css'

// locales의 experience.items와 인덱스 순서가 일치해야 한다 (인쇄 페이지도 이 배열을 재사용)
// 문자열이 기본, 회사 자체 엔진은 { name, inHouse: true }로 두면 강조 태그로 그린다
export const experienceSkills = [
  [{ name: "BlackSpace Engine", inHouse: true }, "C++"],
  ["DirectX11", "C++20", "HLSL", "PhysX", "Lua", "Unreal5", "Perforce"],
  ["Unreal5", "C++", "TCP/IP", "SQLite", "SVN", "Unity", "C#", "Git"],
  ["C++", "DirectX11", "Unreal4", "Blueprint", "Windows API"],
  ["Network", "Database", "IoT", "C"]
]

// 인쇄본처럼 글자만 필요한 곳에서 쓰는 태그 문구
export const skillText = (skill, t) =>
  typeof skill === 'string' ? skill : `${skill.name} (${t.experience.inHouseEngine})`

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
                      typeof skill === 'string' ? (
                        <span key={skillIndex} className="exp-skill-tag">{skill}</span>
                      ) : (
                        <span key={skillIndex} className="exp-skill-tag engine">
                          <span className="exp-skill-note">{t.experience.inHouseEngine}</span>
                          {skill.name}
                        </span>
                      )
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
