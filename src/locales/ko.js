const ko = {
  // Header
  header: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    resume: '경력기술서'
  },

  // Hero - 첫 화면 3초 피치
  hero: {
    eyebrow: 'Game Client Programmer',
    name: '심우진',
    role: '게임 클라이언트 프로그래머',
    pitch: 'MMORPG 신규 개발과 모바일 라이브 서비스를 모두 거쳤습니다. 퀘스트·NPC 대화·UI 같은 핵심 시스템부터, 팀이 실제로 매일 쓰는 개발 도구까지 직접 만듭니다.',
    highlights: [
      { value: '12,000줄 → 2,500줄', label: '캐릭터 클래스 컴포넌트화 (Unreal 5)' },
      { value: '재현 불가 버그를 즉시 재현', label: '패킷 녹화/재생 디버깅 시스템 제작' },
      { value: 'Animation · Render 주도', label: 'DirectX11 자체 게임엔진 (크래프톤 정글)' },
      { value: 'Fab 마켓플레이스 출시', label: 'UE5 GPU 물리 플러그인 Dynamic Rope' }
    ],
    ctaResume: '경력기술서 보기 →',
    ctaProjects: '프로젝트 둘러보기',
    ctaGithub: 'GitHub ↗',
    stack: 'Unreal Engine 5 · C++ · Unity · C# · DirectX11 · HLSL'
  },

  // About
  about: {
    title: 'About Me',
    greeting: '안녕하세요, 심우진입니다!',
    intro1: '1년 4개월의 MMORPG·모바일 게임 실무 경험에 더해, 크래프톤 정글 게임테크랩에서 14주간 DirectX11 자체 게임엔진을 주 설계자로 개발한 게임 클라이언트 프로그래머입니다. C++과 Unreal Engine을 주력으로 렌더링 파이프라인부터 퀘스트·UI·개발 도구까지 폭넓은 시스템을 설계하고 구현합니다.',
    intro2: '유지보수 가능한 구조 설계와 팀 생산성을 높이는 도구 제작에 관심이 많으며, GPU 물리 플러그인 Dynamic Rope를 Fab 마켓플레이스에 출시하는 등 설계부터 출시까지 완결하는 개발을 지향합니다. AI 도구를 적극 활용하는 개발 워크플로를 실무에 적용하고 있습니다.',
    skills: 'Skills',
    skillsCore: '핵심',
    skillsExperienced: '사용 경험',
    devTools: 'Development Tools',
    profileAlt: '심우진 프로필 사진'
  },

  // Experience
  experience: {
    title: 'Experience',
    workBadge: '실무 경력',
    items: [
      {
        type: 'education',
        company: '크래프톤 정글 게임테크랩',
        position: '교육생',
        period: '2026.03.09 - 2026.08.24',
        description: '14주간 DirectX11 자체 게임엔진 개발(주 설계자), 게임잼 3회 진행, UE5 물리 플러그인 Dynamic Rope 개발 및 Fab 마켓플레이스 출시'
      },
      {
        type: 'career',
        company: '슈퍼빌런랩스',
        position: '클라이언트 엔지니어',
        period: '2024.04.15 - 2025.07.31',
        description: 'UE5 MMORPG 핵심 시스템(퀘스트·NPC 대화·UI) 개발, 12,000줄 캐릭터 클래스 컴포넌트 리팩토링, 패킷 녹화/재생 등 팀 생산성 도구 제작, Unity 모바일 게임 라이브 운영 및 레드닷 시스템 개선(버그 주 5건대 → 1건 이하)'
      },
      {
        type: 'education',
        company: 'SGA 게임 아카데미',
        position: '학생',
        period: '2022.09 - 2023.12',
        description: 'C++·DirectX11·언리얼 엔진 게임 개발 과정 수료, DirectX11 Kirby 클론·LOL 모작·디펜스 게임 등 개인 프로젝트 4종 완성'
      },
      {
        type: 'education',
        company: '충북대학교-정보통신공학부',
        position: '학생',
        period: '2016.03 - 2023.02',
        description: '정보통신공학 학사 졸업, 네트워크·데이터베이스·IoT·전자회로 등 CS 기반 지식 습득'
      }
    ]
  },

  // Projects
  projects: {
    title: 'Projects',
    filters: {
      featured: '대표',
      career: '경력',
      jungle: '정글',
      personal: '개인'
    },
    allTitle: '전체 프로젝트',
    showOlder: '이전 프로젝트 더 보기',
    hideOlder: '이전 프로젝트 접기',
    viewProject: '프로젝트 보기',
    viewResume: '경력기술서 상세보기',
    viewGithub: 'GitHub 저장소',
    viewContributions: 'GitHub 기여도 맵 (담당 시스템별 대표 커밋)',
    viewDeploy: '배포 사이트',
    viewFab: 'Fab 스토어',
    viewDocs: '문서 사이트',
    viewPress: '언론 보도',
    copyLink: '이 프로젝트 링크 복사',
    copiedLink: '링크 복사됨',
    techStack: '기술 스택',
    keyWork: '주요 작업',
    videoLabel: '영상',
    overviewCompany: '소속',
    overviewTeam: '팀 구성',
    overviewRole: '역할',
    overviewDuration: '기간',
    items: {
      'PROJECT ARK': {
        title: 'PROJECT ARK',
        description: '전체 17명(클라이언트 5명) 규모의 MMORPG 신규 개발. 고정 담당 도메인 없이 우선순위에 따라 투입되는 방식이라, 퀘스트·NPC 대화·UI부터 디버깅 도구·최적화까지 클라이언트 시스템 전반을 폭넓게 담당',
        details: [
          '패킷 녹화/재생 디버깅 시스템 - 재현 불가능하던 동기화 버그를 녹화 파일로 즉시 재현, 맵 진입 시 자동 녹화로 누락 없이 기록',
          '12,000줄 캐릭터 클래스 컴포넌트화 - 기존 호출부를 깨지 않는 점진 이관으로 코드량 80% 감소 (12,000줄 → 2,500줄)',
          '퀘스트 시스템 설계 - UI·네트워크·게임 로직의 경계를 분리해 독립 수정 가능한 구조 확보',
          'NPC 대화 시스템 - 자체 구현 대신 플러그인 커스터마이징을 선택, 기획팀이 코드 수정 없이 노드 그래프로 대화 제작',
          '스플라인 기반 월드맵 자동 생성 도구 - 수작업 지도 재작업을 버튼 클릭 한 번으로 자동화',
          '인벤토리·HUD·설정 UI 전반, StandAlone 모드·치트 시스템 등 개발 환경 구축, AreaGroup 우선순위 로딩 최적화 (던전→일반맵 진입 시 3초 멈춤 → 0.1초)'
        ]
      },
      '슈빌': {
        title: '슈빌',
        description: 'Unity 기반 모바일 캐주얼 게임 클라이언트 개발. UI 시스템 및 게임 로직 구현',
        details: [
          '레드닷(알림 마커) 시스템 구조 개선 - 레거시 제거 후 단일 시스템으로 통합, 인수인계 직후 버그 주 5건대 → 1건 이하',
          '런타임 인스턴스 추적 컨트롤러와 사용 위치 역추적 에디터 도구 개발',
          '대규모 업데이트 컨텐츠 개발 - 크루 상점, Playable Character 상호작용, 탭 기반 공통 UI, 던전 진입 UI',
          'DB 데이터를 Inspector 드롭다운으로 다루는 Attribute 등 에디터 확장으로 데이터 입력 실수 여지 축소',
          '패치→로딩→로그인→본게임 전체 Flow 분석으로 3개월 내 Unity C# 실무 투입 수준 도달'
        ]
      },
      'KraftonEngine - DirectX11 자체 게임엔진': {
        title: 'KraftonEngine - DirectX11 자체 게임엔진',
        description: '크래프톤 정글 Game Tech Lab 3기에서 14주간 기수 공동 제작한 DirectX11 자체 게임엔진. 매주 팀이 재편성되는 환경에서 Animation 런타임·Render 아키텍처·GameFramework·에디터 툴링을 설계·구현 주도',
        headline: 'Animation · Render 서브시스템 설계·구현 주도',
        cardHighlights: [
          '20-Pass 렌더 파이프라인 · GPU 오클루전 컬링(Hi-Z)',
          'AnimGraph 노드 에디터 · Montage · Root Motion',
          'PIE · 4분할 멀티 뷰포트 · 셰이더 핫 리로드'
        ],
        details: [
          'AnimGraph 런타임 - 그래프 자산을 FAnimNode 노드 트리로 컴파일, State Machine N-pose 블렌딩, Montage/Slot, Root Motion, Notify/NotifyState',
          '20-Pass 렌더 파이프라인 - SceneProxy/DrawCommand 아키텍처, 64bit SortKey 상태 정렬, CSM/EVSM 그림자 아틀라스, 컴퓨트 셰이더 라이트 컬링',
          'GPU 오클루전 컬링(Hi-Z) - 액터 1,001개 씬에서 드로우콜 ~2,000 → ~1,150, 프레임 2.69ms → 2.09ms',
          'UE 스타일 GameFramework - Actor/Pawn/PlayerController/GameMode, FWorldContext 기반 월드 수명 관리, PhysX 래그돌 통합',
          '에디터 툴링 - PIE(직렬화 라운드트립 월드 복제), AnimGraph 노드 에디터, 노티파이 타임라인, 4분할 멀티 뷰포트, 셰이더 핫 리로드'
        ],
        overview: {
          team: '기수 공동 제작 (매주 팀 재편성)',
          role: 'Animation·Render·GameFramework·에디터 툴링 주도',
          duration: '14주'
        }
      },
      'Dynamic Rope - Fab 출시 UE5 플러그인': {
        title: 'Dynamic Rope - Fab 출시 UE5 플러그인',
        description: 'GPU XPBD 기반 로프 시뮬레이션 & 본 래핑 플러그인. Epic Fab 마켓플레이스 출시',
        details: [
          'GPU XPBD 솔버(RDG 컴퓨트) - 시뮬레이션·충돌·튜브 메싱 전부 GPU 처리, CPU 폴백 포함',
          '스켈레탈 본 단위 래핑 - 애니메이션을 따라가는 로프, 크로스 액터 래핑 지원',
          '래그돌 연동(Chaos 물리 제약), 장력 기반 당기기/릴인/거리 기반 해제',
          '캡슐/SDF 이중 충돌 백엔드 + SDF 베이킹 에디터 툴 제공',
          'stat 대시보드, Sleep/LOD/컬링 최적화, 전체 C++ 소스 포함 (UE 5.5~5.8)'
        ]
      },
      '정글 게임잼 3회': {
        title: '정글 게임잼 3회',
        description: "자체 엔진 기반으로 진행한 3번의 게임잼. 리듬 액션 'Rhythm Dungeon', 드라이빙 어드벤처 '전지적 정글 시점', 무쌍 액션 '정글무쌍'을 매회 1주 내 완성",
        cardHighlights: [
          "리듬 액션 'Rhythm Dungeon'",
          "드라이빙 어드벤처 '전지적 정글 시점'",
          "무쌍 액션 '정글무쌍'"
        ],
        details: [
          "Week 1: 리듬 액션 게임 'Rhythm Dungeon' - 비트 판정(Perfect/Good/Miss), JSON 기반 스테이지 4종",
          "Week 9: 드라이빙 어드벤처 '전지적 정글 시점' - PhysX 물리, 5단계 미션, Lua 스크립팅, RmlUi",
          "Week 14: 무쌍 액션 '정글무쌍' - 물리·콘텐츠를 통합한 최종 게임잼",
          '엔진 개발과 병행하며 실제 게임 제작으로 엔진 검증'
        ],
        videoLabels: ['Week 1 · Rhythm Dungeon', 'Week 9 · 전지적 정글 시점', 'Week 14 · 정글무쌍'],
        repoNames: ['Rhythm Dungeon (Week 1)', '전지적 정글 시점 (Week 9)', '정글무쌍 (Week 14)']
      },
      'GAS를 활용한 멀티 플레이 게임': {
        title: 'GAS를 활용한 멀티 플레이 게임',
        description: '언리얼 플러그인 GAS를 활용한 다양한 게임 모드와 Session을 지원하는 게임',
        details: ['GameplayAbilitySystem 기반 스킬 시스템', '멀티플레이어 세션 관리', '다양한 게임 모드 구현']
      },
      'LOL 모작': {
        title: 'LOL 모작',
        description: "'LOL'의 Playable Character로 재해석한 1대1 대전 액션 게임",
        details: ['캐릭터 스킬 시스템 구현', '1대1 대전 시스템', 'AI 상대 구현']
      },
      '다양한 무기를 구현한 게임': {
        title: '다양한 무기를 구현한 게임',
        description: '총기류, 검, 활, 방패, 마법 등 다양한 무기류와 인벤토리, AI를 구현한 게임',
        details: ['다양한 무기 시스템 (총기, 검, 활, 방패, 마법)', '인벤토리 시스템', 'AI 구현']
      },
      '자체 아이디어로 개발한 디펜스 게임': {
        title: '자체 아이디어로 개발한 디펜스 게임',
        description: '3가지 역할군(공격, 건설, 파밍)을 제공하며 스킬, AI(Behaviour Tree), 다수의 몬스터를 구현한 게임',
        details: ['3가지 역할군 시스템 (공격, 건설, 파밍)', '스킬 및 몽타주 구현', 'Behaviour Tree 기반 AI']
      },
      'DirectX 11로 구현한 Kirby': {
        title: 'DirectX 11로 구현한 Kirby',
        description: '2D 게임 제작 방식과 그래픽 파이프라인을 학습할 수 있었던 고전 게임 Kirby 핵심 기능 구현',
        details: ['DirectX 11 그래픽 파이프라인', '2D 스프라이트 렌더링', '게임 핵심 기능 구현']
      },
      'Claude Learning Docs': {
        title: 'Claude Learning Docs',
        description: 'Claude Code와 함께한 프로젝트별 학습 기록을 체계적으로 문서화한 VitePress 기반 정적 사이트',
        details: ['VitePress 기반 문서 사이트 구축', 'GitHub Actions 자동 동기화', '프로젝트별 학습 기록 관리']
      }
    }
  },

  // Contact
  contact: {
    title: 'Contact',
    intro: '프로젝트 협업이나 문의사항이 있으시면 언제든지 연락주세요!'
  },

  // Footer
  footer: {
    copyright: '© 2026 Shim Woojin. All rights reserved.'
  },

  // Resume
  resume: {
    backLink: '← 포트폴리오로 돌아가기',
    downloadPdf: '인쇄 / PDF 저장',
    title: '경력 기술서',
    subtitle: '심우진 | 게임 클라이언트 프로그래머',
    contactInfo: 'Email: ggoggal@gmail.com'
  }
}

export default ko
