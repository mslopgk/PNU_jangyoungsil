import { Link } from 'react-router-dom'

const metaLink = { color: 'var(--blue)', fontWeight: '700' }

export default function Heritage() {
  return (
    <>
      <div className="page-header">
        <div className="ph-left">
          <div className="ph-tag">Heritage · 蔣英實 · Jang Yeong-sil</div>
          <h1 className="ph-title">장영실 <em>헤리티지</em></h1>
          <div className="ph-desc">15세기 동래의 노비 출신 과학자 · 21세기 AI 융합 연구의 정신적 뿌리</div>
        </div>
        <div className="ph-right">
          <a href="#" className="ph-btn ph-btn-outline"><i className="fas fa-book"></i> 인물 자료실</a>
          <Link to="/research" className="ph-btn ph-btn-primary"><i className="fas fa-microscope"></i> 6대 연구 보기</Link>
        </div>
      </div>

      <div className="hanji-hero">
        <div className="hh-tag">蔣 英 實 · 1390s—1442 · 조선 세종조</div>
        <h2 className="hh-title">동래 노비에서 조선 최고 과학자로,<br /><em>600년 후 다시 AI로 깨어나다</em></h2>
        <p className="hh-sub">우리 연구원의 이름은 단순한 기념이 아니라 <strong style={{ color: 'var(--juhong)' }}>정신적 헌장</strong>이다. 출신·신분·학과의 경계를 넘어 인재가 모이는 개방형 플랫폼 — 그것이 세종의 인재 등용과 닿아 있고, 4대 발명품의 융합적 사유와 닿아 있다.</p>
      </div>

      <div style={{ position: 'relative', height: '240px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px', border: '1px solid #D8D2C2' }}>
        <img src="/assets/img/korea-traditional.jpg" alt="조선의 전통 — 장영실의 시대" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'sepia(.22) saturate(1.05) brightness(.92)' }} />
        <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(26,22,18,.78) 0%,rgba(74,36,0,.35) 50%,transparent 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '28px 32px', color: '#FAF7EE' }}>
          <div style={{ fontFamily: "'Noto Serif KR',serif", fontStyle: 'italic', fontSize: '12.5px', color: '#C39B3A', letterSpacing: '.08em', marginBottom: '6px' }}>朝鮮 世宗朝 · 蔣英實 時代</div>
          <div style={{ fontFamily: "'Nanum Myeongjo',serif", fontSize: '24px', fontWeight: '900', letterSpacing: '-.02em', lineHeight: '1.25' }}>"신분이 아니라 재능을 보라"<br /><span style={{ color: '#C39B3A', fontStyle: 'italic' }}>不問貴賤 而問才能</span></div>
          <div style={{ fontSize: '12.5px', color: 'rgba(250,247,238,.78)', marginTop: '8px', fontFamily: "'Noto Serif KR',serif" }}>— 세종(世宗)의 인재관, 그리고 장영실의 600년</div>
        </div>
      </div>

      <div className="bio-card">
        <div className="bio-grid">
          <div className="bio-portrait">
            <div className="han-name">蔣英實</div>
            <div className="kor-name">장영실</div>
            <div className="years">c. 1390s — 1442 · CHOSŎN DYNASTY</div>
            <div className="key">
              <div className="key-row"><span className="k">출생</span><span>동래 (現 부산 동래구) · 관노 출신</span></div>
              <div className="key-row"><span className="k">시대</span><span>세종조 (재위 1418-1450)</span></div>
              <div className="key-row"><span className="k">직위</span><span>종3품 대호군 (大護軍)</span></div>
              <div className="key-row"><span className="k">대표</span><span>혼천의·자격루·측우기·갑인자</span></div>
              <div className="key-row"><span className="k">현대</span><span>IR52 장영실상 (1991~ 매주 시상)</span></div>
              <div className="key-row"><span className="k">연구원</span><span>2025.12.30 부산대 AI 연구원 헌정</span></div>
            </div>
          </div>
          <div className="bio-text">
            <h3>인물 — 蔣英實, 어떻게 노비가 종3품에 올랐나</h3>
            <div className="lead">"신분이 아니라 재능을 보라" — 세종의 인재관, 그리고 장영실의 600년</div>
            <p><strong>장영실(蔣英實)</strong>은 1390년대 동래현(現 부산광역시 동래구)에서 태어났다. 아버지는 원나라에서 귀화한 장성휘(蔣成暉)였고, 어머니는 동래현의 관기(官妓)였다. 조선 초기 신분제 아래에서 그는 <strong>동래현의 관노(官奴)</strong>로 성장했다.</p>
            <p>그러나 그는 어려서부터 <strong>제련·축성·기계 제작</strong>에 비범한 솜씨를 보였고, 그 명성이 한성에 알려져 태종 말년 무렵 궁중 기술자로 차출된다. 세종 즉위 후 본격적으로 두각을 나타내어, 1421년 명나라에 파견되어 천문 의기(儀器)를 학습하고 돌아왔다.</p>
            <p>1423년 세종은 신하들의 반대를 무릅쓰고 그를 <strong style={{ color: 'var(--juhong)' }}>상의원 별좌(尙衣院 別坐)</strong>로 면천(免賤)시켰다. "신분이 아니라 재능을 보라(不問貴賤 而問才能)"는 세종의 인재관이 빛난 순간이었다. 이후 그는 종3품 대호군에까지 올랐다.</p>
            <p>1433년 <strong>혼천의</strong>, 1434년 <strong>자격루·갑인자</strong>, 1441년 세계 최초의 <strong>측우기·수표</strong>를 잇따라 완성하며 조선 과학기술의 최전성기를 이끌었다. 그러나 1442년 임금이 탄 가마(輦)가 부서진 사건의 책임을 지고 곤장 80대를 맞은 뒤 역사에서 사라졌다.</p>
            <div className="timeline">
              <div className="timeline-row"><div className="year">1390s</div><div className="desc"><strong>출생</strong> · 동래 (現 부산 동래구) · 관노 신분</div></div>
              <div className="timeline-row"><div className="year">1421</div><div className="desc"><strong>명나라 파견</strong> · 천문 의기 학습</div></div>
              <div className="timeline-row"><div className="year">1423</div><div className="desc"><strong>면천(免賤)</strong> · 상의원 별좌 임명 (세종 인재관)</div></div>
              <div className="timeline-row"><div className="year">1433</div><div className="desc"><strong>혼천의 완성</strong> · 한국 최초 자동 천구의</div></div>
              <div className="timeline-row"><div className="year">1434</div><div className="desc"><strong>자격루·갑인자 완성</strong> · 자동 시계 + 개량 금속활자</div></div>
              <div className="timeline-row"><div className="year">1441</div><div className="desc"><strong>측우기·수표 완성</strong> · 세계 최초 우량계 (서구보다 200년 빠름)</div></div>
              <div className="timeline-row"><div className="year">1442</div><div className="desc"><strong>안여(安輿) 사건</strong> · 곤장 80대 · 이후 행적 미상</div></div>
              <div className="timeline-row"><div className="year">1991</div><div className="desc"><strong>IR52 장영실상</strong> 제정 · 한국 산업기술 최고의 영예</div></div>
              <div className="timeline-row"><div className="year">2025</div><div className="desc"><strong>부산대 장영실 AI 융합연구원 출범</strong> · 12.30 개원</div></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', height: '200px', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px', border: '1px solid #D8D2C2' }}>
        <img src="/assets/img/korea-architecture.jpg" alt="600년의 시간 — 동래에서 부산대학교까지" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'sepia(.18) saturate(1.05) brightness(.94)' }} />
        <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg,rgba(26,22,18,.82) 0%,rgba(74,36,0,.45) 55%,rgba(184,58,75,.25) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '24px 30px', color: '#FAF7EE' }}>
          <div style={{ fontFamily: "'Noto Serif KR',serif", fontStyle: 'italic', fontSize: '12px', color: '#C39B3A', letterSpacing: '.08em', marginBottom: '6px' }}>1390s — 2025 · 六百年</div>
          <div style={{ fontFamily: "'Nanum Myeongjo',serif", fontSize: '22px', fontWeight: '900', letterSpacing: '-.02em', lineHeight: '1.25', maxWidth: '560px' }}>동래의 한 청년에서 부산대학교 AI 융합연구원까지<br /><span style={{ color: '#C39B3A' }}>— 600년의 시간을 잇다</span></div>
        </div>
      </div>

      <div className="ir52">
        <div className="ir52-icon">🏆</div>
        <div>
          <h4>IR52 장영실상 — Industrial Research 52</h4>
          <p>1991년 매일경제·과학기술정보통신부가 공동 제정. 매주(年 52회) 한국 산업기술 신제품에 시상하는 산업기술계 최고 영예. <strong style={{ color: 'var(--muk)' }}>우리 연구원의 이름은 이 빛나는 전통을 학술 영역에서 잇는 새로운 시작입니다.</strong></p>
        </div>
      </div>

      <div className="inv-stack">
        <div className="inv-card">
          <div className="inv-head">
            <div className="inv-head-l">
              <div className="inv-num">壹</div>
              <div>
                <div className="inv-name">혼천의 <span>渾天儀</span></div>
                <div className="inv-year">1433 · 세종 15년 · 한국 최초 자동 천구의</div>
              </div>
            </div>
            <div className="inv-arrow">↔</div>
          </div>
          <div className="inv-body">
            <div className="inv-past">
              <div className="inv-side-tag">過 去 · 1433 · 渾天儀</div>
              <div className="inv-icon">🌌</div>
              <div className="inv-side-title">우주를 한 자리에 담다</div>
              <p className="inv-side-desc">혼천의는 천체의 운행을 하나의 기계 안에 압축한 자동 천구의(天球儀)다. 일월오성(日月五星)의 위치와 절기의 변화를 한 자리에서 관측할 수 있게 했다. <strong>거대한 자연 법칙을 작은 인공물 안으로 포섭한 사유</strong>의 정점.</p>
              <div className="inv-meta">제작: 1433 (세종 15년) · 위치: 경복궁 흠경각 · 의의: <strong>한국 최초의 자동 천체 관측 기기</strong></div>
            </div>
            <div className="inv-divider"></div>
            <div className="inv-future">
              <div className="inv-side-tag">現 在 · 2025 · AI 연구</div>
              <div className="inv-icon">🚢</div>
              <div className="inv-side-title">조선·구조 AI센터</div>
              <p className="inv-side-desc">자연 현상을 관측·분석하는 정신은 오늘날 AI 기반 구조 최적화 알고리즘 개발로 이어진다. 앵커기업 <strong>삼성중공업</strong>과 공동 운영. 조선 특화 교과목 5개 개설 · 취업역량 강화 세미나·컨퍼런스 4회 · 삼성중공업 취업 연계 트랙 운영.</p>
              <div className="inv-meta">앵커기업: <strong>삼성중공업</strong> · 개원 협약: 2025.12.30 · <Link to="/research#marine" style={metaLink}>상세 보기 →</Link></div>
            </div>
          </div>
        </div>

        <div className="inv-card">
          <div className="inv-head">
            <div className="inv-head-l">
              <div className="inv-num">貳</div>
              <div>
                <div className="inv-name">자격루 <span>自擊漏</span></div>
                <div className="inv-year">1434 · 세종 16년 · 한국 최초 자동 물시계</div>
              </div>
            </div>
            <div className="inv-arrow">↔</div>
          </div>
          <div className="inv-body">
            <div className="inv-past">
              <div className="inv-side-tag">過 去 · 1434 · 自擊漏</div>
              <div className="inv-icon">⏰</div>
              <div className="inv-side-title">스스로 치는 시계</div>
              <p className="inv-side-desc">자격루는 사람이 지키지 않아도 <strong>스스로 시각을 알리는 자동 물시계</strong>다. 물의 흐름이라는 자연 현상을 일정한 리듬으로 변환해, 인공 종소리·인형의 동작으로 출력했다. <strong>생명의 시간성을 인공 시스템 안에 옮긴 첫 번째 시도</strong>.</p>
              <div className="inv-meta">제작: 1434 (세종 16년) · 위치: 경복궁 보루각 · 의의: 표준시(標準時)의 사회적 보급</div>
            </div>
            <div className="inv-divider"></div>
            <div className="inv-future">
              <div className="inv-side-tag">現 在 · 2025 · AI 연구</div>
              <div className="inv-icon">⚕️</div>
              <div className="inv-side-title">헬스케어 AI센터</div>
              <p className="inv-side-desc">생명과 시간을 다루는 정신은 오늘날 헬스케어 AI 연구로 이어진다. 앵커기업 <strong>은성의료재단</strong>과 공동 운영(2025.12.30 공동 설치). AI 솔루션 과제 발굴 협의 3회 · 헬스케어 AX 특화 과제 기반 확보 · 양산캠퍼스 연계.</p>
              <div className="inv-meta">앵커기업: <strong>은성의료재단</strong> · 개원 협약: 2025.12.30 · <Link to="/research#medical" style={metaLink}>상세 보기 →</Link></div>
            </div>
          </div>
        </div>

        <div className="inv-card">
          <div className="inv-head">
            <div className="inv-head-l">
              <div className="inv-num">參</div>
              <div>
                <div className="inv-name">측우기 · 수표 <span>測雨器 · 水標</span></div>
                <div className="inv-year">1441 · 세종 23년 · 세계 최초 우량계·수위계</div>
              </div>
            </div>
            <div className="inv-arrow">↔</div>
          </div>
          <div className="inv-body">
            <div className="inv-past">
              <div className="inv-side-tag">過 去 · 1441 · 測雨器</div>
              <div className="inv-icon">💧</div>
              <div className="inv-side-title">자연 데이터의 표준화</div>
              <p className="inv-side-desc">측우기와 수표는 <strong>전국 8도에 동일 규격으로 보급된 세계 최초의 강우량·수위 측정 표준</strong>이다. 자연의 변동을 수치 데이터로 추출하고, 전국 단위로 표준화·집계한 인류 사상 첫 시도. 서구(이탈리아 Castelli)보다 약 200년 빨랐다.</p>
              <div className="inv-meta">제작: 1441 (세종 23년) · 보급: <strong>전국 8도 동일 규격</strong> · 의의: 표준화된 자연 관측 데이터 체계</div>
            </div>
            <div className="inv-divider"></div>
            <div className="inv-future">
              <div className="inv-side-tag">現 在 · 2025 · AI 연구</div>
              <div className="inv-icon">🏭</div>
              <div className="inv-side-title">소재·재료 AI센터</div>
              <p className="inv-side-desc">자연 현상을 수집·표준화하는 정신은 오늘날 소재 데이터 분석 AI로 이어진다. 앵커기관 <strong>한국재료연구원(KIMS)</strong>과 공동 운영(2025.12.30 공동 설치). RISE 산학공동연구 과제 추진 · 소재 분야 AX 특화 과제 발굴.</p>
              <div className="inv-meta">앵커기관: <strong>한국재료연구원(KIMS)</strong> · 개원 협약: 2025.12.30 · <Link to="/research#material" style={metaLink}>상세 보기 →</Link></div>
            </div>
          </div>
        </div>

        <div className="inv-card">
          <div className="inv-head">
            <div className="inv-head-l">
              <div className="inv-num">肆</div>
              <div>
                <div className="inv-name">갑인자 <span>甲寅字</span></div>
                <div className="inv-year">1434 · 세종 16년 · 개량 금속 활자</div>
              </div>
            </div>
            <div className="inv-arrow">↔</div>
          </div>
          <div className="inv-body">
            <div className="inv-past">
              <div className="inv-side-tag">過 去 · 1434 · 甲寅字</div>
              <div className="inv-icon">🔨</div>
              <div className="inv-side-title">새 소재가 지식을 폭발시키다</div>
              <p className="inv-side-desc">갑인자는 이전의 계미자(癸未字)를 개량한 동활자(銅活字)다. <strong>균일한 자형(字形)과 깨끗한 인쇄</strong>를 가능케 한 새 합금 공정으로, 조선의 도서 출판 속도를 비약적으로 끌어올렸다. <strong>"소재 혁신이 지식 폭발을 일으킨다"</strong>는 명제의 가장 이른 증명.</p>
              <div className="inv-meta">제작: 1434 (세종 16년 갑인년) · 합금: 동·납·주석 · 의의: 조선 인쇄 문화의 표준</div>
            </div>
            <div className="inv-divider"></div>
            <div className="inv-future">
              <div className="inv-side-tag">現 在 · 2025 → 2030 · AI 연구</div>
              <div className="inv-icon">🌐</div>
              <div className="inv-side-title">PNU AI Context · E&amp;E Center</div>
              <p className="inv-side-desc">지식의 대량 확산 정신은 AI 시대에 Sovereign AI Ontology 연구로 이어진다. <strong>PNU AI Context Center</strong>(조선·항만물류·해양수산·국방 분야) · <strong>PNU AI E&amp;E Center</strong>(AI 교육 콘텐츠, AI 윤리·신뢰 모듈) — 전략 특화 연구센터 확장 계획.</p>
              <div className="inv-meta">전략 특화 센터: <strong>확장 계획 중</strong> · Vision 2030 · <Link to="/about#vision" style={metaLink}>비전 보기 →</Link></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div style={{ position: 'relative', height: '220px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #D8D2C2' }}>
          <img src="/assets/img/library.jpg" alt="기록과 자료실 — 갑인자가 폭발시킨 지식의 후예" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'sepia(.2) saturate(1.05) brightness(.93)' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(26,22,18,.82) 0%,rgba(74,36,0,.3) 60%,transparent 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '22px', color: '#FAF7EE' }}>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontStyle: 'italic', fontSize: '11px', color: '#C39B3A', letterSpacing: '.06em', marginBottom: '4px' }}>記 錄 · 1434 甲寅字 → 21세기 LLM</div>
            <div style={{ fontFamily: "'Nanum Myeongjo',serif", fontSize: '18px', fontWeight: '900', letterSpacing: '-.015em' }}>"소재 혁신이 지식 폭발을 일으킨다"</div>
          </div>
        </div>
        <div style={{ position: 'relative', height: '220px', borderRadius: '14px', overflow: 'hidden', border: '2px solid #C39B3A' }}>
          <img src="/assets/img/diploma.jpg" alt="IR52 장영실상" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'sepia(.1) saturate(1.1)' }} />
          <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(195,155,58,.78) 0%,rgba(184,134,46,.6) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '22px', color: '#1a1612' }}>
            <div style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono',monospace", fontWeight: '800', marginBottom: '6px' }}>IR52 · INDUSTRIAL RESEARCH 52</div>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '17px', fontWeight: '900', letterSpacing: '-.015em', lineHeight: '1.3' }}>장영실상 — 한국 산업기술 최고 영예 (1991~)</div>
            <div style={{ fontSize: '12px', marginTop: '6px', fontFamily: "'Noto Serif KR',serif", fontStyle: 'italic' }}>우리 연구원이 학술 영역에서 잇는다</div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title"><i className="fas fa-palette" style={{ color: 'var(--juhong)' }}></i> 한국 전통 오방색 (五方色) — 헤리티지 색채 체계</div>
          <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono',monospace" }}>우리 연구원의 디자인 언어</span>
        </div>
        <div className="card-body">
          <p style={{ fontSize: '13px', color: 'var(--body)', lineHeight: '1.75', marginBottom: '18px' }}>우리 연구원의 색채 체계는 한국 전통의 <strong>오방색(五方色)</strong> — 청·적·황·백·흑 — 에서 출발한다. 동서남북과 중앙, 그리고 세계의 다섯 방향을 가리키는 이 색들은 단순한 장식이 아니라 우주의 질서를 인간 세계로 옮겨오는 문법이었다. 우리는 이 문법을 21세기의 인터페이스와 시각 언어로 다시 새긴다.</p>
          <div className="obang-row">
            <div className="obang-cell cheong">
              <div className="obang-name">靑</div>
              <div className="obang-han">청 · 동방</div>
              <div className="obang-dir">EAST · BLUE</div>
            </div>
            <div className="obang-cell juk">
              <div className="obang-name">赤</div>
              <div className="obang-han">적 · 남방 (주홍)</div>
              <div className="obang-dir">SOUTH · RED</div>
            </div>
            <div className="obang-cell hwang">
              <div className="obang-name">黃</div>
              <div className="obang-han">황 · 중앙</div>
              <div className="obang-dir">CENTER · GOLD</div>
            </div>
            <div className="obang-cell baek">
              <div className="obang-name">白</div>
              <div className="obang-han">백 · 서방 (한지)</div>
              <div className="obang-dir">WEST · WHITE</div>
            </div>
            <div className="obang-cell heuk">
              <div className="obang-name">墨</div>
              <div className="obang-han">흑 · 북방 (묵)</div>
              <div className="obang-dir">NORTH · INK</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
