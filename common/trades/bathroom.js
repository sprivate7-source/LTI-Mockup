// trades/bathroom.js
TRADE_BATHROOM = {
  id: 'bathroom', name: '화장실', checked: false, items: [
    // 1. 보양
    { name: '화장실 입구 보양', spec: '보통인부 0.2품 | 문틀·바닥 보호', detail: '자재 보양비닐 @10,000 | 노무 @30,000 (시중노임단가)', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
    { name: '배관 보양 (급수 차단)', spec: '설비공 0.1품 | 메인 밸브 차단', detail: '노무 @30,000 (시중노임단가)', price: 30000, checked: true, qty: 1, unit: '식', unitPrice: 30000 },
    // 2. 철거 — 설비
    { name: '양변기 철거', spec: '설비공 0.3품 | 양변기+부속 분리', detail: '노무 @80,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '대', unitPrice: 80000 },
    { name: '양변기 보관 (재설치용)', spec: '보통인부 0.1품 | 파손 방지 포장', detail: '자재 포장재 @15,000 | 노무 @15,000', price: 30000, checked: true, qty: 1, unit: '식', unitPrice: 30000 },
    { name: '세면대 철거', spec: '설비공 0.2품 | 세면대+수전 분리', detail: '노무 @60,000 (시중노임단가)', price: 60000, checked: true, qty: 1, unit: '대', unitPrice: 60000 },
    { name: '욕조/샤워부스 철거', spec: '설비공 0.5품+보통인부 0.5품', detail: '노무 설비공 @60,000 + 보통인부 @60,000 (시중노임단가)', price: 120000, checked: false, qty: 1, unit: '대', unitPrice: 120000 },
    { name: '수건걸이·휴지걸이 철거', spec: '보통인부 0.1품 | 악세사리류', detail: '노무 @20,000 (시중노임단가)', price: 20000, checked: true, qty: 1, unit: '식', unitPrice: 20000 },
    { name: '거울·수납장 철거', spec: '보통인부 0.2품 | 거울+수납장', detail: '노무 @40,000 (시중노임단가)', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
    { name: '환풍기 철거', spec: '전기공 0.1품 | 환풍기 분리', detail: '노무 @30,000 (시중노임단가)', price: 30000, checked: true, qty: 1, unit: '대', unitPrice: 30000 },
    // 3. 철거 — 타일·천장
    { name: '바닥 타일 철거', spec: '타일공 1.0품 | 타일+모르타르 제거', detail: '장비대 @30,000 | 노무 @170,000 (시중노임단가)', price: 200000, checked: true, qty: 1, unit: '식', unitPrice: 200000 },
    { name: '벽면 타일 철거', spec: '타일공 1.5품 | 타일+모르타르 제거', detail: '장비대 @30,000 | 노무 @220,000 (시중노임단가)', price: 250000, checked: true, qty: 1, unit: '식', unitPrice: 250000 },
    { name: '돔천장 철거', spec: '보통인부 0.3품 | SMC/ABS 돔천장', detail: '노무 @80,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
    // 4. 폐기물
    { name: '폐기물 처리 (화장실)', spec: '보통인부 1.0품 | 타일·모르타르 반출', detail: '스티커 @50,000 | 노무 @100,000', price: 150000, checked: true, qty: 1, unit: '식', unitPrice: 150000 },
    { name: '폐기물 운반비', spec: '1톤 트럭 1회 | 상·하차 포함', detail: '운반 @80,000 (상·하차 포함)', price: 80000, checked: true, qty: 1, unit: '회', unitPrice: 80000 },
    // 5. 방수
    { name: '바닥 방수 시공', spec: '방수공 1.0품 | 액체방수 2회+보호몰탈', detail: '자재 방수재+보호몰탈 @120,000 (물가정보) | 노무 @180,000 (시중노임단가)', price: 300000, checked: true, qty: 1, unit: '식', unitPrice: 300000 },
    { name: '벽면 방수 시공', spec: '방수공 0.5품 | 바닥에서 30cm 이상', detail: '자재 방수재 @60,000 (물가정보) | 노무 @90,000 (시중노임단가)', price: 150000, checked: false, qty: 1, unit: '식', unitPrice: 150000 },
    { name: '방수 시험 (담수 테스트)', spec: '48시간 담수 후 확인', detail: '노무 @50,000 (담수+확인)', price: 50000, checked: true, qty: 1, unit: '회', unitPrice: 50000 },
    // 6. 시공 — 타일
    { name: '바닥 타일 시공', spec: '타일공 1.0품 | 자재+시공 | 면적 기준', detail: '자재 타일+접착제 @120,000 (물가정보) | 노무 @180,000 (시중노임단가)', price: 300000, checked: true, qty: 1, unit: '식', unitPrice: 300000 },
    { name: '벽면 타일 시공', spec: '타일공 1.5품 | 자재+시공 | 면적 기준', detail: '자재 타일+접착제 @130,000 (물가정보) | 노무 @220,000 (시중노임단가)', price: 350000, checked: true, qty: 1, unit: '식', unitPrice: 350000 },
    { name: '타일 줄눈 시공', spec: '타일공 0.3품 | 줄눈재+시공', detail: '자재 줄눈재 @15,000 (물가정보) | 노무 @65,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '식', unitPrice: 80000 },
    // 7. 시공 — 천장·설비 재설치
    { name: '돔천장 설치', spec: '보통인부 0.3품 | 돔천장 재설치', detail: '자재 부속 @30,000 | 노무 @90,000 (시중노임단가)', price: 120000, checked: true, qty: 1, unit: '식', unitPrice: 120000 },
    { name: '돔천장 교체 (신품)', spec: '보통인부 0.3품 | 신품 교체', detail: '자재 돔천장 @160,000 (물가정보) | 노무 @90,000 (시중노임단가)', price: 250000, checked: false, qty: 1, unit: '식', unitPrice: 250000 },
    { name: '양변기 재설치', spec: '설비공 0.3품 | 재설치+연결', detail: '자재 부속 @20,000 | 노무 @80,000 (시중노임단가)', price: 100000, checked: true, qty: 1, unit: '대', unitPrice: 100000 },
    { name: '양변기 교체 (신품)', spec: '설비공 0.5품 | 신품 자재+설치', detail: '자재 양변기 @220,000 (물가정보) | 노무 @130,000 (시중노임단가)', price: 350000, checked: false, qty: 1, unit: '대', unitPrice: 350000 },
    { name: '부속품 교체', spec: '설비공 0.1품 | 플러시밸브·볼탭', detail: '자재 부속 @15,000 | 노무 @25,000 (시중노임단가)', price: 40000, checked: true, qty: 1, unit: '식', unitPrice: 40000 },
    { name: '세면대 재설치', spec: '설비공 0.3품 | 세면대+수전 재연결', detail: '노무 @80,000 (시중노임단가)', price: 80000, checked: true, qty: 1, unit: '대', unitPrice: 80000 },
    { name: '욕조/샤워부스 재설치', spec: '설비공 0.5품+보통인부 0.5품', detail: '노무 설비공 @75,000 + 보통인부 @75,000 (시중노임단가)', price: 150000, checked: false, qty: 1, unit: '대', unitPrice: 150000 },
    { name: '수건걸이·휴지걸이 재설치', spec: '보통인부 0.1품 | 악세사리류', detail: '자재 앙카볼트 @5,000 | 노무 @25,000', price: 30000, checked: true, qty: 1, unit: '식', unitPrice: 30000 },
    { name: '거울·수납장 재설치', spec: '보통인부 0.2품 | 거울+수납장', detail: '자재 부속 @10,000 | 노무 @40,000', price: 50000, checked: true, qty: 1, unit: '식', unitPrice: 50000 },
    { name: '환풍기 재설치', spec: '전기공 0.1품 | 재설치+배기 확인', detail: '노무 @40,000 (시중노임단가)', price: 40000, checked: true, qty: 1, unit: '대', unitPrice: 40000 },
    // 8. 마감
    { name: '코킹 작업 (전체)', spec: '설비공 0.2품 | 양변기·세면대 실리콘', detail: '자재 실리콘 @10,000 | 노무 @50,000 (시중노임단가)', price: 60000, checked: true, qty: 1, unit: '식', unitPrice: 60000 },
    { name: '급수·배수 테스트', spec: '설비공 0.1품 | 전체 기능 확인', detail: '노무 @30,000 (시중노임단가)', price: 30000, checked: true, qty: 1, unit: '회', unitPrice: 30000 },
  ]
};
