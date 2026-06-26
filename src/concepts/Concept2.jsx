import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from './content'
import '../styles/concept-2.css'

gsap.registerPlugin(ScrollTrigger)

function Chars({ text, glow }) {
  return (
    <>
      {text.split('').map((ch, i) => (
        <span className={'ch' + (glow ? ' glow' : '')} key={i}>{ch === ' ' ? '\u00A0' : ch}</span>
      ))}
    </>
  )
}

export default function Concept2() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // hero char reveal
      gsap.from('.c2-hero h1 .ch', { yPercent: 120, opacity: 0, rotate: 6, duration: 0.9, ease: 'back.out(1.6)', stagger: 0.025, delay: 0.2 })
      gsap.from('.c2-hero .tag, .c2-hero .kr, .c2-hero-foot > *', { y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.6 })

      // orbs drift
      gsap.to('.c2-orb.a', { x: 80, y: 60, duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.c2-orb.b', { x: -60, y: -40, duration: 14, repeat: -1, yoyo: true, ease: 'sine.inOut' })

      // section heads
      gsap.utils.toArray('.c2-sec-head').forEach((h) => {
        gsap.from(h.children, { y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 85%' } })
      })

      // stats counters
      gsap.from('.c2-stat', { y: 40, autoAlpha: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '.c2-stats', start: 'top 80%' } })
      gsap.utils.toArray('.c2-stat .numval').forEach((n) => {
        const end = +n.dataset.value
        const obj = { v: 0 }
        gsap.to(obj, {
          v: end, duration: 1.8, ease: 'power2.out', snap: { v: 1 },
          onUpdate: () => { n.textContent = Math.round(obj.v).toLocaleString() },
          scrollTrigger: { trigger: n, start: 'top 90%' },
        })
      })

      // acts
      gsap.from('.c2-act', { y: 60, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.c2-acts-grid', start: 'top 78%' } })

      // centers — per-panel reveal + han parallax
      gsap.utils.toArray('.c2-center-panel').forEach((p) => {
        gsap.from(p.querySelector('.c2-center-inner').children, { y: 70, autoAlpha: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: p, start: 'top 62%' } })
        const han = p.querySelector('.han')
        if (han) gsap.to(han, { yPercent: -25, ease: 'none', scrollTrigger: { trigger: p, start: 'top bottom', end: 'bottom top', scrub: true } })
      })

      // heritage timeline progress + items
      gsap.to('.c2-timeline-progress', { height: '100%', ease: 'none', scrollTrigger: { trigger: '.c2-timeline', start: 'top 60%', end: 'bottom 75%', scrub: true } })
      gsap.utils.toArray('.c2-tl-item').forEach((it) => {
        gsap.from(it.children, { y: 40, autoAlpha: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: it, start: 'top 78%' } })
      })

      // partners
      gsap.from('.c2-partner', { y: 50, autoAlpha: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.c2-partners-grid', start: 'top 80%' } })

      // footer
      gsap.from('.c2-footer .big', { y: 60, autoAlpha: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.c2-footer', start: 'top 80%' } })

      ScrollTrigger.refresh()
    }, el)

    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="c2" ref={root}>
      <div className="c2-grid-bg" />
      <div className="c2-orb a" />
      <div className="c2-orb b" />
      <div className="c2-wrap">
        <nav className="c2-nav">
          <div className="brand">蔣英實 · <b>AIRCI</b></div>
          <div className="meta">Concept 02 · Quantum</div>
        </nav>

        <section className="c2-hero">
          <div className="tag">AI Convergence Research Institute · {institute.founded}</div>
          <h1>
            <div><Chars text="JANG " /><Chars text="YEONG-SIL" glow /></div>
            <div><Chars text="AI " /><Chars text="CONVERGENCE" glow /></div>
          </h1>
          <p className="kr">장영실 AI 융합연구원. <b>3개 프로젝트 연구센터</b>와 GPU 303+장의 PNU-AXIS 인프라로 동남권 AI 융합연구를 선도한다.</p>
          <div className="c2-hero-foot">
            <div className="desc">{institute.desc}. 동남권 지·산·학·연 일체형 거점.</div>
            <div className="scroll">↓ Scroll to explore</div>
          </div>
        </section>

        <section className="c2-sec">
          <div className="c2-sec-head"><span className="c2-sec-num">01 · METRICS</span></div>
          <div className="c2-stats">
            {stats.map((s) => (
              <div className="c2-stat" key={s.label}>
                <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                <div className="label">{s.label}</div>
                <div className="sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="c2-sec">
          <div className="c2-sec-head"><span className="c2-sec-num">02 · ACTS</span><h2 className="c2-sec-title">Vision <em>ACTS</em></h2></div>
          <div className="c2-acts-grid">
            {acts.map((a) => (
              <div className="c2-act" key={a.l}>
                <div className="letter">{a.l}</div>
                <div className="name">{a.name}</div>
                <div className="ko">{a.ko}</div>
                <div className="desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="c2-centers">
          <div className="c2-sec" style={{ paddingBottom: 0 }}>
            <div className="c2-sec-head"><span className="c2-sec-num">03 · CENTERS</span><h2 className="c2-sec-title">3 Research <em>Centers</em></h2></div>
          </div>
          {centers.map((c) => (
            <div className="c2-center-panel" key={c.key}>
              <div className="han">{c.han}</div>
              <div className="c2-center-inner">
                <div className="anchor">{c.icon} 앵커기업 · {c.anchor}</div>
                <div className="name">{c.name}</div>
                <div className="en">{c.en} · {c.anchorEn}</div>
                <div className="desc">{c.desc}</div>
                <div className="points">{c.points.map((p) => <span key={p}>{p}</span>)}</div>
              </div>
            </div>
          ))}
        </section>

        <section className="c2-sec c2-heritage">
          <div className="c2-sec-head"><span className="c2-sec-num">04 · HERITAGE</span><h2 className="c2-sec-title">600년을 잇는 <em>융합</em></h2></div>
          <div className="c2-timeline">
            <div className="c2-timeline-progress" />
            {heritage.map((h) => (
              <div className="c2-tl-item" key={h.han}>
                <div className="yr">{h.year} · {h.hanja} · {h.icon}</div>
                <div className="inv">{h.invention} <span>{h.hanja}</span></div>
                <div className="desc">{h.desc}</div>
                <div className="field">↔ {h.field}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="c2-sec">
          <div className="c2-sec-head"><span className="c2-sec-num">05 · PARTNERS</span><h2 className="c2-sec-title">Founding <em>MOUs</em></h2></div>
          <div className="c2-partners-grid">
            {partners.map((p) => (
              <div className="c2-partner" key={p.name}>
                <div className="ini">{p.initial}</div>
                <div className="nm">{p.name}</div>
                <div className="en">{p.en}</div>
                <div className="ct">{p.center}</div>
                <div className="dt">{p.date} · {p.field}</div>
              </div>
            ))}
          </div>
        </section>

        <footer className="c2-footer">
          <div className="big">Arise PNU<br /><em>Higher Together</em></div>
          <div className="info">
            <p>{institute.name}<br />{footer.addr}<br />{footer.contact}</p>
            <p className="copy">{footer.copy} · <Link to="/concepts" style={{ color: 'var(--c2-cyan)', textDecoration: 'none' }}>시안 목록 →</Link></p>
          </div>
        </footer>
      </div>
    </div>
  )
}
