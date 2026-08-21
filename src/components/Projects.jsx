import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './Projects.css'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
  const { t } = useLanguage()
  const [showOlder, setShowOlder] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    // 경력 프로젝트 (슈퍼빌런랩스)
    {
      id: 1,
      title: "PROJECT ARK",
      description: "대규모 MMORPG 개발에 대한 경력 요약",
      headline: "13개월 · 퀘스트/UI/도구 담당",
      cardHighlights: [
        "State Pattern 퀘스트 시스템 설계",
        "12,000줄 캐릭터 클래스 컴포넌트화",
        "패킷 녹화/재생 디버깅 도구 제작"
      ],
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
      headline: "3개월 내 Unity 실무 전환",
      cardHighlights: [
        "레드닷 시스템 개선 · 버그 80% 감소",
        "대규모 업데이트 컨텐츠 개발",
        "에디터 확장 도구 제작"
      ],
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
    // 크래프톤 정글 게임테크 랩
    {
      id: 10,
      title: "KraftonEngine - DirectX11 자체 게임엔진",
      description: "크래프톤 정글에서 14주간 주 설계자로 개발한 DirectX11 자체 게임엔진. 20-Pass 렌더 파이프라인부터 게임플레이 프레임워크까지 풀스택 구현 (본인 커밋 1,292개)",
      headline: "본인 커밋 1,292개 · 주 설계자",
      cardHighlights: [
        "20-Pass 렌더 파이프라인 (Deferred·그림자·PP)",
        "UE 스타일 오브젝트 모델 · UUID 안전 포인터",
        "AnimGraph · PhysX 래그돌 · Lua 스크립팅"
      ],
      tech: ["DirectX11", "C++20", "HLSL", "PhysX", "Lua"],
      type: "jungle",
      category: "DirectX11",
      period: "2026.03 - 2026.08",
      featured: true,
      youtubeId: "",
      details: [
        "UE 스타일 오브젝트 모델 - RTTI/코드젠, UUID 기반 안전 포인터로 댕글링 참조 O(1) 차단",
        "20-Pass 렌더 파이프라인 - Deferred, CSM/EVSM 그림자, 컴퓨트 셰이더 라이트 컬링, 포스트프로세스",
        "AnimGraph 런타임 - State Machine, Montage, Root Motion, GPU 스키닝",
        "PhysX 물리/래그돌, FBX 임포트, Lua 스크립팅, ImGui 에디터",
        "매주 팀이 재편되는 환경에서 주 설계자로 엔진 설계 일관성 유지"
      ],
      github: "https://github.com/shimwoojin/JungleArchive"
    },
    {
      id: 11,
      title: "Dynamic Rope - Fab 출시 UE5 플러그인",
      description: "GPU XPBD 기반 로프 시뮬레이션 & 본 래핑 플러그인. Epic Fab 마켓플레이스 출시, 평점 5.0",
      headline: "Fab 마켓플레이스 출시 · 평점 5.0",
      cardHighlights: [
        "GPU XPBD 솔버 (RDG 컴퓨트)",
        "스켈레탈 본 래핑 · 래그돌 연동",
        "SDF 베이킹 에디터 툴 포함"
      ],
      tech: ["Unreal5", "C++", "Compute Shader", "XPBD", "Chaos"],
      type: "jungle",
      category: "Unreal5",
      period: "2026.08 Fab 출시",
      featured: true,
      youtubeId: "iRLpnem_LfQ",
      details: [
        "GPU XPBD 솔버(RDG 컴퓨트) - 시뮬레이션·충돌·튜브 메싱 전부 GPU 처리, CPU 폴백 포함",
        "스켈레탈 본 단위 래핑 - 애니메이션을 따라가는 로프, 크로스 액터 래핑 지원",
        "래그돌 연동(Chaos 물리 제약), 장력 기반 당기기/릴인/거리 기반 해제",
        "캡슐/SDF 이중 충돌 백엔드 + SDF 베이킹 에디터 툴 제공",
        "stat 대시보드, Sleep/LOD/컬링 최적화, 전체 C++ 소스 포함 (UE 5.5~5.8)"
      ],
      github: "",
      fabUrl: "https://www.fab.com/listings/17f62a8f-387b-48b0-9198-af7273dc3733",
      docsUrl: "https://teamkeno.github.io/DynamicRopeDocs/"
    },
    {
      id: 12,
      title: "정글 게임잼 3회",
      description: "자체 엔진 기반으로 진행한 3번의 게임잼. 리듬 액션 'Rhythm Dungeon' 등 매회 1주 내 완성",
      headline: "자체 엔진으로 3작품 완성",
      cardHighlights: [
        "리듬 액션 'Rhythm Dungeon'",
        "매회 1주 내 완성",
        "게임 제작으로 엔진 검증"
      ],
      tech: ["자체엔진", "C++", "Lua"],
      type: "jungle",
      category: "GameJam",
      period: "2026.03 / 2026.05 / 2026.08",
      featured: false,
      youtubeId: "",  // 게임잼 영상 추가 예정
      details: [
        "Week 1: 리듬 액션 게임 'Rhythm Dungeon' 제작",
        "Week 9: 자체 엔진 기반 게임 제작",
        "Week 14: 물리·콘텐츠 통합 최종 게임잼",
        "엔진 개발과 병행하며 실제 게임 제작으로 엔진 검증"
      ],
      github: "https://github.com/shimwoojin/JungleArchive"
    },
    // 개인 프로젝트
    {
      id: 4,
      title: "GAS를 활용한 멀티 플레이 게임",
      description: "언리얼 플러그인 GAS를 활용한 다양한 게임 모드와 Session을 지원하는 게임",
      headline: "GAS 기반 멀티플레이 · 진행 중",
      tech: ["Unreal5", "C++", "GAS", "Network"],
      type: "personal",
      category: "Unreal5",
      period: "2026.01 - 현재",
      featured: false,
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
      headline: "1대1 대전 액션 · AI 상대",
      tech: ["Unreal4", "Blueprint"],
      type: "personal",
      category: "Unreal4",
      period: "2023.04 - 2023.04",
      featured: false,
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
      headline: "무기 5종 · 인벤토리 · AI",
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
      headline: "역할군 3종 · Behaviour Tree AI",
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
      headline: "그래픽 파이프라인 직접 구현",
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
    // 임시 숨김 처리
    /*
    {
      id: 9,
      title: "Claude Learning Docs",
      description: "Claude Code와 함께한 프로젝트별 학습 기록을 체계적으로 문서화한 VitePress 기반 정적 사이트",
      headline: "AI 학습 기록 자동 문서화",
      tech: ["VitePress", "Markdown", "GitHub Actions"],
      type: "personal",
      category: "Web",
      period: "2026.01 - 현재",
      featured: false,
      youtubeId: "",
      details: [
        "VitePress 기반 문서 사이트 구축",
        "GitHub Actions 자동 동기화",
        "프로젝트별 학습 기록 관리"
      ],
      github: "https://github.com/shimwoojin/claude-learning",
      deployUrl: "https://claude-learning-three.vercel.app/"
    }
    */
  ]

  // 기간 시작 시점 기준 정렬 키 (예: "2026.03 - 2026.08" → 202603)
  const periodStart = (p) => parseInt(p.period.slice(0, 7).replace('.', ''), 10) || 0

  // 시그니처(featured)는 전폭 카드, 나머지는 최신순 아카이브 그리드
  const signatureProjects = projects.filter(p => p.featured)
  const archiveProjects = projects
    .filter(p => !p.featured)
    .sort((a, b) => periodStart(b) - periodStart(a))
  const recentProjects = archiveProjects.filter(p => periodStart(p) >= 202400)
  const olderProjects = archiveProjects.filter(p => periodStart(p) < 202400)

  // 번역된 프로젝트 데이터 가져오기
  const getTranslatedProject = (project) => {
    const translated = t.projects.items[project.title]
    if (translated) {
      return {
        ...project,
        title: translated.title,
        description: translated.description,
        details: translated.details,
        headline: translated.headline ?? project.headline,
        cardHighlights: translated.cardHighlights ?? project.cardHighlights
      }
    }
    return project
  }

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
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
