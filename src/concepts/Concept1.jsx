import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from './content'
import '../styles/concept-1.css'

gsap.registerPlugin(ScrollTrigger)

export default function Concept1() {
  const root = useRef(null)
  const track = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // hero line mask reveal
      gsap.from('.c1-hero .c1-line-inner', { yPercent: 115, duration: 1.1, ease: 'power4.out', stagger: 0.13, delay: 0.15 })
      gsap.from('.c1-hero-tag, .c1-hero-sub > *', { y: 30, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.5 })
      gsap.from('.c1-hero-vert', { autoAlpha: 0, duration: 1, delay: 0.8 })

      // hero bg parallax
      gsap.to('.c1-hero-bg img', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '.c1-hero', start: 'top top', end: 'bottom top', scrub: true } })

      // section heads reveal
      gsap.utils.toArray('.c1-sec-head').forEach((h) => {
        gsap.from(h.children, { y: 40, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: h, start: 'top 85%' } })
      })

      // intro lead
      gsap.from('.c1-lead', { y: 40, autoAlpha: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.c1-lead', start: 'top 80%' } })

      // counters
      gsap.utils.toArray('.c1-stat .numval').forEach((n) => {
        const end = +n.dataset.value
        const obj = { v: 0 }
        gsap.to(obj, {
          v: end, duration: 1.8, ease: 'power2.out', snap: { v: 1 },
          onUpdate: () => { n.textContent = Math.round(obj.v).toLocaleString() },
          scrollTrigger: { trigger: n, start: 'top 90%' },
        })
      })
      gsap.from('.c1-stat', { y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.06, scrollTrigger: { trigger: '.c1-stats', start: 'top 85%' } })

      // acts
      gsap.from('.c1-act .letter', { y: 80, autoAlpha: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.c1-acts-grid', start: 'top 75%' } })
      gsap.from('.c1-act .name, .c1-act .ko, .c1-act .desc, .c1-act .en', { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: '.c1-acts-grid', start: 'top 70%' } })

      // centers — horizontal scroll
      const getScroll = () => Math.max(0, track.current.scrollWidth - window.innerWidth)
      const hTween = gsap.to(track.current, {
        x: () => -getScroll(), ease: 'none',
        scrollTrigger: { trigger: '.c1-centers', start: 'top top', end: () => '+=' + getScroll(), scrub: 1, pin: '.c1-centers', invalidateOnRefresh: true },
      })
      gsap.fromTo('.c1-centers-progress i', { width: '0%' }, {
        width: '100%', ease: 'none',
        scrollTrigger: { trigger: '.c1-centers', start: 'top top', end: () => '+=' + getScroll(), scrub: 1, invalidateOnRefresh: true },
      })
      gsap.utils.toArray('.c1-center-panel').forEach((p) => {
        gsap.from(p.children, { y: 50, autoAlpha: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: p, containerAnimation: hTween, start: 'left 75%' } })
      })

      // heritage clip reveal + stagger
      gsap.utils.toArray('.c1-h-card').forEach((c) => {
        gsap.from(c, { clipPath: 'inset(0 100% 0 0)', duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 85%' } })
        gsap.from(c.children, { y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 80%' } })
      })

      // partners
      gsap.utils.toArray('.c1-partner-row').forEach((r) => {
        gsap.from(r, { x: -50, autoAlpha: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: r, start: 'top 88%' } })
      })

      // footer big
      gsap.from('.c1-footer .big', { y: 60, autoAlpha: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.c1-footer', start: 'top 80%' } })

      ScrollTrigger.refresh()
    }, el)

    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="c1" ref={root}>
      <nav className="c1-nav">
        <div className="brand">蔣英實 · {institute.name}</div>
        <div className="meta">Concept 01 · Editorial</div>
      </nav>

      <section className="c1-hero">
        <div className="c1-hero-bg"><img src="/assets/img/it-building.jpg" alt="" /></div>
        <div className="c1-hero-grid"></div>
        <div className="c1-hero-vert">蔣英實 1390s — 2025 · 六百年</div>
        <div className="c1-hero-tag">Jang Yeong-sil AI Convergence Research Institute · {institute.founded} 출범</div>
        <h1 className="c1-hero-title">
          <span className="c1-line-mask"><span className="c1-line-inner">장영실 <em>AI</em></span></span>
          <span className="c1-line-mask"><span className="c1-line-inner">융합연구원</span></span>
        </h1>
        <div className="c1-hero-sub">
          <p>{institute.desc}. 동남권 지·산·학·연 일체형 AI 융합연구 거점.</p>
          <div className="c1-hero-scroll">Scroll</div>
        </div>
      </section>

      <section className="c1-intro">
        <div className="c1-sec-head">
          <span className="c1-sec-num">01 — VISION</span>
        </div>
        <p className="c1-lead">15세기 동래의 노비 출신 과학자가 세운 <span>융합의 정신</span>을, 21세기 AI 시대에 다시 잇는다. 출신·학과·기관의 경계를 넘는 개방형 플랫폼.</p>
        <div className="c1-stats">
          {stats.map((s) => (
            <div className="c1-stat" key={s.label}>
              <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
              <div className="label">{s.label}</div>
              <div className="sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="c1-acts">
        <div className="c1-acts-inner">
          <div className="c1-sec-head">
            <span className="c1-sec-num">02 — ACTS</span>
            <h2 className="c1-sec-title">비전 <em>ACTS</em></h2>
          </div>
          <div className="c1-acts-grid">
            {acts.map((a) => (
              <div className="c1-act" key={a.l}>
                <div className="letter">{a.l}</div>
                <div className="name">{a.name}</div>
                <div className="ko">{a.ko}</div>
                <div className="desc">{a.desc}</div>
                <div className="en">{a.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="c1-centers">
        <div className="c1-centers-pin">
          <div className="c1-centers-track" ref={track}>
            {centers.map((c) => (
              <div className="c1-center-panel" key={c.key}>
                <div className="han">{c.han}</div>
                <div className="icon">{c.icon}</div>
                <div className="anchor">앵커기업 · {c.anchor}</div>
                <div className="name">{c.name}</div>
                <div className="en">{c.en}</div>
                <div className="desc">{c.desc}</div>
                <div className="points">{c.points.map((p) => <span key={p}>{p}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="c1-centers-progress"><i></i></div>
        </div>
      </section>

      <section className="c1-heritage">
        <div className="c1-heritage-inner">
          <div className="c1-sec-head">
            <span className="c1-sec-num">03 — HERITAGE</span>
            <h2 className="c1-sec-title">15세기 발명품이 <em>21세기 AI</em>로</h2>
          </div>
          <div className="c1-heritage-grid">
            {heritage.map((h) => (
              <div className="c1-h-card" key={h.han}>
                <div className="han">{h.han}</div>
                <div className="yr">{h.year} · {h.hanja}</div>
                <div className="inv">{h.invention} <span>{h.hanja}</span></div>
                <div className="desc">{h.desc}</div>
                <div className="field">↔ {h.field}</div>
                <div className="arrow">{h.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="c1-partners">
        <div className="c1-partners-inner">
          <div className="c1-sec-head">
            <span className="c1-sec-num">04 — PARTNERS</span>
            <h2 className="c1-sec-title">개원 동시 <em>협약 3건</em></h2>
          </div>
          {partners.map((p) => (
            <div className="c1-partner-row" key={p.name}>
              <div className="ini">{p.initial}</div>
              <div className="nm">{p.name}<small>{p.en}</small></div>
              <div className="ct">{p.center}<small>{p.field}</small></div>
              <div className="dt">{p.date}</div>
              <div className="arrow" style={{ color: 'var(--c1-accent)' }}>→</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="c1-footer">
        <div className="c1-footer-inner">
          <div className="big">Arise PNU,<br /><em>같이 더 높게</em></div>
          <div className="info">
            {institute.name}<br />
            {footer.addr}<br />
            {footer.contact}
          </div>
        </div>
        <div className="c1-footer-inner copy" style={{ display: 'flex' }}>
          <span>{footer.copy}</span>
          <Link to="/concepts" style={{ color: 'rgba(244,241,234,.5)', textDecoration: 'none' }}>← 시안 목록</Link>
        </div>
      </footer>
    </div>
  )
}
