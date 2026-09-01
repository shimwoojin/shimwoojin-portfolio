import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { signatureProjects, recentProjects, olderProjects, translateProject } from '../data/projects'
import './Projects.css'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const { t } = useLanguage()
  const [showOlder, setShowOlder] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // 프로젝트 원본 데이터와 정렬/필터는 data/projects.js가 담당 (인쇄 페이지와 공유)
  const getTranslatedProject = (project) => translateProject(project, t)

  return (
    <section id="projects" className="projects">
      <h2>{t.projects.title}</h2>

      {/* 시그니처 프로젝트 - 전폭 카드 */}
      <div className="signature-list">
        {signatureProjects.map(project => (
          <ProjectCard
            key={project.id}
            variant="signature"
            project={getTranslatedProject(project)}
            onViewProject={() => setSelectedProject(getTranslatedProject(project))}
          />
        ))}
      </div>

      {/* 전체 프로젝트 아카이브 - 최신순 */}
      <h3 className="archive-title">{t.projects.allTitle}</h3>
      <div className="projects-grid">
        {recentProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={getTranslatedProject(project)}
            onViewProject={() => setSelectedProject(getTranslatedProject(project))}
          />
        ))}
        {showOlder && olderProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={getTranslatedProject(project)}
            onViewProject={() => setSelectedProject(getTranslatedProject(project))}
          />
        ))}
      </div>
      {olderProjects.length > 0 && (
        <button className="show-older-btn" onClick={() => setShowOlder(!showOlder)}>
          {showOlder ? `${t.projects.hideOlder} ▲` : `${t.projects.showOlder} ▼`}
        </button>
      )}

      {selectedProject && (
        <ProjectModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
