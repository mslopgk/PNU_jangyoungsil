import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-industrial.css'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  { l: '대시보드', active: true },
  { l: '비전 ACTS' },
  { l: '헤리티지' },
  { l: '연구센터' },
  { l: '파트너십' },
  { l: '공고' },
]
const NOTES = [
  { d: '05.25', t: '<b>박사후연구원 채용 (2명)</b> — 양자·의료 AI' },
  { d: '05.22', t: '2026년 연구비 집행 지침 개정' },
  { d: '06.05', t: 'AI 비전 세미나 — Stanford 연사' },
  { d: '06.12', t: '산학협력 기술 발표회' },
  { d: '05.18', t: 'CVPR 2026 논문 채택' },
  { d: '05.15', t: '개원 5개월 성과 보고서' },
]
const FAC = [
  { n: '초대 원장', a: '융합 AI 연구실' },
  { n: '옥종목 교수', a: '양자 AI · 47억 PI' },
  { n: '김호원 교수', a: 'Physical AI 보안' },
  { n: '권선영 교수', a: '신약 AI · GNN' },
  { n: '전상률 교수', a: 'CV · PNUCVLAB' },
  { n: '류광렬 교수', a: '제조 AI · DS' },
]
const GAUGE = [{ k: 'GPU 데이터센터', v: '303', s: ' / 800', p: '38%' }, { k: 'FACILITY 준공', v: '100', s: '%', p: '100%' }, { k: 'MOU 가동', v: '3', s: ' / 3', p: '100%' }]

export default function DashIndustrial() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.din-phead > *', { y: 22, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.din-kpi', { y: 26, autoAlpha: 0, duration: 0.55, stagger: 0.06, ease: 'power3.out', clearProps: 'transform', delay: 0.12 })
      gsap.utils.toArray('.din-kpi .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.7, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 92%' } })
      })
      gsap.utils.toArray('.din-side .gauge .bar i').forEach((b) => gsap.from(b, { scaleX: 0, duration: 1, ease: 'power2.out', transformOrigin: 'left', scrollTrigger: { trigger: b, start: 'top 95%' } }))
      gsap.utils.toArray('.din-hero, .din-act, .din-h, .din-card, .din-partner, .din-note, .din-foot').forEach((c) => {
        gsap.from(c, { y: 24, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 92%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="din" ref={root}>
      <div className="din-top">
        <div className="brand">
          <div className="logo">蔣</div>
          <div className="nm">{institute.name}<small>AIRCI · FACILITY OPERATIONS</small></div>
        </div>
        <div className="crumb">UNIT-01 · DASHBOARD</div>
        <div className="actions"><Link to="/partners#contact" className="cta">연구 협력 신청</Link></div>
      </div>

      <div className="din-layout">
        <aside className="din-side din-plate">
          <div className="sh">// Navigation</div>
          {NAV.map((n, i) => (
            <div key={n.l} className={'si ' + (n.active ? 'active' : '')}><span className="rv" />{n.l}</div>
          ))}
          <div className="sh">// Facility Status</div>
          {GAUGE.map((g) => (
            <div className="gauge" key={g.k}>
              <div className="k">{g.k}</div>
              <div className="v">{g.v}<small>{g.s}</small></div>
              <div className="bar"><i style={{ width: g.p }} /></div>
            </div>
          ))}
        </aside>

        <main className="din-main">
          <div className="din-phead din-plate">
            <div>
              <div className="tag"><span className="din-hazard-thin" style={{ width: 18, height: 4, display: 'inline-block' }} /> CONTROL TOWER · {institute.founded}</div>
              <h1>장영실 AI 융합연구원 대시보드</h1>
              <p>{institute.desc}</p>
            </div>
            <Link to="/partners#contact" className="btn">연구 협력 신청 →</Link>
          </div>

          <div className="din-kpis">
            {stats.map((s) => (
              <div className="din-kpi din-plate" key={s.label}>
                <div className="strip din-hazard-thin" />
                <div className="lbl">{s.label}</div>
                <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                <div className="sub">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="din-hero din-plate">
            <div className="din-hero-l">
              <div className="tag">// MISSION BRIEF</div>
              <h2>3개 센터 · 앵커기업 중심 AI 융합연구</h2>
              <p>조선·구조 AI · 헬스케어 AI · 소재·재료 AI 센터가 삼성중공업·은성의료재단·KIMS와 함께 GPU 303+장 인프라로 동남권 산업 혁신을 선도합니다.</p>
              <div className="tags">{['🚢 삼성중공업', '⚕️ 은성의료재단', '🏭 KIMS', '🖥️ PNU-AXIS'].map((t) => <span key={t}>{t}</span>)}</div>
            </div>
            <div className="din-hero-r"><img src="/assets/img/it-building.jpg" alt="IT관" /></div>
          </div>

          <div className="din-stitle"><span className="n">SECT.01</span><h2>비전 ACTS</h2><span className="r din-hazard-thin" /></div>
          <div className="din-acts">
            {acts.map((a, i) => (
              <div className="din-act din-plate" key={a.l}>
                <div className={'ltr' + (i % 2 ? ' h' : '')}>{a.l}</div>
                <div className="nm">{a.name}</div>
                <div className="ko">{a.ko}</div>
                <div className="ds">{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="din-stitle"><span className="n">SECT.02</span><h2>헤리티지 매핑</h2><span className="r din-hazard-thin" /></div>
          <div className="din-heritage">
            {heritage.map((h) => (
              <div className="din-h din-plate" key={h.han}>
                <div className="top"><div className="han">{h.han}</div><div className="yr">{h.year} · {h.hanja}</div></div>
                <div className="nm">{h.invention} <span>{h.hanja}</span></div>
                <div className="ds">{h.desc}</div>
                <div className="field">▸ {h.field}</div>
              </div>
            ))}
          </div>

          <div className="din-stitle"><span className="n">SECT.03</span><h2>3개 연구센터</h2><span className="r din-hazard-thin" /></div>
          <div className="din-cards">
            {centers.map((c, i) => (
              <div className="din-card din-plate" key={c.key}>
                <div className="img"><img src={`/assets/img/${c.key === 'marine' ? 'marine-ai' : c.key === 'medical' ? 'medical-ai' : 'mfg-ai'}.jpg`} alt={c.name} /><span className="tag">UNIT.0{i + 1}</span></div>
                <div className="bd">
                  <div className="anchor">▸ {c.anchor}</div>
                  <div className="nm">{c.name}</div>
                  <div className="ds">{c.desc}</div>
                  <div className="pts">{c.points.map((p) => <div key={p}>{p}</div>)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="din-stitle"><span className="n">SECT.04</span><h2>파트너십 · 협약 3건</h2><span className="r din-hazard-thin" /></div>
          <div className="din-partners">
            {partners.map((p) => (
              <div className="din-partner din-plate" key={p.name}>
                <div className="ini">{p.initial}</div>
                <div className="nm">{p.name}</div>
                <div className="en">{p.en}</div>
                <div className="ct">{p.center} · {p.field}</div>
                <div className="dt">{p.date}</div>
              </div>
            ))}
          </div>

          <div className="din-stitle"><span className="n">SECT.05</span><h2>공고 · 연구원</h2><span className="r din-hazard-thin" /></div>
          <div className="din-notes">
            <div className="din-note din-plate">
              <div className="h">// 공고</div>
              {NOTES.map((n, i) => <div className="it" key={i}><div className="d">{n.d}</div><div className="t">{n.t}</div></div>)}
            </div>
            <div className="din-note din-plate">
              <div className="h">// 핵심 연구원</div>
              {FAC.map((f, i) => <div className="it" key={i}><div className="d">F-0{i + 1}</div><div className="t"><b>{f.n}</b> · {f.a}</div></div>)}
            </div>
          </div>

          <div className="din-foot din-plate">
            <div className="big">// Arise PNU, 같이 더 높게</div>
            <div className="info">{institute.name} · {footer.addr}<br />{footer.contact} · {footer.copy}</div>
          </div>
        </main>
      </div>

      <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 0, background: 'var(--in-plate)', border: '2px solid var(--in-ink)', boxShadow: '3px 3px 0 var(--in-ink)' }}>
        <Link to="/home" style={pill('var(--in-body)', '1px solid var(--in-line)')}>원본</Link>
        <Link to="/dash" style={pill('var(--in-hazard)', 'none', 'var(--in-ink)')}>목록</Link>
      </div>
    </div>
  )
}

function pill(color, border, bg) {
  return { textDecoration: 'none', color, background: bg || 'transparent', borderLeft: border, fontFamily: "'Oswald',sans-serif", fontSize: 13, fontWeight: 700, padding: '8px 16px', textTransform: 'uppercase', letterSpacing: '.04em' }
}
