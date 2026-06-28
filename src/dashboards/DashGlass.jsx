import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/dashboard-glass.css'

gsap.registerPlugin(ScrollTrigger)

const hide = (e) => { e.currentTarget.style.display = 'none' }

const NAV = [
  { icon: 'fa-gauge-high', label: '대시보드', to: '/dash' },
  { icon: 'fa-compass', label: 'ACTS 비전', to: '/about#vision' },
  { icon: 'fa-microscope', label: '연구센터', to: '/research' },
  { icon: 'fa-scroll', label: '헤리티지', to: '/heritage' },
  { icon: 'fa-handshake', label: '파트너스', to: '/partners' },
  { icon: 'fa-newspaper', label: '알림', to: '/news' },
  { icon: 'fa-building', label: 'IT관', to: '/about#it' },
]

const KPIS = [
  { icon: 'fa-flask', tone: 'cyan', target: 3, unit: '개', label: '프로젝트 연구센터', trend: '앵커기업 중심', trendIcon: 'fa-star' },
  { icon: 'fa-handshake', tone: 'emerald', target: 3, unit: '건', label: '개원 동시 산학 협약', trend: '2025.12.30', trendIcon: 'fa-star' },
  { icon: 'fa-microchip', tone: 'amber', target: 303, unit: '+장', label: 'GPU 현재 보유', trend: '800장 확보 목표', trendIcon: 'fa-arrow-trend-up' },
  { icon: 'fa-building', tone: 'violet', target: 10067, unit: '㎡', label: 'AI Innovation Hub Space', trend: '5개 캠퍼스 공간', trendIcon: 'fa-star' },
  { icon: 'fa-graduation-cap', tone: 'rose', target: 80, unit: '명', label: 'AX 프로젝트 석사 배출 목표', trend: '5년 KPI', trendIcon: 'fa-star' },
]

const ACTS = [
  { l: 'A', name: 'Acceleration', ko: '산업화 가속', desc: 'AI 산업화 허브로서 연구 성과를 산업 현장으로 직접 이전합니다.', tone: 'cyan' },
  { l: 'C', name: 'Core', ko: '기초과학 강화', desc: 'AI 핵심기술 개발 및 양자·신경과학 등 기초 강화.', tone: 'emerald' },
  { l: 'T', name: 'Transformation', ko: '산업 혁신', desc: '해양·제조·의료·에너지 국가 전략산업의 AI 전환.', tone: 'amber' },
  { l: 'S', name: 'Superiority', ko: '경쟁 우위', desc: '차세대 주권기술 개발 · 국가 경쟁우위 확보.', tone: 'violet' },
]

const HERITAGE = [
  { han: '壹', year: '1433', tag: '過去', invIcon: 'fa-meteor', inv: '혼천의', hanja: '渾天儀', desc: '한국 최초 자동 천구의. 우주의 운행을 한 자리에서 관측.', mark: 'A', now: '2025 · 現在', nowIcon: 'fa-ship', nowName: '조선·구조 AI센터', nowDesc: 'AI 구조 최적화 알고리즘 개발 · 앵커기업: 삼성중공업' },
  { han: '貳', year: '1441', tag: '過去', invIcon: 'fa-droplet', inv: '측우기 · 수표', hanja: '測雨器·水標', desc: '세계 최초 우량계 · 수위계. 농업용 수자원의 데이터 표준화.', mark: 'B', now: '2025 · 現在', nowIcon: 'fa-heart-pulse', nowName: '헬스케어 AI센터', nowDesc: 'AI 솔루션 과제 발굴 · 헬스케어 AX 특화 · 앵커기업: 은성의료재단' },
  { han: '參', year: '1434', tag: '過去', invIcon: 'fa-hourglass-half', inv: '자격루', hanja: '自擊漏', desc: '한국 최초 자동 시계. 생명의 시간성을 인공 시스템에.', mark: 'C', now: '2025 · 現在', nowIcon: 'fa-industry', nowName: '소재·재료 AI센터', nowDesc: 'RISE 산학공동연구 추진 · 소재 분야 AX 특화 · 앵커기관: 한국재료연구원' },
  { han: '肆', year: '1434', tag: '過去', invIcon: 'fa-stamp', inv: '갑인자', hanja: '甲寅字', desc: '개량 금속 활자. 지식의 대량 생산·확산을 가능케 한 소재.', mark: 'D', now: '2025 → 2030', nowIcon: 'fa-circle-nodes', nowName: 'PNU AI Context · E&E Center', nowDesc: 'Sovereign AI Ontology 연구 · AI 교육·윤리 모듈 (전략 특화 센터 확장 계획)' },
]

const CENTERS = [
  { img: '/assets/img/marine-ai.jpg', cls: 'dg-rb-feature', tagIcon: 'fa-star', tag: '앵커기업: 삼성중공업', title: '조선·구조 AI센터', desc: 'AI 구조 최적화 알고리즘 개발 · 조선 특화 교과목 5개 개설 · 취업역량 강화 세미나·컨퍼런스 4회 · 삼성중공업 취업 연계 트랙 운영', stats: [{ n: '5', u: '개', l: '특화 교과목' }, { n: '4', u: '회', l: '세미나·컨퍼런스' }] },
  { img: '/assets/img/medical-ai.jpg', cls: 'dg-rb-med', tagIcon: 'fa-handshake', tag: '앵커기업: 은성의료재단', title: '헬스케어 AI센터', desc: 'AI 솔루션 과제 발굴 협의 3회 · 양산캠퍼스 연계' },
  { img: '/assets/img/mfg-ai.jpg', cls: 'dg-rb-mfg', tagIcon: 'fa-handshake', tag: '앵커기관: 한국재료연구원', title: '소재·재료 AI센터', desc: 'RISE 산학공동연구 과제 추진 · 소재 분야 AX 특화 과제 발굴' },
  { img: '/assets/img/quantum.jpg', cls: 'dg-rb-gpu', tagIcon: 'fa-microchip', tag: 'PNU-AXIS 인프라', title: 'AI 컴퓨팅 인프라', desc: '현재 GPU 303장+ · 목표 800장·500억 · 데이터센터 2MW' },
  { img: '/assets/img/college-ai.jpg', cls: 'dg-rb-hub', tagIcon: 'fa-building', tag: 'AI Innovation Hub Space', title: '10,067㎡ 거점 공간', desc: '5개 전용 공간 · 부산·양산캠퍼스' },
]

const PROJECTS = [
  { name: 'AI 구조 최적화 알고리즘 개발', tag: '조선·구조', tone: 'b', status: '운영', dot: 'emerald' },
  { name: '조선 특화 교과목 5개 개설', tag: '조선·구조', tone: 'b', status: '운영', dot: 'emerald' },
  { name: '협력기업 재직자 AX 교육 (2회)', tag: '조선·구조', tone: 'b', status: '운영', dot: 'emerald' },
  { name: 'AI 솔루션 과제 발굴 협의 (3회)', tag: '헬스케어', tone: 'm', status: '운영', dot: 'emerald' },
  { name: '헬스케어 AX 특화 과제 기반 확보', tag: '헬스케어', tone: 'm', status: '운영', dot: 'emerald' },
  { name: 'RISE 산학공동연구 과제 추진', tag: '소재·재료', tone: 's', status: '준비', dot: 'amber' },
  { name: '소재 분야 AX 특화 과제 발굴', tag: '소재·재료', tone: 's', status: '준비', dot: 'amber' },
]

const PARTNERS = [
  { initial: 'S', tone: 'cyan', name: '삼성중공업', tag: '2025.12.30 · MOU', strong: 'AI 연구협력센터', desc: '를 교내 공동 설치. 조선·해양 AI 공동 연구 및 데이터 분석.', meta: '해양 AI · 양 기관 공동 예산', metaIcon: 'fa-flask', to: '/partners#founding' },
  { initial: '은', tone: 'emerald', name: '은성의료재단', tag: '2025.12.30 · MOU', strong: 'AX 헬스케어센터', desc: '를 양 기관 공동 설치. 의료 AI · 에이지테크 공동 연구.', meta: '의료 AI · 에이지테크', metaIcon: 'fa-flask', to: '/partners#founding' },
  { initial: 'K', tone: 'violet', name: '한국재료연구원 (KIMS)', tag: '2025.12.30 · MOU', strong: 'PNU 연구협력센터', desc: ' 공동 설치. 초거대 첨단 제조 AI · 소재 AI 융합 연구.', meta: '소재·제조 AI', metaIcon: 'fa-flask', to: '/partners#founding' },
  { initial: 'St', tone: 'cyan', name: 'Stanford University', tag: '연구 협력 · 진행중', strong: 'AI 융합 공동 연구', desc: ' 협력 중. 스탠퍼드 AI Lab과 학술 교류.', meta: '글로벌 · 학술 협력', metaIcon: 'fa-globe', to: '/partners#global' },
  { initial: 'E', tone: 'emerald', name: 'ETRI', tag: '한국전자통신연구원', strong: '한국어 NLP 모델 공동 연구', desc: ' · AI 응용 기술 협력 · 양자 통신 기술 협력.', meta: '정부 출연연', metaIcon: 'fa-landmark', to: '/partners#gov' },
  { initial: 'K', tone: 'violet', name: '한국전기연구원 (KERI)', tag: '에너지 AI', strong: 'AI 기반 스마트 그리드', desc: ' 및 신재생 에너지 최적화. 차세대 에너지 AI 공동 연구.', meta: '에너지 AI', metaIcon: 'fa-bolt', to: '/partners#gov' },
]

const FACULTY = [
  { icon: 'fa-star', name: '초대 원장', area: '연구원장', lab: '융합 AI 연구실', tone: 'cyan' },
  { icon: 'fa-atom', name: '옥종목 교수', area: '양자 AI · 물리학과', lab: '47억 사업 PI', tone: 'violet' },
  { icon: 'fa-shield-halved', name: '김호원 교수', area: 'Physical AI 보안', lab: 'S3Lab · ITRC', tone: 'emerald' },
  { icon: 'fa-flask-vial', name: '권선영 교수', area: '신약 AI · GNN', lab: 'AI Bio Lab', tone: 'rose' },
  { icon: 'fa-eye', name: '전상률 교수', area: 'CV · 생성형 AI', lab: 'PNUCVLAB', tone: 'amber' },
  { icon: 'fa-gears', name: '류광렬 교수', area: '제조 AI · DS', lab: 'DS 대학원장', tone: 'cyan' },
]

const NOTICES = [
  { icon: 'fa-user-plus', tone: 'emerald', title: '박사후연구원 채용 (2명)', tag: '채용', date: '2026.05.25 · 마감 6.30' },
  { icon: 'fa-bullhorn', tone: 'cyan', title: '2026년 연구비 집행 지침 개정 안내', date: '2026.05.22' },
  { icon: 'fa-calendar', tone: 'violet', title: 'AI 비전 세미나 — Stanford AI Lab 연사', date: '2026.06.05 · IT관 세미나실 101' },
  { icon: 'fa-handshake', tone: 'amber', title: '산학협력 기술 발표회', date: '2026.06.12 · 대학본부 국제회의실' },
  { icon: 'fa-trophy', tone: 'emerald', title: 'CVPR 2026 박진선 교수팀 논문 채택', date: '2026.05.18 · VLM 분야' },
  { icon: 'fa-file-alt', tone: 'cyan', title: '개원 5개월 성과 보고서 공개', date: '2026.05.15' },
]

export default function DashGlass() {
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

      // aurora drift
      gsap.to('.dg-orb.a', { x: 140, y: 90, duration: 15, ease: 'sine.inOut', repeat: -1, yoyo: true })
      gsap.to('.dg-orb.b', { x: -120, y: -130, duration: 19, ease: 'sine.inOut', repeat: -1, yoyo: true })
      gsap.to('.dg-orb.c', { x: 100, y: -100, duration: 17, ease: 'sine.inOut', repeat: -1, yoyo: true })

      // page-load reveals
      gsap.from('.dg-topbar', { y: -28, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dg-side-item', { x: -22, autoAlpha: 0, duration: 0.42, ease: 'power3.out', stagger: 0.06, delay: 0.12, clearProps: 'transform' })
      gsap.from('.dg-kpi', { y: 30, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08, delay: 0.22, clearProps: 'transform' })
      gsap.from('.dg-hero', { y: 36, autoAlpha: 0, duration: 0.7, ease: 'power3.out', delay: 0.3, clearProps: 'transform' })

      // KPI counters
      gsap.utils.toArray('.dg-kpi-num').forEach((numEl) => {
        const target = parseFloat(numEl.dataset.target) || 0
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 1.7, ease: 'power2.out', delay: 0.55,
          onUpdate: () => { numEl.textContent = Math.round(obj.v).toLocaleString('en-US') },
        })
      })

      // scroll-triggered reveals
      gsap.utils.toArray('.dg-reveal').forEach((node) => {
        gsap.from(node, {
          y: 42, autoAlpha: 0, duration: 0.7, ease: 'power2.out', clearProps: 'transform',
          scrollTrigger: { trigger: node, start: 'top 88%', once: true },
        })
      })

      // custom cursor
      if (!window.matchMedia('(pointer: coarse)').matches) {
        const cursor = el.querySelector('.dg-cursor')
        if (cursor) {
          gsap.set(cursor, { xPercent: -50, yPercent: -50 })
          const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' })
          const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' })
          move = (e) => { xTo(e.clientX); yTo(e.clientY) }
          window.addEventListener('pointermove', move, { passive: true })
          const grow = () => gsap.to(cursor, { scale: 2.1, duration: 0.3, ease: 'power2.out' })
          const shrink = () => gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power2.out' })
          el.querySelectorAll('a, button, .dg-hover').forEach((n) => {
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
    <div className="dg" ref={root}>
      <div className="dg-aurora" aria-hidden="true">
        <span className="dg-orb a" />
        <span className="dg-orb b" />
        <span className="dg-orb c" />
      </div>
      <div className="dg-grain" aria-hidden="true" />
      <div className="dg-cursor" aria-hidden="true" />

      <aside className={`dg-sidebar${navOpen ? ' open' : ''}`}>
        <div className="dg-side-brand">
          <img src="/assets/pnu-symbol-color.jpg" alt="PNU" className="dg-side-logo" onError={hide} />
          <div className="dg-side-brandtxt">
            <div className="dg-side-b1">장영실 AI</div>
            <div className="dg-side-b2">융합연구원</div>
          </div>
        </div>
        <div className="dg-side-coord">LAT 35.233 · LON 129.082</div>
        <nav className="dg-side-nav">
          {NAV.map((n) => (
            <Link key={n.label} to={n.to} className="dg-side-item" onClick={() => setNavOpen(false)}>
              <span className="dg-side-ic"><i className={`fas ${n.icon}`} /></span>
              <span className="dg-side-lb">{n.label}</span>
            </Link>
          ))}
        </nav>
        <div className="dg-side-foot">
          <div className="dg-side-status"><span className="dg-dot" /> 개원 운영중</div>
          <div className="dg-side-stamp">蔣</div>
        </div>
      </aside>
      <div className={`dg-scrim${navOpen ? ' open' : ''}`} onClick={() => setNavOpen(false)} aria-hidden="true" />

      <header className="dg-topbar">
        <button className="dg-burger" aria-label="메뉴" onClick={() => setNavOpen((v) => !v)}>
          <i className="fas fa-bars" />
        </button>
        <div className="dg-tb-left">
          <div className="dg-tb-crumb">
            <span className="dg-tb-mono">JANG YEONG-SIL · AIRC</span>
            <span className="dg-tb-sep">/</span>
            <span className="dg-tb-here">대시보드</span>
          </div>
          <div className="dg-tb-tagline">동남권 AI 융합연구 컨트롤타워 · 교학부총장 산하 전담기구 · IT관 (13,161㎡)</div>
        </div>
        <div className="dg-tb-right">
          <div className="dg-tb-clock">
            <div className="dg-tb-time">{timeStr}</div>
            <div className="dg-tb-date">{dateStr}</div>
          </div>
          <Link to="/news?cat=publication" className="dg-tb-btn dg-tb-ghost"><i className="fas fa-file-alt" /> 논문 검색</Link>
          <Link to="/research" className="dg-tb-btn dg-tb-ghost"><i className="fas fa-file-pdf" /> 백서</Link>
          <Link to="/partners#contact" className="dg-tb-btn dg-tb-solid"><i className="fas fa-handshake" /> 연구 협력 신청</Link>
        </div>
      </header>

      <main className="dg-main">
        <section className="dg-sec dg-sec-kpi">
          <div className="dg-sec-head">
            <span className="dg-sec-idx">01</span>
            <div className="dg-sec-titles">
              <h2 className="dg-sec-title">핵심 지표 <em>Overview</em></h2>
              <span className="dg-sec-sub">REAL-TIME · 2025.12.30 개원 기준</span>
            </div>
            <span className="dg-live"><span className="dg-dot" /> LIVE</span>
          </div>
          <div className="dg-kpi-row">
            {KPIS.map((k) => (
              <div key={k.label} className={`dg-kpi dg-glass dg-tone-${k.tone} dg-reveal`}>
                <div className="dg-kpi-icon"><i className={`fas ${k.icon}`} /></div>
                <div className="dg-kpi-body">
                  <div className="dg-kpi-figure">
                    <span className="dg-kpi-num" data-target={k.target}>0</span>
                    <span className="dg-kpi-unit">{k.unit}</span>
                  </div>
                  <div className="dg-kpi-lbl">{k.label}</div>
                  <div className={`dg-kpi-trend tone-${k.tone}`}><i className={`fas ${k.trendIcon}`} /> {k.trend}</div>
                </div>
                <span className="dg-kpi-glow" aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="dg-hero dg-glass dg-reveal">
          <img src="/assets/img/lab-research.jpg" alt="융합연구" className="dg-hero-img" onError={hide} />
          <div className="dg-hero-grad" />
          <div className="dg-hero-grid" />
          <div className="dg-hero-content">
            <div className="dg-hero-main">
              <div className="dg-hero-badge"><span className="dg-dot" /> 동남권 지·산·학·연 일체형 거점 · 2025.12.30 출범</div>
              <h2 className="dg-hero-title">동남권 AI 융합연구<br /><em>컨트롤타워</em></h2>
              <p className="dg-hero-desc">장영실 AI 융합연구원은 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 프로젝트 연구센터를 중심으로 앵커기업과 함께 AI 기반 융합연구를 선도합니다. GPU 303장 이상의 PNU-AXIS 인프라와 10,067㎡ AI Innovation Hub Space로 동남권 산업 혁신을 지원합니다.</p>
              <div className="dg-hero-tags">
                <span className="dg-hero-tag"><i className="fas fa-ship" /> 조선·구조 AI (삼성중공업)</span>
                <span className="dg-hero-tag"><i className="fas fa-heart-pulse" /> 헬스케어 AI (은성의료재단)</span>
                <span className="dg-hero-tag"><i className="fas fa-industry" /> 소재·재료 AI (KIMS)</span>
                <span className="dg-hero-tag"><i className="fas fa-microchip" /> PNU-AXIS GPU 303+장</span>
              </div>
            </div>
            <div className="dg-hero-stats">
              <div className="dg-hero-stat">
                <div className="dg-hero-stat-ic"><i className="fas fa-microchip" /></div>
                <div><div className="dg-hero-stat-n">303+ GPU</div><div className="dg-hero-stat-l">PNU-AXIS 현재 보유 (목표 800장)</div></div>
              </div>
              <div className="dg-hero-stat">
                <div className="dg-hero-stat-ic"><i className="fas fa-building" /></div>
                <div><div className="dg-hero-stat-n">10,067㎡</div><div className="dg-hero-stat-l">AI Innovation Hub Space</div></div>
              </div>
              <div className="dg-hero-stat">
                <div className="dg-hero-stat-ic"><i className="fas fa-industry" /></div>
                <div><div className="dg-hero-stat-n">개원 협약 3건</div><div className="dg-hero-stat-l">삼성중공업·은성의료재단·KIMS</div></div>
              </div>
              <div className="dg-hero-stat">
                <div className="dg-hero-stat-ic"><i className="fas fa-graduation-cap" /></div>
                <div><div className="dg-hero-stat-n">AX 프로젝트 석사</div><div className="dg-hero-stat-l">산학 공동 지도교수제 운영</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="dg-sec">
          <div className="dg-grid-2 dg-acts-wrap">
            <div className="dg-glass dg-card dg-reveal">
              <div className="dg-card-head">
                <div className="dg-card-title"><span className="dg-card-ic dg-tone-cyan"><i className="fas fa-compass" /></span> ACTS 비전 체계 (Vision 2030)</div>
                <Link to="/about#vision" className="dg-card-more">상세 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dg-acts-grid">
                {ACTS.map((a) => (
                  <div key={a.l} className={`dg-act dg-tone-${a.tone}`}>
                    <div className="dg-act-letter">{a.l}</div>
                    <div className="dg-act-name">{a.name}</div>
                    <div className="dg-act-ko">{a.ko}</div>
                    <div className="dg-act-desc">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dg-glass dg-card dg-dir dg-reveal">
              <div className="dg-dir-avatar">院</div>
              <div className="dg-dir-content">
                <div className="dg-dir-name">초대 원장 <small>Founding Director</small></div>
                <div className="dg-dir-position">장영실AI융합연구원 · 2025.12.30 출범</div>
                <div className="dg-dir-quote">"장영실 선생이 노비 출신에서 조선 최고 과학자로 성장했듯, 우리 연구원도 출신과 무관하게 인재가 모이는 개방형 플랫폼이 되어 AI 융합과학의 주권을 선도하겠습니다."</div>
                <div className="dg-dir-meta">2025.12.30 · 개원사 中</div>
              </div>
            </div>
          </div>
        </section>

        <section className="dg-sec">
          <div className="dg-glass dg-card dg-heritage dg-reveal">
            <div className="dg-card-head">
              <div className="dg-card-title"><span className="dg-card-ic dg-tone-violet"><i className="fas fa-scroll" /></span> <span className="dg-hanja">蔣英實</span> 헤리티지 매핑 — <em>15세기 발명품이 21세기 AI가 되다</em></div>
              <Link to="/heritage" className="dg-card-more">더보기 <i className="fas fa-arrow-right" /></Link>
            </div>
            <div className="dg-heritage-grid">
              {HERITAGE.map((h) => (
                <div className="dg-h-pair" key={h.han}>
                  <div className="dg-h-cell dg-h-past">
                    <div className="dg-h-mark"><span className="dg-h-circ">{h.han}</span><span className="dg-h-tag">{h.year} · {h.tag}</span></div>
                    <div className="dg-h-icon"><i className={`fas ${h.invIcon}`} /></div>
                    <div className="dg-h-name">{h.inv} <span className="dg-h-hanja">({h.hanja})</span></div>
                    <div className="dg-h-desc">{h.desc}</div>
                  </div>
                  <div className="dg-h-arrow"><i className="fas fa-arrow-right-long" /></div>
                  <div className="dg-h-cell dg-h-now">
                    <div className="dg-h-mark"><span className="dg-h-circ dg-h-mark-alpha">{h.mark}</span><span className="dg-h-tag">{h.now}</span></div>
                    <div className="dg-h-icon"><i className={`fas ${h.nowIcon}`} /></div>
                    <div className="dg-h-name">{h.nowName}</div>
                    <div className="dg-h-desc">{h.nowDesc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dg-sec">
          <div className="dg-grid-2">
            <div className="dg-glass dg-card dg-reveal">
              <div className="dg-card-head">
                <div className="dg-card-title"><span className="dg-card-ic dg-tone-cyan"><i className="fas fa-microscope" /></span> 3개 프로젝트 연구센터 (Visual)</div>
                <Link to="/research" className="dg-card-more">상세 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dg-rb">
                {CENTERS.map((c) => (
                  <div key={c.title} className={`dg-rb-card ${c.cls}`}>
                    <img src={c.img} alt={c.title} className="dg-rb-img" onError={hide} />
                    <div className="dg-rb-inner">
                      <div className="dg-rb-tag"><i className={`fas ${c.tagIcon}`} /> {c.tag}</div>
                      <div className="dg-rb-title">{c.title}</div>
                      <div className="dg-rb-desc">{c.desc}</div>
                      {c.stats && (
                        <div className="dg-rb-stats">
                          {c.stats.map((s) => (
                            <div className="dg-rb-stat" key={s.l}><div className="n">{s.n}<span>{s.u}</span></div><div className="l">{s.l}</div></div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dg-glass dg-card dg-reveal">
              <div className="dg-card-head">
                <div className="dg-card-title"><span className="dg-card-ic dg-tone-violet"><i className="fas fa-table-list" /></span> 주요 추진 과제</div>
                <Link to="/research" className="dg-card-more">상세 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <table className="dg-proj">
                <thead>
                  <tr><th>과제·활동</th><th>센터</th><th>상태</th></tr>
                </thead>
                <tbody>
                  {PROJECTS.map((p) => (
                    <tr key={p.name}>
                      <td><div className="dg-proj-name">{p.name}</div></td>
                      <td><span className={`dg-proj-tag t-${p.tone}`}>{p.tag}</span></td>
                      <td><span className={`dg-proj-status s-${p.dot}`}><span className="dg-proj-dot" />{p.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="dg-sec">
          <div className="dg-glass dg-card dg-reveal">
            <div className="dg-card-head">
              <div className="dg-card-title"><span className="dg-card-ic dg-tone-emerald"><i className="fas fa-handshake" /></span> 전략 협력 기관 (개원 동시 협약 3 + 글로벌 3)</div>
              <Link to="/partners" className="dg-card-more">파트너십 전체 보기 <i className="fas fa-arrow-right" /></Link>
            </div>
            <div className="dg-partner-grid">
              {PARTNERS.map((p) => (
                <Link key={p.name} to={p.to} className={`dg-partner dg-glass dg-tone-${p.tone} dg-hover`}>
                  <div className="dg-partner-top">
                    <div className="dg-partner-logo">{p.initial}</div>
                    <div>
                      <div className="dg-partner-name">{p.name}</div>
                      <div className="dg-partner-tag">{p.tag}</div>
                    </div>
                  </div>
                  <div className="dg-partner-desc"><strong>{p.strong}</strong>{p.desc}</div>
                  <div className="dg-partner-meta"><i className={`fas ${p.metaIcon}`} /> {p.meta}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="dg-it dg-glass dg-reveal">
          <div className="dg-it-grid">
            <div className="dg-it-text">
              <div className="dg-it-badge"><i className="fas fa-building" /> IT 관 · 본부 거점</div>
              <div className="dg-it-title">국립대학 BTL <em>최대 규모</em><br />IT관에서 시작됩니다</div>
              <div className="dg-it-desc">2025년 12월 16일 준공된 부산대학교 IT관은 장영실 AI 융합연구원의 본부이자 부산대 AI 거점 사업의 물리적 거점입니다. 친환경 시설(100% LED · 태양광 · 지열 · BEMS).</div>
              <div className="dg-it-stats">
                <div className="dg-it-stat"><div className="dg-it-tag">총 사업비</div><div className="dg-it-n">267<span>억원</span></div><div className="dg-it-d">국립대 BTL 최대 규모</div></div>
                <div className="dg-it-stat"><div className="dg-it-tag">연면적</div><div className="dg-it-n">13,161<span>㎡</span></div><div className="dg-it-d">지하 1층 · 지상 10층</div></div>
                <div className="dg-it-stat"><div className="dg-it-tag">준공</div><div className="dg-it-n">2025<span>.12.16</span></div><div className="dg-it-d">개원식 12.30</div></div>
                <div className="dg-it-stat"><div className="dg-it-tag">친환경</div><div className="dg-it-n">LED<span> + 태양광</span></div><div className="dg-it-d">100% · BEMS 적용</div></div>
              </div>
            </div>
            <div className="dg-it-image">
              <img src="/assets/img/it-building.jpg" alt="IT관" onError={hide} />
              <div className="dg-it-img-grad" />
            </div>
          </div>
        </section>

        <section className="dg-sec">
          <div className="dg-grid-2">
            <div className="dg-glass dg-card dg-reveal">
              <div className="dg-card-head">
                <div className="dg-card-title"><span className="dg-card-ic dg-tone-cyan"><i className="fas fa-user-tie" /></span> 핵심 연구원 (대표)</div>
                <Link to="/about#org" className="dg-card-more">조직 전체 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dg-fac-grid">
                {FACULTY.map((f) => (
                  <div key={f.name} className={`dg-fac dg-tone-${f.tone}`}>
                    <div className="dg-fac-av"><i className={`fas ${f.icon}`} /></div>
                    <div>
                      <div className="dg-fac-name">{f.name}</div>
                      <div className="dg-fac-area">{f.area}</div>
                      <div className="dg-fac-lab">{f.lab}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dg-glass dg-card dg-reveal">
              <div className="dg-card-head">
                <div className="dg-card-title"><span className="dg-card-ic dg-tone-amber"><i className="fas fa-bell" /></span> 알림</div>
                <Link to="/news" className="dg-card-more">전체 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="dg-notice-list">
                {NOTICES.map((n) => (
                  <div key={n.title} className="dg-notice">
                    <div className={`dg-notice-ic dg-tone-${n.tone}`}><i className={`fas ${n.icon}`} /></div>
                    <div className="dg-notice-body">
                      <div className="dg-notice-title">{n.title}{n.tag && <span className="dg-notice-tag">{n.tag}</span>}</div>
                      <div className="dg-notice-date">{n.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="dg-footer">
          <div className="dg-footer-big">JANG YEONG-SIL <em>AIRC</em></div>
          <div className="dg-footer-info">
            <p>© 2026 장영실 AI 융합연구원 · 부산대학교<br />부산광역시 금정구 부산대학로 63번길 2 · IT관 1층<br />airc@pusan.ac.kr · 051-510-0000</p>
            <span className="dg-footer-mono">DASH · GLASS / AURORA DARK</span>
          </div>
        </footer>
      </main>

      <nav className="dg-pillnav" aria-label="대시보드 전환">
        <Link to="/home" className="dg-pill"><i className="fas fa-arrow-left" /> 원본</Link>
        <span className="dg-pill-sep" />
        <Link to="/dash" className="dg-pill dg-pill-on"><i className="fas fa-th-large" /> 목록</Link>
      </nav>
    </div>
  )
}
