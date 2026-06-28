import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/dashboard-brutal.css'

gsap.registerPlugin(ScrollTrigger)

const hide = (e) => { e.currentTarget.style.display = 'none' }

const KPIS = [
  { n: 3, unit: '개', label: '프로젝트 연구센터', sub: '앵커기업 중심', icon: 'fa-flask' },
  { n: 3, unit: '건', label: '개원 동시 산학 협약', sub: '2025.12.30', icon: 'fa-handshake' },
  { n: 303, unit: '+', label: 'GPU 현재 보유', sub: '800장 확보 목표', icon: 'fa-microchip' },
  { n: 10067, unit: '㎡', label: 'AI Innovation Hub Space', sub: '5개 캠퍼스 공간', icon: 'fa-building' },
  { n: 80, unit: '명', label: 'AX 프로젝트 석사 배출 목표', sub: '5년 KPI', icon: 'fa-graduation-cap' },
]

const NAV = [
  { id: '01', label: 'OVERVIEW', icon: 'fa-gauge-high', href: '#brut-sec-01' },
  { id: '02', label: 'METRICS', icon: 'fa-chart-simple', href: '#brut-sec-02' },
  { id: '03', label: 'VISION', icon: 'fa-compass', href: '#brut-sec-03' },
  { id: '04', label: 'HERITAGE', icon: 'fa-scroll', href: '#brut-sec-04' },
  { id: '05', label: 'CENTERS', icon: 'fa-microscope', href: '#brut-sec-05' },
  { id: '06', label: 'PARTNERS', icon: 'fa-handshake', href: '#brut-sec-06' },
  { id: '07', label: 'FACILITY', icon: 'fa-building', href: '#brut-sec-07' },
  { id: '08', label: 'PEOPLE', icon: 'fa-user-tie', href: '#brut-sec-08' },
]

const ACTS = [
  { l: 'A', name: 'Acceleration', ko: '산업화 가속', desc: 'AI 산업화 허브로서 연구 성과를 산업 현장으로 직접 이전합니다.' },
  { l: 'C', name: 'Core', ko: '기초과학 강화', desc: 'AI 핵심기술 개발 및 양자·신경과학 등 기초 강화.' },
  { l: 'T', name: 'Transformation', ko: '산업 혁신', desc: '해양·제조·의료·에너지 국가 전략산업의 AI 전환.' },
  { l: 'S', name: 'Superiority', ko: '경쟁 우위', desc: '차세대 주권기술 개발 · 국가 경쟁우위 확보.' },
]

const HERITAGE = [
  { han: '壹', yr: '1433', name: '혼천의', hanja: '渾天儀', desc: '한국 최초 자동 천구의. 우주의 운행을 한 자리에서 관측.', now: 'A', field: '조선·구조 AI센터', anchor: '삼성중공업' },
  { han: '貳', yr: '1441', name: '측우기·수표', hanja: '測雨器·水標', desc: '세계 최초 우량계 · 수위계. 농업용 수자원의 데이터 표준화.', now: 'B', field: '헬스케어 AI센터', anchor: '은성의료재단' },
  { han: '參', yr: '1434', name: '자격루', hanja: '自擊漏', desc: '한국 최초 자동 시계. 생명의 시간성을 인공 시스템에.', now: 'C', field: '소재·재료 AI센터', anchor: '한국재료연구원' },
  { han: '肆', yr: '1434', name: '갑인자', hanja: '甲寅字', desc: '개량 금속 활자. 지식의 대량 생산·확산을 가능케 한 소재.', now: 'D', field: 'PNU AI Context · E&E Center', anchor: '전략 특화 센터' },
]

const CENTERS = [
  { tag: '앵커기업: 삼성중공업', name: '조선·구조 AI센터', desc: 'AI 구조 최적화 알고리즘 개발 · 조선 특화 교과목 5개 개설 · 취업역량 강화 세미나·컨퍼런스 4회 · 삼성중공업 취업 연계 트랙 운영', stats: [['5', '개'], ['4', '회']], statL: ['특화 교과목', '세미나·컨퍼런스'], img: 'marine-ai.jpg', mark: '01' },
  { tag: '앵커기업: 은성의료재단', name: '헬스케어 AI센터', desc: 'AI 솔루션 과제 발굴 협의 3회 · 양산캠퍼스 연계', stats: [['3', '회'], ['AX', '']], statL: ['과제 발굴 협의', '헬스케어 특화'], img: 'medical-ai.jpg', mark: '02' },
  { tag: '앵커기관: 한국재료연구원', name: '소재·재료 AI센터', desc: 'RISE 산학공동연구 과제 추진 · 소재 분야 AX 특화 과제 발굴', stats: [['RISE', ''], ['AX', '']], statL: ['산학공동연구', '소재 특화'], img: 'mfg-ai.jpg', mark: '03' },
]

const INFRA = [
  { tag: 'PNU-AXIS 인프라', name: 'AI 컴퓨팅 인프라', desc: '현재 GPU 303장+ · 목표 800장·500억 · 데이터센터 2MW', img: 'quantum.jpg', mark: '04' },
  { tag: 'AI Innovation Hub Space', name: '10,067㎡ 거점 공간', desc: '5개 전용 공간 · 부산·양산캠퍼스', img: 'college-ai.jpg', mark: '05' },
]

const PROJECTS = [
  { name: 'AI 구조 최적화 알고리즘 개발', center: '조선·구조', cls: 'b', status: '운영', dot: 'green' },
  { name: '조선 특화 교과목 5개 개설', center: '조선·구조', cls: 'b', status: '운영', dot: 'green' },
  { name: '협력기업 재직자 AX 교육 (2회)', center: '조선·구조', cls: 'b', status: '운영', dot: 'green' },
  { name: 'AI 솔루션 과제 발굴 협의 (3회)', center: '헬스케어', cls: 'm', status: '운영', dot: 'green' },
  { name: '헬스케어 AX 특화 과제 기반 확보', center: '헬스케어', cls: 'm', status: '운영', dot: 'green' },
  { name: 'RISE 산학공동연구 과제 추진', center: '소재·재료', cls: 's', status: '준비', dot: 'amber' },
  { name: '소재 분야 AX 특화 과제 발굴', center: '소재·재료', cls: 's', status: '준비', dot: 'amber' },
]

const PARTNERS = [
  { ini: 'S', name: '삼성중공업', tag: '2025.12.30 · MOU', desc: 'AI 연구협력센터를 교내 공동 설치. 조선·해양 AI 공동 연구 및 데이터 분석.', meta: '해양 AI · 양 기관 공동 예산', icon: 'fa-ship', link: '/partners#founding' },
  { ini: '은', name: '은성의료재단', tag: '2025.12.30 · MOU', desc: 'AX 헬스케어센터를 양 기관 공동 설치. 의료 AI · 에이지테크 공동 연구.', meta: '의료 AI · 에이지테크', icon: 'fa-heart-pulse', link: '/partners#founding' },
  { ini: 'K', name: '한국재료연구원 (KIMS)', tag: '2025.12.30 · MOU', desc: 'PNU 연구협력센터 공동 설치. 초거대 첨단 제조 AI · 소재 AI 융합 연구.', meta: '소재·제조 AI', icon: 'fa-industry', link: '/partners#founding' },
  { ini: 'St', name: 'Stanford University', tag: '연구 협력 · 진행중', desc: '스탠퍼드 AI Lab과 AI 융합 공동 연구 협력 중.', meta: '글로벌 · 학술 협력', icon: 'fa-globe', link: '/partners#global' },
  { ini: 'E', name: 'ETRI', tag: '한국전자통신연구원', desc: 'AI 응용 기술 협력. 한국어 NLP 모델 공동 연구 · 양자 통신 기술 협력.', meta: '정부 출연연', icon: 'fa-landmark', link: '/partners#gov' },
  { ini: 'K', name: '한국전기연구원 (KERI)', tag: '에너지 AI', desc: '차세대 에너지 AI 공동 연구. AI 기반 스마트 그리드 및 신재생 에너지 최적화.', meta: '에너지 AI', icon: 'fa-bolt', link: '/partners#gov' },
]

const IT_STATS = [
  { tag: '총 사업비', n: '267', unit: '억원', d: '국립대 BTL 최대 규모' },
  { tag: '연면적', n: '13,161', unit: '㎡', d: '지하 1층 · 지상 10층' },
  { tag: '준공', n: '2025', unit: '.12.16', d: '개원식 12.30' },
  { tag: '친환경', n: 'LED', unit: '+ 태양광', d: '100% · BEMS 적용' },
]

const FACULTY = [
  { name: '초대 원장', area: '연구원장', lab: '융합 AI 연구실', icon: 'fa-user-tie' },
  { name: '옥종목 교수', area: '양자 AI · 물리학과', lab: '47억 사업 PI', icon: 'fa-atom' },
  { name: '김호원 교수', area: 'Physical AI 보안', lab: 'S3Lab · ITRC', icon: 'fa-shield-halved' },
  { name: '권선영 교수', area: '신약 AI · GNN', lab: 'AI Bio Lab', icon: 'fa-dna' },
  { name: '전상률 교수', area: 'CV · 생성형 AI', lab: 'PNUCVLAB', icon: 'fa-eye' },
  { name: '류광렬 교수', area: '제조 AI · DS', lab: 'DS 대학원장', icon: 'fa-industry' },
]

const NOTICES = [
  { title: '박사후연구원 채용 (2명)', tag: '채용', date: '2026.05.25 · 마감 6.30', icon: 'fa-user-plus', cls: 'green' },
  { title: '2026년 연구비 집행 지침 개정 안내', tag: '', date: '2026.05.22', icon: 'fa-bullhorn', cls: '' },
  { title: 'AI 비전 세미나 — Stanford AI Lab 연사', tag: '', date: '2026.06.05 · IT관 세미나실 101', icon: 'fa-calendar', cls: 'violet' },
  { title: '산학협력 기술 발표회', tag: '', date: '2026.06.12 · 대학본부 국제회의실', icon: 'fa-handshake', cls: 'amber' },
  { title: 'CVPR 2026 박진선 교수팀 논문 채택', tag: '', date: '2026.05.18 · VLM 분야', icon: 'fa-trophy', cls: 'green' },
  { title: '개원 5개월 성과 보고서 공개', tag: '', date: '2026.05.15', icon: 'fa-file-alt', cls: '' },
]

function TopTicker() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  const clock = now.toLocaleTimeString('en-GB', { hour12: false }) + ' KST'
  return (
    <div className="brut-tb-ticker brut-mono" aria-label="live system status">
      <span><i className="fas fa-clock" /> {clock}</span>
      <span className="brut-tb-sep">/</span>
      <span>35°15'N 129°05'E</span>
      <span className="brut-tb-sep">/</span>
      <span className="brut-tb-ok"><span className="brut-dot brut-dot-green" /> AIRCI · SYS_OK</span>
    </div>
  )
}

function DDay() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(t)
  }, [])
  const d = Math.floor((now - new Date('2025-12-30T00:00:00')) / 86400000)
  return <span><i className="fas fa-flag" /> 개원 D+{d}</span>
}

export default function DashBrutal() {
  const root = useRef(null)
  const cursorRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const cur = cursorRef.current
    if (!cur) return
    const move = (e) => { cur.style.transform = `translate(${e.clientX}px, ${e.clientY}px)` }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useLayoutEffect(() => {
    const scope = root.current
    if (!scope) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.brut-topbar > *', { y: -16, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06, clearProps: 'transform' })
      gsap.from('.brut-side-item', { x: -16, autoAlpha: 0, duration: 0.4, ease: 'power3.out', stagger: 0.05, clearProps: 'transform' })
      gsap.from('.brut-hdr > *', { y: 24, autoAlpha: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08, clearProps: 'transform' })
      gsap.from('.brut-sec-label', { y: 16, autoAlpha: 0, duration: 0.4, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.brut-kpi', { y: 30, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.07, delay: 0.15, clearProps: 'transform' })

      gsap.utils.toArray('.brut-counter').forEach((el) => {
        const target = parseInt(el.dataset.target, 10)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 1.5, ease: 'power2.out', clearProps: 'transform',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-US') },
        })
      })

      gsap.utils.toArray('.brut-sec-head').forEach((el) => {
        gsap.from(el, { y: 30, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      })

      gsap.utils.toArray('.brut-clip').forEach((el) => {
        gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, {
          clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power3.out', clearProps: 'clipPath',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('.brut-stagger').forEach((group) => {
        const items = group.querySelectorAll(':scope > *')
        gsap.from(items, { y: 28, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06, clearProps: 'transform', scrollTrigger: { trigger: group, start: 'top 88%', once: true } })
      })

      ScrollTrigger.refresh()
    }, scope)

    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="brut" ref={root}>
      <div className="brut-grid-bg" aria-hidden="true" />
      <div className="brut-grain" aria-hidden="true" />
      <div className="brut-cursor" ref={cursorRef} aria-hidden="true" />

      <header className="brut-topbar">
        <div className="brut-tb-left">
          <span className="brut-tb-sig brut-mono">// AIRCI</span>
          <span className="brut-tb-name">장영실 AI 융합연구원</span>
        </div>
        <TopTicker />
        <div className="brut-tb-right">
          <Link to="/news?cat=publication" className="brut-btn brut-btn-ghost"><i className="fas fa-file-alt" /> 논문 검색</Link>
          <Link to="/research" className="brut-btn brut-btn-ghost"><i className="fas fa-file-pdf" /> 백서</Link>
          <Link to="/partners#contact" className="brut-btn brut-btn-solid"><i className="fas fa-handshake" /> 연구 협력 신청</Link>
        </div>
      </header>

      <div className="brut-body">
        <aside className="brut-sidebar">
          <div className="brut-side-head brut-mono">// NAVIGATION</div>
          <nav className="brut-side-nav" aria-label="dashboard sections">
            {NAV.map((n, i) => (
              <a key={n.id} href={n.href} className={`brut-side-item${i === 0 ? ' is-active' : ''}`}>
                <span className="brut-side-brk brut-mono">[{n.id}]</span>
                <i className={`fas ${n.icon}`} />
                <span className="brut-side-lbl">{n.label}</span>
              </a>
            ))}
          </nav>
          <div className="brut-side-status">
            <div className="brut-ss-row"><span className="brut-ss-k brut-mono">SYS</span><span className="brut-ss-val brut-ok">OK</span></div>
            <div className="brut-ss-row"><span className="brut-ss-k brut-mono">GPU</span><span className="brut-ss-val">303/800</span></div>
            <div className="brut-ss-row"><span className="brut-ss-k brut-mono">FAC</span><span className="brut-ss-val">6 PI</span></div>
            <div className="brut-ss-row"><span className="brut-ss-k brut-mono">VER</span><span className="brut-ss-val">2025.12</span></div>
          </div>
          <div className="brut-side-foot brut-mono">EST. 2025.12.30<br />PNU · BUSAN KR</div>
        </aside>

        <main className="brut-main">
          <section className="brut-hdr" id="brut-sec-01">
            <div className="brut-hdr-tag brut-mono">// 00_OVERVIEW · 동남권 AI 융합연구 컨트롤타워</div>
            <h1 className="brut-hdr-title">장영실 AI 융합연구원 <span className="brut-hdr-em">대시보드</span></h1>
            <p className="brut-hdr-desc">동남권 AI 융합연구 컨트롤타워 · 2025.12.30 개원 · 교학부총장 산하 전담기구 · IT관 (13,161㎡)</p>
            <div className="brut-hdr-meta brut-mono">
              <span><i className="fas fa-location-dot" /> IT관 1층 · 부산대학로63번길2</span>
              <DDay />
            </div>
          </section>

          <section className="brut-kpi-row" id="brut-sec-02">
            <div className="brut-sec-label brut-mono"><span className="brut-sec-num">01</span> // METRICS _ 실시간 지표</div>
            {KPIS.map((k, i) => (
              <div className="brut-kpi" key={k.label}>
                <div className="brut-kpi-top">
                  <span className="brut-kpi-id brut-mono">KPI/{String(i + 1).padStart(2, '0')}</span>
                  <i className={`fas ${k.icon} brut-kpi-icon`} />
                </div>
                <div className="brut-kpi-num">
                  <span className="brut-counter" data-target={k.n}>{k.n.toLocaleString('en-US')}</span>
                  <span className="brut-kpi-unit">{k.unit}</span>
                </div>
                <div className="brut-kpi-lbl">{k.label}</div>
                <div className="brut-kpi-sub brut-mono">↳ {k.sub}</div>
              </div>
            ))}
          </section>

          <section className="brut-sec" id="brut-vp">
            <div className="brut-sec-in">
              <div className="brut-sec-head">
                <span className="brut-sec-num-big brut-mono">02</span>
                <h2 className="brut-sec-title">// CONTROL_TOWER <span>동남권 AI 융합연구 컨트롤타워</span></h2>
              </div>
              <div className="brut-vp brut-clip">
                <img src="/assets/img/it-building.jpg" alt="IT관" className="brut-vp-img" onError={hide} />
                <div className="brut-vp-overlay" />
                <div className="brut-vp-corners"><span /><span /><span /><span /></div>
                <div className="brut-vp-content">
                  <div className="brut-vp-badge brut-mono"><span className="brut-dot brut-dot-red" /> 동남권 지·산·학·연 일체형 거점 · 2025.12.30 출범</div>
                  <h3 className="brut-vp-title">동남권 AI 융합연구 <span>컨트롤타워</span></h3>
                  <p className="brut-vp-desc">장영실 AI 융합연구원은 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 프로젝트 연구센터를 중심으로 앵커기업과 함께 AI 기반 융합연구를 선도합니다. GPU 303장 이상의 PNU-AXIS 인프라와 10,067㎡ AI Innovation Hub Space로 동남권 산업 혁신을 지원합니다.</p>
                  <div className="brut-vp-tags">
                    <span className="brut-tag"><i className="fas fa-ship" /> 조선·구조 AI (삼성중공업)</span>
                    <span className="brut-tag"><i className="fas fa-heart-pulse" /> 헬스케어 AI (은성의료재단)</span>
                    <span className="brut-tag"><i className="fas fa-industry" /> 소재·재료 AI (KIMS)</span>
                    <span className="brut-tag"><i className="fas fa-microchip" /> PNU-AXIS GPU 303+장</span>
                  </div>
                </div>
                <div className="brut-vp-stats">
                  <div className="brut-vp-stat"><i className="fas fa-microchip" /><div><div className="brut-vp-stat-n">303+ GPU</div><div className="brut-vp-stat-l">PNU-AXIS 현재 보유 (목표 800장)</div></div></div>
                  <div className="brut-vp-stat"><i className="fas fa-building" /><div><div className="brut-vp-stat-n">10,067㎡</div><div className="brut-vp-stat-l">AI Innovation Hub Space</div></div></div>
                  <div className="brut-vp-stat"><i className="fas fa-industry" /><div><div className="brut-vp-stat-n">개원 협약 3건</div><div className="brut-vp-stat-l">삼성중공업·은성의료재단·KIMS</div></div></div>
                  <div className="brut-vp-stat"><i className="fas fa-graduation-cap" /><div><div className="brut-vp-stat-n">AX 프로젝트 석사</div><div className="brut-vp-stat-l">산학 공동 지도교수제 운영</div></div></div>
                </div>
              </div>
            </div>
          </section>

          <section className="brut-sec" id="brut-sec-03">
            <div className="brut-sec-in">
              <div className="brut-sec-head">
                <span className="brut-sec-num-big brut-mono">03</span>
                <h2 className="brut-sec-title">// VISION_2030 <span>ACTS 비전 체계</span></h2>
                <Link to="/about#vision" className="brut-more brut-mono">상세 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="brut-acts brut-stagger">
                {ACTS.map((a) => (
                  <div className="brut-act" key={a.l}>
                    <div className="brut-act-letter">{a.l}</div>
                    <div className="brut-act-name brut-mono">{a.name}</div>
                    <div className="brut-act-ko">{a.ko}</div>
                    <div className="brut-act-desc">{a.desc}</div>
                  </div>
                ))}
              </div>
              <div className="brut-dir brut-clip">
                <div className="brut-dir-avatar">院</div>
                <div className="brut-dir-content">
                  <div className="brut-dir-name brut-mono">초대 원장 <small>Founding Director</small></div>
                  <div className="brut-dir-pos">장영실AI융합연구원 · 2025.12.30 출범</div>
                  <blockquote className="brut-dir-quote">"장영실 선생이 노비 출신에서 조선 최고 과학자로 성장했듯, 우리 연구원도 출신과 무관하게 인재가 모이는 개방형 플랫폼이 되어 AI 융합과학의 주권을 선도하겠습니다."</blockquote>
                  <div className="brut-dir-meta brut-mono">2025.12.30 · 개원사 中</div>
                </div>
              </div>
            </div>
          </section>

          <section className="brut-sec" id="brut-sec-04">
            <div className="brut-sec-in">
              <div className="brut-sec-head">
                <span className="brut-sec-num-big brut-mono">04</span>
                <h2 className="brut-sec-title">// HERITAGE_MAP <span>蔣英實 헤리티지 매핑 — 15세기 발명품이 21세기 AI가 되다</span></h2>
                <Link to="/heritage" className="brut-more brut-mono">더보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="brut-heritage brut-stagger">
                {HERITAGE.map((h) => (
                  <div className="brut-h-row" key={h.han}>
                    <div className="brut-h-past">
                      <div className="brut-h-mark"><span className="brut-h-han">{h.han}</span><span className="brut-h-yr brut-mono">{h.yr} · 過去</span></div>
                      <div className="brut-h-name">{h.name} <small>{h.hanja}</small></div>
                      <div className="brut-h-desc">{h.desc}</div>
                    </div>
                    <div className="brut-h-arrow brut-mono"><i className="fas fa-arrow-right-long" /></div>
                    <div className="brut-h-now">
                      <div className="brut-h-nowid">{h.now}</div>
                      <div className="brut-h-field">{h.field}</div>
                      <div className="brut-h-anchor brut-mono">↳ {h.anchor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="brut-sec" id="brut-sec-05">
            <div className="brut-sec-in">
              <div className="brut-sec-head">
                <span className="brut-sec-num-big brut-mono">05</span>
                <h2 className="brut-sec-title">// CENTERS <span>3개 프로젝트 연구센터 + 인프라</span></h2>
                <Link to="/research" className="brut-more brut-mono">상세 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="brut-centers brut-stagger">
                {CENTERS.map((c) => (
                  <div className="brut-center" key={c.mark}>
                    <div className="brut-center-mark brut-mono">[{c.mark}]</div>
                    <img src={`/assets/img/${c.img}`} alt={c.name} className="brut-center-img" onError={hide} />
                    <div className="brut-center-body">
                      <div className="brut-center-tag brut-mono"><i className="fas fa-star" /> {c.tag}</div>
                      <div className="brut-center-name">{c.name}</div>
                      <div className="brut-center-desc">{c.desc}</div>
                      <div className="brut-center-stats">
                        {c.stats.map((s, i) => (
                          <div className="brut-center-stat" key={i}><span className="n">{s[0]}</span><span className="u">{s[1]}</span><span className="l">{c.statL[i]}</span></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                {INFRA.map((c) => (
                  <div className="brut-center brut-center-infra" key={c.mark}>
                    <div className="brut-center-mark brut-mono">[{c.mark}]</div>
                    <img src={`/assets/img/${c.img}`} alt={c.name} className="brut-center-img" onError={hide} />
                    <div className="brut-center-body">
                      <div className="brut-center-tag brut-mono"><i className="fas fa-server" /> {c.tag}</div>
                      <div className="brut-center-name">{c.name}</div>
                      <div className="brut-center-desc">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="brut-projects brut-clip">
                <div className="brut-projects-head brut-mono"><i className="fas fa-table-list" /> // 주요 추진 과제</div>
                <table className="brut-table">
                  <thead>
                    <tr><th>NO</th><th>과제·활동</th><th>센터</th><th>상태</th></tr>
                  </thead>
                  <tbody>
                    {PROJECTS.map((p, i) => (
                      <tr key={i}>
                        <td className="brut-mono">{String(i + 1).padStart(2, '0')}</td>
                        <td className="brut-pj-name">{p.name}</td>
                        <td><span className={`brut-pj-tag brut-pj-${p.cls}`}>{p.center}</span></td>
                        <td><span className={`brut-pj-status brut-pj-${p.dot === 'green' ? 'run' : 'plan'}`}><span className={`brut-dot brut-dot-${p.dot}`} />{p.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="brut-sec" id="brut-sec-06">
            <div className="brut-sec-in">
              <div className="brut-sec-head">
                <span className="brut-sec-num-big brut-mono">06</span>
                <h2 className="brut-sec-title">// PARTNERS <span>전략 협력 기관 (개원 동시 협약 3 + 글로벌 3)</span></h2>
                <Link to="/partners" className="brut-more brut-mono">파트너십 전체 보기 <i className="fas fa-arrow-right" /></Link>
              </div>
              <div className="brut-partners brut-stagger">
                {PARTNERS.map((p) => (
                  <Link to={p.link} key={p.name} className="brut-partner">
                    <div className="brut-partner-top">
                      <div className="brut-partner-ini">{p.ini}</div>
                      <div><div className="brut-partner-name">{p.name}</div><div className="brut-partner-tag brut-mono">{p.tag}</div></div>
                    </div>
                    <div className="brut-partner-desc">{p.desc}</div>
                    <div className="brut-partner-meta brut-mono"><i className={`fas ${p.icon}`} /> {p.meta}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="brut-sec" id="brut-sec-07">
            <div className="brut-sec-in">
              <div className="brut-sec-head">
                <span className="brut-sec-num-big brut-mono">07</span>
                <h2 className="brut-sec-title">// FACILITY <span>IT 관 · 본부 거점</span></h2>
              </div>
              <div className="brut-it brut-clip">
                <div className="brut-it-text">
                  <div className="brut-it-badge brut-mono"><i className="fas fa-building" /> IT 관 · 본부 거점</div>
                  <h3 className="brut-it-title">국립대학 BTL <span>최대 규모</span><br />IT관에서 시작됩니다</h3>
                  <p className="brut-it-desc">2025년 12월 16일 준공된 부산대학교 IT관은 장영실 AI 융합연구원의 본부이자 부산대 AI 거점 사업의 물리적 거점입니다. 친환경 시설(100% LED · 태양광 · 지열 · BEMS).</p>
                  <div className="brut-it-stats">
                    {IT_STATS.map((s) => (
                      <div className="brut-it-stat" key={s.tag}>
                        <div className="brut-it-stat-tag brut-mono">{s.tag}</div>
                        <div className="brut-it-stat-n">{s.n}<span className="brut-it-stat-u">{s.unit}</span></div>
                        <div className="brut-it-stat-d">{s.d}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="brut-it-image">
                  <img src="/assets/img/it-building.jpg" alt="IT building" onError={hide} />
                  <div className="brut-it-img-corners"><span /><span /><span /><span /></div>
                </div>
              </div>
            </div>
          </section>

          <section className="brut-sec" id="brut-sec-08">
            <div className="brut-sec-in">
              <div className="brut-grid-2">
                <div className="brut-panel">
                  <div className="brut-panel-head">
                    <div className="brut-panel-title brut-mono"><i className="fas fa-user-tie" /> // 핵심 연구원 (대표)</div>
                    <Link to="/about#org" className="brut-more brut-mono">조직 전체 보기 <i className="fas fa-arrow-right" /></Link>
                  </div>
                  <div className="brut-fac brut-stagger">
                    {FACULTY.map((f) => (
                      <div className="brut-fac-item" key={f.name}>
                        <div className="brut-fac-icon"><i className={`fas ${f.icon}`} /></div>
                        <div>
                          <div className="brut-fac-name">{f.name}</div>
                          <div className="brut-fac-area">{f.area}</div>
                          <div className="brut-fac-lab brut-mono">↳ {f.lab}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="brut-panel">
                  <div className="brut-panel-head">
                    <div className="brut-panel-title brut-mono"><i className="fas fa-bell" /> // LOG · 알림</div>
                    <Link to="/news" className="brut-more brut-mono">전체 <i className="fas fa-arrow-right" /></Link>
                  </div>
                  <div className="brut-notices brut-stagger">
                    {NOTICES.map((n, i) => (
                      <div className="brut-notice" key={i}>
                        <div className="brut-notice-idx brut-mono">{String(i + 1).padStart(2, '0')}</div>
                        <div className={`brut-notice-icon brut-ni-${n.cls}`}><i className={`fas ${n.icon}`} /></div>
                        <div className="brut-notice-body">
                          <div className="brut-notice-title">{n.title}{n.tag && <span className="brut-notice-tag">{n.tag}</span>}</div>
                          <div className="brut-notice-date brut-mono">{n.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="brut-footer">
            <div className="brut-footer-big brut-mono">AIRCI // 장영실 AI 융합연구원</div>
            <div className="brut-footer-info">
              <p className="brut-mono">© 2026 장영실 AI 융합연구원 · 부산대학교<br />부산광역시 금정구 부산대학로 63번길 2 · IT관 1층<br />airc@pusan.ac.kr · 051-510-0000</p>
              <div className="brut-footer-mark brut-mono">END_OF_DOCUMENT // SYS_OK</div>
            </div>
          </footer>
        </main>
      </div>

      <nav className="brut-pill" aria-label="dashboard switch">
        <Link to="/" className="brut-pill-link"><i className="fas fa-arrow-left" /> 원본</Link>
        <span className="brut-pill-sep" />
        <Link to="/dash" className="brut-pill-link"><i className="fas fa-table-columns" /> 목록</Link>
      </nav>
    </div>
  )
}
