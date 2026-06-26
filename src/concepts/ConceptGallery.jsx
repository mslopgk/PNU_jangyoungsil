import { Link } from 'react-router-dom'

const CARDS = [
  {
    to: '/', n: '0', name: '원본 사이트', dir: 'PNU Navy · Dashboard',
    desc: '교수님이 선택하신 현재 디자인. 사이드바 + 대시보드 레이아웃.',
    bg: 'linear-gradient(135deg,#1E3A5F,#005BAA)', fg: '#fff', accent: '#BFDBFE', font: "'Noto Sans KR',sans-serif",
  },
  {
    to: '/concepts/1', n: '1', name: '형상(形容)', dir: 'Editorial Cinematic',
    desc: '풀블리드 매거진 · 대형 명조체 · 핀 스크롤 가로 전개 · 마스크 리빌.',
    bg: 'linear-gradient(135deg,#F4F1EA,#ECE7DB)', fg: '#16140F', accent: '#B83A4B', font: "'Nanum Myeongjo',serif",
  },
  {
    to: '/concepts/2', n: '2', name: '양자(量子)', dir: 'Immersive Dark Sci-Tech',
    desc: '딥 스페이스 다크 · 네온 글로우 · 스크럽 시네마 · 카운터 애니메이션.',
    bg: 'linear-gradient(135deg,#05070D,#0B1020)', fg: '#E8F0FF', accent: '#38BDF8', font: "'Syne',sans-serif",
  },
  {
    to: '/concepts/3', n: '3', name: '한지(韓紙)', dir: 'Heritage Luxury',
    desc: '한지 텍스처 · 금장 오방색 · 명조+코모란트 · 우아한 붓 리빌.',
    bg: 'linear-gradient(135deg,#F7F2E7,#EFE7D4)', fg: '#1F1A12', accent: '#B08D2E', font: "'Nanum Myeongjo',serif",
  },
]

export default function ConceptGallery() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0D16', color: '#E8F0FF', fontFamily: "'Noto Sans KR',sans-serif", padding: '80px 32px 120px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '.2em', color: '#38BDF8', textTransform: 'uppercase', marginBottom: 16 }}>Design Concepts · 디자인 시안</div>
          <h1 style={{ fontFamily: "'Nanum Myeongjo',serif", fontSize: 'clamp(40px,6vw,72px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-.03em', margin: 0 }}>
            장영실 AI 융합연구원<br /><span style={{ background: 'linear-gradient(135deg,#38BDF8,#A78BFA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>4가지 디자인 방향</span>
          </h1>
          <p style={{ maxWidth: 620, color: '#94A3C4', fontSize: 15.5, lineHeight: 1.8, marginTop: 24 }}>
            동일한 콘텐츠를 네 가지 다른 디자인 언어로 표현했습니다. 스크롤 연출(GSAP)이 포함된 인터랙티브 시안입니다. 각 카드를 눌러 비교해 보세요.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 22 }}>
          {CARDS.map((c) => (
            <Link key={c.to} to={c.to} style={{ textDecoration: 'none', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)', background: '#0E1322', transition: 'transform .25s, box-shadow .25s', display: 'block' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,.4)' }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ height: 200, background: c.bg, position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 24, overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 18, left: 22, fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: c.accent, opacity: .85 }}>{c.n}</div>
                <div style={{ fontFamily: c.font, fontSize: 40, fontWeight: 800, color: c.fg, letterSpacing: '-.03em', lineHeight: 1 }}>
                  {c.name}
                </div>
              </div>
              <div style={{ padding: '22px 24px 26px' }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '.1em', color: c.accent, textTransform: 'uppercase', marginBottom: 10 }}>{c.dir}</div>
                <div style={{ fontSize: 13.5, color: '#94A3C4', lineHeight: 1.7, marginBottom: 18 }}>{c.desc}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#E8F0FF', display: 'flex', alignItems: 'center', gap: 8 }}>시안 보기 <span style={{ color: c.accent }}>→</span></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
