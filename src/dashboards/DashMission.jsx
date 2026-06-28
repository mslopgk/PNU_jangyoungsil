import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/dashboard-mission.css'

gsap.registerPlugin(ScrollTrigger)

const hide = (e) => { e.currentTarget.style.display = 'none' }

const NAV = [
  { code: '01', icon: 'fa-gauge-high', label: '대시보드', to: '/dash', led: 'on' },
  { code: '02', icon: 'fa-compass', label: 'ACTS 비전', to: '/about#vision', led: 'on' },
  { code: '03', icon: 'fa-microscope', label: '연구센터', to: '/research', led: 'on' },
  { code: '04', icon: 'fa-scroll', label: '헤리티지', to: '/heritage', led: 'on' },
  { code: '05', icon: 'fa-handshake', label: '파트너스', to: '/partners', led: 'on' },
  { code: '06', icon: 'fa-newspaper', label: '알림', to: '/news', led: 'amber' },
  { code: '07', icon: 'fa-building', label: 'IT관', to: '/about#it', led: 'on' },
  { code: '08', icon: 'fa-server', label: '인프라', to: '/research#infra', led: 'off' },
]

const KPIS = [
  { icon: 'fa-flask', target: 3, unit: '개', label: '프로젝트 연구센터', trend: '앵커기업 중심', status: 'OPS', load: 100 },
  { icon: 'fa-handshake', target: 3, unit: '건', label: '개원 동시 산학 협약', trend: '2025.12.30', status: 'OPS', load: 100 },
  { icon: 'fa-microchip', target: 303, unit: '+장', label: 'GPU 현재 보유', trend: '800장 확보 목표', status: 'OPS', load: 38 },
  { icon: 'fa-building', target: 10067, unit: '㎡', label: 'AI Innovation Hub Space', trend: '5개 캠퍼스 공간', status: 'OPS', load: 80 },
  { icon: 'fa-graduation-cap', target: 80, unit: '명', label: 'AX 프로젝트 석사 배출 목표', trend: '5년 KPI', status: 'PLAN', load: 0 },
]

const ACTS = [
  { l: 'A', name: 'Acceleration', ko: '산업화 가속', desc: 'AI 산업화 허브로서 연구 성과를 산업 현장으로 직접 이전합니다.', status: 'ACTIVE' },
  { l: 'C', name: 'Core', ko: '기초과학 강화', desc: 'AI 핵심기술 개발 및 양자·신경과학 등 기초 강화.', status: 'ACTIVE' },
  { l: 'T', name: 'Transformation', ko: '산업 혁신', desc: '해양·제조·의료·에너지 국가 전략산업의 AI 전환.', status: 'ACTIVE' },
  { l: 'S', name: 'Superiority', ko: '경쟁 우위', desc: '차세대 주권기술 개발 · 국가 경쟁우위 확보.', status: 'STANDBY' },
]

const HERITAGE = [
  { han: '壹', year: '1433', tag: '過去', invIcon: 'fa-meteor', inv: '혼천의', hanja: '渾天儀', desc: '한국 최초 자동 천구의. 우주의 운행을 한 자리에서 관측.', mark: 'A', now: '2025 · 現在', nowIcon: 'fa-ship', nowName: '조선·구조 AI센터', nowDesc: 'AI 구조 최적화 알고리즘 개발 · 앵커기업: 삼성중공업' },
  { han: '貳', year: '1441', tag: '過去', invIcon: 'fa-droplet', inv: '측우기 · 수표', hanja: '測雨器·水標', desc: '세계 최초 우량계 · 수위계. 농업용 수자원의 데이터 표준화.', mark: 'B', now: '2025 · 現在', nowIcon: 'fa-heart-pulse', nowName: '헬스케어 AI센터', nowDesc: 'AI 솔루션 과제 발굴 · 헬스케어 AX 특화 · 앵커기업: 은성의료재단' },
  { han: '參', year: '1434', tag: '過去', invIcon: 'fa-hourglass-half', inv: '자격루', hanja: '自擊漏', desc: '한국 최초 자동 시계. 생명의 시간성을 인공 시스템에.', mark: 'C', now: '2025 · 現在', nowIcon: 'fa-industry', nowName: '소재·재료 AI센터', nowDesc: 'RISE 산학공동연구 추진 · 소재 분야 AX 특화 · 앵커기관: 한국재료연구원' },
  { han: '肆', year: '1434', tag: '過去', invIcon: 'fa-stamp', inv: '갑인자', hanja: '甲寅字', desc: '개량 금속 활자. 지식의 대량 생산·확산을 가능케 한 소재.', mark: 'D', now: '2025 → 2030', nowIcon: 'fa-circle-nodes', nowName: 'PNU AI Context · E&E Center', nowDesc: 'Sovereign AI Ontology 연구 · AI 교육·윤리 모듈 (전략 특화 센터 확장 계획)' },
]

const CENTERS = [
  { img: '/assets/img/marine-ai.jpg', cls: 'dm-rb-feature', tag: '앵커기업: 삼성중공업', title: '조선·구조 AI센터', desc: 'AI 구조 최적화 알고리즘 개발 · 조선 특화 교과목 5개 개설 · 취업역량 강화 세미나·컨퍼런스 4회 · 삼성중공업 취업 연계 트랙 운영', stats: [{ n: '5', u: '개', l: '특화 교과목' }, { n: '4', u: '회', l: '세미나·컨퍼런스' }] },
  { img: '/assets/img/medical-ai.jpg', cls: 'dm-rb-med', tag: '앵커기업: 은성의료재단', title: '헬스케어 AI센터', desc: 'AI 솔루션 과제 발굴 협의 3회 · 양산캠퍼스 연계' },
  { img: '/assets/img/mfg-ai.jpg', cls: 'dm-rb-mfg', tag: '앵커기관: 한국재료연구원', title: '소재·재료 AI센터', desc: 'RISE 산학공동연구 과제 추진 · 소재 분야 AX 특화 과제 발굴' },
  { img: '/assets/img/quantum.jpg', cls: 'dm-rb-gpu', tag: 'PNU-AXIS 인프라', title: 'AI 컴퓨팅 인프라', desc: '현재 GPU 303장+ · 목표 800장·500억 · 데이터센터 2MW' },
  { img: '/assets/img/college-ai.jpg', cls: 'dm-rb-hub', tag: 'AI Innovation Hub Space', title: '10,067㎡ 거점 공간', desc: '5개 전용 공간 · 부산·양산캠퍼스' },
]

const PROJECTS = [
  { name: 'AI 구조 최적화 알고리즘 개발', tag: '조선·구조', tone: 'b', code: 'MAR-01', status: 'OPS' },
  { name: '조선 특화 교과목 5개 개설', tag: '조선·구조', tone: 'b', code: 'MAR-02', status: 'OPS' },
  { name: '협력기업 재직자 AX 교육 (2회)', tag: '조선·구조', tone: 'b', code: 'MAR-03', status: 'OPS' },
  { name: 'AI 솔루션 과제 발굴 협의 (3회)', tag: '헬스케어', tone: 'm', code: 'MED-01', status: 'OPS' },
  { name: '헬스케어 AX 특화 과제 기반 확보', tag: '헬스케어', tone: 'm', code: 'MED-02', status: 'OPS' },
  { name: 'RISE 산학공동연구 과제 추진', tag: '소재·재료', tone: 's', code: 'MAT-01', status: 'PLAN' },
  { name: '소재 분야 AX 특화 과제 발굴', tag: '소재·재료', tone: 's', code: 'MAT-02', status: 'PLAN' },
]

const PARTNERS = [
  { initial: 'S', name: '삼성중공업', tag: '2025.12.30 · MOU', strong: 'AI 연구협력센터', desc: '를 교내 공동 설치. 조선·해양 AI 공동 연구 및 데이터 분석.', meta: '해양 AI · 양 기관 공동 예산', status: 'OPS', to: '/partners#founding' },
  { initial: '은', name: '은성의료재단', tag: '2025.12.30 · MOU', strong: 'AX 헬스케어센터', desc: '를 양 기관 공동 설치. 의료 AI · 에이지테크 공동 연구.', meta: '의료 AI · 에이지테크', status: 'OPS', to: '/partners#founding' },
  { initial: 'K', name: '한국재료연구원 (KIMS)', tag: '2025.12.30 · MOU', strong: 'PNU 연구협력센터', desc: ' 공동 설치. 초거대 첨단 제조 AI · 소재 AI 융합 연구.', meta: '소재·제조 AI', status: 'OPS', to: '/partners#founding' },
  { initial: 'St', name: 'Stanford University', tag: '연구 협력 · 진행중', strong: 'AI 융합 공동 연구', desc: ' 협력 중. 스탠퍼드 AI Lab과 학술 교류.', meta: '글로벌 · 학술 협력', status: 'READY', to: '/partners#global' },
  { initial: 'E', name: 'ETRI', tag: '한국전자통신연구원', strong: '한국어 NLP 모델 공동 연구', desc: ' · AI 응용 기술 협력 · 양자 통신 기술 협력.', meta: '정부 출연연', status: 'READY', to: '/partners#gov' },
  { initial: 'K', name: '한국전기연구원 (KERI)', tag: '에너지 AI', strong: 'AI 기반 스마트 그리드', desc: ' 및 신재생 에너지 최적화. 차세대 에너지 AI 공동 연구.', meta: '에너지 AI', status: 'READY', to: '/partners#gov' },
]

const FACULTY = [
  { icon: 'fa-star', name: '초대 원장', area: '연구원장', lab: '융합 AI 연구실', id: 'PI-00' },
  { icon: 'fa-atom', name: '옥종목 교수', area: '양자 AI · 물리학과', lab: '47억 사업 PI', id: 'PI-01' },
  { icon: 'fa-shield-halved', name: '김호원 교수', area: 'Physical AI 보안', lab: 'S3Lab · ITRC', id: 'PI-02' },
  { icon: 'fa-flask-vial', name: '권선영 교수', area: '신약 AI · GNN', lab: 'AI Bio Lab', id: 'PI-03' },
  { icon: 'fa-eye', name: '전상률 교수', area: 'CV · 생성형 AI', lab: 'PNUCVLAB', id: 'PI-04' },
  { icon: 'fa-gears', name: '류광렬 교수', area: '제조 AI · DS', lab: 'DS 대학원장', id: 'PI-05' },
]

const NOTICES = [
  { icon: 'fa-user-plus', title: '박사후연구원 채용 (2명)', tag: '채용', date: '2026.05.25 · 마감 6.30', lvl: 'INFO', lvlc: 'info' },
  { icon: 'fa-bullhorn', title: '2026년 연구비 집행 지침 개정 안내', date: '2026.05.22', lvl: 'INFO', lvlc: 'info' },
  { icon: 'fa-calendar', title: 'AI 비전 세미나 — Stanford AI Lab 연사', date: '2026.06.05 · IT관 세미나실 101', lvl: 'WARN', lvlc: 'warn' },
  { icon: 'fa-handshake', title: '산학협력 기술 발표회', date: '2026.06.12 · 대학본부 국제회의실', lvl: 'WARN', lvlc: 'warn' },
  { icon: 'fa-trophy', title: 'CVPR 2026 박진선 교수팀 논문 채택', date: '2026.05.18 · VLM 분야', lvl: 'OK', lvlc: 'ok' },
  { icon: 'fa-file-alt', title: '개원 5개월 성과 보고서 공개', date: '2026.05.15', lvl: 'INFO', lvlc: 'info' },
]

export default function DashMission() {
  const root = useRef(null)
  const [navOpen, setNavOpen] = useState(false)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let move = null
    let hoverCleanups = []

    const ctx = gsap.context(() => {
      if (reduce) return

      gsap.from('.dm-topbar', { y: -24, autoAlpha: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dm-sb-item', { x: -18, autoAlpha: 0, duration: 0.36, ease: 'power3.out', stagger: 0.05, delay: 0.1, clearProps: 'transform' })
      gsap.from('.dm-kpi', { y: 24, autoAlpha: 0, duration: 0.42, ease: 'power3.out', stagger: 0.07, delay: 0.18, clearProps: 'transform' })
      gsap.from('.dm-ct', { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out', delay: 0.26, clearProps: 'transform' })

      gsap.utils.toArray('.dm-kpi-num').forEach((numEl) => {
        const target = parseFloat(numEl.dataset.target) || 0
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 1.6, ease: 'power2.out', delay: 0.5,
          onUpdate: () => { numEl.textContent = Math.round(obj.v).toLocaleString('en-US') },
        })
      })

      gsap.utils.toArray('.dm-kpi-gauge-fill').forEach((g) => {
        const w = parseFloat(g.dataset.load) || 0
        gsap.fromTo(g, { scaleX: 0 }, { scaleX: w / 100, duration: 1.2, ease: 'power2.out', delay: 0.6, transformOrigin: 'left center' })
      })

      gsap.utils.toArray('.dm-tlmline').forEach((line) => {
        gsap.fromTo(line, { scaleX: 0 }, {
          scaleX: 1, duration: 0.7, ease: 'power2.out', transformOrigin: 'left center',
          scrollTrigger: { trigger: line, start: 'top 90%', once: true },
        })
      })

      gsap.utils.toArray('.dm-reveal').forEach((node) => {
        gsap.from(node, {
          y: 32, autoAlpha: 0, duration: 0.55, ease: 'power2.out', clearProps: 'transform',
          scrollTrigger: { trigger: node, start: 'top 88%', once: true },
        })
      })

      if (!window.matchMedia('(pointer: coarse)').matches) {
        const cursor = el.querySelector('.dm-cursor')
        if (cursor) {
          gsap.set(cursor, { xPercent: -50, yPercent: -50 })
          const xTo = gsap.quickTo(cursor, 'x', { duration: 0.12, ease: 'power3' })
          const yTo = gsap.quickTo(cursor, 'y', { duration: 0.12, ease: 'power3' })
          move = (e) => { xTo(e.clientX); yTo(e.clientY) }
          window.addEventListener('pointermove', move, { passive: true })
          const grow = () => gsap.to(cursor, { scale: 1.6, duration: 0.2, ease: 'power2.out' })
          const shrink = () => gsap.to(cursor, { scale: 1, duration: 0.2, ease: 'power2.out' })
          el.querySelectorAll('a, button, .dm-hover').forEach((n) => {
            n.addEventListener('mouseenter', grow)
            n.addEventListener('mouseleave', shrink)
            hoverCleanups.push(() => { n.removeEventListener('mouseenter', grow); n.removeEventListener('mouseleave', shrink) })
          })
        }
      }

      ScrollTrigger.refresh()
    }, el)

    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => {
      clearTimeout(t)
      if (move) window.removeEventListener('pointermove', move)
      hoverCleanups.forEach((fn) => fn())
      ctx.revert()
    }
  }, [])

  const timeStr = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const dateStr = now.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })

  return (
    <div className="dm" ref={root}>
      <div className="dm-gridbg" aria-hidden="true" />
      <div className="dm-vignette" aria-hidden="true" />
      <div className="dm-scanlines" aria-hidden="true" />
      <div className="dm-cursor" aria-hidden="true" />

      <aside className={`dm-sidebar${navOpen ? ' open' : ''}`}>
        <div className="dm-sb-brand">
          <img src="/assets/pnu-symbol-color.jpg" alt="PNU" className="dm-sb-logo" onError={hide} />
          <div>
            <div className="dm-sb-b1">장영실 AI</div>
            <div className="dm-sb-b2">융합연구원</div>
          </div>
        </div>
        <div className="dm-sb-coord">LAT 35.233 · LON 129.082 · IT관</div>
        <div className="dm-sb-label">// OPS_NAV</div>
        <nav className="dm-sb-nav">
          {NAV.map((n) => (
            <Link key={n.code} to={n.to} className="dm-sb-item" onClick={() => setNavOpen(false)}>
              <span className="dm-sb-code">[{n.code}]</span>
              <span className="dm-sb-ic"><i className={`fas ${n.icon}`} /></span>
              <span className="dm-sb-lb">{n.label}</span>
              <span className={`dm-led ${n.led}`} />
            </Link>
          ))}
        </nav>
        <div className="dm-sb-readout">
          <div className="dm-sb-ro-label">// SYS_READOUT</div>
          <div className="dm-sb-ro-row"><span className="k">SYS</span><span className="v">OK · NOMINAL</span></div>
          <div className="dm-sb-ro-row"><span className="k">GPU</span><span className="v amber">303/800 · 38%</span></div>
          <div className="dm-sb-ro-row"><span className="k">FAC</span><span className="v">IT관 · 13,161㎡</span></div>
          <div className="dm-sb-ro-row"><span className="k">VER</span><span className="v">2025.12.30 · v1.0</span></div>
        </div>
        <div className="dm-sb-foot">
          <span className="dm-sb-status"><span className="dm-led on" /> OPERATIONAL</span>
          <span className="dm-sb-stamp">蔣</span>
        </div>
      </aside>
      <div className={`dm-scrim${navOpen ? ' open' : ''}`} onClick={() => setNavOpen(false)} aria-hidden="true" />

      <header className="dm-topbar">
        <button className="dm-burger" aria-label="메뉴" onClick={() => setNavOpen((v) => !v)}>
          <i className="fas fa-bars" />
        </button>
        <div className="dm-tb-left">
          <div className="dm-tb-status"><span className="dm-led on" /> AIRCI · OPS // SYS_OK</div>
          <div className="dm-tb-crumb">JANG YEONG-SIL · AIRC <b>/</b> MISSION_CONTROL</div>
          <div className="dm-tb-tagline">동남권 AI 융합연구 컨트롤타워 · 교학부총장 산하 전담기구 · IT관 (13,161㎡)</div>
        </div>
        <div className="dm-tb-tickers">
          <span className="dm-tb-tick">GPU_LOAD <b>38%</b></span>
          <span className="dm-tb-tick g">센터 <b>3/3</b> OPS</span>
          <span className="dm-tb-tick">UPLINK <b>●</b></span>
        </div>
        <div className="dm-tb-right">
          <div className="dm-tb-clock">
            <div className="dm-tb-time">{timeStr}</div>
            <div className="dm-tb-date">{dateStr}</div>
          </div>
          <Link to="/news?cat=publication" className="dm-tb-btn"><i className="fas fa-file-alt" /> 논문 검색</Link>
          <Link to="/research" className="dm-tb-btn"><i className="fas fa-file-pdf" /> 백서</Link>
          <Link to="/partners#contact" className="dm-tb-btn solid"><i className="fas fa-handshake" /> 연구 협력 신청</Link>
        </div>
      </header>

      <main className="dm-main">
        <section className="dm-sec">
          <div className="dm-sec-head">
            <span className="dm-sec-tag">// 01_METRICS</span>
            <div className="dm-sec-titles">
              <h2 className="dm-sec-title">핵심 지표 <em>Overview</em></h2>
              <span className="dm-sec-sub">REAL-TIME · 2025.12.30 개원 기준</span>
            </div>
            <span className="dm-sec-live"><span className="dm-led on" /> LIVE</span>
          </div>
          <div className="dm-kpi-row">
            {KPIS.map((k) => (
              <div key={k.label} className="dm-kpi dm-reveal">
                <span className="dm-kpi-corner" />
                <div className="dm-kpi-top">
                  <div className="dm-kpi-ic"><i className={`fas ${k.icon}`} /></div>
                  <span className={`dm-kpi-badge ${k.status.toLowerCase()}`}>{k.status}</span>
                </div>
                <div className="dm-kpi-figure">
                  <span className="dm-kpi-num" data-target={k.target}>0</span>
                  <span className="dm-kpi-unit">{k.unit}</span>
                </div>
                <div className="dm-kpi-lbl">{k.label}</div>
                <div className="dm-kpi-trend"><i className="fas fa-circle" /> {k.trend}</div>
                {k.load > 0 && (
                  <div className="dm-kpi-gauge"><span className="dm-kpi-gauge-fill" data-load={k.load} /></div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="dm-sec">
          <div className="dm-sec-head">
            <span className="dm-sec-tag">// 02_CONTROL_TOWER</span>
            <div className="dm-sec-titles">
              <h2 className="dm-sec-title">동남권 AI 융합연구 <em>컨트롤타워</em></h2>
              <span className="dm-sec-sub">지·산·학·연 일체형 거점 · 2025.12.30 출범</span>
            </div>
          </div>
          <div className="dm-ct dm-reveal">
            <img src="/assets/img/lab-research.jpg" alt="융합연구" className="dm-ct-img" onError={hide} />
            <div className="dm-ct-grad" />
            <div className="dm-ct-grid" />
            <div className="dm-ct-content">
              <div className="dm-ct-main">
                <div className="dm-ct-badge"><span className="dm-led on" /> 동남권 지·산·학·연 일체형 거점 · 2025.12.30 출범</div>
                <h2 className="dm-ct-title">동남권 AI 융합연구<br /><em>컨트롤타워</em></h2>
                <p className="dm-ct-desc">장영실 AI 융합연구원은 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 프로젝트 연구센터를 중심으로 앵커기업과 함께 AI 기반 융합연구를 선도합니다. GPU 303장 이상의 PNU-AXIS 인프라와 10,067㎡ AI Innovation Hub Space로 동남권 산업 혁신을 지원합니다.</p>
                <div className="dm-ct-tags">
                  <span className="dm-ct-tag"><i className="fas fa-ship" /> 조선·구조 AI (삼성중공업)</span>
                  <span className="dm-ct-tag"><i className="fas fa-heart-pulse" /> 헬스케어 AI (은성의료재단)</span>
                  <span className="dm-ct-tag"><i className="fas fa-industry" /> 소재·재료 AI (KIMS)</span>
                  <span className="dm-ct-tag"><i className="fas fa-microchip" /> PNU-AXIS GPU 303+장</span>
                </div>
              </div>
              <div className="dm-ct-stats">
                <div className="dm-ct-stat">
                  <div className="dm-ct-stat-ic"><i className="fas fa-microchip" /></div>
                  <div><div className="dm-ct-stat-n">303+ GPU</div><div className="dm-ct-stat-l">PNU-AXIS 현재 보유 (목표 800장)</div></div>
                </div>
                <div className="dm-ct-stat">
                  <div className="dm-ct-stat-ic"><i className="fas fa-building" /></div>
                  <div><div className="dm-ct-stat-n">10,067㎡</div><div className="dm-ct-stat-l">AI Innovation Hub Space</div></div>
                </div>
                <div className="dm-ct-stat">
                  <div className="dm-ct-stat-ic"><i className="fas fa-industry" /></div>
                  <div><div className="dm-ct-stat-n">개원 협약 3건</div><div className="dm-ct-stat-l">삼성중공업·은성의료재단·KIMS</div></div>
                </div>
                <div className="dm-ct-stat">
                  <div className="dm-ct-stat-ic"><i className="fas fa-graduation-cap" /></div>
                  <div><div className="dm-ct-stat-n">AX 프로젝트 석사</div><div className="dm-ct-stat-l">산학 공동 지도교수제 운영</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dm-sec">
          <div className="dm-sec-head">
            <span className="dm-sec-tag">// 03_VISION_ACTS</span>
            <div className="dm-sec-titles">
              <h2 className="dm-sec-title">ACTS 비전 체계 <em>Vision 2030</em></h2>
              <span className="dm-sec-sub">4-PILLAR STRATEGIC FRAMEWORK</span>
            </div>
          </div>
          <div className="dm-grid-2">
            <div className="dm-panel dm-reveal">
              <div className="dm-panel-head">
                <div className="dm-panel-title"><span className="dm-panel-ic"><i className="fas fa-compass" /></span> ACTS 비전 체계</div>
                <Link to="/about#vision" className="dm-panel-more">상세 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dm-panel-body">
                <div className="dm-acts-grid">
                  {ACTS.map((a) => (
                    <div key={a.l} className="dm-act">
                      <div className="dm-act-top">
                        <div className="dm-act-letter">{a.l}</div>
                        <span className={`dm-act-st${a.status === 'STANDBY' ? ' sb' : ''}`}>{a.status}</span>
                      </div>
                      <div className="dm-act-name">{a.name}</div>
                      <div className="dm-act-ko">{a.ko}</div>
                      <div className="dm-act-desc">{a.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dm-panel dm-reveal">
              <div className="dm-panel-head">
                <div className="dm-panel-title"><span className="dm-panel-ic g"><i className="fas fa-user-tie" /></span> 원장 메시지</div>
              </div>
              <div className="dm-panel-body">
                <div className="dm-dir">
                  <div className="dm-dir-av">院</div>
                  <div>
                    <div className="dm-dir-name">초대 원장 <small>Founding Director</small></div>
                    <div className="dm-dir-pos">장영실AI융합연구원 · 2025.12.30 출범</div>
                    <div className="dm-dir-quote">"장영실 선생이 노비 출신에서 조선 최고 과학자로 성장했듯, 우리 연구원도 출신과 무관하게 인재가 모이는 개방형 플랫폼이 되어 AI 융합과학의 주권을 선도하겠습니다."</div>
                    <div className="dm-dir-meta">2025.12.30 · 개원사 中</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dm-sec">
          <div className="dm-sec-head">
            <span className="dm-sec-tag">// 04_HERITAGE_LOG</span>
            <div className="dm-sec-titles">
              <h2 className="dm-sec-title"><span className="hanja">蔣英實</span> 헤리티지 매핑 <em>15C → 21C</em></h2>
              <span className="dm-sec-sub">TELEMETRY LOG · 4 INVENTIONS ↔ 4 AI CENTERS</span>
            </div>
            <Link to="/heritage" className="dm-panel-more">더보기 <i className="fas fa-arrow-right" /></Link>
          </div>
          <div className="dm-tlmline dm-reveal" />
          <div className="dm-hgrid">
            {HERITAGE.map((h) => (
              <div className="dm-hpair dm-reveal" key={h.han}>
                <div className="dm-hcell past">
                  <div className="dm-hmark">
                    <span className="dm-hcirc">{h.han}</span>
                    <span className="dm-htag">{h.year} · {h.tag}</span>
                  </div>
                  <div className="dm-hicon"><i className={`fas ${h.invIcon}`} /></div>
                  <div className="dm-hname">{h.inv} <span className="dm-hhanja">({h.hanja})</span></div>
                  <div className="dm-hdesc">{h.desc}</div>
                </div>
                <div className="dm-harrow"><i className="fas fa-arrow-right-long" /></div>
                <div className="dm-hcell now">
                  <div className="dm-hmark">
                    <span className="dm-hcirc alpha">{h.mark}</span>
                    <span className="dm-htag">{h.now}</span>
                  </div>
                  <div className="dm-hicon"><i className={`fas ${h.nowIcon}`} /></div>
                  <div className="dm-hname">{h.nowName}</div>
                  <div className="dm-hdesc">{h.nowDesc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dm-sec">
          <div className="dm-sec-head">
            <span className="dm-sec-tag">// 05_RESEARCH_CENTERS</span>
            <div className="dm-sec-titles">
              <h2 className="dm-sec-title">3개 프로젝트 연구센터 <em>+ 인프라</em></h2>
              <span className="dm-sec-sub">3 CENTERS · PNU-AXIS · HUB SPACE</span>
            </div>
          </div>
          <div className="dm-grid-2">
            <div className="dm-panel dm-reveal">
              <div className="dm-panel-head">
                <div className="dm-panel-title"><span className="dm-panel-ic"><i className="fas fa-microscope" /></span> 연구센터 현황</div>
                <Link to="/research" className="dm-panel-more">상세 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dm-panel-body" style={{ padding: '12px' }}>
                <div className="dm-rb">
                  {CENTERS.map((c) => (
                    <div key={c.title} className={`dm-rb-card ${c.cls}`}>
                      <img src={c.img} alt={c.title} className="dm-rb-img" onError={hide} />
                      <div className="dm-rb-inner">
                        <div className="dm-rb-tag">{c.tag}</div>
                        <div className="dm-rb-title">{c.title}</div>
                        <div className="dm-rb-desc">{c.desc}</div>
                        {c.stats && (
                          <div className="dm-rb-stats">
                            {c.stats.map((s) => (
                              <div className="dm-rb-stat" key={s.l}><div className="n">{s.n}<span>{s.u}</span></div><div className="l">{s.l}</div></div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="dm-panel dm-reveal">
              <div className="dm-panel-head">
                <div className="dm-panel-title"><span className="dm-panel-ic g"><i className="fas fa-table-list" /></span> 주요 추진 과제</div>
                <Link to="/research" className="dm-panel-more">상세 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dm-panel-body" style={{ padding: '0' }}>
                <table className="dm-tlm">
                  <thead>
                    <tr><th>CODE</th><th>과제·활동</th><th>센터</th><th>상태</th></tr>
                  </thead>
                  <tbody>
                    {PROJECTS.map((p) => (
                      <tr key={p.code}>
                        <td><span className="dm-tlm-code">{p.code}</span></td>
                        <td><span className="dm-tlm-name">{p.name}</span></td>
                        <td><span className={`dm-tlm-tag ${p.tone}`}>{p.tag}</span></td>
                        <td><span className={`dm-tlm-status ${p.status.toLowerCase()}`}><span className={`dm-led ${p.status === 'OPS' ? 'on' : 'amber'}`} />{p.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="dm-sec">
          <div className="dm-sec-head">
            <span className="dm-sec-tag">// 06_PARTNERS</span>
            <div className="dm-sec-titles">
              <h2 className="dm-sec-title">전략 협력 기관 <em>개원 3 + 글로벌 3</em></h2>
              <span className="dm-sec-sub">STRATEGIC ALLIANCE NETWORK</span>
            </div>
            <Link to="/partners" className="dm-panel-more">전체 보기 <i className="fas fa-arrow-right" /></Link>
          </div>
          <div className="dm-tlmline dm-reveal" />
          <div className="dm-partner-grid">
            {PARTNERS.map((p) => (
              <Link key={p.name} to={p.to} className="dm-partner dm-reveal">
                <div className="dm-partner-top">
                  <div className="dm-partner-logo">{p.initial}</div>
                  <div>
                    <div className="dm-partner-name">{p.name}</div>
                    <div className="dm-partner-tag">{p.tag}</div>
                  </div>
                  <span className={`dm-partner-st ${p.status.toLowerCase()}`}>{p.status}</span>
                </div>
                <div className="dm-partner-desc"><strong>{p.strong}</strong>{p.desc}</div>
                <div className="dm-partner-meta"><i className="fas fa-circle" /> {p.meta}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="dm-sec">
          <div className="dm-sec-head">
            <span className="dm-sec-tag">// 07_IT_FACILITY</span>
            <div className="dm-sec-titles">
              <h2 className="dm-sec-title">IT 관 · 본부 거점 <em>국립대 BTL 최대 규모</em></h2>
              <span className="dm-sec-sub">FACILITY · 2025.12.16 준공 · 2025.12.30 개원</span>
            </div>
          </div>
          <div className="dm-it dm-reveal">
            <div className="dm-it-grid">
              <div className="dm-it-text">
                <div className="dm-it-badge"><i className="fas fa-building" /> IT 관 · 본부 거점</div>
                <div className="dm-it-title">국립대학 BTL <em>최대 규모</em><br />IT관에서 시작됩니다</div>
                <div className="dm-it-desc">2025년 12월 16일 준공된 부산대학교 IT관은 장영실 AI 융합연구원의 본부이자 부산대 AI 거점 사업의 물리적 거점입니다. 친환경 시설(100% LED · 태양광 · 지열 · BEMS).</div>
                <div className="dm-it-stats">
                  <div className="dm-it-stat">
                    <div className="dm-it-tag">총 사업비</div>
                    <div className="dm-it-n">267<span>억원</span></div>
                    <div className="dm-it-d">국립대 BTL 최대 규모</div>
                  </div>
                  <div className="dm-it-stat">
                    <div className="dm-it-tag">연면적</div>
                    <div className="dm-it-n">13,161<span>㎡</span></div>
                    <div className="dm-it-d">지하 1층 · 지상 10층</div>
                  </div>
                  <div className="dm-it-stat">
                    <div className="dm-it-tag">준공</div>
                    <div className="dm-it-n">2025<span>.12.16</span></div>
                    <div className="dm-it-d">개원식 12.30</div>
                  </div>
                  <div className="dm-it-stat">
                    <div className="dm-it-tag">친환경</div>
                    <div className="dm-it-n">LED<span> + 태양광</span></div>
                    <div className="dm-it-d">100% · BEMS 적용</div>
                  </div>
                </div>
              </div>
              <div className="dm-it-image">
                <img src="/assets/img/it-building.jpg" alt="IT관" onError={hide} />
                <div className="dm-it-img-grad" />
              </div>
            </div>
          </div>
        </section>

        <section className="dm-sec">
          <div className="dm-sec-head">
            <span className="dm-sec-tag">// 08_CREW_LOG</span>
            <div className="dm-sec-titles">
              <h2 className="dm-sec-title">핵심 연구원 <em>+ 알림</em></h2>
              <span className="dm-sec-sub">CREW MANIFEST · OPS LOG</span>
            </div>
          </div>
          <div className="dm-grid-2">
            <div className="dm-panel dm-reveal">
              <div className="dm-panel-head">
                <div className="dm-panel-title"><span className="dm-panel-ic"><i className="fas fa-user-tie" /></span> 핵심 연구원</div>
                <Link to="/about#org" className="dm-panel-more">조직 전체 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dm-panel-body">
                <div className="dm-fac-grid">
                  {FACULTY.map((f) => (
                    <div key={f.id} className="dm-fac">
                      <div className="dm-fac-av"><i className={`fas ${f.icon}`} /></div>
                      <div>
                        <div className="dm-fac-name">{f.name}<span className="dm-fac-id">{f.id}</span></div>
                        <div className="dm-fac-area">{f.area}</div>
                        <div className="dm-fac-lab">{f.lab}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="dm-panel dm-reveal">
              <div className="dm-panel-head">
                <div className="dm-panel-title"><span className="dm-panel-ic g"><i className="fas fa-bell" /></span> 알림</div>
                <Link to="/news" className="dm-panel-more">전체 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dm-panel-body" style={{ padding: '6px 10px' }}>
                <div className="dm-log">
                  {NOTICES.map((n) => (
                    <div key={n.title} className="dm-log-item">
                      <div className={`dm-log-ic${n.lvlc === 'ok' ? ' g' : ''}`}><i className={`fas ${n.icon}`} /></div>
                      <div className="dm-log-body">
                        <div className="dm-log-title">{n.title}{n.tag && <span className="dm-log-tag">{n.tag}</span>}</div>
                        <div className="dm-log-date">{n.date}</div>
                      </div>
                      <span className={`dm-log-lvl ${n.lvlc}`}>{n.lvl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="dm-footer">
          <div className="dm-footer-big">JANG YEONG-SIL <em>AIRC</em></div>
          <div className="dm-footer-info">
            <p>© 2026 장영실 AI 융합연구원 · 부산대학교<br />부산광역시 금정구 부산대학로 63번길 2 · IT관 1층<br />airc@pusan.ac.kr · 051-510-0000</p>
            <span className="dm-footer-mono">DASH · MISSION_CONTROL / OPS PHOSPHOR</span>
          </div>
        </footer>
      </main>

      <nav className="dm-pillnav" aria-label="대시보드 전환">
        <Link to="/home" className="dm-pill"><i className="fas fa-arrow-left" /> 원본</Link>
        <span className="dm-pill-sep" />
        <Link to="/dash" className="dm-pill on"><i className="fas fa-th-large" /> 목록</Link>
      </nav>
    </div>
  )
}
