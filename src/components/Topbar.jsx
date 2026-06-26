import { Link, useLocation } from 'react-router-dom'

const BREADCRUMBS = {
  '/': { label: '연구원 홈', chevron: 'rgba(255,255,255,.72)' },
  '/about': { label: '연구원 소개', chevron: 'rgba(255,255,255,.72)' },
  '/facility': { label: 'IT관 시설', chevron: 'rgba(255,255,255,.72)' },
  '/heritage': { label: '장영실 헤리티지', chevron: 'rgba(255,255,255,.3)' },
  '/news': { label: '알림', chevron: 'rgba(255,255,255,.72)' },
  '/partners': { label: '파트너십', chevron: 'rgba(255,255,255,.72)' },
  '/research': { label: '6대 연구 분야', chevron: 'rgba(255,255,255,.72)' },
}

export default function Topbar() {
  const { pathname } = useLocation()
  const crumb = BREADCRUMBS[pathname] || BREADCRUMBS['/']

  return (
    <div className="topbar">
      <div className="tb-left">
        <div className="tb-brand">
          <img src="/assets/pnu-signature.jpg" alt="부산대학교" className="tb-logo" />
          <div className="tb-divider"></div>
          <div>
            <div className="tb-name">장영실 AI 융합연구원</div>
            <div className="tb-sub">JANG YEONG-SIL AI CONVERGENCE RESEARCH INSTITUTE</div>
          </div>
        </div>
        <div className="tb-sep"></div>
        <div className="tb-bread">
          <Link to="/">airc.pusan.ac.kr</Link>
          <i className="fas fa-chevron-right" style={{ fontSize: '9px', color: crumb.chevron }}></i>
          <strong>{crumb.label}</strong>
        </div>
      </div>
      <div className="tb-right">
        <span className="tb-slogan">"Arise PNU, 같이 더 높게"</span>
        <a href="https://www.pusan.ac.kr" className="tb-link">부산대 ↗</a>
        <a href="https://ai.pusan.ac.kr" className="tb-link">AI 대학 ↗</a>
        <a href="https://arise-ai.pusan.ac.kr" className="tb-link">ARISE ↗</a>
        <Link to="/partners#contact" className="tb-link tb-cta"><i className="fas fa-handshake" style={{ fontSize: '11px', marginRight: '6px' }}></i>연구 협력 문의</Link>
      </div>
    </div>
  )
}
