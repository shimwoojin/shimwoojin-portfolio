import React from 'react'
import { useLanguage } from '../context/LanguageContext'

// Props: 부모 컴포넌트(Projects)에서 데이터를 전달받음
function ProjectCard({ project, onViewProject, variant }) {
  const { t } = useLanguage()
  const typeKey = ['career', 'jungle'].includes(project.type) ? project.type : 'personal'
  const typeLabel = t.projects.filters[typeKey]
  const typeClass = typeKey

  const handleClick = () => {
    onViewProject()
  }

  // 키보드 접근성: Enter/Space로도 열기
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onViewProject()
    }
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
    <div
      className={`project-card ${typeClass} ${project.featured ? 'featured' : ''} ${variant === 'signature' ? 'signature' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
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
        {project.headline && (
          <span className="project-headline">⭐ {project.headline}</span>
        )}
        <ul className="project-highlights">
          {(project.cardHighlights || project.details || []).slice(0, 3).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="project-footer">
          <div className="project-tech">
            {project.tech.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          <span className="project-link">
            {t.projects.viewProject} →
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
