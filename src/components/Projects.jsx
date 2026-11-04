import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { projects, signatureProjects, recentProjects, olderProjects, translateProject } from '../data/projects'
import './Projects.css'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const { t } = useLanguage()
  const [showOlder, setShowOlder] = useState(false)
  // 열린 프로젝트는 URL(?project=<slug>)이 단일 소스 - 프로젝트별 공유 링크가 성립한다
  const [searchParams, setSearchParams] = useSearchParams()
  const activeSlug = searchParams.get('project')
  // 첫 진입부터 ?project=가 있었는지 (모달을 닫을 때 목록으로 스크롤할지 판단)
  const enteredByDeepLink = useRef(Boolean(activeSlug))

  // 프로젝트 원본 데이터와 정렬/필터는 data/projects.js가 담당 (인쇄 페이지와 공유)
  const getTranslatedProject = (project) => translateProject(project, t)

  const selectedProject = projects.find(p => p.slug === activeSlug) || null

  // 카드 클릭 = URL에 slug 추가(push) → 브라우저 뒤로가기로 모달이 닫힌다
  const openProject = (project) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.set('project', project.slug)
      return next
    })
  }

  // 닫기는 replace - 닫을 때마다 히스토리에 빈 항목을 쌓지 않는다
  const closeProject = () => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.delete('project')
      return next
    }, { replace: true })

    // 링크로 바로 들어온 경우 닫으면 페이지 최상단이라 맥락이 없다 → 목록으로 이동
    // (모달이 걸어둔 body 스크롤 잠금이 풀린 다음 프레임에 실행)
    if (enteredByDeepLink.current) {
      enteredByDeepLink.current = false
      requestAnimationFrame(() => {
        document.getElementById('projects')?.scrollIntoView()
      })
    }
  }

  // 딥링크로 들어온 프로젝트가 접힌 영역에 있으면 목록을 펼쳐둔다
  useEffect(() => {
    if (activeSlug && olderProjects.some(p => p.slug === activeSlug)) {
      setShowOlder(true)
    }
  }, [activeSlug])

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
            onViewProject={() => openProject(project)}
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
            onViewProject={() => openProject(project)}
          />
        ))}
        {showOlder && olderProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={getTranslatedProject(project)}
            onViewProject={() => openProject(project)}
          />
        ))}
      </div>
      {olderProjects.length > 0 && (
        <button className="show-older-btn" onClick={() => setShowOlder(!showOlder)}>
          {showOlder ? `${t.projects.hideOlder} ▲` : `${t.projects.showOlder.replace('{count}', olderProjects.length)} ▼`}
        </button>
      )}

      {selectedProject && (
        <ProjectModal
          key={selectedProject.id}
          project={getTranslatedProject(selectedProject)}
          onClose={closeProject}
        />
      )}
    </section>
  )
}

export default Projects
