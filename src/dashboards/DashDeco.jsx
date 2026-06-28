import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-deco.css'

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
  { d: '05.25', t: '<b>박사후연구원 채용 (2명)</b> · 양자·의료 AI' },
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
  { n: '전상률 교수', a: 'CV · 생성형 AI' },
  { n: '류광렬 교수', a: '제조 AI · DS' },
]

export default function DashDeco() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dde-phead .kicker, .dde-phead h1, .dde-phead p, .dde-phead .orn', { y: 26, autoAlpha: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dde-kpi', { y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.09, ease: 'power3.out', clearProps: 'transform', delay: 0.3 })
      gsap.utils.toArray('.dde-kpi .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.8, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 90%' } })
      })
      gsap.utils.toArray('.dde-stitle, .dde-act, .dde-h, .dde-card, .dde-partner, .dde-note').forEach((c) => {
        gsap.from(c, { y: 34, autoAlpha: 0, duration: 0.8, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 90%' } })
      })
      gsap.utils.toArray('.dde-note .it').forEach((r) => gsap.from(r, { x: -14, autoAlpha: 0, duration: 0.4, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: r, start: 'top 94%' } }))
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dde" ref={root}>
      <div className="dde-top">
        <div className="brand">
          <div className="logo"><span>蔣</span></div>
          <div className="nm">{institute.name}<small>AIRCI · EST. 2025</small></div>
        </div>
        <div className="crumb">airc.pusan.ac.kr — 대시보드</div>
        <div className="actions"><Link to="/partners#contact" className="cta">연구 협력 신청</Link></div>
      </div>

      <div className="dde-layout">
        <aside className="dde-side dde-panel framed">
          <div className="sh">— Index —</div>
          {NAV.map((n) => (
            <div key={n.l} className={'si ' + (n.active ? 'active' : '')}><span className="d">◆</span>{n.l}</div>
          ))}
          <div className="medallion"><div><div className="y">2025</div><small>FOUNDED</small></div></div>
        </aside>

        <main className="dde-main">
          <div className="dde-phead dde-panel framed">
            <div className="kicker">Jang Yeong-sil AI Convergence Research Institute</div>
            <h1>장영실 AI <em>융합연구원</em></h1>
            <p>{institute.desc}. 동남권 AI 융합연구 컨트롤타워 — 의례적 출범, 2025.12.30.</p>
            <div className="orn dde-div"><span>◆</span></div>
          </div>

          <div className="dde-kpis">
            {stats.map((s) => (
              <div className="dde-kpi dde-panel" key={s.label}>
                <div className="n"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                <div className="sep" />
                <div className="l">{s.label}</div>
                <div className="s">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="dde-stitle">
            <div className="n">— No. I —</div>
            <h2>비전 <em>ACTS</em></h2>
          </div>
          <div className="dde-acts">
            {acts.map((a) => (
              <div className="dde-act dde-panel" key={a.l}>
                <div className="ltr">{a.l}</div>
                <div className="nm">{a.name}</div>
                <div className="ko">{a.ko}</div>
                <div className="ds">{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="dde-stitle">
            <div className="n">— No. II —</div>
            <h2>헤리티지 <em>매핑</em></h2>
          </div>
          <div className="dde-heritage">
            {heritage.map((h) => (
              <div className="dde-h dde-panel" key={h.han}>
                <div className="han">{h.han}</div>
                <div className="yr">{h.year} · {h.hanja}</div>
                <div className="nm">{h.invention} <span>{h.hanja}</span></div>
                <div className="ds">{h.desc}</div>
                <div className="field">{h.field}</div>
              </div>
            ))}
          </div>

          <div className="dde-stitle">
            <div className="n">— No. III —</div>
            <h2>3개 <em>연구센터</em></h2>
          </div>
          <div className="dde-cards">
            {centers.map((c) => (
              <div className="dde-card dde-panel" key={c.key}>
                <div className="img"><img src={`/assets/img/${c.key === 'marine' ? 'marine-ai' : c.key === 'medical' ? 'medical-ai' : 'mfg-ai'}.jpg`} alt={c.name} /></div>
                <div className="bd">
                  <div className="anchor">▸ {c.anchor}</div>
                  <div className="nm">{c.name}</div>
                  <div className="ds">{c.desc}</div>
                  <div className="pts">{c.points.map((p) => <div key={p}>{p}</div>)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="dde-stitle">
            <div className="n">— No. IV —</div>
            <h2>개원 동시 <em>협약 3건</em></h2>
          </div>
          <div className="dde-partners">
            {partners.map((p) => (
              <div className="dde-partner dde-panel" key={p.name}>
                <div className="ini">{p.initial}</div>
                <div className="nm">{p.name}</div>
                <div className="en">{p.en}</div>
                <div className="ct">{p.center}</div>
                <div className="dt">{p.date}</div>
              </div>
            ))}
          </div>

          <div className="dde-stitle">
            <div className="n">— No. V —</div>
            <h2>공고 · <em>연구원</em></h2>
          </div>
          <div className="dde-notes">
            <div className="dde-note dde-panel">
              <div className="h">◆ 공고 ◆</div>
              {NOTES.map((n, i) => <div className="it" key={i}><div className="d">{n.d}</div><div className="t">{n.t}</div></div>)}
            </div>
            <div className="dde-note dde-panel">
              <div className="h">◆ 핵심 연구원 ◆</div>
              {FAC.map((f, i) => <div className="it" key={i}><div className="d">F{i + 1}</div><div className="t"><b>{f.n}</b> · {f.a}</div></div>)}
            </div>
          </div>

          <div className="dde-foot dde-panel framed">
            <div className="big">Arise PNU, <em>같이 더 높게</em></div>
            <div className="orn dde-div"><span>◆</span></div>
            <div className="info">{institute.name} · {footer.addr}<br />{footer.contact} · {footer.copy}</div>
          </div>
        </main>
      </div>

      <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 0, background: 'var(--de-ink)', border: '1px solid var(--de-gold)' }}>
        <Link to="/home" style={pill('var(--de-goldL)', '1px solid rgba(205,164,62,.3)')}>원본</Link>
        <Link to="/dash" style={pill('var(--de-ink)', 'none', 'var(--de-goldL)')}>목록</Link>
      </div>
    </div>
  )
}

function pill(color, border, bg) {
  return { textDecoration: 'none', color, background: bg || 'transparent', borderLeft: border, fontSize: 12.5, fontWeight: 700, padding: '9px 18px', letterSpacing: '.04em' }
}
