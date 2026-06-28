import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-civic.css'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  { label: 'Overview', to: '/dash', code: '00' },
  { label: 'Vision ACTS', to: '/about#vision', code: '01' },
  { label: 'Research Centers', to: '/research', code: '02' },
  { label: 'Partners', to: '/partners', code: '03' },
  { label: 'Newsroom', to: '/news', code: '04' },
]

const REPORTS = [
  { code: 'BRF-01', title: 'AI 연구협력센터 운영 브리프', area: '조선·구조', state: '승인' },
  { code: 'BRF-02', title: '헬스케어 AX 과제 발굴 회의록', area: '의료·바이오', state: '검토' },
  { code: 'BRF-03', title: '소재 빅데이터 결합 연구 계획', area: '소재·제조', state: '기획' },
]

export default function DashCivic() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dcv-hero > *', { y: 22, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dcv-stat', { y: 20, autoAlpha: 0, duration: 0.55, stagger: 0.05, ease: 'power3.out', delay: 0.15, clearProps: 'transform' })
      gsap.utils.toArray('.dcv-num').forEach((n) => {
        const end = +n.dataset.value
        const obj = { v: 0 }
        gsap.to(obj, { v: end, duration: 1.4, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(obj.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 92%' } })
      })
      gsap.utils.toArray('.dcv-reveal').forEach((node) => {
        gsap.from(node, { y: 28, autoAlpha: 0, duration: 0.65, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: node, start: 'top 88%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 350)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dcv" ref={root}>
      <header className="dcv-top">
        <Link to="/home" className="dcv-brand"><span>蔣</span><b>{institute.name}</b></Link>
        <nav>{NAV.map((n) => <Link key={n.code} to={n.to}><em>{n.code}</em>{n.label}</Link>)}</nav>
        <Link to="/partners#contact" className="dcv-cta">연구 협력 신청</Link>
      </header>

      <main className="dcv-main">
        <section className="dcv-hero">
          <div className="dcv-kicker">Civic Ledger · Institutional Research Dashboard</div>
          <h1>공공 연구기관의 신뢰감을<br /><span>정제된 행정 장부처럼</span> 보여주는 대시보드</h1>
          <p>{institute.desc}. 과제, 협약, 연구센터, 헤리티지를 한 화면에서 증빙 가능한 구조로 정리합니다.</p>
          <div className="dcv-actions">
            <Link to="/research">분야별 백서</Link>
            <Link to="/partners#founding">개원 협약 보기</Link>
          </div>
          <figure className="dcv-visual">
            <img src="/assets/img/it-building.jpg" alt="부산대학교 IT관" />
            <figcaption>IT관 연구 거점 · 13,161㎡</figcaption>
          </figure>
        </section>

        <section className="dcv-stats" aria-label="주요 지표">
          {stats.map((s) => (
            <article className="dcv-stat" key={s.label}>
              <div className="lab">{s.label}</div>
              <div className="val"><span className="dcv-num" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
              <div className="sub">{s.sub}</div>
            </article>
          ))}
        </section>

        <section className="dcv-grid">
          <article className="dcv-panel dcv-reveal dcv-wide">
            <div className="dcv-panel-head"><span>01</span><h2>3개 프로젝트 연구센터</h2><Link to="/research">전체 보기</Link></div>
            <div className="dcv-centers">
              {centers.map((c) => (
                <Link to={`/research#${c.key}`} className="dcv-center" key={c.key}>
                  <div className="han">{c.han}</div>
                  <div><b>{c.name}</b><small>{c.anchor} · {c.en}</small><p>{c.desc}</p></div>
                </Link>
              ))}
            </div>
          </article>

          <article className="dcv-panel dcv-reveal">
            <div className="dcv-panel-head"><span>02</span><h2>ACTS</h2></div>
            <div className="dcv-acts">
              {acts.map((a) => <div key={a.l}><strong>{a.l}</strong><b>{a.name}</b><small>{a.ko}</small></div>)}
            </div>
          </article>

          <article className="dcv-panel dcv-reveal">
            <div className="dcv-panel-head"><span>03</span><h2>공문형 브리프</h2></div>
            <div className="dcv-reports">
              {REPORTS.map((r) => <div key={r.code}><em>{r.code}</em><b>{r.title}</b><span>{r.area} · {r.state}</span></div>)}
            </div>
          </article>

          <article className="dcv-panel dcv-reveal dcv-wide">
            <div className="dcv-panel-head"><span>04</span><h2>헤리티지 → AI 연구 축</h2><Link to="/heritage">헤리티지</Link></div>
            <div className="dcv-heritage">
              {heritage.map((h) => <div key={h.hanja}><span>{h.year}</span><b>{h.invention}</b><small>{h.desc}</small><em>{h.field}</em></div>)}
            </div>
          </article>

          <article className="dcv-panel dcv-reveal dcv-wide">
            <div className="dcv-panel-head"><span>05</span><h2>개원 동시 협약</h2><Link to="/partners">파트너십</Link></div>
            <div className="dcv-partners">
              {partners.map((p) => <Link to="/partners#founding" key={p.name}><strong>{p.initial}</strong><b>{p.name}</b><small>{p.center}</small><em>{p.date}</em></Link>)}
            </div>
          </article>
        </section>
      </main>

      <footer className="dcv-foot">{footer.copy} · {footer.addr} · {footer.contact}</footer>
    </div>
  )
}
