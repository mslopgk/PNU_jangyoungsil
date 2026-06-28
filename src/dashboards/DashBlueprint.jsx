import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-blueprint.css'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  { code: 'A-00', label: '대시보드', active: true },
  { code: 'A-01', label: '비전 ACTS' },
  { code: 'A-02', label: '헤리티지 매핑' },
  { code: 'A-03', label: '연구센터' },
  { code: 'A-04', label: '파트너십' },
  { code: 'A-05', label: '공고' },
]

const NOTES = [
  { d: '05.25', t: '<b>박사후연구원 채용 (2명)</b> — 양자 AI · 의료 AI · 마감 06.30' },
  { d: '05.22', t: '2026년 연구비 집행 지침 개정 안내' },
  { d: '06.05', t: 'AI 비전 세미나 — Stanford AI Lab 연사 · IT관 101' },
  { d: '06.12', t: '산학협력 기술 발표회 · 대학본부 국제회의실' },
  { d: '05.18', t: 'CVPR 2026 박진선 교수팀 논문 채택 · VLM 분야' },
  { d: '05.15', t: '개원 5개월 성과 보고서 공개 (PDF 64p)' },
]

const FAC = [
  { n: '초대 원장', a: '연구원장', l: '융합 AI 연구실' },
  { n: '옥종목 교수', a: '양자 AI · 물리학과', l: '47억 사업 PI' },
  { n: '김호원 교수', a: 'Physical AI 보안', l: 'S3Lab · ITRC' },
  { n: '권선영 교수', a: '신약 AI · GNN', l: 'AI Bio Lab' },
  { n: '전상률 교수', a: 'CV · 생성형 AI', l: 'PNUCVLAB' },
  { n: '류광렬 교수', a: '제조 AI · DS', l: 'DS 대학원장' },
]

export default function DashBlueprint() {
  const root = useRef(null)
  const [clock, setClock] = useState('')

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const t = setInterval(() => setClock(new Date().toLocaleTimeString('en-GB')), 1000)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dbp-head', { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dbp-kpi', { y: 30, autoAlpha: 0, duration: 0.5, stagger: 0.07, ease: 'power3.out', clearProps: 'transform', delay: 0.1 })
      gsap.utils.toArray('.dbp-kpi .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 92%' } })
      })
      gsap.utils.toArray('.dbp-head .rule').forEach((r) => gsap.from(r, { scaleX: 0, duration: 0.8, ease: 'power3.out', transformOrigin: 'left', scrollTrigger: { trigger: r, start: 'top 90%' } }))
      gsap.utils.toArray('.dbp-hero, .dbp-acts, .dbp-heritage, .dbp-card, .dbp-note').forEach((c) => {
        gsap.from(c, { clipPath: 'inset(0 0 100% 0)', duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 88%' } })
      })
      gsap.utils.toArray('.dbp-her-row').forEach((r) => gsap.from(r.children, { y: 24, autoAlpha: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: r, start: 'top 90%' } }))
      gsap.utils.toArray('.dbp-table tbody tr').forEach((r) => gsap.from(r, { x: -24, autoAlpha: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: r, start: 'top 92%' } }))
      gsap.to('.dbp-hero-r img', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.dbp-hero', start: 'top bottom', end: 'bottom top', scrub: true } })
      ScrollTrigger.refresh()
    }, el)
    const rt = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearInterval(t); clearTimeout(rt); ctx.revert() }
  }, [])

  return (
    <div className="dbp" ref={root}>
      <div className="dbp-grid" />
      <div className="dbp-wrap">
        <div className="dbp-top">
          <div className="stamp">
            <div className="mark">蔣</div>
            <div className="nm">{institute.name}<small>JANG YEONG-SIL AI CONVERGENCE RESEARCH INST.</small></div>
          </div>
          <div className="titleblock">
            <div className="tb-cell"><span className="k">Drawing</span><span className="v">AIRCI-01</span></div>
            <div className="tb-cell"><span className="k">Scale</span><span className="v">1 : 200</span></div>
            <div className="tb-cell"><span className="k">Date</span><span className="v">2025.12.30</span></div>
            <div className="tb-cell accent"><span className="k">Status</span><span className="v">▲ OPERATIONAL</span></div>
            <div className="tb-cell"><span className="k">Time</span><span className="v">{clock || '--:--:--'}</span></div>
          </div>
        </div>

        <div className="dbp-layout">
          <aside className="dbp-side">
            <div className="sh">// Sheet Index</div>
            {NAV.map((n) => (
              <div key={n.code} className={'si' + (n.active ? ' active' : '')}>
                <span className="code">{n.code}</span>{n.label}
              </div>
            ))}
            <div className="sh">// System Readout</div>
            <div className="sr"><div className="k">GPU LOAD</div><div className="v">303 / 800</div><div className="bar"><i style={{ width: '38%' }} /></div></div>
            <div className="sr"><div className="k">MOU STATUS</div><div className="v">3 / 3 LIVE</div><div className="bar"><i style={{ width: '100%', background: 'var(--bp-amber)' }} /></div></div>
            <div className="sr"><div className="k">HUB AREA</div><div className="v">10,067 ㎡</div><div className="bar"><i style={{ width: '62%' }} /></div></div>
          </aside>

          <main className="dbp-main">
            {/* KPIs */}
            <div className="dbp-sec">
              <div className="dbp-head"><span className="idx">A-00</span><h2>대시보드 지표</h2><span className="rule" /><span className="meta">UNIT: 개·건·장·㎡·명</span></div>
              <div className="dbp-kpis">
                {stats.map((s, i) => (
                  <div className="dbp-kpi" key={s.label}>
                    <div className="annot">[{String(i + 1).padStart(2, '0')}]</div>
                    <div className="dim">DIM.{i + 1}</div>
                    <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                    <div className="lbl">{s.label}</div>
                    <div className="sub">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero */}
            <div className="dbp-hero">
              <div className="dbp-hero-l">
                <div className="tag">Control Tower · 동남권 AI 융합연구 거점</div>
                <h1>장영실 AI 융합연구원 <em>대시보드</em></h1>
                <p>{institute.desc}. 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 프로젝트 연구센터가 앵커기업과 함께 AI 융합연구를 선도합니다.</p>
                <div className="tags">
                  <span>🚢 삼성중공업</span><span>⚕️ 은성의료재단</span><span>🏭 KIMS</span><span>🖥️ GPU 303+</span>
                </div>
              </div>
              <div className="dbp-hero-r"><img src="/assets/img/it-building.jpg" alt="IT관" /></div>
            </div>

            {/* ACTS */}
            <div className="dbp-sec">
              <div className="dbp-head"><span className="idx">A-01</span><h2>비전 ACTS — Vision 2030</h2><span className="rule" /><span className="meta">4-AXIS FRAMEWORK</span></div>
              <div className="dbp-acts">
                {acts.map((a, i) => (
                  <div className="dbp-act" key={a.l}>
                    <div className="crn">AX-{i + 1}</div>
                    <div className="ltr">{a.l}</div>
                    <div className="nm">{a.name}</div>
                    <div className="ko">{a.ko}</div>
                    <div className="ds">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Heritage mapping */}
            <div className="dbp-sec">
              <div className="dbp-head"><span className="idx">A-02</span><h2>헤리티지 매핑 — 15c 발명 → 21c AI</h2><span className="rule" /><span className="meta">PAST ↔ PRESENT</span></div>
              <div className="dbp-heritage">
                {heritage.map((h) => (
                  <div className="dbp-her-row" key={h.han}>
                    <div className="dbp-her-cell past">
                      <div className="yr">PAST · {h.year} · {h.hanja}</div>
                      <div className="nm">{h.invention} <span>{h.hanja}</span></div>
                      <div className="ds">{h.desc}</div>
                    </div>
                    <div className="dbp-her-arrow">↦ MAPS TO</div>
                    <div className="dbp-her-cell">
                      <div className="yr">PRESENT · 2025 · AI</div>
                      <div className="nm">{h.field}</div>
                      <div className="ds">앵커기업 중심 산학 융합 연구로 계승.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research centers */}
            <div className="dbp-sec">
              <div className="dbp-head"><span className="idx">A-03</span><h2>3개 프로젝트 연구센터</h2><span className="rule" /><span className="meta">SECT.DETAIL</span></div>
              <div className="dbp-cards">
                {centers.map((c, i) => (
                  <div className="dbp-card" key={c.key}>
                    <div className="img"><img src={`/assets/img/${c.key === 'marine' ? 'marine-ai' : c.key === 'medical' ? 'medical-ai' : 'mfg-ai'}.jpg`} alt={c.name} /><span className="lbl">SECT.0{i + 1} · {c.han}</span></div>
                    <div className="bd">
                      <div className="anchor">▸ ANCHOR · {c.anchor}</div>
                      <div className="nm">{c.name}</div>
                      <div className="ds">{c.desc}</div>
                      <div className="pts">{c.points.map((p) => <div key={p}>{p}</div>)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="dbp-sec">
              <div className="dbp-head"><span className="idx">A-04</span><h2>개원 동시 협약 3건</h2><span className="rule" /><span className="meta">MOU · 2025.12.30</span></div>
              <table className="dbp-table">
                <thead><tr><th>No.</th><th>기관</th><th>교내 협력센터</th><th>분야</th><th>협약일</th></tr></thead>
                <tbody>
                  {partners.map((p, i) => (
                    <tr key={p.name}><td className="mono">M-0{i + 1}</td><td><b>{p.name}</b><br /><span style={{ fontSize: 11, color: 'var(--bp-muted)' }}>{p.en}</span></td><td>{p.center}</td><td className="mono">{p.field}</td><td className="mono">{p.date}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Notices + faculty */}
            <div className="dbp-sec">
              <div className="dbp-head"><span className="idx">A-05</span><h2>공고 · 핵심 연구원</h2><span className="rule" /><span className="meta">BULLETIN</span></div>
              <div className="dbp-notes">
                <div className="dbp-note">
                  <div className="h">// 공고 (NOTICE)</div>
                  {NOTES.map((n, i) => <div className="it" key={i}><div className="dt">{n.d}</div><div className="tx">{n.t}</div></div>)}
                </div>
                <div className="dbp-note">
                  <div className="h">// 핵심 연구원 (FACULTY)</div>
                  {FAC.map((f, i) => <div className="it" key={i}><div className="dt">F-0{i + 1}</div><div className="tx"><b>{f.n}</b> · {f.a}<br /><span style={{ fontSize: 11, color: 'var(--bp-muted)' }}>{f.l}</span></div></div>)}
                </div>
              </div>
            </div>

            <div className="dbp-foot">
              <span>{footer.copy} · {footer.addr}</span>
              <span className="sig">"Arise PNU, 같이 더 높게"</span>
              <span>REV. 2026.06 · SHEET 01/01</span>
            </div>
          </main>
        </div>

        <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 4, padding: 5, borderRadius: 999, background: 'rgba(11,42,74,.9)', backdropFilter: 'blur(8px)' }}>
          <Link to="/home" style={pillLink('#fff', 'var(--bp-blue-d)')}>원본</Link>
          <Link to="/dash" style={pillLink('#fff', 'var(--bp-blue-d)')}>목록</Link>
        </div>
      </div>
    </div>
  )
}

function pillLink(color, bg) {
  return { textDecoration: 'none', color, background: bg, fontSize: 12.5, fontWeight: 700, padding: '8px 16px', borderRadius: 999 }
}
