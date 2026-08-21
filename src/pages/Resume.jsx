import React, { useEffect, useState, useRef } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import html2pdf from 'html2pdf.js'
import { useLanguage } from '../context/LanguageContext'
import './Resume.css'

// 언어 매핑 (표시명 → syntax highlighter 언어)
const languageMap = {
  'C++': 'cpp',
  'C#': 'csharp',
  'JavaScript': 'javascript',
  'Python': 'python'
}

// 코드 예시 컴포넌트 with Syntax Highlighting
function CodeExample({ title, language, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const syntaxLang = languageMap[language] || language.toLowerCase()

  return (
    <div className="code-example-wrapper">
      <button className="code-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '코드 접기 ▲' : '코드 예시 보기 ▼'}
      </button>
      {isOpen && (
        <div className="code-example">
          <div className="code-example-header">
            <span>{title}</span>
            <span className="lang-tag">{language}</span>
          </div>
          <SyntaxHighlighter
            language={syntaxLang}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              borderRadius: '0 0 8px 8px',
              fontSize: '0.85rem'
            }}
            showLineNumbers={true}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}

function Resume() {
  const location = useLocation()
  const contentRef = useRef(null)
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)
  const { t, language } = useLanguage()

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

  // PDF 다운로드 함수
  const handleDownloadPdf = async () => {
    if (!contentRef.current || isGeneratingPdf) return

    setIsGeneratingPdf(true)

    // PDF 생성을 위한 클론 생성 (원본 DOM 변경 방지)
    const element = contentRef.current.cloneNode(true)

    // 클론에서 네비게이션과 다운로드 버튼 제거
    const nav = element.querySelector('.resume-nav')
    if (nav) nav.remove()

    // 코드 토글 버튼 숨기기
    const toggleButtons = element.querySelectorAll('.code-toggle')
    toggleButtons.forEach(btn => btn.style.display = 'none')

    // PDF 옵션 설정
    const opt = {
      margin: [10, 10, 10, 10],
      filename: '심우진_경력기술서.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }

    try {
      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('PDF 생성 오류:', error)
      alert('PDF 생성 중 오류가 발생했습니다.')
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  return (
    <div className="resume-page" ref={contentRef}>
      <nav className="resume-nav">
        <Link to="/" className="back-link">{t.resume.backLink}</Link>
        <button
          className="pdf-download-btn"
          onClick={handleDownloadPdf}
          disabled={isGeneratingPdf}
        >
          {isGeneratingPdf ? t.resume.generatingPdf : t.resume.downloadPdf}
        </button>
      </nav>

      <header className="resume-header">
        <h1>{t.resume.title}</h1>
        <div className="resume-info">
          <h2>{t.resume.subtitle}</h2>
          <p>{t.resume.contactInfo}</p>
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
      <section id="project-ark" className="resume-project project-accent-blue">
        <div className="project-header">
          <div className="project-banner">
            <span className="project-number">01</span>
            <div className="project-banner-text">
              <h2>PROJECT ARK <span className="project-genre">MMORPG</span></h2>
              <p className="project-meta">슈퍼빌런랩스 · 클라이언트 프로그래머 · 2024.04 ~ 2025.05 (13개월)</p>
              <p className="project-meta-sub">Unreal Engine 5.3~5.5 · C++ · TCP/IP · SQLite · SVN</p>
            </div>
          </div>
          <p className="project-desc">PC 기반 MMORPG 개발 프로젝트. 퀘스트, NPC, 전투, UI 등 핵심 시스템 개발 담당</p>
        </div>

        {/* 1. 퀘스트 시스템 */}
        <article className="project-task">
          <h3>1. State Pattern 기반 퀘스트 시스템 설계 및 구현</h3>
          <p className="task-headline">⭐ 상태 클래스 추가만으로 확장되는 퀘스트 구조 정착</p>

          <div className="star-section situation">
            <h4>📌 배경 및 과제</h4>
            <ul>
              <li>프로젝트 초기, 다양한 퀘스트 타입을 지원해야 하는데 if-else 기반 구조는 타입 추가마다 전체 수정 필요</li>
              <li>UI·네트워크·게임 로직이 강결합되어 있어 책임 분리가 선행되어야 하는 상황</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>State Pattern으로 퀘스트 생명주기(수락 → 진행 → 완료 대기 → 완료)를 상태 클래스 단위로 분리</li>
              <li>Factory Pattern으로 서버 패킷·DB 템플릿 기반 인스턴스 생성을 일원화</li>
              <li>Subsystem 레이어에서 서버 패킷 처리와 UI 업데이트를 분리</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>이후 퀘스트 타입이 추가될 때마다 상태 클래스 하나만 작성하면 되는 구조로 정착</strong></li>
              <li>네트워크 로직과 게임플레이 로직을 독립적으로 수정할 수 있는 구조 확보</li>
            </ul>
          </div>

          <CodeExample title="State Pattern 기반 퀘스트 시스템" language="C++">
{`// State 베이스 클래스 - 상태 전이 인터페이스 정의
class QuestInstanceState
{
    friend class UQuestInstance;
    static TMap<EQuestState, TSharedPtr<QuestInstanceState>> QuestStateMap;

public:
    virtual void OnEnter(UQuestInstance* InQuestInst) = 0;
    virtual void OnExit(UQuestInstance* InQuestInst) = 0;
    virtual bool CanProcessEvent(UQuestInstance* InQuestInst,
                                  const FQuestUpdateParam& InUpdateParam) = 0;
    virtual void ProcessEvent(UQuestInstance* InQuestInst,
                               const FQuestUpdateParam& InUpdateParam) = 0;
    virtual EQuestState GetState() { return EQuestState::None; }
};

// Active 상태 - 목표 달성 시 CompletablePending으로 전이
class QuestState_Active : public QuestInstanceState
{
    virtual void ProcessEvent(UQuestInstance* InQuestInst,
                               const FQuestUpdateParam& InUpdateParam) final
    {
        const FActiveQuestData& ActiveQuestData = InQuestInst->GetActiveQuestData();
        // 3개 목표 모두 달성 조건 확인
        if (InUpdateParam.Objective1UpdateCount >= ActiveQuestData.Objective1AimCount
            && InUpdateParam.Objective2UpdateCount >= ActiveQuestData.Objective2AimCount
            && InUpdateParam.Objective3UpdateCount >= ActiveQuestData.Objective3AimCount)
        {
            InQuestInst->ChangeState(EQuestState::CompletablePending);
        }
    }
};

// Factory - 서버 패킷 + DB 템플릿 기반 인스턴스 생성
class UQuestFactory : public UObject
{
    UQuestInstance* CreateQuestInstFromTemplate(
        const PacketStruct::FQuestBase& InQuestBase)
    {
        // DB에서 퀘스트 템플릿 조회
        TArray<const FQuestTemplate*> QuestTemplates =
            DBHelper::Quest::GetQuestTemplate(InQuestBase.QuestTID);

        // 서버 패킷 데이터로 ActiveQuestData 구성
        FActiveQuestData ActiveQuestData;
        ActiveQuestData.QuestTemplateID = InQuestBase.QuestTID;
        // ... Objective 정보 설정

        // 인스턴스 생성 및 초기화
        UQuestInstance* NewQuestInst = NewObject<UQuestInstance>();
        NewQuestInst->SetActiveQuestData(ActiveQuestData);
        NewQuestInst->Initialize();
        return NewQuestInst;
    }
};`}
          </CodeExample>
        </article>

        {/* 2. NPC 대화 시스템 */}
        <article className="project-task">
          <h3>2. 플러그인 커스터마이징으로 NPC 대화 시스템 개발</h3>
          <p className="task-headline">⭐ 기획팀이 코드 수정 없이 노드 그래프로 대화 제작</p>

          <div className="star-section situation">
            <h4>📌 배경 및 과제</h4>
            <ul>
              <li>CSV 테이블 기반 대화 관리의 한계(복잡한 분기 관리 불가) 피드백 → 시각적 관리 시스템 필요</li>
              <li>짧은 개발 기간 내 안정적으로 구축해야 하는 제약</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>자체 개발 대신 마켓플레이스 플러그인 3종을 비교 분석 후 요구사항에 맞는 플러그인 선정 → 개발 기간 단축을 우선한 판단</li>
              <li>베이스 클래스 상속으로 프로젝트 UI 시스템·카메라 연출과 통합</li>
              <li>대화 구조 재사용·다중 분기·퀘스트 연동용 커스텀 노드와 컴파일 시점 무결성 검증(순환 참조, 타입 불일치) 도구 추가 개발</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>기획팀이 코드 수정 없이 노드 그래프로 직접 대화 제작</strong></li>
              <li>공통 대화 구조 재사용으로 에셋 중복 감소, 컴파일 시점 검증으로 런타임 에러 사전 차단</li>
            </ul>
          </div>
        </article>

        {/* 3. 월드맵 도구 */}
        <article className="project-task">
          <h3>3. 스플라인 기반 월드맵 자동 생성 도구 개발</h3>
          <p className="task-headline">⭐ 수작업 지도 재작업 → 버튼 클릭 한 번으로 자동화</p>

          <div className="star-section situation">
            <h4>📌 배경 및 과제</h4>
            <ul>
              <li>레벨 변경이 잦은 MMORPG에서 수작업 지도 제작은 수정마다 재작업 발생</li>
              <li>레벨 디자이너가 코드 수정 없이 영역을 조정할 수 있어야 하는 요구</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>스플라인으로 경계선을 배치하면 BFS로 내부를 채워 마스크 텍스처를 자동 생성하는 에디터 도구 개발</li>
              <li>RGB 채널에 영역 ID·그라데이션·경계선 정보를 담아 머티리얼에서 해금/잠김 상태 시각화</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>레벨 수정 시 버튼 클릭 한 번으로 지도 갱신</strong> → 레벨 디자이너 독립 작업 가능</li>
              <li>프로젝트 전 레벨에서 프로젝트 내내 사용</li>
            </ul>
          </div>
        </article>

        {/* 4. 리팩토링 */}
        <article className="project-task">
          <h3>4. 12,000줄 캐릭터 클래스 리팩토링 (컴포넌트화)</h3>
          <p className="task-headline">⭐ 코드량 80% 감소 (12,000줄 → 2,500줄)</p>

          <div className="star-section situation">
            <h4>📌 배경 및 과제</h4>
            <ul>
              <li>초기 개발 속도를 우선하며 단일 캐릭터 클래스가 12,000줄로 비대화 → 협업·유지보수 한계</li>
              <li>팀원들의 기존 사용 패턴과 인터페이스를 유지하면서 구조를 개선해야 하는 제약</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>역할별(이동·엔티티·상태이상·메시·VFX·대화) 컴포넌트 6종으로 분리하고 인터페이스로 접근 통합</li>
              <li>레퍼런스 반환 설계로 Null 체크를 구조적으로 제거, GetOrCreate 패턴으로 지연 생성</li>
              <li>기존 호출부가 깨지지 않도록 인터페이스 시그니처를 유지하며 점진적 이관</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>코드량 80% 감소 (12,000줄 → 2,500줄)</strong>, 기능별 독립 수정으로 팀 동시 작업 시 충돌 감소</li>
              <li>Null 체크 일관성 확보로 런타임 크래시 감소</li>
              <li>팀원 피드백: '캐릭터 코드 이해하기 쉬워졌다', '협업이 편해졌다'</li>
            </ul>
          </div>

          <CodeExample title="Component Provider 패턴" language="C++">
{`// ICharacterComponentProvider 인터페이스
class ICharacterComponentProvider
{
public:
    // 레퍼런스 반환으로 Null 체크 불필요
#if UE_BUILD_DEVELOPMENT
    virtual UCharacterDebugComponent& GetDebug() = 0;
#endif
    virtual UCharacterMovementComponent& GetMovement() const = 0;
    virtual UCharacterMeshComponent& GetCharMesh() = 0;
    virtual UCharacterConditionComponent& GetCondition() = 0;
    virtual UCharacterEntityComponent& GetEntity() = 0;
    virtual const UCharacterEntityComponent& GetEntity() const = 0;
    virtual UCharacterVFXComponent& GetVFX() = 0;
    virtual UDialogueSpeakerComponent& GetDialogueSpeaker() = 0;
};

// AGameCharacter_Base - 인터페이스 구현
class AGameCharacter_Base
    : public ACharacter
    , public ICharacterComponentProvider
{
    UPROPERTY()
    TObjectPtr<UCharacterMovementComponent> CharacterMovementComponent;
    UPROPERTY()
    TObjectPtr<UCharacterEntityComponent> CharacterEntityComponent;
    // ... 기타 컴포넌트

    // GetOrCreate 패턴 - 필요 시 컴포넌트 생성
    UCharacterEntityComponent* GetOrCreateCharacterEntityComponent()
    {
        if (CharacterEntityComponent == nullptr)
        {
            CharacterEntityComponent = NewObject<UCharacterEntityComponent>(this);
            CharacterEntityComponent->RegisterComponent();
        }
        return CharacterEntityComponent;
    }

    virtual UCharacterEntityComponent& GetEntity() final
    {
        return *GetOrCreateCharacterEntityComponent();
    }
};

// 사용 예시 - 간결하고 안전한 컴포넌트 접근
void ProcessCharacter(ICharacterComponentProvider& Provider)
{
    Provider.GetMovement().UpdateMovementSpeed();  // Null 체크 불필요
    Provider.GetEntity().GetEntityID();
    Provider.GetCondition().ApplyStatusEffect(Effect);
}`}
          </CodeExample>
        </article>

        {/* 5. 패킷 녹화/재생 */}
        <article className="project-task">
          <h3>5. 패킷 녹화/재생 디버깅 시스템 개발</h3>
          <p className="task-headline">⭐ 재현 불가능하던 동기화 버그를 녹화 파일로 즉시 재현</p>

          <div className="star-section situation">
            <h4>📌 배경 및 과제</h4>
            <ul>
              <li>클라-서버 동기화 버그는 재현이 어려워 디버깅 비용이 큼 → 전투 개발팀에서 상황 재현 도구 요청</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>서버 패킷을 타임스탬프와 함께 바이너리로 직렬화해 기록하고, 재생 전용 GameMode에서 재생 (속도 조절·일시정지·시점 이동)</li>
              <li>맵 진입 등 특정 시점에 자동으로 녹화가 시작/종료되도록 설계 → 개발자가 신경 쓸 필요 없이 항상 기록</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>녹화 파일로 버그 즉시 재현</strong> → 재현 불가능하던 동기화 오류를 반복 재생하며 디버깅</li>
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
              <li><strong>AreaGroupActor 시스템 개발</strong> — 레벨 디자이너가 NPC·Waypoint·Area를 에디터에서 배치하면 DB 추출과 서버-클라 위치 동기화까지 자동 처리되는 파이프라인 구축</li>
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
              <li>치트 시스템 개발 (카테고리별 분류, 에디터 DockTab 통합) 및 패킷 데이터 실시간 모니터링</li>
              <li>Slack API 연동 버그 제보 도구 (원클릭으로 스크린샷 + 로그 채널 전송)</li>
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
      <section id="project-vir" className="resume-project project-accent-purple">
        <div className="project-header">
          <div className="project-banner">
            <span className="project-number">02</span>
            <div className="project-banner-text">
              <h2>PROJECT VIR <span className="project-genre">모바일 캐주얼</span></h2>
              <p className="project-meta">슈퍼빌런랩스 · 클라이언트 프로그래머 (라이브 운영 지원) · 2025.05 ~ 2025.07 (3개월)</p>
              <p className="project-meta-sub">Unity Engine 2022.3 · C# · Git</p>
            </div>
          </div>
          <p className="project-desc">라이브 서비스 중인 모바일 캐주얼 게임 유지보수 및 대규모 업데이트 (기존 개발팀 인원 감소로 PROJECT ARK 팀 대거 투입)</p>
        </div>

        {/* 1. 레드닷 시스템 */}
        <article className="project-task">
          <h3>1. 레드닷(알림 마커) 시스템 구조 개선</h3>
          <p className="task-headline">⭐ 인수인계 직후 레드닷 버그 80% 감소</p>

          <div className="star-section situation">
            <h4>📌 배경 및 과제</h4>
            <ul>
              <li>담당자 퇴사로 코드 파악이 어려운 상태에서, 방치형 게임의 핵심인 레드닷(보상/강화 알림)이 두 시스템으로 혼재</li>
              <li>ScriptableObject 방식이라 DB ID마다 에셋 파일이 늘어나 유지보수 불가능한 구조</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>레거시 시스템을 전면 제거하고 단일 시스템으로 통합 → 개발자가 어느 시스템을 쓸지 고민할 필요 제거</li>
              <li>조건을 컴포넌트에서 직접 정의하는 구조로 변경 → 에셋 파일 생성 자체를 불필요하게 만듦</li>
              <li>런타임 인스턴스 추적 컨트롤러와 사용 위치 역추적 에디터 도구 개발</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>인수인계 직후 레드닷 버그 80% 감소</strong> (5건 발생 상황 → 1건 이하)</li>
              <li>에셋 파일 폭증 문제 해소, 레드닷 사용 위치를 에디터에서 즉시 추적 가능</li>
            </ul>
          </div>
        </article>

        {/* 2. Unity 환경 적응 */}
        <article className="project-task">
          <h3>2. Unity 환경 적응 및 대규모 업데이트 개발</h3>
          <p className="task-headline">⭐ 3개월 내 Unity C# 실무 투입 수준 도달, 대규모 업데이트 출시</p>

          <div className="star-section situation">
            <h4>📌 배경 및 과제</h4>
            <ul>
              <li>언리얼(C++)만 다루던 상태에서 라이브 서비스 중인 Unity(C#) 프로젝트에 투입, 사활을 건 대규모 업데이트 진행 중</li>
            </ul>
          </div>

          <div className="star-section action">
            <h4>⚙️ 실행</h4>
            <ul>
              <li>C# 학습과 병행하며 패치 → 로딩 → 로그인 → 본게임 전체 Flow를 분석해 프로젝트 구조부터 파악</li>
              <li>대규모 업데이트 컨텐츠 개발 (크루 상점, Playable Character 상호작용, 탭 기반 공통 UI, 던전 진입 UI)</li>
              <li>DB 데이터를 Inspector에서 드롭다운으로 다루는 Attribute 등 에디터 확장 개발 → 실수 여지 축소</li>
            </ul>
          </div>

          <div className="star-section result">
            <h4>✅ 결과</h4>
            <ul>
              <li><strong>3개월 내 Unity C# 실무 투입 가능 수준 도달</strong>, 대규모 업데이트 성공적 출시</li>
              <li>엔진이 바뀌어도 빠르게 적응하는 학습 능력 입증</li>
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

          <div className="skill-category">
            <h3>AI 활용 개발 워크플로</h3>
            <ul>
              <li>Claude Code 기반 개발·학습 문서화 자동화 (VitePress 학습 기록 사이트 운영)</li>
              <li>AI 도구를 활용한 리팩토링·프로토타이핑·코드 리뷰 워크플로 적용</li>
              <li>구현은 AI로 가속하고, 설계 판단·검증·트레이드오프에 집중하는 개발 방식</li>
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
