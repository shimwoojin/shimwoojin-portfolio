import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      description: "React를 사용한 개인 포트폴리오 사이트",
      tech: ["React", "CSS", "Vite"],
      link: "#"
    },
    {
      id: 2,
      title: "프로젝트 2",
      description: "여기에 두 번째 프로젝트 설명을 추가하세요",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "프로젝트 3",
      description: "여기에 세 번째 프로젝트 설명을 추가하세요",
      tech: ["React", "Node.js"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="image-placeholder">프로젝트 이미지</div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
