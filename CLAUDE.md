# Shim Woojin Portfolio - Project Context

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | shimwoojin-portfolio |
| 목적 | React 학습 및 개인 포트폴리오 웹사이트 제작 |
| 배포 URL | https://shimwoojin-portfolio.vercel.app |
| 현재 상태 | 2026 리뉴얼 완료 (크래프톤 정글 프로젝트 반영, 시그니처/아카이브 레이아웃) |

## 기술 스택

- **프레임워크**: React 18.2
- **라우팅**: React Router DOM 7
- **빌드 도구**: Vite 5
- **언어**: JavaScript (JSX)
- **스타일링**: CSS3 (컴포넌트별 CSS 파일, CSS 프레임워크 없음)
- **기타**: @vercel/analytics(방문 분석), react-syntax-highlighter(코드 예시). 경력기술서 PDF는 html2pdf.js를 제거하고 브라우저 네이티브 인쇄(`window.print()` + `@media print`)로 전환 — 텍스트 선택·하이퍼링크가 살아있는 PDF가 나온다
- **배포**: Vercel (GitHub 연동, main 푸시 시 자동 배포)

## 프로젝트 구조

```
shimwoojin-portfolio/
├── public/
│   └── picture_shimwoojin.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx/css       # 고정 네비게이션 (다크모드·언어 토글, 경력기술서 CTA, 로고 클릭 시 새로고침)
│   │   ├── Hero.jsx/css         # 첫 화면 3초 피치 (직군·대표 성과 4개·경력기술서/프로젝트/GitHub CTA)
│   │   ├── About.jsx/css        # 자기소개 + Skills/Development Tools 태그
│   │   ├── Experience.jsx/css   # 경력/교육 타임라인 (item.type으로 실무/교육 배지 구분)
│   │   ├── Projects.jsx/css     # 프로젝트 데이터 배열 + 시그니처/아카이브 렌더링
│   │   ├── ProjectCard.jsx      # 카드 (variant="signature"면 전폭 가로형)
│   │   ├── ProjectModal.jsx/css # 상세 모달 (화면 정중앙 고정, 내부 스크롤, body 스크롤 잠금)
│   │   └── Contact.jsx/css      # 이메일·GitHub·블로그
│   ├── context/
│   │   └── LanguageContext.jsx  # 한/영 전환 (t 객체 제공)
│   ├── locales/
│   │   ├── ko.js                # 한국어 문구 전체
│   │   └── en.js                # 영어 문구 전체 (ko와 항상 쌍으로 수정)
│   ├── pages/
│   │   ├── Resume.jsx/css       # 경력기술서 (배너·성과 칩·결과 박스, PDF 다운로드)
│   │   └── NotFound.jsx/css     # 404
│   ├── utils/
│   │   └── projectVideos.js     # videos 배열 정규화 + YouTube 썸네일 URL
│   ├── App.jsx/css              # 라우팅 + 다크모드 상태
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 주요 기능

### 메인 페이지 (/)
- **Hero**: 최상단 3초 피치. 문구는 `locales`의 `hero` 키에서 관리 (`highlights`는 `{ value, label }` 배열). 다른 섹션과 같은 흰 카드를 그대로 쓰고 배경색 대신 타이포·파란 액센트로만 위계를 만든다 — 히어로만 다른 배경을 쓰면 톤이 깨짐
- **경력기술서 진입**: Header nav의 `.nav-resume` + Hero CTA. 이전에는 프로젝트 모달 안에서만 도달 가능해 사실상 안 읽혔음 — 진입점을 줄이지 말 것
- **Projects 섹션 구조** (필터 탭 없음):
  - **시그니처**: `featured: true`인 프로젝트가 가로 전폭 카드로 항상 노출 (현재 PROJECT ARK, KraftonEngine, Dynamic Rope)
  - **전체 프로젝트**: 나머지를 그리드로, 기간 시작일 기준 최신순 자동 정렬
  - **이전 프로젝트 접기**: 2024년 이전(`periodStart < 202400`) 프로젝트는 기본 숨김, 버튼으로 펼침
- **프로젝트 카드**: 성과 칩(`headline`) + 핵심 불릿(`cardHighlights`, 없으면 `details` 앞 3개) + 기술 태그. 카드 전체 클릭으로 모달 오픈 (키보드 접근성 포함)
  - 푸터 우측에 GitHub 아이콘(+ `fabUrl`/`docsUrl`/`deployUrl` 중 하나) 노출. 카드 전체가 클릭 대상이라 링크에는 `stopPropagation` 필수
- **프로젝트 타입 배지**: career(파랑) / jungle(주황) / personal(보라)
- **프로젝트 영상**: 단일 `youtubeId` 또는 다중 `videos: [{ id, label }]`. `utils/projectVideos.js`가 둘 다 같은 배열로 정규화하므로 기존 프로젝트는 수정 불필요
  - 영상 2개 이상이면 모달에 썸네일 그리드(균등 분할), 카드 썸네일에 `▶ n` 배지. `id`가 빈 항목은 자동 제외되므로 미수령 영상은 라벨만 두면 됨
  - `primary: true`를 붙인 영상이 카드 썸네일 + 모달 초기 선택이 됨 (없으면 배열 첫 항목). 배열은 시간순 유지
- **프로젝트 개요**: `overview: { company, team, role, duration }`. 모달 헤더 바로 아래 라벨/값 스트립으로, 값이 있는 항목만 렌더링. `company`(파란 칩)와 `team`(회색 칩)은 카드의 기간 옆에도 노출
- **모달 링크**: `resumeSection`(경력기술서 해시 이동), `github`, `repos: [{ name, url }]`(저장소 여러 개), `pressUrl`+`pressName`(언론 보도), `fabUrl`, `docsUrl`, `deployUrl`, `contributionsUrl`(기여도 맵 — 지정 시 카드 헤드라인 칩이 이 링크로 연결됨)
- **카드 이미지**: `image`(`public/` 경로) > `videos[0]`/`youtubeId` YouTube 썸네일 > 카테고리 플레이스홀더 순. 외부 이미지는 핫링크하지 말고 `public/`에 받아서 쓸 것
- **다국어**: 화면 문구는 `locales/ko.js`·`en.js`에서 관리. 프로젝트 번역은 한국어 title을 키로 매칭

### 경력기술서 (/resume)
- 프로젝트별 배너: 번호(01/02) + 액센트 색 (ARK 파랑 `project-accent-blue`, 슈빌 보라 `project-accent-purple`). "PROJECT VIR" 명칭은 실제 게임명 "슈빌"로 통일됨 (섹션 id도 `project-shuville`)
- 과제마다 성과 한 줄 칩(`task-headline`), 본문은 배경·실행(플레인) + 결과(초록 박스) 3단 구성
- ARK 과제 순서는 방어 강도순: 패킷 녹화/재생 → 리팩토링 → 퀘스트(경계 분리 프레임) → NPC(자체 구현 기각) → 월드맵. 카드 `details`/`cardHighlights`도 같은 순서 유지
- "핵심 기술 역량 요약"의 각 줄은 본문 과제의 앵커(`#ark-replay` 등)로 연결 — 형용사만 남은 일반론 문장은 넣지 말 것
- 코드 예시 2개 (퀘스트 State Pattern, Component Provider) — 접기/펼치기
- PDF는 `window.print()` + `@media print` (인쇄 시 다크모드는 자동으로 라이트 전환, 펼친 코드 예시만 인쇄됨)

## 콘텐츠 수정 가이드

| 수정 내용 | 파일 |
|---|---|
| 프로젝트 추가/수정 | `Projects.jsx`의 `projects` 배열 + `ko.js`/`en.js`의 `projects.items` |
| 소개·경력·연락처 문구 | `ko.js`, `en.js` (반드시 양쪽 동시 수정) |
| 경력기술서 내용 | `Resume.jsx` (한국어 하드코딩) |
| Skills/Dev Tools 태그 | `About.jsx` |
| 히어로 피치·대표 성과 | `ko.js`/`en.js`의 `hero` |
| Experience 스킬 태그 | `Experience.jsx`의 `experienceSkills` (locales items와 인덱스 순서 일치 필요) |

## 주의사항 (과거 버그에서 배운 것)

- **CSS는 전역**: 컴포넌트별 파일이어도 스코프가 없다. 같은 클래스명(`.image-placeholder` 등)이 다른 컴포넌트에 누출된 적 있음 → 부모 선택자로 구체화할 것
- **transform 조상 + position:fixed**: transform이 걸린 조상이 있으면 fixed 요소의 기준이 뷰포트가 아닌 그 조상이 됨 (모달 버그 원인이었음). 스크롤 페이드인 애니메이션은 이 문제로 제거됨 — 다시 넣으려면 opacity/transform을 남기지 않는 방식으로
- **프로젝트 데이터 중복**: `Projects.jsx`(한국어 원본)와 `ko.js`/`en.js`(번역)에 같은 내용이 있음. 수정 시 세 곳 모두 확인

## 보류 중인 작업

- **우여곡절 섹션**: 프로젝트별 문제/해결 서술(`challenges`)은 미구현. 경력 2건은 경력기술서가 STAR로 담당하므로 정글·개인 프로젝트 대상
- **Claude Learning Docs**: `Projects.jsx`에서 주석 처리로 임시 숨김 상태 (업데이트가 오래돼 당분간 유지 결정, 2026-08). 주석 해제로 복구 가능

## 확정된 사실 (사용자 확인, 2026-08)

- PROJECT ARK: 전체 17명, 클라이언트 5명. 고정 담당 도메인 없이 우선순위대로 투입되는 방식 — "폭넓게 담당" 프레임으로 서술
- 슈빌: 10명 내외 (퇴사자 변동이 있어 정확한 수는 특정 불가 → "내외"로 표기)
- 레드닷 "주 5건대 → 1건 이하"는 정성적 추정치 — 더 정밀하게 쪼개지 말 것
- AreaGroup 로딩 3초 → 0.1초의 측정 상황: 던전→일반맵 진입 시
- AI 활용 항목은 경력기술서에서 삭제 유지 (일반론이라 뺐고, 대체할 실제 사례 없음)
- 2023 개인 프로젝트 4종: 카드는 접힌 영역에 유지하되 개별 GitHub 링크는 비노출 (저장소 평균 품질 평가 방지, 영상이 증거)

## 개발 명령어

```bash
npm run dev      # 개발 서버 (기본 5173, 점유 시 5174로 밀림)
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
- 자체엔진 아카이브: https://github.com/shimwoojin/JungleArchive
- Dynamic Rope (Fab): https://www.fab.com/listings/17f62a8f-387b-48b0-9198-af7273dc3733

---
**Last Updated**: 2026-08-21
