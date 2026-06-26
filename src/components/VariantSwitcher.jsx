import { useState } from 'react'

const VARIANTS = [
  { id: 'v0', label: '기본', desc: 'Original' },
  { id: 'vA', label: 'A', desc: '한지 헤리티지' },
  { id: 'vB', label: 'B', desc: '퀀텀 다크' },
  { id: 'vC', label: 'C', desc: '클린 테크' },
]

function applyVariant(id) {
  const body = document.body
  ;['v0', 'vA', 'vB', 'vC'].forEach((v) => body.classList.remove(v))
  body.classList.add(id)
}

export default function VariantSwitcher() {
  const [current, setCurrent] = useState(() => localStorage.getItem('airc-variant') || 'v0')
  const [open, setOpen] = useState(false)

  const choose = (id) => {
    setCurrent(id)
    applyVariant(id)
    localStorage.setItem('airc-variant', id)
  }

  // apply on first paint
  if (!document.body.classList.contains(current)) applyVariant(current)

  return (
    <div style={{
      position: 'fixed', right: 16, bottom: 16, zIndex: 9999, fontFamily: "'Noto Sans KR',sans-serif",
    }}>
      {open && (
        <div style={{
          background: 'rgba(17,24,39,.96)', color: '#fff', borderRadius: 14, padding: 10,
          boxShadow: '0 12px 36px rgba(0,0,0,.3)', marginBottom: 8, minWidth: 180, backdropFilter: 'blur(8px)',
        }}>
          <div style={{ fontSize: 10, letterSpacing: '.08em', opacity: .6, padding: '2px 6px 8px', textTransform: 'uppercase' }}>Design Variant</div>
          {VARIANTS.map((v) => (
            <button key={v.id} onClick={() => choose(v.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '9px 10px', margin: '2px 0',
              border: 'none', borderRadius: 9, cursor: 'pointer', textAlign: 'left',
              background: current === v.id ? 'rgba(56,189,248,.18)' : 'transparent',
              color: current === v.id ? '#7DD3FC' : '#E5E7EB', fontWeight: current === v.id ? 700 : 500,
            }}>
              <span style={{
                width: 24, height: 24, borderRadius: 7, flexShrink: 0, display: 'grid', placeItems: 'center',
                fontSize: 12, fontWeight: 800,
                background: v.id === 'v0' ? 'linear-gradient(135deg,#1E3A5F,#005BAA)'
                  : v.id === 'vA' ? 'linear-gradient(135deg,#3A2A22,#B8862E)'
                  : v.id === 'vB' ? 'linear-gradient(135deg,#0B1220,#38BDF8)'
                  : 'linear-gradient(135deg,#0A2540,#0066FF)',
              }}>{v.label === '기본' ? '0' : v.label}</span>
              <span>
                <div style={{ fontSize: 13, lineHeight: 1.2 }}>{v.desc}</div>
                <div style={{ fontSize: 10, opacity: .55 }}>{v.id === 'v0' ? 'PNU Navy' : v.label}</div>
              </span>
            </button>
          ))}
        </div>
      )}
      <button onClick={() => setOpen((o) => !o)} style={{
        width: 48, height: 48, borderRadius: 14, border: 'none', cursor: 'pointer',
        background: 'linear-gradient(135deg,#1E3A5F,#005BAA)', color: '#fff', fontSize: 20,
        boxShadow: '0 8px 24px rgba(0,0,0,.25)', display: 'grid', placeItems: 'center',
      }} aria-label="디자인 시안 전환">
        <i className="fas fa-palette" />
      </button>
    </div>
  )
}
