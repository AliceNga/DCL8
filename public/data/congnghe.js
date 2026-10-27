// =========================================================================
// DATA: CÔNG NGHỆ 8 (20 CÂU/BÀI = 15 TRẮC NGHIỆM + 5 TỰ LUẬN/BÀI VẼ)
// Đề cương Giữa Học Kì I - THCS Nghĩa Tân (2026-2027)
// =========================================================================

window.TECH_DATABASE = [
  // --- PHẦN I: 15 CÂU TRẮC NGHIỆM (14 MCQs + 1 Đúng/Sai) ---
  {
    id: 'tech_1',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 1. Tỉ lệ 2:1 trên bản vẽ kĩ thuật có ý nghĩa như thế nào?',
    options: [
      { text: 'Kích thước trên bản vẽ gấp 2 lần kích thước thực.', isCorrect: true },
      { text: 'Kích thước trên bản vẽ bằng kích thước thực.', isCorrect: false },
      { text: 'Kích thước trên bản vẽ bằng một nửa kích thước thực.', isCorrect: false },
      { text: 'Là tỉ lệ thu nhỏ của bản vẽ.', isCorrect: false }
    ],
    explanation: 'Tỉ lệ 2:1 là tỉ lệ phóng to, trong đó kích thước hình biểu diễn trên bản vẽ gấp 2 lần kích thước thực của vật thể.'
  },
  {
    id: 'tech_2',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 2. Chữ R ghi trước chữ số kích thước để chỉ kích thước nào dưới đây?',
    options: [
      { text: 'Kích thước góc.', isCorrect: false },
      { text: 'Kích thước bán kính.', isCorrect: true },
      { text: 'Kích thước đường kính.', isCorrect: false },
      { text: 'Kích thước đoạn thẳng.', isCorrect: false }
    ],
    explanation: 'Theo TCVN: Kí hiệu chữ R (Radius) chỉ kích thước bán kính đường cong/cung tròn; kí hiệu Ø chỉ đường kính.'
  },
  {
    id: 'tech_3',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 4. Những khối nào sau đây là khối tròn xoay?',
    options: [
      { text: 'Khối nón, khối cầu, khối chóp.', isCorrect: false },
      { text: 'Khối nón, khối cầu, hình trụ.', isCorrect: true },
      { text: 'Hình hộp chữ nhật, khối lăng trụ.', isCorrect: false },
      { text: 'Khối nón, khối lăng trụ, hình chóp.', isCorrect: false }
    ],
    explanation: 'Khối tròn xoay được tạo thành khi quay một hình phẳng quanh một trục cố định: hình trụ (quay hình chữ nhật), hình nón (quay tam giác vuông), hình cầu (quay nửa hình tròn).'
  },
  {
    id: 'tech_4',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 5. Viên phấn viết bảng có hình chiếu là hình dạng nào dưới đây?',
    options: [
      { text: 'Hình tròn, hình chữ nhật.', isCorrect: true },
      { text: 'Hình tròn, hình tam giác.', isCorrect: false },
      { text: 'Hình tròn.', isCorrect: false },
      { text: 'Hình tam giác.', isCorrect: false }
    ],
    explanation: 'Viên phấn có dạng hình trụ (hoặc hình nón cụt rất thoải), hình chiếu đứng và cạnh là hình chữ nhật (hoặc thang cân), hình chiếu bằng là hình tròn.'
  },
  {
    id: 'tech_5',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 6. Khổ giấy A0 được chia thành bao nhiêu khổ giấy A4?',
    options: [
      { text: '8.', isCorrect: false },
      { text: '12.', isCorrect: false },
      { text: '16.', isCorrect: true },
      { text: '20.', isCorrect: false }
    ],
    explanation: 'A0 chia đôi được 2 A1 = 4 A2 = 8 A3 = 16 tờ A4 (mỗi lần gấp đôi giảm một cấp khổ giấy).'
  },
  {
    id: 'tech_6',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 7. Trên bản vẽ kĩ thuật, nét đứt mảnh dùng để vẽ đường nào?',
    options: [
      { text: 'Đường kích thước, đường dóng kích thước.', isCorrect: false },
      { text: 'Đường trục, đường tâm.', isCorrect: false },
      { text: 'Đường bao khuất, cạnh khuất.', isCorrect: true },
      { text: 'Đường bao thấy, cạnh thấy.', isCorrect: false }
    ],
    explanation: 'Quy ước TCVN 8-20: Nét liền đậm dùng vẽ đường bao thấy, cạnh thấy; Nét đứt mảnh dùng vẽ đường bao khuất, cạnh khuất.'
  },
  {
    id: 'tech_7',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 8a (Sơ đồ vị trí hình chiếu). Tên gọi tương ứng của các hình chiếu 1, 2, 3 trên bản vẽ kĩ thuật lần lượt là gì?',
    visualComponent: `
      <div class="my-3 p-3 bg-cyan-50/70 border border-cyan-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 280 150" class="w-72 h-36 max-w-full">
          <!-- Hình chiếu 1: Đứng -->
          <rect x="25" y="15" width="85" height="55" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
          <text x="67" y="47" font-size="14" font-weight="extrabold" fill="#854d0e" text-anchor="middle">Hình 1</text>
          
          <!-- Hình chiếu 3: Cạnh -->
          <rect x="150" y="15" width="60" height="55" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
          <text x="180" y="47" font-size="14" font-weight="extrabold" fill="#854d0e" text-anchor="middle">Hình 3</text>

          <!-- Hình chiếu 2: Bằng -->
          <rect x="25" y="85" width="85" height="50" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
          <text x="67" y="115" font-size="14" font-weight="extrabold" fill="#854d0e" text-anchor="middle">Hình 2</text>

          <!-- Đường dóng -->
          <line x1="110" y1="42" x2="150" y2="42" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
          <line x1="67" y1="70" x2="67" y2="85" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
        </svg>
        <span class="text-[11px] text-cyan-800 font-bold mt-1">Sơ đồ bố cục 3 hình chiếu chuẩn TCVN</span>
      </div>
    `,
    options: [
      { text: '1: Hình chiếu đứng, 2: Hình chiếu bằng, 3: Hình chiếu cạnh.', isCorrect: true },
      { text: '1: Hình chiếu bằng, 2: Hình chiếu đứng, 3: Hình chiếu cạnh.', isCorrect: false },
      { text: '1: Hình chiếu cạnh, 2: Hình chiếu bằng, 3: Hình chiếu đứng.', isCorrect: false },
      { text: '1: Hình chiếu đứng, 2: Hình chiếu cạnh, 3: Hình chiếu bằng.', isCorrect: false }
    ],
    explanation: 'TCVN quy ước: Hình chiếu đứng (1) ở góc trên bên trái; Hình chiếu bằng (2) ở phía dưới hình chiếu đứng; Hình chiếu cạnh (3) ở bên phải hình chiếu đứng.'
  },
  {
    id: 'tech_8',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 8 (Đề gốc). Khối tròn xoay được tạo thành bằng cách:',
    options: [
      { text: 'Quay một đa giác bất kì quanh một trục.', isCorrect: false },
      { text: 'Quay một hình chóp quanh đường cao.', isCorrect: false },
      { text: 'Tịnh tiến một hình phẳng trong không gian.', isCorrect: false },
      { text: 'Quay một hình phẳng quanh một trục cố định của hình.', isCorrect: true }
    ],
    explanation: 'Định nghĩa: Khi quay một hình phẳng quanh một trục cố định của hình, ta được một khối tròn xoay (hình trụ, hình nón, hình cầu).'
  },
  {
    id: 'tech_9',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 9. Đơn vị đo kích thước dài trên bản vẽ kĩ thuật là:',
    options: [
      { text: 'Mét (m).', isCorrect: false },
      { text: 'Decimét (dm).', isCorrect: false },
      { text: 'Centimét (cm).', isCorrect: false },
      { text: 'Milimét (mm).', isCorrect: true }
    ],
    explanation: 'Quy chuẩn bản vẽ kĩ thuật cơ khí TCVN: Đơn vị đo kích thước dài là milimét (mm) và không cần ghi đơn vị sau con số.'
  },
  {
    id: 'tech_10',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 10. Hình chiếu đứng thể hiện các kích thước nào sau đây của vật thể?',
    options: [
      { text: 'Chiều dài và chiều rộng.', isCorrect: false },
      { text: 'Chiều cao và chiều rộng.', isCorrect: false },
      { text: 'Chiều cao và chiều dài.', isCorrect: true },
      { text: 'Chỉ thể hiện kích thước chiều cao.', isCorrect: false }
    ],
    explanation: 'Hình chiếu đứng (hướng chiếu từ trước tới) thể hiện hai kích thước của vật thể là chiều dài và chiều cao.'
  },
  {
    id: 'tech_11',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 11. Khi xây dựng hình chiếu vuông góc, vật thể được đặt vị trí nào sau đây?',
    options: [
      { text: 'Trong không gian tạo bởi ba mặt phẳng.', isCorrect: false },
      { text: 'Trong không gian tạo bởi ba mặt phẳng hình chiếu vuông góc.', isCorrect: false },
      { text: 'Trong không gian tạo bởi ba mặt phẳng hình chiếu vuông góc với nhau từng đôi một.', isCorrect: true },
      { text: 'Trong không gian tạo bởi các mặt phẳng bất kì.', isCorrect: false }
    ],
    explanation: 'Quy chuẩn chiếu góc thứ nhất: Vật thể được đặt trong không gian tạo bởi ba mặt phẳng hình chiếu vuông góc với nhau từng đôi một (mặt phẳng hình chiếu đứng, hình chiếu bằng và hình chiếu cạnh).'
  },
  {
    id: 'tech_12',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 12. Hình chiếu của hình chóp tứ giác đều có hình dạng nào dưới đây?',
    visualComponent: `
      <div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 280 110" class="w-72 h-28 max-w-full">
          <!-- Hình chiếu đứng & bằng của hình chóp tứ giác đều -->
          <!-- Đứng: Tam giác cân -->
          <polygon points="60,20 20,85 100,85" fill="#bae6fd" stroke="#0284c7" stroke-width="1.8"/>
          <line x1="60" y1="20" x2="60" y2="85" stroke="#0284c7" stroke-width="1" stroke-dasharray="2,2"/>
          <text x="60" y="102" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">Hình chiếu đứng (Tam giác cân)</text>

          <!-- Bằng: Hình vuông có 2 đường chéo -->
          <rect x="180" y="25" width="60" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8"/>
          <line x1="180" y1="25" x2="240" y2="85" stroke="#ca8a04" stroke-width="1.2"/>
          <line x1="180" y1="85" x2="240" y2="25" stroke="#ca8a04" stroke-width="1.2"/>
          <text x="210" y="102" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Hình chiếu bằng (Hình vuông)</text>
        </svg>
      </div>
    `,
    options: [
      { text: 'Hình tam giác và hình vuông.', isCorrect: false },
      { text: 'Hình tam giác cân và hình vuông.', isCorrect: true },
      { text: 'Hình tròn và hình tam giác.', isCorrect: false },
      { text: 'Hình tam giác cân và hình chữ nhật.', isCorrect: false }
    ],
    explanation: 'Hình chóp tứ giác đều có đáy là hình vuông (hình chiếu bằng là hình vuông có 2 đường chéo) và các mặt bên là tam giác cân (hình chiếu đứng và hình chiếu cạnh là hình tam giác cân).'
  },
  {
    id: 'tech_13',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 13. Hình chóp đều được bao bởi mặt đáy là hình gì?',
    options: [
      { text: 'Tam giác.', isCorrect: false },
      { text: 'Đa giác đều.', isCorrect: true },
      { text: 'Tam giác đều.', isCorrect: false },
      { text: 'Hình chữ nhật.', isCorrect: false }
    ],
    explanation: 'Định nghĩa SGK: Hình chóp đều được bao bởi mặt đáy là một hình đa giác đều và các mặt bên là các hình tam giác cân bằng nhau có chung đỉnh.'
  },
  {
    id: 'tech_14',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 14. Trên bản vẽ kĩ thuật, hình chiếu đứng có hướng chiếu như thế nào?',
    options: [
      { text: 'Có hướng chiếu từ trước tới.', isCorrect: true },
      { text: 'Có hướng chiếu từ trên xuống.', isCorrect: false },
      { text: 'Có hướng chiếu từ trái sang phải.', isCorrect: false },
      { text: 'Có hướng chiếu từ phải sang trái.', isCorrect: false }
    ],
    explanation: 'Quy tắc hướng chiếu vuông góc: Hình chiếu đứng có hướng chiếu từ trước tới; Hình chiếu bằng có hướng chiếu từ trên xuống; Hình chiếu cạnh có hướng chiếu từ trái sang phải.'
  },
  {
    id: 'tech_15',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Đúng/Sai)',
    questionText: 'Câu 15 (Đ/S). Một học sinh được giao vẽ 3 hình chiếu cho một lon sữa trên khổ giấy A4. Lon sữa có chiều cao là 1400 mm, đường kính đáy có kích thước 1000 mm. Lon sữa được đặt ở vị trí sao cho mặt đáy song song (//) với mặt phẳng hình chiếu cạnh.<br>Cho các nhận định sau:<br>a) Tỉ lệ sử dụng vẽ 3 hình chiếu là tỉ lệ thu nhỏ 1:10.<br>b) Hình chiếu bằng là hình tròn; hình chiếu đứng, hình chiếu cạnh là hình chữ nhật.<br>c) Hình chiếu cạnh là hình tròn; hình chiếu đứng, hình chiếu bằng là hình chữ nhật.<br>d) Tỉ lệ sử dụng vẽ 3 hình chiếu là tỉ lệ phóng to 10:1.<br>Phương án ghép Đúng (Đ) / Sai (S) chính xác là:',
    options: [
      { text: 'a-Đ, b-S, c-Đ, d-S.', isCorrect: true },
      { text: 'a-Đ, b-Đ, c-S, d-S.', isCorrect: false },
      { text: 'a-S, b-Đ, c-S, d-Đ.', isCorrect: false },
      { text: 'a-S, b-S, c-Đ, d-Đ.', isCorrect: false }
    ],
    explanation: 'Đáp án chuẩn theo Đề cương PDF (Trang 14):<br>• a) ĐÚNG: Kích thước lon sữa 1400x1000 mm rất lớn so với khổ giấy A4 (297x210 mm) nên phải chọn tỉ lệ thu nhỏ 1:10 (khi đó hình vẽ còn 140x100 mm).<br>• b) SAI: Vì mặt đáy // mặt phẳng hình chiếu cạnh nên hình chiếu cạnh là hình tròn, không phải hình chiếu bằng.<br>• c) ĐÚNG: Hình chiếu cạnh là hình tròn; hình chiếu đứng và bằng là hình chữ nhật.<br>• d) SAI: Phải dùng tỉ lệ thu nhỏ 1:10, không thể dùng tỉ lệ phóng to 10:1.'
  },

  // --- PHẦN II: 5 CÂU TỰ LUẬN / BÀI TẬP VẼ HÌNH CHIẾU ---
  {
    id: 'tech_essay_1',
    exKey: 'tech_essay',
    exTitle: 'Công nghệ 8 (Tự luận - Câu 1)',
    type: 'keypoint_checklist',
    questionText: 'Câu 1. Nêu quy ước các hình chiếu, vị trí các hình chiếu, tỉ lệ và một số nét vẽ cơ bản trên bản vẽ kĩ thuật mà em đã học.',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Tên và hướng của 3 hình chiếu vuông góc',
        template: 'Hình chiếu đứng có hướng nhìn {k1}; Hình chiếu bằng có hướng nhìn {k2}; Hình chiếu cạnh có hướng nhìn {k3}.',
        slots: [
          { id: 'k1', expected: 'từ trước tới', options: ['từ trước tới', 'từ trên xuống', 'từ trái sang'] },
          { id: 'k2', expected: 'từ trên xuống', options: ['từ trên xuống', 'từ dưới lên', 'từ trước tới'] },
          { id: 'k3', expected: 'từ trái sang', options: ['từ trái sang', 'từ phải sang', 'từ sau tới'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Vị trí bố trí các hình chiếu trên bản vẽ',
        template: 'Hình chiếu bằng đặt ở {k4} hình chiếu đứng; Hình chiếu cạnh đặt ở {k5} hình chiếu đứng.',
        slots: [
          { id: 'k4', expected: 'phía dưới', options: ['phía dưới', 'phía trên', 'bên trái'] },
          { id: 'k5', expected: 'bên phải', options: ['bên phải', 'bên trái', 'phía trên'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Quy ước nét vẽ cơ bản',
        template: 'Nét liền đậm dùng vẽ {k6}; Nét đứt mảnh dùng vẽ {k7}; Nét gạch chấm mảnh dùng vẽ đường trục tâm/đối xứng.',
        slots: [
          { id: 'k6', expected: 'đường bao thấy, cạnh thấy', options: ['đường bao thấy, cạnh thấy', 'đường ghi kích thước', 'đường gióng'] },
          { id: 'k7', expected: 'đường bao khuất, cạnh khuất', options: ['đường bao khuất, cạnh khuất', 'trục quay', 'khung bản vẽ'] }
        ]
      }
    ],
    fullSolution: '• <strong>Hình chiếu & hướng chiếu:</strong> Chiếu đứng (nhìn từ trước), Chiếu bằng (nhìn từ trên), Chiếu cạnh (nhìn từ trái).<br>• <strong>Vị trí bố trí:</strong> Hình chiếu bằng nằm dưới hình chiếu đứng; Hình chiếu cạnh nằm bên phải hình chiếu đứng.<br>• <strong>Nét vẽ:</strong> Nét liền đậm (cạnh thấy), nét đứt mảnh (cạnh khuất), nét liền mảnh (kích thước), nét gạch chấm mảnh (trục đối xứng).'
  },
  {
    id: 'tech_essay_2',
    exKey: 'tech_essay',
    exTitle: 'Công nghệ 8 (Tự luận - Câu 2)',
    type: 'keypoint_checklist',
    questionText: 'Câu 2. Thế nào là khối hình hộp chữ nhật, khối lăng trụ đều và khối chóp đều? Hình chiếu của chúng là hình gì?',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Khối hình hộp chữ nhật',
        template: 'Được bao bởi 6 {k1}; cả 3 hình chiếu của nó đều là các hình chữ nhật.',
        slots: [
          { id: 'k1', expected: 'hình chữ nhật', options: ['hình chữ nhật', 'hình vuông bằng nhau', 'hình tam giác'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Khối hình lăng trụ đều',
        template: 'Có 2 đáy là hai {k2} bằng nhau; các mặt bên là các hình chữ nhật bằng nhau. Hình chiếu đáy phản ánh hình đa giác, các hình chiếu còn lại là hình chữ nhật.',
        slots: [
          { id: 'k2', expected: 'đa giác đều', options: ['đa giác đều', 'hình tròn', 'tam giác vuông'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Khối hình chóp đều',
        template: 'Mặt đáy là {k3}; các mặt bên là các tam giác cân bằng nhau có chung đỉnh. Hình chiếu bằng là hình đa giác đáy, hình chiếu đứng và cạnh là {k4}.',
        slots: [
          { id: 'k3', expected: 'đa giác đều', options: ['đa giác đều', 'hình thang', 'hình thoi'] },
          { id: 'k4', expected: 'hình tam giác cân', options: ['hình tam giác cân', 'hình chữ nhật', 'hình vuông'] }
        ]
      }
    ],
    fullSolution: '• <strong>Hình hộp chữ nhật:</strong> Được bao bởi 6 hình chữ nhật. Cả 3 hình chiếu đều là hình chữ nhật.<br>• <strong>Lăng trụ đều:</strong> 2 đáy là đa giác đều, các mặt bên là hình chữ nhật. Hình chiếu phản ánh đa giác đáy và các hình chữ nhật.<br>• <strong>Chóp đều:</strong> Đáy là đa giác đều, mặt bên là tam giác cân. Hình chiếu gồm 1 hình đa giác đáy và 2 hình tam giác cân.'
  },
  {
    id: 'tech_essay_3',
    exKey: 'tech_essay',
    exTitle: 'Công nghệ 8 (Tự luận - Câu 3)',
    type: 'keypoint_checklist',
    questionText: 'Câu 3. Hình trụ, hình nón, hình cầu được tạo thành như thế nào? Hình chiếu của các khối tròn xoay là hình gì?',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Sự tạo thành và hình chiếu hình trụ',
        template: 'Tạo thành khi quay {k1} một vòng quanh một cạnh cố định. Hình chiếu gồm 1 hình tròn (chiếu bằng) và 2 {k2} (chiếu đứng và cạnh).',
        slots: [
          { id: 'k1', expected: 'hình chữ nhật', options: ['hình chữ nhật', 'hình tam giác vuông', 'nửa hình tròn'] },
          { id: 'k2', expected: 'hình chữ nhật', options: ['hình chữ nhật', 'hình tam giác', 'hình thang'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Sự tạo thành và hình chiếu hình nón',
        template: 'Tạo thành khi quay {k3} quanh một cạnh góc vuông cố định. Hình chiếu gồm 1 hình tròn và 2 {k4}.',
        slots: [
          { id: 'k3', expected: 'hình tam giác vuông', options: ['hình tam giác vuông', 'hình chữ nhật', 'hình bình hành'] },
          { id: 'k4', expected: 'hình tam giác cân', options: ['hình tam giác cân', 'hình tròn', 'hình chữ nhật'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Sự tạo thành và hình chiếu hình cầu',
        template: 'Tạo thành khi quay {k5} một vòng quanh đường kính cố định. Cả 3 hình chiếu của hình cầu đều là {k6}.',
        slots: [
          { id: 'k5', expected: 'nửa hình tròn', options: ['nửa hình tròn', 'hình tam giác đều', 'cung parabol'] },
          { id: 'k6', expected: 'hình tròn có cùng đường kính', options: ['hình tròn có cùng đường kính', 'hình bầu dục elip', 'hình chữ nhật'] }
        ]
      }
    ],
    fullSolution: '• <strong>Hình trụ:</strong> Quay hình chữ nhật; hình chiếu: 1 hình tròn, 2 hình chữ nhật.<br>• <strong>Hình nón:</strong> Quay hình tam giác vuông quanh 1 cạnh góc vuông; hình chiếu: 1 hình tròn, 2 hình tam giác cân.<br>• <strong>Hình cầu:</strong> Quay nửa hình tròn quanh đường kính; hình chiếu: cả 3 hình chiếu đều là hình tròn có đường kính d.'
  },
  {
    id: 'tech_essay_4',
    exKey: 'tech_essay',
    exTitle: 'Công nghệ 8 (Bài tập 1 - Đọc hình chiếu)',
    type: 'keypoint_checklist',
    questionText: 'Bài 1. Cho vật thể có các mặt A, B, C, D, E, F, G và các hình chiếu I, II, III (như hình vẽ kỹ thuật SVG bên dưới). Hãy xác định tên hình chiếu và đối chiếu các mặt tương ứng.',
    visualComponent: `
      <div class="my-3 p-3 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 320 160" class="w-80 h-40 max-w-full">
          <g transform="translate(10, 15)">
            <!-- Vat the 3D -->
            <polygon points="40,20 80,5 110,25 70,40" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>
            <polygon points="40,20 70,40 70,80 40,60" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
            <polygon points="70,40 110,25 110,65 70,80" fill="#ea580c" stroke="#c2410c" stroke-width="1.5"/>
            <text x="35" y="45" font-size="10" font-weight="bold" fill="#7c2d12">A</text>
            <text x="75" y="20" font-size="10" font-weight="bold" fill="#7c2d12">B</text>
            <text x="95" y="55" font-size="10" font-weight="bold" fill="#fff">C</text>
          </g>
          <g transform="translate(160, 10)">
            <!-- Hinh chieu I, II, III -->
            <rect x="10" y="10" width="55" height="40" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
            <text x="37" y="35" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">Hình I</text>
            <rect x="80" y="10" width="40" height="40" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
            <text x="100" y="35" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">Hình III</text>
            <rect x="10" y="65" width="55" height="40" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
            <text x="37" y="90" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">Hình II</text>
          </g>
        </svg>
        <span class="text-[11px] text-slate-500 font-medium">Bảng 1: Xác định tên hình chiếu • Bảng 2: Ghép mặt vật thể với hình chiếu</span>
      </div>
    `,
    totalPoints: 2,
    keypoints: [
      {
        pointNum: 1,
        title: 'Bảng 1: Xác định tên gọi các hình chiếu I, II, III',
        template: 'Hình I có hướng chiếu từ trước tới là {k1}; Hình II có hướng chiếu từ trên xuống là {k2}; Hình III có hướng chiếu từ trái sang là {k3}.',
        slots: [
          { id: 'k1', expected: 'Hình chiếu đứng', options: ['Hình chiếu đứng', 'Hình chiếu bằng', 'Hình chiếu cạnh'] },
          { id: 'k2', expected: 'Hình chiếu bằng', options: ['Hình chiếu bằng', 'Hình chiếu cạnh', 'Hình chiếu đứng'] },
          { id: 'k3', expected: 'Hình chiếu cạnh', options: ['Hình chiếu cạnh', 'Hình chiếu bằng'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Bảng 2: Đối chiếu mặt vật thể A, B, C với hình chiếu',
        template: 'Mặt trước A tương ứng với {k4}; Mặt trên B tương ứng với {k5}; Mặt bên C tương ứng với {k6}.',
        slots: [
          { id: 'k4', expected: 'Hình chiếu đứng I', options: ['Hình chiếu đứng I', 'Hình chiếu bằng II', 'Hình chiếu cạnh III'] },
          { id: 'k5', expected: 'Hình chiếu bằng II', options: ['Hình chiếu bằng II', 'Hình chiếu đứng I'] },
          { id: 'k6', expected: 'Hình chiếu cạnh III', options: ['Hình chiếu cạnh III', 'Hình chiếu đứng I'] }
        ]
      }
    ],
    fullSolution: '• <strong>Bảng 1:</strong> Hình I là <em>Hình chiếu đứng</em>; Hình II là <em>Hình chiếu bằng</em>; Hình III là <em>Hình chiếu cạnh</em>.<br>• <strong>Bảng 2:</strong> Mặt A thể hiện trên Hình I; Mặt B thể hiện trên Hình II; Mặt C thể hiện trên Hình III.'
  },
  {
    id: 'tech_essay_5',
    exKey: 'tech_essay',
    exTitle: 'Công nghệ 8 (Bài tập 2 - Con trượt)',
    type: 'keypoint_checklist',
    questionText: 'Bài 2. Nêu các bước vẽ hình chiếu vuông góc của vật thể đơn giản (ví dụ Con trượt - SGK trang 19).',
    visualComponent: `
      <div class="my-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 460 170" class="w-full max-w-lg h-auto">
          <!-- Vật thể 3D Con trượt -->
          <g transform="translate(15, 20)">
            <text x="55" y="10" font-size="11" font-weight="extrabold" fill="#0f172a" text-anchor="middle">Vật thể Con trượt</text>
            <!-- Khối đế -->
            <polygon points="10,65 50,45 100,65 60,85" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
            <polygon points="10,65 60,85 60,115 10,95" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
            <polygon points="60,85 100,65 100,95 60,115" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
            <!-- Rãnh khoét chữ U ở trên -->
            <polygon points="35,52 45,47 65,55 55,60" fill="#f8fafc" stroke="#0284c7" stroke-width="1.2"/>
            <polygon points="35,52 55,60 55,75 35,67" fill="#cbd5e1" stroke="#0284c7" stroke-width="1.2"/>
          </g>

          <!-- 3 Hình chiếu vuông góc -->
          <g transform="translate(160, 15)">
            <text x="140" y="8" font-size="11" font-weight="extrabold" fill="#047857" text-anchor="middle">Bản vẽ 3 hình chiếu vuông góc</text>
            
            <!-- Hình chiếu ĐỨNG (nhìn trước, có rãnh thấy) -->
            <rect x="20" y="25" width="70" height="45" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
            <rect x="40" y="25" width="30" height="20" fill="#ffffff" stroke="#ca8a04" stroke-width="1.5"/>
            <text x="55" y="60" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Đứng (rãnh thấy)</text>

            <!-- Hình chiếu CẠNH (nhìn trái, rãnh khuất vẽ nét đứt) -->
            <rect x="130" y="25" width="55" height="45" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
            <line x1="130" y1="45" x2="185" y2="45" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text x="157" y="60" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Cạnh (nét đứt)</text>

            <!-- Hình chiếu BẰNG (nhìn trên xuống) -->
            <rect x="20" y="90" width="70" height="45" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
            <line x1="40" y1="90" x2="40" y2="135" stroke="#ca8a04" stroke-width="1.5"/>
            <line x1="70" y1="90" x2="70" y2="135" stroke="#ca8a04" stroke-width="1.5"/>
            <text x="55" y="115" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Bằng (nét liền)</text>

            <!-- Đường dóng -->
            <line x1="90" y1="47" x2="130" y2="47" stroke="#94a3b8" stroke-dasharray="2,2"/>
            <line x1="55" y1="70" x2="55" y2="90" stroke="#94a3b8" stroke-dasharray="2,2"/>
          </g>
        </svg>
        <span class="text-[11px] text-slate-600 font-bold mt-1">Con trượt: Hình chiếu đứng có rãnh thấy • Hình chiếu cạnh có rãnh khuất (nét đứt)</span>
      </div>
    `,
    totalPoints: 2,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Phân tích hình dạng và chọn hướng chiếu',
        template: 'Phân tích con trượt thành các khối hình học cơ bản; chọn hướng chiếu đứng phản ánh {k1} hình dạng đặc trưng nhất của con trượt.',
        slots: [
          { id: 'k1', expected: 'rõ ràng và đầy đủ', options: ['rõ ràng và đầy đủ', 'ít đường nét nhất', 'góc khuất'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Trình tự các bước vẽ kỹ thuật',
        template: 'Bước 1: Vẽ hình bao ngoài bằng nét mờ; Bước 2: Vẽ các phần rãnh khoét bằng {k2}; Bước 3: Tẩy nét thừa, tô đậm các đường bao thấy bằng {k3} và ghi kích thước.',
        slots: [
          { id: 'k2', expected: 'đường nét đứt và nét liền tương ứng', options: ['đường nét đứt và nét liền tương ứng', 'màu sắc tự do', 'nét lượn sóng'] },
          { id: 'k3', expected: 'nét liền đậm', options: ['nét liền đậm', 'nét chấm gạch', 'nét mảnh'] }
        ]
      }
    ],
    fullSolution: '• <strong>Bước 1:</strong> Phân tích hình học: Con trượt gồm khối hộp chữ nhật có rãnh xẻ ở giữa.<br>• <strong>Bước 2:</strong> Chọn hướng chiếu đứng nhìn từ trước, hướng chiếu bằng nhìn từ trên, hướng chiếu cạnh nhìn từ trái.<br>• <strong>Bước 3:</strong> Dựng khung bao ngoài của 3 hình chiếu ăn khớp với nhau theo đường dóng.<br>• <strong>Bước 4:</strong> Vẽ chi tiết các đường bao thấy (nét liền đậm) và đường bao rãnh khuất (nét đứt mảnh); ghi chữ số kích thước theo đúng TCVN.'
  }
];
