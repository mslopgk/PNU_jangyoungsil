import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-noir.css'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  { n: '00', l: '대시보드', active: true },
  { n: '01', l: '비전 ACTS' },
  { n: '02', l: '헤리티지' },
  { n: '03', l: '연구센터' },
  { n: '04', l: '파트너십' },
  { n: '05', l: '공고' },
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
const HERIMG = ['korea-traditional', 'korea-architecture', 'library', 'lab-research']

export default function DashNoir() {
  const root = useRef(null)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const fine = window.matchMedia('(pointer: fine)').matches
    const mv = (e) => setCursor({ x: e.clientX, y: e.clientY })
    if (fine && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) window.addEventListener('mousemove', mv)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dno-hero .txt > *', { y: 30, autoAlpha: 0, duration: 1, stagger: 0.12, ease: 'power3.out', clearProps: 'transform', delay: 0.2 })
      gsap.from('.dno-hero img', { scale: 1.12, duration: 1.6, ease: 'power2.out' })
      gsap.utils.toArray('.dno-kpi .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.9, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 90%' } })
      })
      gsap.utils.toArray('.dno-shead .idx, .dno-shead h2').forEach((t) => gsap.from(t, { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: t, start: 'top 90%' } }))
      gsap.utils.toArray('.dno-act, .dno-h, .dno-card, .dno-partner, .dno-note').forEach((c) => {
        gsap.from(c, { y: 30, autoAlpha: 0, duration: 0.8, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 90%' } })
      })
      gsap.utils.toArray('.dno-h .img img, .dno-card .img img').forEach((im) => gsap.from(im, { scale: 1.15, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: im, start: 'top 90%' } }))
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); window.removeEventListener('mousemove', mv); ctx.revert() }
  }, [])

  return (
    <div className="dno" ref={root}>
      <div className="dno-grain" />
      <div className="dno-vign" />
      <div style={{ position: 'fixed', left: cursor.x, top: cursor.y, width: 22, height: 22, borderRadius: '50%', border: '1px solid rgba(242,242,242,.5)', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 9998, mixBlendMode: 'difference' }} />
      <div className="dno-wrap">
        <div className="dno-top">
          <div className="brand">
            <div className="logo">蔣</div>
            <div className="nm">{institute.name}<small>AI CONVERGENCE · NOIR</small></div>
          </div>
          <div className="crumb">— airc.pusan.ac.kr · 대시보드</div>
          <div className="actions"><Link to="/partners#contact" className="cta">연구 협력 신청</Link></div>
        </div>

        <div className="dno-layout">
          <aside className="dno-side dno-panel">
            <div className="sh">// Index</div>
            {NAV.map((n) => (
              <div key={n.n} className={'si ' + (n.active ? 'active' : '')}><span className="n">{n.n}</span>{n.l}</div>
            ))}
            <div className="quote">"Arise PNU, 같이 더 높게"<small>2025.12.30 · 개원</small></div>
          </aside>

          <main className="dno-main">
            <div className="dno-hero">
              <img src="/assets/img/it-building.jpg" alt="IT관" />
              <div className="corner">No. 01<br />2025.12.30</div>
              <div className="txt">
                <div className="kicker">— 동남권 AI 융합연구 컨트롤타워 —</div>
                <h1>장영실 AI<br /><em>융합연구원</em></h1>
                <p>{institute.desc}. 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 센터가 앵커기업과 함께 AI 융합연구를 선도합니다.</p>
              </div>
            </div>

            <div className="dno-kpis">
              {stats.map((s) => (
                <div className="dno-kpi" key={s.label}>
                  <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                  <div className="lbl">{s.label}</div>
                  <div className="sub">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="dno-sec">
              <div className="dno-shead"><span className="idx">— 01 —</span><h2>비전 ACTS</h2><span className="r" /></div>
              <div className="dno-acts">
                {acts.map((a) => (
                  <div className="dno-act" key={a.l}>
                    <div className="ltr">{a.l}</div>
                    <div className="nm">{a.name}</div>
                    <div className="ko">{a.ko}</div>
                    <div className="ds">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dno-sec">
              <div className="dno-shead"><span className="idx">— 02 —</span><h2>헤리티지 매핑</h2><span className="r" /></div>
              <div className="dno-heritage">
                {heritage.map((h, i) => (
                  <div className="dno-h dno-panel" key={h.han}>
                    <div className="img"><img src={`/assets/img/${HERIMG[i % 4]}.jpg`} alt={h.invention} /><div className="cap">{h.invention} <span>{h.hanja}</span></div></div>
                    <div className="bd">
                      <div className="yr">{h.year} · {h.hanja}</div>
                      <div className="ds">{h.desc}</div>
                      <div className="field">→ {h.field}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dno-sec">
              <div className="dno-shead"><span className="idx">— 03 —</span><h2>3개 연구센터</h2><span className="r" /></div>
              <div className="dno-cards">
                {centers.map((c) => (
                  <div className="dno-card dno-panel" key={c.key}>
                    <div className="img"><img src={`/assets/img/${c.key === 'marine' ? 'marine-ai' : c.key === 'medical' ? 'medical-ai' : 'mfg-ai'}.jpg`} alt={c.name} /></div>
                    <div className="bd">
                      <div className="anchor">▸ {c.anchor}</div>
                      <div className="nm">{c.name}</div>
                      <div className="ds">{c.desc}</div>
                      <div className="pts">{c.points.map((p) => <div key={p}>{p}</div>)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dno-sec">
              <div className="dno-shead"><span className="idx">— 04 —</span><h2>파트너십 · 협약 3건</h2><span className="r" /></div>
              <div className="dno-partners">
                {partners.map((p) => (
                  <div className="dno-partner dno-panel" key={p.name}>
                    <div className="ini">{p.initial}</div>
                    <div className="nm">{p.name}</div>
                    <div className="en">{p.en}</div>
                    <div className="ct">{p.center} · {p.field}</div>
                    <div className="dt">{p.date}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dno-sec">
              <div className="dno-shead"><span className="idx">— 05 —</span><h2>공고 · 연구원</h2><span className="r" /></div>
              <div className="dno-notes">
                <div className="dno-note dno-panel">
                  <div className="h">공고</div>
                  {NOTES.map((n, i) => <div className="it" key={i}><div className="d">{n.d}</div><div className="t">{n.t}</div></div>)}
                </div>
                <div className="dno-note dno-panel">
                  <div className="h">핵심 연구원</div>
                  {FAC.map((f, i) => <div className="it" key={i}><div className="d">F{i + 1}</div><div className="t"><b>{f.n}</b> · {f.a}</div></div>)}
                </div>
              </div>
            </div>

            <div className="dno-foot">
              <div className="big">Arise PNU, 같이 더 높게</div>
              <div className="info">{institute.name} · {footer.addr} · {footer.contact} · {footer.copy}</div>
            </div>
          </main>
        </div>

        <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 0, background: 'var(--no-panel)', border: '1px solid var(--no-ink)' }}>
          <Link to="/" style={pill('var(--no-body)', '1px solid var(--no-line)')}>원본</Link>
          <Link to="/dash" style={pill('#0A0A0A', 'none', 'var(--no-ink)')}>목록</Link>
        </div>
      </div>
    </div>
  )
}

function pill(color, border, bg) {
  return { textDecoration: 'none', color, background: bg || 'transparent', borderLeft: border, fontFamily: "'Fraunces',serif", fontSize: 13, fontWeight: 600, padding: '8px 16px' }
}
