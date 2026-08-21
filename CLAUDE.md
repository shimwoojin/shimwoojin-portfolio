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
- **기타**: @vercel/analytics(방문 분석), html2pdf.js(경력기술서 PDF), react-syntax-highlighter(코드 예시)
- **배포**: Vercel (GitHub 연동, main 푸시 시 자동 배포)

## 프로젝트 구조

```
shimwoojin-portfolio/
├── public/
│   └── picture_shimwoojin.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx/css       # 고정 네비게이션 (다크모드·언어 토글, 로고 클릭 시 새로고침)
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
│   ├── App.jsx/css              # 라우팅 + 다크모드 상태
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 주요 기능

### 메인 페이지 (/)
- **Projects 섹션 구조** (필터 탭 없음):
  - **시그니처**: `featured: true`인 프로젝트가 가로 전폭 카드로 항상 노출 (현재 PROJECT ARK, KraftonEngine, Dynamic Rope)
  - **전체 프로젝트**: 나머지를 그리드로, 기간 시작일 기준 최신순 자동 정렬
  - **이전 프로젝트 접기**: 2024년 이전(`periodStart < 202400`) 프로젝트는 기본 숨김, 버튼으로 펼침
- **프로젝트 카드**: 성과 칩(`headline`) + 핵심 불릿(`cardHighlights`, 없으면 `details` 앞 3개) + 기술 태그. 카드 전체 클릭으로 모달 오픈 (키보드 접근성 포함)
- **프로젝트 타입 배지**: career(파랑) / jungle(주황) / personal(보라)
- **모달 링크**: `resumeSection`(경력기술서 해시 이동), `github`, `fabUrl`, `docsUrl`, `deployUrl`
- **다국어**: 화면 문구는 `locales/ko.js`·`en.js`에서 관리. 프로젝트 번역은 한국어 title을 키로 매칭

### 경력기술서 (/resume)
- 프로젝트별 배너: 번호(01/02) + 액센트 색 (ARK 파랑 `project-accent-blue`, VIR 보라 `project-accent-purple`)
- 과제마다 성과 한 줄 칩(`task-headline`), 본문은 배경·실행(플레인) + 결과(초록 박스) 3단 구성
- 코드 예시 2개 (퀘스트 State Pattern, Component Provider) — 접기/펼치기
- html2pdf.js 기반 PDF 다운로드

## 콘텐츠 수정 가이드

| 수정 내용 | 파일 |
|---|---|
| 프로젝트 추가/수정 | `Projects.jsx`의 `projects` 배열 + `ko.js`/`en.js`의 `projects.items` |
| 소개·경력·연락처 문구 | `ko.js`, `en.js` (반드시 양쪽 동시 수정) |
| 경력기술서 내용 | `Resume.jsx` (한국어 하드코딩) |
| Skills/Dev Tools 태그 | `About.jsx` |
| Experience 스킬 태그 | `Experience.jsx`의 `experienceSkills` (locales items와 인덱스 순서 일치 필요) |

## 주의사항 (과거 버그에서 배운 것)

- **CSS는 전역**: 컴포넌트별 파일이어도 스코프가 없다. 같은 클래스명(`.image-placeholder` 등)이 다른 컴포넌트에 누출된 적 있음 → 부모 선택자로 구체화할 것
- **transform 조상 + position:fixed**: transform이 걸린 조상이 있으면 fixed 요소의 기준이 뷰포트가 아닌 그 조상이 됨 (모달 버그 원인이었음). 스크롤 페이드인 애니메이션은 이 문제로 제거됨 — 다시 넣으려면 opacity/transform을 남기지 않는 방식으로
- **프로젝트 데이터 중복**: `Projects.jsx`(한국어 원본)와 `ko.js`/`en.js`(번역)에 같은 내용이 있음. 수정 시 세 곳 모두 확인

## 보류 중인 작업

- **게임잼 영상**: "정글 게임잼 3회" 카드의 `youtubeId`가 비어 있음. 영상 받으면 채우기 (카드 분리 여부도 그때 결정)
- **Claude Learning Docs**: `Projects.jsx`에서 주석 처리로 임시 숨김 상태. 주석 해제로 복구 가능

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
