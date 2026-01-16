import React from 'react'
import './Experience.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      type: "career",
      company: "슈퍼빌런랩스",
      position: "클라이언트 엔지니어",
      period: "2024.04.15 - 2025.07.31",
      description: "언리얼 엔진5를 활용한 MMORPG 개발과 유니티 엔진 2022.3을 활용한 모바일 캐주얼 게임 개발",
      skills: ["Unreal", "C++", "Untiy", "C#", "Python"]
    },
    {
      id: 2,
      type: "education",
      company: "SGA 게임 아카데미",
      position: "학생",
      period: "2022.09 - 2023.12",
      description: "게임 개발에 필요한 전반적인 지식 습득 및 다수의 개인 프로젝트 진행",
      skills: ["C", "C++", "Windows API", "DirectX11", "Unreal"]
    },
    {
      id: 3,
      type: "education",
      company: "충북대학교-정보통신공학부",
      position: "학생",
      period: "2016.03 - 2023.02",
      description: "네트워크, IOT, DB, 수학, 전자 회로 등 전반적인 IT 지식 습득",
      skills: ["Network"]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map(exp => (
          <div key={exp.id} className={`timeline-item ${exp.type}`}>
            <div className="timeline-marker">
              {exp.type === 'career' ? '💼' : '🎓'}
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                {exp.type === 'career' && <span className="badge career-badge">실무 경력</span>}
                <h3>{exp.company}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <p className="position">{exp.position}</p>
              <p className="description">{exp.description}</p>
              <div className="exp-skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="exp-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
