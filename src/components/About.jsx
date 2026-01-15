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
            저는 웹 개발에 관심이 있는 개발자입니다. 
            React와 JavaScript를 배우며 성장하고 있습니다.
          </p>
          <p>
            새로운 기술을 배우고 실제 프로젝트에 적용하는 것을 좋아합니다.
          </p>
          <div className="skills">
            <h4>Skills</h4>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
