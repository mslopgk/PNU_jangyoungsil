import { Link } from 'react-router-dom'

const hide = (e) => { e.currentTarget.style.display = 'none' }

export default function Dashboard() {
  return (
    <>
      <div className="page-header">
        <div className="ph-left">
          <div className="ph-tag">Jang Yeong-sil AI Convergence Research Institute <span className="axis-mini">A.U.R.A · U Pillar</span></div>
          <h1 className="ph-title">장영실 AI 융합연구원 <em>대시보드</em></h1>
          <div className="ph-desc">동남권 AI 융합연구 컨트롤타워 · 2025.12.30 개원 · 교학부총장 산하 전담기구 · IT관 (13,161㎡)</div>
        </div>
        <div className="ph-right">
          <Link to="/news?cat=publication" className="ph-btn ph-btn-outline"><i className="fas fa-file-alt"></i> 논문 검색</Link>
          <a href="#" className="ph-btn ph-btn-outline"><i className="fas fa-file-pdf"></i> 백서</a>
          <Link to="/partners#contact" className="ph-btn ph-btn-primary"><i className="fas fa-handshake"></i> 연구 협력 신청</Link>
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi-tile">
          <div className="kpi-icon ic-blue"><i className="fas fa-flask"></i></div>
          <div>
            <div className="kpi-num">3<sup>개</sup></div>
            <div className="kpi-lbl">프로젝트 연구센터</div>
            <div className="kpi-trend trend-new"><i className="fas fa-star"></i> 앵커기업 중심</div>
          </div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-icon ic-green"><i className="fas fa-handshake"></i></div>
          <div>
            <div className="kpi-num">3<sup>건</sup></div>
            <div className="kpi-lbl">개원 동시 산학 협약</div>
            <div className="kpi-trend trend-new"><i className="fas fa-star"></i> 2025.12.30</div>
          </div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-icon ic-amber"><i className="fas fa-microchip"></i></div>
          <div>
            <div className="kpi-num">303<sup>+장</sup></div>
            <div className="kpi-lbl">GPU 현재 보유</div>
            <div className="kpi-trend trend-up"><i className="fas fa-arrow-trend-up"></i> 800장 확보 목표</div>
          </div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-icon ic-violet"><i className="fas fa-building"></i></div>
          <div>
            <div className="kpi-num">10,067<sup>㎡</sup></div>
            <div className="kpi-lbl">AI Innovation Hub Space</div>
            <div className="kpi-trend trend-new"><i className="fas fa-star"></i> 5개 캠퍼스 공간</div>
          </div>
        </div>
        <div className="kpi-tile">
          <div className="kpi-icon ic-rose"><i className="fas fa-graduation-cap"></i></div>
          <div>
            <div className="kpi-num">80<sup>명</sup></div>
            <div className="kpi-lbl">AX 프로젝트 석사 배출 목표</div>
            <div className="kpi-trend trend-new"><i className="fas fa-star"></i> 5년 KPI</div>
          </div>
        </div>
      </div>

      <div className="visual-panel">
        <img src="/assets/img/it-building.jpg" alt="IT관" className="vp-img" onError={hide} />
        <div className="vp-grad"></div>
        <div className="vp-bg-grid"></div>
        <div className="vp-glow"></div>
        <div className="vp-content">
          <div className="vp-main">
            <div className="vp-badge"><span className="vp-dot"></span> 동남권 지·산·학·연 일체형 거점 · 2025.12.30 출범</div>
            <h2 className="vp-title">동남권 AI 융합연구<br /><em>컨트롤타워</em></h2>
            <p className="vp-desc">장영실 AI 융합연구원은 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 프로젝트 연구센터를 중심으로 앵커기업과 함께 AI 기반 융합연구를 선도합니다. GPU 303장 이상의 PNU-AXIS 인프라와 10,067㎡ AI Innovation Hub Space로 동남권 산업 혁신을 지원합니다.</p>
            <div className="vp-tags">
              <span className="vp-tag">🚢 조선·구조 AI (삼성중공업)</span>
              <span className="vp-tag">⚕️ 헬스케어 AI (은성의료재단)</span>
              <span className="vp-tag">🏭 소재·재료 AI (KIMS)</span>
              <span className="vp-tag">🖥️ PNU-AXIS GPU 303+장</span>
            </div>
          </div>
          <div className="vp-stats">
            <div className="vp-stat-item">
              <div className="vp-stat-icon"><i className="fas fa-microchip"></i></div>
              <div>
                <div className="vp-stat-num">303+ GPU</div>
                <div className="vp-stat-l">PNU-AXIS 현재 보유 (목표 800장)</div>
              </div>
            </div>
            <div className="vp-stat-item">
              <div className="vp-stat-icon"><i className="fas fa-building"></i></div>
              <div>
                <div className="vp-stat-num">10,067㎡</div>
                <div className="vp-stat-l">AI Innovation Hub Space</div>
              </div>
            </div>
            <div className="vp-stat-item">
              <div className="vp-stat-icon"><i className="fas fa-industry"></i></div>
              <div>
                <div className="vp-stat-num">개원 협약 3건</div>
                <div className="vp-stat-l">삼성중공업·은성의료재단·KIMS</div>
              </div>
            </div>
            <div className="vp-stat-item">
              <div className="vp-stat-icon"><i className="fas fa-graduation-cap"></i></div>
              <div>
                <div className="vp-stat-num">AX 프로젝트 석사</div>
                <div className="vp-stat-l">산학 공동 지도교수제 운영</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><i className="fas fa-compass" style={{ color: 'var(--gold)' }}></i> ACTS 비전 체계 (Vision 2030)</div>
            <Link to="/about#vision" className="card-more">상세 보기 <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="card-body">
            <div className="acts-detail-grid">
              <div className="acts-cell">
                <div className="ac-letter">A</div>
                <div className="ac-name">Acceleration</div>
                <div className="ac-en">산업화 가속</div>
                <div className="ac-desc">AI 산업화 허브로서 연구 성과를 산업 현장으로 직접 이전합니다.</div>
              </div>
              <div className="acts-cell green">
                <div className="ac-letter">C</div>
                <div className="ac-name">Core</div>
                <div className="ac-en">기초과학 강화</div>
                <div className="ac-desc">AI 핵심기술 개발 및 양자·신경과학 등 기초 강화.</div>
              </div>
              <div className="acts-cell amber">
                <div className="ac-letter">T</div>
                <div className="ac-name">Transformation</div>
                <div className="ac-en">산업 혁신</div>
                <div className="ac-desc">해양·제조·의료·에너지 국가 전략산업의 AI 전환.</div>
              </div>
              <div className="acts-cell violet">
                <div className="ac-letter">S</div>
                <div className="ac-name">Superiority</div>
                <div className="ac-en">경쟁 우위</div>
                <div className="ac-desc">차세대 주권기술 개발 · 국가 경쟁우위 확보.</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="dir-card">
            <div className="dir-avatar">院</div>
            <div className="dir-content">
              <div className="dir-name">초대 원장 <small>Founding Director</small></div>
              <div className="dir-position">장영실AI융합연구원 · 2025.12.30 출범</div>
              <div className="dir-quote">"장영실 선생이 노비 출신에서 조선 최고 과학자로 성장했듯, 우리 연구원도 출신과 무관하게 인재가 모이는 개방형 플랫폼이 되어 AI 융합과학의 주권을 선도하겠습니다."</div>
              <div className="dir-meta">2025.12.30 · 개원사 中</div>
            </div>
          </div>
        </div>
      </div>

      <div className="heritage-card" style={{ marginBottom: '20px' }}>
        <div className="heritage-header">
          <h3><span>蔣英實</span> 헤리티지 매핑 — <em>15세기 발명품이 21세기 AI가 되다</em></h3>
          <Link to="/heritage" className="heritage-more">더보기 →</Link>
        </div>
        <div className="heritage-grid">
          <div className="h-cell past h-arrow">
            <div className="h-mark"><div className="h-mark-circ">壹</div><div className="h-mark-tag">1433 · 過去</div></div>
            <div className="h-icon">🌌</div>
            <div className="h-name">혼천의 (渾天儀)</div>
            <div className="h-desc">한국 최초 자동 천구의. 우주의 운행을 한 자리에서 관측.</div>
          </div>
          <div className="h-cell">
            <div className="h-mark"><div className="h-mark-circ">A</div><div className="h-mark-tag">2025 · 現在</div></div>
            <div className="h-icon">🚢</div>
            <div className="h-name">조선·구조 AI센터</div>
            <div className="h-desc">AI 구조 최적화 알고리즘 개발 · 앵커기업: 삼성중공업</div>
          </div>

          <div className="h-cell past h-arrow">
            <div className="h-mark"><div className="h-mark-circ">貳</div><div className="h-mark-tag">1441 · 過去</div></div>
            <div className="h-icon">💧</div>
            <div className="h-name">측우기 · 수표 (測雨器·水標)</div>
            <div className="h-desc">세계 최초 우량계 · 수위계. 농업용 수자원의 데이터 표준화.</div>
          </div>
          <div className="h-cell">
            <div className="h-mark"><div className="h-mark-circ">B</div><div className="h-mark-tag">2025 · 現在</div></div>
            <div className="h-icon">⚕️</div>
            <div className="h-name">헬스케어 AI센터</div>
            <div className="h-desc">AI 솔루션 과제 발굴 · 헬스케어 AX 특화 · 앵커기업: 은성의료재단</div>
          </div>

          <div className="h-cell past h-arrow">
            <div className="h-mark"><div className="h-mark-circ">參</div><div className="h-mark-tag">1434 · 過去</div></div>
            <div className="h-icon">⏰</div>
            <div className="h-name">자격루 (自擊漏)</div>
            <div className="h-desc">한국 최초 자동 시계. 생명의 시간성을 인공 시스템에.</div>
          </div>
          <div className="h-cell">
            <div className="h-mark"><div className="h-mark-circ">C</div><div className="h-mark-tag">2025 · 現在</div></div>
            <div className="h-icon">🏭</div>
            <div className="h-name">소재·재료 AI센터</div>
            <div className="h-desc">RISE 산학공동연구 추진 · 소재 분야 AX 특화 · 앵커기관: 한국재료연구원</div>
          </div>

          <div className="h-cell past">
            <div className="h-mark"><div className="h-mark-circ">肆</div><div className="h-mark-tag">1434 · 過去</div></div>
            <div className="h-icon">🔨</div>
            <div className="h-name">갑인자 (甲寅字)</div>
            <div className="h-desc">개량 금속 활자. 지식의 대량 생산·확산을 가능케 한 소재.</div>
          </div>
          <div className="h-cell">
            <div className="h-mark"><div className="h-mark-circ">D</div><div className="h-mark-tag">2025 → 2030</div></div>
            <div className="h-icon">🌐</div>
            <div className="h-name">PNU AI Context · E&amp;E Center</div>
            <div className="h-desc">Sovereign AI Ontology 연구 · AI 교육·윤리 모듈 (전략 특화 센터 확장 계획)</div>
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><i className="fas fa-microscope" style={{ color: 'var(--blue)' }}></i> 3개 프로젝트 연구센터 (Visual)</div>
            <Link to="/research" className="card-more">상세 보기 <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="card-body" style={{ padding: '14px' }}>
            <div className="research-bento">
              <div className="rb-card rb-feature">
                <img src="/assets/img/marine-ai.jpg" alt="조선·구조 AI센터" className="rb-img" onError={hide} />
                <div className="rb-inner">
                  <div className="rb-tag"><i className="fas fa-star"></i> 앵커기업: 삼성중공업</div>
                  <div className="rb-title">조선·구조 AI센터</div>
                  <div className="rb-desc">AI 구조 최적화 알고리즘 개발 · 조선 특화 교과목 5개 개설 · 취업역량 강화 세미나·컨퍼런스 4회 · 삼성중공업 취업 연계 트랙 운영</div>
                  <div className="rb-stats">
                    <div className="rb-stat"><div className="n">5<span style={{ fontSize: '14px' }}>개</span></div><div className="l">특화 교과목</div></div>
                    <div className="rb-stat"><div className="n">4<span style={{ fontSize: '14px' }}>회</span></div><div className="l">세미나·컨퍼런스</div></div>
                  </div>
                </div>
              </div>
              <div className="rb-card v3">
                <img src="/assets/img/medical-ai.jpg" alt="헬스케어 AI센터" className="rb-img" onError={hide} />
                <div className="rb-inner">
                  <div className="rb-tag std">⚕️ 앵커기업: 은성의료재단</div>
                  <div className="rb-title">헬스케어 AI센터</div>
                  <div className="rb-desc">AI 솔루션 과제 발굴 협의 3회 · 양산캠퍼스 연계</div>
                </div>
              </div>
              <div className="rb-card v4">
                <img src="/assets/img/mfg-ai.jpg" alt="소재·재료 AI센터" className="rb-img" onError={hide} />
                <div className="rb-inner">
                  <div className="rb-tag std">🏭 앵커기관: 한국재료연구원</div>
                  <div className="rb-title">소재·재료 AI센터</div>
                  <div className="rb-desc">RISE 산학공동연구 과제 추진 · 소재 분야 AX 특화 과제 발굴</div>
                </div>
              </div>
              <div className="rb-card v2">
                <img src="/assets/img/quantum.jpg" alt="PNU-AXIS" className="rb-img" onError={hide} />
                <div className="rb-inner">
                  <div className="rb-tag std">🖥️ PNU-AXIS 인프라</div>
                  <div className="rb-title">AI 컴퓨팅 인프라</div>
                  <div className="rb-desc">현재 GPU 303장+ · 목표 800장·500억 · 데이터센터 2MW</div>
                </div>
              </div>
              <div className="rb-card v5">
                <img src="/assets/img/college-ai.jpg" alt="Hub Space" className="rb-img" onError={hide} />
                <div className="rb-inner">
                  <div className="rb-tag std">🏢 AI Innovation Hub Space</div>
                  <div className="rb-title">10,067㎡ 거점 공간</div>
                  <div className="rb-desc">5개 전용 공간 · 부산·양산캠퍼스</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title"><i className="fas fa-table-list" style={{ color: 'var(--violet)' }}></i> 주요 추진 과제</div>
            <Link to="/research" className="card-more">상세 보기 <i className="fas fa-arrow-right"></i></Link>
          </div>
          <table className="proj-table">
            <thead>
              <tr><th>과제·활동</th><th>센터</th><th>상태</th></tr>
            </thead>
            <tbody>
              <tr><td><div className="proj-name">AI 구조 최적화 알고리즘 개발</div></td><td><span className="proj-tag b">조선·구조</span></td><td><span className="proj-status run"><span className="status-dot green"></span>운영</span></td></tr>
              <tr><td><div className="proj-name">조선 특화 교과목 5개 개설</div></td><td><span className="proj-tag b">조선·구조</span></td><td><span className="proj-status run"><span className="status-dot green"></span>운영</span></td></tr>
              <tr><td><div className="proj-name">협력기업 재직자 AX 교육 (2회)</div></td><td><span className="proj-tag b">조선·구조</span></td><td><span className="proj-status run"><span className="status-dot green"></span>운영</span></td></tr>
              <tr><td><div className="proj-name">AI 솔루션 과제 발굴 협의 (3회)</div></td><td><span className="proj-tag m">헬스케어</span></td><td><span className="proj-status run"><span className="status-dot green"></span>운영</span></td></tr>
              <tr><td><div className="proj-name">헬스케어 AX 특화 과제 기반 확보</div></td><td><span className="proj-tag m">헬스케어</span></td><td><span className="proj-status run"><span className="status-dot green"></span>운영</span></td></tr>
              <tr><td><div className="proj-name">RISE 산학공동연구 과제 추진</div></td><td><span className="proj-tag s">소재·재료</span></td><td><span className="proj-status plan"><span className="status-dot amber"></span>준비</span></td></tr>
              <tr><td><div className="proj-name">소재 분야 AX 특화 과제 발굴</div></td><td><span className="proj-tag s">소재·재료</span></td><td><span className="proj-status plan"><span className="status-dot amber"></span>준비</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="card-header">
          <div className="card-title"><i className="fas fa-handshake" style={{ color: 'var(--green)' }}></i> 전략 협력 기관 (개원 동시 협약 3 + 글로벌 3)</div>
          <Link to="/partners" className="card-more">파트너십 전체 보기 <i className="fas fa-arrow-right"></i></Link>
        </div>
        <div className="card-body">
          <div className="partner-grid">
            <Link to="/partners#founding" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo samsung">S</div>
                <div>
                  <div className="partner-name">삼성중공업</div>
                  <div className="partner-tag">2025.12.30 · MOU</div>
                </div>
              </div>
              <div className="partner-desc"><strong>AI 연구협력센터</strong>를 교내 공동 설치. 조선·해양 AI 공동 연구 및 데이터 분석.</div>
              <div className="partner-meta"><i className="fas fa-flask"></i> 해양 AI · 양 기관 공동 예산</div>
            </Link>
            <Link to="/partners#founding" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo eunsung">은</div>
                <div>
                  <div className="partner-name">은성의료재단</div>
                  <div className="partner-tag">2025.12.30 · MOU</div>
                </div>
              </div>
              <div className="partner-desc"><strong>AX 헬스케어센터</strong>를 양 기관 공동 설치. 의료 AI · 에이지테크 공동 연구.</div>
              <div className="partner-meta"><i className="fas fa-flask"></i> 의료 AI · 에이지테크</div>
            </Link>
            <Link to="/partners#founding" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo kims">K</div>
                <div>
                  <div className="partner-name">한국재료연구원 (KIMS)</div>
                  <div className="partner-tag">2025.12.30 · MOU</div>
                </div>
              </div>
              <div className="partner-desc"><strong>PNU 연구협력센터</strong> 공동 설치. 초거대 첨단 제조 AI · 소재 AI 융합 연구.</div>
              <div className="partner-meta"><i className="fas fa-flask"></i> 소재·제조 AI</div>
            </Link>
            <Link to="/partners#global" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo stanford">St</div>
                <div>
                  <div className="partner-name">Stanford University</div>
                  <div className="partner-tag">연구 협력 · 진행중</div>
                </div>
              </div>
              <div className="partner-desc">스탠퍼드 AI Lab과 <strong>AI 융합 공동 연구</strong> 협력 중.</div>
              <div className="partner-meta"><i className="fas fa-globe"></i> 글로벌 · 학술 협력</div>
            </Link>
            <Link to="/partners#gov" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo etri">E</div>
                <div>
                  <div className="partner-name">ETRI</div>
                  <div className="partner-tag">한국전자통신연구원</div>
                </div>
              </div>
              <div className="partner-desc">AI 응용 기술 협력. <strong>한국어 NLP 모델 공동 연구</strong> · 양자 통신 기술 협력.</div>
              <div className="partner-meta"><i className="fas fa-landmark"></i> 정부 출연연</div>
            </Link>
            <Link to="/partners#gov" className="partner-c">
              <div className="partner-top">
                <div className="partner-logo keri">K</div>
                <div>
                  <div className="partner-name">한국전기연구원 (KERI)</div>
                  <div className="partner-tag">에너지 AI</div>
                </div>
              </div>
              <div className="partner-desc">차세대 에너지 AI 공동 연구. <strong>AI 기반 스마트 그리드</strong> 및 신재생 에너지 최적화.</div>
              <div className="partner-meta"><i className="fas fa-bolt"></i> 에너지 AI</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="it-showcase">
        <div className="it-grid">
          <div className="it-text">
            <div className="vp-badge"><i className="fas fa-building" style={{ color: 'var(--gold)' }}></i> IT 관 · 본부 거점</div>
            <div className="it-title">국립대학 BTL <em>최대 규모</em><br />IT관에서 시작됩니다</div>
            <div className="it-desc">2025년 12월 16일 준공된 부산대학교 IT관은 장영실 AI 융합연구원의 본부이자 부산대 AI 거점 사업의 물리적 거점입니다. 친환경 시설(100% LED · 태양광 · 지열 · BEMS).</div>
            <div className="it-stats-row">
              <div className="it-stat-card">
                <div className="it-stat-tag">총 사업비</div>
                <div className="it-stat-n">267<span>억원</span></div>
                <div className="it-stat-d">국립대 BTL 최대 규모</div>
              </div>
              <div className="it-stat-card">
                <div className="it-stat-tag">연면적</div>
                <div className="it-stat-n">13,161<span>㎡</span></div>
                <div className="it-stat-d">지하 1층 · 지상 10층</div>
              </div>
              <div className="it-stat-card">
                <div className="it-stat-tag">준공</div>
                <div className="it-stat-n">2025<span>.12.16</span></div>
                <div className="it-stat-d">개원식 12.30</div>
              </div>
              <div className="it-stat-card">
                <div className="it-stat-tag">친환경</div>
                <div className="it-stat-n">LED <span style={{ fontSize: '11px' }}>+ 태양광</span></div>
                <div className="it-stat-d">100% · BEMS 적용</div>
              </div>
            </div>
          </div>
          <div className="it-image">
            <img src="/assets/img/it-building-2.jpg" alt="IT building" onError={hide} />
          </div>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-header">
            <div className="card-title"><i className="fas fa-user-tie" style={{ color: 'var(--blue)' }}></i> 핵심 연구원 (대표)</div>
            <Link to="/about#org" className="card-more">조직 전체 보기 <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="card-body">
            <div className="fac-mini-grid">
              <div className="fac-mini">
                <div className="fac-mini-avatar">👨‍🏫</div>
                <div>
                  <div className="fac-mini-name">초대 원장</div>
                  <div className="fac-mini-area">연구원장</div>
                  <div className="fac-mini-lab">융합 AI 연구실</div>
                </div>
              </div>
              <div className="fac-mini">
                <div className="fac-mini-avatar">👨‍🔬</div>
                <div>
                  <div className="fac-mini-name">옥종목 교수</div>
                  <div className="fac-mini-area">양자 AI · 물리학과</div>
                  <div className="fac-mini-lab">47억 사업 PI</div>
                </div>
              </div>
              <div className="fac-mini">
                <div className="fac-mini-avatar">👨‍💻</div>
                <div>
                  <div className="fac-mini-name">김호원 교수</div>
                  <div className="fac-mini-area">Physical AI 보안</div>
                  <div className="fac-mini-lab">S3Lab · ITRC</div>
                </div>
              </div>
              <div className="fac-mini">
                <div className="fac-mini-avatar">👩‍🔬</div>
                <div>
                  <div className="fac-mini-name">권선영 교수</div>
                  <div className="fac-mini-area">신약 AI · GNN</div>
                  <div className="fac-mini-lab">AI Bio Lab</div>
                </div>
              </div>
              <div className="fac-mini">
                <div className="fac-mini-avatar">👨‍🏫</div>
                <div>
                  <div className="fac-mini-name">전상률 교수</div>
                  <div className="fac-mini-area">CV · 생성형 AI</div>
                  <div className="fac-mini-lab">PNUCVLAB</div>
                </div>
              </div>
              <div className="fac-mini">
                <div className="fac-mini-avatar">👨‍🎓</div>
                <div>
                  <div className="fac-mini-name">류광렬 교수</div>
                  <div className="fac-mini-area">제조 AI · DS</div>
                  <div className="fac-mini-lab">DS 대학원장</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title"><i className="fas fa-bell" style={{ color: 'var(--amber)' }}></i> 알림</div>
            <Link to="/news" className="card-more">전체 <i className="fas fa-arrow-right"></i></Link>
          </div>
          <div className="card-body">
            <div className="notice-list">
              <div className="nl-item">
                <div className="nl-icon green"><i className="fas fa-user-plus"></i></div>
                <div className="nl-body">
                  <div className="nl-title">박사후연구원 채용 (2명)<span className="nl-tag">채용</span></div>
                  <div className="nl-date">2026.05.25 · 마감 6.30</div>
                </div>
              </div>
              <div className="nl-item">
                <div className="nl-icon"><i className="fas fa-bullhorn"></i></div>
                <div className="nl-body">
                  <div className="nl-title">2026년 연구비 집행 지침 개정 안내</div>
                  <div className="nl-date">2026.05.22</div>
                </div>
              </div>
              <div className="nl-item">
                <div className="nl-icon violet"><i className="fas fa-calendar"></i></div>
                <div className="nl-body">
                  <div className="nl-title">AI 비전 세미나 — Stanford AI Lab 연사</div>
                  <div className="nl-date">2026.06.05 · IT관 세미나실 101</div>
                </div>
              </div>
              <div className="nl-item">
                <div className="nl-icon amber"><i className="fas fa-handshake"></i></div>
                <div className="nl-body">
                  <div className="nl-title">산학협력 기술 발표회</div>
                  <div className="nl-date">2026.06.12 · 대학본부 국제회의실</div>
                </div>
              </div>
              <div className="nl-item">
                <div className="nl-icon green"><i className="fas fa-trophy"></i></div>
                <div className="nl-body">
                  <div className="nl-title">CVPR 2026 박진선 교수팀 논문 채택</div>
                  <div className="nl-date">2026.05.18 · VLM 분야</div>
                </div>
              </div>
              <div className="nl-item">
                <div className="nl-icon"><i className="fas fa-file-alt"></i></div>
                <div className="nl-body">
                  <div className="nl-title">개원 5개월 성과 보고서 공개</div>
                  <div className="nl-date">2026.05.15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
