import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="page-header">
        <div className="ph-left">
          <div className="ph-tag">About the Institute <span className="axis-mini">A.U.R.A · U Pillar</span></div>
          <h1 className="ph-title">연구원 <em>소개</em></h1>
          <div className="ph-desc">비전 ACTS · 원장 인사말 · 조직 구성 — 동래에서 시작된 AI 융합과학의 새로운 여정</div>
        </div>
        <div className="ph-right">
          <a href="#" className="ph-btn ph-btn-outline"><i className="fas fa-file-pdf"></i> 백서 (PDF)</a>
          <Link to="/partners#contact" className="ph-btn ph-btn-primary"><i className="fas fa-handshake"></i> 협력 문의</Link>
        </div>
      </div>

      <div style={{ position: 'relative', height: '260px', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 6px 22px rgba(15,31,69,.12)' }}>
        <img src="/assets/img/it-building.jpg" alt="부산대학교 IT관 — 장영실 AI 융합연구원 본부" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(15,31,69,.78) 0%,rgba(15,31,69,.25) 55%,transparent 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '28px 30px', color: '#fff' }}>
          <div style={{ fontSize: '11px', letterSpacing: '.12em', color: '#BFDBFE', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800' }}>PNU IT BUILDING · HEADQUARTERS</div>
          <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '22px', fontWeight: '800', letterSpacing: '-.02em' }}>부산대학교 IT관 — 우리 연구원의 본부</div>
          <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.82)', marginTop: '4px' }}>연면적 13,161㎡ · 지상 10층 · 2025.12.30 준공</div>
        </div>
      </div>

      <div className="axis-info">
        <div className="axis-info-tag">A.U.R.A 2.0 · Pusan National University Core AXIS</div>
        <div className="axis-info-title"><em>U</em>nified Research — 부산대 4대 축 가운데 통합 연구의 거점</div>
        <p className="axis-info-desc">장영실 AI 융합연구원은 부산대학교 A.U.R.A 2.0 전략의 4대 축 (A·U·R·A) 중 <strong style={{ color: 'var(--gold)' }}>U (Unified Research)</strong> 축을 책임지는 핵심 기관입니다. 학내 단과대학·연구소·산학협력단의 AI 연구 역량을 통합·조정하여 단일 플랫폼으로 운영하며, 6대 핵심 분야에서 세계 수준의 융합 연구를 수행합니다.</p>
        <div className="aura-pillars">
          <div className="aura-pill"><div className="aura-letter">A</div><div className="aura-name">ARISE · 산학</div></div>
          <div className="aura-pill active"><div className="aura-letter">U</div><div className="aura-name">UNIFIED · 연구원</div></div>
          <div className="aura-pill"><div className="aura-letter">R</div><div className="aura-name">REGIONAL · 동남권</div></div>
          <div className="aura-pill"><div className="aura-letter">A</div><div className="aura-name">ACADEMIC · 교육</div></div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div style={{ position: 'relative', height: '180px', borderRadius: '14px', overflow: 'hidden' }}>
          <img src="/assets/img/university.jpg" alt="부산대학교 캠퍼스" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(0,91,170,.55),rgba(15,31,69,.7))', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '22px', color: '#fff' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.1em', color: '#BFDBFE', textTransform: 'uppercase', marginBottom: '6px', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800' }}>PUSAN NATIONAL UNIVERSITY · EST. 1946</div>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '17px', fontWeight: '800', lineHeight: '1.3' }}>부산대학교 80년 역사 위에<br />세운 새로운 이정표</div>
          </div>
        </div>
        <div style={{ position: 'relative', height: '180px', borderRadius: '14px', overflow: 'hidden' }}>
          <img src="/assets/img/tech-circuit.jpg" alt="AI 융합 연구" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(20,63,144,.55),rgba(11,26,62,.78))', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '22px', color: '#fff' }}>
            <div style={{ fontSize: '10px', letterSpacing: '.1em', color: '#BFDBFE', textTransform: 'uppercase', marginBottom: '6px', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800' }}>A.U.R.A 2.0 · UNIFIED RESEARCH</div>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '17px', fontWeight: '800', lineHeight: '1.3' }}>학과·단과대 경계를 넘는<br />개방형 AI 연구 플랫폼</div>
          </div>
        </div>
      </div>

      <div className="card" id="vision">
        <div className="card-header">
          <div className="card-title"><i className="fas fa-compass" style={{ color: 'var(--gold)' }}></i> ACTS 비전 체계 — Vision 2030</div>
          <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono',monospace" }}>A · C · T · S 4 축 완전 풀세트</span>
        </div>
        <div className="card-body">
          <div className="acts-deep">
            <div className="acts-deep-cell blue">
              <div className="adc-letter">A</div>
              <div className="adc-name">Acceleration</div>
              <div className="adc-han">加 速 · 산업화 가속</div>
              <div className="adc-en">INDUSTRIAL ACCELERATION</div>
              <div className="adc-desc">AI 산업화 허브로서 연구 성과를 산업 현장으로 직접 이전합니다. 동남권 주력산업의 디지털 전환을 가속화하는 응용·상용화 거점.</div>
              <ul className="adc-list">
                <li>개원 동시 산학 협약 3건 (2025.12.30)</li>
                <li>삼성중공업·은성의료재단·KIMS 협력 센터</li>
                <li>창업·스타트업 인큐베이팅</li>
                <li>ARISE 사업과 직접 연계</li>
              </ul>
            </div>
            <div className="acts-deep-cell green">
              <div className="adc-letter">C</div>
              <div className="adc-name">Core</div>
              <div className="adc-han">核 心 · 기초과학 강화</div>
              <div className="adc-en">FUNDAMENTAL CORE</div>
              <div className="adc-desc">AI 핵심기술 개발 및 AI 융합 연구 기초 강화. 단기 응용에 그치지 않고 차세대 패러다임을 여는 원천 연구 수행.</div>
              <ul className="adc-list">
                <li>조선·구조 AI 구조 최적화 알고리즘 개발</li>
                <li>헬스케어 AX 특화 과제 기반 확보</li>
                <li>소재 분야 AX 특화 과제 발굴</li>
                <li>RISE 산학공동연구 과제 추진</li>
              </ul>
            </div>
            <div className="acts-deep-cell amber">
              <div className="adc-letter">T</div>
              <div className="adc-name">Transformation</div>
              <div className="adc-han">變 革 · 산업 혁신</div>
              <div className="adc-en">INDUSTRIAL TRANSFORMATION</div>
              <div className="adc-desc">해양·제조·의료·에너지 등 국가 전략산업의 AI 전환 (AX, AI eXperience). 6대 분야 융합 연구로 산업 구조 자체를 혁신.</div>
              <ul className="adc-list">
                <li>삼성중공업 AI 연구협력센터</li>
                <li>은성의료재단 AX 헬스케어센터</li>
                <li>한국재료연구원 KIMS PNU 협력센터</li>
                <li>개원 동시 협약 3건 (2025.12.30)</li>
              </ul>
            </div>
            <div className="acts-deep-cell violet">
              <div className="adc-letter">S</div>
              <div className="adc-name">Superiority</div>
              <div className="adc-han">優 位 · 경쟁 우위</div>
              <div className="adc-en">STRATEGIC SUPERIORITY</div>
              <div className="adc-desc">차세대 주권기술 개발 · 국가 경쟁 우위 확보. AI 주권 시대에 한국이 보유해야 할 핵심 기술을 선제적으로 확보.</div>
              <ul className="adc-list">
                <li>PNU AI Context Center (Sovereign AI Ontology)</li>
                <li>PNU AI E&amp;E Center (교육·윤리·신뢰)</li>
                <li>ETRI · KERI 정부 출연연 협력</li>
                <li>부·울·경 지역 AI 컴퓨팅 허브</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card" id="director">
        <div className="card-header">
          <div className="card-title"><i className="fas fa-comment" style={{ color: 'var(--blue)' }}></i> 원장 인사말</div>
          <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono',monospace" }}>2025.12.30 · 개원사</span>
        </div>
        <div className="card-body">
          <div style={{ position: 'relative', height: '170px', borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            <img src="/assets/img/meeting.jpg" alt="개원식 — 산학 협력 기관 회의" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }} />
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg,rgba(15,31,69,.82) 0%,rgba(15,31,69,.4) 60%,rgba(15,31,69,.15) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '22px 26px', color: '#fff' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.1em', color: '#BFDBFE', textTransform: 'uppercase', marginBottom: '6px', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800' }}>2025.12.30 · IT관 개원식</div>
              <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '18px', fontWeight: '800', letterSpacing: '-.015em', maxWidth: '520px' }}>"동래에서 시작된 과학, AI 시대에 다시 깨어나다"</div>
            </div>
          </div>

          <div className="director-deep">
            <div className="dd-portrait">
              <div className="dd-avatar">👨‍🏫</div>
              <div className="dd-name">초대 원장<small>FOUNDING DIRECTOR</small></div>
              <div className="dd-role">초대 원장 · Founding Director</div>
              <div className="dd-affil">
                <strong>장영실AI융합연구원</strong>
                초대 원장 (Founding Director)<br />
                2025.12.30 출범 · 교학부총장 산하
              </div>
            </div>
            <div className="dd-msg">
              <h3>"동래에서 시작된 과학, AI 시대에 다시 깨어나다"</h3>
              <div className="sub">2025년 12월 30일 · 부산대학교 IT관 개원식 개회사</div>

              <p>존경하는 부산대학교 가족 여러분, 그리고 오늘 이 자리를 빛내주신 산학 협력 기관 관계자 여러분.</p>

              <p>오늘 우리는 부산대학교 80주년의 빛나는 역사 위에, <strong style={{ color: 'var(--blue)' }}>장영실 AI 융합연구원</strong>이라는 새로운 이정표를 세웁니다. 우리 연구원은 단순한 행정 조직이 아니라, <span className="dd-msg" style={{ background: 'linear-gradient(transparent 70%, rgba(20,63,144,.25) 70%)', fontWeight: '600', color: 'var(--ink)', padding: '0 3px' }}>AI 융합과학의 주권을 책임지는 개방형 플랫폼</span>으로 출범합니다.</p>

              <p>우리가 연구원의 이름으로 모신 <strong>장영실(蔣英實) 선생</strong>은 1390년대 동래(現 부산 동래구)에서 관노(官奴)의 신분으로 태어났습니다. 그러나 세종대왕은 출신을 따지지 않고 그의 재능을 알아보았고, 장영실은 조선 최고의 과학자가 되어 <strong>혼천의·자격루·측우기·갑인자</strong>라는 세계사적 발명을 남겼습니다.</p>

              <div className="quote-box">
                <div className="q">"장영실 선생이 노비 출신에서 조선 최고 과학자로 성장했듯, 우리 연구원도 출신과 무관하게 인재가 모이는 개방형 플랫폼이 되어 AI 융합과학의 주권을 선도하겠습니다."</div>
                <div className="q-meta">— 초대 원장, 2025.12.30 개원사 中</div>
              </div>

              <p>이 정신을 이어받아 우리 연구원은 다음 세 가지를 약속합니다.</p>

              <p><strong>첫째</strong>, 우리는 <strong style={{ color: 'var(--blue)' }}>개방형 융합 연구</strong>를 추구합니다. 학과의 경계, 단과대학의 경계, 나아가 학교의 경계를 넘어 누구든 우수한 아이디어로 합류할 수 있는 플랫폼을 운영합니다. 삼성중공업, 은성의료재단, 한국재료연구원과의 동시 협약은 그 첫 신호입니다.</p>

              <p><strong>둘째</strong>, 우리는 <strong style={{ color: 'var(--blue)' }}>기초와 산업의 양 날개</strong>로 비상합니다. 양자 AI 47억 사업으로 대표되는 원천 연구와, AX 헬스케어·스마트 조선·초거대 제조 AI로 대표되는 산업 응용 — 그 어느 쪽도 포기하지 않는 것이 ACTS 전략의 본질입니다.</p>

              <p><strong>셋째</strong>, 우리는 <strong style={{ color: 'var(--blue)' }}>동남권의 자존심</strong>으로 성장합니다. 수도권 중심의 AI 연구 지형에서, 부산·울산·경남 지역이 보유한 조선·자동차·소재 산업의 깊이를 AI와 결합하여 세계가 부산을 다시 보게 할 것입니다.</p>

              <p>오늘 준공되어 우리의 본부가 된 <strong>IT관 (연면적 13,161㎡·지상 10층)</strong>은 우리 연구원의 거점입니다. 이 공간은 단순한 건물이 아니라, 동래에서 출발한 한 노비 청년의 꿈이 600년을 건너 다시 시작되는 자리입니다.</p>

              <p>우리 연구원은 <strong>2030년 Vision ACTS</strong>를 향해 흔들림 없이 나아갈 것입니다. 산학 협력 기관 여러분, 정부 출연 연구원 여러분, 그리고 부산대학교의 학생·교수·직원 여러분께서 우리의 가장 든든한 동행이 되어 주시기를 부탁드립니다.</p>

              <p style={{ color: 'var(--gold)', fontFamily: "'Noto Serif KR',serif", fontStyle: 'italic', fontSize: '16px' }}>"Arise PNU, 같이 더 높게."</p>

              <div className="dd-sign">
                <i className="fas fa-pen-fancy" style={{ fontSize: '28px', color: 'var(--gold)' }}></i>
                <div className="dd-sign-text">초대 원장<small>장영실AI융합연구원 · 2025.12.30</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" id="org">
        <div className="card-header">
          <div className="card-title"><i className="fas fa-sitemap" style={{ color: 'var(--violet)' }}></i> 조직 구성</div>
          <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono',monospace" }}>교학부총장 산하 4개 전담기구 중 하나 · 2025.12.30 출범</span>
        </div>
        <div className="card-body">
          <div style={{ position: 'relative', height: '150px', borderRadius: '12px', overflow: 'hidden', marginBottom: '22px' }}>
            <img src="/assets/img/data-analytics.jpg" alt="6대 연구 그룹 · 데이터 융합" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }} />
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg,rgba(30,58,95,.85) 0%,rgba(30,58,95,.4) 70%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 26px', color: '#fff' }}>
              <div style={{ fontSize: '10px', letterSpacing: '.1em', color: '#BFDBFE', textTransform: 'uppercase', marginBottom: '5px', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800' }}>3 PROJECT RESEARCH CENTERS · 교학부총장 산하</div>
              <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '17px', fontWeight: '800', letterSpacing: '-.015em' }}>6대 연구 그룹 + Physical AI 보안 + 생성형·CV AI</div>
            </div>
          </div>

          <div className="org-tree">
            <div className="org-top">
              <div className="role">DIRECTOR · 초대 원장</div>
              <div className="name">초대 원장</div>
              <div className="sub">장영실AI융합연구원 · 2025.12.30</div>
            </div>
            <div className="org-mid">
              <div className="role">VICE DIRECTOR</div>
              <div className="name">부원장 · 운영기획</div>
            </div>
            <div className="org-groups">
              <div className="og-cell">
                <div className="og-icon">⚛️</div>
                <div className="og-name">양자 AI 그룹</div>
                <div className="og-lead">PI · 옥종목 교수</div>
                <div className="og-tag violet">47억</div>
              </div>
              <div className="og-cell">
                <div className="og-icon">🚢</div>
                <div className="og-name">해양·물류 AI 그룹</div>
                <div className="og-lead">앵커기업: 삼성중공업</div>
                <div className="og-tag">조선·구조</div>
              </div>
              <div className="og-cell">
                <div className="og-icon">⚕️</div>
                <div className="og-name">의료·바이오 AI 그룹</div>
                <div className="og-lead">앵커기업: 은성의료재단</div>
                <div className="og-tag green">헬스케어</div>
              </div>
              <div className="og-cell">
                <div className="og-icon">🏭</div>
                <div className="og-name">소재·제조 AI 그룹</div>
                <div className="og-lead">앵커기관: KIMS</div>
                <div className="og-tag amber">소재·재료</div>
              </div>
              <div className="og-cell">
                <div className="og-icon">🚗</div>
                <div className="og-name">모빌리티 AI 그룹</div>
                <div className="og-lead">동남권 클러스터</div>
                <div className="og-tag rose">추진 예정</div>
              </div>
              <div className="og-cell">
                <div className="og-icon">⚡</div>
                <div className="og-name">에너지 AI 그룹</div>
                <div className="og-lead">KERI 협력</div>
                <div className="og-tag teal">추진 예정</div>
              </div>
              <div className="og-cell">
                <div className="og-icon">🔒</div>
                <div className="og-name">Physical AI 보안</div>
                <div className="og-lead">김호원 교수 · S3Lab</div>
                <div className="og-tag">ITRC</div>
              </div>
              <div className="og-cell">
                <div className="og-icon">🎨</div>
                <div className="og-name">생성형·CV AI</div>
                <div className="og-lead">전상률 교수 · PNUCVLAB</div>
                <div className="og-tag">CVPR</div>
              </div>
            </div>
            <div className="org-support">
              <div className="og-cell">
                <div className="og-icon">🏛️</div>
                <div className="og-name">행정실 (Administration Office)</div>
                <div className="og-lead">예산·인사·시설·총무</div>
              </div>
              <div className="og-cell">
                <div className="og-icon">🤝</div>
                <div className="og-name">산학협력실 (Industry-Academia Office)</div>
                <div className="og-lead">MOU·기술이전·창업 인큐베이팅</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
