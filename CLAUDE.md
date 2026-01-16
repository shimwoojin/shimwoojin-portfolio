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
├── public/
│   └── picture_shimwoojin.jpg  # 프로필 사진
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트들
│   │   ├── Header.jsx       # 네비게이션 헤더 (다크모드 토글 포함)
│   │   ├── Header.css
│   │   ├── About.jsx        # 자기소개 섹션
│   │   ├── About.css
│   │   ├── Experience.jsx   # 경력/학력 타임라인 섹션
│   │   ├── Experience.css
│   │   ├── Projects.jsx     # 프로젝트 목록 (필터링 기능)
│   │   ├── Projects.css
│   │   ├── ProjectCard.jsx  # 프로젝트 카드 컴포넌트 (Props 활용)
│   │   ├── ProjectModal.jsx # 프로젝트 상세 모달 (useEffect 활용)
│   │   ├── ProjectModal.css
│   │   ├── Contact.jsx      # 연락처 정보
│   │   └── Contact.css
│   ├── App.jsx              # 메인 컴포넌트 (다크모드 상태 관리)
│   ├── App.css              # 전역 앱 스타일 (다크모드 포함)
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

### 6. Props (컴포넌트 간 데이터 전달)
- 부모 → 자식 컴포넌트로 데이터/함수 전달
- 구조 분해 할당으로 받기
```jsx
// 부모 컴포넌트
<Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

// 자식 컴포넌트
function Header({ isDarkMode, toggleDarkMode }) {
  return <button onClick={toggleDarkMode}>{isDarkMode ? '☀️' : '🌙'}</button>
}
```

### 7. useState (상태 관리)
- 컴포넌트 내 동적 데이터 관리
- 상태 변경 시 자동 리렌더링
```jsx
import { useState } from 'react'

const [isDarkMode, setIsDarkMode] = useState(false)
const [filter, setFilter] = useState('Featured')

// 상태 변경
setIsDarkMode(!isDarkMode)
setFilter('Career')
```

### 8. useEffect (사이드 이펙트)
- 컴포넌트 마운트/언마운트 시 실행
- 이벤트 리스너 등록/해제
```jsx
import { useEffect } from 'react'

useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === 'Escape') onClose()
  }
  window.addEventListener('keydown', handleEsc)
  return () => window.removeEventListener('keydown', handleEsc)  // cleanup
}, [onClose])
```

### 9. 이벤트 핸들링
- onClick, onChange 등 이벤트 처리
```jsx
<button onClick={() => setFilter('Career')}>경력</button>
<button onClick={handleClick}>클릭</button>
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
- [x] Props: 컴포넌트에 데이터 전달 (ProjectCard, Header)
- [x] State (useState): 동적 데이터 관리 (다크모드, 필터링)
- [x] 이벤트 핸들링 (onClick 등)
- [x] useEffect: 생명주기, 이벤트 리스너 (모달 ESC 키)
- [x] 다크모드 구현 (State 실습)
- [x] 프로젝트 필터링 기능 (대표/경력/개인 + 세부 카테고리)
- [x] 모달 컴포넌트 구현 (YouTube 임베드 포함)
- [x] 컴포넌트 분리 (ProjectCard, ProjectModal)
- [x] Experience 타임라인 섹션 추가

### 📝 다음 학습 목표
- [ ] React Router: 페이지 라우팅
- [ ] API 연동 (GitHub API 등)
- [ ] Form 처리 및 유효성 검사
- [ ] 커스텀 Hook 만들기
- [ ] Context API: 전역 상태 관리
- [ ] TypeScript 전환

## 🎨 현재 사이트 구성

### Header 컴포넌트
- 고정 네비게이션 바
- 로고 + 링크 (About, Experience, Projects, Contact)
- **다크모드 토글 버튼** (☀️/🌙)
- Props로 다크모드 상태 및 토글 함수 전달받음
- Sticky 포지셔닝

### About 섹션
- **실제 프로필 사진** (`/picture_shimwoojin.jpg`)
- 게임 클라이언트 프로그래머 자기소개
- Skills: C++, Unreal Engine, C#, Unity
- Development Tools: Git, SVN, Visual Studio, Rider, VS Code, Claude Code

### Experience 섹션 (새로 추가)
- **타임라인 형식** 경력/학력 표시
- 경력 (💼): 슈퍼빌런랩스 - 클라이언트 엔지니어
- 학력 (🎓): SGA 게임 아카데미, 충북대학교
- 각 항목별 기술 스택 태그

### Projects 섹션
- **필터링 기능**: 대표/경력/개인 탭
- **세부 필터**: 카테고리별 (Unreal, Unity, DirectX11 등)
- **ProjectCard 컴포넌트**: Props로 프로젝트 데이터 전달
- **ProjectModal 컴포넌트**:
  - YouTube 동영상 임베드
  - 상세 기능 목록
  - GitHub 링크
  - ESC 키/배경 클릭으로 닫기
- 프로젝트 7개 등록 (경력 2개 + 개인 5개)

### Contact 섹션
- 이메일, GitHub, LinkedIn
- 카드 형식 레이아웃

### Footer
- 저작권 정보 (© 2026)

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

### ✅ 완료된 과제
- ~~다크모드 토글 버튼 추가~~
- ~~프로젝트 카테고리 필터링~~
- ~~프로젝트 카드를 별도 컴포넌트로 분리~~
- ~~About 섹션 개인 정보로 수정~~

### 🔰 초급 (바로 가능)
1. 프로젝트 YouTube ID 채우기 (PROJECT ARK 등)
2. 프로젝트 GitHub 링크 업데이트
3. CSS 색상/테마 커스터마이징
4. Experience 섹션 내용 보강

### 🔸 중급
1. 스크롤 애니메이션 효과 추가
2. Contact Form 기능 구현 (이메일 전송)
3. 반응형 디자인 개선 (모바일 최적화)
4. 로딩 스피너/스켈레톤 UI 추가

### 🔺 고급 (추후)
1. React Router로 페이지 분리
2. GitHub API 연동 (실시간 프로젝트 정보)
3. TypeScript 전환
4. 테스트 코드 작성 (Jest, React Testing Library)
5. SEO 최적화 (React Helmet)

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

**Last Updated**: 2026-01-16
**Developer**: Shim Woojin
**Learning Path**: React 기초 → Props/State → Hooks → 라우팅 → 고급 기능
