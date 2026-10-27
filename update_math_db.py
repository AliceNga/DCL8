import json

math_code = """/**
 * ĐỀ CƯƠNG ÔN TẬP TOÁN 8 GIỮA HỌC KÌ 1 (2026-2027)
 * Đầy đủ 4 Đề (Đề 1 đến Đề 4) - Chuẩn cấu trúc đề thi chính thức:
 * - Bài I: Rút gọn biểu thức và tính toán đại số (4 ý a, b, c, d)
 * - Bài II: Bài toán thực tế ứng dụng đa thức (diện tích, thể tích, chi phí)
 * - Bài III: Tìm x nâng cao & hằng đẳng thức (4 ý a, b, c, d)
 * - Bài IV: Hình học chứng minh tứ giác đặc biệt (đầy đủ các ý a, b, c)
 * - Bài V: Vận dụng thực tế & bất đẳng thức cực trị (0.5 điểm)
 */

window.MATH_DATABASE = [
  // ==========================================
  // --- ĐỀ SỐ 1 (BÀI I -> V ĐẦY ĐỦ CÁC Ý) ---
  // ==========================================
  {
    id: 'math_d1_b1',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài I: Rút gọn biểu thức)',
    questionText: 'Đề 1 - Bài I (2,0 điểm). Thực hiện phép tính và rút gọn các biểu thức sau:<br>' +
      'a) (3x²y - 2xy) + (x²y + 5xy)<br>' +
      'b) (6x³y² - 9x²y³):(3xy) - (2x²y + 3xy²)<br>' +
      'c) (2x - y)² + (x + y)(x - y)<br>' +
      'd) (x - 1)(x² + x + 1) - (x + 1)³',
    options: [
      { text: 'a) 4x²y + 3xy;  b) -6xy²;  c) 5x² - 4xy;  d) -3x² - 3x - 2', isCorrect: true },
      { text: 'a) 4x²y - 3xy;  b) 4x²y;  c) 3x² - 4xy;  d) -3x² - 2', isCorrect: false },
      { text: 'a) 2x²y + 3xy;  b) -6xy²;  c) 5x² - y²;  d) -3x² - 3x', isCorrect: false },
      { text: 'a) 4x²y + 7xy;  b) 2x²y - 6xy²;  c) 5x² - 4xy + y²;  d) -3x² - 2', isCorrect: false }
    ],
    explanation: '• a) (3+1)x²y + (-2+5)xy = 4x²y + 3xy.<br>' +
      '• b) (2x²y - 3xy²) - (2x²y + 3xy²) = -6xy².<br>' +
      '• c) (4x² - 4xy + y²) + (x² - y²) = 5x² - 4xy.<br>' +
      '• d) (x³ - 1) - (x³ + 3x² + 3x + 1) = -3x² - 3x - 2.'
  },
  {
    id: 'math_d1_b2',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài II: Toán thực tế hồ bơi)',
    questionText: 'Đề 1 - Bài II (2,0 điểm). Khuôn viên hình chữ nhật dài (x + 4)m, rộng (y + 2)m. Ở giữa có hồ bơi dài x(m), rộng y(m). Đất còn lại trồng cỏ giá 150 000 đồng/m².<br>' +
      'a) Biểu thức A biểu diễn diện tích trồng cỏ;<br>' +
      'b) Biểu thức B biểu diễn chi phí trồng cỏ;<br>' +
      'c) Tính A và chi phí khi x = 12, y = 8:',
    visualComponent: `
      <div class="my-3 p-3 bg-teal-50/70 border border-teal-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 320 150" class="w-80 h-36 max-w-full">
          <rect x="20" y="15" width="280" height="110" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <text x="160" y="30" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Đất trồng cỏ bao quanh: A = 2x + 4y + 8 (m²)</text>
          <text x="160" y="10" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Chiều dài: x + 4 (m)</text>
          <text x="10" y="70" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle" transform="rotate(-90, 10, 70)">Rộng: y + 2</text>
          <rect x="70" y="45" width="180" height="60" rx="6" fill="#38bdf8" stroke="#0284c7" stroke-width="1.8"/>
          <text x="160" y="75" font-size="12" font-weight="extrabold" fill="#ffffff" text-anchor="middle">HỒ BƠI (x × y)</text>
          <text x="160" y="90" font-size="8.5" font-weight="bold" fill="#0369a1" text-anchor="middle">Dài x, Rộng y</text>
        </svg>
        <span class="text-[11px] text-teal-900 font-bold mt-1">S_cỏ = S_khuôn_viên - S_hồ_bơi = (x+4)(y+2) - xy = 2x + 4y + 8</span>
      </div>
    `,
    options: [
      { text: 'A = 2x + 4y + 8 (m²);  Chi phí = 9 600 000 đồng', isCorrect: true },
      { text: 'A = 4x + 2y + 8 (m²);  Chi phí = 8 400 000 đồng', isCorrect: false },
      { text: 'A = xy + 8 (m²);  Chi phí = 10 200 000 đồng', isCorrect: false },
      { text: 'A = 2x + 4y (m²);  Chi phí = 12 000 000 đồng', isCorrect: false }
    ],
    explanation: '• a) S_khuôn_viên = (x+4)(y+2) = xy + 2x + 4y + 8. S_hồ_bơi = xy.<br>' +
      '=> Diện tích trồng cỏ A = S_khuôn_viên - S_hồ_bơi = 2x + 4y + 8 (m²).<br>' +
      '• b) Chi phí trồng cỏ B = 150 000 × (2x + 4y + 8) (đồng).<br>' +
      '• c) Với x=12, y=8: A = 2(12) + 4(8) + 8 = 64 m².<br>' +
      'Chi phí thực tế = 64 × 150 000 = 9 600 000 đồng.'
  },
  {
    id: 'math_d1_b3',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài III: Tìm x đầy đủ 4 ý)',
    questionText: 'Đề 1 - Bài III (2,0 điểm). Tìm x, biết:<br>' +
      'a) 2x² + 4x = 0<br>' +
      'b) (2x + 1)² - x² = 0<br>' +
      'c) (x - 3)(x + 3) - (x - 5)² = 4<br>' +
      'd) x²(x - 7) - 4(x - 7) = 0',
    options: [
      { text: 'a) x ∈ {0; -2};  b) x ∈ {-1; -1/3};  c) x = 3,8;  d) x ∈ {7; 2; -2}', isCorrect: true },
      { text: 'a) x ∈ {0; 2};  b) x ∈ {1; 1/3};  c) x = 4;  d) x ∈ {7; 4}', isCorrect: false },
      { text: 'a) x = -2;  b) x = -1;  c) x = 3,8;  d) x ∈ {2; -2}', isCorrect: false },
      { text: 'a) x ∈ {0; -2};  b) x ∈ {-1; 0};  c) x = 2;  d) x = 7', isCorrect: false }
    ],
    explanation: '• a) 2x(x + 2) = 0 => x = 0 hoặc x = -2.<br>' +
      '• b) (2x + 1 - x)(2x + 1 + x) = (x + 1)(3x + 1) = 0 => x = -1 hoặc x = -1/3.<br>' +
      '• c) (x² - 9) - (x² - 10x + 25) = 4 <=> 10x - 34 = 4 <=> 10x = 38 => x = 3,8 = 19/5.<br>' +
      '• d) (x - 7)(x² - 4) = 0 <=> (x - 7)(x - 2)(x + 2) = 0 => x ∈ {7; 2; -2}.'
  },
  {
    id: 'math_d1_b4',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài IV: Hình học tam giác cân đầy đủ a, b, c)',
    type: 'keypoint_checklist',
    questionText: 'Đề 1 - Bài IV (3,5 điểm). Tam giác ABC cân tại A, N là trung điểm AC, MN // BC (M ∈ AB). Trên tia đối NM lấy E sao cho NM = NE.<br>' +
      'a) Chứng minh tứ giác BMNC là hình thang cân;<br>' +
      'b) Chứng minh AECM là hình bình hành;<br>' +
      'c) Gọi MC cắt BN, BE lần lượt tại G, I. Chứng minh tam giác CNE cân và G là trọng tâm tam giác ABC.',
    visualComponent: `
      <div class="my-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 340 190" class="w-80 h-44 max-w-full">
          <polygon points="130,20 40,150 220,150" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <line x1="85" y1="85" x2="175" y2="85" stroke="#2563eb" stroke-width="2"/>
          <line x1="175" y1="85" x2="265" y2="85" stroke="#dc2626" stroke-width="2" stroke-dasharray="3,3"/>
          <line x1="130" y1="20" x2="265" y2="85" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="220" y1="150" x2="265" y2="85" stroke="#dc2626" stroke-width="1.5"/>
          <line x1="85" y1="85" x2="220" y2="150" stroke="#059669" stroke-width="1.2" stroke-dasharray="2,2"/>
          <line x1="40" y1="150" x2="175" y2="85" stroke="#059669" stroke-width="1.2" stroke-dasharray="2,2"/>
          <circle cx="130" cy="20" r="3.5" fill="#0f172a"/><text x="130" y="14" font-size="10" font-weight="extrabold" fill="#0f172a" text-anchor="middle">A</text>
          <circle cx="40" cy="150" r="3.5" fill="#0f172a"/><text x="30" y="160" font-size="10" font-weight="extrabold" fill="#0f172a">B</text>
          <circle cx="220" cy="150" r="3.5" fill="#0f172a"/><text x="230" y="160" font-size="10" font-weight="extrabold" fill="#0f172a">C</text>
          <circle cx="85" cy="85" r="3.5" fill="#2563eb"/><text x="73" y="88" font-size="10" font-weight="extrabold" fill="#2563eb">M</text>
          <circle cx="175" cy="85" r="3.5" fill="#2563eb"/><text x="178" y="78" font-size="10" font-weight="extrabold" fill="#2563eb">N</text>
          <circle cx="265" cy="85" r="3.5" fill="#dc2626"/><text x="272" y="88" font-size="10" font-weight="extrabold" fill="#dc2626">E</text>
          <circle cx="130" cy="128" r="3.5" fill="#7c3aed"/><text x="138" y="132" font-size="9" font-weight="extrabold" fill="#7c3aed">G</text>
        </svg>
        <span class="text-[11px] text-slate-700 font-bold mt-1">BMNC là hình thang cân • AECM là hình bình hành • G là trọng tâm tam giác ABC</span>
      </div>
    `,
    totalPoints: 3.5,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý a: Chứng minh BMNC là hình thang cân',
        template: 'Tứ giác BMNC có MN // BC nên là hình thang; lại có góc B = góc C (do tam giác ABC cân tại A) nên BMNC là {k1}.',
        slots: [{ id: 'k1', expected: 'hình thang cân', options: ['hình thang cân', 'hình bình hành', 'hình chữ nhật'] }]
      },
      {
        pointNum: 2,
        title: 'Ý b: Chứng minh AECM là hình bình hành',
        template: 'Tứ giác AECM có hai đường chéo AC và ME cắt nhau tại trung điểm N của mỗi đường nên là {k2}.',
        slots: [{ id: 'k2', expected: 'hình bình hành', options: ['hình bình hành', 'hình thoi', 'hình thang cân'] }]
      },
      {
        pointNum: 3,
        title: 'Ý c: Chứng minh G là trọng tâm tam giác ABC',
        template: 'Vì MN // BC và N là trung điểm AC nên M là {k3} của AB; hai đường trung tuyến BN và CM cắt nhau tại G nên G là {k4} tam giác ABC.',
        slots: [
          { id: 'k3', expected: 'trung điểm', options: ['trung điểm', 'đường cao', 'phân giác'] },
          { id: 'k4', expected: 'trọng tâm', options: ['trọng tâm', 'trực tâm', 'tâm đường tròn'] }
        ]
      }
    ],
    fullSolution: '• a) MN // BC => BMNC là hình thang. Tam giác ABC cân tại A => góc B = góc C => BMNC là hình thang cân.<br>' +
      '• b) N là trung điểm AC (gt) và N là trung điểm ME (do NM = NE) => AECM có hai đường chéo cắt nhau tại trung điểm mỗi đường nên AECM là hình bình hành.<br>' +
      '• c) Do MN // BC và N là trung điểm AC => M là trung điểm AB (đường trung bình). Trong tam giác ABC, BN và CM là 2 đường trung tuyến cắt nhau tại G nên G là trọng tâm tam giác ABC.'
  },
  {
    id: 'math_d1_b5',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài V: Bó đũa đoàn kết)',
    type: 'keypoint_checklist',
    questionText: 'Đề 1 - Bài V (0,5 điểm). Người cha chia 2 bó đũa 4x và 4y chiếc xếp thành 2 hình vuông cạnh xa và ya. Sau đó gộp lại xếp thành hình vuông cạnh (x+y)a.<br>' +
      'a) So sánh diện tích hình vuông lớn với tổng diện tích 2 hình vuông nhỏ và nêu ý nghĩa;<br>' +
      'b) Biết diện tích hình vuông lớn gấp đôi tổng diện tích 2 hình vuông nhỏ, tìm mối quan hệ giữa x và y.',
    totalPoints: 2,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý a: So sánh diện tích & Ý nghĩa',
        template: 'S_lớn = (x + y)² a² = (x² + 2xy + y²) a²; vì x, y > 0 nên 2xya² > 0 => S_lớn {k1} tổng diện tích hai hình vuông nhỏ; thể hiện sức mạnh đoàn kết {k2}.',
        slots: [
          { id: 'k1', expected: 'luôn lớn hơn', options: ['luôn lớn hơn', 'bằng với', 'nhỏ hơn'] },
          { id: 'k2', expected: 'vượt trội hơn hẳn', options: ['vượt trội hơn hẳn', 'bằng với đơn lẻ', 'không đổi'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý b: Tìm mối quan hệ giữa x và y',
        template: 'Khi S_lớn = 2(S1 + S2) <=> (x + y)² = 2(x² + y²) <=> (x - y)² = 0 <=> {k3}.',
        slots: [{ id: 'k3', expected: 'x = y', options: ['x = y', 'x = 2y', 'x > y'] }]
      }
    ],
    fullSolution: '• a) S1 + S2 = x²a² + y²a² = (x² + y²)a².<br>' +
      'S_lớn = (x+y)²a² = (x² + y² + 2xy)a².<br>' +
      'Do x, y > 0 nên 2xy > 0 => S_lớn > S1 + S2. Bài học: Đoàn kết tạo nên sức mạnh tổng hợp vượt trội!<br>' +
      '• b) S_lớn = 2(S1 + S2) <=> (x+y)² = 2(x²+y²) <=> x² + 2xy + y² = 2x² + 2y² <=> x² - 2xy + y² = 0 <=> (x - y)² = 0 <=> x = y.'
  },

  // ==========================================
  // --- ĐỀ SỐ 2 (BÀI I -> V ĐẦY ĐỦ CÁC Ý) ---
  // ==========================================
  {
    id: 'math_d2_b1',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài I: Rút gọn biểu thức đầy đủ a, b, c, d)',
    questionText: 'Đề 2 - Bài I (2,0 điểm). Rút gọn các biểu thức sau:<br>' +
      'a) 3x(x - 2y) + 2y(3x - y)<br>' +
      'b) (12x⁴y² - 8x³y³ + 4x²y²):(4x²y²) - x(3x - 2y)<br>' +
      'c) (x - 2y)² + 4y(x - y)<br>' +
      'd) (x - 1)³ - x(x + 1)² + 5x² - 1',
    options: [
      { text: 'a) 3x² - 2y²;  b) 1;  c) x²;  d) 2x - 2', isCorrect: true },
      { text: 'a) 3x² + 2y²;  b) x + 1;  c) x² - 4y²;  d) 2x + 1', isCorrect: false },
      { text: 'a) 3x² - 2y²;  b) 1;  c) x² + 4y²;  d) -2x - 2', isCorrect: false },
      { text: 'a) 6x² - 2y²;  b) 0;  c) x²;  d) 2x', isCorrect: false }
    ],
    explanation: '• a) 3x² - 6xy + 6xy - 2y² = 3x² - 2y².<br>' +
      '• b) (3x² - 2xy + 1) - (3x² - 2xy) = 1.<br>' +
      '• c) x² - 4xy + 4y² + 4xy - 4y² = x².<br>' +
      '• d) (x³ - 3x² + 3x - 1) - x(x² + 2x + 1) + 5x² - 1 = x³ - 3x² + 3x - 1 - x³ - 2x² - x + 5x² - 1 = 2x - 2.'
  },
  {
    id: 'math_d2_b2',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài II: Toán thực tế bể cá)',
    questionText: 'Đề 2 - Bài II (2,0 điểm). Bể cá cảnh hình hộp chữ nhật không nắp cao 4 dm, đáy dài (x + y) dm, rộng (x - y) dm (x > y > 0). Giá kính 2000 đồng/dm².<br>' +
      'a) Biểu thức A biểu diễn thể tích V của bể;<br>' +
      'b) Biểu thức B biểu diễn số tiền mua kính làm bể;<br>' +
      'c) Tính V và số tiền mua kính khi x = 7, y = 3:',
    visualComponent: `
      <div class="my-3 p-3 bg-cyan-50/70 border border-cyan-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 320 150" class="w-80 h-36 max-w-full">
          <polygon points="40,90 180,90 260,40 120,40" fill="#bae6fd" stroke="#0284c7" stroke-width="1.8"/>
          <polygon points="40,90 180,90 180,135 40,135" fill="#7dd3fc" stroke="#0284c7" stroke-width="1.8"/>
          <polygon points="180,90 260,40 260,85 180,135" fill="#38bdf8" stroke="#0284c7" stroke-width="1.8"/>
          <text x="110" y="115" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">Dài: x + y (dm)</text>
          <text x="230" y="115" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Cao = 4 dm</text>
          <text x="200" y="60" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Rộng: x - y</text>
        </svg>
        <span class="text-[11px] text-cyan-900 font-bold mt-1">V = 4(x² - y²) • S_kính (không nắp) = x² - y² + 16x</span>
      </div>
    `,
    options: [
      { text: 'V = 4(x² - y²) dm³;  Tiền kính khi x=7, y=3 là 304 000 đồng', isCorrect: true },
      { text: 'V = 4(x + y)² dm³;  Tiền kính là 320 000 đồng', isCorrect: false },
      { text: 'V = 4(x² - y²) dm³;  Tiền kính là 280 000 đồng', isCorrect: false },
      { text: 'V = 8(x² - y²) dm³;  Tiền kính là 450 000 đồng', isCorrect: false }
    ],
    explanation: '• a) V = dài × rộng × cao = (x+y)(x-y) × 4 = 4(x² - y²) (dm³).<br>' +
      '• b) S_kính = S_đáy + S_xung quanh = (x² - y²) + 2×4×(x+y + x-y) = x² - y² + 16x (dm²).<br>' +
      'Tiền mua kính B = 2000 × (x² - y² + 16x) (đồng).<br>' +
      '• c) Với x=7, y=3: V = 4(49 - 9) = 160 dm³.<br>' +
      'S_kính = 40 + 16(7) = 152 dm². Số tiền = 152 × 2000 = 304 000 đồng.'
  },
  {
    id: 'math_d2_b3',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài III: Tìm x đầy đủ 4 ý)',
    questionText: 'Đề 2 - Bài III (2,0 điểm). Tìm x, biết:<br>' +
      'a) x² - 7x = 0<br>' +
      'b) (2x - 1)(2x + 1) - 4x(x - 2) = 7<br>' +
      'c) x(x - 2) - x + 2 = 0<br>' +
      'd) 5x(x - 3) - 2x + 6 = 0',
    options: [
      { text: 'a) x ∈ {0; 7};  b) x = 1;  c) x ∈ {1; 2};  d) x ∈ {3; 2/5}', isCorrect: true },
      { text: 'a) x ∈ {0; -7};  b) x = 1;  c) x = 2;  d) x = 3', isCorrect: false },
      { text: 'a) x = 7;  b) x = -1;  c) x ∈ {0; 2};  d) x = 2/5', isCorrect: false },
      { text: 'a) x ∈ {0; 7};  b) x = 2;  c) x = 1;  d) x ∈ {3; -2/5}', isCorrect: false }
    ],
    explanation: '• a) x(x - 7) = 0 => x = 0 hoặc x = 7.<br>' +
      '• b) 4x² - 1 - 4x² + 8x = 7 <=> 8x - 1 = 7 <=> 8x = 8 => x = 1.<br>' +
      '• c) x(x - 2) - (x - 2) = 0 <=> (x - 2)(x - 1) = 0 => x = 2 hoặc x = 1.<br>' +
      '• d) 5x(x - 3) - 2(x - 3) = 0 <=> (x - 3)(5x - 2) = 0 => x = 3 hoặc x = 2/5.'
  },
  {
    id: 'math_d2_b4',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài IV: Hình thang cân ABCD đầy đủ a, b, c)',
    type: 'keypoint_checklist',
    questionText: 'Đề 2 - Bài IV (3,5 điểm). Cho hình thang cân ABCD (AB // CD). Gọi H và K là hình chiếu của A và B trên CD.<br>' +
      'a) Chứng minh DH = CK;<br>' +
      'b) Tứ giác ABKH là hình gì? Vì sao?<br>' +
      'c) Gọi I là trung điểm AD. Qua I kẻ đường song song DC cắt BC tại E. Chứng minh B, I, E thẳng hàng và BH, CI, EM đồng quy.',
    visualComponent: `
      <div class="my-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 340 180" class="w-80 h-44 max-w-full">
          <polygon points="90,40 210,40 270,140 30,140" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <line x1="90" y1="40" x2="90" y2="140" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
          <line x1="210" y1="40" x2="210" y2="140" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3,3"/>
          <circle cx="90" cy="40" r="3.5" fill="#0f172a"/><text x="85" y="32" font-size="10" font-weight="extrabold" fill="#0f172a">A</text>
          <circle cx="210" cy="40" r="3.5" fill="#0f172a"/><text x="215" y="32" font-size="10" font-weight="extrabold" fill="#0f172a">B</text>
          <circle cx="270" cy="140" r="3.5" fill="#0f172a"/><text x="278" y="148" font-size="10" font-weight="extrabold" fill="#0f172a">C</text>
          <circle cx="30" cy="140" r="3.5" fill="#0f172a"/><text x="18" y="148" font-size="10" font-weight="extrabold" fill="#0f172a">D</text>
          <circle cx="90" cy="140" r="3.5" fill="#dc2626"/><text x="86" y="155" font-size="9" font-weight="extrabold" fill="#dc2626">H</text>
          <circle cx="210" cy="140" r="3.5" fill="#dc2626"/><text x="206" y="155" font-size="9" font-weight="extrabold" fill="#dc2626">K</text>
        </svg>
        <span class="text-[11px] text-slate-700 font-bold mt-1">ΔAHD = ΔBKC (cạnh huyền - góc nhọn) => DH = CK • ABKH là hình chữ nhật</span>
      </div>
    `,
    totalPoints: 3.5,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý a: Chứng minh DH = CK',
        template: 'Xét hai tam giác vuông AHD và BKC: AD = BC (hình thang cân) và góc D = góc C nên ΔAHD = ΔBKC (cạnh huyền - góc nhọn), suy ra {k1}.',
        slots: [{ id: 'k1', expected: 'DH = CK', options: ['DH = CK', 'DH = AB', 'AH = CD'] }]
      },
      {
        pointNum: 2,
        title: 'Ý b: Tứ giác ABKH là hình gì?',
        template: 'ABKH có AB // HK và AH // BK (cùng vuông góc CD), góc AHK = 90° nên ABKH là {k2}.',
        slots: [{ id: 'k2', expected: 'hình chữ nhật', options: ['hình chữ nhật', 'hình vuông', 'hình thoi'] }]
      },
      {
        pointNum: 3,
        title: 'Ý c: Chứng minh đồng quy và thẳng hàng',
        template: 'Đường thẳng qua I song song hai đáy là đường trung bình của hình thang, suy ra E là trung điểm BC và các đường chéo {k3}.',
        slots: [{ id: 'k3', expected: 'đồng quy tại một điểm', options: ['đồng quy tại một điểm', 'song song với nhau', 'trùng nhau'] }]
      }
    ],
    fullSolution: '• a) Xét ΔAHD vuông tại H và ΔBKC vuông tại K: AD = BC (hai cạnh bên hình thang cân), ∠D = ∠C => ΔAHD = ΔBKC (cạnh huyền - góc nhọn) => DH = CK.<br>' +
      '• b) Tứ giác ABKH có AB // HK (do AB // CD), AH // BK (cùng vuông góc CD) => ABKH là hình bình hành. Lại có ∠AHK = 90° => ABKH là hình chữ nhật.<br>' +
      '• c) I là trung điểm AD, IE // AB // CD => IE là đường trung bình của hình thang ABCD => E là trung điểm BC. Áp dụng tính chất đối xứng và đường thẳng nối trung điểm, ta có các đường thẳng BH, CI, EM đồng quy.'
  },
  {
    id: 'math_d2_b5',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài V: Rào bãi cỏ bên sông)',
    questionText: 'Đề 2 - Bài V (0,5 điểm). Một trang trại rào bãi cỏ hình chữ nhật một cạnh là bờ sông với 4 triệu đồng (giá rào 40 000 đồng/m cho 3 cạnh còn lại). Tính diện tích lớn nhất có thể của bãi cỏ.',
    options: [
      { text: 'Diện tích lớn nhất là 1250 m² khi chiều rộng 25m, dài 50m', isCorrect: true },
      { text: 'Diện tích lớn nhất là 1000 m² khi chiều rộng 20m, dài 50m', isCorrect: false },
      { text: 'Diện tích lớn nhất là 2500 m² khi làm hình vuông 50m', isCorrect: false },
      { text: 'Diện tích lớn nhất là 1500 m² khi chiều rộng 30m', isCorrect: false }
    ],
    explanation: '• Tổng chiều dài rào cho 3 cạnh = 4 000 000 / 40 000 = 100 mét.<br>' +
      '• Gọi chiều rộng vuông góc bờ sông là x (m, x > 0) => chiều dài song song bờ sông là 100 - 2x (m).<br>' +
      '• Diện tích S = x(100 - 2x) = -2x² + 100x = -2(x² - 50x + 625) + 1250 = -2(x - 25)² + 1250 ≤ 1250 m².<br>' +
      '• Dấu "=" xảy ra khi x = 25m => chiều dài = 100 - 2(25) = 50m. Diện tích lớn nhất là 1250 m².'
  },

  // ==========================================
  // --- ĐỀ SỐ 3 (BÀI I -> V ĐẦY ĐỦ CÁC Ý) ---
  // ==========================================
  {
    id: 'math_d3_b1',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài I: Rút gọn biểu thức đầy đủ a, b, c, d)',
    questionText: 'Đề 3 - Bài I (2,0 điểm). Rút gọn các biểu thức sau:<br>' +
      'a) 2(3x + 4) - (12x² - 15x):(3x) (với x ≠ 0)<br>' +
      'b) (x - 2)(2x + 1) + x(1 - 2x)<br>' +
      'c) (x - 3)(x + 3) - (x - 5)² - 10x<br>' +
      'd) (x + 2)³ + (x - 2)² - x(x² + 12)',
    options: [
      { text: 'a) 2x + 13;  b) -2x - 2;  c) -34;  d) 7x² - 4x + 12', isCorrect: true },
      { text: 'a) 2x + 3;  b) -2x - 2;  c) -16;  d) 7x² + 12', isCorrect: false },
      { text: 'a) 2x + 13;  b) 2x - 2;  c) -34;  d) x² - 4x + 12', isCorrect: false },
      { text: 'a) 6x + 13;  b) -2x;  c) 34;  d) 7x² - 4x', isCorrect: false }
    ],
    explanation: '• a) (6x + 8) - (4x - 5) = 2x + 13.<br>' +
      '• b) (2x² - 3x - 2) + (x - 2x²) = -2x - 2.<br>' +
      '• c) (x² - 9) - (x² - 10x + 25) - 10x = x² - 9 - x² + 10x - 25 - 10x = -34.<br>' +
      '• d) (x³ + 6x² + 12x + 8) + (x² - 4x + 4) - (x³ + 12x) = 7x² - 4x + 12.'
  },
  {
    id: 'math_d3_b2',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài II: Vườn hình chữ nhật và lối đi)',
    questionText: 'Đề 3 - Bài II (2,0 điểm). Một khu vườn hình chữ nhật có chiều dài (3x + 2)m, rộng (y + 4)m. Người ta làm một lối đi dọc theo vườn rộng 2m.<br>' +
      'a) Biểu thức A biểu diễn diện tích khu vườn;<br>' +
      'b) Biểu thức B biểu diễn diện tích đất trồng cây còn lại;<br>' +
      'c) Tính diện tích đất trồng cây khi x = 6, y = 8:',
    visualComponent: `
      <div class="my-3 p-3 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 320 150" class="w-80 h-36 max-w-full">
          <rect x="20" y="20" width="280" height="110" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
          <rect x="20" y="20" width="280" height="25" fill="#fde047" stroke="#ca8a04" stroke-width="1.5"/>
          <text x="160" y="37" font-size="9.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Lối đi dọc rộng 2m</text>
          <text x="160" y="90" font-size="12" font-weight="extrabold" fill="#15803d" text-anchor="middle">ĐẤT TRỒNG CÂY: B = (3x + 2)(y + 2)</text>
          <text x="160" y="14" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Chiều dài: 3x + 2 (m)</text>
        </svg>
        <span class="text-[11px] text-emerald-900 font-bold mt-1">Khi x=6, y=8: Dài = 20m, Rộng đất trồng = 10m => S_trồng = 200 m²</span>
      </div>
    `,
    options: [
      { text: 'A = 3xy + 12x + 2y + 8;  B = 3xy + 6x + 2y + 4;  S khi x=6, y=8 là 200 m²', isCorrect: true },
      { text: 'A = 3xy + 12x + 2y + 8;  B = 3xy + 12x + 2y;  S = 210 m²', isCorrect: false },
      { text: 'A = 3xy + 8;  B = 3xy + 4;  S = 180 m²', isCorrect: false },
      { text: 'A = (3x+2)(y+4);  B = (3x+2)y;  S = 160 m²', isCorrect: false }
    ],
    explanation: '• a) Diện tích khu vườn A = (3x + 2)(y + 4) = 3xy + 12x + 2y + 8 (m²).<br>' +
      '• b) Chiều rộng phần đất trồng cây = (y + 4) - 2 = y + 2 (m).<br>' +
      '=> Diện tích đất trồng cây B = (3x + 2)(y + 2) = 3xy + 6x + 2y + 4 (m²).<br>' +
      '• c) Khi x = 6, y = 8: Dài = 3(6) + 2 = 20m; Rộng đất trồng = 8 + 2 = 10m.<br>' +
      'Diện tích trồng cây thực tế = 20 × 10 = 200 m².'
  },
  {
    id: 'math_d3_b3',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài III: Tìm x đầy đủ 4 ý)',
    questionText: 'Đề 3 - Bài III (2,0 điểm). Tìm x, biết:<br>' +
      'a) 4x(x + 3) - 4x² = 36<br>' +
      'b) (x + 2)² - (x - 3)(x + 3) = -3<br>' +
      'c) x²(x - 7) - 4(x - 7) = 0<br>' +
      'd) x(2x - 3) - 4x² + 9 = 0',
    options: [
      { text: 'a) x = 3;  b) x = -4;  c) x ∈ {7; 2; -2};  d) x ∈ {3/2; -3}', isCorrect: true },
      { text: 'a) x = 3;  b) x = 4;  c) x ∈ {7; 4};  d) x = 3/2', isCorrect: false },
      { text: 'a) x = -3;  b) x = -4;  c) x ∈ {2; -2};  d) x = -3', isCorrect: false },
      { text: 'a) x = 3;  b) x = -1;  c) x = 7;  d) x ∈ {3/2; 3}', isCorrect: false }
    ],
    explanation: '• a) 4x² + 12x - 4x² = 36 <=> 12x = 36 => x = 3.<br>' +
      '• b) (x² + 4x + 4) - (x² - 9) = -3 <=> 4x + 13 = -3 <=> 4x = -16 => x = -4.<br>' +
      '• c) (x - 7)(x² - 4) = 0 <=> (x - 7)(x - 2)(x + 2) = 0 => x ∈ {7; 2; -2}.<br>' +
      '• d) x(2x - 3) - (4x² - 9) = 0 <=> x(2x - 3) - (2x - 3)(2x + 3) = 0 <=> (2x - 3)(x - 2x - 3) = 0 <=> (2x - 3)(-x - 3) = 0 => x = 3/2 hoặc x = -3.'
  },
  {
    id: 'math_d3_b4',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài IV: Hình học hình bình hành & hình thang cân)',
    type: 'keypoint_checklist',
    questionText: 'Đề 3 - Bài IV (3,5 điểm). Cho tam giác ABC nhọn (AB < AC < BC). Gọi O là trung điểm BC, lấy điểm D sao cho O là trung điểm AD.<br>' +
      'a) Chứng minh tứ giác ABDC là hình bình hành;<br>' +
      'b) Gọi M là hình chiếu của B trên CD, lấy Y sao cho M là trung điểm BY. Chứng minh góc CAB = góc BYD và tứ giác ACYB là hình thang cân;<br>' +
      'c) AY cắt BC tại S, lấy P trên AB sao cho SP // MB; lấy Q trên CD sao cho CQ = AP. Chứng minh P là trung điểm AB và ba điểm P, O, Q thẳng hàng.',
    visualComponent: `
      <div class="my-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 340 180" class="w-80 h-44 max-w-full">
          <polygon points="110,30 50,140 210,140" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <line x1="110" y1="30" x2="150" y2="150" stroke="#2563eb" stroke-width="1.8"/>
          <circle cx="130" cy="140" r="3" fill="#2563eb"/><text x="130" y="152" font-size="9" font-weight="bold" fill="#2563eb">O</text>
          <circle cx="150" cy="250" r="3" fill="#dc2626"/>
          <polygon points="110,30 50,140 150,250 210,140" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="105" y="22" font-size="10" font-weight="extrabold" fill="#0f172a">A</text>
          <text x="38" y="145" font-size="10" font-weight="extrabold" fill="#0f172a">B</text>
          <text x="215" y="145" font-size="10" font-weight="extrabold" fill="#0f172a">C</text>
          <text x="155" y="170" font-size="10" font-weight="extrabold" fill="#0f172a">D</text>
        </svg>
        <span class="text-[11px] text-slate-700 font-bold mt-1">AD và BC cắt nhau tại trung điểm O => ABDC là hình bình hành • ACYB là hình thang cân</span>
      </div>
    `,
    totalPoints: 3.5,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý a: Chứng minh ABDC là hình bình hành',
        template: 'Tứ giác ABDC có hai đường chéo AD và BC cắt nhau tại trung điểm O của mỗi đường nên là {k1}.',
        slots: [{ id: 'k1', expected: 'hình bình hành', options: ['hình bình hành', 'hình thoi', 'hình thang'] }]
      },
      {
        pointNum: 2,
        title: 'Ý b: Chứng minh ACYB là hình thang cân',
        template: 'Vì M là trung điểm BY và BM ⊥ CD nên CD là đường trung trực của BY, suy ra ∠CAB = ∠BYD và tứ giác ACYB là {k2}.',
        slots: [{ id: 'k2', expected: 'hình thang cân', options: ['hình thang cân', 'hình bình hành', 'hình chữ nhật'] }]
      },
      {
        pointNum: 3,
        title: 'Ý c: Chứng minh P, O, Q thẳng hàng',
        template: 'P là trung điểm AB và CQ = AP kết hợp O là trung điểm BC/AD suy ra O là trung điểm PQ, do đó ba điểm P, O, Q {k3}.',
        slots: [{ id: 'k3', expected: 'thẳng hàng', options: ['thẳng hàng', 'đồng quy', 'vuông góc'] }]
      }
    ],
    fullSolution: '• a) Tứ giác ABDC có hai đường chéo AD và BC cắt nhau tại trung điểm O của mỗi đường (gt) => ABDC là hình bình hành.<br>' +
      '• b) BM ⊥ CD tại M và MB = MY => CD là trung trực của BY => CB = CY và ∠CBY = ∠CYB. Kết hợp tính chất góc của hình bình hành => ∠CAB = ∠BYD. Lại có BY // AC (do cùng vuông góc CD) => ACYB là hình thang có hai góc kề một đáy bằng nhau nên là hình thang cân.<br>' +
      '• c) Áp dụng định lí Thales và tính chất trung điểm, P là trung điểm AB; tứ giác APCQ là hình bình hành có tâm là O => P, O, Q thẳng hàng.'
  },
  {
    id: 'math_d3_b5',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài V: Bài toán kinh doanh bút)',
    questionText: 'Đề 3 - Bài V (0,5 điểm). Giá nhập bút 20 nghìn, giá bán 40 nghìn thì bán được 50 chiếc/ngày. Cứ giảm giá 1 nghìn đồng/chiếc thì mỗi ngày bán tăng thêm 5 chiếc. Hỏi nên bán mỗi chiếc bút với giá bao nhiêu để lợi nhuận thu được lớn nhất và tính lợi nhuận đó.',
    options: [
      { text: 'Bán giá 35 nghìn đồng/chiếc;  Lợi nhuận lớn nhất = 1 125 000 đồng/ngày', isCorrect: true },
      { text: 'Bán giá 36 nghìn đồng/chiếc;  Lợi nhuận lớn nhất = 1 120 000 đồng/ngày', isCorrect: false },
      { text: 'Bán giá 30 nghìn đồng/chiếc;  Lợi nhuận lớn nhất = 1 000 000 đồng/ngày', isCorrect: false },
      { text: 'Bán giá 38 nghìn đồng/chiếc;  Lợi nhuận lớn nhất = 1 080 000 đồng/ngày', isCorrect: false }
    ],
    explanation: '• Gọi số nghìn đồng giảm giá là k (0 < k < 20).<br>' +
      '• Giá bán mới = 40 - k (nghìn đồng) => Lãi mỗi chiếc = (40 - k) - 20 = 20 - k (nghìn đồng).<br>' +
      '• Số bút bán được trong ngày = 50 + 5k (chiếc).<br>' +
      '• Tổng lợi nhuận P(k) = (20 - k)(50 + 5k) = 5(20 - k)(10 + k) = 5(-k² + 10k + 200).<br>' +
      '= -5(k² - 10k + 25) + 1125 = -5(k - 5)² + 1125 ≤ 1125 (nghìn đồng).<br>' +
      '• Lợi nhuận đạt lớn nhất là 1 125 000 đồng khi k = 5, tức là giá bán mỗi chiếc bút là 40 - 5 = 35 nghìn đồng.'
  },

  // ==========================================
  // --- ĐỀ SỐ 4 (BÀI I -> V ĐẦY ĐỦ CÁC Ý) ---
  // ==========================================
  {
    id: 'math_d4_b1',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài I: Rút gọn biểu thức đầy đủ A, B, C, D)',
    questionText: 'Đề 4 - Bài I (2,0 điểm). Rút gọn các biểu thức sau:<br>' +
      'a) A = 3x² + xy - x(3x - 2y)<br>' +
      'b) B = (12x⁴y³ - 9x³y⁴ + 6x³y³):(3x³y³) - 4x + 6y (với x ≠ 0, y ≠ 0)<br>' +
      'c) C = (x + 2)(x - 4) - (x - 3)(x + 3) + 2x<br>' +
      'd) D = (x + 3)³ - x²(x + 9) - 27',
    options: [
      { text: 'A = 3xy;  B = 3y + 2;  C = 1;  D = 27x', isCorrect: true },
      { text: 'A = 3xy;  B = 3y - 2;  C = -1;  D = 27x + 54', isCorrect: false },
      { text: 'A = xy;  B = 4x + 3y;  C = 1;  D = 9x', isCorrect: false },
      { text: 'A = 3xy;  B = 3y + 2;  C = 5;  D = 27x', isCorrect: false }
    ],
    explanation: '• a) A = 3x² + xy - 3x² + 2xy = 3xy.<br>' +
      '• b) B = (4x - 3y + 2) - 4x + 6y = 3y + 2.<br>' +
      '• c) C = (x² - 2x - 8) - (x² - 9) + 2x = x² - 2x - 8 - x² + 9 + 2x = 1.<br>' +
      '• d) D = (x³ + 9x² + 27x + 27) - (x³ + 9x²) - 27 = 27x.'
  },
  {
    id: 'math_d4_b2',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài II: Mua sắm siêu thị điện máy)',
    questionText: 'Đề 4 - Bài II (2,0 điểm). Một siêu thị bán tủ lạnh giá niêm yết x (nghìn đồng) và máy hút bụi giá y (nghìn đồng). Khai trương siêu thị giảm giá 20% cho tủ lạnh và giảm 30% cho máy hút bụi.<br>' +
      'a) Biểu thức A biểu diễn số tiền mua 2 tủ lạnh và 3 máy hút bụi theo giá niêm yết;<br>' +
      'b) Biểu thức B biểu diễn số tiền thực tế gia đình Lan phải trả sau khi giảm giá;<br>' +
      'c) Tính số tiền thực tế Lan phải trả khi x = 10 000 (nghìn đồng) và y = 4 000 (nghìn đồng):',
    visualComponent: `
      <div class="my-3 p-3 bg-amber-50/70 border border-amber-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 320 140" class="w-80 h-32 max-w-full">
          <rect x="25" y="15" width="120" height="100" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>
          <text x="85" y="45" font-size="11" font-weight="extrabold" fill="#1e40af" text-anchor="middle">2 TỦ LẠNH</text>
          <text x="85" y="65" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">Giảm 20% (còn 80%)</text>
          <text x="85" y="85" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">2 × 0,8x = 1,6x</text>
          
          <rect x="175" y="15" width="120" height="100" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
          <text x="235" y="45" font-size="11" font-weight="extrabold" fill="#92400e" text-anchor="middle">3 MÁY HÚT BỤI</text>
          <text x="235" y="65" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">Giảm 30% (còn 70%)</text>
          <text x="235" y="85" font-size="9" font-weight="bold" fill="#92400e" text-anchor="middle">3 × 0,7y = 2,1y</text>
        </svg>
        <span class="text-[11px] text-amber-900 font-bold mt-1">Tổng tiền thực tế B = 1,6x + 2,1y = 1,6(10 tr) + 2,1(4 tr) = 24,4 triệu đồng</span>
      </div>
    `,
    options: [
      { text: 'A = 2x + 3y;  B = 1,6x + 2,1y;  Số tiền thực tế phải trả = 24 400 000 đồng', isCorrect: true },
      { text: 'A = 2x + 3y;  B = 1,8x + 2,7y;  Số tiền thực tế = 28 800 000 đồng', isCorrect: false },
      { text: 'A = x + y;  B = 0,8x + 0,7y;  Số tiền thực tế = 10 800 000 đồng', isCorrect: false },
      { text: 'A = 2x + 3y;  B = 1,6x + 2,1y;  Số tiền thực tế = 26 000 000 đồng', isCorrect: false }
    ],
    explanation: '• a) Số tiền theo giá niêm yết A = 2x + 3y (nghìn đồng).<br>' +
      '• b) Giá 1 tủ lạnh sau giảm 20% = 0,8x => 2 tủ lạnh = 1,6x (nghìn đồng).<br>' +
      'Giá 1 máy hút bụi sau giảm 30% = 0,7y => 3 máy hút bụi = 2,1y (nghìn đồng).<br>' +
      '=> Tổng số tiền thực tế phải trả B = 1,6x + 2,1y (nghìn đồng).<br>' +
      '• c) Khi x = 10 000 nghìn (10 triệu) và y = 4 000 nghìn (4 triệu):<br>' +
      'B = 1,6(10 000) + 2,1(4 000) = 16 000 + 8 400 = 24 400 nghìn đồng = 24 400 000 đồng.'
  },
  {
    id: 'math_d4_b3',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài III: Tìm x đầy đủ 4 ý)',
    questionText: 'Đề 4 - Bài III (2,0 điểm). Tìm x, biết:<br>' +
      'a) 3x² - 2 - x(3x - 2) = 4<br>' +
      'b) (x + 5)(x - 5) = (x - 2)² - 6<br>' +
      'c) (x + 3)(4x² - 7x + 9) - (x + 3)(3x² + 9) = 0<br>' +
      'd) 4(3x - 2)² = 25(x - 1)²',
    options: [
      { text: 'a) x = 3;  b) x = 23/4;  c) x ∈ {0; -3; 7};  d) x ∈ {-1; 9/11}', isCorrect: true },
      { text: 'a) x = 3;  b) x = 5;  c) x ∈ {-3; 7};  d) x ∈ {1; -9/11}', isCorrect: false },
      { text: 'a) x = -3;  b) x = 23/4;  c) x ∈ {0; 7};  d) x = -1', isCorrect: false },
      { text: 'a) x = 3;  b) x = 21/4;  c) x ∈ {0; -3; 7};  d) x = 9/11', isCorrect: false }
    ],
    explanation: '• a) 3x² - 2 - 3x² + 2x = 4 <=> 2x - 2 = 4 <=> 2x = 6 => x = 3.<br>' +
      '• b) x² - 25 = x² - 4x + 4 - 6 <=> -25 = -4x - 2 <=> 4x = 23 => x = 23/4.<br>' +
      '• c) (x + 3)[(4x² - 7x + 9) - (3x² + 9)] = 0 <=> (x + 3)(x² - 7x) = 0 <=> x(x + 3)(x - 7) = 0 => x ∈ {0; -3; 7}.<br>' +
      '• d) [2(3x - 2)]² - [5(x - 1)]² = 0 <=> (6x - 4 - 5x + 5)(6x - 4 + 5x - 5) = 0 <=> (x + 1)(11x - 9) = 0 => x = -1 hoặc x = 9/11.'
  },
  {
    id: 'math_d4_b4',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài IV: Hình bình hành ABCD đầy đủ a, b, c)',
    type: 'keypoint_checklist',
    questionText: 'Đề 4 - Bài IV (3,5 điểm). Cho hình bình hành ABCD. Gọi E và F theo thứ tự là trung điểm của AB và CD.<br>' +
      'a) Chứng minh tứ giác AECF là hình bình hành;<br>' +
      'b) AC cắt BD tại O. Chứng minh ba điểm E, O, F thẳng hàng;<br>' +
      'c) Gọi M, N theo thứ tự là giao điểm của BD với AF, CE. Chứng minh OM = 1/2 MD và M là trung điểm của DN.',
    visualComponent: `
      <div class="my-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 340 180" class="w-80 h-44 max-w-full">
          <polygon points="90,40 270,40 230,140 50,140" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
          <line x1="90" y1="40" x2="230" y2="140" stroke="#dc2626" stroke-width="1.8"/>
          <line x1="270" y1="40" x2="50" y2="140" stroke="#2563eb" stroke-width="1.8"/>
          <line x1="180" y1="40" x2="140" y2="140" stroke="#059669" stroke-width="1.8"/>
          <circle cx="160" cy="90" r="3.5" fill="#7c3aed"/><text x="160" y="82" font-size="9.5" font-weight="extrabold" fill="#7c3aed">O</text>
          <text x="80" y="32" font-size="10" font-weight="extrabold" fill="#0f172a">A</text>
          <text x="278" y="38" font-size="10" font-weight="extrabold" fill="#0f172a">B</text>
          <text x="238" y="148" font-size="10" font-weight="extrabold" fill="#0f172a">C</text>
          <text x="38" y="148" font-size="10" font-weight="extrabold" fill="#0f172a">D</text>
          <text x="180" y="32" font-size="9" font-weight="bold" fill="#059669">E</text>
          <text x="140" y="155" font-size="9" font-weight="bold" fill="#059669">F</text>
        </svg>
        <span class="text-[11px] text-slate-700 font-bold mt-1">AE // CF và AE = CF => AECF là hình bình hành • AC và EF cắt nhau tại trung điểm O</span>
      </div>
    `,
    totalPoints: 3.5,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý a: Chứng minh AECF là hình bình hành',
        template: 'Vì ABCD là hình bình hành nên AB // CD và AB = CD. Do E, F là trung điểm nên AE // CF và AE = CF, do đó AECF là {k1}.',
        slots: [{ id: 'k1', expected: 'hình bình hành', options: ['hình bình hành', 'hình chữ nhật', 'hình thoi'] }]
      },
      {
        pointNum: 2,
        title: 'Ý b: Chứng minh ba điểm E, O, F thẳng hàng',
        template: 'Vì AECF là hình bình hành nên hai đường chéo AC và EF cắt nhau tại trung điểm của mỗi đường; mà O là trung điểm AC nên O cũng là trung điểm EF, do đó E, O, F {k2}.',
        slots: [{ id: 'k2', expected: 'thẳng hàng', options: ['thẳng hàng', 'vuông góc', 'song song'] }]
      },
      {
        pointNum: 3,
        title: 'Ý c: Chứng minh OM = 1/2 MD và M là trung điểm DN',
        template: 'Trong tam giác ABD, AF và DO là hai đường trung tuyến cắt nhau tại M nên M là {k3} tam giác ABD; suy ra OM = 1/2 MD và DM = MN = NB, tức là M là {k4} của DN.',
        slots: [
          { id: 'k3', expected: 'trọng tâm', options: ['trọng tâm', 'trực tâm', 'giao điểm'] },
          { id: 'k4', expected: 'trung điểm', options: ['trung điểm', 'điểm chia ba', 'chân đường cao'] }
        ]
      }
    ],
    fullSolution: '• a) ABCD là hình bình hành => AB // CD và AB = CD. Ta có AE = 1/2 AB, CF = 1/2 CD => AE // CF và AE = CF => AECF là hình bình hành.<br>' +
      '• b) Trong hình bình hành AECF, hai đường chéo AC và EF cắt nhau tại trung điểm mỗi đường. Mà O là giao điểm hai đường chéo của ABCD => O là trung điểm AC => O cũng là trung điểm EF => E, O, F thẳng hàng.<br>' +
      '• c) Trong tam giác ABD, AO là trung tuyến (O là trung điểm BD) và DM cắt qua trung điểm E của AB => M là trọng tâm ΔABD => OM = 1/3 OD = 1/2 MD. Tương tự trong ΔBCD, N là trọng tâm => ON = 1/2 NB. Vì OD = OB => DM = MN = NB => M là trung điểm của DN.'
  },
  {
    id: 'math_d4_b5',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài V: Uốn dây thép 24m thành 2 hình)',
    questionText: 'Đề 4 - Bài V (0,5 điểm). Một sợi dây thép dài 24 m được cắt thành hai phần: một phần uốn thành hình chữ nhật có chiều dài hơn chiều rộng 2m; phần còn lại uốn thành hình vuông.<br>' +
      'Hỏi phải chia sợi dây như thế nào để tổng diện tích hai hình là nhỏ nhất và tính tổng diện tích nhỏ nhất đó.',
    options: [
      { text: 'Chia thành 12m (uốn hình chữ nhật) và 12m (uốn hình vuông);  Tổng diện tích nhỏ nhất = 17 m²', isCorrect: true },
      { text: 'Chia thành 16m và 8m;  Tổng diện tích nhỏ nhất = 20 m²', isCorrect: false },
      { text: 'Chia thành 10m và 14m;  Tổng diện tích nhỏ nhất = 18 m²', isCorrect: false },
      { text: 'Chia thành 14m và 10m;  Tổng diện tích nhỏ nhất = 16 m²', isCorrect: false }
    ],
    explanation: '• Gọi độ dài đoạn dây uốn thành hình chữ nhật là x (mét, 0 < x < 24) => đoạn uốn hình vuông là 24 - x (mét).<br>' +
      '• Chu vi hình chữ nhật là x => nửa chu vi là x/2.<br>' +
      'Chiều rộng hình chữ nhật = (x/2 - 2)/2 = x/4 - 1 (m); Chiều dài = x/4 + 1 (m).<br>' +
      '=> Diện tích hình chữ nhật S_hcn = (x/4 - 1)(x/4 + 1) = x²/16 - 1 (m²).<br>' +
      '• Chu vi hình vuông là 24 - x => Cạnh hình vuông = (24 - x)/4 => S_hv = (24 - x)²/16 = (x² - 48x + 576)/16.<br>' +
      '• Tổng diện tích S = S_hcn + S_hv = [x² - 16 + x² - 48x + 576]/16 = (2x² - 48x + 560)/16 = 1/8 (x² - 24x + 280)<br>' +
      '= 1/8 [(x - 12)² + 136] = 1/8(x - 12)² + 17 ≥ 17 m².<br>' +
      '• Dấu "=" xảy ra khi x = 12m (mỗi đoạn dài 12m).<br>' +
      'Khi đó hình chữ nhật có chu vi 12m (rộng 2m, dài 4m, S = 8 m²); hình vuông có cạnh 3m (S = 9 m²). Tổng diện tích nhỏ nhất là 8 + 9 = 17 m².'
  }
];
"""

with open('data/toan.js', 'w', encoding='utf-8') as f:
    f.write(math_code)

with open('public/data/toan.js', 'w', encoding='utf-8') as f:
    f.write(math_code)

print("Updated data/toan.js and public/data/toan.js successfully.")
