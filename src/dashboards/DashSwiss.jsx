import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { institute, stats, acts, centers, heritage, partners, footer } from '../concepts/content'
import '../styles/dashboard-swiss.css'

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
  { d: '05.25', t: '<b>박사후연구원 채용 (2명)</b> — 양자·의료 AI · 마감 06.30' },
  { d: '05.22', t: '2026년 연구비 집행 지침 개정 안내' },
  { d: '06.05', t: 'AI 비전 세미나 — Stanford AI Lab 연사' },
  { d: '06.12', t: '산학협력 기술 발표회 · 본부 국제회의실' },
  { d: '05.18', t: 'CVPR 2026 박진선 교수팀 논문 채택' },
  { d: '05.15', t: '개원 5개월 성과 보고서 공개' },
]

const FAC = [
  { k: 'F1', n: '초대 원장', a: '융합 AI 연구실' },
  { k: 'F2', n: '옥종목 교수', a: '양자 AI · 47억 PI' },
  { k: 'F3', n: '김호원 교수', a: 'Physical AI 보안 · S3Lab' },
  { k: 'F4', n: '권선영 교수', a: '신약 AI · AI Bio Lab' },
  { k: 'F5', n: '전상률 교수', a: 'CV · PNUCVLAB' },
  { k: 'F6', n: '류광렬 교수', a: '제조 AI · DS 대학원장' },
]

export default function DashSwiss() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.dsw-intro .kicker', { autoAlpha: 0, y: 12, duration: 0.6, ease: 'power3.out' })
      gsap.from('.dsw-intro h1', { yPercent: 30, autoAlpha: 0, duration: 1, ease: 'power4.out', delay: 0.1 })
      gsap.from('.dsw-intro .lede, .dsw-intro .meta', { y: 20, autoAlpha: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.3 })
      gsap.utils.toArray('.dsw-kpi .n .numval').forEach((n) => {
        const end = +n.dataset.value; const o = { v: 0 }
        gsap.to(o, { v: end, duration: 1.8, ease: 'power2.out', snap: { v: 1 }, onUpdate: () => { n.textContent = Math.round(o.v).toLocaleString() }, scrollTrigger: { trigger: n, start: 'top 90%' } })
      })
      gsap.utils.toArray('.dsw-shead .r').forEach((r) => gsap.from(r, { scaleX: 0, duration: 0.9, ease: 'power3.out', transformOrigin: 'left', scrollTrigger: { trigger: r, start: 'top 88%' } }))
      gsap.utils.toArray('.dsw-shead .idx, .dsw-shead h2').forEach((t) => gsap.from(t, { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: t, start: 'top 90%' } }))
      gsap.utils.toArray('.dsw-act, .dsw-her, .dsw-card, .dsw-note, .dsw-table tbody tr').forEach((c) => {
        gsap.from(c, { y: 24, autoAlpha: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform', scrollTrigger: { trigger: c, start: 'top 92%' } })
      })
      ScrollTrigger.refresh()
    }, el)
    const t = setTimeout(() => ScrollTrigger.refresh(), 400)
    return () => { clearTimeout(t); ctx.revert() }
  }, [])

  return (
    <div className="dsw" ref={root}>
      <div className="dsw-top">
        <div className="wm">장영실 AI 융합연구원 / <b>AIRCI</b></div>
        <div className="crumb">airc.pusan.ac.kr — <b>대시보드</b></div>
        <div className="actions">
          <Link to="/research">백서</Link><Link to="/news">뉴스</Link><Link to="/partners#contact" className="cta">연구 협력 신청</Link>
        </div>
      </div>

      <div className="dsw-layout">
        <aside className="dsw-side">
          <div className="sh">// Index</div>
          {NAV.map((n) => (
            <div key={n.n} className={'si ' + (n.active ? 'active' : '')}><span className="n">{n.n}</span>{n.l}</div>
          ))}
          <div className="quote">"Arise PNU, 같이 더 높게"<small>2025.12.30 · 개원</small></div>
        </aside>

        <main className="dsw-main">
          <div className="dsw-intro">
            <div className="kicker">Dashboard · 동남권 AI 융합연구 컨트롤타워</div>
            <h1>장영실 AI<br />융합<em>연구원</em></h1>
            <p className="lede">{institute.desc}. 조선·구조 AI · 헬스케어 AI · 소재·재료 AI 3개 프로젝트 연구센터가 앵커기업과 함께 AI 융합연구를 선도합니다.</p>
            <div className="meta">
              <div>출범<b>{institute.founded}</b></div>
              <div>IT관<b>13,161 ㎡</b></div>
              <div>GPU<b>303+ / 800장</b></div>
              <div>협약<b>3건 LIVE</b></div>
            </div>
            <div className="dsw-intro-visual">
              <img src="/assets/img/it-building.jpg" alt="부산대학교 IT관" />
              <span>IT Building · PNU Research Facility</span>
            </div>
          </div>

          <div className="dsw-kpis">
            {stats.map((s) => (
              <div className="dsw-kpi" key={s.label}>
                <div className="n"><span className="numval" data-value={s.n}>0</span><sup>{s.unit}</sup></div>
                <div className="l">{s.label}</div>
                <div className="s">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="dsw-sec">
            <div className="dsw-shead"><span className="idx">01</span><h2>비전 ACTS</h2><span className="r" /></div>
            <div className="dsw-acts">
              {acts.map((a) => (
                <div className="dsw-act" key={a.l}>
                  <div className="ltr">{a.l}</div>
                  <div className="nm">{a.name}</div>
                  <div className="ko">{a.ko}</div>
                  <div className="ds">{a.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dsw-sec">
            <div className="dsw-shead"><span className="idx">02</span><h2>헤리티지 매핑</h2><span className="r" /></div>
            <div className="dsw-heritage">
              {heritage.map((h) => (
                <div className="dsw-her" key={h.han}>
                  <div className="yr">{h.year}</div>
                  <div className="past">
                    <div className="t">{h.invention} <span>{h.hanja}</span></div>
                    <div className="d">{h.desc}</div>
                  </div>
                  <div className="now">
                    <div className="t">{h.field}</div>
                    <div className="d">앵커기업 중심 산학 융합 연구로 계승 — 21세기 AI로 재해석.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dsw-sec">
            <div className="dsw-shead"><span className="idx">03</span><h2>3개 연구센터</h2><span className="r" /></div>
            <div className="dsw-cards">
              {centers.map((c, i) => (
                <div className="dsw-card" key={c.key}>
                  <div className="idx">SECT.0{i + 1} · {c.han}</div>
                  <div className="nm">{c.name}</div>
                  <div className="anchor">▸ {c.anchor}</div>
                  <div className="ds">{c.desc}</div>
                  <div className="pts">{c.points.map((p, j) => <div key={p}><span className="k">0{j + 1}</span>{p}</div>)}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dsw-sec">
            <div className="dsw-shead"><span className="idx">04</span><h2>파트너십 · 협약 3건</h2><span className="r" /></div>
            <table className="dsw-table">
              <thead><tr><th>No.</th><th>기관</th><th>교내 협력센터</th><th>분야</th><th>협약일</th></tr></thead>
              <tbody>
                {partners.map((p, i) => (
                  <tr key={p.name}><td className="mono">M-0{i + 1}</td><td className="nm">{p.name}<small>{p.en}</small></td><td>{p.center}</td><td className="mono">{p.field}</td><td className="mono">{p.date}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="dsw-sec">
            <div className="dsw-shead"><span className="idx">05</span><h2>공고 · 연구원</h2><span className="r" /></div>
            <div className="dsw-notes">
              <div className="dsw-note">
                <div className="h">// 공고</div>
                {NOTES.map((n, i) => <div className="it" key={i}><div className="d">{n.d}</div><div className="t">{n.t}</div></div>)}
              </div>
              <div className="dsw-note">
                <div className="h">// 핵심 연구원</div>
                {FAC.map((f) => <div className="it" key={f.k}><div className="d">{f.k}</div><div className="t"><b>{f.n}</b> · {f.a}</div></div>)}
              </div>
            </div>
          </div>

          <div className="dsw-foot">
            <div className="big">Arise PNU,<br /><em>같이 더 높게</em></div>
            <div className="info">{institute.name}<br />{footer.addr}<br />{footer.contact}<br />{footer.copy}</div>
          </div>
        </main>
      </div>

      <div style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999, display: 'flex', gap: 0, padding: 0, borderRadius: 0, background: 'var(--sw-bg)', border: '1px solid var(--sw-ink)' }}>
        <Link to="/" style={pill('var(--sw-body)', 'none', '1px solid var(--sw-rule)')}>원본</Link>
        <Link to="/dash" style={pill('#fff', 'var(--sw-accent)', 'none')}>목록</Link>
      </div>
    </div>
  )
}

function pill(color, bg, border) {
  return { textDecoration: 'none', color, background: bg, borderLeft: border, fontSize: 12.5, fontWeight: 700, padding: '9px 18px' }
}
