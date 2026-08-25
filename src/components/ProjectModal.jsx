import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { getProjectVideos, getPrimaryVideoIndex, getYoutubeThumbnail } from '../utils/projectVideos'
import './ProjectModal.css'

function ProjectModal({ project, onClose }) {
  const navigate = useNavigate()
  const { t } = useLanguage()
  // 초기 선택 영상을 정하려면 훅보다 먼저 계산해야 한다 (project가 없는 경우 가드)
  const videos = project ? getProjectVideos(project) : []
  const [activeVideo, setActiveVideo] = useState(() => getPrimaryVideoIndex(videos))

  // ESC 키로 닫기
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // 모달이 열려 있는 동안 배경 페이지 스크롤 잠금
  React.useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  // 훅은 조건부 반환보다 위에 있어야 한다
  if (!project) return null

  const currentVideo = videos[activeVideo] || videos[0]

  const overview = project.overview || {}
  const overviewItems = [
    { label: t.projects.overviewCompany, value: overview.company },
    { label: t.projects.overviewTeam, value: overview.team },
    { label: t.projects.overviewRole, value: overview.role },
    { label: t.projects.overviewDuration, value: overview.duration }
  ].filter(item => item.value)

  // pressLabel로 자료 성격을 덮어쓸 수 있다 (언론 보도 / 리서치 리포트 등)
  const pressBase = project.pressLabel || t.projects.viewPress
  const pressLabel = project.pressName
    ? `${pressBase} · ${project.pressName}`
    : pressBase

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

        {/* 프로젝트 개요 - 있는 항목만 렌더링 */}
        {overviewItems.length > 0 && (
          <div className="modal-overview">
            {overviewItems.map(item => (
              <div className="overview-item" key={item.label}>
                <span className="overview-label">{item.label}</span>
                <span className="overview-value">{item.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* YouTube 동영상 (여러 개면 아래 썸네일로 전환) */}
        {currentVideo && (
          <div className="modal-video">
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo.id}`}
              title={currentVideo.label || project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {videos.length > 1 && (
              <div className="video-thumbnails">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    className={`video-thumb ${index === activeVideo ? 'active' : ''}`}
                    onClick={() => setActiveVideo(index)}
                    aria-pressed={index === activeVideo}
                  >
                    <span className="video-thumb-media">
                      <img src={getYoutubeThumbnail(video.id)} alt="" />
                      <span className="video-thumb-play" aria-hidden="true">▶</span>
                    </span>
                    <span className="video-thumb-label">
                      {video.label || `${t.projects.videoLabel} ${index + 1}`}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 프로젝트 설명 */}
        <div className="modal-body">
          <p className="modal-description">{project.description}</p>

          {/* 상세 내용 */}
          {project.details && (
            <div className="modal-details">
              <h3>{t.projects.keyWork}</h3>
              <ul>
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 기술 스택 */}
          <div className="modal-tech">
            <h3>{t.projects.techStack}</h3>
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
                {t.projects.viewResume} →
              </button>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                {t.projects.viewGithub} →
              </a>
            )}
            {/* 저장소가 여러 개인 프로젝트는 repos 배열을 각각 노출 */}
            {project.repos && project.repos.map(repo => (
              <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer">
                {repo.name} →
              </a>
            ))}
            {project.pressUrl && (
              <a href={project.pressUrl} target="_blank" rel="noopener noreferrer">
                {pressLabel} →
              </a>
            )}
            {project.fabUrl && (
              <a href={project.fabUrl} target="_blank" rel="noopener noreferrer">
                {t.projects.viewFab} →
              </a>
            )}
            {project.docsUrl && (
              <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                {t.projects.viewDocs} →
              </a>
            )}
            {project.deployUrl && (
              <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                {t.projects.viewDeploy} →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
