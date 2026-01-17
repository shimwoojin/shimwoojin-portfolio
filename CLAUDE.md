# Shim Woojin Portfolio - Project Context

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | shimwoojin-portfolio |
| 목적 | React 학습 및 개인 포트폴리오 웹사이트 제작 |
| 배포 URL | https://shimwoojin-portfolio.vercel.app |
| 현재 상태 | 메인 포트폴리오 + 경력기술서 페이지 완성, 자동 배포 운영 중 |

## 기술 스택

- **프레임워크**: React 18.2.0
- **라우팅**: React Router DOM
- **빌드 도구**: Vite 5.0.8
- **언어**: JavaScript (JSX)
- **스타일링**: CSS3 (컴포넌트별 CSS 파일)
- **배포**: Vercel (GitHub 연동, 자동 배포)

## 프로젝트 구조

```
shimwoojin-portfolio/
├── public/
│   └── picture_shimwoojin.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx/css       # 네비게이션 (다크모드 토글 포함)
│   │   ├── About.jsx/css        # 자기소개 섹션
│   │   ├── Experience.jsx/css   # 경력/학력 타임라인
│   │   ├── Projects.jsx/css     # 프로젝트 목록 (필터링)
│   │   ├── ProjectCard.jsx      # 프로젝트 카드
│   │   ├── ProjectModal.jsx/css # 프로젝트 상세 모달
│   │   └── Contact.jsx/css      # 연락처
│   ├── pages/
│   │   └── Resume.jsx/css       # 경력기술서 페이지
│   ├── App.jsx/css              # 메인 + 라우팅
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 주요 기능

### 메인 페이지 (/)
- **Header**: 고정 네비게이션, 다크모드 토글
- **About**: 프로필 사진, 자기소개, 기술 스택
- **Experience**: 경력/학력 타임라인 형식
- **Projects**: 카테고리별 필터링 (대표/경력/개인), 모달로 상세 보기
- **Contact**: 이메일, GitHub, LinkedIn

### 경력기술서 페이지 (/resume)
- PROJECT ARK (MMORPG) 상세 업무 내용
- PROJECT VIR (모바일) 상세 업무 내용
- STAR 기법으로 작성된 업무 성과
- 해시 기반 섹션 스크롤 지원

---

## PROJECT ARK 원본 코드 참조

경력기술서에 작성된 프로젝트의 원본 코드가 별도 경로에 보관되어 있습니다.

**코드 경로**: `C:\OldProjectsRewriteReadme\ProjectArk`

### 디렉토리 구조

```
ProjectArk/
├── Source/                    # 메인 게임 모듈 (언리얼 엔진)
│   └── ProjectArk/
│       ├── Quest/             # 퀘스트 시스템
│       ├── Character/         # 캐릭터 시스템
│       ├── Components/        # 캐릭터 컴포넌트들
│       ├── NPCTalk/           # NPC 대화 컨트롤러
│       ├── Networking/        # 패킷 통신
│       ├── Instance/          # GameMode, HUD 등
│       └── UI/                # 월드맵, UI 위젯
├── DialogueTreeBuild/         # NPC 대화 플러그인 (커스터마이징)
├── Slack/                     # Slack 버그 리포트 플러그인
└── CustomEditorSubSystem/     # 에디터 확장 플러그인
```

### Resume 항목별 코드 매핑

#### 1. State Pattern 기반 퀘스트 시스템
| 설명 | 파일 경로 |
|------|-----------|
| State 패턴 베이스 | `Source/ProjectArk/Quest/State/ArkQuestTIDInstanceState.h` |
| Active 상태 | `Source/ProjectArk/Quest/State/ArkQuestState_Active.h/.cpp` |
| CompletablePending 상태 | `Source/ProjectArk/Quest/State/ArkQuestState_CompleteablePending.h/.cpp` |
| Completed 상태 | `Source/ProjectArk/Quest/State/ArkQuestState_Completed.h/.cpp` |
| Factory 패턴 | `Source/ProjectArk/Quest/ArkQuestFactory.h/.cpp` |
| Quest Subsystem | `Source/ProjectArk/Instance/Subsystem/ArkQuestSubSystem.h/.cpp` |
| 서버 통신 | `Source/ProjectArk/Networking/PacketBuilder/PacketBuilder_Quest.h/.cpp` |

#### 2. NPC 대화 시스템 (DialogueTree 플러그인 커스터마이징)
| 설명 | 파일 경로 |
|------|-----------|
| 대화 컨트롤러 | `Source/ProjectArk/NPCTalk/ArkDialogueController.h/.cpp` |
| 대화 Speaker 컴포넌트 | `Source/ProjectArk/Components/ArkDialogueSpeakerComponent.h/.cpp` |
| 플러그인 에디터 | `DialogueTreeBuild/Source/DialogueTreeEditor/` |
| 플러그인 런타임 | `DialogueTreeBuild/Source/DialogueTreeRuntime/` |
| 커스텀 노드 (MakeChild) | `DialogueTreeBuild/Source/DialogueTreeEditor/Private/Graph/Nodes/ArkGraphNodeDialogueMakeChild.cpp` |
| 커스텀 노드 (ManyBranch) | `DialogueTreeBuild/Source/DialogueTreeEditor/Private/Graph/Nodes/ArkGraphNodeDialogueManyBranch.cpp` |
| 퀘스트 이벤트 연동 | `DialogueTreeBuild/Source/DialogueTreeRuntime/Public/Events/ArkQuestAcceptReqEvent.h` |

#### 3. 월드맵 자동 생성 도구
| 설명 | 파일 경로 |
|------|-----------|
| 맵 로드 매니저 | `Source/ProjectArk/UI/GameContents/Rootkit/Map/ArkMapLoadManager.h/.cpp` |
| 맵 패널 | `Source/ProjectArk/UI/GameContents/Rootkit/Map/ArkMapPanel.h/.cpp` |
| 월드맵 위젯 | `Source/ProjectArk/UI/GameContents/Rootkit/Map/MapWidget/ArkWorldMapWidget_Base.h/.cpp` |
| 맵 오브젝트 위젯 | `Source/ProjectArk/UI/GameContents/Rootkit/Map/MapObjectWidget/` |

#### 4. 캐릭터 클래스 리팩토링 (컴포넌트화)
| 설명 | 파일 경로 |
|------|-----------|
| 컴포넌트 Provider 인터페이스 | `Source/ProjectArk/Character/ArkCharacterComponentProvider.h` |
| 캐릭터 베이스 | `Source/ProjectArk/Character/ArkCharacter_Base.h/.cpp` |
| Debug 컴포넌트 | `Source/ProjectArk/Components/ArkCharacterDebugComponent.h/.cpp` |
| Movement 컴포넌트 | `Source/ProjectArk/Components/ArkCharacterMovementComponent.h/.cpp` |
| Entity 컴포넌트 | `Source/ProjectArk/Components/ArkCharacterEntityComponent.h/.cpp` |
| Condition 컴포넌트 | `Source/ProjectArk/Components/ArkCharacterConditionComponent.h/.cpp` |
| Mesh 컴포넌트 | `Source/ProjectArk/Components/ArkCharacterMeshComponent.h/.cpp` |
| VFX 컴포넌트 | `Source/ProjectArk/Components/ArkCharacterVFXComponent.h/.cpp` |

#### 5. 패킷 녹화/재생 디버깅 시스템
| 설명 | 파일 경로 |
|------|-----------|
| 재생 GameMode | `Source/ProjectArk/Instance/GameMode/ArkGameMode_PacketReplay.h/.cpp` |
| 재생 HUD | `Source/ProjectArk/Instance/HUD/ArkHUD_PacketReplay.h/.cpp` |
| 패킷 정의 | `Source/ProjectArk/DefinePublic/Packet/Packet.h/.cpp` |
| 패킷 빌더 | `Source/ProjectArk/Networking/PacketBuilder/PacketBuilder.h/.cpp` |

#### 6. Slack 버그 제보 연동
| 설명 | 파일 경로 |
|------|-----------|
| Slack Reporter | `Slack/Source/Slack/Public/SlackReporter.h` |
| Slack 모듈 | `Slack/Source/Slack/Private/SlackReporter.cpp` |

---

## 개발 명령어

```bash
npm run dev      # 개발 서버 (localhost:5173)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
```

## 배포 워크플로우

```bash
git add .
git commit -m "변경사항"
git push
# → Vercel 자동 배포
```

## 참고 링크

- 배포: https://shimwoojin-portfolio.vercel.app
- React 공식: https://react.dev
- Vite: https://vitejs.dev

---
**Last Updated**: 2026-01-17
