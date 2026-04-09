/* ============================================
   LTI 목업 공통 컴포넌트 (JS)
   - 순수 JavaScript, 외부 라이브러리 없음
   - 각 목업 HTML에서 <script src="common/components.js"> 로 로드
   ============================================ */

const LTI = {
  /**
   * 상단 헤더 생성
   * @param {object} opts
   * @param {string} opts.title - 페이지 제목
   * @param {string} [opts.backUrl] - 뒤로가기 URL (없으면 버튼 숨김)
   * @param {string} [opts.actionHtml] - 우측 액션 버튼 HTML
   */
  renderHeader(opts) {
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = `
      ${opts.backUrl
        ? `<a href="${opts.backUrl}" class="header-back" aria-label="뒤로가기">&#8249;</a>`
        : '<div class="header-action"></div>'}
      <div class="header-title">${opts.title}</div>
      ${opts.actionHtml
        ? `<div class="header-action">${opts.actionHtml}</div>`
        : '<div class="header-action"></div>'}
    `;
    document.body.prepend(header);
  },

  /**
   * [이 화면의 기능 보기] 패널 생성
   * 각 목업 상단에 표시. 비개발자 언어 기능 명세 + 연동 체크박스.
   *
   * @param {object} opts
   * @param {string} opts.target - 삽입할 요소 selector (기본: '.page' 첫 자식 앞)
   * @param {Array<{text: string, checked?: boolean}>} opts.features - 기능 목록
   */
  renderFeaturePanel(opts) {
    const panel = document.createElement('div');
    panel.className = 'feature-panel';

    const featuresHtml = opts.features.map((f, i) => `
      <div class="feature-item">
        <input type="checkbox" id="feat-${i}" ${f.checked ? 'checked' : ''} disabled>
        <label for="feat-${i}">${f.text}</label>
      </div>
    `).join('');

    panel.innerHTML = `
      <button class="feature-toggle" onclick="LTI.toggleFeaturePanel(this)">
        <span>&#128203; 이 화면의 기능 보기</span>
        <span class="feature-toggle-icon">&#9660;</span>
      </button>
      <div class="feature-content">
        ${featuresHtml}
      </div>
    `;

    const target = document.querySelector(opts.target || '.page');
    if (target) {
      target.prepend(panel);
    }
  },

  /**
   * 기능 보기 패널 토글
   */
  toggleFeaturePanel(btn) {
    const panel = btn.closest('.feature-panel');
    panel.classList.toggle('open');
  },

  /**
   * 숫자를 한국식 금액 포맷으로 변환
   * @param {number} num
   * @returns {string} "1,234,567원"
   */
  formatMoney(num) {
    return num.toLocaleString('ko-KR') + '원';
  },

  /**
   * 현재 날짜/시간 포맷
   * @returns {string} "2026.04.09 14:30"
   */
  formatNow() {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}.${pad(d.getMonth()+1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  },

  /**
   * 간단한 토스트 알림
   * @param {string} message
   * @param {number} [duration=2000]
   */
  toast(message, duration = 2000) {
    const existing = document.querySelector('.lti-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'lti-toast';
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 14px 28px;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 500;
      z-index: 999;
      animation: lti-toast-in 0.2s ease;
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'lti-toast-out 0.2s ease forwards';
      setTimeout(() => toast.remove(), 200);
    }, duration);
  },

  /**
   * 확인 다이얼로그 (모달)
   * @param {object} opts
   * @param {string} opts.title
   * @param {string} opts.message
   * @param {string} [opts.confirmText='확인']
   * @param {string} [opts.cancelText='취소']
   * @param {function} [opts.onConfirm]
   * @param {function} [opts.onCancel]
   */
  confirm(opts) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.4);
      display: flex; align-items: center; justify-content: center;
      z-index: 200;
      padding: 24px;
    `;

    overlay.innerHTML = `
      <div style="
        background: white;
        border-radius: 16px;
        padding: 28px;
        max-width: 400px;
        width: 100%;
        box-shadow: 0 12px 40px rgba(0,0,0,0.15);
      ">
        <h3 style="margin-bottom: 12px; font-size: 1.25rem;">${opts.title}</h3>
        <p style="color: #505048; margin-bottom: 24px; font-size: 1.0625rem; line-height: 1.6;">${opts.message}</p>
        <div style="display: flex; gap: 12px;">
          <button class="btn btn-secondary" style="flex:1;" onclick="this.closest('div[style*=fixed]').remove(); ${opts.onCancel ? 'void 0' : ''}">
            ${opts.cancelText || '취소'}
          </button>
          <button class="btn btn-primary" style="flex:1;" id="lti-confirm-ok">
            ${opts.confirmText || '확인'}
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('#lti-confirm-ok').addEventListener('click', () => {
      overlay.remove();
      if (opts.onConfirm) opts.onConfirm();
    });
  }
};

/* --- 토스트 애니메이션 --- */
const toastStyle = document.createElement('style');
toastStyle.textContent = `
  @keyframes lti-toast-in {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to   { opacity: 1; transform: translateX(-50%) translateY(0); }
  }
  @keyframes lti-toast-out {
    from { opacity: 1; transform: translateX(-50%) translateY(0); }
    to   { opacity: 0; transform: translateX(-50%) translateY(20px); }
  }
`;
document.head.appendChild(toastStyle);
