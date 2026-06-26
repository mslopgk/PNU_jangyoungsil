import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from './content'
import '../styles/concept-3.css'

gsap.registerPlugin(ScrollTrigger)

const ACT_CLASS = { A: 'a', C: 'c', T: 't', S: 's' }

export default function Concept3() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // hero entrance
      gsap.from('.c3-hero-tag, .c3-hero-title, .c3-hero-en, .c3-hero-sub, .c3-hero-orn', { y: 44, autoAlpha: 0, duration: 1.1, ease: 'power3.out', stagger: 0.13, delay: 0.2 })
      gsap.from('.c3-hero-vert, .c3-hero-vert2', { autoAlpha: 0, duration: 1.4, delay: 0.7 })
      gsap.from('.c3-hero-seal', { scale: 0, rotate: 0, duration: 0.9, ease: 'back.out(1.7)', delay: 1.1 })

      // gold rules draw
      gsap.utils.toArray('.c3-rule').forEach((r) => {
        gsap.from(r, { scaleX: 0, duration: 1, ease: 'power3.out', transformOrigin: 'center', scrollTrigger: { trigger: r, start: 'top 90%' } })
      })

      // section heads
      gsap.utils.toArray('.c3-sec-head').forEach((h) => {
        gsap.from(h.children, { y: 36, autoAlpha: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 85%' } })
      })

      // vision lead
      gsap.from('.c3-vision .lead, .c3-vision .sub', { y: 40, autoAlpha: 0, duration: 1, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.c3-vision', start: 'top 75%' } })

      // acts seals + text
      gsap.from('.c3-act .seal', { scale: 0, duration: 0.7, stagger: 0.12, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.c3-acts-grid', start: 'top 78%' } })
      gsap.from('.c3-act .name, .c3-act .ko, .c3-act .desc', { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: '.c3-acts-grid', start: 'top 72%' } })

      // centers
      gsap.from('.c3-center', { y: 60, autoAlpha: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.c3-centers-grid', start: 'top 80%' } })

      // heritage clip reveal
      gsap.utils.toArray('.c3-h-card').forEach((c) => {
        gsap.from(c, { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 85%' } })
        gsap.from(c.children, { y: 30, autoAlpha: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 80%' } })
      })

      // partners seal pop
      gsap.from('.c3-partner .seal', { scale: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.c3-partners', start: 'top 80%' } })
      gsap.from('.c3-partner .nm, .c3-partner .en, .c3-partner .ct, .c3-partner .dt', { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: '.c3-partners', start: 'top 76%' } })

      // footer
      gsap.from('.c3-footer .big, .c3-footer .lat, .c3-footer .info', { y: 40, autoAlpha: 0, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.c3-footer', start: 'top 82%' } })

      ScrollTrigger.refresh()
    }, el)

    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="c3" ref={root}>
      <nav className="c3-nav">
        <div className="brand">蔣英實 · <b>{institute.name}</b></div>
        <div className="meta">Concept 03 · Heritage</div>
      </nav>

      <section className="c3-hero">
        <div className="c3-hero-vert">蔣英實 一三九〇 — 二〇二五</div>
        <div className="c3-hero-vert2">Jang Yeong-sil · Heritage × AI</div>
        <div className="c3-hero-center">
          <div className="c3-hero-tag">Jang Yeong-sil AI Convergence Research Institute <span>·</span> {institute.founded}</div>
          <h1 className="c3-hero-title">장영실 <em>AI</em><br />융합연구원</h1>
          <div className="c3-hero-en">Where 15th-century invention meets 21st-century intelligence</div>
          <p className="c3-hero-sub">{institute.desc}. 출신·학과·기관의 경계를 넘는 개방형 융합 연구 플랫폼.</p>
          <div className="c3-hero-orn"><span className="c3-rule" /><span className="dot" /><span>蔣</span><span className="dot" /><span className="c3-rule" /></div>
        </div>
        <div className="c3-hero-seal">蔣</div>
      </section>

      <section className="c3-vision">
        <p className="lead">동래의 한 노비 청년이 조선 최고의 과학자가 되듯,<br /><em>출신과 무관하게 인재가 모이는 개방형 플랫폼</em>.</p>
        <p className="sub">— 600년의 시간을 잇다, AI 융합과학의 주권 선도 —</p>
      </section>

      <section className="c3-sec">
        <div className="c3-sec-head">
          <div className="c3-sec-kicker">Vision 2030 · ACTS</div>
          <h2 className="c3-sec-title">비전 <em>ACTS</em> 사계</h2>
          <span className="c3-rule c3-sec-rule" />
        </div>
        <div className="c3-acts-grid">
          {acts.map((a) => (
            <div className={'c3-act ' + ACT_CLASS[a.l]} key={a.l}>
              <div className="seal">{a.l}</div>
              <div className="name">{a.name}</div>
              <div className="ko">{a.ko}</div>
              <div className="desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="c3-sec">
        <div className="c3-sec-head">
          <div className="c3-sec-kicker">3 Project Research Centers</div>
          <h2 className="c3-sec-title">3개 <em>프로젝트 연구센터</em></h2>
          <span className="c3-rule c3-sec-rule" />
        </div>
        <div className="c3-centers-grid">
          {centers.map((c) => (
            <div className="c3-center" key={c.key}>
              <div className="han">{c.han}</div>
              <div className="icon">{c.icon}</div>
              <div className="anchor">앵커기업 · {c.anchor}</div>
              <div className="name">{c.name}</div>
              <div className="en">{c.en}</div>
              <div className="desc">{c.desc}</div>
              <div className="points">{c.points.map((p) => <div key={p}>{p}</div>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="c3-sec">
        <div className="c3-sec-head">
          <div className="c3-sec-kicker">Heritage Mapping</div>
          <h2 className="c3-sec-title">4대 발명품이 <em>AI</em>로</h2>
          <span className="c3-rule c3-sec-rule" />
        </div>
        <div className="c3-heritage-grid">
          {heritage.map((h) => (
            <div className="c3-h-card" key={h.han}>
              <div className="icon">{h.icon}</div>
              <div className="top"><div className="han">{h.han}</div><div className="yr">{h.year} · {h.hanja}</div></div>
              <div className="inv">{h.invention} <span>{h.hanja}</span></div>
              <div className="desc">{h.desc}</div>
              <div className="field">↔ {h.field}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="c3-sec">
        <div className="c3-sec-head">
          <div className="c3-sec-kicker">Founding MOUs · 2025.12.30</div>
          <h2 className="c3-sec-title">개원 동시 <em>협약 3건</em></h2>
          <span className="c3-rule c3-sec-rule" />
        </div>
        <div className="c3-partners">
          {partners.map((p) => (
            <div className="c3-partner" key={p.name}>
              <div className="seal">{p.initial}</div>
              <div className="nm">{p.name}</div>
              <div className="en">{p.en}</div>
              <div className="ct">{p.center}</div>
              <div className="dt">{p.date}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="c3-footer">
        <div className="big">Arise PNU,<br /><em>같이 더 높게</em></div>
        <div className="lat">Higher, together — since 2025</div>
        <div className="info">
          {institute.name} · {footer.addr}<br />
          {footer.contact}
          <div className="copy" style={{ marginTop: 20 }}>{footer.copy} · <Link to="/concepts" style={{ color: 'var(--c3-gold)', textDecoration: 'none' }}>시안 목록 →</Link></div>
        </div>
      </footer>
    </div>
  )
}
