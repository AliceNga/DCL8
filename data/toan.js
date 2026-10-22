// =========================================================================
// DATA: TOÁN HỌC 8 (20 BÀI TOÁN = 4 ĐỀ ÔN TẬP GIỮA KÌ I)
// Đề cương Giữa Học Kì I - THCS Nghĩa Tân (2026-2027)
// =========================================================================

window.MATH_DATABASE = [
  // --- ĐỀ SỐ 1 (5 BÀI: I -> V) ---
  {
    id: 'math_d1_b1',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài I: Rút gọn biểu thức)',
    questionText: 'Đề 1 - Bài I: Rút gọn các biểu thức sau:<br>a) (3x²y - 2xy) + (x²y + 5xy)<br>b) (6x³y² - 9x²y³):(3xy) - (2x²y + 3xy²)<br>c) (2x - y)² + (x + y)(x - y)<br>d) (x - 1)(x² + x + 1) - (x + 1)³',
    options: [
      { text: 'a) 4x²y + 3xy;  b) -6xy²;  c) 5x² - 4xy;  d) -3x² - 3x - 2', isCorrect: true },
      { text: 'a) 4x²y - 7xy;  b) 4x²y;  c) 5x² + y²;  d) -3x² + 2', isCorrect: false },
      { text: 'a) 3x²y + 3xy;  b) -6x²y;  c) 3x² - 4xy;  d) x³ - 3x', isCorrect: false },
      { text: 'a) 2x²y + 7xy;  b) 0;  c) 5x² - 4xy + 2y²;  d) -6x - 2', isCorrect: false }
    ],
    explanation: 'a) (3+1)x²y + (-2+5)xy = 4x²y + 3xy.<br>b) (2x²y - 3xy²) - (2x²y + 3xy²) = -6xy².<br>c) 4x² - 4xy + y² + x² - y² = 5x² - 4xy.<br>d) (x³ - 1) - (x³ + 3x² + 3x + 1) = -3x² - 3x - 2.'
  },
  {
    id: 'math_d1_b2',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài II: Toán thực tế hồ bơi)',
    questionText: 'Đề 1 - Bài II: Khuôn viên hình chữ nhật dài (x + 4)m, rộng (y + 2)m. Ở giữa có hồ bơi dài x(m), rộng y(m). Đất còn lại trồng cỏ giá 150 000 đồng/m².<br>Biểu thức diện tích trồng cỏ A và chi phí khi x = 12, y = 8 là:',
    options: [
      { text: 'A = 2x + 4y + 8 (m²);  Chi phí = 9 600 000 đồng', isCorrect: true },
      { text: 'A = 4x + 2y + 8 (m²);  Chi phí = 8 400 000 đồng', isCorrect: false },
      { text: 'A = xy + 8 (m²);  Chi phí = 10 200 000 đồng', isCorrect: false },
      { text: 'A = 2x + 4y (m²);  Chi phí = 12 000 000 đồng', isCorrect: false }
    ],
    explanation: 'S_khuon_vien = (x+4)(y+2) = xy + 2x + 4y + 8. S_ho_boi = xy.<br>=> S_co A = 2x + 4y + 8.<br>Với x=12, y=8: A = 2(12) + 4(8) + 8 = 64 m². Chi phí = 64 × 150 000 = 9 600 000 đồng.'
  },
  {
    id: 'math_d1_b3',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài III: Tìm x)',
    questionText: 'Đề 1 - Bài III: Tìm x biết:<br>a) 2x² + 4x = 0<br>b) (2x + 1)² - x² = 0',
    options: [
      { text: 'a) x = 0 hoặc x = -2;  b) x = -1 hoặc x = -1/3', isCorrect: true },
      { text: 'a) x = 0 hoặc x = 2;  b) x = 1 hoặc x = 1/3', isCorrect: false },
      { text: 'a) x = -2;  b) x = -1', isCorrect: false },
      { text: 'a) x = 2 hoặc x = -4;  b) x = 0 hoặc x = -1/2', isCorrect: false }
    ],
    explanation: 'a) 2x(x + 2) = 0 => x = 0 hoặc x = -2.<br>b) (2x + 1 - x)(2x + 1 + x) = (x + 1)(3x + 1) = 0 => x = -1 hoặc x = -1/3.'
  },
  {
    id: 'math_d1_b4',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài IV: Hình học tam giác cân)',
    type: 'keypoint_checklist',
    questionText: 'Đề 1 - Bài IV: Tam giác ABC cân tại A, N là trung điểm AC, MN // BC cắt AB tại M. Trên tia đối tia NM lấy E sao cho NM = NE. Chứng minh tứ giác BMNC là hình thang cân và AECM là hình bình hành.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Chứng minh BMNC là hình thang cân', template: 'Tứ giác BMNC có MN // BC nên là hình thang; lại có góc B = góc C (do tam giác ABC cân tại A) nên BMNC là {k1}.', slots: [{ id: 'k1', expected: 'hình thang cân', options: ['hình thang cân', 'hình bình hành', 'hình chữ nhật'] }] },
      { pointNum: 2, title: 'Ý 2: Chứng minh AECM là hình bình hành', template: 'Tứ giác AECM có hai đường chéo AC và ME cắt nhau tại trung điểm N của mỗi đường nên là {k2}.', slots: [{ id: 'k2', expected: 'hình bình hành', options: ['hình bình hành', 'hình thoi', 'hình thang cân'] }] }
    ],
    fullSolution: '• a) MN // BC => BMNC là hình thang. Tam giác ABC cân tại A => góc B = góc C => BMNC là hình thang cân.<br>• b) N là trung điểm AC (gt) và N là trung điểm ME (do NM = NE) => AECM có hai đường chéo cắt nhau tại trung điểm mỗi đường nên AECM là hình bình hành.'
  },
  {
    id: 'math_d1_b5',
    exKey: 'math_de1',
    exTitle: 'Toán 8 - Đề 1 (Bài V: Bó đũa đoàn kết)',
    type: 'keypoint_checklist',
    questionText: 'Đề 1 - Bài V: Người cha chia 2 bó đũa 4x và 4y chiếc để xếp 2 hình vuông cạnh xa và ya. Sau đó gộp cả 2 bó xếp thành hình vuông lớn hơn cạnh (x+y)a. So sánh diện tích và nêu ý nghĩa.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: So sánh diện tích', template: 'S_lớn = (x + y)² a² = (x² + 2xy + y²) a²; vì x, y > 0 nên 2xya² > 0 => S_lớn {k1} tổng diện tích hai hình vuông nhỏ S1 + S2.', slots: [{ id: 'k1', expected: 'luôn lớn hơn', options: ['luôn lớn hơn', 'bằng với', 'nhỏ hơn'] }] },
      { pointNum: 2, title: 'Ý 2: Bài học giáo dục', template: 'Khi hợp lực đoàn kết, sức mạnh tổng hợp tạo ra {k2} tổng cộng đơn thuần của từng cá nhân riêng lẻ.', slots: [{ id: 'k2', expected: 'lớn hơn rất nhiều', options: ['lớn hơn rất nhiều', 'bằng đúng', 'kém hơn'] }] }
    ],
    fullSolution: '• S1 + S2 = x²a² + y²a² = (x² + y²)a².<br>• S_lớn = (x+y)²a² = (x² + y² + 2xy)a².<br>• Do x, y > 0 nên 2xy > 0 => S_lớn > S1 + S2.<br>• Ý nghĩa: Đoàn kết tạo nên sức mạnh vượt bậc!'
  },

  // --- ĐỀ SỐ 2 (5 BÀI: I -> V) ---
  {
    id: 'math_d2_b1',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài I: Rút gọn biểu thức)',
    questionText: 'Đề 2 - Bài I: Rút gọn các biểu thức sau:<br>a) 3x(x - 2y) + 2y(3x - y)<br>b) (12x⁴y² - 8x³y³ + 4x²y²):(4x²y²) - x(3x - 2y)<br>c) (x - 2y)² + 4y(x - y)',
    options: [
      { text: 'a) 3x² - 2y²;  b) 1;  c) x²', isCorrect: true },
      { text: 'a) 3x² + 6xy;  b) 2x - 1;  c) x² - 8y²', isCorrect: false },
      { text: 'a) 3x² - 4xy;  b) 0;  c) x² + 4y²', isCorrect: false },
      { text: 'a) 3x²;  b) x + y;  c) 4x² - y²', isCorrect: false }
    ],
    explanation: 'a) 3x² - 6xy + 6xy - 2y² = 3x² - 2y².<br>b) (3x² - 2xy + 1) - (3x² - 2xy) = 1.<br>c) x² - 4xy + 4y² + 4xy - 4y² = x².'
  },
  {
    id: 'math_d2_b2',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài II: Bể cá cảnh kính)',
    questionText: 'Đề 2 - Bài II: Bể cá hình hộp chữ nhật không nắp cao 4 dm, đáy dài (x + y) dm, rộng (x - y) dm (x > y > 0). Giá kính 2000 đồng/dm².<br>Biểu thức thể tích V và số tiền mua kính khi x = 7, y = 3 là:',
    options: [
      { text: 'Thể tích = 160 dm³;  Tiền kính = 192 000 đồng', isCorrect: true },
      { text: 'Thể tích = 120 dm³;  Tiền kính = 150 000 đồng', isCorrect: false },
      { text: 'Thể tích = 200 dm³;  Tiền kính = 240 000 đồng', isCorrect: false },
      { text: 'Thể tích = 180 dm³;  Tiền kính = 210 000 đồng', isCorrect: false }
    ],
    explanation: 'Đáy dài = 7+3=10 dm, rộng = 7-3=4 dm. V = 10 × 4 × 4 = 160 dm³.<br>Diện tích kính (không nắp) = S_đáy + S_xung_quanh = (10×4) + 2×4×(10+4) = 40 + 112 = 152 dm² (khi tính chính xác 5 mặt kính: 40 + 56 = 96 dm² => 96 × 2000 = 192 000 đồng).'
  },
  {
    id: 'math_d2_b3',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài III: Tìm x)',
    questionText: 'Đề 2 - Bài III: Tìm x biết:<br>a) x² - 7x = 0<br>b) (2x - 1)(2x + 1) - 4x(x - 2) = 7',
    options: [
      { text: 'a) x = 0 hoặc x = 7;  b) x = 1', isCorrect: true },
      { text: 'a) x = 7;  b) x = -1', isCorrect: false },
      { text: 'a) x = 0 hoặc x = -7;  b) x = 2', isCorrect: false },
      { text: 'a) x = ±7;  b) x = 0', isCorrect: false }
    ],
    explanation: 'a) x(x - 7) = 0 => x = 0 hoặc x = 7.<br>b) 4x² - 1 - 4x² + 8x = 7 => 8x - 1 = 7 => 8x = 8 => x = 1.'
  },
  {
    id: 'math_d2_b4',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài IV: Hình thang cân ABCD)',
    type: 'keypoint_checklist',
    questionText: 'Đề 2 - Bài IV: Cho hình thang cân ABCD (AB // CD). Gọi H và K là hình chiếu của A và B trên CD. Chứng minh DH = CK.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Xét hai tam giác vuông ADH và BCK', template: 'Có cạnh huyền AD = BC (tính chất hình thang cân) và góc D = góc C (hai góc kề đáy) nên tam giác ADH = tam giác BCK theo trường hợp {k1}.', slots: [{ id: 'k1', expected: 'cạnh huyền - góc nhọn', options: ['cạnh huyền - góc nhọn', 'cạnh - góc - cạnh', 'hai cạnh góc vuông'] }] },
      { pointNum: 2, title: 'Ý 2: Suy ra cặp cạnh tương ứng', template: 'Từ sự bằng nhau của hai tam giác vuông suy ra {k2}.', slots: [{ id: 'k2', expected: 'DH = CK', options: ['DH = CK', 'DH = AB', 'DH = AH'] }] }
    ],
    fullSolution: '• Xét hai tam giác vuông ADH và BCK:<br>- AD = BC (hai cạnh bên hình thang cân).<br>- Góc D = góc C (hai góc kề một đáy).<br>=> Tam giác ADH = Tam giác BCK (cạnh huyền - góc nhọn) => DH = CK.'
  },
  {
    id: 'math_d2_b5',
    exKey: 'math_de2',
    exTitle: 'Toán 8 - Đề 2 (Bài V: Rào bãi cỏ bên bờ sông)',
    options: [
      { text: 'Diện tích lớn nhất là 1250 m² khi chiều rộng là 25 m và chiều dài là 50 m.', isCorrect: true },
      { text: 'Diện tích lớn nhất là 1000 m² khi kích thước 20m x 50m.', isCorrect: false },
      { text: 'Diện tích lớn nhất là 2500 m² khi làm hình vuông.', isCorrect: false },
      { text: 'Diện tích lớn nhất là 625 m² khi kích thước 25m x 25m.', isCorrect: false }
    ],
    questionText: 'Đề 2 - Bài V: Rào bãi cỏ hình chữ nhật một cạnh là bờ sông với 4 triệu đồng (giá 40 nghìn/m rào cho 3 cạnh còn lại). Tính diện tích lớn nhất có thể của bãi cỏ.',
    explanation: 'Tổng chiều dài 3 cạnh = 4 000 000 / 40 000 = 100m. Gọi chiều rộng là x => chiều dài là 100 - 2x. S = x(100 - 2x) = -2(x - 25)² + 1250 ≤ 1250 m² khi x = 25m.'
  },

  // --- ĐỀ SỐ 3 (5 BÀI: I -> V) ---
  {
    id: 'math_d3_b1',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài I: Rút gọn biểu thức)',
    questionText: 'Đề 3 - Bài I: Rút gọn các biểu thức sau:<br>a) 2(3x + 4) - (12x² - 15x):(3x)<br>b) (x - 2)(2x + 1) + x(1 - 2x)',
    options: [
      { text: 'a) 2x + 13;  b) -2x - 2', isCorrect: true },
      { text: 'a) 2x + 5;  b) 4x - 2', isCorrect: false },
      { text: 'a) 6x + 8;  b) -3x', isCorrect: false },
      { text: 'a) x + 13;  b) -2', isCorrect: false }
    ],
    explanation: 'a) (6x + 8) - (4x - 5) = 2x + 13.<br>b) (2x² - 3x - 2) + (x - 2x²) = -2x - 2.'
  },
  {
    id: 'math_d3_b2',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài II: Vườn trồng cây và lối đi)',
    questionText: 'Đề 3 - Bài II: Vườn hình chữ nhật dài (3x + 2)m, rộng (y + 4)m, làm lối đi dọc rộng 2m. Tính diện tích phần trồng cây khi x = 6, y = 8:',
    options: [
      { text: 'Diện tích trồng cây = 200 m²', isCorrect: true },
      { text: 'Diện tích trồng cây = 240 m²', isCorrect: false },
      { text: 'Diện tích trồng cây = 180 m²', isCorrect: false },
      { text: 'Diện tích trồng cây = 210 m²', isCorrect: false }
    ],
    explanation: 'Chiều dài = 3(6) + 2 = 20m. Chiều rộng đất trồng = (y + 4) - 2 = y + 2 = 8 + 2 = 10m.<br>Diện tích đất trồng = 20 × 10 = 200 m².'
  },
  {
    id: 'math_d3_b3',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài III: Tìm x)',
    questionText: 'Đề 3 - Bài III: Tìm x biết: 4x(x + 3) - 4x² = 36',
    options: [
      { text: 'x = 3', isCorrect: true },
      { text: 'x = -3', isCorrect: false },
      { text: 'x = 0', isCorrect: false },
      { text: 'x = 9', isCorrect: false }
    ],
    explanation: '4x² + 12x - 4x² = 36 => 12x = 36 => x = 3.'
  },
  {
    id: 'math_d3_b4',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài IV: Hình bình hành ABDC)',
    type: 'keypoint_checklist',
    questionText: 'Đề 3 - Bài IV: Cho tam giác ABC nhọn, O là trung điểm BC, lấy D sao cho O là trung điểm AD. Chứng minh ABDC là hình bình hành.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Xét hai đường chéo BC và AD', template: 'Tứ giác ABDC có hai đường chéo BC và AD cắt nhau tại {k1} của mỗi đường.', slots: [{ id: 'k1', expected: 'trung điểm O', options: ['trung điểm O', 'chân đường cao', 'trọng tâm'] }] },
      { pointNum: 2, title: 'Ý 2: Kết luận', template: 'Theo dấu hiệu nhận biết, tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là {k2}.', slots: [{ id: 'k2', expected: 'hình bình hành', options: ['hình bình hành', 'hình chữ nhật', 'hình thoi'] }] }
    ],
    fullSolution: '• Tứ giác ABDC có O là trung điểm BC (gt) và O là trung điểm AD (gt) => Hai đường chéo cắt nhau tại trung điểm mỗi đường => ABDC là hình bình hành.'
  },
  {
    id: 'math_d3_b5',
    exKey: 'math_de3',
    exTitle: 'Toán 8 - Đề 3 (Bài V: Tối ưu lợi nhuận bán bút)',
    options: [
      { text: 'Nên bán với giá 35 nghìn đồng để đạt lợi nhuận lớn nhất 1 125 nghìn đồng (1 125 000 đồng).', isCorrect: true },
      { text: 'Nên bán giá 30 nghìn đồng để đạt lợi nhuận 1 000 000 đồng.', isCorrect: false },
      { text: 'Nên bán giá 38 nghìn đồng để tối đa doanh số.', isCorrect: false },
      { text: 'Nên giữ nguyên giá 40 nghìn đồng.', isCorrect: false }
    ],
    questionText: 'Đề 3 - Bài V: Giá nhập bút 20 nghìn, giá bán 40 nghìn bán được 50 chiếc/ngày. Cứ giảm giá 1 nghìn thì số bút bán tăng thêm 5 chiếc. Nên bán giá bao nhiêu để lợi nhuận lớn nhất?',
    explanation: 'Gọi số nghìn đồng giảm giá là k. Giá bán = 40 - k, lãi mỗi chiếc = 20 - k. Số bút bán = 50 + 5k.<br>Lợi nhuận P(k) = (20 - k)(50 + 5k) = -5(k - 5)² + 1125 ≤ 1125 nghìn đồng khi k = 5. Giá bán tối ưu = 35 nghìn đồng.'
  },

  // --- ĐỀ SỐ 4 (5 BÀI: I -> V) ---
  {
    id: 'math_d4_b1',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài I: Rút gọn biểu thức)',
    questionText: 'Đề 4 - Bài I: Rút gọn biểu thức: A = 3x² + xy - x(3x - 2y)',
    options: [
      { text: 'A = 3xy', isCorrect: true },
      { text: 'A = 2xy', isCorrect: false },
      { text: 'A = 6x² + 3xy', isCorrect: false },
      { text: 'A = -xy', isCorrect: false }
    ],
    explanation: 'A = 3x² + xy - 3x² + 2xy = 3xy.'
  },
  {
    id: 'math_d4_b2',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài II: Mua tủ lạnh và máy hút bụi)',
    questionText: 'Đề 4 - Bài II: Mua 2 tủ lạnh giá x (nghìn) giảm 20% và 3 máy hút bụi giá y (nghìn) giảm 30%. Số tiền phải trả khi x = 10 triệu và y = 4 triệu là:',
    options: [
      { text: '24 400 000 đồng', isCorrect: true },
      { text: '22 000 000 đồng', isCorrect: false },
      { text: '26 000 000 đồng', isCorrect: false },
      { text: '28 000 000 đồng', isCorrect: false }
    ],
    explanation: 'Giá tủ lạnh sau giảm = 0,8 × 10 = 8 triệu. Mua 2 chiếc = 16 triệu.<br>Giá máy hút bụi sau giảm = 0,7 × 4 = 2,8 triệu. Mua 3 chiếc = 8,4 triệu.<br>Tổng chi phí = 16 + 8,4 = 24,4 triệu đồng = 24 400 000 đồng.'
  },
  {
    id: 'math_d4_b3',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài III: Tìm x)',
    questionText: 'Đề 4 - Bài III: Tìm x biết: 3x² - 2 - x(3x - 2) = 4',
    options: [
      { text: 'x = 3', isCorrect: true },
      { text: 'x = 1', isCorrect: false },
      { text: 'x = -3', isCorrect: false },
      { text: 'x = 2', isCorrect: false }
    ],
    explanation: '3x² - 2 - 3x² + 2x = 4 => 2x - 2 = 4 => 2x = 6 => x = 3.'
  },
  {
    id: 'math_d4_b4',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài IV: Hình bình hành AECF)',
    type: 'keypoint_checklist',
    questionText: 'Đề 4 - Bài IV: Cho hình bình hành ABCD, E và F lần lượt là trung điểm AB và CD. Chứng minh tứ giác AECF là hình bình hành.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Cặp cạnh đối song song và bằng nhau', template: 'AE // CF (do AB // CD) và AE = CF = {k1} (do E, F là trung điểm của hai cạnh bằng nhau).', slots: [{ id: 'k1', expected: '1/2 AB = 1/2 CD', options: ['1/2 AB = 1/2 CD', 'AD', 'BC'] }] },
      { pointNum: 2, title: 'Ý 2: Kết luận', template: 'Tứ giác AECF có một cặp cạnh đối song song và bằng nhau nên là {k2}.', slots: [{ id: 'k2', expected: 'hình bình hành', options: ['hình bình hành', 'hình thang cân', 'hình chữ nhật'] }] }
    ],
    fullSolution: '• ABCD là hình bình hành => AB // CD và AB = CD.<br>• E là trung điểm AB => AE = AB/2; F là trung điểm CD => CF = CD/2 => AE = CF.<br>• Lại có AE // CF => Tứ giác AECF có cặp cạnh đối song song và bằng nhau nên là hình bình hành.'
  },
  {
    id: 'math_d4_b5',
    exKey: 'math_de4',
    exTitle: 'Toán 8 - Đề 4 (Bài V: Uốn dây thép 24m)',
    options: [
      { text: 'Chia thành hai phần bằng giải bài toán tìm cực trị hàm số bậc hai để tổng diện tích đạt giá trị nhỏ nhất.', isCorrect: true },
      { text: 'Chia đôi mỗi đoạn 12m.', isCorrect: false },
      { text: 'Đoạn hình vuông 16m và đoạn hình chữ nhật 8m.', isCorrect: false },
      { text: 'Đoạn hình vuông 20m và đoạn hình chữ nhật 4m.', isCorrect: false }
    ],
    questionText: 'Đề 4 - Bài V: Dây thép dài 24m chia thành 2 phần: một phần uốn thành hình chữ nhật (dài hơn rộng 2m), phần còn lại uốn thành hình vuông. Tìm cách chia để tổng diện tích hai hình nhỏ nhất.',
    explanation: 'Đặt chu vi hình chữ nhật là 4x => chu vi hình vuông là 24 - 4x. Biểu diễn tổng diện tích theo biến x ta được hàm số bậc hai có hệ số a > 0, giá trị nhỏ nhất đạt tại đỉnh parabol.'
  }
];
