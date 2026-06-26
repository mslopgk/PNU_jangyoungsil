import { Link, useSearchParams } from 'react-router-dom'

const CATS = [
  { key: '', label: '전체', num: null },
  { key: 'notice', label: '공지', num: '4' },
  { key: 'event', label: '세미나·행사', num: '3' },
  { key: 'recruit', label: '채용', num: '2' },
  { key: 'research', label: '연구 성과', num: '3' },
  { key: 'award', label: '수상', num: '2' },
  { key: 'mou', label: '협약', num: '1' },
]

const imgBox = (grad) => ({
  width: '140px',
  height: '100px',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',
})

export default function News() {
  const [searchParams] = useSearchParams()
  const active = searchParams.get('cat') || ''

  return (
    <>
      <div className="page-header">
        <div className="ph-left">
          <div className="ph-tag">Announcements · Seminars · Hiring</div>
          <h1 className="ph-title">알림 <em>알림판</em></h1>
          <div className="ph-desc">공지사항 · 세미나·행사 · 채용 — 우리 연구원의 모든 새 소식</div>
        </div>
        <div className="ph-right">
          <a href="#" className="ph-btn ph-btn-outline"><i className="fas fa-rss"></i> RSS 구독</a>
          <a href="#" className="ph-btn ph-btn-primary"><i className="fas fa-envelope"></i> 뉴스레터</a>
        </div>
      </div>

      <div className="news-layout">
        <div>
          <div className="cat-bar">
            {CATS.map((c) => (
              <Link key={c.key || 'all'} to={c.key ? `/news?cat=${c.key}` : '/news'} className={'cat-pill' + (active === c.key ? ' active' : '')}>
                {c.label}{c.num && <span className="num">{c.num}</span>}
              </Link>
            ))}
          </div>

          <a href="#" style={{ display: 'block', position: 'relative', height: '240px', borderRadius: '14px', overflow: 'hidden', marginBottom: '18px', boxShadow: '0 6px 22px rgba(15,31,69,.12)', transition: 'transform .2s' }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}>
            <img src="/assets/img/it-building.jpg" alt="개원 5개월 — IT관" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }} />
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(15,31,69,.85) 0%,rgba(20,63,144,.55) 55%,rgba(0,91,170,.25) 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '30px 32px', color: '#fff' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ padding: '4px 12px', background: '#143F90', border: '1px solid #BFDBFE', color: '#fff', borderRadius: '100px', fontSize: '10.5px', fontWeight: '800', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '.06em' }}>FEATURE</span>
                <span style={{ fontSize: '11px', color: '#BFDBFE', fontFamily: "'JetBrains Mono',monospace" }}>2026.05.15 · 자료실 PDF · 64p</span>
              </div>
              <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: '22px', fontWeight: '800', letterSpacing: '-.02em', lineHeight: '1.3', maxWidth: '620px' }}>개원 5개월 성과 보고서 공개<br /><span style={{ color: '#BFDBFE', fontSize: '16px', fontStyle: 'italic' }}>— 5개월의 연구·협약·인력 현황</span></div>
              <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.82)', marginTop: '8px', maxWidth: '600px' }}>2025년 12월 30일 개원 이후 약 5개월간의 추진 성과, 산학 협약 3건, 3개 프로젝트 연구센터 구성 — 우리 연구원의 첫 발자취를 한 권으로</div>
            </div>
          </a>

          <div className="news-list">
            <a href="#" className="news-card" style={{ gridTemplateColumns: 'auto 140px 1fr auto' }}>
              <div className="news-tag-col">
                <div className="news-tag hire">채용</div>
                <div className="news-date-box"><div className="d">25</div><div className="m">2026.05</div></div>
              </div>
              <div style={imgBox()}>
                <img src="/assets/img/lab-research.jpg" alt="박사후 연구원 채용" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(0,166,81,.25),rgba(4,120,87,.15))' }}></div>
              </div>
              <div className="news-body">
                <div className="nb-title">박사후 연구원 채용 공고 (2명) — 양자 AI · 의료 AI</div>
                <div className="nb-desc">옥종목 교수팀 (양자 AI 47억 사업) 박사후연구원 1명, 권선영 교수팀 (AI Bio Lab) 박사후연구원 1명 채용. 위상초전도체 실험 또는 GNN 신약 모델링 경험자 우대.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-calendar-times"></i> 마감 2026.06.30</span>
                  <span><i className="fas fa-user-tie"></i> 옥종목·권선영 교수</span>
                  <span><i className="fas fa-paperclip"></i> 첨부 (2)</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card">
              <div className="news-tag-col">
                <div className="news-tag notice">공지</div>
                <div className="news-date-box"><div className="d">22</div><div className="m">2026.05</div></div>
              </div>
              <div className="news-body">
                <div className="nb-title">2026년 연구비 집행 지침 개정 안내</div>
                <div className="nb-desc">부산대학교 산학협력단 연구비 집행 지침이 2026년 1월 1일자로 개정됨에 따라, 우리 연구원 소속 과제도 6월 1일부터 신지침 적용 예정입니다. 변경 내역과 자료 배포 일정을 안내드립니다.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-building"></i> 행정실</span>
                  <span><i className="fas fa-paperclip"></i> 첨부 (1)</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card" style={{ gridTemplateColumns: 'auto 140px 1fr auto' }}>
              <div className="news-tag-col">
                <div className="news-tag event">세미나</div>
                <div className="news-date-box"><div className="d">05</div><div className="m">2026.06</div></div>
              </div>
              <div style={imgBox()}>
                <img src="/assets/img/lecture-hall.jpg" alt="AI 비전 세미나" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(20,63,144,.25),rgba(0,91,170,.15))' }}></div>
              </div>
              <div className="news-body">
                <div className="nb-title">AI 비전 세미나 — Stanford AI Lab 연사 초청</div>
                <div className="nb-desc">스탠퍼드 AI Lab 박사후연구원 J. Park 박사를 초청, "Foundation Models for Embodied Agents" 주제 강연. 본 세미나는 우리 연구원·Stanford AI Lab 공동 연구 프로그램의 일환입니다.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-map-marker-alt"></i> IT관 세미나실 101</span>
                  <span><i className="fas fa-clock"></i> 14:00-16:00</span>
                  <span><i className="fas fa-users"></i> 사전 등록 (선착순)</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card">
              <div className="news-tag-col">
                <div className="news-tag mou">협약</div>
                <div className="news-date-box"><div className="d">13</div><div className="m">2026.05</div></div>
              </div>
              <div className="news-body">
                <div className="nb-title">Google for Education 협약 체결 — 국내 최초</div>
                <div className="nb-desc">부산대학교 개교 80주년을 맞아 Google for Education과 국내 대학 최초의 협약 체결. 우리 연구원은 AI 응용·교육 콘텐츠 측면에서 협력에 참여합니다.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-handshake"></i> 본부 대강당</span>
                  <span><i className="fas fa-image"></i> 사진 자료실</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card" style={{ gridTemplateColumns: 'auto 140px 1fr auto' }}>
              <div className="news-tag-col">
                <div className="news-tag event">행사</div>
                <div className="news-date-box"><div className="d">12</div><div className="m">2026.06</div></div>
              </div>
              <div style={imgBox()}>
                <img src="/assets/img/meeting.jpg" alt="산학협력 기술 발표회" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg,rgba(124,58,237,.25),rgba(30,58,95,.15))' }}></div>
              </div>
              <div className="news-body">
                <div className="nb-title">산학협력 기술 발표회</div>
                <div className="nb-desc">우리 연구원의 대표 기술을 산학 협력 기업 대상으로 발표. 삼성중공업·은성의료재단·KIMS 등 핵심 파트너 초청. 기술이전 상담 부스 운영.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-map-marker-alt"></i> 대학본부 국제회의실</span>
                  <span><i className="fas fa-clock"></i> 10:00-17:00</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card">
              <div className="news-tag-col">
                <div className="news-tag award">수상</div>
                <div className="news-date-box"><div className="d">18</div><div className="m">2026.05</div></div>
              </div>
              <div className="news-body">
                <div className="nb-title">CVPR 2026 박진선 교수팀 논문 채택 — VLM 분야</div>
                <div className="nb-desc">컴퓨터 비전 최고 학회 CVPR 2026에 박진선 교수팀의 Vision-Language Model 관련 논문이 채택. 시애틀 학회 발표 예정 (2026.06).</div>
                <div className="nb-meta">
                  <span><i className="fas fa-trophy"></i> CVPR 2026 (Top-tier)</span>
                  <span><i className="fas fa-user-tie"></i> 박진선 교수</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card">
              <div className="news-tag-col">
                <div className="news-tag notice">공지</div>
                <div className="news-date-box"><div className="d">15</div><div className="m">2026.05</div></div>
              </div>
              <div className="news-body">
                <div className="nb-title">개원 5개월 성과 보고서 공개</div>
                <div className="nb-desc">2025년 12월 30일 개원 이후 약 5개월간의 연구 성과, 협약 현황, 인력 구성을 정리한 중간 보고서 공개. PDF로 자료실 게시.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-file-pdf"></i> 자료실 (PDF · 64p)</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card">
              <div className="news-tag-col">
                <div className="news-tag research">연구 성과</div>
                <div className="news-date-box"><div className="d">10</div><div className="m">2026.05</div></div>
              </div>
              <div className="news-body">
                <div className="nb-title">신약개발 GNN 플랫폼 v2.0 출시 — 권선영 교수팀</div>
                <div className="nb-desc">권선영 교수 AI Bio Lab이 개발한 분자 그래프 신약 후보 탐색 플랫폼이 v2.0으로 업그레이드. 단백질-약물 상호작용 예측 정확도 12% 향상. 동아ST 등 산학협력 기업에 적용.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-flask"></i> AI Bio Lab</span>
                  <span><i className="fas fa-code-branch"></i> v2.0</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card">
              <div className="news-tag-col">
                <div className="news-tag event">세미나</div>
                <div className="news-date-box"><div className="d">28</div><div className="m">2026.06</div></div>
              </div>
              <div className="news-body">
                <div className="nb-title">양자 AI 워크숍 — ETRI 공동 (위상초전도체)</div>
                <div className="nb-desc">옥종목 교수팀 + ETRI 양자 통신 그룹 공동 워크숍. 위상초전도체 기반 양자 비트 구현, 양자 키 분배(QKD) 응용 등 4개 세션.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-map-marker-alt"></i> IT관 6F 양자 AI 실험실</span>
                  <span><i className="fas fa-handshake"></i> ETRI 공동</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>

            <a href="#" className="news-card">
              <div className="news-tag-col">
                <div className="news-tag hire">채용</div>
                <div className="news-date-box"><div className="d">02</div><div className="m">2026.05</div></div>
              </div>
              <div className="news-body">
                <div className="nb-title">행정 전문가 (계약직) 채용 공고</div>
                <div className="nb-desc">산학 협력 행정·MOU 관리·예산 집행 업무 담당. 학사 이상, 대학 또는 연구기관 행정 경험 3년 이상. 정규직 전환 가능.</div>
                <div className="nb-meta">
                  <span><i className="fas fa-calendar-times"></i> 마감 2026.05.31</span>
                  <span><i className="fas fa-building"></i> 행정실</span>
                </div>
              </div>
              <div className="news-arrow"><i className="fas fa-chevron-right"></i></div>
            </a>
          </div>

          <div className="pagination">
            <a href="#" className="pg arrow"><i className="fas fa-chevron-left"></i></a>
            <a href="#" className="pg active">1</a>
            <a href="#" className="pg">2</a>
            <a href="#" className="pg">3</a>
            <a href="#" className="pg">4</a>
            <a href="#" className="pg">5</a>
            <a href="#" className="pg arrow"><i className="fas fa-chevron-right"></i></a>
          </div>
        </div>

        <aside>
          <div className="cta-card">
            <h4>연구 협력 문의</h4>
            <p>산학 협력 · 기술 이전 · 공동 연구 제안은 산학협력실로 직접 연락 주십시오.</p>
            <Link to="/partners"><i className="fas fa-handshake"></i> 협력 페이지로 →</Link>
          </div>

          <div className="widget">
            <div className="widget-h"><i className="fas fa-bullhorn"></i> 주요 공지 TOP 4</div>
            <div className="widget-body">
              <div className="widget-row">
                <div className="t">박사후 연구원 채용 (2명)</div>
                <div className="m"><i className="fas fa-clock"></i> 마감 2026.06.30</div>
              </div>
              <div className="widget-row">
                <div className="t">2026년 연구비 집행 지침 개정</div>
                <div className="m"><i className="fas fa-calendar"></i> 2026.05.22</div>
              </div>
              <div className="widget-row">
                <div className="t">개원 5개월 성과 보고서 공개</div>
                <div className="m"><i className="fas fa-file-pdf"></i> 2026.05.15</div>
              </div>
              <div className="widget-row">
                <div className="t">행정 전문가 (계약직) 모집</div>
                <div className="m"><i className="fas fa-clock"></i> 마감 2026.05.31</div>
              </div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-h"><i className="fas fa-calendar"></i> 다가오는 세미나</div>
            <div className="widget-body">
              <div className="widget-row">
                <div className="t">Stanford AI Lab 연사 초청</div>
                <div className="m"><i className="fas fa-clock"></i> 06.05 (금) 14:00 · 세미나실 101</div>
              </div>
              <div className="widget-row">
                <div className="t">산학협력 기술 발표회</div>
                <div className="m"><i className="fas fa-clock"></i> 06.12 (금) · 본부 국제회의실</div>
              </div>
              <div className="widget-row">
                <div className="t">양자 AI 워크숍 (ETRI 공동)</div>
                <div className="m"><i className="fas fa-clock"></i> 06.28 (일) · 6F 양자 AI 실험실</div>
              </div>
            </div>
          </div>

          <div className="widget">
            <div className="widget-h"><i className="fas fa-user-plus" style={{ color: 'var(--green)' }}></i> 채용 현황 — 2명 모집 중</div>
            <div className="widget-body">
              <div className="hire-card">
                <div className="hr-top">
                  <div className="role">박사후 연구원 (PostDoc)</div>
                  <div className="ddl">~ 06.30</div>
                </div>
                <div className="field">양자 AI · 옥종목 교수팀</div>
                <div className="pos">위상초전도체 실험 · 47억 사업 · 1명</div>
              </div>
              <div className="hire-card">
                <div className="hr-top">
                  <div className="role">박사후 연구원 (PostDoc)</div>
                  <div className="ddl">~ 06.30</div>
                </div>
                <div className="field">의료 AI · 권선영 교수팀</div>
                <div className="pos">신약 GNN · AI Bio Lab · 1명</div>
              </div>
              <div className="hire-card">
                <div className="hr-top">
                  <div className="role">행정 전문가 (계약직)</div>
                  <div className="ddl">~ 05.31</div>
                </div>
                <div className="field">산학협력·MOU 관리</div>
                <div className="pos">학사 이상 · 행정 3년 이상</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
