import { Link } from 'react-router-dom'

const hide = (e) => { e.currentTarget.style.display = 'none' }

export default function Research() {
  return (
    <>
      <div className="page-header">
        <div className="ph-left">
          <div className="ph-tag">Research Domains · 6 Pillars <span className="axis-mini">ACTS · T 축</span></div>
          <h1 className="ph-title">3개 <em>프로젝트 연구센터</em></h1>
          <div className="ph-desc">조선·구조 AI (삼성중공업) · 헬스케어 AI (은성의료재단) · 소재·재료 AI (KIMS) — 앵커기업 중심 산학 협력 연구</div>
        </div>
        <div className="ph-right">
          <a href="#" className="ph-btn ph-btn-outline"><i className="fas fa-file-pdf"></i> 분야별 백서</a>
          <Link to="/partners" className="ph-btn ph-btn-primary"><i className="fas fa-handshake"></i> 공동연구 신청</Link>
        </div>
      </div>

      <div className="field-nav">
        <a href="#quantum" className="fn-pill"><i className="fas fa-atom" style={{ color: 'var(--violet)' }}></i> 양자 AI</a>
        <a href="#marine" className="fn-pill"><i className="fas fa-ship" style={{ color: 'var(--blue)' }}></i> 해양·물류 AI</a>
        <a href="#medical" className="fn-pill"><i className="fas fa-heart-pulse" style={{ color: 'var(--green)' }}></i> 의료·바이오 AI</a>
        <a href="#material" className="fn-pill"><i className="fas fa-cubes" style={{ color: 'var(--amber)' }}></i> 소재·제조 AI</a>
        <a href="#mobility" className="fn-pill"><i className="fas fa-car" style={{ color: 'var(--rose)' }}></i> 모빌리티 AI</a>
        <a href="#energy" className="fn-pill"><i className="fas fa-bolt" style={{ color: 'var(--teal)' }}></i> 에너지 AI</a>
      </div>

      <section className="field" id="quantum">
        <div className="field-head m">
          <img src="/assets/img/marine-ai.jpg" className="field-img" alt="조선·구조 AI센터" onError={hide} />
          <div className="field-num">壹</div>
          <div className="field-head-inner">
            <div className="field-tag"><i className="fas fa-star"></i> 앵커기업: 삼성중공업</div>
            <div className="field-title">조선·구조 AI센터</div>
            <div className="field-en">SHIPBUILDING &amp; STRUCTURAL AI CENTER · SAMSUNG HEAVY INDUSTRIES</div>
          </div>
        </div>
        <div className="field-body">
          <div className="fb-main">
            <h3>개요</h3>
            <p>조선·구조 AI센터는 앵커기업 <strong>삼성중공업</strong>과 함께 운영하는 프로젝트 연구센터입니다. AI 기반 구조 최적화 알고리즘 개발을 중심으로, 조선 산업 특화 교육 과정과 취업 연계 트랙을 함께 운영합니다.</p>
            <p>조선 특화 교과목 5개를 개설하여 AI와 조선공학의 융합 인재를 양성하며, 취업역량 강화 세미나·컨퍼런스 4회와 협력기업 재직자 AX 교육 2회를 운영합니다. <strong>삼성중공업 취업 연계 트랙</strong>을 통해 산학 연계 인재 양성 모델을 선도합니다.</p>
            <div className="proj-list">
              <div className="proj-list-title">주요 활동</div>
              <div className="proj-row"><div className="name">AI 구조 최적화 알고리즘 개발<small>조선·해양 구조 AI 연구</small></div><div className="amt">진행중</div><div className="stat"><span className="dot"></span>운영</div></div>
              <div className="proj-row"><div className="name">조선 특화 교과목 5개 개설<small>AI·조선공학 융합 커리큘럼</small></div><div className="amt">5개</div><div className="stat"><span className="dot"></span>운영</div></div>
              <div className="proj-row"><div className="name">취업역량 강화 세미나·컨퍼런스<small>산학 연계 취업 지원</small></div><div className="amt">4회</div><div className="stat"><span className="dot"></span>운영</div></div>
              <div className="proj-row"><div className="name">협력기업 재직자 AX 교육<small>삼성중공업 재직자 대상</small></div><div className="amt">2회</div><div className="stat"><span className="dot"></span>운영</div></div>
            </div>
          </div>
          <div className="fb-side">
            <div className="side-card">
              <div className="side-card-tag">앵커기업</div>
              <div className="num" style={{ fontSize: '14.5px', fontWeight: '800' }}>삼성중공업</div>
              <div className="d">개원 협약: 2025.12.30</div>
            </div>
            <div className="partner-mini">
              <div className="logo samsung">S</div>
              <div><div className="nn">삼성중공업</div><div className="tt">조선·구조 AI 앵커기업</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="field" id="medical">
        <div className="field-head b">
          <img src="/assets/img/medical-ai.jpg" className="field-img" alt="헬스케어 AI센터" onError={hide} />
          <div className="field-num">貳</div>
          <div className="field-head-inner">
            <div className="field-tag">⚕️ 앵커기업: 은성의료재단</div>
            <div className="field-title">헬스케어 AI센터</div>
            <div className="field-en">HEALTHCARE AI CENTER · EUNSUNG MEDICAL FOUNDATION</div>
          </div>
        </div>
        <div className="field-body">
          <div className="fb-main">
            <h3>개요</h3>
            <p>헬스케어 AI센터는 앵커기업 <strong>은성의료재단</strong>과 함께 2025년 12월 30일 개원 협약을 체결하고 운영하는 프로젝트 연구센터입니다. 의료 AI 솔루션 과제 발굴을 중심으로, 부산대학교 양산캠퍼스와 연계하여 헬스케어 AX(AI eXperience) 특화 연구를 추진합니다.</p>
            <p>AI 솔루션 과제 발굴 협의를 3회 진행하여 헬스케어 분야의 AX 특화 과제 기반을 확보했으며, 앞으로 양산캠퍼스 의과대학·의생명 분야와의 연계를 강화합니다.</p>
            <div className="proj-list">
              <div className="proj-list-title">주요 활동</div>
              <div className="proj-row"><div className="name">AI 솔루션 과제 발굴 협의<small>은성의료재단과 공동 기획</small></div><div className="amt">3회</div><div className="stat"><span className="dot"></span>운영</div></div>
              <div className="proj-row"><div className="name">헬스케어 AX 특화 과제 기반 확보<small>양산캠퍼스 연계</small></div><div className="amt">진행중</div><div className="stat"><span className="dot"></span>운영</div></div>
            </div>
          </div>
          <div className="fb-side">
            <div className="side-card">
              <div className="side-card-tag">앵커기업</div>
              <div className="num" style={{ fontSize: '14.5px', fontWeight: '800' }}>은성의료재단</div>
              <div className="d">개원 협약: 2025.12.30</div>
            </div>
            <div className="partner-mini">
              <div className="logo eunsung">은</div>
              <div><div className="nn">은성의료재단</div><div className="tt">헬스케어 AI 앵커기업</div></div>
            </div>
            <div className="side-card">
              <div className="side-card-tag">연계 캠퍼스</div>
              <div className="num" style={{ fontSize: '14.5px', fontWeight: '800' }}>양산캠퍼스</div>
              <div className="d">의과대학·의생명 분야 연계</div>
            </div>
          </div>
        </div>
      </section>

      <section className="field" id="material">
        <div className="field-head s">
          <img src="/assets/img/mfg-ai.jpg" className="field-img" alt="소재·재료 AI센터" onError={hide} />
          <div className="field-num">參</div>
          <div className="field-head-inner">
            <div className="field-tag">🏭 앵커기관: 한국재료연구원</div>
            <div className="field-title">소재·재료 AI센터</div>
            <div className="field-en">MATERIALS AI CENTER · KOREA INSTITUTE OF MATERIALS SCIENCE (KIMS)</div>
          </div>
        </div>
        <div className="field-body">
          <div className="fb-main">
            <h3>개요</h3>
            <p>소재·재료 AI센터는 앵커기관 <strong>한국재료연구원(KIMS)</strong>과 함께 2025년 12월 30일 개원 협약을 체결하고 운영하는 프로젝트 연구센터입니다. RISE 산학공동연구 과제 추진을 중심으로, 소재 분야 AX 특화 과제를 발굴합니다.</p>
            <p>한국재료연구원의 소재 분야 전문성과 부산대학교의 AI 모델링 역량을 결합하여 소재 분야 AI 전환(AX)을 선도합니다.</p>
            <div className="proj-list">
              <div className="proj-list-title">주요 활동</div>
              <div className="proj-row"><div className="name">RISE 산학공동연구 과제 추진<small>한국재료연구원 공동</small></div><div className="amt">추진중</div><div className="stat plan"><span className="dot amber"></span>준비</div></div>
              <div className="proj-row"><div className="name">소재 분야 AX 특화 과제 발굴<small>소재 AI 전환 연구</small></div><div className="amt">기획중</div><div className="stat plan"><span className="dot amber"></span>준비</div></div>
            </div>
          </div>
          <div className="fb-side">
            <div className="side-card">
              <div className="side-card-tag">앵커기관</div>
              <div className="num" style={{ fontSize: '14.5px', fontWeight: '800' }}>KIMS</div>
              <div className="d">한국재료연구원 · 개원 협약: 2025.12.30</div>
            </div>
            <div className="partner-mini">
              <div className="logo kims">K</div>
              <div><div className="nn">한국재료연구원</div><div className="tt">소재·재료 AI 앵커기관</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="field" id="strategy">
        <div className="field-head q">
          <div className="field-num">肆</div>
          <div className="field-head-inner">
            <div className="field-tag">🌐 전략 특화 센터 확장 계획 (Vision 2030)</div>
            <div className="field-title">전략 특화 연구센터 — 확장 계획</div>
            <div className="field-en">STRATEGIC RESEARCH CENTERS · EXPANSION PLAN · VISION 2030</div>
          </div>
        </div>
        <div className="field-body">
          <div className="fb-main">
            <h3>PNU AI Context Center</h3>
            <p>Sovereign AI 관점의 Ontology/Context 연구를 담당하는 전략 특화 연구센터. 조선·항만물류·해양수산·국방 분야에 특화된 AI 맥락(Context) 연구를 수행합니다.</p>
            <h3 style={{ marginTop: '18px' }}>PNU AI E&amp;E Center</h3>
            <p>Education &amp; Ethics 분야 연구를 전담하는 전략 특화 연구센터. AI 교육 콘텐츠 개발 및 AI 윤리·신뢰 모듈 연구를 수행합니다.</p>
            <h3 style={{ marginTop: '18px' }}>5년 KPI 목표</h3>
            <div className="proj-list">
              <div className="proj-list-title">Vision 2030 주요 목표</div>
              <div className="proj-row"><div className="name">프로젝트 연구센터 확장<small>3개 → 8개</small></div><div className="amt">8개</div><div className="stat plan"><span className="dot amber"></span>계획</div></div>
              <div className="proj-row"><div className="name">산학 공동 지도교수<small>5년 누적</small></div><div className="amt">30명</div><div className="stat plan"><span className="dot amber"></span>계획</div></div>
              <div className="proj-row"><div className="name">AX 프로젝트 석사 배출<small>5년 누적</small></div><div className="amt">80명</div><div className="stat plan"><span className="dot amber"></span>계획</div></div>
            </div>
          </div>
          <div className="fb-side">
            <div className="side-card">
              <div className="side-card-tag">센터 확장 목표</div>
              <div className="num">3 → 8<span>개</span></div>
              <div className="d">5년 KPI · Vision 2030</div>
            </div>
            <div className="side-card">
              <div className="side-card-tag">AX 프로젝트 석사</div>
              <div className="num">80<span>명</span></div>
              <div className="d">산학 공동 지도교수제 기반</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
