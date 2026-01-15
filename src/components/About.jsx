import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-image">
          <div className="image-placeholder">사진</div>
        </div>
        <div className="about-text">
          <h3>안녕하세요, 심우진입니다!</h3>
          <p>
            저는 언리얼 개발자인데 취미로 웹 개발에도 관심을 갖고 있습니다.
            주력 스킬은 C++과 언리얼 엔진입니다.
          </p>
          <p>
            새로운 기술을 배우고 실제 프로젝트에 적용하는 것을 좋아합니다.
          </p>
          <p>
            이 내용이 바로 적용되나요 ?
          </p>
          <div className="skills">
            <h4>Skills</h4>
            <div className="skill-tags">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Unreal Engine</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Unity</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
