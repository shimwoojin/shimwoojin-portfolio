# Shim Woojin Portfolio - Project Context

## 📋 프로젝트 개요

- **프로젝트명**: shimwoojin-portfolio
- **목적**: React 학습 및 개인 포트폴리오 웹사이트 제작
- **시작일**: 2025년 1월
- **현재 상태**: 기본 구조 완성, Vercel 배포 완료
- **배포 URL**: https://shimwoojin-portfolio.vercel.app

## 🛠️ 기술 스택

- **프레임워크**: React 18.2.0
- **빌드 도구**: Vite 5.0.8
- **언어**: JavaScript (JSX)
- **스타일링**: CSS3 (컴포넌트별 CSS 파일)
- **배포**: Vercel (GitHub 연동, 자동 배포)
- **버전 관리**: Git + GitHub

## 📁 프로젝트 구조

```
shimwoojin-portfolio/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트들
│   │   ├── Header.jsx       # 네비게이션 헤더
│   │   ├── Header.css
│   │   ├── About.jsx        # 자기소개 섹션
│   │   ├── About.css
│   │   ├── Projects.jsx     # 프로젝트 목록 (map 사용)
│   │   ├── Projects.css
│   │   ├── Contact.jsx      # 연락처 정보
│   │   └── Contact.css
│   ├── App.jsx              # 메인 컴포넌트 (모든 섹션 조립)
│   ├── App.css              # 전역 앱 스타일
│   ├── main.jsx             # React 진입점
│   └── index.css            # 전역 기본 스타일
├── index.html               # HTML 템플릿
├── package.json             # 프로젝트 설정 & 의존성
├── vite.config.js           # Vite 설정
├── .gitignore               # Git 제외 파일
└── README.md                # 프로젝트 문서
```

## 🧠 React 핵심 개념 (학습 완료)

### 1. 컴포넌트 (Component)
- 재사용 가능한 UI 조각
- 함수형 컴포넌트 사용
```jsx
function MyComponent() {
  return <div>내용</div>
}
export default MyComponent
```

### 2. JSX
- JavaScript 안의 HTML 같은 문법
- 중괄호 `{}` 안에 JavaScript 표현식 사용
```jsx
<h3>{project.title}</h3>
<p>{2 + 2}</p>
```

### 3. Import/Export
```jsx
import Header from './components/Header'  // 가져오기
export default App                        // 내보내기
```

### 4. map() 함수로 반복 렌더링
- 배열을 JSX로 변환
- `key` 속성 필수 (각 항목 구별용)
```jsx
{projects.map(project => (
  <div key={project.id}>
    <h3>{project.title}</h3>
  </div>
))}
```

### 5. CSS 연결
```jsx
import './Component.css'  // 컴포넌트별 스타일
```

## 📚 학습 진행 상황

### ✅ 완료
- [x] React 프로젝트 생성 (Vite)
- [x] 컴포넌트 구조 이해
- [x] JSX 문법 이해
- [x] map() 함수로 반복 렌더링
- [x] Git + GitHub 연동
- [x] Vercel 배포 및 자동 배포 설정
- [x] VS Code 개발 환경 세팅

### 📝 다음 학습 목표
- [ ] Props: 컴포넌트에 데이터 전달
- [ ] State (useState): 동적 데이터 관리
- [ ] 이벤트 핸들링 (onClick 등)
- [ ] useEffect: 생명주기, API 호출
- [ ] 다크모드 구현 (State 실습)
- [ ] 프로젝트 필터링 기능

## 🎨 현재 사이트 구성

### Header 컴포넌트
- 고정 네비게이션 바
- 로고 + 링크 (About, Projects, Contact)
- Sticky 포지셔닝

### About 섹션
- 프로필 영역 (이미지 placeholder)
- 자기소개 텍스트
- 스킬 태그 (React, JavaScript, HTML/CSS, Git)

### Projects 섹션
- 3개의 프로젝트 카드 (Grid 레이아웃)
- 각 카드: 이미지, 제목, 설명, 기술 스택, 링크
- **map() 함수 활용** - 배열 데이터를 카드로 자동 변환

### Contact 섹션
- 이메일, GitHub, LinkedIn
- 카드 형식 레이아웃

### Footer
- 저작권 정보

## 🚀 개발 워크플로우

### 로컬 개발
```bash
npm run dev              # 개발 서버 실행 (http://localhost:5173)
```

### 배포
```bash
git add .
git commit -m "변경사항 설명"
git push                 # → Vercel이 자동으로 배포 (30초~2분)
```

### 빌드
```bash
npm run build            # 프로덕션 빌드 (dist/ 폴더에 생성)
npm run preview          # 빌드 결과 미리보기
```

## 🎯 다음 단계 실습 과제

### 🔰 초급 (바로 가능)
1. About 섹션 개인 정보로 수정
2. 스킬 태그 추가/삭제
3. CSS 색상 변경 (`#3498db` → 원하는 색상)
4. Projects 배열에 프로젝트 추가/수정

### 🔸 중급 (Props/State 학습 필요)
1. 다크모드 토글 버튼 추가
2. 프로젝트 카테고리 필터링 (버튼 클릭)
3. 애니메이션 효과 추가
4. 프로젝트 카드를 별도 컴포넌트로 분리 (Props 사용)

### 🔺 고급 (추후)
1. Form 추가 (문의하기)
2. API 연동 (GitHub API로 실제 프로젝트 가져오기)
3. 라우팅 추가 (React Router)
4. TypeScript 전환

## 💡 유용한 정보

### Vite 특징
- 매우 빠른 개발 서버 (밀리초 단위 HMR)
- ESM 기반 빌드
- React 자동 감지 및 최적화

### Vercel 자동 배포
- GitHub push → 자동 감지 → 빌드 → 배포
- 브랜치별 별도 배포 URL
- PR마다 미리보기 URL 생성
- 롤백 기능 (클릭 한 번으로 이전 버전 복구)

### 코드 수정 시 자동 반영
1. VS Code에서 파일 수정
2. Ctrl + S (저장)
3. 브라우저 자동 새로고침 (HMR)
4. 즉시 결과 확인!

## 🔍 주요 파일 설명

### package.json
- 프로젝트 메타데이터
- 의존성 목록 (React, Vite 등)
- 스크립트 명령어 정의

### vite.config.js
- Vite 빌드 도구 설정
- React 플러그인 활성화

### main.jsx
- React 앱 시작점
- ReactDOM으로 App 컴포넌트를 #root에 마운트

### App.jsx
- 메인 컴포넌트
- 모든 섹션 컴포넌트를 조립
- 레이아웃 구조 정의

## 🐛 트러블슈팅

### npm 명령어 안 됨
- Node.js 설치 확인: `node --version`
- VS Code 재시작
- 터미널 종류를 Command Prompt로 변경

### 브라우저 자동 새로고침 안 됨
- `npm run dev` 실행 중인지 확인
- 브라우저에서 localhost:5173 열려있는지 확인
- 터미널 에러 로그 확인

### 배포 실패
- Vercel 대시보드에서 로그 확인
- 로컬에서 `npm run build` 테스트
- package.json 설정 확인

## 📞 참고 링크

- **배포 사이트**: https://shimwoojin-portfolio.vercel.app
- **GitHub 저장소**: https://github.com/[username]/shimwoojin-portfolio
- **Vercel 대시보드**: https://vercel.com/dashboard
- **React 공식 문서**: https://react.dev
- **Vite 문서**: https://vitejs.dev

## 💬 개발 철학

- **실습 중심 학습**: 이론보다 직접 만들면서 배우기
- **AI 파트너**: Claude와 함께 문제 해결
- **점진적 개선**: 작은 기능부터 하나씩 추가
- **실전 경험**: 실제 배포까지 경험

---

**Last Updated**: 2025-01-16
**Developer**: Shim Woojin
**Learning Path**: React 기초 → Props/State → Hooks → 고급 기능
