# Shim Woojin Portfolio

React로 제작한 게임 클라이언트 프로그래머 포트폴리오 웹사이트입니다.

**Live Demo**: https://shimwoojin-portfolio.vercel.app

## 주요 기능

- **포트폴리오 메인 페이지**: About, Experience, Projects, Contact 섹션
- **프로젝트 상세 모달**: YouTube 동영상 임베드, GitHub 링크
- **경력기술서 페이지**: STAR 기법 기반 상세 업무 성과
- **다크 모드**: 테마 토글 지원
- **프로젝트 필터링**: 대표/경력/개인 + 세부 카테고리

## 기술 스택

- React 18 + React Router
- Vite
- CSS3
- Vercel (배포)

## 시작하기

```bash
# 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```

## 프로젝트 구조

```
src/
├── components/     # 재사용 컴포넌트 (Header, About, Projects 등)
├── pages/          # 페이지 컴포넌트 (Resume)
├── App.jsx         # 라우팅 및 메인 레이아웃
└── main.jsx        # 진입점
```

## 배포

GitHub에 push하면 Vercel이 자동으로 빌드 및 배포합니다.

```bash
git add .
git commit -m "Update"
git push
```

## 라이선스

MIT License

---

© 2026 Shim Woojin
