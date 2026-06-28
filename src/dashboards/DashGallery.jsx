import { Link } from 'react-router-dom'

const DASH = [
  { to: '/dash/glass', n: '01', name: '글래스모피즘 오로라', dir: 'Glass Aurora · Dark', gene: '—',
    why: '딥 다크 + 오로라 메시, 서리유리 카드, 네온 글로우, 커스텀 커서·그레인.',
    bg: 'linear-gradient(135deg,#020617,#0B1020)', fg: '#E8F0FF', accent: '#38BDF8', font: "'Syne',sans-serif" },
  { to: '/dash/brutal', n: '02', name: '브루탈리스트 테크니컬', dir: 'Brutalist · Light', gene: '—',
    why: '극단 대비, 모노 그리드, 노출 보더, 하드 오프셋 섀도, 오버사이즈 데이터.',
    bg: 'linear-gradient(135deg,#F4F4EF,#ECECE4)', fg: '#111111', accent: '#E63946', font: "'JetBrains Mono',monospace" },
  { to: '/dash/bento', n: '03', name: '벤토 모던', dir: 'Bento SaaS · Light', gene: '—',
    why: '밝은 벤토 그리드, 둥근 카드, 그라데이션 액센트, 프리미엄 마이크로인터랙션.',
    bg: 'linear-gradient(135deg,#F8FAFC,#EEF2F7)', fg: '#0F172A', accent: '#0066FF', font: "'Fraunces',serif" },
  { to: '/dash/mission', n: '04', name: '미션 컨트롤', dir: 'Mission Control · Dark Ops', gene: 'G3 · G1',
    why: 's32의 정보 밀도·제도적 신뢰를 "연구소 옵스 콘솔"로 극대화. 같은 유전자의 가장 순수한 형태.',
    bg: 'linear-gradient(135deg,#07090C,#0E1311)', fg: '#E8F0E0', accent: '#FFB000', font: "'JetBrains Mono',monospace" },
  { to: '/dash/broadsheet', n: '05', name: '아카데믹 보도', dir: 'Academic Broadsheet · Light', gene: 'G1 · G5',
    why: 's32의 학술 권위·한국어 명조를 "대학 학술지/가제트"로 정통 표현. 카드 대신 다단 원고.',
    bg: 'linear-gradient(135deg,#FBF9F4,#F0EADC)', fg: '#14110D', accent: '#8C1C1C', font: "'Noto Serif KR',serif" },
  { to: '/dash/modernist', n: '06', name: '한국 모더니스트', dir: 'Korean Modernist · 오방색', gene: 'G2 · G4',
    why: 's32의 핵심인 전통×AI 이중성을 "오방색 시스템 + 스위스 그리드"로, 헤리티지 주도 현대화.',
    bg: 'linear-gradient(135deg,#F6F3EC,#EDE7D8)', fg: '#1A1714', accent: '#2A5E7E', font: "'Nanum Myeongjo',serif" },
  { to: '/dash/blueprint', n: '07', name: '블루프린트', dir: 'Architectural Drawing · Light', gene: 'G1 · G3',
    why: 's32의 IT관·BTL 건축 등 "엔지니어링 제도" 유전자를 기술도면으로. 제도적 권위 + 정밀 구조.',
    bg: 'linear-gradient(135deg,#F3F6FB,#E6EEF7)', fg: '#0B2A4A', accent: '#C62828', font: "'JetBrains Mono',monospace" },
  { to: '/dash/neumorph', n: '08', name: '뉴모피즘', dir: 'Soft Clay UI · Light', gene: 'G4',
    why: 's32의 정돈된 폴리시를 촉각적 극대화. 연질 입체·돌출/눌림 상태로 정제됨을 체감.',
    bg: 'linear-gradient(135deg,#E7EAF1,#DDE1EA)', fg: '#2F3645', accent: '#005BAA', font: "'Fraunces',serif" },
  { to: '/dash/obsidian', n: '09', name: '옵시디언 주얼', dir: 'Obsidian Metallic · Dark', gene: 'G1 · G4',
    why: 's32의 제도적 권위를 프레스티지 다크로. 사파이어/자수정+플래티넘 메탈릭으로 권위 표현.',
    bg: 'linear-gradient(135deg,#09090F,#1B1B28)', fg: '#ECEEF6', accent: '#3B7DE0', font: "'Cormorant Garamond',serif" },
  { to: '/dash/swiss', n: '10', name: '스위스 인터내셔널', dir: 'International Typographic · Light', gene: 'G4 · G5',
    why: 's32의 구조+한국어 타이포를 가장 엄격한 초절제로. 거대 타입·여백·핼러라인, 장식 없는 시스템.',
    bg: 'linear-gradient(135deg,#FFFFFF,#F2F2F0)', fg: '#0A0A0A', accent: '#005BAA', font: "'Hanken Grotesk',sans-serif" },
  { to: '/dash/deco', n: '11', name: '아르데코', dir: 'Art Deco · Cream/Gold', gene: 'G1 · G4',
    why: 's32의 제도적 권위를 의례적 장엄함으로. 기하학적 문양·금장·대칭으로 시민적 위엄 표현.',
    bg: 'linear-gradient(135deg,#F3EAD3,#ECE0C2)', fg: '#1E1610', accent: '#A67C1E', font: "'Cormorant Garamond',serif" },
  { to: '/dash/generative', n: '12', name: '제너러티브 데이터아트', dir: 'Generative · Dark Canvas', gene: 'G2',
    why: 's32의 AI 사이드를 미학 자체로. 살아있는 파티클 네트워크 캔버스로 연산을 시각화.',
    bg: 'linear-gradient(135deg,#06060C,#16162A)', fg: '#ECEFF8', accent: '#22D3EE', font: "'Syne',sans-serif" },
  { to: '/dash/notebook', n: '13', name: '리서치 노트북', dir: 'Research Notebook · Light', gene: 'G3 · G5',
    why: '연구 기록과 실험 로그처럼 읽히는 정리된 레이아웃. 데이터와 주석을 동시에 보여주는 학술형 톤.',
    bg: 'linear-gradient(135deg,#FAF7EF,#EFE8D6)', fg: '#1E293B', accent: '#B45309', font: "'Noto Serif KR',serif" },
  { to: '/dash/noir', n: '14', name: '데이터 느와르', dir: 'Data Noir · Dark', gene: 'G1 · G3',
    why: '검은 배경, 고대비 타이포, 집중형 정보 블록으로 기관의 무게감과 보안 콘솔 감각을 강화.',
    bg: 'linear-gradient(135deg,#050505,#18181B)', fg: '#F4F4F5', accent: '#E11D48', font: "'JetBrains Mono',monospace" },
  { to: '/dash/industrial', n: '15', name: '인더스트리얼 AX', dir: 'Industrial AX · Utility', gene: 'G3 · G4',
    why: '산학 협력과 제조 AX 맥락에 맞춘 실무형 화면. 모듈, 라벨, 작업 상태가 빠르게 읽히는 구조.',
    bg: 'linear-gradient(135deg,#111827,#374151)', fg: '#F9FAFB', accent: '#F59E0B', font: "'Hanken Grotesk',sans-serif" },
  { to: '/dash/civic', n: '16', name: '시빅 레저', dir: 'Civic Ledger · Official', gene: 'G1 · G3 · G5',
    why: '원본의 제도적 신뢰와 정보 밀도를 공공 행정 장부처럼 정제. 클라이언트가 좋아한 “권위 있는 정돈감”을 가장 직접 계승.',
    bg: 'linear-gradient(135deg,#F6F4EE,#FFFDF7)', fg: '#17202A', accent: '#9F2432', font: "'Gowun Batang',serif" },
  { to: '/dash/atlas', n: '17', name: '캠퍼스 아틀라스', dir: 'Campus Atlas · Spatial', gene: 'G2 · G3 · G4',
    why: 'IT관·캠퍼스·산학 앵커를 연구 지도처럼 연결. 기관 소개와 공간/인프라 설득을 시각적으로 강화.',
    bg: 'linear-gradient(135deg,#EEF4F1,#DDEBE5)', fg: '#10231E', accent: '#0A6B4D', font: "'Hahmlet',serif" },
  { to: '/dash/signal', n: '18', name: '소버린 시그널', dir: 'Sovereign Signal · Prestige Dark', gene: 'G1 · G2 · G4',
    why: '장영실 헤리티지와 AI 주권 메시지를 프레스티지 다크 네트워크로 표현. 고급스럽고 강한 첫인상용.',
    bg: 'linear-gradient(135deg,#050713,#18213F)', fg: '#EDF4FF', accent: '#47D5FF', font: "'Chakra Petch',sans-serif" },
]

export default function DashGallery() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0D16', color: '#E8F0FF', fontFamily: "'Noto Sans KR',sans-serif", padding: '80px 32px 120px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '.2em', color: '#38BDF8', textTransform: 'uppercase', marginBottom: 16 }}>Dashboard Concepts · 대시보드 시안</div>
          <h1 style={{ fontFamily: "'Nanum Myeongjo',serif", fontSize: 'clamp(38px,5.5vw,66px)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', margin: 0 }}>
            대시보드형 <span style={{ background: 'linear-gradient(135deg,#38BDF8,#A78BFA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>18가지 디자인</span>
          </h1>
        </div>

        <div style={{ background: '#0E1322', border: '1px solid rgba(56,189,248,.18)', borderRadius: 14, padding: '20px 24px', marginBottom: 44, fontSize: 13.5, color: '#94A3C4', lineHeight: 1.85 }}>
          <span style={{ color: '#7DD3FC', fontWeight: 700 }}>왜 s32를 좋아하는 분이 좋아할까 —</span> s32의 취향 DNA 5유전자: <b style={{ color: '#E8F0FF' }}>G1 제도적 권위</b> · <b style={{ color: '#E8F0FF' }}>G2 전통×AI 이중성</b> · <b style={{ color: '#E8F0FF' }}>G3 정보 밀도·구조</b> · <b style={{ color: '#E8F0FF' }}>G4 정돈된 폴리시</b> · <b style={{ color: '#E8F0FF' }}>G5 한국어 타이포</b>.
          아래 <b style={{ color: '#FFB000' }}>01-18</b> 시안은 각각 특정 유전자를 극대화한 "아예 다른 디자인"이며, 왜 s32 취향과 같은 맥인지 근거가 명확합니다.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: 22 }}>
          {DASH.map((c) => (
            <Link key={c.to} to={c.to} style={{ textDecoration: 'none', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,.08)', background: '#0E1322', transition: 'transform .25s, box-shadow .25s', display: 'block' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,.4)' }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ height: 132, background: c.bg, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', overflow: 'hidden' }}>
                <div style={{ fontFamily: c.font, fontSize: 26, fontWeight: 800, color: c.fg, letterSpacing: '-.02em', lineHeight: 1.1 }}>{c.name}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: c.accent, opacity: .9 }}>{c.n}</div>
              </div>
              <div style={{ padding: '18px 22px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '.1em', color: c.accent, textTransform: 'uppercase' }}>{c.dir}</div>
                  {c.gene !== '—' && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#FFB000', border: '1px solid rgba(255,176,0,.3)', borderRadius: 6, padding: '2px 8px' }}>{c.gene}</div>}
                </div>
                <div style={{ fontSize: 13, color: '#94A3C4', lineHeight: 1.7, marginBottom: 16, minHeight: 44 }}>{c.why}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#E8F0FF', display: 'flex', alignItems: 'center', gap: 8 }}>대시보드 보기 <span style={{ color: c.accent }}>→</span></div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 44, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/" style={linkStyle}>← 원본 사이트 (s32)</Link>
          <Link to="/concepts" style={linkStyle}>랜딩형 시안 3개 →</Link>
        </div>
      </div>
    </div>
  )
}

const linkStyle = {
  textDecoration: 'none', color: '#94A3C4', fontSize: 13.5, fontWeight: 600,
  padding: '12px 18px', borderRadius: 12, border: '1px solid rgba(255,255,255,.1)', background: '#0E1322',
}
