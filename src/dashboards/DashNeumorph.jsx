import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-neumorph.css'

gsap.registerPlugin(ScrollTrigger)

const NAV = [
  { i: 'fa-home', l: '대시보드', active: true },
  { i: 'fa-flag', l: '비전 ACTS' },
  { i: 'fa-history', l: '헤리티지' },
  { i: 'fa-microscope', l: '연구센터' },
  { i: 'fa-handshake', l: '파트너십' },
  { i: 'fa-bell', l: '공고' },
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
const PINI = ['linear-gradient(135deg,#1428A0,#005BAA)', 'linear-gradient(135deg,#00A651,#047857)', 'linear-gradient(135deg,#3B82F6,#143F90)']

export default function DashNeumorph() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dnm-phead > *', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform' })
      gsap.from('.dnm-kpi', { scale: 0.9, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'back.out(1.4)', clearProps: 'transform' })
      gsap.utils.toArray('.dnm-kpi .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.7, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 92%' } })
      })
      gsap.utils.toArray('.dnm-hero, .dnm-act, .dnm-h, .dnm-card, .dnm-partner, .dnm-note, .dnm-foot').forEach((c) => {
        gsap.from(c, { y: 36, autoAlpha: 0, duration: 0.7, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 90%' } })
      })
      gsap.utils.toArray('.dnm-note .it').forEach((r) => gsap.from(r, { x: -16, autoAlpha: 0, duration: 0.4, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: r, start: 'top 94%' } }))
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dnm" ref={root}>
      <div className="dnm-top">
        <div className="brand">
          <div className="logo dnm-raised">蔣</div>
          <div className="nm">{institute.name}<small>AI CONVERGENCE RESEARCH INST.</small></div>
        </div>
        <div className="search dnm-inset"><i className="fas fa-search" /><input placeholder="검색 — 연구센터, 논문, 공고…" /></div>
        <div className="actions">
          <div className="chip dnm-raised"><i className="fas fa-bell" />3</div>
          <div className="chip dnm-raised" style={{ color: 'var(--nm-green)' }}><i className="fas fa-user-plus" />2</div>
          <div className="avatar">院</div>
        </div>
      </div>

      <div className="dnm-layout">
        <aside className="dnm-side dnm-raised">
          <div className="sh">// 탐색</div>
          {NAV.map((n) => (
            <div key={n.l} className={'si ' + (n.active ? 'dnm-inset active' : '')}>
              <i className={'fas ' + n.i} />{n.l}
            </div>
          ))}
          <div className="sh">// 실시간 지표</div>
          <div className="stat dnm-inset">
            <div className="k">GPU 보유</div>
            <div className="v">303<small> / 800장</small></div>
          </div>
          <div className="stat dnm-inset">
            <div className="k">개원 협약</div>
            <div className="v">3<small> 건 LIVE</small></div>
          </div>
        </aside>

        <main className="dnm-main">
          <div className="dnm-phead dnm-raised">
            <div>
              <div className="tag">Dashboard · {institute.founded} 출범</div>
              <h1>장영실 AI 융합연구원 <em>대시보드</em></h1>
              <p>{institute.desc}</p>
            </div>
            <div className="btns">
              <Link to="/research" className="btn ghost dnm-raised"><i className="fas fa-file-pdf" /> 백서</Link>
              <Link to="/partners#contact" className="btn primary"><i className="fas fa-handshake" /> 연구 협력 신청</Link>
            </div>
          </div>

          <div className="dnm-kpis">
            {stats.map((s, i) => (
              <div className="dnm-kpi dnm-raised" key={s.label}>
                <div className={'ic ' + IC[i]}><i className={'fas ' + ICICON[i]} /></div>
                <div className="num"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                <div className="lbl">{s.label}</div>
                <div className="sub">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="dnm-hero dnm-raised">
            <div>
              <div className="tag dnm-inset"><span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--nm-green)', display: 'inline-block' }} /> 동남권 AI 융합연구 컨트롤타워</div>
              <h2>3개 센터 · 앵커기업 중심 <em>AI 융합연구</em></h2>
              <p>조선·구조 AI · 헬스케어 AI · 소재·재료 AI 센터가 삼성중공업·은성의료재단·KIMS와 함께 GPU 303+장 인프라로 동남권 산업 혁신을 지원합니다.</p>
              <div className="tags">
                {['🚢 삼성중공업', '⚕️ 은성의료재단', '🏭 KIMS', '🖥️ PNU-AXIS'].map((t) => <span key={t} className="dnm-inset">{t}</span>)}
              </div>
            </div>
            <div className="img"><img src="/assets/img/it-building.jpg" alt="IT관" /></div>
          </div>

          <div className="dnm-stitle"><span className="n dnm-inset">02</span>비전 ACTS — Vision 2030<span className="r" /></div>
          <div className="dnm-acts">
            {acts.map((a) => (
              <div className="dnm-act dnm-raised" key={a.l}>
                <div className="ltr">{a.l}</div>
                <div className="nm">{a.name}</div>
                <div className="ko">{a.ko}</div>
                <div className="ds">{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="dnm-stitle"><span className="n dnm-inset">03</span>헤리티지 매핑 — 15c 발명 → 21c AI<span className="r" /></div>
          <div className="dnm-heritage">
            {heritage.map((h) => (
              <div className="dnm-h dnm-raised" key={h.han}>
                <div className="han">{h.han}</div>
                <div className="yr">{h.year} · {h.hanja}</div>
                <div className="nm">{h.invention} <span>{h.hanja}</span></div>
                <div className="ds">{h.desc}</div>
                <div className="field dnm-inset">↦ {h.field}</div>
              </div>
            ))}
          </div>

          <div className="dnm-stitle"><span className="n dnm-inset">04</span>3개 프로젝트 연구센터<span className="r" /></div>
          <div className="dnm-cards">
            {centers.map((c) => (
              <div className="dnm-card dnm-raised" key={c.key}>
                <div className="img"><img src={`/assets/img/${c.key === 'marine' ? 'marine-ai' : c.key === 'medical' ? 'medical-ai' : 'mfg-ai'}.jpg`} alt={c.name} /></div>
                <div className="bd">
                  <div className="anchor">▸ 앵커기업 · {c.anchor}</div>
                  <div className="nm">{c.name}</div>
                  <div className="ds">{c.desc}</div>
                  <div className="pts">{c.points.map((p) => <span key={p} className="dnm-inset">{p}</span>)}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="dnm-stitle"><span className="n dnm-inset">05</span>개원 동시 협약 3건<span className="r" /></div>
          <div className="dnm-partners">
            {partners.map((p, i) => (
              <div className="dnm-partner dnm-raised" key={p.name}>
                <div className="ini" style={{ background: PINI[i % 3] }}>{p.initial}</div>
                <div className="nm">{p.name}</div>
                <div className="en">{p.en}</div>
                <div className="ct">{p.center} · {p.field}</div>
                <div className="dt">{p.date}</div>
              </div>
            ))}
          </div>

          <div className="dnm-stitle"><span className="n dnm-inset">06</span>공고 · 핵심 연구원<span className="r" /></div>
          <div className="dnm-notes">
            <div className="dnm-note dnm-raised">
              <div className="h"><i className="fas fa-bullhorn" style={{ color: 'var(--nm-accent)' }} /> 공고</div>
              {NOTES.map((n, i) => <div className="it dnm-inset" key={i}><div className="d">{n.d}</div><div className="t">{n.t}</div></div>)}
            </div>
            <div className="dnm-note dnm-raised">
              <div className="h"><i className="fas fa-user-tie" style={{ color: 'var(--nm-accent2)' }} /> 핵심 연구원</div>
              {FAC.map((f, i) => <div className="it dnm-inset" key={i}><div className="d">F{i + 1}</div><div className="t"><b>{f.n}</b><br /><span style={{ fontSize: 11, color: 'var(--nm-muted)' }}>{f.a}</span></div></div>)}
            </div>
          </div>

          <div className="dnm-foot dnm-raised">
            <div className="big">Arise PNU, <em>같이 더 높게</em></div>
            <div className="info">{institute.name}<br />{footer.addr}<br />{footer.contact}</div>
          </div>
        </main>
      </div>

      <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 4, padding: 5, borderRadius: 999, background: 'var(--nm-surface)', boxShadow: '5px 5px 12px var(--nm-dark), -5px -5px 12px var(--nm-light)' }}>
        <Link to="/home" style={pill('#545B6B')}>원본</Link>
        <Link to="/dash" style={pill('#545B6B')}>목록</Link>
      </div>
    </div>
  )
}

function pill(color) {
  return { textDecoration: 'none', color, fontSize: 12.5, fontWeight: 700, padding: '8px 16px', borderRadius: 999 }
}
