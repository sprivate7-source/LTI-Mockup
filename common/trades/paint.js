// trades/paint.js
TRADE_PAINT = {
  id: 'paint', name: '페인트', checked: false, items: [
    // 1. 보양
    { name: '가구·바닥 보양', spec: '보통인부 0.5품 | 비닐+마스킹테이프', detail: '자재 비닐+테이프 @25,000 | 노무 @75,000 (시중노임단가)', price: 100000, checked: true, qty: 1, unit: '식', unitPrice: 100000 },
    { name: '창호·몰딩 마스킹', spec: '보통인부 0.3품 | 양생테이프', detail: '자재 양생테이프 @15,000 | 노무 @45,000 (시중노임단가)', price: 60000, checked: true, qty: 1, unit: '식', unitPrice: 60000 },
    // 2. 철거·하지
    { name: '기존 도막 제거', spec: '도장공 0.5품 | 샌딩+스크래핑', detail: '노무 @120,000 (시중노임단가)', price: 120000, checked: true, qty: 1, unit: '식', unitPrice: 120000 },
    { name: '퍼티·패치 작업', spec: '도장공 0.3품 | 크랙·못자국 충진', detail: '자재 퍼티 @15,000 | 노무 @65,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
    { name: '곰팡이 방지 프라이머', spec: '도장공 0.2품 | 약품 도포 1회', detail: '자재 프라이머 @70,000 (물가정보) | 노무 @50,000 (시중노임단가)', price: 120000, checked: true, qty: 1, unit: '회', unitPrice: 120000 },
    // 3. 시공
    { name: '천장 페인트 (수성 2회)', spec: '도장공 1.0품 | 자재+시공', detail: '자재 수성페인트 2통 × @35,000 (물가정보) | 노무 @180,000 (시중노임단가)', price: 250000, checked: true, qty: 2, unit: '통', unitPrice: 35000 },
    { name: '벽면 페인트 (수성 2회)', spec: '도장공 1.5품 | 자재+시공', detail: '자재 수성페인트 3통 × @35,000 (물가정보) | 노무 @245,000 (시중노임단가)', price: 350000, checked: true, qty: 3, unit: '통', unitPrice: 35000 },
    { name: '천장 페인트 (유성/방수)', spec: '도장공 0.5품 | 화장실·욕실용', detail: '자재 방수페인트 @80,000 (물가정보) | 노무 @120,000 (시중노임단가)', price: 200000, checked: false, qty: 1, unit: '식', unitPrice: 200000 },
    { name: '벽면 페인트 (유성/방수)', spec: '도장공 1.0품 | 화장실·욕실용', detail: '자재 방수페인트 @100,000 (물가정보) | 노무 @180,000 (시중노임단가)', price: 280000, checked: false, qty: 1, unit: '식', unitPrice: 280000 },
    { name: '걸레받이 도장', spec: '도장공 0.3품 | 유성 에나멜', detail: '자재 에나멜 @15,000 | 노무 @45,000 (시중노임단가)', price: 60000, checked: false, qty: 1, unit: '식', unitPrice: 60000 },
    { name: '문틀·문짝 도장', spec: '도장공 0.5품 | 유성 에나멜 2회', detail: '자재 에나멜+프라이머 @30,000 | 노무 @120,000 (시중노임단가)', price: 150000, checked: false, qty: 1, unit: '식', unitPrice: 150000 },
    // 4. 마감·폐기물
    { name: '보양 철거 및 정리', spec: '보통인부 0.3품 | 마스킹·비닐 제거', detail: '노무 @40,000 (시중노임단가)', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
    { name: '폐기물 처리 (페인트)', spec: '보통인부 0.2품 | 폐도료·롤러', detail: '스티커 @20,000 | 노무 @30,000', price: 50000, checked: true, qty: 1, unit: '식', unitPrice: 50000 },
  ]
};
