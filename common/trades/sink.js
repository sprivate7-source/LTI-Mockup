// trades/sink.js
TRADE_SINK = {
  id: 'sink', name: '싱크대', checked: false, items: [
    // 1. 보양
    { name: '주방 바닥 보양', spec: '보통인부 0.3품 | 보호비닐+합판', detail: '자재 비닐+합판 @15,000 | 노무 @45,000 (시중노임단가)', price: 60000, checked: true, qty: 1, unit: '식', unitPrice: 60000 },
    // 2. 철거
    { name: '기존 싱크대 철거', spec: '설비공 0.5품+보통인부 0.5품', detail: '노무 설비공 @125,000 + 보통인부 @75,000 (시중노임단가)', price: 200000, checked: true, qty: 1, unit: '식', unitPrice: 200000 },
    { name: '기존 배관 철거', spec: '설비공 0.3품 | 급수·배수 분리', detail: '노무 @80,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
    { name: '기존 타일 철거 (벽면)', spec: '타일공 0.5품 | 싱크대 뒤', detail: '장비대 @30,000 | 노무 @120,000 (시중노임단가)', price: 150000, checked: false, qty: 1, unit: '식', unitPrice: 150000 },
    // 3. 폐기물
    { name: '폐기물 처리 (싱크)', spec: '보통인부 0.5품 | 기존 싱크대 반출', detail: '스티커 @45,000 | 노무 @75,000', price: 120000, checked: true, qty: 1, unit: '식', unitPrice: 120000 },
    { name: '폐기물 운반비', spec: '1톤 트럭 1회 | 상·하차 포함', detail: '운반 @60,000 (상·하차 포함)', price: 60000, checked: true, qty: 1, unit: '회', unitPrice: 60000 },
    // 4. 시공
    { name: '싱크대 본체 (하부장)', spec: '목공 0.5품 | 자재+설치', detail: '자재 하부장 @320,000 (물가정보) | 노무 @130,000 (시중노임단가)', price: 450000, checked: true, qty: 1, unit: '대', unitPrice: 450000 },
    { name: '싱크대 상부장', spec: '목공 0.3품 | 자재+설치', detail: '자재 상부장 @270,000 (물가정보) | 노무 @80,000 (시중노임단가)', price: 350000, checked: false, qty: 1, unit: '대', unitPrice: 350000 },
    { name: '상판 (인조대리석)', spec: '석재공 0.3품 | 자재+시공', detail: '자재 인조대리석 @260,000 (물가정보) | 노무 @90,000 (시중노임단가)', price: 350000, checked: true, qty: 1, unit: '식', unitPrice: 350000 },
    { name: '상판 (천연석/석영)', spec: '석재공 0.5품 | 자재+시공', detail: '자재 석영석 @400,000 (물가정보) | 노무 @150,000 (시중노임단가)', price: 550000, checked: false, qty: 1, unit: '식', unitPrice: 550000 },
    { name: '수전 교체', spec: '설비공 0.2품 | 자재+설치', detail: '자재 수전 @70,000 (물가정보) | 노무 @50,000 (시중노임단가)', price: 120000, checked: true, qty: 1, unit: '대', unitPrice: 120000 },
    { name: '급수 배관 연결', spec: '설비공 0.3품 | 냉·온수', detail: '자재 배관부속 @15,000 | 노무 @65,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
    { name: '배수 배관 연결', spec: '설비공 0.2품 | 배수트랩+연결', detail: '자재 배수트랩 @20,000 | 노무 @50,000 (시중노임단가)', price: 70000, checked: true, qty: 1, unit: '식', unitPrice: 70000 },
    { name: '타일 시공 (벽면)', spec: '타일공 0.5품 | 재시공', detail: '자재 타일+접착제 @80,000 (물가정보) | 노무 @120,000 (시중노임단가)', price: 200000, checked: false, qty: 1, unit: '식', unitPrice: 200000 },
    // 5. 마감
    { name: '코킹 작업', spec: '설비공 0.1품 | 상판·벽면 실리콘', detail: '자재 실리콘 @10,000 | 노무 @30,000', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
    { name: '기능 점검 (누수 테스트)', spec: '설비공 0.1품 | 급수·배수 확인', detail: '노무 @30,000 (시중노임단가)', price: 30000, checked: true, qty: 1, unit: '회', unitPrice: 30000 },
  ]
};
