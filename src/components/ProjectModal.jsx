import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProjectModal.css'

function ProjectModal({ project, onClose }) {
  const navigate = useNavigate()

  if (!project) return null

  // ESC 키로 닫기
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // 경력기술서 페이지로 이동
  const handleViewResume = () => {
    if (project.resumeSection) {
      onClose()
      navigate(`/resume#${project.resumeSection}`)
    }
  }

  // 배경 클릭 시 닫기
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>

        {/* 헤더 */}
        <div className="modal-header">
          <h2>{project.title}</h2>
          <span className="modal-period">{project.period}</span>
        </div>

        {/* YouTube 동영상 */}
        {project.youtubeId && (
          <div className="modal-video">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* 프로젝트 설명 */}
        <div className="modal-body">
          <p className="modal-description">{project.description}</p>

          {/* 상세 내용 */}
          {project.details && (
            <div className="modal-details">
              <h3>주요 기능 및 구현 내용</h3>
              <ul>
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 기술 스택 */}
          <div className="modal-tech">
            <h3>기술 스택</h3>
            <div className="tech-tags">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* 링크 */}
          <div className="modal-links">
            {project.resumeSection && (
              <button className="resume-link-btn" onClick={handleViewResume}>
                경력기술서 상세보기 →
              </button>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub 저장소 →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
