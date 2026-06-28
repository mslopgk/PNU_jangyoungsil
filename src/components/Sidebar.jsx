import { Link, useLocation } from 'react-router-dom'

const STAT_BLOCKS = {
  '/facility': { tag: 'IT관 · 본부 거점', num: '13,161', unit: '㎡', lbl: '연면적 · 지하 1층 / 지상 10층' },
  '/heritage': { tag: '蔣英實 1390s—1442', num: '4', unit: '대 발명', lbl: '혼천의·자격루·측우기·갑인자' },
  default: { tag: '2025.12.30 출범', num: '3', unit: '건', lbl: '개원 동시 산학 협약 체결' },
}

function SbLink({ to, active, children }) {
  const cls = 'sb-item' + (active ? ' active' : '')
  if (to.startsWith('#')) {
    return <a href={to} className={cls}>{children}</a>
  }
  return <Link to={to} className={cls}>{children}</Link>
}

export default function Sidebar() {
  const { pathname } = useLocation()
  const path = pathname
  const stat = STAT_BLOCKS[path] || STAT_BLOCKS.default
  const onResearch = path === '/research'
  const onPartners = path === '/partners'

  return (
    <aside className="sidebar">
      <div className="sb-hero">
        <div className="sb-hero-axis">PNU Core AXIS · U pillar</div>
        <div className="sb-hero-tag">VISION 2030 · ACTS</div>
        <div className="sb-hero-name">AI 융합과학<br />주권 선도</div>
        <div className="sb-hero-en">Open Research Platform · 2025.12.30 출범</div>
        <div className="sb-acts">
          <div className="sb-acts-cell"><div className="sb-acts-letter">A</div><div className="sb-acts-l">Acceleration</div></div>
          <div className="sb-acts-cell"><div className="sb-acts-letter">C</div><div className="sb-acts-l">Core</div></div>
          <div className="sb-acts-cell"><div className="sb-acts-letter">T</div><div className="sb-acts-l">Transform</div></div>
          <div className="sb-acts-cell"><div className="sb-acts-letter">S</div><div className="sb-acts-l">Superiority</div></div>
        </div>
      </div>

      <div className="sb-axis-context">
        <div className="sb-axis-context-tag">A.U.R.A 2.0 · Unified Research</div>
        <div className="sb-axis-context-title">PNU Core AXIS의 U(Unified Research) 축을 담당</div>
        <a href="https://arise-ai.pusan.ac.kr" className="sb-axis-context-link">A.U.R.A 보기 →</a>
      </div>

      <div className="sb-section">
        <div className="sb-section-title">연구원 소개</div>
        <SbLink to="/home" active={path === '/home'}><i className="fas fa-home"></i> 대시보드</SbLink>
        <SbLink to="/about#vision" active={path === '/about'}><i className="fas fa-flag"></i> 비전 · ACTS</SbLink>
        <SbLink to="/about#director"><i className="fas fa-comment"></i> 원장 인사말</SbLink>
        <SbLink to="/about#org"><i className="fas fa-sitemap"></i> 조직 구성</SbLink>
        <SbLink to="/heritage" active={path === '/heritage'}><i className="fas fa-history"></i> 장영실 헤리티지 <div className="sb-badge gold">蔣</div></SbLink>
        <SbLink to="/facility" active={path === '/facility'}><i className="fas fa-building"></i> IT관 시설</SbLink>
      </div>
      <div className="sb-divider"></div>

      <div className="sb-section">
        <div className="sb-section-title">3개 프로젝트 연구센터</div>
        <SbLink to={onResearch ? '#marine' : '/research#marine'} active={onResearch}><i className="fas fa-ship"></i> 조선·구조 AI센터 <div className="sb-badge">삼성중공업</div></SbLink>
        <SbLink to={onResearch ? '#medical' : '/research#medical'}><i className="fas fa-heart-pulse"></i> 헬스케어 AI센터 <div className="sb-badge green">은성</div></SbLink>
        <SbLink to={onResearch ? '#material' : '/research#material'}><i className="fas fa-cubes"></i> 소재·재료 AI센터 <div className="sb-badge amber">KIMS</div></SbLink>
      </div>
      <div className="sb-divider"></div>

      <div className="sb-stat-block">
        <div className="sb-stat-tag">{stat.tag}</div>
        <div className="sb-stat-num">{stat.num}<span>{stat.unit}</span></div>
        <div className="sb-stat-lbl">{stat.lbl}</div>
      </div>

      <div className="sb-section">
        <div className="sb-section-title">성과 · 자료</div>
        <SbLink to="/news?cat=publication"><i className="fas fa-file-alt"></i> 논문 성과</SbLink>
        <SbLink to="/news?cat=patent"><i className="fas fa-lightbulb"></i> 특허</SbLink>
        <SbLink to="/news?cat=transfer"><i className="fas fa-exchange-alt"></i> 기술이전</SbLink>
        <SbLink to="/news?cat=award"><i className="fas fa-trophy"></i> 수상 실적</SbLink>
      </div>
      <div className="sb-divider"></div>

      <div className="sb-section">
        <div className="sb-section-title">파트너십</div>
        <SbLink to={onPartners ? '#founding' : '/partners#founding'} active={onPartners}><i className="fas fa-industry"></i> 산학 협력 (개원 협약 3건)</SbLink>
        <SbLink to={onPartners ? '#global' : '/partners#global'}><i className="fas fa-globe"></i> 글로벌 협력</SbLink>
        <SbLink to={onPartners ? '#gov' : '/partners#gov'}><i className="fas fa-landmark"></i> 정부·공공</SbLink>
      </div>
      <div className="sb-divider"></div>

      <div className="sb-section">
        <div className="sb-section-title">알림</div>
        <SbLink to="/news?cat=notice" active={path === '/news'}><i className="fas fa-bell"></i> 공지 <div className="sb-badge">3</div></SbLink>
        <SbLink to="/news?cat=event"><i className="fas fa-calendar"></i> 세미나·행사</SbLink>
        <SbLink to="/news?cat=recruit"><i className="fas fa-user-plus"></i> 채용 <div className="sb-badge green">2</div></SbLink>
      </div>

      <div className="sb-mini-dir">
        <div className="sb-mini-dir-badge">院</div>
        <div className="sb-mini-dir-text">
          <strong>초대 원장</strong>
          <small>장영실AI융합연구원 · 2025.12.30</small>
        </div>
      </div>

      <div className="sb-footer">
        <img src="/assets/pnu-symbol-color.jpg" alt="PNU" className="sb-footer-img" />
        <div className="sb-footer-links">
          <a href="#" onClick={(e) => { e.preventDefault(); alert('English version is in preparation.\n영문 버전은 준비 중입니다.') }}>PRIVACY</a>
          <a href="#" onClick={(e) => { e.preventDefault() }}>SITEMAP</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('English version is in preparation.\n영문 버전은 준비 중입니다.') }}>EN</a>
        </div>
      </div>
    </aside>
  )
}
