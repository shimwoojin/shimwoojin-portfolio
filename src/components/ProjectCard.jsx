import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { getProjectVideos, getPrimaryVideoIndex, getYoutubeThumbnail } from '../utils/projectVideos'

// Props: 부모 컴포넌트(Projects)에서 데이터를 전달받음
function ProjectCard({ project, onViewProject, variant }) {
  const { t } = useLanguage()
  const videos = getProjectVideos(project)
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

  // 카드 전체가 클릭 대상이므로, 외부 링크는 모달이 열리지 않도록 이벤트를 막는다
  const stopCardActivation = (e) => {
    e.stopPropagation()
  }

  // GitHub 외 링크는 하나만 아이콘으로 노출 (나머지는 모달에서 전부 확인 가능)
  const externalLinkLabel = project.fabUrl
    ? t.projects.viewFab
    : project.docsUrl
      ? t.projects.viewDocs
      : t.projects.viewDeploy

  const pressLabel = project.pressName
    ? `${t.projects.viewPress} · ${project.pressName}`
    : t.projects.viewPress

  // 직접 지정한 image가 우선, 없으면 대표 영상의 YouTube 썸네일
  const getProjectImage = () => {
    if (project.image) {
      return project.image
    }
    if (videos.length > 0) {
      return getYoutubeThumbnail(videos[getPrimaryVideoIndex(videos)].id)
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
        {videos.length > 1 && (
          <span className="video-count-badge">▶ {videos.length}</span>
        )}
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-meta">
          <span className="project-period">{project.period}</span>
          {project.overview?.team && (
            <span className="project-team">{project.overview.team}</span>
          )}
        </div>
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
          <div className="project-actions">
            <span className="project-link">
              {t.projects.viewProject} →
            </span>
            <div className="project-external-links">
              {project.github && (
                <a
                  className="project-icon-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.projects.viewGithub}
                  title={t.projects.viewGithub}
                  onClick={stopCardActivation}
                  onKeyDown={stopCardActivation}
                >
                  <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                  </svg>
                </a>
              )}
              {project.pressUrl && (
                <a
                  className="project-icon-link"
                  href={project.pressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={pressLabel}
                  title={pressLabel}
                  onClick={stopCardActivation}
                  onKeyDown={stopCardActivation}
                >
                  <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 13.5h-8a1 1 0 0 1-1-1v-9h9v10a1 1 0 0 0 1 1H13a1.5 1.5 0 0 0 1.5-1.5V6h-3M3.5 5.5h5M3.5 7.5h5M3.5 9.5h3"
                    />
                  </svg>
                </a>
              )}
              {(project.fabUrl || project.docsUrl || project.deployUrl) && (
                <a
                  className="project-icon-link"
                  href={project.fabUrl || project.docsUrl || project.deployUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={externalLinkLabel}
                  title={externalLinkLabel}
                  onClick={stopCardActivation}
                  onKeyDown={stopCardActivation}
                >
                  <svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true" focusable="false">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.5 2.5h-4v11h11v-4M9.5 2.5h4v4M13.5 2.5 7 9"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
