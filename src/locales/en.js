const en = {
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
    greeting: "Hi, I'm Woojin Shim!",
    intro1: "I'm a game client programmer with 1 year and 4 months of experience developing MMORPG and mobile casual games. Specializing in C++ and Unreal Engine, I have designed and implemented various systems including quest systems, UI, and development tools.",
    intro2: 'I am passionate about designing maintainable architectures and creating development tools that enhance team productivity. I aim to build scalable systems using design patterns.',
    skills: 'Skills',
    devTools: 'Development Tools',
    profileAlt: 'Woojin Shim Profile Photo'
  },

  // Experience
  experience: {
    title: 'Experience',
    workBadge: 'Work Experience',
    items: [
      {
        company: 'Super Villain Labs',
        position: 'Client Engineer',
        period: '2024.04.15 - 2025.07.31',
        description: 'MMORPG development with Unreal Engine 5 and mobile casual game development with Unity 2022.3'
      },
      {
        company: 'SGA Game Academy',
        position: 'Student',
        period: '2022.09 - 2023.12',
        description: 'Acquired comprehensive game development knowledge and completed multiple personal projects'
      },
      {
        company: 'Chungbuk National University - Information and Communication Engineering',
        position: 'Student',
        period: '2016.03 - 2023.02',
        description: 'Studied networking, IoT, databases, mathematics, and electronic circuits'
      }
    ]
  },

  // Projects
  projects: {
    title: 'Projects',
    filters: {
      featured: 'Featured',
      career: 'Career',
      personal: 'Personal'
    },
    subFilterAll: 'All',
    viewProject: 'View Project',
    viewResume: 'View Resume Details',
    viewGithub: 'GitHub Repository',
    techStack: 'Tech Stack',
    keyFeatures: 'Key Features',
    items: {
      'PROJECT ARK': {
        title: 'PROJECT ARK',
        description: 'Career summary of large-scale MMORPG development',
        details: ['Quest system design and implementation', 'UI system development', 'Development tools creation']
      },
      '슈빌': {
        title: 'Shuville',
        description: 'Unity-based mobile casual game client development. UI system and game logic implementation',
        details: ['UI system implementation', 'Game logic development']
      },
      'GAS를 활용한 멀티 플레이 게임': {
        title: 'Multiplayer Game with GAS',
        description: 'A game supporting various game modes and sessions using Unreal GAS plugin',
        details: ['GameplayAbilitySystem-based skill system', 'Multiplayer session management', 'Various game mode implementation']
      },
      'LOL 모작': {
        title: 'LOL Recreation',
        description: "A 1v1 action game reinterpreted with 'LOL' Playable Characters",
        details: ['Character skill system implementation', '1v1 battle system', 'AI opponent implementation']
      },
      '다양한 무기를 구현한 게임': {
        title: 'Various Weapons Game',
        description: 'A game featuring various weapons (guns, swords, bows, shields, magic), inventory, and AI',
        details: ['Various weapon systems (guns, swords, bows, shields, magic)', 'Inventory system', 'AI implementation']
      },
      '자체 아이디어로 개발한 디펜스 게임': {
        title: 'Original Defense Game',
        description: 'A defense game featuring 3 role classes (Attack, Build, Farm) with skills, AI (Behaviour Tree), and multiple monsters',
        details: ['3 role class system (Attack, Build, Farm)', 'Skills and montage implementation', 'Behaviour Tree-based AI']
      },
      'DirectX 11로 구현한 Kirby': {
        title: 'Kirby with DirectX 11',
        description: 'Classic Kirby game implementation to learn 2D game development and graphics pipeline',
        details: ['DirectX 11 graphics pipeline', '2D sprite rendering', 'Core game feature implementation']
      }
    }
  },

  // Contact
  contact: {
    title: 'Contact',
    intro: 'Feel free to reach out for project collaboration or any inquiries!'
  },

  // Footer
  footer: {
    copyright: '© 2026 Shim Woojin. All rights reserved.'
  },

  // Resume
  resume: {
    backLink: '← Back to Portfolio',
    downloadPdf: 'Download PDF',
    generatingPdf: 'Generating PDF...',
    title: 'Resume',
    subtitle: 'Woojin Shim | Game Client Programmer',
    contactInfo: 'Email: ggoggal@gmail.com | Phone: +82-10-5794-0627'
  }
}

export default en
