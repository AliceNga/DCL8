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
    questionText: 'Câu 10. Hình chiếu bằng của hình nón là hình gì?',
    options: [
      { text: 'Hình tam giác cân.', isCorrect: false },
      { text: 'Hình vuông.', isCorrect: false },
      { text: 'Hình tròn.', isCorrect: true },
      { text: 'Hình chữ nhật.', isCorrect: false }
    ],
    explanation: 'Hình nón nhìn từ trên xuống (hình chiếu bằng) là một hình tròn có tâm.'
  },
  {
    id: 'tech_11',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 11. Nét gạch chấm mảnh dùng để vẽ đường nào?',
    options: [
      { text: 'Đường bao thấy, cạnh thấy.', isCorrect: false },
      { text: 'Đường bao khuất, cạnh khuất.', isCorrect: false },
      { text: 'Đường tâm, đường trục đối xứng.', isCorrect: true },
      { text: 'Đường dóng kích thước.', isCorrect: false }
    ],
    explanation: 'TCVN quy ước: Nét gạch chấm mảnh dùng để vẽ đường tâm, đường trục đối xứng.'
  },
  {
    id: 'tech_12',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 12. Hình chóp đều có mặt đáy là hình gì?',
    options: [
      { text: 'Hình vuông.', isCorrect: false },
      { text: 'Đa giác đều.', isCorrect: true },
      { text: 'Tam giác đều.', isCorrect: false },
      { text: 'Hình chữ nhật.', isCorrect: false }
    ],
    explanation: 'Khái niệm chuẩn: Hình chóp đều là hình chóp có đáy là một đa giác đều và các mặt bên là các tam giác cân bằng nhau có chung đỉnh.'
  },
  {
    id: 'tech_13',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 13. Kích thước tiêu chuẩn của khổ giấy A4 là:',
    options: [
      { text: '210 x 297 cm.', isCorrect: false },
      { text: '297 x 210 mm.', isCorrect: true },
      { text: '420 x 297 mm.', isCorrect: false },
      { text: '297 x 210 m.', isCorrect: false }
    ],
    explanation: 'Khổ giấy A4 có kích thước tiêu chuẩn là 297 x 210 mm (chiều dài x chiều rộng).'
  },
  {
    id: 'tech_14',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Trắc nghiệm)',
    questionText: 'Câu 14. Trên bản vẽ kĩ thuật, hình chiếu đứng có hướng chiếu từ đâu tới?',
    options: [
      { text: 'Có hướng chiếu từ trước tới.', isCorrect: true },
      { text: 'Có hướng chiếu từ trên xuống.', isCorrect: false },
      { text: 'Có hướng chiếu từ trái sang phải.', isCorrect: false },
      { text: 'Có hướng chiếu từ phải sang trái.', isCorrect: false }
    ],
    explanation: 'Quy tắc hình chiếu vuông góc: Hình chiếu đứng có hướng chiếu từ trước tới; Hình chiếu bằng từ trên xuống; Hình chiếu cạnh từ trái sang phải.'
  },
  {
    id: 'tech_15',
    exKey: 'tech_mc',
    exTitle: 'Công nghệ 8 (Đúng/Sai)',
    questionText: 'Câu 15 (Đ/S). Cho các nhận định về quy chuẩn bản vẽ và hình chiếu sau:<br>a) Hình chiếu cạnh có hướng chiếu từ trái sang phải.<br>b) Đơn vị đo góc trên bản vẽ kĩ thuật là milimét.<br>c) Khổ giấy A4 có kích thước 297 x 210 mm.<br>d) Tỉ lệ 1:2 là tỉ lệ phóng to.<br>Phương án ghép Đúng (Đ) / Sai (S) chính xác là:',
    options: [
      { text: 'a-Đ, b-Đ, c-S, d-S.', isCorrect: false },
      { text: 'a-Đ, b-S, c-Đ, d-S.', isCorrect: true },
      { text: 'a-S, b-Đ, c-Đ, d-S.', isCorrect: false },
      { text: 'a-Đ, b-S, c-S, d-Đ.', isCorrect: false }
    ],
    explanation: 'Đáp án chuẩn theo Đề cương 8A6:<br>• a) ĐÚNG (Hình chiếu cạnh chiếu từ trái sang phải).<br>• b) SAI (Đơn vị đo góc là độ, phút, giây).<br>• c) ĐÚNG (Khổ A4 là 297 x 210 mm).<br>• d) SAI (Tỉ lệ 1:2 là tỉ lệ thu nhỏ).'
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
