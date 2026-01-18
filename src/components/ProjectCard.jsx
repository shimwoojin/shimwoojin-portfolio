import React from 'react'
import { useLanguage } from '../context/LanguageContext'

// Props: 부모 컴포넌트(Projects)에서 데이터를 전달받음
function ProjectCard({ project, onViewProject }) {
  const { t } = useLanguage()
  const typeLabel = project.type === 'career' ? t.projects.filters.career : t.projects.filters.personal
  const typeClass = project.type === 'career' ? 'career' : 'personal'

  const handleClick = (e) => {
    e.preventDefault()
    onViewProject()
  }

  // YouTube 썸네일 또는 커스텀 이미지 결정
  const getProjectImage = () => {
    if (project.youtubeId) {
      return `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`
    }
    if (project.image) {
      return project.image
    }
    return null
  }

  const imageUrl = getProjectImage()

  return (
    <div className={`project-card ${typeClass} ${project.featured ? 'featured' : ''}`}>
      <div className="project-image">
        {imageUrl ? (
          <img src={imageUrl} alt={project.title} className="project-thumbnail" />
        ) : (
          <div className={`image-placeholder placeholder-${project.category.toLowerCase()}`}>
            <span className="placeholder-category">{project.category}</span>
            <span className="placeholder-title">{project.title}</span>
          </div>
        )}
        <span className={`project-badge ${typeClass}`}>{typeLabel}</span>
        {project.featured && <span className="featured-badge">★ {t.projects.filters.featured}</span>}
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
            {t.projects.viewProject} →
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
