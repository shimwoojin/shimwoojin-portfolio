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
    intro1: "I'm a game client programmer with 1 year and 4 months of professional MMORPG and mobile game experience, plus 14 weeks at KRAFTON JUNGLE GameTech Lab where I served as lead architect of a custom DirectX11 game engine. Specializing in C++ and Unreal Engine, I design and build systems ranging from rendering pipelines to quest systems, UI, and development tools.",
    intro2: 'I care about maintainable architecture and building tools that boost team productivity. I shipped Dynamic Rope, a GPU physics plugin, on the Fab marketplace — aiming to carry projects all the way from design to release. I actively apply AI-powered development workflows in practice.',
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
        type: 'education',
        company: 'KRAFTON JUNGLE GameTech Lab',
        position: 'Trainee',
        period: '2026.03.09 - 2026.08.24',
        description: 'Lead architect of a custom DirectX11 game engine over 14 weeks, 3 game jams, and developed the UE5 physics plugin Dynamic Rope, shipped on the Fab marketplace'
      },
      {
        type: 'career',
        company: 'Super Villain Labs',
        position: 'Client Engineer',
        period: '2024.04.15 - 2025.07.31',
        description: "Developed core UE5 MMORPG systems (quests, NPC dialogue, UI), refactored a 12,000-line character class into components, built team productivity tools including a packet record/replay system, and improved a live Unity mobile game's red-dot system (80% fewer bugs)"
      },
      {
        type: 'education',
        company: 'SGA Game Academy',
        position: 'Student',
        period: '2022.09 - 2023.12',
        description: 'Completed a game development course covering C++, DirectX11, and Unreal Engine; finished 4 personal projects including a DirectX11 Kirby clone, a LOL recreation, and a defense game'
      },
      {
        type: 'education',
        company: 'Chungbuk National University - Information and Communication Engineering',
        position: 'Student',
        period: '2016.03 - 2023.02',
        description: 'B.S. in Information and Communication Engineering - networking, databases, IoT, electronic circuits, and CS fundamentals'
      }
    ]
  },

  // Projects
  projects: {
    title: 'Projects',
    filters: {
      featured: 'Featured',
      career: 'Career',
      jungle: 'Jungle',
      personal: 'Personal'
    },
    allTitle: 'All Projects',
    showOlder: 'Show earlier projects',
    hideOlder: 'Hide earlier projects',
    viewProject: 'View Project',
    viewResume: 'View Resume Details',
    viewGithub: 'GitHub Repository',
    viewDeploy: 'Live Demo',
    viewFab: 'View on Fab',
    viewDocs: 'Documentation',
    viewPress: 'Press Coverage',
    techStack: 'Tech Stack',
    keyFeatures: 'Key Features',
    videoLabel: 'Video',
    overviewCompany: 'Company',
    overviewTeam: 'Team',
    overviewRole: 'Role',
    overviewDuration: 'Duration',
    items: {
      'PROJECT ARK': {
        title: 'PROJECT ARK',
        description: 'Career summary of large-scale MMORPG development',
        headline: '13 months · quests/UI/tools',
        cardHighlights: [
          'Designed State Pattern quest system',
          'Refactored 12,000-line character class',
          'Built packet record/replay debug tools'
        ],
        details: [
          'State Pattern-based quest system - extensible by adding a single state class',
          'Componentized a 12,000-line character class - 80% less code (12,000 → 2,500 lines)',
          'Packet record/replay debugging system - reproduced previously unreproducible sync bugs from recordings',
          'Spline-based world map generation tool - replaced manual map rework with a single button click',
          'Customized dialogue plugin for NPCs - designers author dialogue as node graphs without code changes',
          'Inventory/HUD/settings UI, StandAlone mode and cheat system for the dev environment, AreaGroup priority loading (3s stall → 0.1s)'
        ],
        pressName: 'Tiger Research',
        pressLabel: 'Research Report',
        overview: {
          company: 'Super Villain Labs',
          role: 'Client Programmer',
          duration: '13 months'
        }
      },
      '슈빌': {
        title: 'Shuville',
        description: 'Unity-based mobile casual game client development. UI system and game logic implementation',
        headline: 'Unity-ready in 3 months',
        cardHighlights: [
          'Improved red-dot system · 80% fewer bugs',
          'Major content update development',
          'Custom editor tooling'
        ],
        details: [
          'Restructured the red-dot (notification marker) system - merged legacy paths into one system, 80% fewer red-dot bugs right after handover',
          'Built a runtime instance tracker and an editor tool that traces where each red-dot is used',
          'Major update content - crew shop, playable character interactions, tab-based shared UI, dungeon entry UI',
          'Editor extensions such as an Attribute exposing DB data as Inspector dropdowns, reducing data-entry mistakes',
          'Analyzed the full patch → loading → login → in-game flow, reaching production-level Unity C# within 3 months'
        ],
        pressName: 'Inven',
        overview: {
          company: 'Super Villain Labs',
          role: 'Client Programmer',
          duration: '3 months'
        }
      },
      'KraftonEngine - DirectX11 자체 게임엔진': {
        title: 'KraftonEngine - Custom DirectX11 Game Engine',
        description: 'Custom DirectX11 game engine built over 14 weeks at KRAFTON JUNGLE as lead architect. Full-stack implementation from a 20-pass render pipeline to a gameplay framework (1,292 personal commits)',
        headline: '1,292 commits · lead architect',
        cardHighlights: [
          '20-pass render pipeline (shadows, light culling, PP)',
          'UE-style object model · UUID safe pointers',
          'AnimGraph · PhysX ragdoll · Lua scripting'
        ],
        details: [
          'UE-style object model - RTTI/codegen, UUID-based safe pointers for O(1) dangling reference detection',
          '20-pass render pipeline - CSM/EVSM shadows, compute shader light culling, post-processing',
          'AnimGraph runtime - State machine, montage, root motion, GPU skinning',
          'PhysX physics/ragdoll, FBX import, Lua scripting, ImGui editor',
          'Maintained engine design consistency as lead architect through weekly team reshuffles'
        ],
        overview: {
          team: 'Weekly-reshuffled teams',
          role: 'Lead architect (1,292 personal commits)',
          duration: '14 weeks'
        }
      },
      'Dynamic Rope - Fab 출시 UE5 플러그인': {
        title: 'Dynamic Rope - UE5 Plugin on Fab',
        description: 'GPU XPBD rope simulation & bone wrapping plugin, published on the Epic Fab marketplace with a 5.0 rating',
        headline: 'Shipped on Fab · 5.0 rating',
        cardHighlights: [
          'GPU XPBD solver (RDG compute)',
          'Skeletal bone wrapping · ragdoll support',
          'SDF authoring editor tool included'
        ],
        details: [
          'GPU XPBD solver (RDG compute) - simulation, collision, and tube meshing all on GPU, with CPU fallback',
          'Bone-level wrapping on skeletal meshes - follows animation, supports cross-actor wrapping',
          'Ragdoll support (Chaos physics constraints), tension-based pull, reel-in, distance-based release',
          'Dual collision backends (analytic capsules / baked SDF volumes) + SDF authoring editor tool',
          'Stat dashboard, sleep/LOD/culling optimizations, full C++ source included (UE 5.5-5.8)'
        ],
        overview: { team: 'Team of 3' }
      },
      '정글 게임잼 3회': {
        title: '3 Game Jams at JUNGLE',
        description: "Three game jams built on our custom engine - the rhythm action game 'Rhythm Dungeon', the driving adventure 'Omniscient Jungle Perspective', and the musou action game 'Jungle Musou' - each completed within a week",
        headline: '3 games shipped on our engine',
        cardHighlights: [
          "Rhythm action 'Rhythm Dungeon'",
          "Driving adventure 'Omniscient Jungle Perspective'",
          "Musou action 'Jungle Musou'"
        ],
        details: [
          "Week 1: Rhythm action game 'Rhythm Dungeon' - beat judgement (Perfect/Good/Miss), 4 JSON-driven stages",
          "Week 9: Driving adventure 'Omniscient Jungle Perspective' - PhysX physics, 5-stage missions, Lua scripting, RmlUi",
          "Week 14: Musou action game 'Jungle Musou' - final game jam integrating physics and content",
          'Validated the engine by shipping real games alongside engine development'
        ],
        videoLabels: [
          'Week 1 · Rhythm Dungeon',
          'Week 9 · Omniscient Jungle Perspective',
          'Week 14 · Jungle Musou'
        ],
        repoNames: [
          'Rhythm Dungeon (Week 1)',
          'Omniscient Jungle Perspective (Week 9)',
          'Jungle Musou (Week 14)'
        ],
        overview: { team: '3-4 people per jam', duration: 'Under a week each' }
      },
      'GAS를 활용한 멀티 플레이 게임': {
        title: 'Multiplayer Game with GAS',
        description: 'A game supporting various game modes and sessions using Unreal GAS plugin',
        headline: 'GAS-based multiplayer · ongoing',
        details: ['GameplayAbilitySystem-based skill system', 'Multiplayer session management', 'Various game mode implementation'],
        overview: { team: 'Solo project' }
      },
      'LOL 모작': {
        title: 'LOL Recreation',
        description: "A 1v1 action game reinterpreted with 'LOL' Playable Characters",
        headline: '1v1 action · AI opponent',
        details: ['Character skill system implementation', '1v1 battle system', 'AI opponent implementation'],
        overview: { team: 'Solo project' }
      },
      '다양한 무기를 구현한 게임': {
        title: 'Various Weapons Game',
        description: 'A game featuring various weapons (guns, swords, bows, shields, magic), inventory, and AI',
        headline: '5 weapon types · inventory · AI',
        details: ['Various weapon systems (guns, swords, bows, shields, magic)', 'Inventory system', 'AI implementation'],
        overview: { team: 'Solo project' }
      },
      '자체 아이디어로 개발한 디펜스 게임': {
        title: 'Original Defense Game',
        description: 'A defense game featuring 3 role classes (Attack, Build, Farm) with skills, AI (Behaviour Tree), and multiple monsters',
        headline: '3 role classes · Behaviour Tree AI',
        details: ['3 role class system (Attack, Build, Farm)', 'Skills and montage implementation', 'Behaviour Tree-based AI'],
        overview: { team: 'Solo project' }
      },
      'DirectX 11로 구현한 Kirby': {
        title: 'Kirby with DirectX 11',
        description: 'Classic Kirby game implementation to learn 2D game development and graphics pipeline',
        headline: 'Hand-built graphics pipeline',
        details: ['DirectX 11 graphics pipeline', '2D sprite rendering', 'Core game feature implementation'],
        overview: { team: 'Solo project' }
      },
      'Claude Learning Docs': {
        title: 'Claude Learning Docs',
        description: 'A VitePress-based static site documenting project learning records from Claude Code sessions',
        headline: 'Automated AI learning docs',
        details: ['VitePress documentation site setup', 'GitHub Actions auto-sync', 'Project-based learning record management']
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
