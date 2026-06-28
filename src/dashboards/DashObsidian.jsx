import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-obsidian.css'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  { i: 'fa-home', l: '대시보드', to: '/', active: true },
  { i: 'fa-flag', l: '비전 ACTS', to: '/about#vision' },
  { i: 'fa-history', l: '헤리티지', to: '/heritage' },
  { i: 'fa-microscope', l: '연구센터', to: '/research' },
  { i: 'fa-handshake', l: '파트너십', to: '/partners' },
  { i: 'fa-bell', l: '공고', to: '/news' },
]

const NOTES = [
  { d: '05.25', t: '<b>박사후연구원 채용 (2명)</b> — 양자·의료 AI · 마감 06.30' },
  { d: '05.22', t: '2026년 연구비 집행 지침 개정 안내' },
  { d: '06.05', t: 'AI 비전 세미나 — Stanford AI Lab 연사' },
  { d: '06.12', t: '산학협력 기술 발표회 · 본부 국제회의실' },
  { d: '05.18', t: 'CVPR 2026 박진선 교수팀 논문 채택' },
  { d: '05.15', t: '개원 5개월 성과 보고서 공개' },
]

const FAC = [
  { n: '초대 원장', a: '융합 AI 연구실' },
  { n: '옥종목 교수', a: '양자 AI · 47억 PI' },
  { n: '김호원 교수', a: 'Physical AI 보안 · S3Lab' },
  { n: '권선영 교수', a: '신약 AI · AI Bio Lab' },
  { n: '전상률 교수', a: 'CV · PNUCVLAB' },
  { n: '류광렬 교수', a: '제조 AI · DS 대학원장' },
]

const IC = ['b', 'g', 'a', 'v', 'r']
const ICICON = ['fa-flask', 'fa-handshake', 'fa-microchip', 'fa-building', 'fa-graduation-cap']

export default function DashObsidian() {
  const root = useRef(null)
  const [cursor, setCursor] = useState({ x: -100, y: -100 })

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    const fine = window.matchMedia('(pointer: fine)').matches
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY })
    if (fine && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) window.addEventListener('mousemove', onMove)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dob-phead > *', { y: 26, autoAlpha: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dob-kpi', { y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform', delay: 0.15 })
      gsap.utils.toArray('.dob-kpi .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.9, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 92%' } })
      })
      gsap.utils.toArray('.dob-hero, .dob-act, .dob-h, .dob-card, .dob-partner, .dob-note, .dob-foot').forEach((c) => {
        gsap.from(c, { y: 40, autoAlpha: 0, duration: 0.8, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 90%' } })
      })
      gsap.utils.toArray('.dob-note .it').forEach((r) => gsap.from(r, { x: -18, autoAlpha: 0, duration: 0.5, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: r, start: 'top 94%' } }))
      gsap.to('.dob-bg::before', { opacity: 0.6, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); window.removeEventListener('mousemove', onMove); ctx.revert() }
  }, [])

  return (
    <div className="dob" ref={root}>
      <div className="dob-bg" />
      <div className="dob-grain" />
      {/* jewel cursor */}
      <div style={{ position: 'fixed', left: cursor.x, top: cursor.y, width: 14, height: 14, borderRadius: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(59,125,224,.9), rgba(155,111,224,.2) 60%, transparent)', pointerEvents: 'none', zIndex: 9998, mixBlendMode: 'screen', transition: 'left .08s, top .08s' }} />
      <div className="dob-wrap">
        <div className="dob-top">
          <div className="brand">
            <div className="logo">蔣</div>
            <div className="nm">{institute.name}<small>JANG YEONG-SIL AI CONVERGENCE INST.</small></div>
          </div>
          <div className="nav">
            {NAV.map((n) => <Link key={n.l} to={n.to} className={n.active ? 'active' : ''}>{n.l}</Link>)}
          </div>
          <div className="actions">
            <Link to="/partners#contact" className="cta"><i className="fas fa-handshake" /> 연구 협력</Link>
            <div className="avatar">院</div>
          </div>
        </div>

        <div className="dob-layout">
          <aside className="dob-side dob-panel sheen">
            <div className="sh">// 탐색</div>
            {NAV.map((n) => (
              <div key={n.l} className={'si ' + (n.active ? 'active' : '')}><i className={'fas ' + n.i} />{n.l}</div>
            ))}
            <div className="sh">// 지표</div>
            <div className="jewel">
              <div className="k">GPU 보유</div>
              <div className="v">303<small> / 800</small></div>
            </div>
            <div className="jewel">
              <div className="k">개원 협약</div>
              <div className="v">3<small> 건</small></div>
            </div>
          </aside>

          <main className="dob-main">
            <div className="dob-phead dob-panel sheen">
              <div>
                <div className="tag">Prestige Dashboard · {institute.founded} 출범</div>
                <h1>장영실 AI 융합연구원 <em>대시보드</em></h1>
                <p>{institute.desc}</p>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <Link to="/research" className="btn ghost"><i className="fas fa-file-pdf" /> 백서</Link>
                <Link to="/partners#contact" className="btn primary"><i className="fas fa-arrow-trend-up" /> 연구 협력 신청</Link>
              </div>
            </div>

            <div className="dob-kpis">
              {stats.map((s, i) => (
                <div className="dob-kpi dob-panel" key={s.label}>
                  <div className={'ic ' + IC[i]}><i className={'fas ' + ICICON[i]} /></div>
                  <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                  <div className="lbl">{s.label}</div>
                  <div className="sub">{s.sub}</div>
                </div>
              ))}
            </div>

            <div className="dob-hero dob-panel sheen">
              <div>
                <div className="tag"><span className="dot" /> 동남권 AI 융합연구 컨트롤타워</div>
                <h2>3개 센터 · 앵커기업 중심 <em>AI 융합연구</em></h2>
                <p>조선·구조 AI · 헬스케어 AI · 소재·재료 AI 센터가 삼성중공업·은성의료재단·KIMS와 함께 GPU 303+장의 PNU-AXIS 인프라로 동남권 산업 혁신을 선도합니다.</p>
                <div className="tags">
                  {['🚢 삼성중공업', '⚕️ 은성의료재단', '🏭 KIMS', '🖥️ PNU-AXIS 303+'].map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
              <div className="img"><img src="/assets/img/it-building.jpg" alt="IT관" /></div>
            </div>

            <div className="dob-stitle"><span className="n">02</span>비전 ACTS — Vision 2030<span className="r" /></div>
            <div className="dob-acts">
              {acts.map((a) => (
                <div className="dob-act dob-panel" key={a.l}>
                  <div className="ltr">{a.l}</div>
                  <div className="nm">{a.name}</div>
                  <div className="ko">{a.ko}</div>
                  <div className="ds">{a.desc}</div>
                </div>
              ))}
            </div>

            <div className="dob-stitle"><span className="n">03</span>헤리티지 매핑 — 15c 발명 → 21c AI<span className="r" /></div>
            <div className="dob-heritage">
              {heritage.map((h) => (
                <div className="dob-h dob-panel" key={h.han}>
                  <div className="han">{h.han}</div>
                  <div className="yr">{h.year} · {h.hanja}</div>
                  <div className="nm">{h.invention} <span>{h.hanja}</span></div>
                  <div className="ds">{h.desc}</div>
                  <div className="field">↦ {h.field}</div>
                </div>
              ))}
            </div>

            <div className="dob-stitle"><span className="n">04</span>3개 프로젝트 연구센터<span className="r" /></div>
            <div className="dob-cards">
              {centers.map((c) => (
                <div className="dob-card dob-panel" key={c.key}>
                  <div className="img"><img src={`/assets/img/${c.key === 'marine' ? 'marine-ai' : c.key === 'medical' ? 'medical-ai' : 'mfg-ai'}.jpg`} alt={c.name} /></div>
                  <div className="bd">
                    <div className="anchor">▸ 앵커기업 · {c.anchor}</div>
                    <div className="nm">{c.name}</div>
                    <div className="ds">{c.desc}</div>
                    <div className="pts">{c.points.map((p) => <div key={p}>{p}</div>)}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dob-stitle"><span className="n">05</span>개원 동시 협약 3건<span className="r" /></div>
            <div className="dob-partners">
              {partners.map((p) => (
                <div className="dob-partner dob-panel" key={p.name}>
                  <div className="ini">{p.initial}</div>
                  <div className="nm">{p.name}</div>
                  <div className="en">{p.en}</div>
                  <div className="ct">{p.center} · {p.field}</div>
                  <div className="dt">{p.date}</div>
                </div>
              ))}
            </div>

            <div className="dob-stitle"><span className="n">06</span>공고 · 핵심 연구원<span className="r" /></div>
            <div className="dob-notes">
              <div className="dob-note dob-panel">
                <div className="h"><i className="fas fa-bullhorn" style={{ color: 'var(--ob-sapphire)' }} /> 공고</div>
                {NOTES.map((n, i) => <div className="it" key={i}><div className="d">{n.d}</div><div className="t">{n.t}</div></div>)}
              </div>
              <div className="dob-note dob-panel">
                <div className="h"><i className="fas fa-user-tie" style={{ color: 'var(--ob-amethyst)' }} /> 핵심 연구원</div>
                {FAC.map((f, i) => <div className="it" key={i}><div className="d">F{i + 1}</div><div className="t"><b>{f.n}</b><br /><span style={{ fontSize: 11, color: 'var(--ob-muted)' }}>{f.a}</span></div></div>)}
              </div>
            </div>

            <div className="dob-foot dob-panel">
              <div className="big">Arise PNU, <em>같이 더 높게</em></div>
              <div className="info">{institute.name} · {footer.addr}<br />{footer.contact} · {footer.copy}</div>
            </div>
          </main>
        </div>

        <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 4, padding: 5, borderRadius: 999, background: 'rgba(20,20,30,.85)', backdropFilter: 'blur(10px)', border: '1px solid var(--ob-line)' }}>
          <Link to="/" style={pill('var(--ob-body)')}>원본</Link>
          <Link to="/dash" style={pill('var(--ob-body)')}>목록</Link>
        </div>
      </div>
    </div>
  )
}

function pill(color) {
  return { textDecoration: 'none', color, fontSize: 12.5, fontWeight: 700, padding: '8px 16px', borderRadius: 999 }
}
