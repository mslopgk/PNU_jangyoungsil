const hide = (e) => { e.currentTarget.style.display = 'none' }

const sectionLabel = {
  fontSize: '13px',
  color: 'var(--muted)',
  fontFamily: "'JetBrains Mono',monospace",
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  margin: '8px 0 12px 4px',
}

export default function Facility() {
  return (
    <>
      <div className="page-header">
        <div className="ph-left">
          <div className="ph-tag">Facility · IT Building · 정보통신관 <span className="axis-mini">BTL · 국립대 최대</span></div>
          <h1 className="ph-title">IT관 — <em>본부 거점</em></h1>
          <div className="ph-desc">연면적 13,161㎡ · 지하 1층 / 지상 10층 · 2025.12.16 준공 · 100% 친환경 시설</div>
        </div>
        <div className="ph-right">
          <a href="#location" className="ph-btn ph-btn-outline"><i className="fas fa-map-marker-alt"></i> 오시는 길</a>
          <a href="#" className="ph-btn ph-btn-primary"><i className="fas fa-calendar"></i> 견학 신청</a>
        </div>
      </div>

      <div className="it-hero">
        <img src="/assets/img/it-building.jpg" className="it-hero-img" alt="IT building" onError={hide} />
        <div className="it-hero-inner">
          <div className="tag"><i className="fas fa-building"></i> 국립대학 BTL 최대 규모</div>
          <h1>장영실 AI 융합연구원<br /><em>새로운 본부, IT관</em></h1>
          <p>2025년 12월 16일 준공된 부산대학교 IT관은 우리 연구원의 본부이자 동남권 AI 거점 사업의 물리적 거점입니다. 2021년 고시 기준 국립대학 BTL(Build-Transfer-Lease) 사업 최대 규모로, 친환경 시설을 100% 적용한 차세대 연구·교육 공간입니다.</p>
          <div className="quick-stats">
            <div className="qs"><div className="n">BTL<span></span></div><div className="l">국립대학 BTL 사업</div></div>
            <div className="qs"><div className="n">13,161<span>㎡</span></div><div className="l">연면적</div></div>
            <div className="qs"><div className="n">10<span>층</span></div><div className="l">지상 / 지하 1</div></div>
            <div className="qs"><div className="n">2025<span>.12.16</span></div><div className="l">준공</div></div>
          </div>
        </div>
      </div>

      <div className="spec-card">
        <div className="head">
          <div className="title"><i className="fas fa-clipboard-list" style={{ color: 'var(--blue)' }}></i> 시설 개요</div>
          <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono',monospace" }}>FACT SHEET</span>
        </div>
        <div className="spec-grid">
          <div className="spec-cell">
            <div className="spec-lbl">연면적</div>
            <div className="spec-val">13,161.08<small>㎡</small></div>
            <div className="spec-d">약 3,981평</div>
          </div>
          <div className="spec-cell">
            <div className="spec-lbl">규모</div>
            <div className="spec-val">B1F · 10F</div>
            <div className="spec-d">지하 1층 / 지상 10층</div>
          </div>
          <div className="spec-cell">
            <div className="spec-lbl">사업 방식</div>
            <div className="spec-val">BTL</div>
            <div className="spec-d">Build-Transfer-Lease 임대형 민자</div>
          </div>
          <div className="spec-cell">
            <div className="spec-lbl">착공</div>
            <div className="spec-val">2022<small>.06</small></div>
            <div className="spec-d">설계·시공 통합 발주</div>
          </div>
          <div className="spec-cell">
            <div className="spec-lbl">준공</div>
            <div className="spec-val">2025<small>.12.16</small></div>
            <div className="spec-d">개원식 12.30 · 협약 3건 동시</div>
          </div>
          <div className="spec-cell">
            <div className="spec-lbl">친환경 인증</div>
            <div className="spec-val">G-SEED</div>
            <div className="spec-d">녹색건축인증 우수 등급</div>
          </div>
          <div className="spec-cell">
            <div className="spec-lbl">에너지 등급</div>
            <div className="spec-val">1+ <small>등급</small></div>
            <div className="spec-d">건축물 에너지효율 인증</div>
          </div>
        </div>
      </div>

      <h3 style={sectionLabel}>친환경 시설 — 100% 적용</h3>
      <div className="eco-grid">
        <div className="eco-card">
          <div className="eco-icon"><i className="fas fa-lightbulb"></i></div>
          <div className="eco-name">100% LED 조명</div>
          <div className="eco-d">전관 LED 적용. 인체·조도 센서 연동 자동 조절로 에너지 절감.</div>
        </div>
        <div className="eco-card">
          <div className="eco-icon"><i className="fas fa-sun"></i></div>
          <div className="eco-name">태양광 발전</div>
          <div className="eco-d">옥상 PV 패널 설치. 건물 전력 일부를 자체 충당 (BEMS 연동).</div>
        </div>
        <div className="eco-card">
          <div className="eco-icon"><i className="fas fa-fire"></i></div>
          <div className="eco-name">지열 냉난방</div>
          <div className="eco-d">지중 열교환기 활용. 외기 의존도를 줄이는 친환경 냉난방.</div>
        </div>
        <div className="eco-card">
          <div className="eco-icon"><i className="fas fa-chart-line"></i></div>
          <div className="eco-name">BEMS 운영</div>
          <div className="eco-d">Building Energy Management System. 실시간 에너지 사용량 모니터링·최적화.</div>
        </div>
      </div>

      <div className="floor-card">
        <div className="h"><i className="fas fa-layer-group" style={{ color: 'var(--violet)' }}></i> 층별 입주 안내 — 정보의생명공학대학 · 공과대학 전기전자 · 연구원 본부</div>
        <div className="floor-list">
          <div className="floor-row">
            <div className="fl-no">10F</div>
            <div className="fl-name">연구원장실 · 회의실 · 라운지<small>Dean Office · Boardroom · Sky Lounge (전망)</small></div>
            <div className="fl-tag amber">본부</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">9F</div>
            <div className="fl-name">교수 연구실 (정보컴퓨터공학부 IV)<small>Faculty Offices — IT Computing 교원</small></div>
            <div className="fl-tag">교수실</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">8F</div>
            <div className="fl-name">교수 연구실 (정보컴퓨터공학부 III)<small>Faculty Offices — IT Computing 교원</small></div>
            <div className="fl-tag">교수실</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">7F</div>
            <div className="fl-name">대학원 연구실 · AI 융합 PBL실<small>Graduate Labs · Project-Based Learning Studio</small></div>
            <div className="fl-tag violet">대학원</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">6F</div>
            <div className="fl-name">실험실 — 양자 AI · 의료 AI<small>Quantum AI Lab · Medical AI Lab (방진·항온항습 시설)</small></div>
            <div className="fl-tag violet">실험실</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">5F</div>
            <div className="fl-name">실험실 — 소재·제조 AI · 모빌리티<small>Materials &amp; Mobility AI Labs · 정밀 측정 장비실</small></div>
            <div className="fl-tag violet">실험실</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">4F</div>
            <div className="fl-name">전기공학전공 연구실<small>공과대학 전기전자공학부 — 에너지 AI · KERI 협력</small></div>
            <div className="fl-tag green">전기공학</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">3F</div>
            <div className="fl-name">대형 강의실 (4실) · PBL실 (8실)<small>Lecture Halls · Problem-Based Learning Studios</small></div>
            <div className="fl-tag">강의</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">2F</div>
            <div className="fl-name">중형 강의실 · 학생 자율 학습실<small>Seminar Rooms · Open Study Lounge · 24/7</small></div>
            <div className="fl-tag">강의</div>
          </div>
          <div className="floor-row">
            <div className="fl-no">1F</div>
            <div className="fl-name">연구원 행정실 · 산학협력실 · 카페테리아 · 세미나실 101<small>Administration · Industry Office · Cafe · Main Seminar 101</small></div>
            <div className="fl-tag amber">로비</div>
          </div>
          <div className="floor-row">
            <div className="fl-no b">B1F</div>
            <div className="fl-name">GPU 서버실 · 기계실 · 주차장<small>Data Center (GPU Cluster) · Mechanical · Parking</small></div>
            <div className="fl-tag violet">GPU</div>
          </div>
        </div>
      </div>

      <h3 style={sectionLabel}>시설 갤러리</h3>
      <div className="gallery">
        <div className="gal-card lg">
          <img src="/assets/img/it-building.jpg" alt="IT 외관" onError={hide} />
          <div className="gal-cap">IT관 외관 — 정문 진입로</div>
        </div>
        <div className="gal-card">
          <img src="/assets/img/it-building-2.jpg" alt="IT 측면" onError={hide} />
          <div className="gal-cap">측면 · 태양광 패널</div>
        </div>
        <div className="gal-card">
          <img src="/assets/img/quantum.jpg" alt="실험실" onError={hide} />
          <div className="gal-cap">6F 양자 AI 실험실</div>
        </div>
        <div className="gal-card">
          <img src="/assets/img/bootcamp.jpg" alt="PBL" onError={hide} />
          <div className="gal-cap">7F PBL 스튜디오</div>
        </div>
        <div className="gal-card">
          <img src="/assets/img/college-ai.jpg" alt="강의실" onError={hide} />
          <div className="gal-cap">3F 대형 강의실</div>
        </div>
      </div>

      <div className="gpu-card">
        <div className="tag"><i className="fas fa-microchip"></i> PNU-AXIS · AI Computing Infrastructure</div>
        <h3>GPU 컴퓨팅 인프라 — <em>PNU-AXIS</em></h3>
        <p>장영실AI융합연구원은 PNU-AXIS AI 컴퓨팅 인프라를 통해 부·울·경 지역 대학·산업체·스타트업의 AI 컴퓨팅 지역 허브 역할을 담당합니다. RISE 사업 및 AI 컴퓨팅 바우처 사업과 연계하여 운영됩니다.</p>
        <div className="gpu-stats">
          <div className="gpu-stat">
            <div className="l">현재 GPU 보유</div>
            <div className="n">303<span>+장</span></div>
            <div className="d">PNU-IDC 입주 163장 + 교내 학과 245장</div>
          </div>
          <div className="gpu-stat">
            <div className="l">향후 확보 목표</div>
            <div className="n">800<span>장</span></div>
            <div className="d">H200 400장 · L40S 200장 · A10/A30 200장</div>
          </div>
          <div className="gpu-stat">
            <div className="l">데이터센터 네트워크</div>
            <div className="n">400Gbps<span>+</span></div>
            <div className="d">InfiniBand · 전력 2MW 이중화</div>
          </div>
        </div>
      </div>

      <div className="loc-card" id="location">
        <div className="loc-grid">
          <div className="loc-info">
            <h3><i className="fas fa-map-marker-alt" style={{ color: 'var(--juhong)' }}></i> 오시는 길</h3>
            <div className="addr">
              <div className="l">ADDRESS · 도로명</div>
              <div className="v">부산광역시 금정구 부산대학로 63번길 2 · IT관</div>
            </div>
            <div className="r">
              <i className="fas fa-subway"></i>
              <div>
                <div className="t">지하철 1호선 부산대역</div>
                <div className="d">3번 출구 · 도보 15분 또는 셔틀 5분</div>
              </div>
            </div>
            <div className="r">
              <i className="fas fa-bus"></i>
              <div>
                <div className="t">시내버스</div>
                <div className="d">29 · 49 · 51 · 80 · 1002 (부산대학교 정문 정류장)</div>
              </div>
            </div>
            <div className="r">
              <i className="fas fa-car"></i>
              <div>
                <div className="t">자가용</div>
                <div className="d">남해고속도로 → 동래IC → 부산대학교 정문 · 학내 주차 (B1F)</div>
              </div>
            </div>
            <div className="r">
              <i className="fas fa-plane"></i>
              <div>
                <div className="t">김해국제공항</div>
                <div className="d">공항 → 부산역 → 1호선 부산대역 (약 50분)</div>
              </div>
            </div>
            <div className="r">
              <i className="fas fa-phone"></i>
              <div>
                <div className="t">대표 연락처</div>
                <div className="d">051-510-0000 · airc@pusan.ac.kr</div>
              </div>
            </div>
          </div>
          <div className="loc-map">
            <div className="loc-map-content">
              <div className="loc-map-icon"><i className="fas fa-map-marked-alt"></i></div>
              <div className="loc-map-title">부산대학교 IT관</div>
              <div className="loc-map-sub">금정구 부산대학로 63번길 2</div>
              <div style={{ marginTop: '14px', fontSize: '11px', color: 'var(--muted)', fontFamily: "'JetBrains Mono',monospace" }}>35.2335°N · 129.0826°E</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
