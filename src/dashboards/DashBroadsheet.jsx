import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/dashboard-broadsheet.css'

gsap.registerPlugin(ScrollTrigger)

const hide = (e) => { e.currentTarget.style.display = 'none' }
const fmt = (v) => (v >= 1000 ? Math.round(v).toLocaleString('en-US') : String(Math.round(v)))

const TOC = [
  { num: '§01', title: '개원 현황', sub: 'Founding Vital Statistics', page: 'p.01' },
  { num: '§02', title: '비전 ACTS', sub: 'Vision 2030', page: 'p.02' },
  { num: '§03', title: '헤리티지 매핑', sub: 'Heritage Corpus', page: 'p.04' },
  { num: '§04', title: '프로젝트 연구센터', sub: 'Three Institutes', page: 'p.06' },
  { num: '§05', title: '협약 현황', sub: 'Concordats', page: 'p.08' },
  { num: '§06', title: 'IT관 본부 거점', sub: 'The Seat', page: 'p.09' },
  { num: '§07', title: '핵심 연구원', sub: 'Faculty Index', page: 'p.10' },
  { num: '§08', title: '공고', sub: 'Notices', page: 'p.11' },
]

const KPIS = [
  { n: 3, suffix: '개', label: '프로젝트 연구센터', sub: '앵커기업 중심', icon: 'fa-flask' },
  { n: 3, suffix: '건', label: '개원 동시 산학 협약', sub: '2025.12.30', icon: 'fa-handshake' },
  { n: 303, suffix: '+', label: 'GPU 현재 보유', sub: '800장 확보 목표', icon: 'fa-microchip' },
  { n: 10067, suffix: '㎡', label: 'AI Innovation Hub Space', sub: '5개 캠퍼스 공간', icon: 'fa-building' },
  { n: 80, suffix: '명', label: 'AX 프로젝트 석사 배출 목표', sub: '5년 KPI', icon: 'fa-graduation-cap' },
]

const ACTS = [
  { l: 'A', name: 'Acceleration', ko: '산업화 가속', desc: 'AI 산업화 허브로서 연구 성과를 산업 현장으로 직접 이전합니다.' },
  { l: 'C', name: 'Core', ko: '기초과학 강화', desc: 'AI 핵심기술 개발 및 양자·신경과학 등 기초 강화.' },
  { l: 'T', name: 'Transformation', ko: '산업 혁신', desc: '해양·제조·의료·에너지 국가 전략산업의 AI 전환.' },
  { l: 'S', name: 'Superiority', ko: '경쟁 우위', desc: '차세대 주권기술 개발 · 국가 경쟁우위 확보.' },
]

const HERITAGE = [
  { han: '壹', year: '1433', inv: '혼천의', hanja: '渾天儀', desc: '한국 최초 자동 천구의. 우주의 운행을 한 자리에서 관측.', letter: 'A', now: '조선·구조 AI센터', nowDesc: 'AI 구조 최적화 알고리즘 개발 · 앵커기업: 삼성중공업' },
  { han: '貳', year: '1441', inv: '측우기 · 수표', hanja: '測雨器·水標', desc: '세계 최초 우량계 · 수위계. 농업용 수자원의 데이터 표준화.', letter: 'B', now: '헬스케어 AI센터', nowDesc: 'AI 솔루션 과제 발굴 · 헬스케어 AX 특화 · 앵커기업: 은성의료재단' },
  { han: '參', year: '1434', inv: '자격루', hanja: '自擊漏', desc: '한국 최초 자동 시계. 생명의 시간성을 인공 시스템에.', letter: 'C', now: '소재·재료 AI센터', nowDesc: 'RISE 산학공동연구 추진 · 소재 분야 AX 특화 · 앵커기관: 한국재료연구원' },
  { han: '肆', year: '1434', inv: '갑인자', hanja: '甲寅字', desc: '개량 금속 활자. 지식의 대량 생산·확산을 가능케 한 소재.', letter: 'D', now: 'PNU AI Context · E&E Center', nowDesc: 'Sovereign AI Ontology 연구 · AI 교육·윤리 모듈 (전략 특화 센터 확장 계획)' },
]

const CENTERS = [
  { idx: 'Ⅰ', name: '조선·구조 AI센터', en: 'Shipbuilding & Structural AI Center', anchor: '삼성중공업', desc: 'AI 기반 구조 최적화 알고리즘 개발. 조선 특화 교과목 5개 개설, 세미나·컨퍼런스 4회, 삼성중공업 취업 연계 트랙 운영.', img: '/assets/img/marine-ai.jpg', stats: [{ n: 5, u: '개', l: '특화 교과목' }, { n: 4, u: '회', l: '세미나·컨퍼런스' }] },
  { idx: 'Ⅱ', name: '헬스케어 AI센터', en: 'Healthcare AI Center', anchor: '은성의료재단', desc: '의료 AI 솔루션 과제 발굴. 양산캠퍼스 연계 헬스케어 AX 특화 연구. AI 솔루션 과제 발굴 협의 3회 진행.', img: '/assets/img/medical-ai.jpg', stats: [] },
  { idx: 'Ⅲ', name: '소재·재료 AI센터', en: 'Materials AI Center', anchor: '한국재료연구원', desc: 'RISE 산학공동연구 과제 추진. 한국재료연구원의 소재 빅데이터와 부산대 AI 모델링을 결합한 소재 AX 연구.', img: '/assets/img/mfg-ai.jpg', stats: [] },
]

const INFRA = [
  { name: 'PNU-AXIS 인프라', en: 'AI Computing Infrastructure', desc: '현재 GPU 303장+ · 목표 800장·500억 · 데이터센터 2MW', img: '/assets/img/quantum.jpg', icon: 'fa-microchip' },
  { name: 'AI Innovation Hub Space', en: '10,067㎡ 거점 공간', desc: '5개 전용 공간 · 부산·양산캠퍼스', img: '/assets/img/college-ai.jpg', icon: 'fa-building' },
]

const PARTNERS = [
  { no: '01', name: '삼성중공업', en: 'Samsung Heavy Industries', center: 'AI 연구협력센터', field: '해양·물류 AI', date: '2025.12.30', founding: true },
  { no: '02', name: '은성의료재단', en: 'Eunsung Medical Foundation', center: 'AX 헬스케어센터', field: '의료·바이오 AI', date: '2025.12.30', founding: true },
  { no: '03', name: '한국재료연구원', en: 'KIMS', center: 'PNU 연구협력센터', field: '소재·제조 AI', date: '2025.12.30', founding: true },
  { no: '04', name: 'Stanford University', en: 'Stanford AI Lab', center: 'AI 융합 공동 연구', field: '글로벌 · 학술', date: '진행중', founding: false },
  { no: '05', name: 'ETRI', en: '한국전자통신연구원', center: '한국어 NLP · 양자 통신', field: '정부 출연연', date: '협력중', founding: false },
  { no: '06', name: '한국전기연구원', en: 'KERI', center: '스마트 그리드 · 신재생', field: '에너지 AI', date: '협력중', founding: false },
]

const FACULTY = [
  { no: '01', name: '초대 원장', area: '연구원장', lab: '융합 AI 연구실', icon: 'fa-user-tie' },
  { no: '02', name: '옥종목 교수', area: '양자 AI · 물리학과', lab: '47억 사업 PI', icon: 'fa-atom' },
  { no: '03', name: '김호원 교수', area: 'Physical AI 보안', lab: 'S3Lab · ITRC', icon: 'fa-shield-halved' },
  { no: '04', name: '권선영 교수', area: '신약 AI · GNN', lab: 'AI Bio Lab', icon: 'fa-flask-vial' },
  { no: '05', name: '전상률 교수', area: 'CV · 생성형 AI', lab: 'PNUCVLAB', icon: 'fa-eye' },
  { no: '06', name: '류광렬 교수', area: '제조 AI · DS', lab: 'DS 대학원장', icon: 'fa-gears' },
]

const NOTICES = [
  { cat: '채용', title: '박사후연구원 채용 (2명)', date: '2026.05.25', meta: '마감 6.30', icon: 'fa-user-plus' },
  { cat: '공문', title: '2026년 연구비 집행 지침 개정 안내', date: '2026.05.22', meta: '', icon: 'fa-bullhorn' },
  { cat: '세미나', title: 'AI 비전 세미나 — Stanford AI Lab 연사', date: '2026.06.05', meta: 'IT관 세미나실 101', icon: 'fa-calendar' },
  { cat: '행사', title: '산학협력 기술 발표회', date: '2026.06.12', meta: '대학본부 국제회의실', icon: 'fa-handshake' },
  { cat: '성과', title: 'CVPR 2026 박진선 교수팀 논문 채택', date: '2026.05.18', meta: 'VLM 분야', icon: 'fa-trophy' },
  { cat: '보고', title: '개원 5개월 성과 보고서 공개', date: '2026.05.15', meta: '', icon: 'fa-file-alt' },
]

const IT_STATS = [
  { tag: '총 사업비', count: 267, suffix: '억원', sub: '국립대 BTL 최대 규모' },
  { tag: '연면적', count: 13161, suffix: '㎡', sub: '지하 1층 · 지상 10층' },
  { tag: '준공', count: 2025, suffix: '.12.16', sub: '개원식 12.30' },
]

export default function DashBroadsheet() {
  const rootRef = useRef(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.from('.bs-mast-title .bs-line-inner', {
        yPercent: 120, duration: 1.05, ease: 'power4.out', stagger: 0.13, delay: 0.12,
      })
      gsap.from('.bs-mast-kicker, .bs-mast-sub, .bs-mast-left > *, .bs-mast-right > *', {
        y: 18, autoAlpha: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06, delay: 0.45, clearProps: 'transform',
      })
      gsap.from('.bs-toc-list li', {
        x: -16, autoAlpha: 0, duration: 0.5, ease: 'power3.out', stagger: 0.045, delay: 0.6, clearProps: 'transform',
      })
      gsap.from('.bs-toc-head, .bs-sidebar-foot', {
        y: 14, autoAlpha: 0, duration: 0.5, ease: 'power3.out', delay: 0.55, clearProps: 'transform',
      })

      gsap.utils.toArray('.bs-sec-head').forEach((h) => {
        gsap.from(h.children, {
          y: 28, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, clearProps: 'transform',
          scrollTrigger: { trigger: h, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('.bs-dcap').forEach((el) => {
        gsap.from(el, {
          scale: 0.3, autoAlpha: 0, duration: 0.9, ease: 'power3.out', clearProps: 'transform',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        })
      })

      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = parseFloat(el.dataset.count)
        if (Number.isNaN(target)) return
        el.textContent = '0'
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 1.8, ease: 'power2.out',
          onUpdate: () => { el.textContent = fmt(obj.v) },
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        })
      })

      gsap.utils.toArray('.bs-databox').forEach((box) => {
        gsap.from(box.children, {
          y: 22, autoAlpha: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08, clearProps: 'transform',
          scrollTrigger: { trigger: box, start: 'top 90%', once: true },
        })
      })

      gsap.utils.toArray('.bs-pullquote').forEach((q) => {
        gsap.from(q, {
          clipPath: 'inset(0 100% 0 0)', autoAlpha: 0, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: q, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('.bs-stagger').forEach((group) => {
        gsap.from(group.children, {
          y: 26, autoAlpha: 0, duration: 0.6, ease: 'power3.out', stagger: 0.07, clearProps: 'transform',
          scrollTrigger: { trigger: group, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('.bs-reveal').forEach((el) => {
        gsap.from(el, {
          y: 30, autoAlpha: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
      })

      ScrollTrigger.refresh()
    }, root)

    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="bs-root" ref={rootRef}>
      <div className="bs-grain" aria-hidden="true"></div>

      <header className="bs-topbar">
        <div className="bs-mast-rule bs-mast-rule-top"></div>
        <div className="bs-mast-inner">
          <div className="bs-mast-left">
            <div className="bs-mast-vol">Vol. I &middot; No. 1</div>
            <div className="bs-mast-est">Established MMXXV</div>
          </div>
          <div className="bs-mast-center">
            <div className="bs-mast-kicker">JANG YEONG-SIL AI CONVERGENCE RESEARCH INSTITUTE &middot; THE ACADEMIC GAZETTE</div>
            <h1 className="bs-mast-title">
              <span className="bs-line-mask"><span className="bs-line-inner">장영실 AI</span></span>
              <span className="bs-line-mask"><span className="bs-line-inner">융합연구원</span></span>
            </h1>
            <div className="bs-mast-sub">동남권 AI 융합연구 컨트롤타워 &middot; 교학부총장 산하 전담기구</div>
          </div>
          <div className="bs-mast-right">
            <div className="bs-mast-date">2025.12.30</div>
            <div className="bs-mast-loc">부산대학교 IT관</div>
          </div>
        </div>
        <div className="bs-mast-rule bs-mast-rule-bot"></div>
        <div className="bs-mast-toolrow">
          <div className="bs-mast-search">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="연구센터 · 과제 · 논문 검색…" aria-label="검색" />
          </div>
          <div className="bs-mast-tools">
            <Link to="/news?cat=publication" className="bs-tool-link"><i className="fas fa-file-alt"></i> 논문 검색</Link>
            <Link to="/research" className="bs-tool-link"><i className="fas fa-file-pdf"></i> 백서</Link>
            <Link to="/partners#contact" className="bs-tool-link bs-tool-accent"><i className="fas fa-handshake"></i> 연구 협력 신청</Link>
            <span className="bs-mast-live"><span className="bs-live-dot"></span> 개원 운영중</span>
          </div>
        </div>
      </header>

      <div className="bs-body">
        <aside className="bs-sidebar" aria-label="목차">
          <div className="bs-toc-head">
            <span className="bs-toc-head-kr">목차</span>
            <span className="bs-toc-head-en">CONTENTS</span>
          </div>
          <ol className="bs-toc-list">
            {TOC.map((t) => (
              <li key={t.num}>
                <a href={'#' + t.num}>
                  <span className="bs-toc-num">{t.num}</span>
                  <span className="bs-toc-text">
                    <span className="bs-toc-title">{t.title}</span>
                    <span className="bs-toc-sub">{t.sub}</span>
                  </span>
                  <span className="bs-toc-page">{t.page}</span>
                </a>
              </li>
            ))}
          </ol>
          <div className="bs-sidebar-foot">
            <img src="/assets/pnu-symbol-color.jpg" alt="PNU" className="bs-seal" onError={hide} />
            <div className="bs-foot-line"><i className="fas fa-microchip"></i> GPU <strong>303+</strong></div>
            <div className="bs-foot-line bs-foot-meta">개원 · 2025.12.30</div>
          </div>
        </aside>

        <main className="bs-main">
          <section className="bs-sec" id="§01">
            <div className="bs-sec-head">
              <span className="bs-sec-mark">§01</span>
              <h2 className="bs-sec-title">개원 현황 <em>Founding Vital Statistics</em></h2>
              <span className="bs-sec-kicker">GAZETTE OF THE OPENING</span>
            </div>
            <div className="bs-sec-body">
              <p className="bs-lead bs-cols-2">
                <span className="bs-dcap">장</span>영실 AI 융합연구원은 2025년 12월 30일, 동남권 AI 융합연구의 컨트롤타워로서 부산대학교 IT관에서 출범하였다. 조선·구조 AI, 헬스케어 AI, 소재·재료 AI 세 개의 프로젝트 연구센터를 중심으로 앵커기업과 함께 AI 기반 융합연구를 선도하며, GPU 303장 이상의 PNU-AXIS 인프라와 10,067㎡의 AI Innovation Hub Space로 동남권 산업 혁신을 지원한다.
              </p>
              <div className="bs-databox">
                {KPIS.map((k) => (
                  <div className="bs-db-item" key={k.label}>
                    <div className="bs-db-icon"><i className={'fas ' + k.icon}></i></div>
                    <div className="bs-db-num"><span data-count={k.n}>{fmt(k.n)}</span><sup>{k.suffix}</sup></div>
                    <div className="bs-db-label">{k.label}</div>
                    <div className="bs-db-sub">{k.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bs-sec" id="§02">
            <div className="bs-sec-head">
              <span className="bs-sec-mark">§02</span>
              <h2 className="bs-sec-title">비전 ACTS <em>Vision 2030</em></h2>
              <span className="bs-sec-kicker">FOUR PILLARS OF THE CHARTER</span>
            </div>
            <div className="bs-sec-body">
              <blockquote className="bs-pullquote">
                <p>&ldquo;장영실 선생이 노비 출신에서 조선 최고 과학자로 성장했듯, 우리 연구원도 출신과 무관하게 인재가 모이는 개방형 플랫폼이 되어 AI 융합과학의 주권을 선도하겠습니다.&rdquo;</p>
                <cite>— 초대 원장, 2025.12.30 개원사 中</cite>
              </blockquote>
              <div className="bs-acts-grid bs-stagger">
                {ACTS.map((a) => (
                  <article className="bs-act" key={a.l}>
                    <div className="bs-act-letter">{a.l}</div>
                    <div className="bs-act-name">{a.name}</div>
                    <div className="bs-act-ko">{a.ko}</div>
                    <p className="bs-act-desc">{a.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bs-sec" id="§03">
            <div className="bs-sec-head">
              <span className="bs-sec-mark">§03</span>
              <h2 className="bs-sec-title">헤리티지 매핑 <em>Heritage Corpus</em></h2>
              <span className="bs-sec-kicker">15세기 발명품이 21세기 AI가 되다</span>
            </div>
            <div className="bs-sec-body">
              <p className="bs-lead">
                <span className="bs-dcap">蔣</span>英實 선생의 네 가지 발명품이 네 개의 AI 연구센터로 계승된다. 과거의 측정·인지·소재 혁신이 오늘의 AI 융합으로 이어지는, 육백 년의 학맥(學脈)을 아래에 기록한다.
              </p>
              <div className="bs-her-list bs-stagger">
                {HERITAGE.map((h) => (
                  <article className="bs-her-entry" key={h.han}>
                    <div className="bs-her-past">
                      <div className="bs-her-mark"><span className="bs-her-han">{h.han}</span><span className="bs-her-year">{h.year} · 過去</span></div>
                      <h3 className="bs-her-name">{h.inv} <span className="bs-her-hanja">{h.hanja}</span></h3>
                      <p className="bs-her-desc">{h.desc}</p>
                    </div>
                    <div className="bs-her-rule"><span className="bs-her-arrow"><i className="fas fa-arrow-right-long"></i></span></div>
                    <div className="bs-her-now">
                      <div className="bs-her-nletter">{h.letter}</div>
                      <div className="bs-her-ntag">2025 · 現在</div>
                      <h4 className="bs-her-nname">{h.now}</h4>
                      <p className="bs-her-ndesc">{h.nowDesc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bs-sec" id="§04">
            <div className="bs-sec-head">
              <span className="bs-sec-mark">§04</span>
              <h2 className="bs-sec-title">프로젝트 연구센터 <em>Three Institutes</em></h2>
              <span className="bs-sec-kicker">앵커기업 중심 산학 융합</span>
            </div>
            <div className="bs-sec-body">
              <div className="bs-center-list bs-stagger">
                {CENTERS.map((c) => (
                  <article className="bs-center" key={c.idx}>
                    <div className="bs-center-idx">{c.idx}</div>
                    <div className="bs-center-body">
                      <div className="bs-center-anchor"><i className="fas fa-star"></i> 앵커기업 · {c.anchor}</div>
                      <h3 className="bs-center-name">{c.name}</h3>
                      <div className="bs-center-en">{c.en}</div>
                      <p className="bs-center-desc">{c.desc}</p>
                      {c.stats.length > 0 && (
                        <div className="bs-center-stats">
                          {c.stats.map((s) => (
                            <div className="bs-center-stat" key={s.l}>
                              <span className="bs-center-stat-n"><span data-count={s.n}>{fmt(s.n)}</span><sup>{s.u}</sup></span>
                              <span className="bs-center-stat-l">{s.l}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <figure className="bs-center-plate">
                      <img src={c.img} alt={c.name} onError={hide} />
                      <figcaption>Plate · {c.idx}</figcaption>
                    </figure>
                  </article>
                ))}
              </div>
              <div className="bs-infra-grid bs-stagger">
                {INFRA.map((it) => (
                  <article className="bs-infra" key={it.name}>
                    <figure className="bs-infra-plate"><img src={it.img} alt={it.name} onError={hide} /></figure>
                    <div className="bs-infra-body">
                      <div className="bs-infra-ic"><i className={'fas ' + it.icon}></i></div>
                      <h4 className="bs-infra-name">{it.name}</h4>
                      <div className="bs-infra-en">{it.en}</div>
                      <p className="bs-infra-desc">{it.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bs-sec" id="§05">
            <div className="bs-sec-head">
              <span className="bs-sec-mark">§05</span>
              <h2 className="bs-sec-title">협약 현황 <em>Concordats</em></h2>
              <span className="bs-sec-kicker">개원 동시 협약 3 + 글로벌 3</span>
            </div>
            <div className="bs-sec-body">
              <table className="bs-partner-table">
                <thead>
                  <tr>
                    <th className="col-no">№</th>
                    <th className="col-name">협약기관</th>
                    <th className="col-center">공동설치 센터</th>
                    <th className="col-field">연구 분야</th>
                    <th className="col-date">협약일</th>
                  </tr>
                </thead>
                <tbody>
                  {PARTNERS.map((p) => (
                    <tr key={p.no} className={p.founding ? 'is-founding' : ''}>
                      <td className="col-no">{p.no}</td>
                      <td className="col-name">
                        <span className="bs-pt-name">{p.name}</span>
                        <span className="bs-pt-en">{p.en}</span>
                      </td>
                      <td className="col-center">{p.center}</td>
                      <td className="col-field">{p.field}</td>
                      <td className="col-date">{p.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bs-table-note">
                <i className="fas fa-asterisk"></i> №01–03 은 2025.12.30 개원식에서 동시 체결된 산학협약(MOU)이다.
              </div>
            </div>
          </section>

          <section className="bs-sec" id="§06">
            <div className="bs-sec-head">
              <span className="bs-sec-mark">§06</span>
              <h2 className="bs-sec-title">IT관 본부 거점 <em>The Seat</em></h2>
              <span className="bs-sec-kicker">국립대학 BTL 최대 규모</span>
            </div>
            <div className="bs-sec-body">
              <div className="bs-it-feature bs-reveal">
                <figure className="bs-it-plate">
                  <img src="/assets/img/it-building.jpg" alt="부산대 IT관" onError={hide} />
                  <figcaption>Fig. 1 — 부산대학교 IT관, 2025.12.16 준공</figcaption>
                </figure>
                <div className="bs-it-text">
                  <p className="bs-lead">
                    <span className="bs-dcap">2</span>025년 12월 16일 준공된 부산대학교 IT관은 장영실 AI 융합연구원의 본부이자 부산대 AI 거점 사업의 물리적 거점이다. 친환경 시설(100% LED · 태양광 · 지열 · BEMS)을 갖추었으며, 국립대학 BTL 사업 최대 규모의 단일 건축물이다.
                  </p>
                  <div className="bs-it-stats">
                    {IT_STATS.map((s) => (
                      <div className="bs-it-stat" key={s.tag}>
                        <div className="bs-it-stat-tag">{s.tag}</div>
                        <div className="bs-it-stat-n"><span data-count={s.count}>{fmt(s.count)}</span><sup>{s.suffix}</sup></div>
                        <div className="bs-it-stat-d">{s.sub}</div>
                      </div>
                    ))}
                    <div className="bs-it-stat">
                      <div className="bs-it-stat-tag">친환경</div>
                      <div className="bs-it-stat-n"><i className="fas fa-leaf"></i> 100<sup>% LED</sup></div>
                      <div className="bs-it-stat-d">태양광 · 지열 · BEMS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bs-sec" id="§07">
            <div className="bs-sec-head">
              <span className="bs-sec-mark">§07</span>
              <h2 className="bs-sec-title">핵심 연구원 <em>Faculty Index</em></h2>
              <span className="bs-sec-kicker">대표 연구진 명부</span>
            </div>
            <div className="bs-sec-body">
              <div className="bs-fac-grid bs-stagger">
                {FACULTY.map((f) => (
                  <article className="bs-fac" key={f.no}>
                    <span className="bs-fac-no">{f.no}</span>
                    <span className="bs-fac-ic"><i className={'fas ' + f.icon}></i></span>
                    <div className="bs-fac-body">
                      <div className="bs-fac-name">{f.name}</div>
                      <div className="bs-fac-area">{f.area}</div>
                      <div className="bs-fac-lab">{f.lab}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bs-sec" id="§08">
            <div className="bs-sec-head">
              <span className="bs-sec-mark">§08</span>
              <h2 className="bs-sec-title">공고 <em>Notices</em></h2>
              <span className="bs-sec-kicker">연구원 게시</span>
            </div>
            <div className="bs-sec-body">
              <div className="bs-notice-list bs-stagger">
                {NOTICES.map((n) => (
                  <article className="bs-notice" key={n.title}>
                    <div className="bs-notice-date">{n.date}</div>
                    <div className="bs-notice-ic"><i className={'fas ' + n.icon}></i></div>
                    <div className="bs-notice-body">
                      <span className="bs-notice-cat">{n.cat}</span>
                      <div className="bs-notice-title">{n.title}</div>
                      {n.meta && <div className="bs-notice-meta">{n.meta}</div>}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <footer className="bs-colophon">
            <div className="bs-col-rule"></div>
            <div className="bs-colophon-inner">
              <div className="bs-colophon-big">Arise PNU, <em>같이 더 높게</em></div>
              <div className="bs-colophon-info">
                <p>© 2026 장영실 AI 융합연구원 · 부산대학교</p>
                <p>부산광역시 금정구 부산대학로 63번길 2 · IT관 1층</p>
                <p>airc@pusan.ac.kr · 051-510-0000</p>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <nav className="bs-pillnav" aria-label="대시보드 전환">
        <Link to="/home"><i className="fas fa-table-columns"></i> 원본</Link>
        <span className="bs-pillnav-sep"></span>
        <Link to="/dash"><i className="fas fa-grip"></i> 목록</Link>
      </nav>
    </div>
  )
}
