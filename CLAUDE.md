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
- MMORPG 프로젝트 상세 업무 내용
- 모바일 프로젝트 상세 업무 내용
- STAR 기법으로 작성된 업무 성과
- 해시 기반 섹션 스크롤 지원

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
