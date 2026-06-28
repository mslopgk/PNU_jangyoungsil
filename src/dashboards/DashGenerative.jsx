import { useLayoutEffect, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-generative.css'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  { i: 'fa-home', l: '대시보드', active: true },
  { i: 'fa-flag', l: '비전 ACTS' },
  { i: 'fa-history', l: '헤리티지' },
  { i: 'fa-microscope', l: '연구센터' },
  { i: 'fa-handshake', l: '파트너십' },
  { i: 'fa-bell', l: '공고' },
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
const IC = ['b', 'g', 'a', 'v', 'r']
const ICICON = ['fa-flask', 'fa-handshake', 'fa-microchip', 'fa-building', 'fa-graduation-cap']
const RING = ['38%', '38%', '38%', '62%', '16%']

export default function DashGenerative() {
  const root = useRef(null)
  const canvas = useRef(null)

  // generative particle network backdrop
  useEffect(() => {
    const cv = canvas.current
    if (!cv) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = cv.getContext('2d')
    let w, h, dpr, raf
    const N = 72
    let pts = []
    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1)
      w = cv.width = window.innerWidth * dpr
      h = cv.height = window.innerHeight * dpr
      cv.style.width = window.innerWidth + 'px'
      cv.style.height = window.innerHeight + 'px'
    }
    const init = () => {
      pts = Array.from({ length: N }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.28 * dpr, vy: (Math.random() - 0.5) * 0.28 * dpr,
      }))
    }
    resize(); init()
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      const max = 150 * dpr
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < max) {
            ctx.strokeStyle = `rgba(34,211,238,${(1 - d / max) * 0.45})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = 'rgba(232,121,249,0.7)'
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6 * dpr, 0, Math.PI * 2); ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }
    if (reduce) { draw(); cancelAnimationFrame(raf) } else draw()
    const onR = () => { resize(); init() }
    window.addEventListener('resize', onR)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onR) }
  }, [])

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dgn-phead > *', { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dgn-kpi', { y: 28, autoAlpha: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out', clearProps: 'transform', delay: 0.15 })
      gsap.utils.toArray('.dgn-kpi .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.8, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 92%' } })
      })
      gsap.utils.toArray('.dgn-hero, .dgn-act, .dgn-h, .dgn-card, .dgn-partner, .dgn-note, .dgn-foot').forEach((c) => {
        gsap.from(c, { y: 36, autoAlpha: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 90%' } })
      })
      gsap.utils.toArray('.dgn-note .it').forEach((r) => gsap.from(r, { x: -16, autoAlpha: 0, duration: 0.4, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: r, start: 'top 94%' } }))
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dgn" ref={root}>
      <canvas className="dgn-canvas" ref={canvas} />
      <div className="dgn-vign" />
      <div className="dgn-wrap">
        <div className="dgn-top">
          <div className="brand">
            <div className="logo">蔣</div>
            <div className="nm">{institute.name}<small>AI CONVERGENCE · GENERATIVE</small></div>
          </div>
          <div className="live"><span className="dot" />NET · LIVE</div>
          <div className="actions"><Link to="/partners#contact" className="cta"><i className="fas fa-handshake" /> 연구 협력</Link></div>
        </div>

        <div className="dgn-layout">
          <aside className="dgn-side dgn-panel">
            <div className="sh">// 탐색</div>
            {NAV.map((n) => (
              <div key={n.l} className={'si ' + (n.active ? 'active' : '')}><i className={'fas ' + n.i} />{n.l}</div>
            ))}
            <div className="sh">// 생성 지표</div>
            <div className="genstat"><div className="k">GPU 노드</div><div className="v">303<small> / 800</small></div></div>
            <div className="genstat"><div className="k">협약 링크</div><div className="v">3<small> LIVE</small></div></div>
          </aside>

          <main className="dgn-main">
            <div className="dgn-phead dgn-panel">
              <div>
                <div className="tag">Generative Dashboard · {institute.founded}</div>
                <h1>장영실 AI 융합연구원 <em>대시보드</em></h1>
                <p>{institute.desc}</p>
              </div>
              <Link to="/partners#contact" className="btn primary"><i className="fas fa-arrow-trend-up" /> 연구 협력 신청</Link>
            </div>

            <div className="dgn-kpis">
              {stats.map((s, i) => (
                <div className="dgn-kpi dgn-panel" key={s.label}>
                  <div className="ring" style={{ '--p': RING[i] }} />
                  <div className={'ic ' + IC[i]}><i className={'fas ' + ICICON[i]} /></div>
                  <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                  <div className="lbl">{s.label}</div>
                  <div className="sub">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="dgn-hero dgn-panel">
              <div>
                <div className="tag"><span className="dot" /> 동남권 AI 융합연구 컨트롤타워</div>
                <h2>3개 센터 · 앵커기업 <em>AI 융합 네트워크</em></h2>
                <p>조선·구조 AI · 헬스케어 AI · 소재·재료 AI 센터가 삼성중공업·은성의료재단·KIMS와 함께 GPU 303+장 인프라로 동남권 산업 혁신을 선도합니다.</p>
                <div className="tags">{['🚢 삼성중공업', '⚕️ 은성의료재단', '🏭 KIMS', '🖥️ PNU-AXIS'].map((t) => <span key={t}>{t}</span>)}</div>
              </div>
              <div className="img"><img src="/assets/img/it-building.jpg" alt="IT관" /></div>
            </div>

            <div className="dgn-stitle"><span className="n">02</span>비전 ACTS<span className="r" /></div>
            <div className="dgn-acts">
              {acts.map((a) => (
                <div className="dgn-act dgn-panel" key={a.l}>
                  <div className="ltr">{a.l}</div>
                  <div className="nm">{a.name}</div>
                  <div className="ko">{a.ko}</div>
                  <div className="ds">{a.desc}</div>
                </div>
              ))}
            </div>

            <div className="dgn-stitle"><span className="n">03</span>헤리티지 매핑<span className="r" /></div>
            <div className="dgn-heritage">
              {heritage.map((h) => (
                <div className="dgn-h dgn-panel" key={h.han}>
                  <div className="han">{h.han}</div>
                  <div className="yr">{h.year} · {h.hanja}</div>
                  <div className="nm">{h.invention} <span>{h.hanja}</span></div>
                  <div className="ds">{h.desc}</div>
                  <div className="field">↦ {h.field}</div>
                </div>
              ))}
            </div>

            <div className="dgn-stitle"><span className="n">04</span>3개 연구센터<span className="r" /></div>
            <div className="dgn-cards">
              {centers.map((c) => (
                <div className="dgn-card dgn-panel" key={c.key}>
                  <div className="img"><img src={`/assets/img/${c.key === 'marine' ? 'marine-ai' : c.key === 'medical' ? 'medical-ai' : 'mfg-ai'}.jpg`} alt={c.name} /></div>
                  <div className="bd">
                    <div className="anchor">▸ {c.anchor}</div>
                    <div className="nm">{c.name}</div>
                    <div className="ds">{c.desc}</div>
                    <div className="pts">{c.points.map((p) => <span key={p}>{p}</span>)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dgn-stitle"><span className="n">05</span>개원 동시 협약 3건<span className="r" /></div>
            <div className="dgn-partners">
              {partners.map((p) => (
                <div className="dgn-partner dgn-panel" key={p.name}>
                  <div className="ini">{p.initial}</div>
                  <div className="nm">{p.name}</div>
                  <div className="en">{p.en}</div>
                  <div className="ct">{p.center} · {p.field}</div>
                  <div className="dt">{p.date}</div>
                </div>
              ))}
            </div>

            <div className="dgn-stitle"><span className="n">06</span>공고 · 연구원<span className="r" /></div>
            <div className="dgn-notes">
              <div className="dgn-note dgn-panel">
                <div className="h"><i className="fas fa-bullhorn" style={{ color: 'var(--gn-cyan)' }} /> 공고</div>
                {NOTES.map((n, i) => <div className="it" key={i}><div className="d">{n.d}</div><div className="t">{n.t}</div></div>)}
              </div>
              <div className="dgn-note dgn-panel">
                <div className="h"><i className="fas fa-user-tie" style={{ color: 'var(--gn-magenta)' }} /> 핵심 연구원</div>
                {FAC.map((f, i) => <div className="it" key={i}><div className="d">F{i + 1}</div><div className="t"><b>{f.n}</b> · {f.a}</div></div>)}
              </div>
            </div>

            <div className="dgn-foot dgn-panel">
              <div className="big">Arise PNU, <em>같이 더 높게</em></div>
              <div className="info">{institute.name} · {footer.addr} · {footer.contact}</div>
            </div>
          </main>
        </div>

        <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 4, padding: 5, borderRadius: 999, background: 'rgba(6,6,12,.8)', backdropFilter: 'blur(10px)', border: '1px solid var(--gn-line)' }}>
          <Link to="/" style={pill('var(--gn-body)')}>원본</Link>
          <Link to="/dash" style={pill('var(--gn-body)')}>목록</Link>
        </div>
      </div>
    </div>
  )
}

function pill(color) {
  return { textDecoration: 'none', color, fontSize: 12.5, fontWeight: 700, padding: '8px 16px', borderRadius: 999 }
}
