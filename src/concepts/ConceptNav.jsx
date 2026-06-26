import { Link, useLocation } from 'react-router-dom'

const ITEMS = [
  { to: '/', label: '원본', n: '0' },
  { to: '/concepts/1', label: '형상', n: '1' },
  { to: '/concepts/2', label: '양자', n: '2' },
  { to: '/concepts/3', label: '한지', n: '3' },
  { to: '/concepts', label: '목록', n: '≡' },
]

export default function ConceptNav() {
  const { pathname } = useLocation()
  return (
    <div style={{
      position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', zIndex: 9999,
      display: 'flex', gap: 4, padding: 5, borderRadius: 999, background: 'rgba(15,18,28,.82)',
      backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,.25)', border: '1px solid rgba(255,255,255,.08)',
      fontFamily: "'Noto Sans KR',sans-serif",
    }}>
      {ITEMS.map((it) => {
        const active = pathname === it.to
        return (
          <Link key={it.to} to={it.to} style={{
            display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 999,
            textDecoration: 'none', fontSize: 12.5, fontWeight: 700, letterSpacing: '-.01em',
            color: active ? '#fff' : 'rgba(255,255,255,.6)',
            background: active ? 'linear-gradient(135deg,#38BDF8,#A78BFA)' : 'transparent',
            transition: 'all .2s',
          }}>
            <span style={{ fontSize: 10, opacity: .7, fontFamily: "'JetBrains Mono',monospace" }}>{it.n}</span>
            {it.label}
          </Link>
        )
      })}
    </div>
  )
}
