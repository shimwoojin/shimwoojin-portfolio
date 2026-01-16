import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Resume.css'

function Resume() {
  const location = useLocation()

  // 해시로 이동 시 해당 섹션으로 스크롤
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return (
    <div className="resume-page">
      <nav className="resume-nav">
        <Link to="/" className="back-link">← 포트폴리오로 돌아가기</Link>
      </nav>

      <header className="resume-header">
        <h1>경력 기술서</h1>
        <div className="resume-info">
          <h2>심우진 | 게임 클라이언트 프로그래머</h2>
          <p>Email: ggoggal@gmail.com | Phone: 010-5794-0627</p>
        </div>
      </header>

      <section className="resume-summary">
        <h2>경력 요약</h2>
        <ul>
          <li><strong>총 경력:</strong> 1년 4개월 (2024.04 ~ 2025.07)</li>
          <li><strong>주요 기술:</strong> Unreal Engine 4/5, C++, Unity, C#, 디자인 패턴, 네트워크 프로그래밍</li>
          <li><strong>핵심 역량:</strong> 시스템 아키텍처 설계, 레거시 코드 개선, 개발 생산성 도구 제작</li>
        </ul>
      </section>

      {/* PROJECT ARK */}
      <section id="project-ark" className="resume-project">
        <div className="project-header">
          <h2>프로젝트 1. PROJECT ARK (MMORPG)</h2>
          <table className="project-info-table">
            <tbody>
              <tr><th>회사</th><td>슈퍼빌런랩스</td></tr>
              <tr><th>기간</th><td>2024.04 ~ 2025.05 (13개월)</td></tr>
              <tr><th>역할</th><td>클라이언트 프로그래머</td></tr>
              <tr><th>기술 스택</th><td>Unreal Engine 5.3~5.5, C++, TCP/IP, SQLite, SVN</td></tr>
              <tr><th>프로젝트 설명</th><td>PC 기반 MMORPG 개발 프로젝트. 퀘스트, NPC, 전투, UI 등 핵심 시스템 개발 담당</td></tr>
            </tbody>
          </table>
        </div>

        {/* 1. 퀘스트 시스템 */}
        <article className="project-task">
          <h3>1. State Pattern 기반 퀘스트 시스템 설계 및 구현</h3>

          <div className="star-section situation">
            <h4>📌 상황 (Situation)</h4>
            <ul>
              <li>MMORPG 프로젝트 초기 단계에서 다양한 퀘스트 타입을 지원하는 확장 가능한 시스템 필요</li>
              <li>서버-클라이언트 동기화가 필요한 복잡한 상태 관리 요구</li>
            </ul>
          </div>

          <div className="star-section task">
            <h4>🎯 과제 (Task)</h4>
            <ul>
              <li>기존 if-else 기반 구조는 새 퀘스트 타입 추가 시 모든 코드 수정 필요 → 확장성 문제</li>
              <li>UI와 로직의 강결합으로 인한 유지보수 어려움</li>
              <li>서버 통신 레이어와 게임 로직의 책임 분리 필요</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행 (Action)</h4>
            <ul>
              <li>State Pattern으로 퀘스트 생명주기 관리 (InProgress → DoneButNotEnded → Ended)</li>
              <li>Factory Pattern으로 다양한 퀘스트 타입 생성 로직 중앙화</li>
              <li>Subsystem을 통한 서버 통신 레이어 분리로 느슨한 결합 구현</li>
              <li>Delegate 패턴으로 UI와 로직 완전 분리 (UI 코드 0줄 의존성)</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과 (Result)</h4>
            <ul>
              <li>새 퀘스트 타입 추가 시 기존 코드 수정 불필요 (State 클래스만 추가) → 확장성 대폭 향상</li>
              <li>각 레이어 독립적으로 단위 테스트 작성 가능 → 버그 발생률 감소</li>
              <li>UI 변경 시 게임 로직 수정 불필요 → 유지보수성 향상</li>
            </ul>
          </div>
        </article>

        {/* 2. NPC 대화 시스템 */}
        <article className="project-task">
          <h3>2. 플러그인 커스터마이징으로 NPC 대화 시스템 개발</h3>

          <div className="star-section situation">
            <h4>📌 상황</h4>
            <ul>
              <li>이전 프로젝트에서 CSV 테이블 기반 NPC 대화 관리의 어려움 피드백</li>
              <li>복잡한 대화 분기 구조를 시각적으로 관리할 수 있는 시스템 필요</li>
            </ul>
          </div>

          <div className="star-section task">
            <h4>🎯 과제</h4>
            <ul>
              <li>언리얼 엔진 내장 기능 활용 권장 → 생태계 활용 필요</li>
              <li>빠른 개발 기간 내에 안정적인 시스템 구축</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>Epic Store에서 3개 후보 플러그인 비교 분석 (Dialogue Tree, Mountea Framework 등)</li>
              <li>프로젝트 요구사항에 최적인 Dialogue Tree 플러그인 선정 및 도입</li>
              <li>플러그인 소스 코드 수정하여 프로젝트 UI 시스템과 통합</li>
              <li>else-if 노드, 캐릭터 레벨/퀘스트/아이템 조건 체크 기능 추가 개발</li>
              <li>전체 대화 에셋 무결성 검증 도구 개발 (컴파일 에러 사전 차단)</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li>플러그인 커스터마이징으로 빠른 개발 완료</li>
              <li>기획팀이 직접 Tree 형태로 대화 제작 가능 → 커뮤니케이션 비용 감소</li>
              <li>무결성 검증 도구로 런타임 에러 사전 차단 → QA 비용 절감</li>
              <li>팀 피드백: '개발 속도 빠르다', 'Tree 에디터 편하다'</li>
            </ul>
          </div>
        </article>

        {/* 3. 월드맵 도구 */}
        <article className="project-task">
          <h3>3. 스플라인 기반 월드맵 자동 생성 도구 개발</h3>

          <div className="star-section situation">
            <h4>📌 상황</h4>
            <ul>
              <li>MMORPG 특성상 레벨 변경이 빈번하게 발생</li>
              <li>수작업으로 지도 영역 구분 시 레벨 수정마다 지도 재작업 필요</li>
            </ul>
          </div>

          <div className="star-section task">
            <h4>🎯 과제</h4>
            <ul>
              <li>마을/지역 단위로 영역 구분 및 해금 시스템 필요</li>
              <li>레벨 디자이너가 코드 수정 없이 영역 조정 가능해야 함</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>스플라인 컴포넌트로 레벨 디자이너가 직접 마을 경계선 배치 가능하게 구현</li>
              <li>BFS 알고리즘으로 스플라인 내부 영역 자동 채우기</li>
              <li>RGB 채널별로 영역 ID를 저장하는 마스크 텍스처 자동 생성</li>
              <li>언리얼 머티리얼로 해금/잠김 상태 시각화</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li>레벨 수정 시 스플라인 배치 → 버튼 클릭으로 지도 자동 업데이트</li>
              <li>레벨 디자이너가 코드 수정 없이 독립적으로 작업 가능 → 개발팀 의존도 감소</li>
              <li>레벨 디자이너 피드백: '편하다', '잘 쓰고 있다'</li>
              <li>레벨마다 꾸준히 사용 (프로젝트 내내 활용)</li>
            </ul>
          </div>
        </article>

        {/* 4. 리팩토링 */}
        <article className="project-task">
          <h3>4. 12,000줄 캐릭터 클래스 리팩토링 (컴포넌트화)</h3>

          <div className="star-section situation">
            <h4>📌 상황</h4>
            <ul>
              <li>프로젝트 초기 빠른 개발을 위해 단일 캐릭터 클래스에 모든 기능 집중</li>
              <li>헤더 2,000줄 + cpp 10,000줄으로 비대화되어 유지보수 및 협업 어려움</li>
            </ul>
          </div>

          <div className="star-section task">
            <h4>🎯 과제</h4>
            <ul>
              <li>리팩토링 후에도 기존 코드와 인터페이스 일관성 유지 필요</li>
              <li>팀원들의 기존 사용 패턴 유지하면서 구조 개선</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>기능별로 컴포넌트 분리 (Debug, Battle, Network, Animation 등)</li>
              <li>래퍼런스 기반 접근으로 Null 체크 부담 제거 (컴포넌트 생성 보장)</li>
              <li>기존 사용 패턴 유지: Character→Function() 대신 Character→Component().Function() 형태</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>코드량 80% 감소</strong> (12,000줄 → 2,500줄)</li>
              <li>새 기능 추가 시 해당 컴포넌트만 수정 → 사이드 이펙트 감소</li>
              <li>팀원 피드백: '캐릭터 코드 이해하기 쉬워졌다', '협업이 편해졌다'</li>
            </ul>
          </div>
        </article>

        {/* 5. 패킷 녹화/재생 */}
        <article className="project-task">
          <h3>5. 패킷 녹화/재생 디버깅 시스템 개발</h3>

          <div className="star-section situation">
            <h4>📌 상황</h4>
            <ul>
              <li>전투 시스템 개발 중 버그 재현이 어려운 문제 발생</li>
              <li>클라이언트-서버 동기화 오류 디버깅에 많은 시간 소요</li>
              <li>전투 개발팀에서 특정 상황 재현 도구 요청</li>
            </ul>
          </div>

          <div className="star-section task">
            <h4>🎯 과제</h4>
            <ul>
              <li>실시간 전투 상황을 정확히 기록하고 재생할 수 있는 시스템 필요</li>
              <li>서버 패킷 데이터를 바이너리로 저장 및 역직렬화</li>
              <li>재생 전용 환경 구축 (독립 레벨, GameMode)</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>서버 측: 녹화 시점부터 패킷을 바이너리로 직렬화하여 파일 저장</li>
              <li>클라이언트 측: 바이너리 역직렬화 및 패킷 데이터 복원</li>
              <li>재생 전용 레벨 및 GameMode 구현</li>
              <li>패킷 타임스탬프 기반 순차 재생으로 캐릭터 이동, 스킬 사용, 무기 교체 등 모든 액션 재현</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li>전투 팀 버그 재현 시간 대폭 단축 (실시간 재생으로 즉시 확인 가능)</li>
              <li>복잡한 동기화 오류를 반복 재생하며 디버깅 가능 → 버그 수정 효율 향상</li>
              <li>바이너리 직렬화/역직렬화 경험으로 네트워크 이해도 향상</li>
              <li>전투 개발자 피드백: '디버깅 효율이 크게 올라갔다'</li>
            </ul>
          </div>
        </article>

        {/* 기타 담당 업무 */}
        <article className="project-task other-tasks">
          <h3>기타 담당 업무</h3>

          <div className="task-category">
            <h4>에디터 확장 및 자동화</h4>
            <ul>
              <li><strong>AreaGroupActor 시스템 개발</strong>
                <ul>
                  <li>레벨 디자이너를 위한 에디터 기능 제공 (NPC, Waypoint, Area 등)</li>
                  <li>DataAsset 기반 클라이언트 데이터 관리 (외형, 대화 에셋 등)</li>
                  <li>DB 자동 추출 기능 (CSV) 및 서버-클라이언트 위치 동기화</li>
                  <li>동적 레벨 배치 시스템 (로딩 시 자동 생성)</li>
                  <li>클라이언트 선판단 최적화 (콜리전 기반 존 검증)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="task-category">
            <h4>UI/UX 개발</h4>
            <ul>
              <li>미션 시스템 (초기 가이드용, 후에 퀘스트 시스템 기반이 됨)</li>
              <li>인벤토리 시스템 (아이템 관리, 정렬, 필터링, Scene Capture 활용)</li>
              <li>설정 UI (그래픽, 사운드, 키바인딩)</li>
              <li>HUD 구성 (HP/MP 바, 스킬 쿨다운, 버프 표시)</li>
              <li>방위 UI 개발</li>
            </ul>
          </div>

          <div className="task-category">
            <h4>게임플레이 시스템</h4>
            <ul>
              <li>스탯 및 스킬 강화 시스템</li>
              <li>컨디션 시스템 (월드 액터의 visibility 등을 퀘스트 상태에 따라 관리)</li>
            </ul>
          </div>

          <div className="task-category">
            <h4>개발 환경 개선</h4>
            <ul>
              <li>StandAlone 모드 개발 (서버 없이 로컬 테스트 가능, 아트/전투팀 지원)</li>
              <li>치트 시스템 개발 (카테고리별 분류, 에디터 DockTab 통합)</li>
              <li>패킷 데이터 실시간 모니터링 (String화하여 치트 툴에서 확인)</li>
              <li>Slack 버그 제보 연동 (원클릭 스크린샷 + 로그 전송)</li>
            </ul>
          </div>

          <div className="task-category">
            <h4>성능 최적화</h4>
            <ul>
              <li>로딩 시 병목 해결 (프로파일링 기반, 비동기 액터 배치)</li>
              <li><strong>AreaGroup 우선순위 로딩 (3초 멈춤 → 0.1초로 개선)</strong></li>
            </ul>
          </div>
        </article>
      </section>

      {/* PROJECT VIR (슈빌) */}
      <section id="project-vir" className="resume-project">
        <div className="project-header">
          <h2>프로젝트 2. PROJECT VIR (모바일 캐주얼 게임)</h2>
          <table className="project-info-table">
            <tbody>
              <tr><th>회사</th><td>슈퍼빌런랩스</td></tr>
              <tr><th>기간</th><td>2025.05 ~ 2025.07 (3개월)</td></tr>
              <tr><th>역할</th><td>클라이언트 프로그래머 (라이브 운영 지원)</td></tr>
              <tr><th>기술 스택</th><td>Unity Engine 2022.3, C#, Git</td></tr>
              <tr><th>프로젝트 설명</th><td>라이브 서비스 중인 모바일 캐주얼 게임 유지보수 및 대규모 업데이트</td></tr>
              <tr><th>투입 배경</th><td>기존 개발팀 인원 감소로 PROJECT ARK 팀 대거 투입</td></tr>
            </tbody>
          </table>
        </div>

        {/* 1. 레드닷 시스템 */}
        <article className="project-task">
          <h3>1. 레드닷(알림 마커) 시스템 구조 개선</h3>

          <div className="star-section situation">
            <h4>📌 상황</h4>
            <ul>
              <li>기존 개발팀 인원 퇴사로 클라이언트 책임자 부재, 코드베이스 파악 어려움</li>
              <li>방치형 게임 특성상 레드닷 버그 시 유저 경험 치명적 (보상/강화 알림)</li>
              <li>레드닷 시스템이 두 가지로 분리되어 혼재 (RedDotChecker vs NotiDotCheckerBase)</li>
              <li>ScriptableObject 방식의 한계로 DB ID마다 에셋 파일 증가 → 유지보수 불가능</li>
            </ul>
          </div>

          <div className="star-section task">
            <h4>🎯 과제</h4>
            <ul>
              <li>두 시스템(RedDotChecker, NotiDotCheckerBase) 통합 필요</li>
              <li>ScriptableObject 에셋 파일 증가 문제 해결</li>
              <li>레드닷 사용 위치 추적 불가 문제 개선</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>NotiDotCheckerBase 기반 레거시 코드 전면 제거 → RedDotChecker로 통합
                <ul>
                  <li>RedDotCondition을 컴포넌트에서 직접 생성 가능한 구조체 + 에디터 기능 개발</li>
                  <li>→ ScriptableObject 에셋 파일 생성 불필요</li>
                </ul>
              </li>
              <li>RedDotController 클래스 신규 개발
                <ul>
                  <li>런타임 중 RedDotCondition 인스턴스 생성 및 추적 관리</li>
                </ul>
              </li>
              <li>에디터 추적 도구 개발
                <ul>
                  <li>특정 레드닷이 어떤 UI에서 사용되는지 역추적 가능</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>인수인계 직후 레드닷 버그 80% 감소</strong> (5건 발생 상황 → 1건 이하)</li>
              <li>ScriptableObject 에셋 파일 생성 불필요 → 유지보수 가능한 구조로 전환</li>
              <li>레드닷 사용 위치 에디터에서 즉시 추적 가능 → 디버깅 효율 향상</li>
              <li>시스템 통합으로 개발자 혼란 제거 (RedDotChecker vs NotiDotChecker 고민 불필요)</li>
            </ul>
          </div>
        </article>

        {/* 2. Unity 환경 적응 */}
        <article className="project-task">
          <h3>2. Unity 환경 적응 및 대규모 업데이트 개발</h3>

          <div className="star-section situation">
            <h4>📌 상황</h4>
            <ul>
              <li>언리얼 엔진만 사용하던 개발자가 Unity 프로젝트 투입</li>
              <li>C# 문법 무지한 상태, 라이브 서비스 중인 게임으로 빠른 적응 필요</li>
              <li>프로젝트 사활을 건 대규모 업데이트 진행 중</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>C# 문법 학습 (프로젝트 사용 버전에 맞춰 블로그 참고하며 학습)</li>
              <li>Unity 프로젝트 구조 파악
                <ul>
                  <li>Patch → Loading → Login → 본게임 전체 Flow 분석</li>
                  <li>Prefab, GameObject 등 Unity 핵심 개념 실무 적용</li>
                </ul>
              </li>
              <li>대규모 업데이트 컨텐츠 개발
                <ul>
                  <li>크루 상점 개발</li>
                  <li>Playable Character 제공에 따른 Interaction 건물 관리 (UI 통합, 레드닷, 콜리전 범위 UI 활성화)</li>
                  <li>탭 기반 Depth UI 공통 클래스 작업</li>
                  <li>던전 진입 UI 개발</li>
                </ul>
              </li>
              <li>에디터 확장 기능 개발
                <ul>
                  <li>[Csv("FileName", "ColumnName")] Attribute로 Inspector 드롭다운 제공</li>
                  <li>CSV → DB 변환 시 명세(MD) 자동 생성</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>3개월 내 Unity C# 실무 투입 가능 수준 도달</strong></li>
              <li>대규모 업데이트 성공적 출시 (크루 상점, Playable Character 등)</li>
              <li>에디터 확장으로 DB 데이터 Inspector 접근 편의성 향상</li>
              <li>빠른 적응력 및 학습 능력 입증</li>
            </ul>
          </div>
        </article>
      </section>

      {/* 핵심 기술 역량 요약 */}
      <section className="resume-skills-summary">
        <h2>핵심 기술 역량 요약</h2>

        <div className="skills-grid">
          <div className="skill-category">
            <h3>시스템 설계 및 아키텍처</h3>
            <ul>
              <li>State Pattern, Factory Pattern 등 디자인 패턴 실무 적용 경험</li>
              <li>확장 가능하고 유지보수 용이한 시스템 설계 역량</li>
              <li>느슨한 결합(Loose Coupling) 기반 모듈 간 의존성 최소화</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>레거시 코드 개선 및 리팩토링</h3>
            <ul>
              <li>대규모 레거시 코드 리팩토링 경험 (12,000줄 → 2,500줄)</li>
              <li>혼재된 시스템 통합 및 구조 개선 (Unity 레드닷 시스템)</li>
              <li>컴포넌트 기반 설계로 유지보수성 80% 향상</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>개발 생산성 및 도구 제작</h3>
            <ul>
              <li>에디터 확장 및 자동화 도구 개발 (Unreal Slate UI, Unity Custom Editor)</li>
              <li>팀 생산성 향상을 위한 치트 시스템 및 디버깅 툴 개발</li>
              <li>플러그인 커스터마이징 및 프로젝트 통합 경험</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>네트워크 및 멀티플레이어</h3>
            <ul>
              <li>TCP/IP 기반 서버-클라이언트 통신 구조 설계</li>
              <li>클라-서버 동기화 및 패킷 데이터 관리</li>
              <li>바이너리 직렬화/역직렬화 경험</li>
              <li>MMORPG 특화 네트워크 아키텍처 이해</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>빠른 적응력 및 학습 능력</h3>
            <ul>
              <li>Unreal Engine (C++) → Unity (C#) 3개월 내 전환 성공</li>
              <li>레거시 코드베이스 빠른 파악 및 개선 능력</li>
              <li>새로운 기술 스택 학습 및 실무 적용 경험</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 마무리 */}
      <section className="resume-conclusion">
        <h2>마무리</h2>
        <p>
          1년 4개월의 실무 경험을 통해 단순히 기능을 구현하는 것을 넘어, 팀 전체의 생산성을 고려하는 개발자로
          성장했습니다. Unreal Engine에서 State Pattern 기반 시스템 설계, 12,000줄 코드 리팩토링, 패킷 녹화/재생
          시스템 등을 개발했고, Unity 환경으로 전환하여 레거시 레드닷 시스템을 통합 개선하며 '왜 이렇게
          만들어야 하는가'에 대한 고민을 지속적으로 해왔습니다.
        </p>
        <p>
          특히 MMORPG라는 복잡한 장르 개발과 라이브 서비스 중인 모바일 게임 유지보수를 모두 경험하며 확장
          가능한 아키텍처의 중요성과 레거시 코드 개선 능력을 체득했습니다. 동료들의 '개발 속도 빠르다', '디버깅
          효율이 올라갔다'는 피드백을 통해 협업과 커뮤니케이션의 가치를 배웠고, 앞으로도 기술적 깊이를
          더해가며 팀에 실질적인 도움이 되는 개발자가 되고자 합니다.
        </p>
      </section>

      <footer className="resume-footer">
        <p>© 2026 Shim Woojin. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Resume
