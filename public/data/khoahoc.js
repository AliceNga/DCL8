// =========================================================================
// DATA: KHOA HỌC TỰ NHIÊN 8 (38 CÂU = 25 TRẮC NGHIỆM + 13 TỰ LUẬN)
// Đề cương Giữa Học Kì I - THCS Nghĩa Tân (2026-2027)
// =========================================================================

window.SCIENCE_DATABASE = [
  // --- PHẦN 1: 25 CÂU TRẮC NGHIỆM (LÝ - HÓA - SINH) ---
  // A. VẬT LÍ (7 CÂU TN)
  {
    id: 'sci_mc_1',
    exKey: 'sci_phy_mc',
    exTitle: 'KHTN 8 - Vật Lí (Trắc nghiệm)',
    questionText: 'Phần A - Câu 1. Gọi D là khối lượng riêng và d là trọng lượng riêng. Công thức liên hệ giữa D và d là:',
    options: [
      { text: 'd = 10D.', isCorrect: true },
      { text: 'D = 10d.', isCorrect: false },
      { text: 'D = 10/d.', isCorrect: false },
      { text: 'd = D – 10.', isCorrect: false }
    ],
    explanation: 'Trọng lượng P = 10m, chia cả 2 vế cho thể tích V ta được d = 10D (trong đó d tính bằng N/m³, D tính bằng kg/m³).'
  },
  {
    id: 'sci_mc_2',
    exKey: 'sci_phy_mc',
    exTitle: 'KHTN 8 - Vật Lí (Trắc nghiệm)',
    questionText: 'Phần A - Câu 2. Để xác định khối lượng riêng viên sỏi cần dùng:',
    visualComponent: `
      <div class="my-3 p-3 bg-sky-50/70 border border-sky-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 320 130" class="w-80 h-32 max-w-full">
          <!-- Bình 1: Nước ban đầu V1 = 50 ml -->
          <g transform="translate(40, 10)">
            <rect x="10" y="10" width="40" height="90" rx="4" fill="#f8fafc" stroke="#0284c7" stroke-width="1.5"/>
            <rect x="11" y="55" width="38" height="44" fill="#bae6fd" opacity="0.8"/>
            <!-- Vạch chia -->
            <line x1="10" y1="35" x2="20" y2="35" stroke="#0284c7" stroke-width="1"/>
            <text x="5" y="38" font-size="7" fill="#0369a1" text-anchor="end">80</text>
            <line x1="10" y1="55" x2="25" y2="55" stroke="#0284c7" stroke-width="1.5"/>
            <text x="5" y="58" font-size="8" font-weight="bold" fill="#0284c7" text-anchor="end">50</text>
            <line x1="10" y1="75" x2="20" y2="75" stroke="#0284c7" stroke-width="1"/>
            <text x="5" y="78" font-size="7" fill="#0369a1" text-anchor="end">20</text>
            <text x="30" y="112" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">V₁ = 50 ml</text>
          </g>

          <text x="140" y="65" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">+</text>
          <ellipse cx="140" cy="80" rx="9" ry="7" fill="#64748b" stroke="#334155" stroke-width="1"/>
          <text x="140" y="98" font-size="8" font-weight="bold" fill="#475569" text-anchor="middle">Sỏi (m)</text>

          <text x="175" y="65" font-size="16" font-weight="bold" fill="#0284c7" text-anchor="middle">→</text>

          <!-- Bình 2: Nước dâng lên V2 = 70 ml -->
          <g transform="translate(205, 10)">
            <rect x="10" y="10" width="40" height="90" rx="4" fill="#f8fafc" stroke="#0284c7" stroke-width="1.5"/>
            <rect x="11" y="40" width="38" height="59" fill="#7dd3fc" opacity="0.9"/>
            <!-- Viên sỏi chìm ở đáy -->
            <ellipse cx="30" cy="88" rx="10" ry="7" fill="#64748b" stroke="#334155" stroke-width="1.2"/>
            <!-- Vạch chia -->
            <line x1="10" y1="40" x2="25" y2="40" stroke="#0284c7" stroke-width="1.5"/>
            <text x="5" y="43" font-size="8" font-weight="bold" fill="#0284c7" text-anchor="end">70</text>
            <line x1="10" y1="55" x2="20" y2="55" stroke="#0284c7" stroke-width="1"/>
            <line x1="10" y1="75" x2="20" y2="75" stroke="#0284c7" stroke-width="1"/>
            <text x="30" y="112" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">V₂ = 70 ml</text>
          </g>
        </svg>
        <span class="text-[11px] text-sky-900 font-bold mt-1">Cân đo khối lượng $m$ • Bình chia độ đo thể tích $V = V_2 - V_1 = 20\\text{ ml}$</span>
      </div>
    `,
    options: [
      { text: 'một cái cân.', isCorrect: false },
      { text: 'một cái cân và bình chia độ.', isCorrect: true },
      { text: 'bình chia độ.', isCorrect: false },
      { text: 'một cái thước và bình chia độ.', isCorrect: false }
    ],
    explanation: 'Dùng cân để đo khối lượng m, dùng bình chia độ đo thể tích V (bằng lượng nước dâng lên V = V₂ - V₁), từ đó tính D = m/V.'
  },
  {
    id: 'sci_mc_3',
    exKey: 'sci_phy_mc',
    exTitle: 'KHTN 8 - Vật Lí (Trắc nghiệm)',
    questionText: 'Phần A - Câu 3. Đơn vị thường dùng để đo khối lượng riêng là:',
    options: [
      { text: 'N/m³.', isCorrect: false },
      { text: 'g/cm³ (hoặc kg/m³).', isCorrect: true },
      { text: 'kg/m².', isCorrect: false },
      { text: 'ml/kg.', isCorrect: false }
    ],
    explanation: 'Đơn vị SI của khối lượng riêng là kg/m³, ngoài ra thường dùng đơn vị g/cm³ (1 g/cm³ = 1000 kg/m³).'
  },
  {
    id: 'sci_mc_4',
    exKey: 'sci_phy_mc',
    exTitle: 'KHTN 8 - Vật Lí (Trắc nghiệm)',
    questionText: 'Phần A - Câu 4. Khối lượng riêng của xăng là 700 kg/m³. Vậy trọng lượng riêng của xăng là:',
    options: [
      { text: '7 N/m³.', isCorrect: false },
      { text: '70 N/m³.', isCorrect: false },
      { text: '700 N/m³.', isCorrect: false },
      { text: '7000 N/m³.', isCorrect: true }
    ],
    explanation: 'Áp dụng công thức d = 10D = 10 × 700 = 7000 N/m³.'
  },
  {
    id: 'sci_mc_5',
    exKey: 'sci_phy_mc',
    exTitle: 'KHTN 8 - Vật Lí (Trắc nghiệm)',
    questionText: 'Phần A - Câu 5. Cho D của nhôm (2700), sắt (7800), chì (11300), đá (2600 kg/m³). Một khối đồng chất thể tích 300 cm³ nặng 810 g. Đó là khối gì?',
    options: [
      { text: 'nhôm.', isCorrect: true },
      { text: 'sắt.', isCorrect: false },
      { text: 'chì.', isCorrect: false },
      { text: 'đá.', isCorrect: false }
    ],
    explanation: 'D = m/V = 810g / 300cm³ = 2,7 g/cm³ = 2700 kg/m³. Đối chiếu bảng số liệu, đây chính là khối nhôm.'
  },
  {
    id: 'sci_mc_6',
    exKey: 'sci_phy_mc',
    exTitle: 'KHTN 8 - Vật Lí (Trắc nghiệm)',
    questionText: 'Phần A - Câu 6. Tác dụng lực F lên diện tích mặt bị ép S. Nếu tăng lực F lên 3 lần và giữ nguyên diện tích S thì:',
    options: [
      { text: 'diện tích mặt bị ép tăng 3 lần.', isCorrect: false },
      { text: 'áp suất tăng 3 lần.', isCorrect: true },
      { text: 'áp suất giảm 3 lần.', isCorrect: false },
      { text: 'áp suất không thay đổi.', isCorrect: false }
    ],
    explanation: 'Áp suất p = F/S. Khi F tăng 3 lần, S không đổi thì p tỉ lệ thuận với F nên áp suất tăng 3 lần.'
  },
  {
    id: 'sci_mc_7',
    exKey: 'sci_phy_mc',
    exTitle: 'KHTN 8 - Vật Lí (Trắc nghiệm)',
    questionText: 'Phần A - Câu 7. Bạn Minh khối lượng 50 kg, diện tích một bàn chân là 25 cm². Áp suất Minh tác dụng lên sàn khi đứng cả hai chân là:',
    options: [
      { text: '1 Pa.', isCorrect: false },
      { text: '2 Pa.', isCorrect: false },
      { text: '10 Pa.', isCorrect: false },
      { text: '100 000 Pa.', isCorrect: true }
    ],
    explanation: 'F = 10m = 500 N. Đứng cả hai chân: S = 2 × 25 cm² = 50 cm² = 0,005 m². Áp suất p = F/S = 500 / 0,005 = 100 000 Pa.'
  },

  // B. HÓA HỌC (7 CÂU TN)
  {
    id: 'sci_mc_8',
    exKey: 'sci_chem_mc',
    exTitle: 'KHTN 8 - Hóa Học (Trắc nghiệm)',
    questionText: 'Phần B - Câu 1. Phản ứng hoá học là gì?',
    options: [
      { text: 'quá trình kết hợp các đơn chất thành hợp chất.', isCorrect: false },
      { text: 'quá trình biến đổi chất này thành chất khác.', isCorrect: true },
      { text: 'sự trao đổi của hai hay nhiều chất ban đầu để tạo chất mới.', isCorrect: false },
      { text: 'là quá trình phân hủy chất ban đầu thành nhiều chất.', isCorrect: false }
    ],
    explanation: 'Định nghĩa: Phản ứng hóa học là quá trình biến đổi từ chất này (chất tham gia) thành chất khác (sản phẩm).'
  },
  {
    id: 'sci_mc_9',
    exKey: 'sci_chem_mc',
    exTitle: 'KHTN 8 - Hóa Học (Trắc nghiệm)',
    questionText: 'Phần B - Câu 2. Quá trình nào sau đây xảy ra sự biến đổi hoá học?',
    options: [
      { text: 'Khi mở nút chai nước giải khát loại có ga thấy bọt sủi lên.', isCorrect: false },
      { text: 'Nhỏ vài giọt mực vào cốc nước và khuấy đều thấy mực loang ra cả cốc nước.', isCorrect: false },
      { text: 'Trứng gà để lâu ngày bị hỏng, có mùi khó chịu.', isCorrect: true },
      { text: 'Dây tóc bóng trong bóng đèn điện nóng và sáng lên khi có dòng điện chạy qua.', isCorrect: false }
    ],
    explanation: 'Trứng hỏng là do protein bị phân hủy bởi vi khuẩn tạo ra các chất mới có mùi thối (H₂S) -> biến đổi hóa học.'
  },
  {
    id: 'sci_mc_10',
    exKey: 'sci_chem_mc',
    exTitle: 'KHTN 8 - Hóa Học (Trắc nghiệm)',
    questionText: 'Phần B - Câu 3. Trong các hiện tượng: (1) Thức ăn ôi thiu; (2) Đun đường chuyển đen; (3) Bóng bay nổ; (4) Cháy rừng; (5) Băng tan. Các biến đổi hóa học là:',
    options: [
      { text: '(1), (2), (3), (4).', isCorrect: false },
      { text: '(1), (2), (4), (5).', isCorrect: false },
      { text: '(1), (2), (4).', isCorrect: true },
      { text: '(1), (4), (5).', isCorrect: false }
    ],
    explanation: '(1) Thức ăn thiu, (2) Đường cháy khét, (4) Cháy rừng là biến đổi hóa học tạo chất mới. (3) và (5) chỉ là biến đổi vật lí cơ học và trạng thái.'
  },
  {
    id: 'sci_mc_11',
    exKey: 'sci_chem_mc',
    exTitle: 'KHTN 8 - Hóa Học (Trắc nghiệm)',
    questionText: 'Phần B - Câu 4. Trong một phản ứng hoá học, yếu tố nào luôn luôn được bảo toàn?',
    options: [
      { text: 'số nguyên tử của mỗi nguyên tố được bảo toàn.', isCorrect: true },
      { text: 'số chất không đổi.', isCorrect: false },
      { text: 'số nguyên tử trong mỗi chất được bảo toàn.', isCorrect: false },
      { text: 'số phân tử của mỗi chất không đổi.', isCorrect: false }
    ],
    explanation: 'Theo định luật bảo toàn khối lượng: Chỉ có liên kết giữa các nguyên tử thay đổi, còn tổng số nguyên tử của mỗi nguyên tố được bảo toàn tuyệt đối.'
  },
  {
    id: 'sci_mc_12',
    exKey: 'sci_chem_mc',
    exTitle: 'KHTN 8 - Hóa Học (Trắc nghiệm)',
    questionText: 'Phần B - Câu 5. Phản ứng phân huỷ Cu(OH)₂ cần đun nóng liên tục, ngừng cung cấp nhiệt thì phản ứng dừng lại. Đây là phản ứng:',
    options: [
      { text: 'phản ứng toả nhiệt.', isCorrect: false },
      { text: 'phản ứng thu nhiệt.', isCorrect: true },
      { text: 'phản ứng trao đổi.', isCorrect: false },
      { text: 'phản ứng quang hóa.', isCorrect: false }
    ],
    explanation: 'Phản ứng hấp thụ năng lượng nhiệt từ môi trường trong suốt quá trình xảy ra gọi là phản ứng thu nhiệt.'
  },
  {
    id: 'sci_mc_13',
    exKey: 'sci_chem_mc',
    exTitle: 'KHTN 8 - Hóa Học (Trắc nghiệm)',
    questionText: 'Phần B - Câu 6. Khi đốt cháy carbon trong oxygen tạo thành carbon dioxide. Trong phản ứng này, carbon dioxide là:',
    options: [
      { text: 'chất tham gia.', isCorrect: false },
      { text: 'chất xúc tác.', isCorrect: false },
      { text: 'sản phẩm.', isCorrect: true },
      { text: 'dung môi.', isCorrect: false }
    ],
    explanation: 'Chất sinh ra sau phản ứng (C + O₂ -> CO₂) là sản phẩm.'
  },
  {
    id: 'sci_mc_14',
    exKey: 'sci_chem_mc',
    exTitle: 'KHTN 8 - Hóa Học (Trắc nghiệm)',
    questionText: 'Phần B - Câu 7. Trong phản ứng tổng hợp ammonia từ nitrogen và hydrogen, dùng bột sắt làm xúc tác. Các chất tham gia phản ứng là:',
    options: [
      { text: 'ammonia.', isCorrect: false },
      { text: 'nitrogen và hydrogen.', isCorrect: true },
      { text: 'hydrogen và sắt.', isCorrect: false },
      { text: 'sắt (iron).', isCorrect: false }
    ],
    explanation: 'Chất tham gia phản ứng là nitrogen và hydrogen (N₂ + 3H₂ -> 2NH₃); sắt chỉ đóng vai trò chất xúc tác.'
  },
  {
    id: 'sci_mc_14b',
    exKey: 'sci_chem_mc',
    exTitle: 'KHTN 8 - Hóa Học (Trắc nghiệm)',
    questionText: 'Phần B - Câu 8. Isoamyl acetate (C₇H₁₄O₂) là hợp chất tạo ra mùi thơm của quả chuối chín. Điều thú vị là ong có thể tiết ra hợp chất này khi chúng đốt các sinh vật, mùi hương sẽ thu hút những con ong khác tham gia cuộc tấn công. Giả sử khi ong đốt nó tiết ra 1 μg (bằng 1 × 10⁻⁶ gam) isoamyl acetate, hãy xác định trong một vết ong đốt có bao nhiêu phân tử isoamyl acetate được giải phóng?<br><i>(Cho H = 1, C = 12, O = 16)</i>',
    options: [
      { text: 'A. 4,63 · 10¹⁵.', isCorrect: true },
      { text: 'B. 4,63 · 10²¹.', isCorrect: false },
      { text: 'C. 2,32 · 10¹⁵.', isCorrect: false },
      { text: 'D. 3,2 · 10¹⁶.', isCorrect: false }
    ],
    explanation: '• Khối lượng mol của Isoamyl acetate C₇H₁₄O₂: M = 7 × 12 + 14 × 1 + 2 × 16 = 130 (g/mol).<br>• Khối lượng m = 1 μg = 1 × 10⁻⁶ g.<br>• Số mol n = m / M = (1 × 10⁻⁶) / 130 ≈ 7,6923 × 10⁻⁹ mol.<br>• Số phân tử = n × N_A = 7,6923 × 10⁻⁹ × 6,022 × 10²³ ≈ <strong>4,63 · 10¹⁵ phân tử</strong>. Đáp án đúng là A.'
  },

  // C. SINH HỌC (11 CÂU TN)
  {
    id: 'sci_mc_15',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 1. Cơ thể người được chia làm mấy phần chính?',
    options: [
      { text: '2 phần: Đầu và thân.', isCorrect: false },
      { text: '3 phần: Đầu, thân và các chi (hai tay, hai chân).', isCorrect: true },
      { text: '4 phần: Đầu, cổ, thân và tay.', isCorrect: false },
      { text: '5 phần: Đầu, cổ, thân, hai tay và hai chân.', isCorrect: false }
    ],
    explanation: 'Theo SGK KHTN 8: Cơ thể người chia làm 3 phần chính gồm: đầu, thân và các chi (tay và chân).'
  },
  {
    id: 'sci_mc_16',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 2. Hệ cơ quan nào dưới đây có vai trò vận chuyển chất dinh dưỡng, oxygen và hormone đến các tế bào?',
    options: [
      { text: 'Hệ hô hấp.', isCorrect: false },
      { text: 'Hệ tiêu hóa.', isCorrect: false },
      { text: 'Hệ tuần hoàn.', isCorrect: true },
      { text: 'Hệ bài tiết.', isCorrect: false }
    ],
    explanation: 'Hệ tuần hoàn (tim và hệ mạch) là hệ thống vận chuyển máu đưa chất dinh dưỡng, O₂, hormone đến tế bào và mang chất thải đến cơ quan bài tiết.'
  },
  {
    id: 'sci_mc_17',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 3. Hệ cơ quan nào có chức năng giúp cơ thể lấy khí oxygen từ môi trường ngoài và thải khí carbon dioxide ra khỏi cơ thể?',
    options: [
      { text: 'Hệ hô hấp.', isCorrect: true },
      { text: 'Hệ bài tiết.', isCorrect: false },
      { text: 'Hệ tuần hoàn.', isCorrect: false },
      { text: 'Hệ vận động.', isCorrect: false }
    ],
    explanation: 'Hệ hô hấp (đường dẫn khí và phổi) thực hiện trao đổi khí giữa cơ thể với môi trường.'
  },
  {
    id: 'sci_mc_18',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 4. Dinh dưỡng là gì?',
    options: [
      { text: 'Quá trình thu nhận, biến đổi và sử dụng chất dinh dưỡng để duy trì sự sống của cơ thể.', isCorrect: true },
      { text: 'Quá trình phân giải các chất hữu cơ giải phóng năng lượng cho tế bào.', isCorrect: false },
      { text: 'Quá trình đào thải các chất độc hại ra khỏi cơ thể.', isCorrect: false },
      { text: 'Lượng thức ăn cơ thể tiêu thụ trong một bữa ăn.', isCorrect: false }
    ],
    explanation: 'Khái niệm dinh dưỡng: Là toàn bộ quá trình thu nhận, biến đổi và sử dụng các chất dinh dưỡng để cung cấp năng lượng và nuôi dưỡng cơ thể.'
  },
  {
    id: 'sci_mc_19',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 5. Thức ăn khi đi qua ống tiêu hóa KHÔNG trực tiếp đi qua cơ quan nào sau đây?',
    options: [
      { text: 'Dạ dày.', isCorrect: false },
      { text: 'Ruột non.', isCorrect: false },
      { text: 'Gan.', isCorrect: true },
      { text: 'Thực quản.', isCorrect: false }
    ],
    explanation: 'Thức ăn đi qua ống tiêu hóa: Khoang miệng -> Thực quản -> Dạ dày -> Ruột non -> Ruột già -> Hậu môn. Gan và tụy là tuyến tiêu hóa tiết dịch chứ thức ăn không đi qua.'
  },
  {
    id: 'sci_mc_20',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 6. Ở khoang miệng, enzyme amylase trong nước bọt có chức năng biến đổi loại thức ăn nào?',
    options: [
      { text: 'Biến đổi protein thành các chuỗi peptide ngắn.', isCorrect: false },
      { text: 'Biến đổi tinh bột chín thành đường maltose.', isCorrect: true },
      { text: 'Biến đổi lipid thành acid béo và glycerol.', isCorrect: false },
      { text: 'Biến đổi tất cả các loại chất dinh dưỡng.', isCorrect: false }
    ],
    explanation: 'Enzyme amylase trong nước bọt chỉ có tác dụng thủy phân tinh bột chín thành đường maltose.'
  },
  {
    id: 'sci_mc_21',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 7. Cơ quan nào trong hệ tiêu hóa đảm nhận chức năng hấp thụ phần lớn các chất dinh dưỡng cho cơ thể?',
    options: [
      { text: 'Dạ dày.', isCorrect: false },
      { text: 'Khoang miệng.', isCorrect: false },
      { text: 'Ruột non.', isCorrect: true },
      { text: 'Ruột già.', isCorrect: false }
    ],
    explanation: 'Ruột non có diện tích bề mặt hấp thụ khổng lồ nhờ các nếp gấp, lông ruột và mạng lưới mao mạch dày đặc, hấp thụ trên 90% chất dinh dưỡng.'
  },
  {
    id: 'sci_mc_22',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 8. Lượng thức ăn cần cung cấp cho cơ thể trong một ngày được gọi là gì?',
    options: [
      { text: 'Chế độ dinh dưỡng.', isCorrect: false },
      { text: 'Nhu cầu dinh dưỡng.', isCorrect: false },
      { text: 'Khẩu phần ăn.', isCorrect: true },
      { text: 'Giá trị dinh dưỡng.', isCorrect: false }
    ],
    explanation: 'Khẩu phần ăn là lượng thức ăn cung cấp cho một người trong vòng một ngày (24 giờ).'
  },
  {
    id: 'sci_mc_23',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 9. Biện pháp nào dưới đây KHÔNG có tác dụng phòng ngừa các bệnh về đường tiêu hóa?',
    options: [
      { text: 'Ăn uống hợp vệ sinh và rửa tay trước khi ăn.', isCorrect: false },
      { text: 'Ăn ít chất xơ và uống ít nước.', isCorrect: true },
      { text: 'Vệ sinh răng miệng đúng cách sau khi ăn.', isCorrect: false },
      { text: 'Tăng cường luyện tập thể dục thể thao phù hợp.', isCorrect: false }
    ],
    explanation: 'Ăn ít chất xơ và uống ít nước sẽ gây táo bón và rối loạn tiêu hóa, không phải biện pháp phòng bệnh.'
  },
  {
    id: 'sci_mc_24',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 10. Thành phần cấu tạo của máu gồm có:',
    options: [
      { text: 'Hồng cầu, bạch cầu và tiểu cầu.', isCorrect: false },
      { text: 'Huyết tương và các tế bào máu.', isCorrect: true },
      { text: 'Huyết tương và hồng cầu.', isCorrect: false },
      { text: 'Bạch cầu và tiểu cầu.', isCorrect: false }
    ],
    explanation: 'Máu gồm 2 phần chính: Huyết tương (chiếm khoảng 55% thể tích) và các tế bào máu gồm hồng cầu, bạch cầu, tiểu cầu (chiếm 45%).'
  },
  {
    id: 'sci_mc_25',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 11. Loại tế bào máu nào làm nhiệm vụ chủ yếu vận chuyển khí oxygen và carbon dioxide?',
    options: [
      { text: 'Bạch cầu.', isCorrect: false },
      { text: 'Tiểu cầu.', isCorrect: false },
      { text: 'Huyết tương.', isCorrect: false },
      { text: 'Hồng cầu.', isCorrect: true }
    ],
    explanation: 'Hồng cầu chứa huyết sắc tố hemoglobin (Hb) có khả năng kết hợp thuận nghịch với O₂ và CO₂ để vận chuyển khí đi khắp cơ thể. Đáp án đúng: D (Hồng cầu).'
  },
  {
    id: 'sci_mc_26',
    exKey: 'sci_bio_mc',
    exTitle: 'KHTN 8 - Sinh Học (Trắc nghiệm)',
    questionText: 'Phần C - Câu 12. Loại tế bào máu nào đóng vai trò then chốt trong quá trình đông máu và bảo vệ cơ thể khỏi mất máu?',
    options: [
      { text: 'Tiểu cầu.', isCorrect: true },
      { text: 'Bạch cầu.', isCorrect: false },
      { text: 'Hồng cầu.', isCorrect: false },
      { text: 'Kháng thể.', isCorrect: false }
    ],
    explanation: 'Khi mạch máu bị tổn thương, tiểu cầu vỡ ra giải phóng enzyme khởi động tạo thành mạng lưới tơ máu làm đông máu. Đáp án đúng: A (Tiểu cầu).'
  },

  // --- PHẦN 2: 13 CÂU TỰ LUẬN (CHUYỂN THÀNH KEYPOINT CHECKLIST) ---
  // A. VẬT LÍ (5 CÂU TỰ LUẬN: Q8, Q9, Q10, Q11, Q12)
  {
    id: 'sci_essay_1',
    exKey: 'sci_phy_essay',
    exTitle: 'KHTN 8 - Vật Lí (Tự luận - Câu 8)',
    type: 'keypoint_checklist',
    questionText: 'Phần A - Câu 8. Tính khối lượng và trọng lượng của một chiếc dầm sắt có thể tích 50 dm³. Biết khối lượng riêng của sắt là 7800 kg/m³.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Đổi đơn vị và tính khối lượng m', template: 'V = 50 dm³ = {k1} m³. Khối lượng m = D × V = 7800 × 0,05 = {k2} kg.', slots: [{ id: 'k1', expected: '0,05', options: ['0,05', '0,5', '5'] }, { id: 'k2', expected: '390', options: ['390', '3900', '156'] }] },
      { pointNum: 2, title: 'Ý 2: Tính trọng lượng P', template: 'Trọng lượng P = 10 × m = 10 × 390 = {k3} N.', slots: [{ id: 'k3', expected: '3900', options: ['3900', '390', '7800'] }] }
    ],
    fullSolution: '• V = 50 dm³ = 0,05 m³.<br>• Khối lượng: m = D × V = 7800 × 0,05 = 390 kg.<br>• Trọng lượng: P = 10m = 3900 N.'
  },
  {
    id: 'sci_essay_2',
    exKey: 'sci_phy_essay',
    exTitle: 'KHTN 8 - Vật Lí (Tự luận - Câu 9 đầy đủ 4 ý)',
    type: 'keypoint_checklist',
    questionText: 'Phần A - Câu 9. Minh dùng cốc đong có chia vạch và cân điện tử để đo khối lượng riêng của nước: cân cốc rỗng m₁ = 120g, rót V = 200 cm³ nước, cân lại m₂ = 322g.<br>' +
      'a) Tính khối lượng phần nước đã rót vào cốc;<br>' +
      'b) Tính khối lượng riêng của nước theo đơn vị g/cm³ và kg/m³;<br>' +
      'c) Dựa vào số liệu Minh đọc được, hãy dự đoán độ chia nhỏ nhất (ĐCNN) của cốc đong;<br>' +
      'd) Dựa vào kết quả thực hành, hãy ước tính khối lượng của 1 m³ nước theo đơn vị kg.',
    totalPoints: 4,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý a: Tính khối lượng nước rót vào cốc',
        template: 'Khối lượng nước là m = m₂ - m₁ = 322 - 120 = {k1} g.',
        slots: [{ id: 'k1', expected: '202', options: ['202', '322', '120'] }]
      },
      {
        pointNum: 2,
        title: 'Ý b: Tính khối lượng riêng của nước',
        template: 'Khối lượng riêng D = m / V = 202 / 200 = {k2} g/cm³ = {k3} kg/m³.',
        slots: [
          { id: 'k2', expected: '1,01', options: ['1,01', '1,00', '0,99'] },
          { id: 'k3', expected: '1010', options: ['1010', '1000', '1020'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý c: Dự đoán ĐCNN của cốc đong',
        template: 'Vì thể tích đọc được là 200 cm³ nên ĐCNN của cốc đong có thể là {k4}.',
        slots: [{ id: 'k4', expected: '5 cm³ hoặc 10 cm³', options: ['5 cm³ hoặc 10 cm³', '100 cm³', '0,1 cm³'] }]
      },
      {
        pointNum: 4,
        title: 'Ý d: Ước tính khối lượng 1 m³ nước',
        template: 'Vì 1 m³ = 1 000 000 cm³ nên khối lượng 1 m³ nước xấp xỉ {k5} kg.',
        slots: [{ id: 'k5', expected: '1010', options: ['1010', '1000', '980'] }]
      }
    ],
    fullSolution: '• a) m_nước = m₂ - m₁ = 322 - 120 = 202 gam.<br>' +
      '• b) D = m / V = 202 / 200 = 1,01 g/cm³ = 1010 kg/m³.<br>' +
      '• c) Giá trị 200 cm³ là số tròn chục, do đó ĐCNN của cốc đong thường là 5 cm³ hoặc 10 cm³ (hoặc 2 cm³).<br>' +
      '• d) Khối lượng của 1 m³ nước ước tính theo kết quả thực hành là: m = D × V = 1010 kg/m³ × 1 m³ = 1010 kg.'},
  {
    id: 'sci_essay_3',
    exKey: 'sci_phy_essay',
    exTitle: 'KHTN 8 - Vật Lí (Tự luận - Câu 10)',
    type: 'keypoint_checklist',
    questionText: 'Phần A - Câu 10. Đặt bao gạo 50 kg lên ghế 4 chân 2 kg. Diện tích mỗi chân ghế 6 cm². Tính áp suất của gạo và ghế lên mặt đất.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Tổng trọng lượng và diện tích tiếp xúc', template: 'Tổng khối lượng m = 50 + 2 = 52 kg => Áp lực F = 10m = {k1} N; Tổng diện tích 4 chân ghế S = 4 × 6 = 24 cm² = {k2} m².', slots: [{ id: 'k1', expected: '520', options: ['520', '500', '20'] }, { id: 'k2', expected: '0,0024', options: ['0,0024', '0,024', '0,24'] }] },
      { pointNum: 2, title: 'Ý 2: Tính áp suất p', template: 'Áp suất p = F / S = 520 / 0,0024 ≈ {k3} Pa.', slots: [{ id: 'k3', expected: '216 667', options: ['216 667', '21 667', '52 000'] }] }
    ],
    fullSolution: '• F = P = 10 × (50 + 2) = 520 N.<br>• S = 4 × 6 cm² = 24 cm² = 0,0024 m².<br>• p = F/S = 520 / 0,0024 ≈ 216 666,7 Pa.'
  },
  {
    id: 'sci_essay_4',
    exKey: 'sci_phy_essay',
    exTitle: 'KHTN 8 - Vật Lí (Tự luận - Câu 11)',
    type: 'keypoint_checklist',
    questionText: 'Phần A - Câu 11. Trộn 4 lít chất lỏng A với 6 lít nước thu được hỗn hợp có D = 900 kg/m³. Biết D nước = 1000 kg/m³. Tìm D của chất lỏng A.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Khối lượng hỗn hợp và khối lượng nước', template: 'V_hh = 4 + 6 = 10 lít = 0,01 m³ => m_hh = 900 × 0,01 = 9 kg; m_nước = 1000 × 0,006 = {k1} kg.', slots: [{ id: 'k1', expected: '6', options: ['6', '5,4', '4'] }] },
      { pointNum: 2, title: 'Ý 2: Khối lượng riêng chất lỏng A', template: 'm_A = m_hh - m_nước = 9 - 6 = 3 kg => D_A = m_A / V_A = 3 / 0,004 = {k2} kg/m³.', slots: [{ id: 'k2', expected: '750', options: ['750', '800', '850'] }] }
    ],
    fullSolution: '• m_hh = 900 × 0,01 = 9 kg.<br>• m_nước = 1000 × 0,006 = 6 kg.<br>• m_A = 9 - 6 = 3 kg.<br>• D_A = 3 / 0,004 = 750 kg/m³.'
  },
  {
    id: 'sci_essay_5',
    exKey: 'sci_phy_essay',
    exTitle: 'KHTN 8 - Vật Lí (Tự luận - Câu 12)',
    type: 'keypoint_checklist',
    questionText: 'Phần A - Câu 12. Nêu 3 ứng dụng của sự tăng, giảm áp suất trong đời sống và giải thích cơ sở khoa học.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Ứng dụng tăng áp suất (giảm diện tích S)', template: 'Lưỡi dao, kéo, mũi kim được mài sắc nhọn (giảm S) để {k1} giúp cắt gọt và xuyên thủng dễ dàng.', slots: [{ id: 'k1', expected: 'tăng áp suất', options: ['tăng áp suất', 'giảm áp suất', 'giữ nguyên lực'] }] },
      { pointNum: 2, title: 'Ý 2: Ứng dụng giảm áp suất (tăng diện tích S)', template: 'Xe máy kéo dùng bánh xích bản rộng (tăng S) để {k2} giúp xe không bị lún vào nền đất mềm.', slots: [{ id: 'k2', expected: 'giảm áp suất', options: ['giảm áp suất', 'tăng áp lực', 'tăng tốc độ'] }] }
    ],
    fullSolution: '• <strong>Tăng áp suất:</strong> Mài sắc dao kéo, đóng đinh nhọn đầu -> giảm diện tích tiếp xúc S để áp suất p tăng vọt.<br>• <strong>Giảm áp suất:</strong> Xe bánh xích, tà vẹt đường ray, móng nhà bè rộng -> tăng S để giảm p, chống lún đổ.'
  },

  // B. HÓA HỌC (4 CÂU TỰ LUẬN: Q1, Q2, Q3, Q4)
  {
    id: 'sci_essay_6',
    exKey: 'sci_chem_essay',
    exTitle: 'KHTN 8 - Hóa Học (Tự luận - Câu 1)',
    type: 'keypoint_checklist',
    questionText: 'Phần B - Câu 1. Thắng đường làm nước màu gồm: (1) Đường nóng chảy; (2) Đường chuyển vàng nâu sang đen; (3) Cho nước vào hòa tan. Xác định hiện tượng ở từng giai đoạn.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Giai đoạn (1) và (3)', template: 'Giai đoạn (1) và (3) là {k1} vì chỉ có sự thay đổi trạng thái và sự hòa tan, không tạo ra chất mới.', slots: [{ id: 'k1', expected: 'biến đổi vật lí', options: ['biến đổi vật lí', 'biến đổi hoá học'] }] },
      { pointNum: 2, title: 'Giai đoạn (2)', template: 'Giai đoạn (2) là {k2} vì đường bị nhiệt phân hủy tạo thành chất mới (caramel và carbon).', slots: [{ id: 'k2', expected: 'biến đổi hoá học', options: ['biến đổi hoá học', 'biến đổi vật lí'] }] }
    ],
    fullSolution: '• (1) Đường nóng chảy: Biến đổi vật lí (rắn -> lỏng).<br>• (2) Đường chuyển màu nâu đen: Biến đổi hóa học (tạo caramel và carbon).<br>• (3) Cho nước hòa tan: Biến đổi vật lí (hòa tan chất).'
  },
  {
    id: 'sci_essay_7',
    exKey: 'sci_chem_essay',
    exTitle: 'KHTN 8 - Hóa Học (Tự luận - Câu 2)',
    type: 'keypoint_checklist',
    questionText: 'Phần B - Câu 2. Phân tích hiện tượng: Vôi sống tác dụng nước, giũa sắt, trứng ung, nến cháy. Đâu là biến đổi hóa học, đâu là vật lí?',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Các hiện tượng biến đổi vật lí', template: 'Giũa thanh sắt thành mạt sắt và nến nóng chảy là {k1}.', slots: [{ id: 'k1', expected: 'biến đổi vật lí', options: ['biến đổi vật lí', 'biến đổi hoá học'] }] },
      { pointNum: 2, title: 'Ý 2: Các hiện tượng biến đổi hóa học', template: 'Cho vôi sống vào nước tạo Ca(OH)₂, trứng để lâu bị ung và hơi nến cháy là {k2}.', slots: [{ id: 'k2', expected: 'biến đổi hoá học', options: ['biến đổi hoá học', 'biến đổi vật lí'] }] }
    ],
    fullSolution: '• CaO + H₂O -> Ca(OH)₂: Biến đổi hóa học.<br>• Giũa sắt thành mạt sắt: Biến đổi vật lí (thay đổi kích thước).<br>• Trứng ung: Biến đổi hóa học.<br>• Nến cháy thành CO₂ và H₂O: Biến đổi hóa học.'
  },
  {
    id: 'sci_essay_8',
    exKey: 'sci_chem_essay',
    exTitle: 'KHTN 8 - Hóa Học (Tự luận - Câu 3 đầy đủ tính số mol, khối lượng, thể tích)',
    type: 'keypoint_checklist',
    questionText: 'Phần B - Câu 3 (2,0 điểm). Hãy tính:<br>' +
      'a) Số mol của: 24,088 · 10²³ phân tử H₂O; 8,8 gam CO₂; 4,958 lít khí O₂ (ở đkc);<br>' +
      'b) Khối lượng của: 0,15 mol MgO; 6,1975 lít khí Cl₂ (ở đkc); 1,32484 · 10²³ phân tử HCl;<br>' +
      'c) Thể tích (ở đkc, 1 mol = 24,79 lít) của: 0,25 mol O₂; 8,8 gam CO₂; 12,044 · 10²³ phân tử CO₂.',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý a: Tính số mol các chất',
        template: 'n(H₂O) = 24,088.10²³ / 6,022.10²³ = {k1} mol; n(CO₂) = 8,8 / 44 = {k2} mol; n(O₂) = 4,958 / 24,79 = {k3} mol.',
        slots: [
          { id: 'k1', expected: '4', options: ['4', '2', '0,4'] },
          { id: 'k2', expected: '0,2', options: ['0,2', '0,5', '0,1'] },
          { id: 'k3', expected: '0,2', options: ['0,2', '0,25', '0,1'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý b: Tính khối lượng các chất',
        template: 'm(MgO) = 0,15 × 40 = {k4} gam; m(Cl₂) = (6,1975 / 24,79) × 71 = {k5} gam; m(HCl) ≈ 8,03 gam.',
        slots: [
          { id: 'k4', expected: '6', options: ['6', '4', '8'] },
          { id: 'k5', expected: '17,75', options: ['17,75', '14,2', '35,5'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý c: Tính thể tích các chất khí ở đkc',
        template: 'V(0,25 mol O₂) = 0,25 × 24,79 = {k6} lít; V(8,8g CO₂) = 0,2 × 24,79 = {k7} lít; V(12,044.10²³ pt CO₂) = 2 × 24,79 = {k8} lít.',
        slots: [
          { id: 'k6', expected: '6,1975', options: ['6,1975', '5,6', '24,79'] },
          { id: 'k7', expected: '4,958', options: ['4,958', '4,48', '5,2'] },
          { id: 'k8', expected: '49,58', options: ['49,58', '44,8', '24,79'] }
        ]
      }
    ],
    fullSolution: '• a) Số mol:<br>' +
      '  - n(H₂O) = 24,088·10²³ / (6,022·10²³) = 4 mol.<br>' +
      '  - n(CO₂) = 8,8 / 44 = 0,2 mol.<br>' +
      '  - n(O₂) = 4,958 / 24,79 = 0,2 mol.<br>' +
      '• b) Khối lượng:<br>' +
      '  - m(MgO) = 0,15 × (24 + 16) = 0,15 × 40 = 6 gam.<br>' +
      '  - n(Cl₂) = 6,1975 / 24,79 = 0,25 mol => m(Cl₂) = 0,25 × 71 = 17,75 gam.<br>' +
      '  - n(HCl) = 1,32484·10²³ / (6,022·10²³) = 0,22 mol => m(HCl) = 0,22 × 36,5 = 8,03 gam.<br>' +
      '• c) Thể tích ở đkc (V = n × 24,79):<br>' +
      '  - V(O₂) = 0,25 × 24,79 = 6,1975 lít.<br>' +
      '  - V(CO₂) = (8,8 / 44) × 24,79 = 0,2 × 24,79 = 4,958 lít.<br>' +
      '  - n(CO₂) = 12,044·10²³ / (6,022·10²³) = 2 mol => V(CO₂) = 2 × 24,79 = 49,58 lít.'},
  {
    id: 'sci_essay_9',
    exKey: 'sci_chem_essay',
    exTitle: 'KHTN 8 - Hóa Học (Tự luận - Câu 4)',
    type: 'keypoint_checklist',
    questionText: 'Phần B - Câu 4. Khí chữa cháy X: 0,2 mol nặng 8,8 gam. Khí X tạo bởi 1 nguyên tử A và 2 nguyên tử O. Xác định công thức phân tử khí X.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Tính khối lượng mol của khí X', template: 'M_X = m / n = 8,8 / 0,2 = {k1} g/mol.', slots: [{ id: 'k1', expected: '44', options: ['44', '32', '28'] }] },
      { pointNum: 2, title: 'Ý 2: Xác định nguyên tử A và công thức hóa học', template: 'M_A + 2 × 16 = 44 => M_A = 12 (Carbon C). Vậy khí X là {k2}.', slots: [{ id: 'k2', expected: 'CO₂ (carbon dioxide)', options: ['CO₂ (carbon dioxide)', 'SO₂ (sulfur dioxide)', 'NO₂ (nitrogen dioxide)'] }] }
    ],
    fullSolution: '• M_X = 8,8 / 0,2 = 44 g/mol.<br>• Khí X có dạng AO₂ => M_A + 32 = 44 => M_A = 12 (Carbon).<br>• Công thức hóa học: CO₂.'
  },

  // C. SINH HỌC (4 CÂU TỰ LUẬN: Q1, Q2, Q3, Q4)
  {
    id: 'sci_essay_10',
    exKey: 'sci_bio_essay',
    exTitle: 'KHTN 8 - Sinh Học (Tự luận - Câu 1)',
    type: 'keypoint_checklist',
    questionText: 'Phần C - Câu 1. Phân biệt khái niệm chất dinh dưỡng và dinh dưỡng. Trình bày mối quan hệ giữa hoạt động tiêu hóa và hoạt động dinh dưỡng.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Phân biệt chất dinh dưỡng và dinh dưỡng', template: 'Chất dinh dưỡng là {k1} có trong thức ăn; Dinh dưỡng là {k2} thu nhận, biến đổi và sử dụng các chất đó.', slots: [{ id: 'k1', expected: 'các chất hữu cơ và vô cơ', options: ['các chất hữu cơ và vô cơ', 'quá trình tiêu hóa', 'enzyme'] }, { id: 'k2', expected: 'toàn bộ quá trình sống', options: ['toàn bộ quá trình sống', 'chất hóa học', 'bữa ăn'] }] },
      { pointNum: 2, title: 'Ý 2: Mối quan hệ với hoạt động tiêu hóa', template: 'Tiêu hóa là giai đoạn đầu cung cấp nguyên liệu; không có tiêu hóa thì cơ thể {k3} dinh dưỡng.', slots: [{ id: 'k3', expected: 'không thể hấp thụ và thực hiện', options: ['không thể hấp thụ và thực hiện', 'vẫn tự do thực hiện', 'tự động tổng hợp'] }] }
    ],
    fullSolution: '• <strong>Chất dinh dưỡng:</strong> Các chất có trong thức ăn (protein, lipid, glucid, vitamin, khoáng chất).<br>• <strong>Dinh dưỡng:</strong> Quá trình sinh học thu nhận và sử dụng chất dinh dưỡng.<br>• <strong>Mối quan hệ:</strong> Tiêu hóa phân giải thức ăn thành dưỡng chất để hệ tuần hoàn hấp thụ phục vụ quá trình dinh dưỡng ở tế bào.'
  },
  {
    id: 'sci_essay_11',
    exKey: 'sci_bio_essay',
    exTitle: 'KHTN 8 - Sinh Học (Tự luận - Câu 2)',
    type: 'keypoint_checklist',
    questionText: 'Phần C - Câu 2. Khẩu phần ăn là gì? Khi lập khẩu phần ăn cần tuân thủ những nguyên tắc cơ bản nào?',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Khái niệm khẩu phần ăn', template: 'Là lượng thức ăn cần cung cấp cho cơ thể trong {k1}.', slots: [{ id: 'k1', expected: 'một ngày (24 giờ)', options: ['một ngày (24 giờ)', 'một bữa ăn', 'một tuần'] }] },
      { pointNum: 2, title: 'Ý 2: Ba nguyên tắc lập khẩu phần', template: 'Đáp ứng đủ nhu cầu năng lượng, cân đối tỉ lệ các nhóm chất dinh dưỡng và phù hợp với {k2}.', slots: [{ id: 'k2', expected: 'lứa tuổi, giới tính và cường độ lao động', options: ['lứa tuổi, giới tính và cường độ lao động', 'sở thích cá nhân', 'giá thành đắt đỏ'] }] }
    ],
    fullSolution: '• <strong>Khái niệm:</strong> Lượng thức ăn cung cấp trong 1 ngày.<br>• <strong>Nguyên tắc:</strong><br>1. Đủ năng lượng cho cơ thể hoạt động.<br>2. Cân đối tỉ lệ 4 nhóm chất: đường bột, đạm, béo, vitamin/khoáng chất.<br>3. Phù hợp theo độ tuổi và cường độ lao động.'
  },
  {
    id: 'sci_essay_12',
    exKey: 'sci_bio_essay',
    exTitle: 'KHTN 8 - Sinh Học (Tự luận - Câu 3)',
    type: 'keypoint_checklist',
    questionText: 'Phần C - Câu 3. Trình bày nguyên nhân, biểu hiện và biện pháp phòng chống đối với bệnh sâu răng và viêm loét dạ dày – tá tràng.',
    totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'Ý 1: Bệnh sâu răng', template: 'Do vi khuẩn lên men thức ăn thừa tạo {k1} phá hủy men răng; phòng tránh bằng cách {k2}.', slots: [{ id: 'k1', expected: 'axit', options: ['axit', 'kiềm', 'đường'] }, { id: 'k2', expected: 'vệ sinh răng miệng đúng cách sau khi ăn', options: ['vệ sinh răng miệng đúng cách sau khi ăn', 'ăn nhiều kẹo ngọt', 'uống nước đá'] }] },
      { pointNum: 2, title: 'Ý 2: Viêm loét dạ dày - tá tràng', template: 'Do vi khuẩn HP, căng thẳng thần kinh hoặc ăn uống thất thường; phòng tránh bằng cách ăn uống đúng giờ và {k3}.', slots: [{ id: 'k3', expected: 'hạn chế đồ cay nóng và rượu bia', options: ['hạn chế đồ cay nóng và rượu bia', 'nhịn ăn sáng', 'uống thuốc tùy tiện'] }] }
    ],
    fullSolution: '• <strong>Sâu răng:</strong> Vi khuẩn phân hủy đường thừa tạo acid ăn mòn men và ngà răng. Phòng chống: Chải răng đúng cách sau ăn, khám định kỳ.<br>• <strong>Viêm loét dạ dày:</strong> Do vi khuẩn HP, stress, ăn uống thất thường làm acid dịch vị phá hủy niêm mạc. Phòng chống: Ăn chín uống sôi, không bỏ bữa, tránh lo âu và rượu bia.'
  },
  {
    id: 'sci_essay_13',
    exKey: 'sci_bio_essay',
    exTitle: 'KHTN 8 - Sinh Học (Tự luận - Câu 4 đầy đủ các ý a, b, c)',
    type: 'keypoint_checklist',
    questionText: 'Phần C - Câu 4. Trong một ca cấp cứu do tai nạn giao thông, bệnh nhân Nam bị mất máu nhiều và cần được truyền máu khẩn cấp, bệnh nhân có nhóm máu B.<br>' +
      'a) Trong điều kiện cơ sở y tế có đầy đủ nguồn máu dự trữ, bác sĩ sẽ chỉ định truyền cho bệnh nhân Nam túi máu thuộc nhóm máu nào? Vì sao?<br>' +
      'b) Nếu ngân hàng máu tạm thời hết nhóm máu B, bác sĩ có thể truyền nhóm máu nào thay thế với thể tích không quá 250ml? Giải thích cơ sở khoa học;<br>' +
      'c) Nêu ý nghĩa của việc tham gia phong trào "Hiến máu nhân đạo".',
    visualComponent: `
      <div class="my-3 p-4 bg-rose-50/70 border border-rose-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 340 180" class="w-80 h-44 max-w-full">
          <circle cx="170" cy="30" r="22" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="170" y="36" font-size="14" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">Nhóm O</text>
          <circle cx="50" cy="90" r="22" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="50" y="96" font-size="14" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">Nhóm A</text>
          <circle cx="290" cy="90" r="24" fill="#fecaca" stroke="#dc2626" stroke-width="3"/>
          <text x="290" y="96" font-size="15" font-weight="black" fill="#991b1b" text-anchor="middle">Nhóm B</text>
          <circle cx="170" cy="150" r="22" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="170" y="156" font-size="13" font-weight="extrabold" fill="#b91c1c" text-anchor="middle">Nhóm AB</text>
          <line x1="150" y1="42" x2="72" y2="76" stroke="#ef4444" stroke-width="1.8"/>
          <line x1="190" y1="42" x2="268" y2="76" stroke="#dc2626" stroke-width="2.5"/>
          <line x1="170" y1="52" x2="170" y2="128" stroke="#ef4444" stroke-width="1.8"/>
          <line x1="70" y1="104" x2="148" y2="138" stroke="#ef4444" stroke-width="1.8"/>
          <line x1="270" y1="104" x2="192" y2="138" stroke="#ef4444" stroke-width="1.8"/>
          <circle cx="290" cy="90" r="30" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="290" y="132" font-size="9" font-weight="bold" fill="#b91c1c" text-anchor="middle">B truyền cho B (Ưu tiên)</text>
        </svg>
        <span class="text-[11px] text-rose-900 font-bold mt-1">Sơ đồ truyền máu: Nhóm B nhận máu B (ưu tiên) hoặc máu O (thay thế khẩn cấp ≤ 250ml)</span>
      </div>
    `,
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý a: Chỉ định truyền nhóm máu khi đầy đủ nguồn dự trữ',
        template: 'Bác sĩ sẽ chỉ định truyền nhóm máu {k1} vì cùng nhóm máu thì hồng cầu cho không có kháng nguyên lạ với huyết tương người nhận, tránh tai biến {k2}.',
        slots: [
          { id: 'k1', expected: 'nhóm B', options: ['nhóm B', 'nhóm O', 'nhóm AB'] },
          { id: 'k2', expected: 'ngưng kết hồng cầu', options: ['ngưng kết hồng cầu', 'tụt huyết áp', 'đông máu rải rác'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý b: Chỉ định truyền nhóm máu thay thế khẩn cấp',
        template: 'Có thể truyền nhóm máu {k3} với thể tích không quá 250ml vì hồng cầu nhóm O không mang {k4} trên màng hồng cầu.',
        slots: [
          { id: 'k3', expected: 'nhóm O', options: ['nhóm O', 'nhóm A', 'nhóm AB'] },
          { id: 'k4', expected: 'kháng nguyên A và B', options: ['kháng nguyên A và B', 'kháng thể alpha', 'huyết sắc tố'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý c: Ý nghĩa phong trào hiến máu nhân đạo',
        template: 'Hiến máu nhân đạo giúp bổ sung nguồn máu dự trữ kịp thời cứu sống người bệnh, thể hiện tinh thần nhân ái cao đẹp {k5}.',
        slots: [{ id: 'k5', expected: 'Một giọt máu cho đi, một cuộc đời ở lại', options: ['Một giọt máu cho đi, một cuộc đời ở lại', 'Uống nước nhớ nguồn', 'Lá lành đùm lá rách'] }]
      }
    ],
    fullSolution: '• a) <strong>Khi đầy đủ máu dự trữ:</strong> Chỉ định truyền cùng nhóm máu B cho bệnh nhân Nam. Vì truyền cùng nhóm máu đảm bảo kháng thể trong huyết tương người nhận không gây ngưng kết hồng cầu của người cho.<br>' +
      '• b) <strong>Khi ngân hàng hết máu B:</strong> Bác sĩ có thể truyền thay thế nhóm máu O (thể tích ≤ 250ml và truyền chậm). Vì hồng cầu nhóm O không có kháng nguyên A và B trên bề mặt nên không bị kháng thể β trong huyết tương bệnh nhân Nam làm ngưng kết.<br>' +
      '• c) <strong>Ý nghĩa hiến máu nhân đạo:</strong> Cứu sống người bệnh hiểm nghèo trong các ca cấp cứu và điều trị phẫu thuật; đồng thời lan tỏa thông điệp nhân văn sâu sắc trong cộng đồng.'}
];
