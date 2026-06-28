import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, partners, footer } from '../concepts/content'
import '../styles/dashboard-foundry.css'

gsap.registerPlugin(ScrollTrigger)

const PIPELINE = [
  { step: '01', name: '문제 발굴', text: '앵커기업 수요 · 산업 현장 데이터' },
  { step: '02', name: 'AI 모델링', text: 'PNU 연구진 · GPU 303+ 인프라' },
  { step: '03', name: '현장 검증', text: '조선·의료·소재 AX 실증' },
  { step: '04', name: '성과 이전', text: '교육·논문·특허·기술이전' },
]

export default function DashFoundry() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dfy-hero > *', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dfy-meter i', { scaleX: 0, duration: 1, stagger: 0.1, ease: 'power3.out', transformOrigin: 'left' })
      gsap.utils.toArray('.dfy-reveal').forEach((node) => {
        gsap.from(node, { y: 28, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: node, start: 'top 88%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dfy" ref={root}>
      <header className="dfy-top">
        <Link to="/home" className="dfy-brand">AIRC <b>FOUNDRY</b></Link>
        <nav><Link to="/research">센터</Link><Link to="/partners">산학협력</Link><Link to="/facility">시설</Link><Link to="/dash">목록</Link></nav>
      </header>

      <main>
        <section className="dfy-hero">
          <div className="dfy-copy">
            <div className="dfy-kicker">Industrial Research Foundry</div>
            <h1>산업 문제를<br />AI 성과로 주조하는 허브</h1>
            <p>{institute.desc}. 제조·조선·의료 산학협력의 현장성을 더 강하게 드러내는 실무형 프리미엄 시안입니다.</p>
            <div className="dfy-actions"><Link to="/partners#contact">공동연구 신청</Link><Link to="/research">프로젝트 보기</Link></div>
          </div>
          <div className="dfy-photo">
            <img src="/assets/img/mfg-ai.jpg" alt="산학 제조 AI 연구" />
            <div className="dfy-readout"><b>303+</b><span>GPU ACTIVE</span><div className="dfy-meter"><i style={{ width: '38%' }} /></div></div>
          </div>
        </section>

        <section className="dfy-stats">
          {stats.map((s) => <article key={s.label}><span>{s.label}</span><b>{s.n.toLocaleString()}<small>{s.unit}</small></b><em>{s.sub}</em></article>)}
        </section>

        <section className="dfy-grid">
          <article className="dfy-panel dfy-reveal dfy-wide">
            <h2>AX Foundry Pipeline</h2>
            <div className="dfy-pipeline">{PIPELINE.map((p) => <div key={p.step}><span>{p.step}</span><b>{p.name}</b><small>{p.text}</small></div>)}</div>
          </article>
          <article className="dfy-panel dfy-reveal dfy-wide">
            <h2>앵커 연구센터</h2>
            <div className="dfy-centers">{centers.map((c) => <Link to={`/research#${c.key}`} key={c.key}><b>{c.name}</b><span>{c.anchor}</span><small>{c.desc}</small></Link>)}</div>
          </article>
          <article className="dfy-panel dfy-reveal">
            <h2>ACTS 운영 원리</h2>
            <div className="dfy-acts">{acts.map((a) => <div key={a.l}><strong>{a.l}</strong><b>{a.ko}</b><small>{a.name}</small></div>)}</div>
          </article>
          <article className="dfy-panel dfy-reveal">
            <h2>Founding Partners</h2>
            <div className="dfy-partners">{partners.map((p) => <Link to="/partners#founding" key={p.name}><b>{p.name}</b><span>{p.field}</span><em>{p.date}</em></Link>)}</div>
          </article>
        </section>
      </main>

      <footer className="dfy-foot">{footer.copy} · {footer.contact}</footer>
    </div>
  )
}
