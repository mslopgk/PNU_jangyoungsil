import { Link } from 'react-router-dom'

const metaLink = { color: 'var(--blue)', fontWeight: '700' }

export default function Partners() {
  return (
    <>
      <div className="page-header">
        <div className="ph-left">
          <div className="ph-tag">Partnerships · Industry · Global · Government</div>
          <h1 className="ph-title">파트너십 — <em>열린 협력 생태계</em></h1>
          <div className="ph-desc">개원 동시 협약 3건 (삼성중공업·은성의료재단·KIMS) · ETRI·KERI · 주요 협력 산업체 7개사</div>
        </div>
        <div className="ph-right">
          <a href="#" className="ph-btn ph-btn-outline"><i className="fas fa-file-pdf"></i> 협력 안내서</a>
          <Link to="/partners#contact" className="ph-btn ph-btn-primary"><i className="fas fa-handshake"></i> 협력 문의</Link>
        </div>
      </div>

      <div className="stats-banner">
        <div className="sb-tile gold">
          <div className="l">개원 동시 협약</div>
          <div className="n">3<span>건</span></div>
          <div className="d">삼성중공업·은성의료재단·KIMS (2025.12.30)</div>
        </div>
        <div className="sb-tile">
          <div className="l">주요 협력 산업체</div>
          <div className="n">7<span>개사</span></div>
          <div className="d">HD현대중공업·한화오션·삼성중공업·HMM·KAI·삼성SDI·한화에어로스페이스</div>
        </div>
        <div className="sb-tile">
          <div className="l">프로젝트 연구센터</div>
          <div className="n">3<span>개</span></div>
          <div className="d">조선·구조 / 헬스케어 / 소재·재료</div>
        </div>
        <div className="sb-tile">
          <div className="l">AI 컴퓨팅 인프라</div>
          <div className="n">303<span>+장</span></div>
          <div className="d">GPU 현재 보유 (목표 800장)</div>
        </div>
      </div>

      <div style={{ position: 'relative', height: '260px', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 6px 22px rgba(15,31,69,.12)' }}>
        <img src="/assets/img/handshake.jpg" alt="개원 동시 협약 3건 — 2025.12.30" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }} />
        <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(15,31,69,.82) 0%,rgba(20,63,144,.65) 50%,rgba(0,91,170,.35) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '32px 38px', color: '#fff' }}>
          <div style={{ fontSize: '11px', letterSpacing: '.12em', color: '#BFDBFE', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800' }}>FOUNDING MOUs · 2025.12.30 · IT BUILDING OPENING</div>
          <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '26px', fontWeight: '800', letterSpacing: '-.02em', lineHeight: '1.25', maxWidth: '680px' }}>개원 동시 협약 3건<br /><span style={{ color: '#BFDBFE', fontStyle: 'italic' }}>— 양 기관 공동 예산으로 교내 협력 센터 설치</span></div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.85)', marginTop: '10px', maxWidth: '640px' }}>삼성중공업 AI 연구협력센터 · 은성의료재단 AX 헬스케어센터 · 한국재료연구원 PNU 연구협력센터 — 산학 협력의 새로운 기준</div>
        </div>
      </div>

      <div className="card" id="founding">
        <div className="card-header">
          <div className="card-title"><i className="fas fa-star" style={{ color: 'var(--gold)' }}></i> 개원 동시 협약 3건 <span className="sub">FOUNDING MOUs · 2025.12.30</span></div>
        </div>
        <div className="card-body">
          <p style={{ fontSize: '13.5px', color: 'var(--body)', lineHeight: '1.75', marginBottom: '18px' }}>2025년 12월 30일 부산대학교 IT관 개원식에서 우리 연구원은 산업·의료·소재 분야 대표 기관 3곳과 동시에 협약을 체결했습니다. 단순한 MOU 단계를 넘어, <strong>양 기관 공동 예산으로 교내에 협력 센터를 설치</strong>하는 모델로서, 산학 협력의 새로운 기준을 제시합니다.</p>
          <div className="tier1-grid">
            <div className="t1-card">
              <div style={{ height: '130px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/img/marine-ai.jpg" alt="조선·해양 산업" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(20,40,160,.55),transparent 60%)' }}></div>
              </div>
              <div className="t1-head samsung">
                <div className="logo">S</div>
                <div className="ribbon">FOUNDING #01</div>
              </div>
              <div className="t1-body">
                <div className="t1-name">삼성중공업<small>SAMSUNG HEAVY INDUSTRIES</small></div>
                <div className="t1-center samsung-c">
                  <div className="t1-center-tag">교내 협력 센터</div>
                  <div className="t1-center-name">AI 연구협력센터</div>
                </div>
                <p className="t1-desc">조선·해양 산업의 디지털 전환을 위한 공동 연구. 양 기관 공동 예산. 스마트 조선공학·자율 운항·해양 데이터 분석.</p>
                <div className="t1-meta">
                  <div className="t1-meta-row"><span className="k">분야</span><span>해양·물류 AI</span></div>
                  <div className="t1-meta-row"><span className="k">규모</span><span>양 기관 공동 예산 (비공개)</span></div>
                  <div className="t1-meta-row"><span className="k">담당</span><span><Link to="/research#marine" style={metaLink}>해양 AI 그룹 →</Link></span></div>
                </div>
              </div>
            </div>
            <div className="t1-card">
              <div style={{ height: '130px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/img/medical-ai.jpg" alt="의료·바이오 AI" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(0,166,81,.55),transparent 60%)' }}></div>
              </div>
              <div className="t1-head eunsung">
                <div className="logo">은</div>
                <div className="ribbon">FOUNDING #02</div>
              </div>
              <div className="t1-body">
                <div className="t1-name">은성의료재단 (좋은병원들)<small>EUNSUNG MEDICAL FOUNDATION</small></div>
                <div className="t1-center eunsung-c">
                  <div className="t1-center-tag">교내 협력 센터</div>
                  <div className="t1-center-name">AX 헬스케어센터</div>
                </div>
                <p className="t1-desc">의료 AI · 신약개발 · 에이지테크. 양 기관 공동 설치 운영. 임상 데이터 활용 신약 후보 탐색, 고령자 케어 AI.</p>
                <div className="t1-meta">
                  <div className="t1-meta-row"><span className="k">분야</span><span>의료·바이오 AI</span></div>
                  <div className="t1-meta-row"><span className="k">규모</span><span>공동 설치 · 공동 운영</span></div>
                  <div className="t1-meta-row"><span className="k">담당</span><span><Link to="/research#medical" style={metaLink}>의료 AI 그룹 →</Link></span></div>
                </div>
              </div>
            </div>
            <div className="t1-card">
              <div style={{ height: '130px', overflow: 'hidden', position: 'relative' }}>
                <img src="/assets/img/lab-research.jpg" alt="소재·제조 AI 연구실" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(20,63,144,.55),transparent 60%)' }}></div>
              </div>
              <div className="t1-head kims">
                <div className="logo">K</div>
                <div className="ribbon">FOUNDING #03</div>
              </div>
              <div className="t1-body">
                <div className="t1-name">한국재료연구원 (KIMS)<small>KOREA INSTITUTE OF MATERIALS SCIENCE</small></div>
                <div className="t1-center kims-c">
                  <div className="t1-center-tag">교내 협력 센터</div>
                  <div className="t1-center-name">PNU 연구협력센터</div>
                </div>
                <p className="t1-desc">초거대 첨단 제조 AI · 신소재 발굴 자동화. 한국재료연구원의 소재 빅데이터와 부산대의 AI 모델링을 결합.</p>
                <div className="t1-meta">
                  <div className="t1-meta-row"><span className="k">분야</span><span>소재·제조 AI</span></div>
                  <div className="t1-meta-row"><span className="k">규모</span><span>15억 플랫폼 사업</span></div>
                  <div className="t1-meta-row"><span className="k">담당</span><span><Link to="/research#material" style={metaLink}>소재 AI 그룹 →</Link></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="google-banner">
        <div className="google-icon">G</div>
        <div style={{ flex: '1' }}>
          <h4>Google for Education — 국내 최초 협약</h4>
          <div className="meta">2026.05.13 · 부산대학교 개교 80주년 · Google for Education</div>
          <p>부산대학교는 2026년 5월 13일, 개교 80주년을 맞아 <strong>Google for Education과 국내 대학 최초의 협약</strong>을 체결했습니다. 본 협약을 통해 AI 교육 도구·Workspace 기반 학습 환경·AI 리터러시 교육 콘텐츠가 도입되며, 우리 연구원은 AI 응용·교육 콘텐츠 측면에서 협력에 참여합니다.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div style={{ position: 'relative', height: '170px', borderRadius: '14px', overflow: 'hidden' }}>
          <img src="/assets/img/university.jpg" alt="글로벌 학술 협력" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(15,31,69,.78),rgba(0,91,170,.4))', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '22px', color: '#fff' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.1em', color: '#BFDBFE', textTransform: 'uppercase', marginBottom: '6px', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800' }}>GLOBAL ACADEMIC COOPERATION</div>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '17px', fontWeight: '800', lineHeight: '1.3' }}>ETRI · KERI · KISTI 등<br />정부 출연연 및 글로벌 기관 협력</div>
          </div>
        </div>
        <div style={{ position: 'relative', height: '170px', borderRadius: '14px', overflow: 'hidden' }}>
          <img src="/assets/img/meeting.jpg" alt="정부·공공 협력" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(0,166,81,.7),rgba(4,120,87,.55))', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '22px', color: '#fff' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.1em', color: '#fff', textTransform: 'uppercase', marginBottom: '6px', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800', opacity: '.85' }}>GOVERNMENT · PUBLIC INSTITUTIONS</div>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '17px', fontWeight: '800', lineHeight: '1.3' }}>ETRI · KERI · KISTI<br />그리고 정부 출연 연구원</div>
          </div>
        </div>
      </div>

      <div className="card" id="global">
        <div className="card-header">
          <div className="card-title"><i className="fas fa-globe" style={{ color: 'var(--blue)' }}></i> 글로벌 학술 협력 <span className="sub">GLOBAL ACADEMIC</span></div>
        </div>
        <div className="card-body">
          <div className="partner-grid">
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo logo-stanford">St</div>
                <div>
                  <div className="partner-name">Stanford University</div>
                  <div className="partner-tag">USA · AI Lab</div>
                </div>
              </div>
              <div className="partner-desc">Stanford AI Lab과 <strong>AI 융합 공동 연구</strong> 협력 중.</div>
              <div className="partner-meta"><i className="fas fa-flask"></i> 컴퓨터 비전 · LLM</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo logo-mit">M</div>
                <div>
                  <div className="partner-name">MIT</div>
                  <div className="partner-tag">USA · CSAIL</div>
                </div>
              </div>
              <div className="partner-desc">CSAIL과 공동 워크숍 운영. 양자 AI · 로보틱스 · 의료 AI 분야 인력 교류.</div>
              <div className="partner-meta"><i className="fas fa-flask"></i> 양자 AI · 로보틱스</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo logo-cmu">C</div>
                <div>
                  <div className="partner-name">Carnegie Mellon (CMU)</div>
                  <div className="partner-tag">USA · RI</div>
                </div>
              </div>
              <div className="partner-desc">로보틱스 인스티튜트와 자율주행·머신러닝 공동 연구. 박사후 인력 교류.</div>
              <div className="partner-meta"><i className="fas fa-flask"></i> 로보틱스 · ML</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo logo-utokyo">T</div>
                <div>
                  <div className="partner-name">도쿄대학 (東京大学)</div>
                  <div className="partner-tag">JAPAN · 工学部</div>
                </div>
              </div>
              <div className="partner-desc">한·일 AI 융합 공동 워크숍 (年 2회). 소재 AI 분야 데이터 공유.</div>
              <div className="partner-meta"><i className="fas fa-flask"></i> 소재 AI · 양자</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo logo-google">G</div>
                <div>
                  <div className="partner-name">Google for Education</div>
                  <div className="partner-tag">2026.05.13 · 국내 최초</div>
                </div>
              </div>
              <div className="partner-desc">부산대 80주년 협약. AI 교육 도구·Workspace·AI 리터러시 교육 콘텐츠 도입.</div>
              <div className="partner-meta"><i className="fas fa-graduation-cap"></i> AI 교육 · 국내 최초</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo" style={{ background: 'linear-gradient(135deg, #003366, #00509E)' }}>N</div>
                <div>
                  <div className="partner-name">NUS (싱가포르 국립대)</div>
                  <div className="partner-tag">SINGAPORE</div>
                </div>
              </div>
              <div className="partner-desc">아세안 AI 교육 협력. 의료·헬스케어 AI 공동 연구 진행.</div>
              <div className="partner-meta"><i className="fas fa-flask"></i> 의료 AI · 아세안</div>
            </a>
          </div>
        </div>
      </div>

      <div className="card" id="gov">
        <div className="card-header">
          <div className="card-title"><i className="fas fa-landmark" style={{ color: 'var(--green)' }}></i> 정부 출연 연구원 · 공공 기관 <span className="sub">GOVERNMENT &amp; PUBLIC</span></div>
        </div>
        <div className="card-body">
          <div className="partner-grid">
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo logo-etri">E</div>
                <div>
                  <div className="partner-name">ETRI (한국전자통신연구원)</div>
                  <div className="partner-tag">대전 · 정부 출연연</div>
                </div>
              </div>
              <div className="partner-desc">AI 응용 기술 협력. <strong>한국어 NLP 모델 공동 연구</strong> · 양자 통신 기술 협력.</div>
              <div className="partner-meta"><i className="fas fa-landmark"></i> NLP · 양자 통신</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo logo-keri">K</div>
                <div>
                  <div className="partner-name">한국전기연구원 (KERI)</div>
                  <div className="partner-tag">창원 · 에너지</div>
                </div>
              </div>
              <div className="partner-desc">차세대 에너지 AI 공동 연구. <strong>AI 기반 스마트 그리드</strong> 및 신재생 에너지 최적화.</div>
              <div className="partner-meta"><i className="fas fa-bolt"></i> 에너지 AI</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo logo-kisti">K</div>
                <div>
                  <div className="partner-name">KISTI (한국과학기술정보연)</div>
                  <div className="partner-tag">대전 · 슈퍼컴퓨팅</div>
                </div>
              </div>
              <div className="partner-desc">슈퍼컴퓨터 6호기 활용 · 대규모 AI 학습 인프라 공유.</div>
              <div className="partner-meta"><i className="fas fa-landmark"></i> HPC · GPU</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo" style={{ background: 'linear-gradient(135deg, #143F90, #7a0014)' }}>B</div>
                <div>
                  <div className="partner-name">부산광역시</div>
                  <div className="partner-tag">광역 자치단체</div>
                </div>
              </div>
              <div className="partner-desc">동남권 자율주행 실증 · 스마트 항만 · 2026 부산 AI 서밋 공동 주관.</div>
              <div className="partner-meta"><i className="fas fa-landmark"></i> 광역 협력</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo" style={{ background: 'linear-gradient(135deg, var(--blue), #1E3A5F)' }}>B</div>
                <div>
                  <div className="partner-name">부산항만공사 (BPA)</div>
                  <div className="partner-tag">공공기관</div>
                </div>
              </div>
              <div className="partner-desc">스마트 항만 디지털 트윈 공동 연구. 컨테이너 흐름 예측·하역 최적화.</div>
              <div className="partner-meta"><i className="fas fa-ship"></i> 스마트 항만</div>
            </a>
            <a href="#" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo" style={{ background: 'linear-gradient(135deg, var(--juhong), #7a0014)' }}>K</div>
                <div>
                  <div className="partner-name">과학기술정보통신부</div>
                  <div className="partner-tag">중앙 부처 · 주관</div>
                </div>
              </div>
              <div className="partner-desc">양자 AI 47억 사업 · ITRC 정보보호 사업 등 다수 국가 R&amp;D 주관.</div>
              <div className="partner-meta"><i className="fas fa-landmark"></i> 중앙 부처</div>
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title"><i className="fas fa-table" style={{ color: 'var(--violet)' }}></i> 주요 협력 산업체 (요약) <span className="sub">INDUSTRY PARTNERS</span></div>
        </div>
        <div className="card-body" style={{ padding: '0' }}>
          <table className="partners-table">
            <thead>
              <tr><th>분류</th><th>기관명</th><th>분야</th><th>협력 형태</th><th>비고</th></tr>
            </thead>
            <tbody>
              <tr><td><span className="tag-pill mob">조선·해양</span></td><td className="pname">삼성중공업</td><td>스마트 조선·자율운항</td><td>교내 협력센터</td><td>2025.12.30 MOU</td></tr>
              <tr><td><span className="tag-pill mob">조선·해양</span></td><td className="pname">HD현대중공업</td><td>해양 데이터·로봇 용접</td><td>공동 연구</td><td>—</td></tr>
              <tr><td><span className="tag-pill med">의료</span></td><td className="pname">은성의료재단 (좋은병원들)</td><td>의료 AI · 에이지테크</td><td>교내 협력센터</td><td>2025.12.30 MOU</td></tr>
              <tr><td><span className="tag-pill med">의료</span></td><td className="pname">부산대학교병원</td><td>임상 데이터·AI 진단</td><td>공동 연구</td><td>—</td></tr>
              <tr><td><span className="tag-pill med">의료</span></td><td className="pname">동아ST</td><td>신약 후보 GNN</td><td>수탁 연구</td><td>—</td></tr>
              <tr><td><span className="tag-pill eng">소재</span></td><td className="pname">한국재료연구원 KIMS</td><td>초거대 제조 AI</td><td>교내 협력센터</td><td>2025.12.30 MOU</td></tr>
              <tr><td><span className="tag-pill eng">소재</span></td><td className="pname">POSCO</td><td>철강 공정 AI</td><td>공동 연구</td><td>—</td></tr>
              <tr><td><span className="tag-pill eng">소재</span></td><td className="pname">LG에너지솔루션</td><td>배터리 소재 스크리닝</td><td>수탁 연구</td><td>—</td></tr>
              <tr><td><span className="tag-pill mob">자동차</span></td><td className="pname">현대자동차</td><td>자율주행 V2X</td><td>공동 연구</td><td>울산 공장</td></tr>
              <tr><td><span className="tag-pill mob">자동차</span></td><td className="pname">르노코리아</td><td>스마트 모빌리티</td><td>공동 연구</td><td>부산 공장</td></tr>
              <tr><td><span className="tag-pill glo">IT</span></td><td className="pname">네이버 클로바</td><td>한국어 LLM</td><td>데이터·인력 교류</td><td>—</td></tr>
              <tr><td><span className="tag-pill glo">IT</span></td><td className="pname">카카오엔터프라이즈</td><td>엔터프라이즈 AI</td><td>인턴십 · 채용연계</td><td>—</td></tr>
              <tr><td><span className="tag-pill gov">공공</span></td><td className="pname">부산항만공사 BPA</td><td>스마트 항만</td><td>공동 연구</td><td>—</td></tr>
              <tr><td><span className="tag-pill gov">공공</span></td><td className="pname">HMM</td><td>해상 물류 최적화</td><td>수탁 연구</td><td>—</td></tr>
              <tr><td><span className="tag-pill gov">공공</span></td><td className="pname">한국전기연구원 KERI</td><td>스마트 그리드</td><td>공동 연구</td><td>창원</td></tr>
              <tr><td colSpan="5" style={{ textAlign: 'center', color: 'var(--muted)', fontStyle: 'italic', padding: '18px' }}>… 외 20여 산학 협력 기관 (전체 명단은 백서 참조)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
