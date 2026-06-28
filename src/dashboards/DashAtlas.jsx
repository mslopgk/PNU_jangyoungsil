import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, partners, footer } from '../concepts/content'
import '../styles/dashboard-atlas.css'

gsap.registerPlugin(ScrollTrigger)

const MAP_NODES = [
  { id: '01', name: '부산캠퍼스', label: 'AI Innovation Hub', x: 58, y: 42 },
  { id: '02', name: '양산캠퍼스', label: 'Healthcare AX', x: 75, y: 62 },
  { id: '03', name: '산학 앵커', label: 'Samsung · Eunsung · KIMS', x: 38, y: 68 },
  { id: '04', name: 'PNU-AXIS', label: 'GPU 303+ / 800', x: 48, y: 25 },
]

const PROGRAMS = [
  { k: 'MARINE', title: '조선·구조 AI', img: 'marine-ai.jpg', to: '/research#marine' },
  { k: 'MEDICAL', title: '헬스케어 AI', img: 'medical-ai.jpg', to: '/research#medical' },
  { k: 'MATERIAL', title: '소재·재료 AI', img: 'mfg-ai.jpg', to: '/research#material' },
]

export default function DashAtlas() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dat-hero-copy > *', { y: 24, autoAlpha: 0, duration: 0.75, stagger: 0.09, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dat-node', { scale: 0.7, autoAlpha: 0, duration: 0.6, stagger: 0.12, ease: 'back.out(1.7)', delay: 0.25, clearProps: 'transform' })
      gsap.utils.toArray('.dat-card, .dat-strip, .dat-acts, .dat-partners').forEach((n) => {
        gsap.from(n, { y: 26, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: n, start: 'top 88%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dat" ref={root}>
      <header className="dat-top">
        <Link to="/" className="dat-logo">PNU <b>AI ATLAS</b></Link>
        <div className="dat-topline">{institute.founded} · IT관 13,161㎡ · Open Research Platform</div>
        <Link to="/dash" className="dat-index">시안 목록</Link>
      </header>

      <main>
        <section className="dat-hero">
          <div className="dat-hero-copy">
            <div className="dat-kicker">Campus Atlas · Spatial Intelligence</div>
            <h1>캠퍼스와 산업 앵커를<br />하나의 연구 지도로 연결</h1>
            <p>{institute.desc}. 부산대의 공간, GPU, 산학 협약, 연구센터 흐름을 지리 정보처럼 스캔합니다.</p>
            <div className="dat-hero-actions"><Link to="/facility">IT관 시설</Link><Link to="/research">연구센터</Link></div>
          </div>
          <div className="dat-map" aria-label="연구 거점 지도">
            <img src="/assets/img/campus.jpg" alt="부산대학교 캠퍼스" />
            <div className="dat-map-grid" />
            {MAP_NODES.map((n) => (
              <div className="dat-node" key={n.id} style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                <span>{n.id}</span><b>{n.name}</b><small>{n.label}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="dat-strip">
          {stats.map((s) => <div key={s.label}><span>{s.label}</span><b>{s.n.toLocaleString()}<small>{s.unit}</small></b><em>{s.sub}</em></div>)}
        </section>

        <section className="dat-programs">
          {PROGRAMS.map((p) => (
            <Link to={p.to} className="dat-card" key={p.k}>
              <img src={`/assets/img/${p.img}`} alt={p.title} />
              <div><span>{p.k}</span><b>{p.title}</b><small>앵커기업 중심 AX 프로젝트</small></div>
            </Link>
          ))}
        </section>

        <section className="dat-lower">
          <article className="dat-acts">
            <h2>ACTS Strategy</h2>
            {acts.map((a) => <div key={a.l}><span>{a.l}</span><b>{a.ko}</b><small>{a.desc}</small></div>)}
          </article>
          <article className="dat-partners">
            <h2>Founding MOU</h2>
            {partners.map((p) => <Link to="/partners#founding" key={p.name}><b>{p.name}</b><span>{p.field}</span><em>{p.date}</em></Link>)}
          </article>
        </section>
      </main>

      <footer className="dat-foot">{footer.copy} · {footer.contact}</footer>
    </div>
  )
}
