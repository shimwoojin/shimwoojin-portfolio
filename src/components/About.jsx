import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-image">
          <img src="/picture_shimwoojin.jpg" alt="심우진 프로필 사진" />
        </div>
        <div className="about-text">
          <h3>안녕하세요, 심우진입니다!</h3>
          <p>
            1년 4개월간 MMORPG와 모바일 캐주얼 게임 개발 경험을 가진 게임 클라이언트 프로그래머입니다.
            C++과 Unreal Engine을 주력으로 퀘스트 시스템, UI, 개발 도구 등 다양한 시스템을 설계하고 구현했습니다.
          </p>
          <p>
            유지보수 가능한 구조 설계와 팀 생산성 향상을 위한 개발 도구 제작에 관심이 많으며, 디자인 패턴을 활용한 확장 가능한 아키텍처 설계를 지향합니다.
          </p>
          <div className="skills">
            <h4>Skills</h4>
            <div className="skill-tags">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Unreal Engine</span>
              <span className="skill-tag">C#</span>
              <span className="skill-tag">Unity</span>
            </div>
          </div>
          <div className="skills">
            <h4>Development Tools</h4>
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
