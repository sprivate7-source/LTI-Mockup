// trades/wood.js
TRADE_WOOD = {
  id: 'wood', name: '목공', checked: true, items: [
    // 1. 보양
    { name: '작업 구역 보양', spec: '보통인부 0.5품 | 분진 차단 비닐+양생', detail: '자재 비닐+양생테이프 @5,000 | 노무 @75,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
    // 2. 철거
    { name: '기존 석고보드 철거', spec: '목공 0.5품 | 오염·변색 부위', detail: '노무 @150,000 (시중노임단가)', price: 150000, checked: true, qty: 1, unit: '식', unitPrice: 150000 },
    { name: '기존 천장 몰딩 철거', spec: '목공 0.2품 | 크라운 몰딩 제거', detail: '노무 @50,000 (시중노임단가)', price: 50000, checked: true, qty: 1, unit: '식', unitPrice: 50000 },
    { name: '기존 걸레받이 철거', spec: '목공 0.2품 | 걸레받이 제거', detail: '노무 @40,000 (시중노임단가)', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
    { name: '기존 문틀·문짝 철거', spec: '목공 0.3품 | 손상 부위', detail: '노무 @100,000 (시중노임단가)', price: 100000, checked: false, qty: 1, unit: '식', unitPrice: 100000 },
    // 3. 폐기물
    { name: '폐기물 처리 (목공)', spec: '보통인부 0.5품 | 석고보드·몰딩 반출', detail: '스티커 @25,000 | 노무 @35,000', price: 60000, checked: true, qty: 1, unit: '식', unitPrice: 60000 },
    { name: '폐기물 운반비', spec: '1톤 트럭 1회 | 상·하차 포함', detail: '운반 @60,000 (상·하차 포함)', price: 60000, checked: true, qty: 1, unit: '회', unitPrice: 60000 },
    // 4. 시공
    { name: '석고보드 시공', spec: '목공 1.0품 | 자재+시공 | 면적 기준', detail: '자재 석고보드+경량철골 @100,000 (물가정보) | 노무 @180,000 (시중노임단가)', price: 280000, checked: true, qty: 1, unit: '식', unitPrice: 280000 },
    { name: '석고보드 이중 시공', spec: '목공 0.5품 | 방음·단열 목적', detail: '자재 석고보드 2겹 @60,000 (물가정보) | 노무 @120,000 (시중노임단가)', price: 180000, checked: false, qty: 1, unit: '식', unitPrice: 180000 },
    { name: '합판 대체 시공', spec: '목공 0.5품 | 습기 심한 부위', detail: '자재 합판 @80,000 (물가정보) | 노무 @120,000 (시중노임단가)', price: 200000, checked: false, qty: 1, unit: '식', unitPrice: 200000 },
    { name: '퍼티·연마 작업', spec: '목공 0.3품 | 이음새·나사못 처리', detail: '자재 퍼티 @10,000 | 노무 @70,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
    { name: '천장 몰딩 시공', spec: '목공 0.3품 | 크라운 몰딩 자재+시공', detail: '자재 크라운몰딩 @25,000 (물가정보) | 노무 @70,000 (시중노임단가)', price: 95000, checked: true, qty: 1, unit: '식', unitPrice: 95000 },
    { name: '걸레받이 시공', spec: '목공 0.3품 | 자재+시공', detail: '자재 걸레받이 @5,000 (물가정보) | 노무 @70,000 (시중노임단가)', price: 75000, checked: true, qty: 1, unit: '식', unitPrice: 75000 },
    { name: '문틀 시공', spec: '목공 0.5품 | 자재+시공', detail: '자재 문틀 @30,000 (물가정보) | 노무 @120,000 (시중노임단가)', price: 150000, checked: false, qty: 1, unit: '식', unitPrice: 150000 },
    { name: '문짝 교체', spec: '목공 0.5품 | 자재+시공', detail: '자재 문짝 @60,000 (물가정보) | 노무 @120,000 (시중노임단가)', price: 180000, checked: false, qty: 1, unit: '식', unitPrice: 180000 },
    { name: '문선 시공', spec: '목공 0.2품 | 자재+시공', detail: '자재 문선 @10,000 | 노무 @50,000 (시중노임단가)', price: 60000, checked: false, qty: 1, unit: '식', unitPrice: 60000 },
    // 5. 마감
    { name: '코킹 작업', spec: '목공 0.1품 | 몰딩·걸레받이 실리콘', detail: '자재 실리콘 @10,000 | 노무 @30,000', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
  ]
};
