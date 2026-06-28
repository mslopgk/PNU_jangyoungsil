import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-archive.css'

gsap.registerPlugin(ScrollTrigger)

const DOCS = [
  { id: 'AIRC-001', title: '개원 산학협력 협약서', meta: '2025.12.30 · Founding MOU' },
  { id: 'AIRC-014', title: 'AI Innovation Hub 공간 배치 기록', meta: '10,067㎡ · 5개 캠퍼스' },
  { id: 'AIRC-027', title: 'GPU 인프라 확충 이력', meta: '303+ → 800장 목표' },
]

export default function DashArchive() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dar-hero-copy > *', { y: 22, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dar-file', { y: 24, autoAlpha: 0, duration: 0.55, stagger: 0.08, ease: 'power3.out', delay: 0.18, clearProps: 'transform' })
      gsap.utils.toArray('.dar-reveal').forEach((node) => {
        gsap.from(node, { y: 30, autoAlpha: 0, duration: 0.65, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: node, start: 'top 88%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dar" ref={root}>
      <header className="dar-top">
        <Link to="/" className="dar-brand"><span>蔣</span><b>{institute.name}</b><small>Institutional Archive</small></Link>
        <nav><Link to="/research">연구</Link><Link to="/heritage">헤리티지</Link><Link to="/partners">협약</Link><Link to="/dash">목록</Link></nav>
      </header>

      <main>
        <section className="dar-hero">
          <div className="dar-hero-copy">
            <div className="dar-kicker">Archive Cabinet · Trust by Record</div>
            <h1>기록으로 증명하는<br />AI 융합연구원</h1>
            <p>{institute.desc}. 원본 사이트의 신뢰감을 더 깊게 밀어, 문서함·색인표·인장·근거 자료의 언어로 재구성했습니다.</p>
            <div className="dar-actions"><Link to="/research">연구 백서</Link><Link to="/partners#founding">협약 원장</Link></div>
          </div>
          <div className="dar-visual">
            <img src="/assets/img/library-2.jpg" alt="연구 기록 아카이브" />
            <div className="dar-stamp">AIRC<br />2025</div>
          </div>
        </section>

        <section className="dar-files">
          {DOCS.map((d) => <article className="dar-file" key={d.id}><span>{d.id}</span><b>{d.title}</b><small>{d.meta}</small></article>)}
        </section>

        <section className="dar-grid">
          <article className="dar-panel dar-reveal">
            <h2>증빙 지표</h2>
            <div className="dar-stats">{stats.map((s) => <div key={s.label}><span>{s.label}</span><b>{s.n.toLocaleString()}<small>{s.unit}</small></b><em>{s.sub}</em></div>)}</div>
          </article>
          <article className="dar-panel dar-reveal">
            <h2>ACTS 색인</h2>
            <div className="dar-acts">{acts.map((a) => <div key={a.l}><strong>{a.l}</strong><b>{a.ko}</b><small>{a.desc}</small></div>)}</div>
          </article>
          <article className="dar-panel dar-reveal dar-wide">
            <h2>장영실 헤리티지 파일</h2>
            <div className="dar-heritage">{heritage.map((h) => <Link to="/heritage" key={h.hanja}><span>{h.year}</span><b>{h.invention}</b><small>{h.desc}</small><em>{h.field}</em></Link>)}</div>
          </article>
          <article className="dar-panel dar-reveal dar-wide">
            <h2>프로젝트 연구센터 보관철</h2>
            <div className="dar-centers">{centers.map((c) => <Link to={`/research#${c.key}`} key={c.key}><b>{c.name}</b><span>{c.anchor}</span><small>{c.points.join(' · ')}</small></Link>)}</div>
          </article>
          <article className="dar-panel dar-reveal dar-wide">
            <h2>개원 협약 원장</h2>
            <div className="dar-partners">{partners.map((p) => <Link to="/partners#founding" key={p.name}><strong>{p.initial}</strong><b>{p.name}</b><span>{p.center}</span><em>{p.date}</em></Link>)}</div>
          </article>
        </section>
      </main>

      <footer className="dar-foot">{footer.copy} · {footer.addr} · {footer.contact}</footer>
    </div>
  )
}
