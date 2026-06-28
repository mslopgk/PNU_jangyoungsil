import { Link, useLocation } from 'react-router-dom'

const ITEMS = [
  { to: '/home', label: '원본', n: '0' },
  { to: '/dash', label: '목록', n: '≡' },
  { to: '/dash/glass', label: '글래스', n: '1' },
  { to: '/dash/brutal', label: '브루탈', n: '2' },
  { to: '/dash/bento', label: '벤토', n: '3' },
  { to: '/dash/mission', label: '미션', n: '4' },
  { to: '/dash/broadsheet', label: '보도', n: '5' },
  { to: '/dash/modernist', label: '오방', n: '6' },
  { to: '/dash/blueprint', label: '블루프', n: '7' },
  { to: '/dash/neumorph', label: '뉴모프', n: '8' },
  { to: '/dash/obsidian', label: '옵시디언', n: '9' },
  { to: '/dash/swiss', label: '스위스', n: '10' },
  { to: '/dash/deco', label: '데코', n: '11' },
  { to: '/dash/generative', label: '제너럴', n: '12' },
  { to: '/dash/notebook', label: '노트', n: '13' },
  { to: '/dash/noir', label: '느와르', n: '14' },
  { to: '/dash/industrial', label: '인더', n: '15' },
  { to: '/dash/civic', label: '시빅', n: '16' },
  { to: '/dash/atlas', label: '아틀', n: '17' },
  { to: '/dash/signal', label: '시그널', n: '18' },
  { to: '/dash/archive', label: '아카이브', n: '19' },
  { to: '/dash/foundry', label: '파운드리', n: '20' },
  { to: '/dash/constellation', label: '별자리', n: '21' },
  { to: '/concepts', label: '랜딩', n: 'L' },
]

export default function ConceptNav() {
  const { pathname } = useLocation()
  return (
    <div style={{
      position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 9999,
      display: 'flex', gap: 3, padding: 5, borderRadius: 999, background: 'rgba(15,18,28,.82)',
      backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,.25)', border: '1px solid rgba(255,255,255,.08)',
      fontFamily: "'Noto Sans KR',sans-serif", maxWidth: 'calc(100vw - 20px)', overflowX: 'auto',
    }}>
      {ITEMS.map((it) => {
        const active = pathname === it.to
        return (
          <Link key={it.to} to={it.to} style={{
            display: 'flex', alignItems: 'center', gap: 5, padding: '7px 12px', borderRadius: 999,
            textDecoration: 'none', fontSize: 11.5, fontWeight: 700, letterSpacing: '-.01em', whiteSpace: 'nowrap',
            color: active ? '#fff' : 'rgba(255,255,255,.55)',
            background: active ? 'linear-gradient(135deg,#38BDF8,#A78BFA)' : 'transparent',
            transition: 'all .2s',
          }}>
            <span style={{ fontSize: 9, opacity: .7, fontFamily: "'JetBrains Mono',monospace" }}>{it.n}</span>
            {it.label}
          </Link>
        )
      })}
    </div>
  )
}
