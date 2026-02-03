const ko = {
  // Header
  header: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact'
  },

  // About
  about: {
    title: 'About Me',
    greeting: '안녕하세요, 심우진입니다!',
    intro1: '1년 4개월간 MMORPG와 모바일 캐주얼 게임 개발 경험을 가진 게임 클라이언트 프로그래머입니다. C++과 Unreal Engine을 주력으로 퀘스트 시스템, UI, 개발 도구 등 다양한 시스템을 설계하고 구현했습니다.',
    intro2: '유지보수 가능한 구조 설계와 팀 생산성 향상을 위한 개발 도구 제작에 관심이 많으며, 디자인 패턴을 활용한 확장 가능한 아키텍처 설계를 지향합니다.',
    skills: 'Skills',
    devTools: 'Development Tools',
    profileAlt: '심우진 프로필 사진'
  },

  // Experience
  experience: {
    title: 'Experience',
    workBadge: '실무 경력',
    items: [
      {
        company: '슈퍼빌런랩스',
        position: '클라이언트 엔지니어',
        period: '2024.04.15 - 2025.07.31',
        description: '언리얼 엔진5를 활용한 MMORPG 개발과 유니티 엔진 2022.3을 활용한 모바일 캐주얼 게임 개발'
      },
      {
        company: 'SGA 게임 아카데미',
        position: '학생',
        period: '2022.09 - 2023.12',
        description: '게임 개발에 필요한 전반적인 지식 습득 및 다수의 개인 프로젝트 진행'
      },
      {
        company: '충북대학교-정보통신공학부',
        position: '학생',
        period: '2016.03 - 2023.02',
        description: '네트워크, IOT, DB, 수학, 전자 회로 등 전반적인 IT 지식 습득'
      }
    ]
  },

  // Projects
  projects: {
    title: 'Projects',
    filters: {
      featured: '대표',
      career: '경력',
      personal: '개인'
    },
    subFilterAll: '전체',
    viewProject: '프로젝트 보기',
    viewResume: '경력기술서 상세보기',
    viewGithub: 'GitHub 저장소',
    viewDeploy: '배포 사이트',
    techStack: '기술 스택',
    keyFeatures: '주요 기능',
    items: {
      'PROJECT ARK': {
        title: 'PROJECT ARK',
        description: '대규모 MMORPG 개발에 대한 경력 요약',
        details: ['퀘스트 시스템 설계 및 구현', 'UI 시스템 개발', '개발 도구 제작']
      },
      '슈빌': {
        title: '슈빌',
        description: 'Unity 기반 모바일 캐주얼 게임 클라이언트 개발. UI 시스템 및 게임 로직 구현',
        details: ['UI 시스템 구현', '게임 로직 개발']
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
    downloadPdf: 'PDF 다운로드',
    generatingPdf: 'PDF 생성 중...',
    title: '경력 기술서',
    subtitle: '심우진 | 게임 클라이언트 프로그래머',
    contactInfo: 'Email: ggoggal@gmail.com | Phone: 010-5794-0627'
  }
}

export default ko
