/* ============================================
   LTI 목업 공통 탭 바 JS
   각 02_피해복구/ 페이지에서 공유
   ============================================ */

/**
 * 탭 바 + 서브 탭 바 렌더링
 * @param {string} activeTab - 현재 활성 탭 ID
 * @param {string|null} activeSubTab - 현재 활성 서브 탭 이름
 */
function renderTabBar(activeTab, activeSubTab) {
  const TABS = [
    { id: 'scene',    label: '피해현장',  file: '피해현장.html' },
    { id: 'estimate', label: '견적',      file: '견적_총견적.html' },
    { id: 'approval', label: '보험처리',  file: '보험처리.html' },
  ];

  // 서브 탭 — 문자열 배열: 같은 페이지 내 전환 (보험처리)
  //          객체 배열: 별도 파일로 이동 (견적)
  const SUB_TABS = {
    estimate: [
      { label: '총견적', file: '견적_총견적.html' },
      { label: '도배', file: '견적_도배.html' },
      { label: '목공', file: '견적_목공.html' },
      { label: '싱크대', file: '견적_싱크대.html' },
      { label: '청소', file: '견적_청소.html' },
      { label: '바닥', file: '견적_바닥.html' },
      { label: '페인트', file: '견적_페인트.html' },
      { label: '화장실', file: '견적_화장실.html' },
      { label: '이사·숙박', file: '견적_이사숙박.html' },
    ],
    approval: ['담당자정보', '견적서발송', '피해사진', '완료확인서', '보험청구'],
  };

  // 메인 탭 바
  const tabBar = document.getElementById('tab-bar');
  tabBar.innerHTML = `<div class="tab-list">${
    TABS.map(t => {
      const isActive = t.id === activeTab;
      return `<a class="tab-item ${isActive ? 'active' : ''}" href="${t.file}">${t.label}</a>`;
    }).join('')
  }</div>`;

  // 서브 탭 바
  const subBar = document.getElementById('sub-tab-bar');
  const subs = SUB_TABS[activeTab];

  if (!subs) {
    subBar.style.display = 'none';
    subBar.innerHTML = '';
    return;
  }

  subBar.style.display = 'flex';

  // 객체 배열 = 파일 링크 방식
  if (subs.length > 0 && typeof subs[0] === 'object') {
    const currentSub = activeSubTab || subs[0].label;
    subBar.innerHTML = subs.map(s => {
      const isActive = s.label === currentSub;
      return `<a class="sub-tab-item ${isActive ? 'active' : ''}" href="${s.file}" style="text-decoration:none;">${s.label}</a>`;
    }).join('');
    return;
  }

  // 문자열 배열 = 같은 페이지 내 전환
  const currentSub = activeSubTab || subs[0];
  subBar.innerHTML = subs.map(s => {
    const isActive = s === currentSub;
    return `<button class="sub-tab-item ${isActive ? 'active' : ''}" onclick="onSubTabClick('${s}')">${s}</button>`;
  }).join('');
}
