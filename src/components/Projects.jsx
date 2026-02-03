import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useScrollFadeIn } from '../hooks/useScrollFadeIn'
import './Projects.css'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollFadeIn()
  const [filter, setFilter] = useState('Featured')
  const [subFilter, setSubFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    // 경력 프로젝트 (슈퍼빌런랩스)
    {
      id: 1,
      title: "PROJECT ARK",
      description: "대규모 MMORPG 개발에 대한 경력 요약",
      tech: ["Unreal5", "C++", "TCP/IP", "UI"],
      type: "career",
      category: "Unreal",
      period: "2024.04 - 2025.05",
      featured: true,
      youtubeId: "",  // YouTube 영상 ID (예: "dQw4w9WgXcQ")
      details: [
        "퀘스트 시스템 설계 및 구현",
        "UI 시스템 개발",
        "개발 도구 제작"
      ],
      github: "",
      resumeSection: "project-ark"  // 경력기술서 섹션 ID
    },
    {
      id: 3,
      title: "슈빌",
      description: "Unity 기반 모바일 캐주얼 게임 클라이언트 개발. UI 시스템 및 게임 로직 구현",
      tech: ["Unity", "C#"],
      type: "career",
      category: "Unity",
      period: "2025.05 - 2025.07",
      featured: false,
      youtubeId: "",
      details: [
        "UI 시스템 구현",
        "게임 로직 개발"
      ],
      github: "",
      resumeSection: "project-vir"  // 경력기술서 섹션 ID
    },
    // 개인 프로젝트
    {
      id: 4,
      title: "GAS를 활용한 멀티 플레이 게임",
      description: "언리얼 플러그인 GAS를 활용한 다양한 게임 모드와 Session을 지원하는 게임",
      tech: ["Unreal5", "C++", "GAS", "Network"],
      type: "personal",
      category: "Unreal5",
      period: "2026.01 - 현재",
      featured: true,
      youtubeId: "",
      details: [
        "GameplayAbilitySystem 기반 스킬 시스템",
        "멀티플레이어 세션 관리",
        "다양한 게임 모드 구현"
      ],
      github: "https://github.com/shimwoojin/WjWorld"
    },
    {
      id: 5,
      title: "LOL 모작",
      description: "'LOL'의 Playable Character로 재해석한 1대1 대전 액션 게임",
      tech: ["Unreal4", "Blueprint"],
      type: "personal",
      category: "Unreal4",
      period: "2023.04 - 2023.04",
      featured: true,
      youtubeId: "jydxblyq4mM",
      details: [
        "캐릭터 스킬 시스템 구현",
        "1대1 대전 시스템",
        "AI 상대 구현"
      ],
      github: "https://github.com/shimwoojin/PEDemo"
    },
    {
      id: 6,
      title: "다양한 무기를 구현한 게임",
      description: "총기류, 검, 활, 방패, 마법 등 다양한 무기류와 인벤토리, AI를 구현한 게임",
      tech: ["Unreal4", "C++"],
      type: "personal",
      category: "Unreal4",
      period: "2023.07 - 2023.08",
      featured: false,
      youtubeId: "N8sijH3GqfE",
      details: [
        "다양한 무기 시스템 (총기, 검, 활, 방패, 마법)",
        "인벤토리 시스템",
        "AI 구현"
      ],
      github: "https://github.com/shimwoojin/OWDemo"
    },
    {
      id: 7,
      title: "자체 아이디어로 개발한 디펜스 게임",
      description: "3가지 역할군(공격, 건설, 파밍)을 제공하며 스킬, AI(Behaviour Tree), 다수의 몬스터를 구현한 게임",
      tech: ["Unreal4", "Blueprint", "AI"],
      type: "personal",
      category: "Unreal4",
      period: "2023.03 - 2023.04",
      featured: false,
      youtubeId: "31g7Hj3bfow",
      details: [
        "3가지 역할군 시스템 (공격, 건설, 파밍)",
        "스킬 및 몽타주 구현",
        "Behaviour Tree 기반 AI"
      ],
      github: "https://github.com/shimwoojin/DADemo"
    },
    {
      id: 8,
      title: "DirectX 11로 구현한 Kirby",
      description: "2D 게임 제작 방식과 그래픽 파이프라인을 학습할 수 있었던 고전 게임 Kirby 핵심 기능 구현",
      tech: ["DirectX11", "C++"],
      type: "personal",
      category: "DirectX11",
      period: "2022.12 - 2023.01",
      featured: false,
      youtubeId: "YUSV_vlYPQU",
      details: [
        "DirectX 11 그래픽 파이프라인",
        "2D 스프라이트 렌더링",
        "게임 핵심 기능 구현"
      ],
      github: "https://github.com/shimwoojin/Kirby"
    },
    {
      id: 9,
      title: "Claude Learning Docs",
      description: "Claude Code와 함께한 프로젝트별 학습 기록을 체계적으로 문서화한 VitePress 기반 정적 사이트",
      tech: ["VitePress", "Markdown", "GitHub Actions"],
      type: "personal",
      category: "Web",
      period: "2026.01 - 현재",
      featured: true,
      youtubeId: "",
      details: [
        "VitePress 기반 문서 사이트 구축",
        "GitHub Actions 자동 동기화",
        "프로젝트별 학습 기록 관리"
      ],
      github: "https://github.com/shimwoojin/claude-learning",
      deployUrl: "https://claude-learning-three.vercel.app/"
    }
  ]

  const filters = [
    { key: 'Featured', label: t.projects.filters.featured },
    { key: 'Career', label: t.projects.filters.career },
    { key: 'Personal', label: t.projects.filters.personal }
  ]

  // 세부 필터 옵션
  const subFilters = {
    Career: ['All', 'Unreal', 'Unity'],
    Personal: ['All', 'Unreal5', 'Unreal4', 'DirectX11', 'Web']
  }

  // 메인 필터 변경 시 세부 필터 초기화
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setSubFilter('All')
  }

  const filteredProjects = (() => {
    let result = []

    switch (filter) {
      case 'Featured':
        return projects.filter(p => p.featured)
      case 'Career':
        result = projects.filter(p => p.type === 'career')
        break
      case 'Personal':
        result = projects.filter(p => p.type === 'personal')
        break
      default:
        return projects
    }

    // 세부 필터 적용
    if (subFilter !== 'All') {
      result = result.filter(p => p.category === subFilter)
    }

    return result
  })()

  // 번역된 프로젝트 데이터 가져오기
  const getTranslatedProject = (project) => {
    const translated = t.projects.items[project.title]
    if (translated) {
      return {
        ...project,
        title: translated.title,
        description: translated.description,
        details: translated.details
      }
    }
    return project
  }

  return (
    <section id="projects" className={`projects fade-in-section ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2>{t.projects.title}</h2>
      <div className="filter-buttons">
        {filters.map(f => (
          <button
            key={f.key}
            className={`filter-btn ${filter === f.key ? 'active' : ''}`}
            onClick={() => handleFilterChange(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      {subFilters[filter] && (
        <div className="sub-filter-buttons">
          {subFilters[filter].map(sub => (
            <button
              key={sub}
              className={`sub-filter-btn ${subFilter === sub ? 'active' : ''}`}
              onClick={() => setSubFilter(sub)}
            >
              {sub === 'All' ? t.projects.subFilterAll : sub}
            </button>
          ))}
        </div>
      )}
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={getTranslatedProject(project)}
            onViewProject={() => setSelectedProject(getTranslatedProject(project))}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
