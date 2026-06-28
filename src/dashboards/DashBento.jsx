import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/dashboard-bento.css'

gsap.registerPlugin(ScrollTrigger)

const hide = (e) => { e.currentTarget.style.display = 'none' }
const fmt = (v) => (v >= 1000 ? Math.round(v).toLocaleString('en-US') : String(Math.round(v)))

const KPIS = [
  { n: 3, suffix: '개', label: '프로젝트 연구센터', sub: '앵커기업 중심', icon: 'fa-flask', tone: 'blue', span: 'c4' },
  { n: 3, suffix: '건', label: '개원 동시 산학 협약', sub: '2025.12.30', icon: 'fa-handshake', tone: 'emerald', span: 'c3' },
  { n: 303, suffix: '+', label: 'GPU 현재 보유', sub: '800장 확보 목표', icon: 'fa-microchip', tone: 'amber', span: 'c3' },
  { n: 10067, suffix: '㎡', label: 'AI Innovation Hub Space', sub: '5개 캠퍼스 공간', icon: 'fa-building', tone: 'violet', span: 'c2' },
  { n: 80, suffix: '명', label: 'AX 프로젝트 석사 배출 목표', sub: '5년 KPI', icon: 'fa-graduation-cap', tone: 'rose', span: 'c2' },
]

const ACTS = [
  { l: 'A', name: 'Acceleration', ko: '산업화 가속', desc: 'AI 산업화 허브로서 연구 성과를 산업 현장으로 직접 이전합니다.', tone: 'blue' },
  { l: 'C', name: 'Core', ko: '기초과학 강화', desc: 'AI 핵심기술 개발 및 양자·신경과학 등 기초 강화.', tone: 'emerald' },
  { l: 'T', name: 'Transformation', ko: '산업 혁신', desc: '해양·제조·의료·에너지 국가 전략산업의 AI 전환.', tone: 'amber' },
  { l: 'S', name: 'Superiority', ko: '경쟁 우위', desc: '차세대 주권기술 개발 · 국가 경쟁우위 확보.', tone: 'violet' },
]

const HERITAGE = [
  { han: '壹', year: '1433 · 過去', inv: '혼천의', hanja: '渾天儀', desc: '한국 최초 자동 천구의. 우주의 운행을 한 자리에서 관측.', icon: 'fa-meteor', letter: 'A', now: '조선·구조 AI센터', nowDesc: 'AI 구조 최적화 알고리즘 개발 · 앵커기업: 삼성중공업', tone: 'blue', span: 'c5' },
  { han: '貳', year: '1441 · 過去', inv: '측우기 · 수표', hanja: '測雨器·水標', desc: '세계 최초 우량계 · 수위계. 농업용 수자원의 데이터 표준화.', icon: 'fa-cloud-rain', letter: 'B', now: '헬스케어 AI센터', nowDesc: 'AI 솔루션 과제 발굴 · 헬스케어 AX 특화 · 앵커기업: 은성의료재단', tone: 'emerald', span: 'c4' },
  { han: '參', year: '1434 · 過去', inv: '자격루', hanja: '自擊漏', desc: '한국 최초 자동 시계. 생명의 시간성을 인공 시스템에.', icon: 'fa-hourglass-half', letter: 'C', now: '소재·재료 AI센터', nowDesc: 'RISE 산학공동연구 추진 · 소재 분야 AX 특화 · 앵커기관: 한국재료연구원', tone: 'amber', span: 'c4' },
  { han: '肆', year: '1434 · 過去', inv: '갑인자', hanja: '甲寅字', desc: '개량 금속 활자. 지식의 대량 생산·확산을 가능케 한 소재.', icon: 'fa-print', letter: 'D', now: 'PNU AI Context · E&E Center', nowDesc: 'Sovereign AI Ontology 연구 · AI 교육·윤리 모듈 (전략 특화 센터 확장 계획)', tone: 'violet', span: 'c5' },
]

const CENTERS = [
  { key: 'marine', name: '조선·구조 AI센터', en: 'Shipbuilding & Structural AI', anchor: '삼성중공업', desc: 'AI 구조 최적화 알고리즘 개발 · 조선 특화 교과목 5개 개설 · 취업역량 강화 세미나·컨퍼런스 4회 · 삼성중공업 취업 연계 트랙 운영', img: '/assets/img/marine-ai.jpg', icon: 'fa-ship', tone: 'blue', feature: true, stats: [{ n: 5, u: '개', l: '특화 교과목' }, { n: 4, u: '회', l: '세미나·컨퍼런스' }] },
  { key: 'medical', name: '헬스케어 AI센터', en: 'Healthcare AI', anchor: '은성의료재단', desc: 'AI 솔루션 과제 발굴 협의 3회 · 양산캠퍼스 연계', img: '/assets/img/medical-ai.jpg', icon: 'fa-heart-pulse', tone: 'emerald' },
  { key: 'material', name: '소재·재료 AI센터', en: 'Materials AI', anchor: '한국재료연구원', desc: 'RISE 산학공동연구 과제 추진 · 소재 분야 AX 특화 과제 발굴', img: '/assets/img/mfg-ai.jpg', icon: 'fa-industry', tone: 'amber' },
  { key: 'axis', name: 'AI 컴퓨팅 인프라', en: 'PNU-AXIS', anchor: 'PNU-AXIS 인프라', desc: '현재 GPU 303장+ · 목표 800장·500억 · 데이터센터 2MW', img: '/assets/img/quantum.jpg', icon: 'fa-microchip', tone: 'violet' },
  { key: 'hub', name: '10,067㎡ 거점 공간', en: 'AI Innovation Hub Space', anchor: 'AI Innovation Hub Space', desc: '5개 전용 공간 · 부산·양산캠퍼스', img: '/assets/img/college-ai.jpg', icon: 'fa-building', tone: 'rose' },
]

const PARTNERS = [
  { ini: 'S', name: '삼성중공업', en: 'Samsung Heavy Industries', date: '2025.12.30 · MOU', desc: 'AI 연구협력센터를 교내 공동 설치. 조선·해양 AI 공동 연구 및 데이터 분석.', meta: '해양 AI · 양 기관 공동 예산', icon: 'fa-ship', tone: 'blue', founding: true, span: 'c5' },
  { ini: '은', name: '은성의료재단', en: 'Eunsung Medical Foundation', date: '2025.12.30 · MOU', desc: 'AX 헬스케어센터를 양 기관 공동 설치. 의료 AI · 에이지테크 공동 연구.', meta: '의료 AI · 에이지테크', icon: 'fa-heart-pulse', tone: 'emerald', founding: true, span: 'c4' },
  { ini: 'K', name: '한국재료연구원 (KIMS)', en: 'Korea Institute of Materials Science', date: '2025.12.30 · MOU', desc: 'PNU 연구협력센터 공동 설치. 초거대 첨단 제조 AI · 소재 AI 융합 연구.', meta: '소재·제조 AI', icon: 'fa-industry', tone: 'amber', founding: true, span: 'c3' },
  { ini: 'St', name: 'Stanford University', en: 'Stanford AI Lab', date: '연구 협력 · 진행중', desc: '스탠퍼드 AI Lab과 AI 융합 공동 연구 협력 중.', meta: '글로벌 · 학술 협력', icon: 'fa-globe', tone: 'violet', founding: false, span: 'c4' },
  { ini: 'E', name: 'ETRI', en: '한국전자통신연구원', date: '정부 출연연', desc: 'AI 응용 기술 협력. 한국어 NLP 모델 공동 연구 · 양자 통신 기술 협력.', meta: '정부 출연연', icon: 'fa-landmark', tone: 'blue', founding: false, span: 'c4' },
  { ini: 'K', name: '한국전기연구원 (KERI)', en: 'Korea Electrotechnology Research Institute', date: '에너지 AI', desc: '차세대 에너지 AI 공동 연구. AI 기반 스마트 그리드 및 신재생 에너지 최적화.', meta: '에너지 AI', icon: 'fa-bolt', tone: 'amber', founding: false, span: 'c4' },
]

const FACULTY = [
  { name: '초대 원장', area: '연구원장', lab: '융합 AI 연구실', icon: 'fa-user-tie', tone: 'blue' },
  { name: '옥종목 교수', area: '양자 AI · 물리학과', lab: '47억 사업 PI', icon: 'fa-atom', tone: 'violet' },
  { name: '김호원 교수', area: 'Physical AI 보안', lab: 'S3Lab · ITRC', icon: 'fa-shield-halved', tone: 'emerald' },
  { name: '권선영 교수', area: '신약 AI · GNN', lab: 'AI Bio Lab', icon: 'fa-flask-vial', tone: 'rose' },
  { name: '전상률 교수', area: 'CV · 생성형 AI', lab: 'PNUCVLAB', icon: 'fa-eye', tone: 'amber' },
  { name: '류광렬 교수', area: '제조 AI · DS', lab: 'DS 대학원장', icon: 'fa-gears', tone: 'blue' },
]

const NOTICES = [
  { title: '박사후연구원 채용 (2명)', tag: '채용', date: '2026.05.25 · 마감 6.30', icon: 'fa-user-plus', tone: 'emerald' },
  { title: '2026년 연구비 집행 지침 개정 안내', date: '2026.05.22', icon: 'fa-bullhorn', tone: 'blue' },
  { title: 'AI 비전 세미나 — Stanford AI Lab 연사', date: '2026.06.05 · IT관 세미나실 101', icon: 'fa-calendar', tone: 'violet' },
  { title: '산학협력 기술 발표회', date: '2026.06.12 · 대학본부 국제회의실', icon: 'fa-handshake', tone: 'amber' },
  { title: 'CVPR 2026 박진선 교수팀 논문 채택', date: '2026.05.18 · VLM 분야', icon: 'fa-trophy', tone: 'emerald' },
  { title: '개원 5개월 성과 보고서 공개', date: '2026.05.15', icon: 'fa-file-alt', tone: 'blue' },
]

const IT_STATS = [
  { tag: '총 사업비', count: 267, suffix: '억원', sub: '국립대 BTL 최대 규모' },
  { tag: '연면적', count: 13161, suffix: '㎡', sub: '지하 1층 · 지상 10층' },
  { tag: '준공', count: 2025, suffix: '.12.16', sub: '개원식 12.30' },
  { tag: '친환경', isStatic: true, sub: '태양광 · 지열 · BEMS' },
]

const NAV = [
  { label: '대시보드', icon: 'fa-gauge-high', active: true },
  { label: '연구센터', icon: 'fa-microscope', to: '/research' },
  { label: '헤리티지', icon: 'fa-landmark', to: '/heritage' },
  { label: '파트너십', icon: 'fa-handshake', to: '/partners' },
  { label: 'IT관 시설', icon: 'fa-building', to: '/facility' },
  { label: '연구원 소개', icon: 'fa-circle-info', to: '/about' },
  { label: '알림', icon: 'fa-bullhorn', to: '/news' },
]

export default function DashBento() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.db-topbar', { y: -18, autoAlpha: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.db-sidebar', { x: -22, autoAlpha: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.db-pagehead > *', { y: 20, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08, clearProps: 'transform' })

      gsap.from('.db-kpi-grid .db-cell', {
        scale: 0.95, autoAlpha: 0, duration: 0.55, ease: 'power3.out', stagger: 0.06, delay: 0.15, clearProps: 'transform',
      })

      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = parseFloat(el.dataset.count)
        if (Number.isNaN(target)) return
        el.textContent = '0'
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 1.6, ease: 'power2.out', delay: 0.4,
          onUpdate: () => { el.textContent = fmt(obj.v) },
          scrollTrigger: { trigger: el, start: 'top 94%', once: true },
        })
      })

      gsap.utils.toArray('.db-reveal').forEach((el) => {
        gsap.from(el, {
          y: 28, scale: 0.97, autoAlpha: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
      })

      ScrollTrigger.refresh()
    }, root)

    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="db-root" ref={rootRef}>
      <div className="db-grain" aria-hidden="true"></div>

      <header className="db-topbar">
        <div className="db-topbar-left">
          <div className="db-logo-chip"><i className="fas fa-atom"></i></div>
          <div className="db-brand">
            <div className="db-brand-kr">장영실 AI 융합연구원</div>
            <div className="db-brand-en">Jang Yeong-sil AI Convergence Research Institute</div>
          </div>
        </div>
        <div className="db-search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="연구센터 · 과제 · 논문 검색..." aria-label="검색" />
          <kbd>⌘K</kbd>
        </div>
        <div className="db-topbar-right">
          <span className="db-live"><span className="db-live-dot"></span> 개원 운영중</span>
          <span className="db-date">2026.06.27</span>
          <button type="button" className="db-icon-btn" aria-label="알림"><i className="fas fa-bell"></i><span className="db-dot-badge"></span></button>
          <button type="button" className="db-icon-btn" aria-label="설정"><i className="fas fa-gear"></i></button>
          <div className="db-avatar" title="초대 원장">院</div>
        </div>
      </header>

      <div className="db-body">
        <aside className="db-sidebar">
          <nav className="db-nav" aria-label="대시보드 메뉴">
            {NAV.map((n) => n.active ? (
              <span key={n.label} className="db-nav-item active" aria-current="page">
                <i className={'fas ' + n.icon}></i><span className="db-nav-label">{n.label}</span>
              </span>
            ) : (
              <Link key={n.label} to={n.to} className="db-nav-item">
                <i className={'fas ' + n.icon}></i><span className="db-nav-label">{n.label}</span>
              </Link>
            ))}
          </nav>
          <div className="db-sidebar-foot">
            <div className="db-gpu-pill">
              <div className="db-gpu-ic"><i className="fas fa-microchip"></i></div>
              <div>
                <div className="db-gpu-n">303<span>+</span></div>
                <div className="db-gpu-l">PNU-AXIS GPU</div>
              </div>
            </div>
            <div className="db-side-meta">개원 · 2025.12.30</div>
          </div>
        </aside>

        <main className="db-main">
          <div className="db-pagehead">
            <div className="db-pagehead-left">
              <div className="db-ph-tag">Jang Yeong-sil AI Convergence Research Institute <span className="axis-mini">A.U.R.A · U Pillar</span></div>
              <h1 className="db-ph-title">장영실 AI 융합연구원 <em>대시보드</em></h1>
              <div className="db-ph-desc">동남권 AI 융합연구 컨트롤타워 · 2025.12.30 개원 · 교학부총장 산하 전담기구 · IT관 (13,161㎡)</div>
            </div>
            <div className="db-pagehead-right">
              <Link to="/news?cat=publication" className="db-btn db-btn-ghost"><i className="fas fa-file-alt"></i> 논문 검색</Link>
              <Link to="/research" className="db-btn db-btn-ghost"><i className="fas fa-file-pdf"></i> 백서</Link>
              <Link to="/partners#contact" className="db-btn db-btn-primary"><i className="fas fa-handshake"></i> 연구 협력 신청</Link>
            </div>
          </div>
          {/* KPI bento */}
          <section className="db-board">
            <div className="db-board-head">
              <div className="db-board-title"><span className="db-board-num">01</span> 핵심 지표 <span className="db-board-sub">개원 현황 요약</span></div>
            </div>
            <div className="db-bento db-kpi-grid">
              <article className="db-cell db-hero c5 r2 db-wide">
                <div className="db-hero-mesh" aria-hidden="true"></div>
                <div className="db-hero-content">
                  <div className="db-badge"><span className="db-badge-dot"></span> 동남권 지·산·학·연 일체형 거점 · 2025.12.30 출범</div>
                  <h2 className="db-hero-title">동남권 AI 융합연구<br /><em>컨트롤타워</em></h2>
                  <p className="db-hero-desc">장영실 AI 융합연구원은 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 프로젝트 연구센터를 중심으로 앵커기업과 함께 AI 기반 융합연구를 선도합니다. GPU 303장 이상의 PNU-AXIS 인프라와 10,067㎡ AI Innovation Hub Space로 동남권 산업 혁신을 지원합니다.</p>
                  <div className="db-hero-tags">
                    <span className="db-hero-tag"><i className="fas fa-ship"></i> 조선·구조 AI (삼성중공업)</span>
                    <span className="db-hero-tag"><i className="fas fa-heart-pulse"></i> 헬스케어 AI (은성의료재단)</span>
                    <span className="db-hero-tag"><i className="fas fa-industry"></i> 소재·재료 AI (KIMS)</span>
                    <span className="db-hero-tag"><i className="fas fa-microchip"></i> PNU-AXIS GPU 303+장</span>
                  </div>
                </div>
                <div className="db-hero-img">
                  <img src="/assets/img/it-building.jpg" alt="IT관" onError={hide} />
                </div>
              </article>

              {KPIS.map((k) => (
                <article key={k.label} className={'db-cell db-stat db-half ' + k.span + ' tone-' + k.tone}>
                  <div className="db-stat-top">
                    <div className="db-ic-chip"><i className={'fas ' + k.icon}></i></div>
                    <div className="db-stat-sub"><i className="fas fa-arrow-trend-up"></i> {k.sub}</div>
                  </div>
                  <div className="db-stat-num">
                    <span className="db-num" data-count={k.n}>{fmt(k.n)}</span>
                    <span className="db-u">{k.suffix}</span>
                  </div>
                  <div className="db-stat-label">{k.label}</div>
                </article>
              ))}
            </div>
          </section>

          {/* ACTS + Director */}
          <section className="db-board">
            <div className="db-board-head">
              <div className="db-board-title"><span className="db-board-num">02</span> ACTS 비전 체계 <span className="db-board-sub">Vision 2030</span></div>
              <Link to="/about#vision" className="db-board-more">상세 보기 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="db-bento">
              <article className="db-cell db-dir c4 r2 db-wide db-reveal">
                <div className="db-dir-avatar">院</div>
                <div className="db-dir-name">초대 원장 <small>Founding Director</small></div>
                <div className="db-dir-pos">장영실AI융합연구원 · 2025.12.30 출범</div>
                <p className="db-dir-quote">“장영실 선생이 노비 출신에서 조선 최고 과학자로 성장했듯, 우리 연구원도 출신과 무관하게 인재가 모이는 개방형 플랫폼이 되어 AI 융합과학의 주권을 선도하겠습니다.”</p>
                <div className="db-dir-meta">2025.12.30 · 개원사 中</div>
              </article>

              {ACTS.map((a) => (
                <article key={a.l} className={'db-cell db-acts db-half c4 db-reveal tone-' + a.tone}>
                  <div className="db-acts-letter">{a.l}</div>
                  <div className="db-acts-name">{a.name}</div>
                  <div className="db-acts-ko">{a.ko}</div>
                  <p className="db-acts-desc">{a.desc}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Heritage mapping */}
          <section className="db-board">
            <div className="db-board-head">
              <div className="db-board-title"><span className="db-board-num">03</span> 헤리티지 매핑 <span className="db-board-sub">15세기 발명품이 21세기 AI가 되다</span></div>
              <Link to="/heritage" className="db-board-more">더보기 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="db-bento">
              <article className="db-cell db-her-intro c3 r2 db-wide db-reveal">
                <div className="db-her-hanja">蔣英實</div>
                <h3 className="db-her-ititle">헤리티지 매핑</h3>
                <p className="db-her-idesc">장영실의 4대 발명품이 4개 AI 연구센터로 계승됩니다. 과거의 측정·인지·소재 혁신이 오늘의 AI 융합으로 이어집니다.</p>
                <div className="db-her-stats">
                  <div><span className="db-num" data-count="4">4</span><span className="db-u">대 발명</span></div>
                  <div><span className="db-num" data-count="4">4</span><span className="db-u">AI 센터</span></div>
                </div>
              </article>

              {HERITAGE.map((h) => (
                <article key={h.han} className={'db-cell db-hcell db-half ' + h.span + ' db-reveal tone-' + h.tone}>
                  <div className="db-h-past">
                    <div className="db-h-mark"><span className="db-h-han">{h.han}</span><span className="db-h-year">{h.year}</span></div>
                    <i className={'fas ' + h.icon + ' db-h-icon'}></i>
                    <div className="db-h-name">{h.inv} <span className="db-h-hanja">{h.hanja}</span></div>
                    <p className="db-h-desc">{h.desc}</p>
                  </div>
                  <div className="db-h-arrow"><i className="fas fa-arrow-right-long"></i></div>
                  <div className="db-h-now">
                    <div className="db-h-letter">{h.letter}</div>
                    <div className="db-h-nowname">{h.now}</div>
                    <p className="db-h-nowdesc">{h.nowDesc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          {/* Research centers */}
          <section className="db-board">
            <div className="db-board-head">
              <div className="db-board-title"><span className="db-board-num">04</span> 3개 프로젝트 연구센터 <span className="db-board-sub">앵커기업 중심 산학 융합</span></div>
              <Link to="/research" className="db-board-more">상세 보기 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="db-bento">
              {CENTERS.map((c) => c.feature ? (
                <article key={c.key} className={'db-cell db-center db-center-feature c4 r2 db-wide db-reveal tone-' + c.tone}>
                  <img src={c.img} alt={c.name} className="db-center-img" onError={hide} />
                  <div className="db-center-overlay"></div>
                  <div className="db-center-body">
                    <div className="db-center-head">
                      <div className="db-ic-chip"><i className={'fas ' + c.icon}></i></div>
                      <div className="db-center-tag"><i className="fas fa-star"></i> 앵커기업: {c.anchor}</div>
                    </div>
                    <h3 className="db-center-name">{c.name}</h3>
                    <div className="db-center-en">{c.en}</div>
                    <p className="db-center-desc">{c.desc}</p>
                    <div className="db-center-stats">
                      {c.stats.map((s) => (
                        <div key={s.l} className="db-center-stat">
                          <span className="db-num" data-count={s.n}>{fmt(s.n)}</span><span className="db-u">{s.u}</span>
                          <span className="db-center-stat-l">{s.l}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ) : (
                <article key={c.key} className={'db-cell db-center db-center-mini c4 db-half db-reveal tone-' + c.tone}>
                  <div className="db-center-mini-img"><img src={c.img} alt={c.name} onError={hide} /></div>
                  <div className="db-center-mini-body">
                    <div className="db-center-head">
                      <div className="db-ic-chip sm"><i className={'fas ' + c.icon}></i></div>
                      <div className="db-center-tag sm">앵커: {c.anchor}</div>
                    </div>
                    <h4 className="db-center-name sm">{c.name}</h4>
                    <p className="db-center-desc sm">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Partners */}
          <section className="db-board">
            <div className="db-board-head">
              <div className="db-board-title"><span className="db-board-num">05</span> 전략 협력 기관 <span className="db-board-sub">개원 동시 협약 3 + 글로벌 3</span></div>
              <Link to="/partners" className="db-board-more">파트너십 전체 보기 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="db-bento">
              {PARTNERS.map((p) => (
                <Link key={p.name} to={p.founding ? '/partners#founding' : '/partners#global'} className={'db-cell db-partner db-half ' + p.span + ' db-reveal tone-' + p.tone + (p.founding ? ' db-partner-founding' : '')}>
                  <div className="db-partner-top">
                    <div className="db-partner-logo">{p.ini}</div>
                    <div>
                      <div className="db-partner-name">{p.name}</div>
                      <div className="db-partner-date">{p.date}</div>
                    </div>
                  </div>
                  <p className="db-partner-desc">{p.desc}</p>
                  <div className="db-partner-meta"><i className={'fas ' + p.icon}></i> {p.meta}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* IT showcase */}
          <section className="db-board">
            <div className="db-board-head">
              <div className="db-board-title"><span className="db-board-num">06</span> IT관 · 본부 거점 <span className="db-board-sub">국립대학 BTL 최대 규모</span></div>
              <Link to="/facility" className="db-board-more">시설 보기 <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="db-bento">
              <article className="db-cell db-it c12 db-wide db-reveal">
                <div className="db-it-grid">
                  <div className="db-it-text">
                    <div className="db-badge gold"><i className="fas fa-building"></i> IT 관 · 본부 거점</div>
                    <h3 className="db-it-title">국립대학 BTL <em>최대 규모</em><br />IT관에서 시작됩니다</h3>
                    <p className="db-it-desc">2025년 12월 16일 준공된 부산대학교 IT관은 장영실 AI 융합연구원의 본부이자 부산대 AI 거점 사업의 물리적 거점입니다. 친환경 시설(100% LED · 태양광 · 지열 · BEMS).</p>
                    <div className="db-it-stats">
                      {IT_STATS.map((s) => (
                        <div key={s.tag} className="db-it-stat">
                          <div className="db-it-stat-tag">{s.tag}</div>
                          <div className="db-it-stat-n">
                            {s.isStatic ? <><i className="fas fa-leaf"></i> 100<span className="db-u">% LED</span></> : <><span className="db-num" data-count={s.count}>{fmt(s.count)}</span><span className="db-u">{s.suffix}</span></>}
                          </div>
                          <div className="db-it-stat-d">{s.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="db-it-image">
                    <img src="/assets/img/it-building.jpg" alt="부산대 IT관" onError={hide} />
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Faculty + Notices */}
          <section className="db-board">
            <div className="db-bento">
              <article className="db-cell db-faculty c7 db-wide db-reveal">
                <div className="db-board-head inline">
                  <div className="db-board-title"><span className="db-board-num">07</span> 핵심 연구원</div>
                  <Link to="/about#org" className="db-board-more">조직 전체 보기 <i className="fas fa-arrow-right"></i></Link>
                </div>
                <div className="db-fac-grid">
                  {FACULTY.map((f) => (
                    <div key={f.name} className={'db-fac tone-' + f.tone}>
                      <div className="db-fac-avatar"><i className={'fas ' + f.icon}></i></div>
                      <div>
                        <div className="db-fac-name">{f.name}</div>
                        <div className="db-fac-area">{f.area}</div>
                        <div className="db-fac-lab">{f.lab}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="db-cell db-notices c5 db-wide db-reveal">
                <div className="db-board-head inline">
                  <div className="db-board-title"><span className="db-board-num">08</span> 알림</div>
                  <Link to="/news" className="db-board-more">전체 <i className="fas fa-arrow-right"></i></Link>
                </div>
                <div className="db-notice-list">
                  {NOTICES.map((n) => (
                    <div key={n.title} className="db-nl-item">
                      <div className={'db-nl-icon tone-' + n.tone}><i className={'fas ' + n.icon}></i></div>
                      <div className="db-nl-body">
                        <div className="db-nl-title">{n.title}{n.tag ? <span className="db-nl-tag">{n.tag}</span> : null}</div>
                        <div className="db-nl-date">{n.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>

      <nav className="db-pillnav" aria-label="대시보드 전환">
        <Link to="/home"><i className="fas fa-table-columns"></i> 원본</Link>
        <span className="db-pillnav-sep"></span>
        <Link to="/dash"><i className="fas fa-grip"></i> 목록</Link>
      </nav>
    </div>
  )
}
