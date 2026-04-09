// trades/dobae.js — 직종별 품셈 그룹 구조
TRADE_DOBAE = {
  id: 'dobae', name: '도배', checked: true,
  groupDefs: [
    { id: 'skilled', name: '도배공 작업', desc: '도배공 품셈 · 표준품셈 5-3-7' },
    { id: 'labor', name: '보통인부 작업', desc: '보통인부 품셈 · 별도 계상' }
  ],
  items: [
    // ── 도배공 작업 (기술 필요 — 도배공 단가 적용) ──
    { name: '기존 벽지 철거 (벽면)', spec: '도배공 0.5품', detail: '노무 @180,000 (시중노임단가)', price: 180000, checked: true, qty: 1, unit: '식', unitPrice: 180000, group: 'skilled' },
    { name: '기존 벽지 철거 (천장)', spec: '도배공 0.5품', detail: '노무 @150,000 | 사다리 사용', price: 150000, checked: true, qty: 1, unit: '식', unitPrice: 150000, group: 'skilled' },
    { name: '초배지 작업', spec: '도배공 0.5품', detail: '자재 @20,000 | 노무 @100,000', price: 120000, checked: true, qty: 1, unit: '식', unitPrice: 120000, group: 'skilled' },
    { name: '퍼티 작업 (크랙 보수)', spec: '도배공 0.3품', detail: '자재 @15,000 | 노무 @85,000', price: 100000, checked: true, qty: 1, unit: '식', unitPrice: 100000, group: 'skilled' },
    { name: '벽면 도배 (합지)', spec: '도배공 1.0품', detail: '합지 24평 × @6,000 | 노무 @235,000', price: 380000, checked: false, qty: 24, unit: '평', unitPrice: 6000, group: 'skilled' },
    { name: '벽면 도배 (실크)', spec: '도배공 1.5품', detail: '실크 24평 × @8,000 (물가정보) | 노무 @285,000 (시중노임단가)', price: 480000, checked: true, qty: 24, unit: '평', unitPrice: 8000, group: 'skilled' },
    { name: '천장 도배', spec: '도배공 1.0품', detail: '벽지 24평 × @6,000 | 노무 @176,000', price: 320000, checked: true, qty: 24, unit: '평', unitPrice: 6000, group: 'skilled' },
    { name: '아트월/포인트 벽지', spec: '도배공 0.5품', detail: '수입벽지 @80,000 | 노무 @100,000', price: 180000, checked: false, qty: 1, unit: '식', unitPrice: 180000, group: 'skilled' },
    { name: '몰딩 주변 코킹', spec: '도배공 0.2품', detail: '실리콘 @10,000 | 노무 @40,000', price: 50000, checked: true, qty: 1, unit: '식', unitPrice: 50000, group: 'skilled' },
    // ── 보통인부 작업 (단순 노무 — 보통인부 단가 적용) ──
    { name: '가구 이동 및 보양', spec: '보통인부 1.0품', detail: '노무 @150,000 (시중노임단가)', price: 150000, checked: true, qty: 1, unit: '식', unitPrice: 150000, group: 'labor' },
    { name: '바닥 보양', spec: '보통인부 0.5품', detail: '자재 비닐+합판 @30,000 | 노무 @50,000', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000, group: 'labor' },
    { name: '곰팡이 처리 (약품)', spec: '보통인부 0.3품', detail: '약품 @100,000 | 노무 @50,000', price: 150000, checked: true, qty: 1, unit: '식', unitPrice: 150000, group: 'labor' },
    { name: '곰팡이 처리 (결로방지 단열)', spec: '단열공 0.5품', detail: '단열재 @130,000 | 노무 @120,000', price: 250000, checked: false, qty: 1, unit: '식', unitPrice: 250000, group: 'labor' },
    { name: '폐기물 처리 (도배)', spec: '보통인부 0.5품', detail: '스티커 @30,000 | 노무 @50,000', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000, group: 'labor' },
    { name: '폐기물 운반비', spec: '1톤 트럭 1회', detail: '운반 @60,000 (상·하차 포함)', price: 60000, checked: true, qty: 1, unit: '회', unitPrice: 60000, group: 'labor' },
    { name: '콘센트/스위치 복원', spec: '보통인부 0.1품', detail: '노무 @30,000', price: 30000, checked: true, qty: 1, unit: '식', unitPrice: 30000, group: 'labor' },
  ]
};
