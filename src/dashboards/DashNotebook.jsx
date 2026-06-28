import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-notebook.css'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  { l: '대시보드', active: true },
  { l: '비전 ACTS' },
  { l: '헤리티지' },
  { l: '연구센터' },
  { l: '파트너십' },
  { l: '공고' },
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

export default function DashNotebook() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dnb-phead', { y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform', rotation: -0.4 })
      gsap.from('.dnb-kpi', { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.07, ease: 'power3.out', clearProps: 'transform', delay: 0.15 })
      gsap.utils.toArray('.dnb-kpi .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.7, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 92%' } })
      })
      gsap.utils.toArray('.dnb-hero, .dnb-act, .dnb-h, .dnb-card, .dnb-partners, .dnb-note-card, .dnb-foot').forEach((c) => {
        gsap.from(c, { y: 28, autoAlpha: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 90%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dnb" ref={root}>
      <div className="dnb-top">
        <div className="brand">
          <div className="stamp">蔣</div>
          <div className="nm">{institute.name}<small>Research Lab Notebook</small></div>
        </div>
        <div className="crumb">— airc.pusan.ac.kr · 대시보드 노트 —</div>
        <div className="actions"><Link to="/partners#contact" className="cta">연구 협력 신청</Link></div>
      </div>

      <div className="dnb-layout">
        <aside className="dnb-side dnb-note">
          <div className="dnb-tape" />
          <div className="sh">목차 / Index</div>
          {NAV.map((n) => (
            <div key={n.l} className={'si ' + (n.active ? 'active' : '')}><span className="ck">{n.active ? '☑' : '☐'}</span>{n.l}</div>
          ))}
          <div className="annot">2025.12.30 개원 — 협약 3건 동시 체결!</div>
        </aside>

        <main className="dnb-main">
          <div className="dnb-phead dnb-note dnb-margin">
            <div className="scribble">개원 ★</div>
            <div className="date">2025.12.30 · IT관 개원식</div>
            <h1>장영실 AI 융합연구원 <em>대시보드</em></h1>
            <p>{institute.desc}. 3개 프로젝트 연구센터가 앵커기업과 함께 AI 융합연구를 선도합니다.</p>
          </div>

          <div className="dnb-kpis">
            {stats.map((s, i) => (
              <div className="dnb-kpi dnb-note" key={s.label}>
                <div className="circ" />
                <div className="lbl">{s.label}</div>
                <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                <div className="sub">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="dnb-hero dnb-note">
            <div className="dnb-tape l" />
            <div>
              <div className="tag">— 컨트롤타워 메모 —</div>
              <h2>3개 센터 · 앵커기업 중심 <em>AI 융합연구</em></h2>
              <p>조선·구조 AI · 헬스케어 AI · 소재·재료 AI 센터가 삼성중공업·은성의료재단·KIMS와 함께 GPU 303+장 인프라로 동남권 산업 혁신을 선도.</p>
              <div className="tags">{['🚢 삼성중공업', '⚕️ 은성의료재단', '🏭 KIMS', '🖥️ PNU-AXIS'].map((t) => <span key={t}>{t}</span>)}</div>
            </div>
            <div className="photo">
              <img src="/assets/img/it-building.jpg" alt="IT관" />
              <div className="cap">IT관, 13,161㎡</div>
            </div>
          </div>

          <div className="dnb-stitle"><span className="n">§ 01</span>비전 ACTS<span className="ul" /></div>
          <div className="dnb-acts">
            {acts.map((a, i) => (
              <div className="dnb-act dnb-note" key={a.l}>
                <div className={'ltr' + (i % 2 ? ' b' : '')}>{a.l}</div>
                <div className="nm">{a.name}</div>
                <div className="ko">{a.ko}</div>
                <div className="ds">{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="dnb-stitle"><span className="n">§ 02</span>헤리티지 매핑 — 15c → 21c<span className="ul" /></div>
          <div className="dnb-heritage">
            {heritage.map((h) => (
              <div className="dnb-h dnb-note" key={h.han}>
                <div className="top"><div className="han">{h.han}</div><div className="yr">{h.year} · {h.hanja}</div></div>
                <div className="nm">{h.invention} <span>{h.hanja}</span></div>
                <div className="ds">{h.desc}</div>
                <div className="field">{h.field}</div>
              </div>
            ))}
          </div>

          <div className="dnb-stitle"><span className="n">§ 03</span>3개 프로젝트 연구센터<span className="ul" /></div>
          <div className="dnb-cards">
            {centers.map((c) => (
              <div className="dnb-card dnb-note" key={c.key}>
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

          <div className="dnb-stitle"><span className="n">§ 04</span>개원 동시 협약 3건<span className="ul" /></div>
          <div className="dnb-partners dnb-note">
            <div className="h">▣ 협약 현황 (MOU)</div>
            {partners.map((p) => (
              <div className="dnb-partner" key={p.name}>
                <div className="ck">✓</div>
                <div className="nm">{p.name}<small>{p.en}</small></div>
                <div className="ct">{p.center}</div>
                <div className="dt">{p.date}</div>
              </div>
            ))}
          </div>

          <div className="dnb-stitle"><span className="n">§ 05</span>공고 · 핵심 연구원<span className="ul" /></div>
          <div className="dnb-notes">
            <div className="dnb-note-card dnb-note">
              <div className="h">▤ 공고</div>
              {NOTES.map((n, i) => <div className="it" key={i}><div className="d">{n.d}</div><div className="t">{n.t}</div></div>)}
            </div>
            <div className="dnb-note-card dnb-note">
              <div className="h">▤ 핵심 연구원</div>
              {FAC.map((f, i) => <div className="it" key={i}><div className="d">F{i + 1}</div><div className="t"><b>{f.n}</b> · {f.a}</div></div>)}
            </div>
          </div>

          <div className="dnb-foot dnb-note">
            <div className="sig">"Arise PNU, 같이 더 높게"</div>
            <div className="info">{institute.name} · {footer.addr} · {footer.contact}</div>
          </div>
        </main>
      </div>

      <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 0, background: 'var(--nb-paper)', border: '2px solid var(--nb-ink)', boxShadow: '3px 3px 0 var(--nb-ink)' }}>
        <Link to="/" style={pill('var(--nb-ink)', '1px solid var(--nb-line)')}>원본</Link>
        <Link to="/dash" style={pill('var(--nb-ink)', '1px solid var(--nb-line)')}>목록</Link>
      </div>
    </div>
  )
}

function pill(color, border) {
  return { textDecoration: 'none', color, background: 'transparent', borderLeft: border, fontFamily: "'Nanum Myeongjo',serif", fontSize: 13, fontWeight: 800, padding: '8px 16px' }
}
