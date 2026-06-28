import { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/dashboard-modernist.css'

gsap.registerPlugin(ScrollTrigger)

const hide = (e) => { e.currentTarget.style.display = 'none' }

const KPIS = [
  { n: 3, unit: '개', label: '프로젝트 연구센터', sub: '앵커기업 중심', color: 'cheong' },
  { n: 3, unit: '건', label: '개원 동시 산학 협약', sub: '2025.12.30', color: 'jeok' },
  { n: 303, unit: '+', label: 'GPU 현재 보유', sub: '800장 확보 목표', color: 'hwang' },
  { n: 10067, unit: '㎡', label: 'AI Innovation Hub Space', sub: '5개 캠퍼스 공간', color: 'baek' },
  { n: 80, unit: '명', label: 'AX 프로젝트 석사 배출 목표', sub: '5년 KPI', color: 'heuk' },
]

const NAV = [
  { han: '壹', code: '01', label: 'OVERVIEW', href: '#mod-sec-01', color: 'heuk' },
  { han: '貳', code: '02', label: 'ACTS 비전', href: '#mod-sec-02', color: 'cheong' },
  { han: '參', code: '03', label: 'HERITAGE', href: '#mod-sec-03', color: 'jeok' },
  { han: '肆', code: '04', label: 'CENTERS', href: '#mod-sec-04', color: 'cheong' },
  { han: '伍', code: '05', label: 'PROJECTS', href: '#mod-sec-05', color: 'jeok' },
  { han: '陸', code: '06', label: 'PARTNERS', href: '#mod-sec-06', color: 'hwang' },
  { han: '柒', code: '07', label: 'FACILITY', href: '#mod-sec-07', color: 'hwang' },
  { han: '捌', code: '08', label: 'FACULTY', href: '#mod-sec-08', color: 'cheong' },
  { han: '玖', code: '09', label: 'NOTICES', href: '#mod-sec-09', color: 'jeok' },
]

const ACTS = [
  { l: 'A', name: 'Acceleration', ko: '산업화 가속', desc: 'AI 산업화 허브로서 연구 성과를 산업 현장으로 직접 이전합니다.', color: 'cheong' },
  { l: 'C', name: 'Core', ko: '기초과학 강화', desc: 'AI 핵심기술 개발 및 양자·신경과학 등 기초를 강화한다.', color: 'hwang' },
  { l: 'T', name: 'Transformation', ko: '산업 혁신', desc: '해양·제조·의료·에너지 국가 전략산업의 AI 전환을 이끈다.', color: 'jeok' },
  { l: 'S', name: 'Superiority', ko: '경쟁 우위', desc: '차세대 주권기술 개발로 국가 경쟁 우위를 확보한다.', color: 'heuk' },
]

const HERITAGE = [
  { han: '壹', yr: '1433 · 過去', name: '혼천의', hanja: '渾天儀', desc: '한국 최초 자동 천구의. 우주의 운행을 한 자리에서 관측.', icon: 'fa-moon', nowHan: 'A', nowYr: '2025 · 現在', nowName: '조선·구조 AI센터', nowDesc: 'AI 구조 최적화 알고리즘 개발 · 앵커기업: 삼성중공업', field: '조선·구조 AI센터', color: 'cheong' },
  { han: '貳', yr: '1441 · 過去', name: '측우기 · 수표', hanja: '測雨器·水標', desc: '세계 최초 우량계 · 수위계. 농업용 수자원의 데이터 표준화.', icon: 'fa-droplet', nowHan: 'B', nowYr: '2025 · 現在', nowName: '헬스케어 AI센터', nowDesc: 'AI 솔루션 과제 발굴 · 헬스케어 AX 특화 · 앵커기업: 은성의료재단', field: '헬스케어 AI센터', color: 'jeok' },
  { han: '參', yr: '1434 · 過去', name: '자격루', hanja: '自擊漏', desc: '한국 최초 자동 시계. 생명의 시간성을 인공 시스템에.', icon: 'fa-clock', nowHan: 'C', nowYr: '2025 · 現在', nowName: '소재·재료 AI센터', nowDesc: 'RISE 산학공동연구 추진 · 소재 분야 AX 특화 · 앵커기관: 한국재료연구원', field: '소재·재료 AI센터', color: 'hwang' },
  { han: '肆', yr: '1434 · 過去', name: '갑인자', hanja: '甲寅字', desc: '개량 금속 활자. 지식의 대량 생산·확산을 가능케 한 소재.', icon: 'fa-cube', nowHan: 'D', nowYr: '2025 → 2030', nowName: 'PNU AI Context · E&E Center', nowDesc: 'Sovereign AI Ontology 연구 · AI 교육·윤리 모듈 (전략 특화 센터 확장 계획)', field: 'PNU AI Context Center', color: 'heuk' },
]

const CENTERS = [
  { han: '壹', tag: '앵커기업: 삼성중공업', name: '조선·구조 AI센터', en: 'Shipbuilding & Structural AI Center', desc: 'AI 구조 최적화 알고리즘 개발 · 조선 특화 교과목 5개 개설 · 취업역량 강화 세미나·컨퍼런스 4회 · 삼성중공업 취업 연계 트랙 운영', points: ['AI 구조 최적화 알고리즘', '조선 특화 교과목 5개', '세미나 4회', '재직자 AX 교육 2회'], img: 'marine-ai.jpg', color: 'cheong' },
  { han: '貳', tag: '앵커기업: 은성의료재단', name: '헬스케어 AI센터', en: 'Healthcare AI Center', desc: 'AI 솔루션 과제 발굴 협의 3회 · 양산캠퍼스 연계 헬스케어 AX 특화 연구.', points: ['과제 발굴 협의 3회', '헬스케어 AX 기반 확보', '양산캠퍼스 연계', '에이지테크 공동 연구'], img: 'medical-ai.jpg', color: 'jeok' },
  { han: '參', tag: '앵커기관: 한국재료연구원', name: '소재·재료 AI센터', en: 'Materials AI Center', desc: 'RISE 산학공동연구 과제 추진 · 한국재료연구원 소재 빅데이터와 부산대 AI 모델링을 결합한 소재 AX 연구.', points: ['RISE 산학공동연구 추진', '소재 AX 특화 발굴', '소재 빅데이터 결합', '초거대 제조 AI'], img: 'mfg-ai.jpg', color: 'hwang' },
]

const INFRA = [
  { tag: 'PNU-AXIS 인프라', name: 'AI 컴퓨팅 인프라', desc: '현재 GPU 303장+ · 목표 800장·500억 · 데이터센터 2MW', img: 'quantum.jpg' },
  { tag: 'AI Innovation Hub Space', name: '10,067㎡ 거점 공간', desc: '5개 전용 공간 · 부산·양산캠퍼스', img: 'college-ai.jpg' },
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
  { ini: 'S', name: '삼성중공업', tag: '2025.12.30 · MOU', desc: '<strong>AI 연구협력센터</strong>를 교내 공동 설치. 조선·해양 AI 공동 연구 및 데이터 분석.', meta: '해양 AI · 양 기관 공동 예산', icon: 'fa-ship', link: '/partners#founding', color: 'cheong' },
  { ini: '은', name: '은성의료재단', tag: '2025.12.30 · MOU', desc: '<strong>AX 헬스케어센터</strong>를 양 기관 공동 설치. 의료 AI · 에이지테크 공동 연구.', meta: '의료 AI · 에이지테크', icon: 'fa-heart-pulse', link: '/partners#founding', color: 'jeok' },
  { ini: 'K', name: '한국재료연구원 (KIMS)', tag: '2025.12.30 · MOU', desc: '<strong>PNU 연구협력센터</strong> 공동 설치. 초거대 첨단 제조 AI · 소재 AI 융합 연구.', meta: '소재·제조 AI', icon: 'fa-industry', link: '/partners#founding', color: 'hwang' },
  { ini: 'St', name: 'Stanford University', tag: '연구 협력 · 진행중', desc: '스탠퍼드 AI Lab과 <strong>AI 융합 공동 연구</strong> 협력 중.', meta: '글로벌 · 학술 협력', icon: 'fa-globe', link: '/partners#global', color: 'heuk' },
  { ini: 'E', name: 'ETRI', tag: '한국전자통신연구원', desc: 'AI 응용 기술 협력. <strong>한국어 NLP 모델 공동 연구</strong> · 양자 통신 기술 협력.', meta: '정부 출연연', icon: 'fa-landmark', link: '/partners#gov', color: 'heuk' },
  { ini: 'K', name: '한국전기연구원 (KERI)', tag: '에너지 AI', desc: '차세대 에너지 AI 공동 연구. <strong>AI 기반 스마트 그리드</strong> 및 신재생 에너지 최적화.', meta: '에너지 AI', icon: 'fa-bolt', link: '/partners#gov', color: 'heuk' },
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
  { title: '박사후연구원 채용 (2명)', tag: '채용', date: '2026.05.25 · 마감 6.30', icon: 'fa-user-plus', color: 'cheong' },
  { title: '2026년 연구비 집행 지침 개정 안내', tag: '', date: '2026.05.22', icon: 'fa-bullhorn', color: 'heuk' },
  { title: 'AI 비전 세미나 — Stanford AI Lab 연사', tag: '', date: '2026.06.05 · IT관 세미나실 101', icon: 'fa-calendar', color: 'cheong' },
  { title: '산학협력 기술 발표회', tag: '', date: '2026.06.12 · 대학본부 국제회의실', icon: 'fa-handshake', color: 'jeok' },
  { title: 'CVPR 2026 박진선 교수팀 논문 채택', tag: '', date: '2026.05.18 · VLM 분야', icon: 'fa-trophy', color: 'hwang' },
  { title: '개원 5개월 성과 보고서 공개', tag: '', date: '2026.05.15', icon: 'fa-file-alt', color: 'heuk' },
]

function TopTicker() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  const clock = now.toLocaleTimeString('en-GB', { hour12: false }) + ' KST'
  return (
    <div className="mod-tb-ticker mod-mono" aria-label="live system status">
      <span><i className="fas fa-clock" /> {clock}</span>
      <span className="mod-tb-sep">/</span>
      <span>35°15&apos;N 129°05&apos;E</span>
      <span className="mod-tb-sep">/</span>
      <span className="mod-tb-ok"><span className="mod-dot mod-dot-green" /> AIRCI · SYS_OK</span>
    </div>
  )
}

export default function DashModernist() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const scope = root.current
    if (!scope) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.mod-tb-left > *, .mod-tb-ticker, .mod-tb-right > *', { y: -14, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.05, clearProps: 'transform' })
      gsap.from('.mod-side-item', { x: -14, autoAlpha: 0, duration: 0.4, ease: 'power3.out', stagger: 0.04, clearProps: 'transform' })

      gsap.utils.toArray('.mod-sec-head').forEach((h) => {
        gsap.from(h.children, { y: 22, autoAlpha: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08, clearProps: 'transform', scrollTrigger: { trigger: h, start: 'top 88%', once: true } })
      })

      gsap.utils.toArray('.mod-sec-accent').forEach((bar) => {
        gsap.from(bar, { scaleX: 0, duration: 0.8, ease: 'power3.out', transformOrigin: 'left center', clearProps: 'transform', scrollTrigger: { trigger: bar, start: 'top 92%', once: true } })
      })

      gsap.utils.toArray('.mod-band-anim').forEach((b) => {
        gsap.from(b, { scaleX: 0, duration: 0.9, ease: 'power3.out', transformOrigin: 'left center', clearProps: 'transform', scrollTrigger: { trigger: b, start: 'top 94%', once: true } })
      })

      gsap.utils.toArray('.mod-counter').forEach((el) => {
        const target = parseInt(el.dataset.target, 10)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 1.5, ease: 'power2.out', clearProps: 'transform',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-US') },
        })
      })

      gsap.utils.toArray('.mod-stagger').forEach((group) => {
        const items = group.querySelectorAll(':scope > *')
        gsap.from(items, { y: 26, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.06, clearProps: 'transform', scrollTrigger: { trigger: group, start: 'top 88%', once: true } })
      })

      gsap.utils.toArray('.mod-her-row').forEach((row) => {
        gsap.from(row.children, { y: 24, autoAlpha: 0, duration: 0.55, ease: 'power3.out', stagger: 0.12, clearProps: 'transform', scrollTrigger: { trigger: row, start: 'top 90%', once: true } })
      })

      gsap.utils.toArray('.mod-sec').forEach((sec) => {
        ScrollTrigger.create({
          trigger: sec, start: 'top 55%', end: 'bottom 45%',
          onToggle: (self) => { sec.classList.toggle('is-active', self.isActive) },
        })
      })

      ScrollTrigger.refresh()
    }, scope)

    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="mod" ref={root}>
      <div className="mod-gridbg" aria-hidden="true" />
      <div className="mod-grain" aria-hidden="true" />

      <header className="mod-topbar">
        <div className="mod-tb-left">
          <span className="mod-tb-sig mod-mono">// AIRCI</span>
          <div className="mod-obang" aria-label="오방색">
            <span className="ob-dot ob-cheong" />
            <span className="ob-dot ob-jeok" />
            <span className="ob-dot ob-hwang" />
            <span className="ob-dot ob-baek" />
            <span className="ob-dot ob-heuk" />
          </div>
          <span className="mod-tb-name">장영실 AI 융합연구원</span>
        </div>
        <TopTicker />
        <div className="mod-tb-right">
          <Link to="/news?cat=publication" className="mod-btn"><i className="fas fa-file-alt" /> 논문 검색</Link>
          <Link to="/research" className="mod-btn"><i className="fas fa-file-pdf" /> 백서</Link>
          <Link to="/partners#contact" className="mod-btn mod-btn-solid"><i className="fas fa-handshake" /> 연구 협력 신청</Link>
        </div>
      </header>

      <div className="mod-body">
        <aside className="mod-sidebar">
          <div className="mod-side-head mod-mono">// SECTIONS · 五方</div>
          <nav className="mod-side-nav" aria-label="dashboard sections">
            {NAV.map((n) => (
              <a key={n.code} href={n.href} className={'mod-side-item c-' + n.color}>
                <span className="mod-side-num">{n.han}</span>
                <span className="mod-side-dot" />
                <span className="mod-side-lbl">{n.label}</span>
              </a>
            ))}
          </nav>
          <div className="mod-side-foot">
            <div className="mod-legend mod-mono">
              <div className="mod-legend-row"><span className="ob-dot ob-cheong" /> 청 · EAST</div>
              <div className="mod-legend-row"><span className="ob-dot ob-jeok" /> 적 · SOUTH</div>
              <div className="mod-legend-row"><span className="ob-dot ob-hwang" /> 황 · CENTER</div>
              <div className="mod-legend-row"><span className="ob-dot ob-baek" /> 백 · WEST</div>
              <div className="mod-legend-row"><span className="ob-dot ob-heuk" /> 흑 · NORTH</div>
            </div>
          </div>
        </aside>

        <main className="mod-main">
          {/* 01 OVERVIEW */}
          <section className="mod-sec c-heuk" id="mod-sec-01">
            <div className="mod-sec-accent" />
            <div className="mod-sec-head">
              <div className="mod-sec-num"><span>壹</span></div>
              <div className="mod-sec-meta">
                <div className="mod-sec-kicker mod-mono">01 · OVERVIEW · 2025.12.30 개원</div>
                <h2 className="mod-sec-title">동남권 AI 융합연구 <em>컨트롤타워</em></h2>
                <div className="mod-sec-en mod-mono">Jang Yeong-sil AI Convergence Research Institute · 교학부총장 산하 전담기구 · IT관 13,161㎡</div>
              </div>
            </div>

            <div className="mod-kpi-grid mod-stagger">
              {KPIS.map((k, i) => (
                <div className={'mod-kpi c-' + k.color} key={i}>
                  <div className="mod-kpi-top">
                    <span className="mod-kpi-idx mod-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="mod-kpi-dot" />
                  </div>
                  <div className="mod-kpi-num"><span className="mod-counter" data-target={k.n}>{k.n.toLocaleString('en-US')}</span><sup>{k.unit}</sup></div>
                  <div className="mod-kpi-lbl">{k.label}</div>
                  <div className="mod-kpi-sub mod-mono">{k.sub}</div>
                </div>
              ))}
            </div>

            <div className="mod-vp" style={{ marginTop: 18 }}>
              <img src="/assets/img/it-building.jpg" alt="IT관" className="mod-vp-img" onError={hide} />
              <div className="mod-vp-veil" />
              <div className="mod-vp-body">
                <div>
                  <div className="mod-vp-badge"><span className="mod-dot" /> 동남권 지·산·학·연 일체형 거점 · 2025.12.30 출범</div>
                  <h3 className="mod-vp-title">동남권 AI 융합연구<br /><em>컨트롤타워</em></h3>
                  <p className="mod-vp-desc">장영실 AI 융합연구원은 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 프로젝트 연구센터를 중심으로 앵커기업과 함께 AI 기반 융합연구를 선도합니다. GPU 303장 이상의 PNU-AXIS 인프라와 10,067㎡ AI Innovation Hub Space로 동남권 산업 혁신을 지원합니다.</p>
                  <div className="mod-vp-tags">
                    <span className="mod-vp-tag">조선·구조 AI (삼성중공업)</span>
                    <span className="mod-vp-tag">헬스케어 AI (은성의료재단)</span>
                    <span className="mod-vp-tag">소재·재료 AI (KIMS)</span>
                    <span className="mod-vp-tag">PNU-AXIS GPU 303+장</span>
                  </div>
                </div>
                <div className="mod-vp-stats">
                  <div className="mod-vp-stat"><span className="mod-vp-stat-n mod-mono">303+ GPU</span><span className="mod-vp-stat-l">PNU-AXIS 현재 보유 (목표 800장)</span></div>
                  <div className="mod-vp-stat"><span className="mod-vp-stat-n mod-mono">10,067㎡</span><span className="mod-vp-stat-l">AI Innovation Hub Space</span></div>
                  <div className="mod-vp-stat"><span className="mod-vp-stat-n mod-mono">개원 협약 3건</span><span className="mod-vp-stat-l">삼성중공업·은성의료재단·KIMS</span></div>
                  <div className="mod-vp-stat"><span className="mod-vp-stat-n mod-mono">AX 석사</span><span className="mod-vp-stat-l">산학 공동 지도교수제 운영</span></div>
                </div>
              </div>
            </div>
          </section>

          <div className="mod-band mod-band-tri mod-band-anim" aria-hidden="true" />

          {/* 02 ACTS */}
          <section className="mod-sec c-cheong" id="mod-sec-02">
            <div className="mod-sec-accent" />
            <div className="mod-sec-head">
              <div className="mod-sec-num"><span>貳</span></div>
              <div className="mod-sec-meta">
                <div className="mod-sec-kicker mod-mono">02 · VISION 2030 · ACTS</div>
                <h2 className="mod-sec-title">비전 <em>ACTS</em> 사계</h2>
                <div className="mod-sec-en mod-mono">Acceleration · Core · Transformation · Superiority</div>
              </div>
            </div>
            <div className="mod-acts mod-stagger">
              {ACTS.map((a) => (
                <div className={'mod-act c-' + a.color} key={a.l}>
                  <div className="mod-act-letter">{a.l}</div>
                  <div className="mod-act-name">{a.name}</div>
                  <div className="mod-act-ko">{a.ko}</div>
                  <div className="mod-act-desc">{a.desc}</div>
                </div>
              ))}
            </div>

            <div className="mod-dir" style={{ marginTop: 16 }}>
              <div className="mod-dir-mark"><span>院</span></div>
              <div>
                <div className="mod-dir-name">초대 원장 <small>Founding Director</small></div>
                <div className="mod-dir-pos">장영실AI융합연구원 · 2025.12.30 출범</div>
                <div className="mod-dir-quote">&ldquo;장영실 선생이 노비 출신에서 조선 최고 과학자로 성장했듯, 우리 연구원도 출신과 무관하게 인재가 모이는 개방형 플랫폼이 되어 AI 융합과학의 주권을 선도하겠습니다.&rdquo;</div>
                <div className="mod-dir-meta mod-mono">2025.12.30 · 개원사 中</div>
              </div>
            </div>
          </section>

          <div className="mod-band mod-band-dia mod-band-anim" aria-hidden="true" />

          {/* 03 HERITAGE */}
          <section className="mod-sec c-jeok" id="mod-sec-03">
            <div className="mod-sec-accent" />
            <div className="mod-sec-head">
              <div className="mod-sec-num"><span>參</span></div>
              <div className="mod-sec-meta">
                <div className="mod-sec-kicker mod-mono">03 · HERITAGE × AI · 蔣英實</div>
                <h2 className="mod-sec-title">15세기 발명품이 <em>21세기 AI</em>로</h2>
                <div className="mod-sec-en mod-mono">4 inventions of Jang Yeong-sil → 4 AI domains</div>
              </div>
            </div>
            <div className="mod-her">
              {HERITAGE.map((h) => (
                <div className="mod-her-row" key={h.han}>
                  <div className="mod-her-past c-heuk">
                    <div className="mod-her-top">
                      <span className="mod-her-han">{h.han}</span>
                      <span className="mod-her-yr mod-mono">{h.yr}</span>
                      <span className="mod-her-icon" style={{ marginLeft: 'auto' }}><i className={'fas ' + h.icon} /></span>
                    </div>
                    <div className="mod-her-name">{h.name} <span>{h.hanja}</span></div>
                    <div className="mod-her-desc">{h.desc}</div>
                    <div className="mod-her-field mod-mono">↔ {h.field}</div>
                  </div>
                  <div className="mod-her-arrow"><i className="fas fa-arrow-right" /></div>
                  <div className={'mod-her-now c-' + h.color}>
                    <div className="mod-her-top">
                      <span className="mod-her-han">{h.nowHan}</span>
                      <span className="mod-her-yr mod-mono">{h.nowYr}</span>
                    </div>
                    <div className="mod-her-name">{h.nowName}</div>
                    <div className="mod-her-desc">{h.nowDesc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mod-band mod-band-heuk mod-band-anim" aria-hidden="true" />

          {/* 04 CENTERS */}
          <section className="mod-sec c-cheong" id="mod-sec-04">
            <div className="mod-sec-accent" />
            <div className="mod-sec-head">
              <div className="mod-sec-num"><span>肆</span></div>
              <div className="mod-sec-meta">
                <div className="mod-sec-kicker mod-mono">04 · 3 PROJECT RESEARCH CENTERS</div>
                <h2 className="mod-sec-title">3개 <em>프로젝트 연구센터</em></h2>
                <div className="mod-sec-en mod-mono">Anchor-company-driven convergence research</div>
              </div>
            </div>
            <div className="mod-centers mod-stagger">
              {CENTERS.map((c) => (
                <div className={'mod-center c-' + c.color} key={c.han}>
                  <img src={'/assets/img/' + c.img} alt={c.name} className="mod-center-img" onError={hide} />
                  <div className="mod-center-body">
                    <div className="mod-center-anchor"><i className="fas fa-star" /> {c.tag}</div>
                    <div className="mod-center-name">{c.name}</div>
                    <div className="mod-center-en mod-mono">{c.en}</div>
                    <div className="mod-center-desc">{c.desc}</div>
                    <div className="mod-center-points">
                      {c.points.map((p) => <span key={p}>{p}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mod-infra-grid">
              {INFRA.map((it) => (
                <div className="mod-infra-card" key={it.name}>
                  <div className="mod-infra-tag mod-mono">{it.tag}</div>
                  <div className="mod-infra-name">{it.name}</div>
                  <div className="mod-infra-desc">{it.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 05 PROJECTS */}
          <section className="mod-sec c-jeok" id="mod-sec-05">
            <div className="mod-sec-accent" />
            <div className="mod-sec-head">
              <div className="mod-sec-num"><span>伍</span></div>
              <div className="mod-sec-meta">
                <div className="mod-sec-kicker mod-mono">05 · KEY PROJECTS</div>
                <h2 className="mod-sec-title">주요 <em>추진 과제</em></h2>
                <div className="mod-sec-en mod-mono">Operation status by center</div>
              </div>
            </div>
            <table className="mod-proj-table">
              <thead>
                <tr><th>과제·활동</th><th>센터</th><th>상태</th></tr>
              </thead>
              <tbody>
                {PROJECTS.map((p, i) => (
                  <tr key={i}>
                    <td><div className="mod-proj-name">{p.name}</div></td>
                    <td><span className={'mod-proj-tag ' + p.cls}>{p.center}</span></td>
                    <td><span className={'mod-proj-status ' + (p.status === '운영' ? 'run' : 'plan')}><span className={'mod-status-dot ' + p.dot} />{p.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="mod-band mod-band-tri mod-band-anim" aria-hidden="true" />

          {/* 06 PARTNERS */}
          <section className="mod-sec c-hwang" id="mod-sec-06">
            <div className="mod-sec-accent" />
            <div className="mod-sec-head">
              <div className="mod-sec-num"><span>陸</span></div>
              <div className="mod-sec-meta">
                <div className="mod-sec-kicker mod-mono">06 · STRATEGIC PARTNERS · 개원 동시 협약 3 + 글로벌 3</div>
                <h2 className="mod-sec-title">전략 <em>협력 기관</em></h2>
                <div className="mod-sec-en mod-mono">Founding MOU 2025.12.30 · Global & Gov alliances</div>
              </div>
            </div>
            <div className="mod-partners mod-stagger">
              {PARTNERS.map((p, i) => (
                <Link to={p.link} key={i} className={'mod-partner c-' + p.color}>
                  <div className="mod-partner-top">
                    <div className="mod-partner-logo">{p.ini}</div>
                    <div>
                      <div className="mod-partner-name">{p.name}</div>
                      <div className="mod-partner-tag mod-mono">{p.tag}</div>
                    </div>
                  </div>
                  <div className="mod-partner-desc" dangerouslySetInnerHTML={{ __html: p.desc }} />
                  <div className="mod-partner-meta"><i className={'fas ' + p.icon} /> {p.meta}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* 07 FACILITY */}
          <section className="mod-sec c-hwang" id="mod-sec-07">
            <div className="mod-sec-accent" />
            <div className="mod-sec-head">
              <div className="mod-sec-num"><span>柒</span></div>
              <div className="mod-sec-meta">
                <div className="mod-sec-kicker mod-mono">07 · FACILITY · IT관 본부 거점</div>
                <h2 className="mod-sec-title">국립대학 BTL <em>최대 규모</em> IT관</h2>
                <div className="mod-sec-en mod-mono">2025.12.16 준공 · 본부 및 물리적 거점</div>
              </div>
            </div>
            <div className="mod-it">
              <div className="mod-it-text">
                <div className="mod-it-badge"><i className="fas fa-building" /> IT 관 · 본부 거점</div>
                <div className="mod-it-title">국립대학 BTL <em>최대 규모</em><br />IT관에서 시작됩니다</div>
                <div className="mod-it-desc">2025년 12월 16일 준공된 부산대학교 IT관은 장영실 AI 융합연구원의 본부이자 부산대 AI 거점 사업의 물리적 거점입니다. 친환경 시설(100% LED · 태양광 · 지열 · BEMS).</div>
                <div className="mod-it-stats">
                  {IT_STATS.map((s, i) => (
                    <div className="mod-it-stat" key={i}>
                      <div className="mod-it-stat-tag mod-mono">{s.tag}</div>
                      <div className="mod-it-stat-n mod-mono">{s.n}<span>{s.unit}</span></div>
                      <div className="mod-it-stat-d">{s.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mod-it-image">
                <img src="/assets/img/it-building-2.jpg" alt="IT building" onError={hide} />
              </div>
            </div>
          </section>

          <div className="mod-band mod-band-dia mod-band-anim" aria-hidden="true" />

          <div className="mod-grid-2">
            {/* 08 FACULTY */}
            <section className="mod-sec c-cheong" id="mod-sec-08" style={{ borderTop: 0, paddingTop: 30 }}>
              <div className="mod-sec-accent" />
              <div className="mod-sec-head">
                <div className="mod-sec-num"><span>捌</span></div>
                <div className="mod-sec-meta">
                  <div className="mod-sec-kicker mod-mono">08 · FACULTY</div>
                  <h2 className="mod-sec-title">핵심 <em>연구원</em></h2>
                </div>
              </div>
              <div className="mod-fac mod-stagger">
                {FACULTY.map((f, i) => (
                  <div className="mod-fac-card" key={i}>
                    <div className="mod-fac-avatar"><i className={'fas ' + f.icon} /></div>
                    <div>
                      <div className="mod-fac-name">{f.name}</div>
                      <div className="mod-fac-area">{f.area}</div>
                      <div className="mod-fac-lab mod-mono">{f.lab}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 09 NOTICES */}
            <section className="mod-sec c-jeok" id="mod-sec-09" style={{ borderTop: 0, paddingTop: 30 }}>
              <div className="mod-sec-accent" />
              <div className="mod-sec-head">
                <div className="mod-sec-num"><span>玖</span></div>
                <div className="mod-sec-meta">
                  <div className="mod-sec-kicker mod-mono">09 · NOTICES</div>
                  <h2 className="mod-sec-title"><em>알림</em></h2>
                </div>
              </div>
              <div className="mod-notice">
                {NOTICES.map((n, i) => (
                  <div className="mod-notice-item" key={i}>
                    <div className="mod-notice-idx mod-mono">{String(i + 1).padStart(2, '0')}</div>
                    <div className={'mod-notice-icon c-' + n.color}><i className={'fas ' + n.icon} /></div>
                    <div className="mod-notice-body">
                      <div className="mod-notice-title">{n.title}{n.tag && <span className="mod-notice-tag">{n.tag}</span>}</div>
                      <div className="mod-notice-date mod-mono">{n.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <footer className="mod-footer">
            <div className="mod-footer-big">Arise PNU,<br /><em>같이 더 높게</em></div>
            <div className="mod-footer-info mod-mono">
              © 2026 장영실 AI 융합연구원 · 부산대학교<br />
              부산광역시 금정구 부산대학로 63번길 2 · IT관 1층<br />
              airc@pusan.ac.kr · 051-510-0000
              <div className="mod-footer-mark">END_OF_DOCUMENT // SYS_OK</div>
            </div>
          </footer>
        </main>
      </div>

      <nav className="mod-pill" aria-label="dashboard switch">
        <Link to="/home" className="mod-pill-link"><i className="fas fa-arrow-left" /> 원본</Link>
        <span className="mod-pill-sep" />
        <Link to="/dash" className="mod-pill-link"><i className="fas fa-table-columns" /> 목록</Link>
      </nav>
    </div>
  )
}
