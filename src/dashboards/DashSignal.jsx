import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, partners, footer } from '../concepts/content'
import '../styles/dashboard-signal.css'

gsap.registerPlugin(ScrollTrigger)

const SIGNALS = [
  { k: 'AXIS', v: 'U', label: 'Unified Research' },
  { k: 'GPU', v: '303+', label: 'Target 800' },
  { k: 'MOU', v: '3', label: 'Founding partners' },
  { k: 'HUB', v: '10,067㎡', label: 'AI Innovation Hub' },
]

const FEED = [
  '조선·구조 AI센터: AI 구조 최적화 알고리즘 운영',
  '헬스케어 AI센터: 양산캠퍼스 연계 AX 과제 발굴',
  '소재·재료 AI센터: KIMS 소재 빅데이터 결합',
  'PNU-AXIS: GPU 303장 확보 · 800장 목표',
]

export default function DashSignal() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dsg-hero h1, .dsg-hero p, .dsg-actions', { y: 26, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dsg-orbit span', { scale: 0, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'back.out(1.8)', delay: 0.2 })
      gsap.utils.toArray('.dsg-reveal').forEach((n) => {
        gsap.from(n, { y: 30, autoAlpha: 0, duration: 0.65, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: n, start: 'top 88%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dsg" ref={root}>
      <div className="dsg-field" aria-hidden="true" />
      <header className="dsg-top">
        <Link to="/" className="dsg-brand"><span>JYS</span>{institute.en}</Link>
        <nav><Link to="/research">Research</Link><Link to="/partners">Partners</Link><Link to="/news">News</Link></nav>
      </header>

      <main>
        <section className="dsg-hero">
          <div>
            <div className="dsg-kicker">Sovereign Signal · AI Command Network</div>
            <h1>전통의 이름으로<br />미래 연구 신호를 송출하다</h1>
            <p>{institute.desc}. 장영실의 융합 정신을 데이터 신호, 연구 네트워크, 산학 협력의 흐름으로 시각화한 프레스티지 다크 시안입니다.</p>
            <div className="dsg-actions"><Link to="/partners#contact">연구 협력 신청</Link><Link to="/dash">시안 목록</Link></div>
          </div>
          <div className="dsg-orbit" aria-label="AI 연구 네트워크">
            <img src="/assets/img/tech-circuit.jpg" alt="AI 회로 네트워크" />
            <div className="core">蔣</div>
            {SIGNALS.map((s, i) => <span key={s.k} className={`n${i + 1}`}><b>{s.v}</b><small>{s.k} · {s.label}</small></span>)}
          </div>
        </section>

        <section className="dsg-signals dsg-reveal">
          {stats.map((s) => <article key={s.label}><span>{s.label}</span><b>{s.n.toLocaleString()}<small>{s.unit}</small></b><em>{s.sub}</em></article>)}
        </section>

        <section className="dsg-grid">
          <article className="dsg-panel dsg-reveal">
            <h2>Live Research Feed</h2>
            <div className="dsg-feed">{FEED.map((f, i) => <div key={f}><span>0{i + 1}</span>{f}</div>)}</div>
          </article>
          <article className="dsg-panel dsg-reveal">
            <h2>ACTS Protocol</h2>
            <div className="dsg-acts">{acts.map((a) => <div key={a.l}><b>{a.l}</b><span>{a.name}</span><small>{a.ko}</small></div>)}</div>
          </article>
          <article className="dsg-panel dsg-reveal dsg-wide">
            <h2>Anchor Centers</h2>
            <div className="dsg-centers">
              {centers.map((c) => <Link to={`/research#${c.key}`} key={c.key}><b>{c.name}</b><span>{c.anchor}</span><small>{c.points.join(' · ')}</small></Link>)}
            </div>
          </article>
          <article className="dsg-panel dsg-reveal dsg-wide">
            <h2>Founding Signal Partners</h2>
            <div className="dsg-partners">{partners.map((p) => <Link to="/partners#founding" key={p.name}><span>{p.initial}</span><b>{p.name}</b><small>{p.center}</small><em>{p.date}</em></Link>)}</div>
          </article>
        </section>
      </main>

      <footer className="dsg-foot">{footer.copy} · {footer.addr} · {footer.contact}</footer>
    </div>
  )
}
