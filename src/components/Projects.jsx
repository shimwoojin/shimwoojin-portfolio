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
      // TODO: 팀 규모 확인 후 team 추가
      overview: {
        company: "슈퍼빌런랩스",
        role: "클라이언트 프로그래머",
        duration: "13개월"
      },
      featured: true,
      youtubeId: "",  // YouTube 영상 ID (예: "dQw4w9WgXcQ")
      image: "/project-ark.jpg",  // 슈퍼빌런랩스 PROJECT ARK 스닉피크 영상 프레임
      details: [
        "State Pattern 기반 퀘스트 시스템 설계 - 상태 클래스 추가만으로 확장되는 구조 정착",
        "12,000줄 캐릭터 클래스 컴포넌트화 - 코드량 80% 감소 (12,000줄 → 2,500줄)",
        "패킷 녹화/재생 디버깅 시스템 - 재현 불가능하던 동기화 버그를 녹화 파일로 즉시 재현",
        "스플라인 기반 월드맵 자동 생성 도구 - 수작업 지도 재작업을 버튼 클릭 한 번으로 자동화",
        "플러그인 커스터마이징 NPC 대화 시스템 - 기획팀이 코드 수정 없이 노드 그래프로 대화 제작",
        "인벤토리·HUD·설정 UI 전반, StandAlone 모드·치트 시스템 등 개발 환경 구축, AreaGroup 우선순위 로딩 최적화 (3초 멈춤 → 0.1초)"
      ],
      github: "",
      pressUrl: "https://reports.tiger-research.com/p/2024-supervlabs",
      pressName: "Tiger Research",
      pressLabel: "리서치 리포트",
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
      // TODO: 팀 규모 확인 후 team 추가
      overview: {
        company: "슈퍼빌런랩스",
        role: "클라이언트 프로그래머",
        duration: "3개월"
      },
      featured: false,
      youtubeId: "",
      image: "/shuville-keyart.jpg",  // 슈퍼빌런랩스 공식 키아트 (인벤 기사 배포본)
      details: [
        "레드닷(알림 마커) 시스템 구조 개선 - 레거시 제거 후 단일 시스템으로 통합, 인수인계 직후 버그 80% 감소",
        "런타임 인스턴스 추적 컨트롤러와 사용 위치 역추적 에디터 도구 개발",
        "대규모 업데이트 컨텐츠 개발 - 크루 상점, Playable Character 상호작용, 탭 기반 공통 UI, 던전 진입 UI",
        "DB 데이터를 Inspector 드롭다운으로 다루는 Attribute 등 에디터 확장으로 데이터 입력 실수 여지 축소",
        "패치→로딩→로그인→본게임 전체 Flow 분석으로 3개월 내 Unity C# 실무 투입 수준 도달"
      ],
      github: "",
      pressUrl: "https://www.inven.co.kr/webzine/news/?news=304015",
      pressName: "인벤",
      resumeSection: "project-vir"  // 경력기술서 섹션 ID
    },
    // 크래프톤 정글 게임테크 랩
    {
      id: 10,
      title: "KraftonEngine - DirectX11 자체 게임엔진",
      description: "크래프톤 정글 Game Tech Lab 3기에서 14주간 기수 공동 제작한 DirectX11 자체 게임엔진. Animation 런타임·Render 아키텍처·GameFramework·에디터 툴링을 설계·구현 주도 (전체 3,580 커밋 중 본인 1,292 커밋)",
      headline: "전체 3,580 커밋 중 본인 1,292 커밋",
      cardHighlights: [
        "20-Pass 렌더 파이프라인 · GPU 오클루전 컬링(Hi-Z)",
        "AnimGraph 노드 에디터 · Montage · Root Motion",
        "PIE · 4분할 멀티 뷰포트 · 셰이더 핫 리로드"
      ],
      tech: ["DirectX11", "C++20", "HLSL", "PhysX", "Lua"],
      type: "jungle",
      category: "DirectX11",
      period: "2026.03 - 2026.06",
      overview: {
        team: "기수 공동 제작 (매주 팀 재편성)",
        role: "Animation·Render·GameFramework·에디터 툴링 주도",
        duration: "14주"
      },
      featured: true,
      youtubeId: "43ZGB-exhJc",
      details: [
        "AnimGraph 런타임 - 그래프 자산을 FAnimNode 노드 트리로 컴파일, State Machine N-pose 블렌딩, Montage/Slot, Root Motion, Notify/NotifyState",
        "20-Pass 렌더 파이프라인 - SceneProxy/DrawCommand 아키텍처, 64bit SortKey 상태 정렬, CSM/EVSM 그림자 아틀라스, 컴퓨트 셰이더 라이트 컬링",
        "GPU 오클루전 컬링(Hi-Z) - 액터 1,001개 씬에서 드로우콜 ~2,000 → ~1,150, 프레임 2.69ms → 2.09ms",
        "UE 스타일 GameFramework - Actor/Pawn/PlayerController/GameMode, FWorldContext 기반 월드 수명 관리, PhysX 래그돌 통합",
        "에디터 툴링 - PIE(직렬화 라운드트립 월드 복제), AnimGraph 노드 에디터, 노티파이 타임라인, 4분할 멀티 뷰포트, 셰이더 핫 리로드"
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
      overview: { team: "3인 팀" },
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
      description: "자체 엔진 기반으로 진행한 3번의 게임잼. 리듬 액션 'Rhythm Dungeon', 드라이빙 어드벤처 '전지적 정글 시점', 무쌍 액션 '정글무쌍'을 매회 1주 내 완성",
      headline: "자체 엔진으로 3작품 완성",
      cardHighlights: [
        "리듬 액션 'Rhythm Dungeon'",
        "드라이빙 어드벤처 '전지적 정글 시점'",
        "무쌍 액션 '정글무쌍'"
      ],
      tech: ["자체엔진", "C++", "PhysX", "Lua"],
      type: "jungle",
      category: "GameJam",
      period: "2026.03 / 2026.05 / 2026.06",
      // Week 1: 4인, Week 9: 3인, Week 14: 4인
      overview: {
        team: "매회 3~4인 팀",
        duration: "매회 1주 이내"
      },
      featured: false,
      videos: [
        { id: "O12syUQLmXA", label: "Week 1 · Rhythm Dungeon" },
        { id: "LmUmmWRE4bk", label: "Week 9 · 전지적 정글 시점" },
        { id: "-prBOp3srOc", label: "Week 14 · 정글무쌍", primary: true }
      ],
      details: [
        "Week 1: 리듬 액션 게임 'Rhythm Dungeon' - 비트 판정(Perfect/Good/Miss), JSON 기반 스테이지 4종",
        "Week 9: 드라이빙 어드벤처 '전지적 정글 시점' - PhysX 물리, 5단계 미션, Lua 스크립팅, RmlUi",
        "Week 14: 무쌍 액션 '정글무쌍' - 물리·콘텐츠를 통합한 최종 게임잼",
        "엔진 개발과 병행하며 실제 게임 제작으로 엔진 검증"
      ],
      github: "https://github.com/shimwoojin/JungleArchive",
      repos: [
        { name: "Rhythm Dungeon (Week 1)", url: "https://github.com/shimwoojin/Jungle_Week1_Team2" },
        { name: "전지적 정글 시점 (Week 9)", url: "https://github.com/shimwoojin/Jungle_Week9_Team5" },
        { name: "정글무쌍 (Week 14)", url: "https://github.com/puter2712git/Jungle_Week14_Team2" }
      ]
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
      overview: { team: "1인 개발" },
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
      overview: { team: "1인 개발" },
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
      overview: { team: "1인 개발" },
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
      overview: { team: "1인 개발" },
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
      overview: { team: "1인 개발" },
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
        cardHighlights: translated.cardHighlights ?? project.cardHighlights,
        pressName: translated.pressName ?? project.pressName,
        pressLabel: translated.pressLabel ?? project.pressLabel,
        overview: translated.overview ?? project.overview,
        // 영상 라벨 / 저장소 이름은 locale에 대응 배열이 있을 때만 인덱스 순으로 교체
        videos: project.videos && translated.videoLabels
          ? project.videos.map((video, index) => ({
              ...video,
              label: translated.videoLabels[index] ?? video.label
            }))
          : project.videos,
        repos: project.repos && translated.repoNames
          ? project.repos.map((repo, index) => ({
              ...repo,
              name: translated.repoNames[index] ?? repo.name
            }))
          : project.repos
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
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
