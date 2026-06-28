import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-constellation.css'

gsap.registerPlugin(ScrollTrigger)

const STARS = [
  { x: 18, y: 24, label: 'Heritage' },
  { x: 70, y: 18, label: 'PNU-AXIS' },
  { x: 82, y: 58, label: 'Industry' },
  { x: 38, y: 72, label: 'AI Centers' },
  { x: 55, y: 42, label: 'JYS' },
]

export default function DashConstellation() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dco-copy > *', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dco-star', { scale: 0, autoAlpha: 0, duration: 0.65, stagger: 0.12, ease: 'back.out(1.8)', delay: 0.25 })
      gsap.utils.toArray('.dco-reveal').forEach((node) => {
        gsap.from(node, { y: 28, autoAlpha: 0, duration: 0.65, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: node, start: 'top 88%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dco" ref={root}>
      <header className="dco-top">
        <Link to="/" className="dco-brand">蔣英實 <b>Constellation</b></Link>
        <nav><Link to="/heritage">Heritage</Link><Link to="/research">Research</Link><Link to="/partners">Partners</Link><Link to="/dash">Index</Link></nav>
      </header>

      <main>
        <section className="dco-hero">
          <div className="dco-copy">
            <div className="dco-kicker">Scientific Constellation · 1433 → 2030</div>
            <h1>장영실의 별자리를<br />AI 연구 네트워크로 다시 잇다</h1>
            <p>{institute.desc}. 혼천의·자격루·측우기의 상징을 연구센터, 앵커기업, PNU-AXIS 인프라로 연결하는 감성적 프레스티지 시안입니다.</p>
            <div className="dco-actions"><Link to="/heritage">헤리티지 보기</Link><Link to="/research">연구센터 보기</Link></div>
          </div>
          <div className="dco-sky">
            <img src="/assets/img/quantum.jpg" alt="AI 별자리 네트워크" />
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <polyline points="18,24 55,42 70,18 82,58 38,72 18,24" />
            </svg>
            {STARS.map((s) => <div className="dco-star" key={s.label} style={{ left: `${s.x}%`, top: `${s.y}%` }}><span /><b>{s.label}</b></div>)}
          </div>
        </section>

        <section className="dco-stats dco-reveal">
          {stats.map((s) => <article key={s.label}><span>{s.label}</span><b>{s.n.toLocaleString()}<small>{s.unit}</small></b><em>{s.sub}</em></article>)}
        </section>

        <section className="dco-grid">
          <article className="dco-panel dco-reveal">
            <h2>ACTS Orbit</h2>
            <div className="dco-acts">{acts.map((a) => <div key={a.l}><strong>{a.l}</strong><b>{a.name}</b><small>{a.ko}</small></div>)}</div>
          </article>
          <article className="dco-panel dco-reveal">
            <h2>15c → AI</h2>
            <div className="dco-heritage">{heritage.map((h) => <Link to="/heritage" key={h.hanja}><span>{h.year}</span><b>{h.invention}</b><small>{h.field}</small></Link>)}</div>
          </article>
          <article className="dco-panel dco-reveal dco-wide">
            <h2>Research Stars</h2>
            <div className="dco-centers">{centers.map((c) => <Link to={`/research#${c.key}`} key={c.key}><b>{c.name}</b><span>{c.anchor}</span><small>{c.points.join(' · ')}</small></Link>)}</div>
          </article>
          <article className="dco-panel dco-reveal dco-wide">
            <h2>Partner Alignment</h2>
            <div className="dco-partners">{partners.map((p) => <Link to="/partners#founding" key={p.name}><strong>{p.initial}</strong><b>{p.name}</b><span>{p.center}</span><em>{p.date}</em></Link>)}</div>
          </article>
        </section>
      </main>

      <footer className="dco-foot">{footer.copy} · {footer.addr} · {footer.contact}</footer>
    </div>
  )
}
