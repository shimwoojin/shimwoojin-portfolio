import React from 'react'

// Props: 부모 컴포넌트(Projects)에서 데이터를 전달받음
function ProjectCard({ project, onViewProject }) {
  const typeLabel = project.type === 'career' ? '경력' : '개인'
  const typeClass = project.type === 'career' ? 'career' : 'personal'

  const handleClick = (e) => {
    e.preventDefault()
    onViewProject()
  }

  return (
    <div className={`project-card ${typeClass} ${project.featured ? 'featured' : ''}`}>
      <div className="project-image">
        <div className="image-placeholder">프로젝트 이미지</div>
        <span className={`project-badge ${typeClass}`}>{typeLabel}</span>
        {project.featured && <span className="featured-badge">★ 대표</span>}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <span className="project-period">{project.period}</span>
        <p>{project.description}</p>
        <div className="project-footer">
          <div className="project-tech">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          <button className="project-link" onClick={handleClick}>
            View Project →
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
