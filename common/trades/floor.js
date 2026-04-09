// trades/floor.js
TRADE_FLOOR = {
  id: 'floor', name: '바닥', checked: true, items: [
    // 1. 보양·준비
    { name: '가구 이동', spec: '보통인부 1.0품 | 가구·가전 임시 이동', detail: '노무 @100,000 (시중노임단가)', price: 100000, checked: true, qty: 1, unit: '식', unitPrice: 100000 },
    { name: '문틀·벽면 하단 보양', spec: '보통인부 0.2품 | 양생테이프', detail: '자재 양생테이프 @10,000 | 노무 @30,000 (시중노임단가)', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
    // 2. 철거
    { name: '기존 강마루 철거', spec: '철거공 1.0품 | 장비+인건비', detail: '장비대 @50,000 | 노무 @200,000 (시중노임단가)', price: 250000, checked: true, qty: 1, unit: '식', unitPrice: 250000 },
    { name: '기존 온돌마루 철거', spec: '철거공 1.5품 | 접착식 마루 제거', detail: '장비대 @50,000 | 노무 @250,000 (시중노임단가)', price: 300000, checked: false, qty: 1, unit: '식', unitPrice: 300000 },
    { name: '기존 장판 철거', spec: '철거공 0.5품 | 장판+접착제 제거', detail: '노무 @150,000 (시중노임단가)', price: 150000, checked: false, qty: 1, unit: '식', unitPrice: 150000 },
    { name: '기존 타일 철거', spec: '철거공 2.0품 | 바닥 타일 제거', detail: '장비대 @50,000 | 노무 @300,000 (시중노임단가)', price: 350000, checked: false, qty: 1, unit: '식', unitPrice: 350000 },
    // 3. 폐기물
    { name: '폐기물 처리 (바닥)', spec: '보통인부 0.5품 | 기존 마루·장판 반출', detail: '스티커 @25,000 | 노무 @75,000', price: 100000, checked: true, qty: 1, unit: '식', unitPrice: 100000 },
    { name: '폐기물 운반비', spec: '1톤 트럭 1회 | 상·하차 포함', detail: '운반 @60,000 (상·하차 포함)', price: 60000, checked: true, qty: 1, unit: '회', unitPrice: 60000 },
    // 4. 하지 처리
    { name: '바닥 샌딩', spec: '철거공 1.0품 | 본드·모르타르 제거 | 장비대', detail: '장비대 @50,000 | 노무 @130,000 (시중노임단가)', price: 180000, checked: true, qty: 1, unit: '식', unitPrice: 180000 },
    { name: '바닥 레벨링 (셀프레벨링)', spec: '미장공 0.5품 | 바닥 수평 맞춤', detail: '자재 셀프레벨링 @80,000 (물가정보) | 노무 @120,000 (시중노임단가)', price: 200000, checked: false, qty: 1, unit: '식', unitPrice: 200000 },
    { name: '방수 처리', spec: '방수공 1.0품 | 화장실·다용도실', detail: '자재 방수재 @80,000 (물가정보) | 노무 @170,000 (시중노임단가)', price: 250000, checked: false, qty: 1, unit: '식', unitPrice: 250000 },
    { name: '바닥 건조', spec: '습기 측정+건조 대기 1일', detail: '장비대 습기측정기 @30,000 | 건조 대기 @50,000', price: 80000, checked: true, qty: 1, unit: '일', unitPrice: 80000 },
    // 5. 시공
    { name: '강마루 시공', spec: '마루공 1.5품 | 자재+시공 | 평당', detail: '자재 강마루 24평 × @10,000 (물가정보) | 노무 @280,000 (시중노임단가)', price: 520000, checked: true, qty: 24, unit: '평', unitPrice: 10000 },
    { name: '온돌마루 시공', spec: '마루공 2.0품 | 자재+시공 | 평당', detail: '자재 온돌마루 24평 × @12,000 (물가정보) | 노무 @312,000 (시중노임단가)', price: 600000, checked: false, qty: 24, unit: '평', unitPrice: 12000 },
    { name: '장판 시공', spec: '장판공 1.0품 | 자재+시공 | 평당', detail: '자재 장판 24평 × @5,000 (물가정보) | 노무 @160,000 (시중노임단가)', price: 280000, checked: false, qty: 24, unit: '평', unitPrice: 5000 },
    { name: '타일 시공', spec: '타일공 2.0품 | 자재+시공 | 평당', detail: '자재 타일+접착제 @160,000 (물가정보) | 노무 @340,000 (시중노임단가)', price: 500000, checked: false, qty: 1, unit: '식', unitPrice: 500000 },
    { name: '걸레받이 시공', spec: '마루공 0.3품 | 자재+시공', detail: '자재 걸레받이 @20,000 (물가정보) | 노무 @60,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
    { name: '문턱 시공', spec: '마루공 0.1품 | 자재+시공', detail: '자재 문턱 @15,000 | 노무 @20,000 (시중노임단가)', price: 35000, checked: true, qty: 1, unit: '식', unitPrice: 35000 },
    { name: '문풍지 교체', spec: '보통인부 0.1품 | 자재+시공', detail: '자재 문풍지 @5,000 | 노무 @10,000', price: 15000, checked: true, qty: 1, unit: '식', unitPrice: 15000 },
    // 6. 마감
    { name: '이음새 실리콘 마감', spec: '마루공 0.1품 | 벽·바닥 경계 코킹', detail: '자재 실리콘 @10,000 | 노무 @30,000', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
    { name: '가구 원위치', spec: '보통인부 1.0품 | 이동 가구 재배치', detail: '노무 @80,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
  ]
};
