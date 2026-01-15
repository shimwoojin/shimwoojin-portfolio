# Shim Woojin Portfolio

React로 만든 개인 포트폴리오 웹사이트입니다.

## 🚀 시작하기

### 필요한 것
- Node.js (18.0 이상)
- npm 또는 yarn

### 설치 방법

1. 프로젝트 폴더로 이동
```bash
cd C:\EtcProjects\shimwoojin-portfolio
```

2. 필요한 패키지 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

4. 브라우저에서 열기
- 터미널에 표시된 주소(보통 http://localhost:5173)를 브라우저에 입력

## 📁 프로젝트 구조

```
shimwoojin-portfolio/
├── src/
│   ├── components/      # 재사용 가능한 컴포넌트들
│   │   ├── Header.jsx   # 네비게이션 헤더
│   │   ├── About.jsx    # 소개 섹션
│   │   ├── Projects.jsx # 프로젝트 섹션
│   │   └── Contact.jsx  # 연락처 섹션
│   ├── App.jsx          # 메인 앱 컴포넌트
│   ├── App.css          # 앱 스타일
│   ├── main.jsx         # 진입점
│   └── index.css        # 전역 스타일
├── index.html           # HTML 템플릿
├── package.json         # 프로젝트 설정
└── vite.config.js       # Vite 설정
```

## 🎨 커스터마이징

### 개인 정보 수정하기
1. `src/components/About.jsx` - 자기소개 및 스킬 수정
2. `src/components/Projects.jsx` - 프로젝트 정보 수정
3. `src/components/Contact.jsx` - 이메일, GitHub, LinkedIn 링크 수정

### 색상 변경하기
- CSS 파일들에서 색상 코드를 변경하세요
- 주요 색상: `#3498db` (파란색), `#2c3e50` (네이비)

## 📦 빌드

프로덕션 빌드 생성:
```bash
npm run build
```

빌드 결과 미리보기:
```bash
npm run preview
```

## 🛠️ 사용 기술

- React 18
- Vite
- CSS3

## 📝 다음 단계

- [ ] 실제 프로젝트 정보로 업데이트
- [ ] 프로필 이미지 추가
- [ ] GitHub Pages 또는 Vercel에 배포
- [ ] 다크 모드 추가
- [ ] 애니메이션 효과 추가

