function enAlert(e) {
  e.preventDefault()
  alert('English version is in preparation.\n영문 버전은 준비 중입니다.')
}

export default function Footer() {
  return (
    <footer className="airc-footer">
      <div className="airc-foot-row">
        <div className="airc-foot-brand">
          <img src="/assets/pnu-signature.jpg" alt="부산대학교" className="airc-foot-logo" />
          <div>
            <div className="airc-foot-name">장영실 AI 융합연구원 · 부산대학교<small>airc.pusan.ac.kr · A.U.R.A 2.0 Unified Research</small></div>
          </div>
        </div>
        <div className="airc-slogan">"Arise PNU, 같이 더 높게"</div>
      </div>
      <div className="airc-foot-meta">
        <div className="airc-copy">© 2026 장영실 AI 융합연구원 · 부산대학교 | 부산광역시 금정구 부산대학로 63번길 2 · IT관 1층 | airc@pusan.ac.kr · 051-510-0000</div>
        <div className="airc-policy">
          <a href="#" onClick={enAlert}>개인정보처리방침</a>
          <a href="#" onClick={enAlert}>사이트맵</a>
          <a href="#" onClick={enAlert}>English</a>
        </div>
      </div>
    </footer>
  )
}
