# /sync-learning - 학습 노트 동기화

현재 프로젝트의 학습 내용을 claude-learning 레포에 동기화해줘.

## 대상 레포 정보
- GitHub: https://github.com/shimwoojin/claude-learning.git
- 로컬 경로: C:\EtcProjects\claude-learning-docs

## 작업 절차

### 1. claude-learning 레포 확인/클론
```bash
# 로컬에 없으면 클론
cd C:\EtcProjects
git clone https://github.com/shimwoojin/claude-learning.git claude-learning-docs
```

### 2. 프로젝트 정보 추출
현재 프로젝트에서 다음 파일들의 내용을 추출:
- `CLAUDE.md`: 프로젝트 개요, 기술 스택, 주요 기능
- `DEVLOG.md`: 최근 개발 로그 (상위 100줄)

### 3. 학습 노트 생성/업데이트
`claude-learning-docs/docs/projects/shimwoojin-portfolio.md` 파일 생성:

```markdown
# shimwoojin-portfolio

## 프로젝트 개요
{CLAUDE.md에서 프로젝트 개요 섹션 추출}

## 기술 스택
{CLAUDE.md에서 기술 스택 섹션 추출}

## 주요 학습 내용
{CLAUDE.md와 DEVLOG.md에서 학습 관련 내용 추출}

## 최근 개발 로그
{DEVLOG.md 상위 100줄}

---
*마지막 동기화: {오늘 날짜}*
*소스: [shimwoojin-portfolio](https://github.com/shimwoojin/shimwoojin-portfolio)*
```

### 4. VitePress 설정 업데이트 (필요시)
- `docs/.vitepress/config.js` 사이드바에 링크 추가
- `docs/index.md` 프로젝트 테이블에 추가
- `docs/projects/index.md` 프로젝트 목록에 추가

### 5. 커밋 및 푸시
```bash
cd C:\EtcProjects\claude-learning-docs
git add -A
git commit -m "Update shimwoojin-portfolio learning notes"
git push
```

## 주의사항
- claude-learning 레포가 없으면 먼저 클론
- 기존 내용이 있으면 덮어쓰기
- VitePress 설정은 처음 동기화할 때만 업데이트
