// =========================================================================
// DATA: LỊCH SỬ 8 (CHUẨN ĐỀ CƯƠNG & ĐÁP ÁN CÔ GIÁO VERIFY - THCS NGHĨA TÂN)
// Nguồn đối chiếu: _a_p_a_n__e___cu_o_ng_GHKI_8_Lich_su_de48b655.pdf (8 Trang Đã Chữa)
// Gồm: 4 Câu Lớn Tự Luận Trọng Tâm (Bao quát 11 Luận Điểm) + 8 Câu Trắc Nghiệm Chuẩn Cô Giáo
// =========================================================================

window.HISTORY_DATABASE = [
  // =======================================================================
  // PHẦN I: 4 CÂU LỚN TỰ LUẬN TRỌNG TÂM (ĐÃ CHUẨN HÓA THEO ĐÁP ÁN CÔ GIÁO VERIFY)
  // =======================================================================

  // --- CÂU 1: CÁC CUỘC CÁCH MẠNG TƯ SẢN ĐẦU TIÊN (1a: Anh, 1b: Bắc Mỹ, 1c: Pháp) ---
  {
    id: 'his_1a',
    exKey: 'his_rev',
    exTitle: 'Lịch sử 8 - Câu 1: Bảng 3 Cuộc CMTS (CMTS Anh) [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 1a. Lập bảng hệ thống về Cách mạng tư sản Anh (thế kỉ XVII): Nguyên nhân, lãnh đạo, hình thức, kết quả, ý nghĩa và tính chất.',
    visualComponent: `
      <div class="my-3 p-4 bg-amber-50/70 border border-amber-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 600 130" class="w-full max-w-xl h-auto">
          <rect x="10" y="10" width="580" height="110" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="300" y="32" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">SƠ ĐỒ TỔNG KẾT: CÁCH MẠNG TƯ SẢN ANH (THẾ KỈ XVII)</text>
          
          <rect x="25" y="45" width="125" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
          <text x="87" y="65" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">NGUYÊN NHÂN</text>
          <text x="87" y="82" font-size="9" fill="#78350f" text-anchor="middle">Phong kiến cản trở</text>
          <text x="87" y="95" font-size="9" fill="#78350f" text-anchor="middle">tư sản & quý tộc mới</text>
          
          <path d="M 152 75 L 168 75" stroke="#d97706" stroke-width="2"/>

          <rect x="170" y="45" width="125" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
          <text x="232" y="65" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">LÃNH ĐẠO & HÌNH THỨC</text>
          <text x="232" y="82" font-size="9" fill="#78350f" text-anchor="middle">Tư sản + Quý tộc mới</text>
          <text x="232" y="95" font-size="9" fill="#b45309" font-weight="bold" text-anchor="middle">Hình thức: Nội chiến</text>

          <path d="M 297 75 L 313 75" stroke="#d97706" stroke-width="2"/>

          <rect x="315" y="45" width="125" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
          <text x="377" y="65" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">KẾT QUẢ (1688)</text>
          <text x="377" y="82" font-size="9" fill="#78350f" text-anchor="middle">Thiết lập thể chế</text>
          <text x="377" y="95" font-size="9" fill="#b45309" font-weight="bold" text-anchor="middle">Quân chủ lập hiến</text>

          <path d="M 442 75 L 458 75" stroke="#d97706" stroke-width="2"/>

          <rect x="460" y="45" width="120" height="60" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
          <text x="520" y="65" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">TÍNH CHẤT</text>
          <text x="520" y="82" font-size="9" fill="#dc2626" font-weight="bold" text-anchor="middle">Không triệt để</text>
          <text x="520" y="95" font-size="8.5" fill="#78350f" text-anchor="middle">Mở đường CNTB Anh</text>
        </svg>
        <span class="text-[11px] text-amber-800 font-bold mt-1">Học trọng tâm các ý gạch chân theo đáp án cô giáo</span>
      </div>
    `,
    totalPoints: 4,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân bùng nổ (Trọng tâm gạch chân)',
        template: 'Chế độ phong kiến Anh cản trở giai cấp tư sản và {k1} tự do {k2}.',
        slots: [
          { id: 'k1', expected: 'quý tộc mới', options: ['quý tộc mới', 'chủ nô', 'nông dân tá điền'] },
          { id: 'k2', expected: 'kinh doanh sản xuất', options: ['kinh doanh sản xuất', 'mua bán nô lệ', 'khai hoang đất đai'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Lãnh đạo và Hình thức đấu tranh',
        template: 'Lãnh đạo là giai cấp tư sản và quý tộc mới (tiêu biểu là {k3}); diễn ra dưới hình thức {k4} giữa Quốc hội và Nhà vua.',
        slots: [
          { id: 'k3', expected: 'Crôm-oen', options: ['Crôm-oen', 'Oa-sinh-tơn', 'Rô-be-spie'] },
          { id: 'k4', expected: 'nội chiến', options: ['nội chiến', 'chiến tranh giải phóng dân tộc', 'đấu tranh tôn giáo'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Kết quả và Thể chế được thiết lập',
        template: 'Năm 1688 thể chế {k5} được thiết lập, quyền lực nhà vua bị hạn chế dưới quyền của Quốc hội.',
        slots: [
          { id: 'k5', expected: 'quân chủ lập hiến', options: ['quân chủ lập hiến', 'cộng hòa tổng thống', 'quân chủ chuyên chế'] }
        ]
      },
      {
        pointNum: 4,
        title: 'Ý 4: Ý nghĩa và Tính chất (Trọng tâm gạch chân)',
        template: 'Mở đường cho CNTB Anh phát triển mạnh; mang tính chất là cuộc cách mạng tư sản {k6}.',
        slots: [
          { id: 'k6', expected: 'không triệt để', options: ['không triệt để', 'triệt để nhất', 'vô sản chuyên chính'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Nguyên nhân:</strong> Chế độ <u>phong kiến Anh cản trở tư sản, quý tộc mới tự do kinh doanh sản xuất</u>.<br>• <strong>Lãnh đạo:</strong> Tư sản, quý tộc mới (tiêu biểu <u>Crôm-oen</u>).<br>• <strong>Hình thức:</strong> <u>Nội chiến</u>.<br>• <strong>Thiết lập chế độ:</strong> <u>Quân chủ lập hiến</u>.<br>• <strong>Kết quả:</strong> Năm 1688 thể chế <u>quân chủ lập hiến</u> được thiết lập.<br>• <strong>Ý nghĩa:</strong> <u>Mở đường cho CNTB Anh phát triển mạnh</u>.<br>• <strong>Tính chất:</strong> <u>CMTS không triệt để</u> (do chưa giải quyết ruộng đất cho nông dân, duy trì ngôi vua danh nghĩa).'
  },
  {
    id: 'his_1b',
    exKey: 'his_rev',
    exTitle: 'Lịch sử 8 - Câu 1: Bảng 3 Cuộc CMTS (13 Thuộc Địa Bắc Mỹ) [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 1b. Lập bảng hệ thống về Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ (thế kỉ XVIII): Nguyên nhân, lãnh đạo, hình thức, kết quả, ý nghĩa và tính chất.',
    visualComponent: `
      <div class="my-3 p-4 bg-sky-50/70 border border-sky-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 600 130" class="w-full max-w-xl h-auto">
          <rect x="10" y="10" width="580" height="110" rx="12" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5"/>
          <text x="300" y="32" font-size="13" font-weight="bold" fill="#0369a1" text-anchor="middle">SƠ ĐỒ TỔNG KẾT: CHIẾN TRANH GIÀNH ĐỘC LẬP 13 THUỘC ĐỊA BẮC MỸ</text>
          
          <rect x="25" y="45" width="125" height="60" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
          <text x="87" y="65" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">NGUYÊN NHÂN</text>
          <text x="87" y="82" font-size="9" fill="#0c4a6e" text-anchor="middle">Thực dân Anh cản trở</text>
          <text x="87" y="95" font-size="9" fill="#0c4a6e" text-anchor="middle">kinh tế TBCN 13 thuộc địa</text>
          
          <path d="M 152 75 L 168 75" stroke="#0284c7" stroke-width="2"/>

          <rect x="170" y="45" width="125" height="60" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
          <text x="232" y="65" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">LÃNH ĐẠO & HÌNH THỨC</text>
          <text x="232" y="82" font-size="9" fill="#0c4a6e" text-anchor="middle">G. Oa-sinh-tơn (chủ nô & TS)</text>
          <text x="232" y="95" font-size="9" fill="#0284c7" font-weight="bold" text-anchor="middle">Chiến tranh giành độc lập</text>

          <path d="M 297 75 L 313 75" stroke="#0284c7" stroke-width="2"/>

          <rect x="315" y="45" width="125" height="60" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
          <text x="377" y="65" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">KẾT QUẢ TIÊU BIỂU</text>
          <text x="377" y="82" font-size="9" fill="#0c4a6e" text-anchor="middle">Tuyên ngôn Độc lập 1776</text>
          <text x="377" y="95" font-size="9" fill="#0369a1" font-weight="bold" text-anchor="middle">Khai sinh Hợp chúng quốc Hoa Kì</text>

          <path d="M 442 75 L 458 75" stroke="#0284c7" stroke-width="2"/>

          <rect x="460" y="45" width="120" height="60" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1"/>
          <text x="520" y="65" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">THIẾT LẬP & TÍNH CHẤT</text>
          <text x="520" y="82" font-size="9" fill="#0284c7" font-weight="bold" text-anchor="middle">Cộng hòa tổng thống</text>
          <text x="520" y="95" font-size="8.5" fill="#0c4a6e" text-anchor="middle">Tính chất CM tư sản</text>
        </svg>
        <span class="text-[11px] text-sky-800 font-bold mt-1">Học trọng tâm các ý gạch chân theo đáp án cô giáo</span>
      </div>
    `,
    totalPoints: 4,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân (Trọng tâm gạch chân)',
        template: 'Chính phủ thực dân Anh cản trở {k1} của 13 thuộc địa phát triển tự do.',
        slots: [
          { id: 'k1', expected: 'kinh tế tư bản', options: ['kinh tế tư bản', 'kinh tế phong kiến', 'thương mại nô lệ'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Lãnh đạo và Hình thức',
        template: 'Lãnh đạo tiêu biểu là {k2} (đại diện liên minh chủ nô và tư sản); hình thức là cuộc {k3}.',
        slots: [
          { id: 'k2', expected: 'G. Oa-sinh-tơn', options: ['G. Oa-sinh-tơn', 'Crôm-oen', 'Na-pô-lê-ông'] },
          { id: 'k3', expected: 'chiến tranh giành độc lập', options: ['chiến tranh giành độc lập', 'nội chiến tương tàn', 'đình công bãi khóa'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Kết quả và Thể chế được thiết lập',
        template: 'Anh công nhận độc lập của 13 thuộc địa; khai sinh một quốc gia mới là {k4}; thiết lập chế độ {k5}.',
        slots: [
          { id: 'k4', expected: 'Hợp chúng quốc Hoa Kì', options: ['Hợp chúng quốc Hoa Kì', 'Liên bang Ca-na-đa', 'Vương quốc Anh'] },
          { id: 'k5', expected: 'cộng hòa tổng thống', options: ['cộng hòa tổng thống', 'quân chủ lập hiến', 'quân chủ chuyên chế'] }
        ]
      },
      {
        pointNum: 4,
        title: 'Ý 4: Ý nghĩa và Tính chất',
        template: 'Mở đường cho kinh tế tư bản Mĩ phát triển; cuộc đấu tranh {k6}.',
        slots: [
          { id: 'k6', expected: 'mang tính chất cách mạng tư sản', options: ['mang tính chất cách mạng tư sản', 'là cách mạng vô sản', 'là phong kiến bảo hoàng'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Nguyên nhân:</strong> <u>Thực dân Anh cản trở kinh tế tư bản của 13 thuộc địa phát triển</u>.<br>• <strong>Lãnh đạo:</strong> Tiêu biểu là <u>G. Oa-sinh-tơn (chủ nô & tư sản)</u>.<br>• <strong>Hình thức:</strong> <u>Chiến tranh giành độc lập</u>.<br>• <strong>Thiết lập:</strong> Chế độ <u>cộng hòa tổng thống</u>.<br>• <strong>Kết quả:</strong> <u>Anh công nhận độc lập của 13 thuộc địa; Khai sinh 1 quốc gia mới: Hợp chúng quốc Hoa Kì</u> (Tuyên ngôn Độc lập 1776, Hiệp ước Véc-xai 1783).<br>• <strong>Ý nghĩa:</strong> <u>Mở đường cho kinh tế tư bản Mĩ phát triển</u>.<br>• <strong>Tính chất:</strong> <u>Mang tính chất cách mạng tư sản</u>.'
  },
  {
    id: 'his_1c',
    exKey: 'his_rev',
    exTitle: 'Lịch sử 8 - Câu 1: Bảng 3 Cuộc CMTS (CMTS Pháp) [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 1c. Lập bảng hệ thống về Cách mạng tư sản Pháp (1789): Nguyên nhân, lãnh đạo, hình thức, kết quả, ý nghĩa và tính chất.',
    visualComponent: `
      <div class="my-3 p-4 bg-rose-50/70 border border-rose-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 600 130" class="w-full max-w-xl h-auto">
          <rect x="10" y="10" width="580" height="110" rx="12" fill="#fff1f2" stroke="#e11d48" stroke-width="1.5"/>
          <text x="300" y="32" font-size="13" font-weight="bold" fill="#9f1239" text-anchor="middle">SƠ ĐỒ TỔNG KẾT: CÁCH MẠNG TƯ SẢN PHÁP (CUỐI THẾ KỈ XVIII)</text>
          
          <rect x="25" y="45" width="125" height="60" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="1"/>
          <text x="87" y="65" font-size="10" font-weight="bold" fill="#be123c" text-anchor="middle">NGUYÊN NHÂN</text>
          <text x="87" y="82" font-size="9" fill="#881337" text-anchor="middle">Phong kiến Pháp cản trở</text>
          <text x="87" y="95" font-size="9" fill="#881337" text-anchor="middle">tư sản tự do kinh doanh</text>
          
          <path d="M 152 75 L 168 75" stroke="#e11d48" stroke-width="2"/>

          <rect x="170" y="45" width="125" height="60" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="1"/>
          <text x="232" y="65" font-size="10" font-weight="bold" fill="#be123c" text-anchor="middle">LÃNH ĐẠO & HÌNH THỨC</text>
          <text x="232" y="82" font-size="9" fill="#881337" text-anchor="middle">Giai cấp tư sản</text>
          <text x="232" y="95" font-size="9" fill="#e11d48" font-weight="bold" text-anchor="middle">Đấu tranh giai cấp</text>

          <path d="M 297 75 L 313 75" stroke="#e11d48" stroke-width="2"/>

          <rect x="315" y="45" width="125" height="60" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="1"/>
          <text x="377" y="65" font-size="10" font-weight="bold" fill="#be123c" text-anchor="middle">KẾT QUẢ & THIẾT LẬP</text>
          <text x="377" y="82" font-size="9" fill="#881337" text-anchor="middle">Lật đổ phong kiến</text>
          <text x="377" y="95" font-size="9" fill="#be123c" font-weight="bold" text-anchor="middle">Chế độ cộng hòa</text>

          <path d="M 442 75 L 458 75" stroke="#e11d48" stroke-width="2"/>

          <rect x="460" y="45" width="120" height="60" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="1"/>
          <text x="520" y="65" font-size="10" font-weight="bold" fill="#be123c" text-anchor="middle">TÍNH CHẤT NỔI BẬT</text>
          <text x="520" y="82" font-size="9" fill="#be123c" font-weight="bold" text-anchor="middle">Triệt để, điển hình nhất</text>
          <text x="520" y="95" font-size="8.5" fill="#881337" text-anchor="middle">"Cái chổi quét sạch PK"</text>
        </svg>
        <span class="text-[11px] text-rose-800 font-bold mt-1">Học trọng tâm các ý gạch chân theo đáp án cô giáo</span>
      </div>
    `,
    totalPoints: 4,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân (Trọng tâm gạch chân)',
        template: 'Chế độ phong kiến Pháp cản trở giai cấp tư sản tự do {k1}.',
        slots: [
          { id: 'k1', expected: 'kinh doanh sản xuất', options: ['kinh doanh sản xuất', 'chiếm đất lập thuộc địa', 'bầu cử dân chủ'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Lãnh đạo và Hình thức',
        template: 'Lãnh đạo cách mạng là {k2}; diễn ra dưới hình thức {k3} quyết liệt giữa Đẳng cấp thứ ba và chế độ phong kiến.',
        slots: [
          { id: 'k2', expected: 'giai cấp tư sản', options: ['giai cấp tư sản', 'quý tộc mới', 'giai cấp vô sản'] },
          { id: 'k3', expected: 'đấu tranh giai cấp', options: ['đấu tranh giai cấp', 'nội chiến quý tộc', 'đấu tranh hòa bình nghị viện'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Kết quả và Thể chế thiết lập',
        template: 'Lật đổ hoàn toàn chế độ phong kiến, thiết lập {k4}.',
        slots: [
          { id: 'k4', expected: 'chế độ cộng hòa', options: ['chế độ cộng hòa', 'chế độ quân chủ lập hiến', 'đế chế phong kiến'] }
        ]
      },
      {
        pointNum: 4,
        title: 'Ý 4: Ý nghĩa và Tính chất (Trọng tâm so sánh)',
        template: 'Mở đường cho CNTB Pháp phát triển; là cuộc cách mạng dân chủ tư sản {k5}, được ví như {k6} rác rưởi phong kiến.',
        slots: [
          { id: 'k5', expected: 'triệt để, điển hình nhất', options: ['triệt để, điển hình nhất', 'không triệt để', 'nửa vời'] },
          { id: 'k6', expected: 'cái chổi quét sạch', options: ['cái chổi quét sạch', 'ngọn hải đăng', 'cầu nối thỏa hiệp'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Nguyên nhân:</strong> <u>Phong kiến Pháp cản trở tư sản tự do kinh doanh sản xuất</u>.<br>• <strong>Lãnh đạo:</strong> <u>Tư sản</u>.<br>• <strong>Hình thức:</strong> <u>Đấu tranh giai cấp</u>.<br>• <strong>Thiết lập:</strong> <u>Chế độ cộng hòa</u>.<br>• <strong>Kết quả:</strong> <u>Lật đổ phong kiến, thiết lập chế độ cộng hòa</u>.<br>• <strong>Ý nghĩa:</strong> <u>Mở đường cho CNTB Pháp phát triển</u>.<br>• <strong>Tính chất:</strong> <u>Cách mạng dân chủ tư sản (CMTS) triệt để, điển hình nhất; "cái chổi quét sạch phong kiến"</u>.'
  },

  // --- CÂU 2: CÁCH MẠNG CÔNG NGHIỆP ANH ---
  {
    id: 'his_2',
    exKey: 'his_ind',
    exTitle: 'Lịch sử 8 - Câu 2: Cách Mạng Công Nghiệp [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 2. Trình bày những phát minh cơ khí tiêu biểu của Cách mạng công nghiệp ở Anh và nêu ý nghĩa lịch sử chuyển dịch nền văn minh nhân loại.',
    visualComponent: `
      <div class="my-3 p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 600 130" class="w-full max-w-xl h-auto">
          <rect x="10" y="10" width="580" height="110" rx="12" fill="#ecfdf5" stroke="#059669" stroke-width="1.5"/>
          <text x="300" y="30" font-size="12" font-weight="bold" fill="#065f46" text-anchor="middle">DÒNG THỜI GIAN PHÁT MINH TIÊU BIỂU CÁCH MẠNG CÔNG NGHIỆP ANH</text>
          
          <line x1="30" y1="70" x2="570" y2="70" stroke="#059669" stroke-width="2"/>

          <!-- 1764 -->
          <circle cx="65" cy="70" r="5" fill="#059669"/>
          <text x="65" y="60" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">1764</text>
          <text x="65" y="86" font-size="8.5" font-weight="bold" fill="#064e3b" text-anchor="middle">Giêm Ha-gri-vơ</text>
          <text x="65" y="98" font-size="8" fill="#065f46" text-anchor="middle">Máy kéo sợi Gien-ni</text>

          <!-- 1769 -->
          <circle cx="185" cy="70" r="5" fill="#059669"/>
          <text x="185" y="60" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">1769</text>
          <text x="185" y="86" font-size="8.5" font-weight="bold" fill="#064e3b" text-anchor="middle">Ác-rai</text>
          <text x="185" y="98" font-size="8" fill="#065f46" text-anchor="middle">Máy kéo sợi sức nước</text>

          <!-- 1784 -->
          <circle cx="310" cy="70" r="7" fill="#dc2626"/>
          <text x="310" y="58" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">1784 ★</text>
          <text x="310" y="86" font-size="8.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Giêm Oát (Watt)</text>
          <text x="310" y="98" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">Máy hơi nước</text>

          <!-- 1785 -->
          <circle cx="430" cy="70" r="5" fill="#059669"/>
          <text x="430" y="60" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">1785</text>
          <text x="430" y="86" font-size="8.5" font-weight="bold" fill="#064e3b" text-anchor="middle">Các-rai</text>
          <text x="430" y="98" font-size="8" fill="#065f46" text-anchor="middle">Máy dệt cơ khí</text>

          <!-- 1814 -->
          <circle cx="535" cy="70" r="5" fill="#059669"/>
          <text x="535" y="60" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">1814</text>
          <text x="535" y="86" font-size="8.5" font-weight="bold" fill="#064e3b" text-anchor="middle">Xti-phen-xơn</text>
          <text x="535" y="98" font-size="8" fill="#065f46" text-anchor="middle">Đầu máy xe lửa</text>
        </svg>
        <span class="text-[11px] text-emerald-800 font-bold mt-1">Anh: Khởi đầu CMCN $\rightarrow$ "Công xưởng của thế giới"</span>
      </div>
    `,
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Các phát minh tiêu biểu',
        template: 'Năm 1764 Giêm Ha-gri-vơ phát minh {k1}; Ác-rai phát minh máy kéo sợi chạy bằng {k2}; đột phá năng lượng là {k3} của Giêm Oát (1784); Các-rai phát minh máy dệt; Xti-phen-xơn chế tạo đầu máy xe lửa (1814).',
        slots: [
          { id: 'k1', expected: 'máy kéo sợi Gien-ni', options: ['máy kéo sợi Gien-ni', 'máy may công nghiệp', 'máy in kim'] },
          { id: 'k2', expected: 'sức nước', options: ['sức nước', 'sức gió', 'dầu mỏ'] },
          { id: 'k3', expected: 'máy hơi nước', options: ['máy hơi nước', 'động cơ điện xoay chiều', 'động cơ đốt trong'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Nước khởi đầu và Vị thế nước Anh',
        template: 'Nước khởi đầu CMCN là nước Anh $\\rightarrow$ nước Anh được mệnh danh là {k4}.',
        slots: [
          { id: 'k4', expected: 'công xưởng thế giới', options: ['công xưởng thế giới', 'đất nước nông nghiệp', 'xứ sở sương mù'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Bước chuyển dịch nền văn minh nhân loại',
        template: 'Cách mạng công nghiệp thế kỉ 18 - 19 đã chuyển đổi căn bản xã hội loài người từ nền văn minh {k5} sang nền văn minh {k6}.',
        slots: [
          { id: 'k5', expected: 'nông nghiệp', options: ['nông nghiệp', 'săn bắt hái lượm', 'chiếm hữu nô lệ'] },
          { id: 'k6', expected: 'công nghiệp', options: ['công nghiệp', 'thông tin số', 'hậu hiện đại'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Các phát minh tiêu biểu:</strong><br>- <u>Giêm Ha-gri-vơ: máy kéo sợi Gien-ni (1764)</u>.<br>- <u>Ác-rai: máy kéo sợi chạy bằng sức nước</u>.<br>- <u>Giêm Oát: máy hơi nước (1784)</u>.<br>- <u>Các-rai: máy dệt</u>.<br>- <u>Xti-phen-xơn: đầu máy xe lửa (1814)</u>.<br>• <strong>Vị thế:</strong> <u>Anh là nước khởi đầu CMCN $\\rightarrow$ được mệnh danh là "công xưởng thế giới"</u>.<br>• <strong>Ý nghĩa lịch sử thời đại:</strong> <u>CMCN thế kỉ 18–19 đã chuyển loài người từ văn minh nông nghiệp sang văn minh công nghiệp</u>.'
  },

  // --- CÂU 3: ĐÔNG NAM Á DƯỚI ÁCH ĐÔ HỘ (3a, 3b, 3c) ---
  {
    id: 'his_3a',
    exKey: 'his_sea',
    exTitle: 'Lịch sử 8 - Câu 3: Đông Nam Á (Tình hình chung) [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 3a. Trình bày những nét chính về tình hình chính trị, kinh tế, văn hóa - xã hội của các nước Đông Nam Á dưới ách đô hộ của thực dân phương Tây.',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Về Chính trị',
        template: 'Các nước thực dân tước đoạt độc lập chủ quyền, thiết lập bộ máy cai trị hà khắc và thi hành chính sách {k1} để chia rẽ khối đoàn kết dân tộc.',
        slots: [
          { id: 'k1', expected: 'chia để trị', options: ['chia để trị', 'bảo tồn nguyên vẹn', 'hòa hợp dân tộc'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Về Kinh tế',
        template: 'Đẩy mạnh vơ vét tài nguyên thiên nhiên, cướp đoạt ruộng đất lập đồn điền, bóc lột nhân công và biến Đông Nam Á thành {k2} độc quyền của tư sản chính quốc.',
        slots: [
          { id: 'k2', expected: 'thị trường tiêu thụ hàng hóa', options: ['thị trường tiêu thụ hàng hóa', 'trung tâm công nghiệp nặng', 'khu vực thương mại tự do'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Về Văn hóa - Xã hội',
        template: 'Thi hành chính sách {k3}, hạn chế trường học, đầu độc bằng rượu và thuốc phiện; nhân dân bị phân hóa và chịu cảnh bần cùng hóa cùng cực.',
        slots: [
          { id: 'k3', expected: 'ngu dân', options: ['ngu dân', 'phổ cập giáo dục', 'bảo tồn truyền thống'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Chính trị:</strong> Đa số các nước Đông Nam Á bị biến thành thuộc địa; thực dân tước đoạt độc lập, thi hành chính sách "chia để trị" tinh vi.<br>• <strong>Kinh tế:</strong> Biến thành nơi cung cấp tài nguyên thô rẻ mạt và thị trường tiêu thụ hàng hóa độc quyền; kìm hãm không cho nền công nghiệp bản địa phát triển.<br>• <strong>Văn hóa - Xã hội:</strong> Thi hành chính sách "ngu dân", duy trì hủ tục lạc hậu; đời sống nhân dân cực khổ, mâu thuẫn dân tộc ngày càng sâu sắc.'
  },
  {
    id: 'his_3b',
    exKey: 'his_sea',
    exTitle: 'Lịch sử 8 - Câu 3b: Nhận Xét Chính Sách Đô Hộ [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 3b. Em có nhận xét gì về chính sách đô hộ của thực dân phương Tây đối với các nước Đông Nam Á?',
    totalPoints: 2,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Bản chất thâm độc, toàn diện (Chuẩn cô giáo)',
        template: 'Chính sách đô hộ của thực dân phương Tây đối với các nước Đông Nam Á rất {k1}, toàn diện trên tất cả các mặt {k2}, nhằm phục vụ lợi ích của tư sản chính quốc.',
        slots: [
          { id: 'k1', expected: 'thâm độc', options: ['thâm độc', 'nhân đạo', 'tiến bộ'] },
          { id: 'k2', expected: 'chính trị, kinh tế, văn hóa - giáo dục', options: ['chính trị, kinh tế, văn hóa - giáo dục', 'quân sự thuần túy', 'ngoại giao hòa bình'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Hậu quả và Sự phản kháng dân tộc',
        template: 'Làm cho kinh tế các nước Đông Nam Á {k3}, phụ thuộc; đời sống nhân dân cực khổ dẫn đến sự {k4} của các phong trào đấu tranh giành độc lập.',
        slots: [
          { id: 'k4', expected: 'bùng nổ mạnh mẽ', options: ['bùng nổ mạnh mẽ', 'suy thoái đình đốn', 'chấp nhận cam chịu'] },
          { id: 'k3', expected: 'què quặt, lạc hậu', options: ['què quặt, lạc hậu', 'công nghiệp hóa thịnh vượng', 'tự chủ vững chắc'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Bản chất:</strong> Chính sách đô hộ của thực dân phương Tây đối với các nước Đông Nam Á rất <u>thâm độc, toàn diện trên tất cả các mặt: chính trị, kinh tế, văn hoá - giáo dục</u>.<br>• <strong>Mục đích:</strong> Chính sách đó đã <u>phục vụ cho quyền lợi của thực dân chính quốc, bóc lột sức người, vơ vét của cải của thuộc địa</u>.<br>• <strong>Hệ quả:</strong> Làm cho kinh tế các nước Đông Nam Á què quặt, lạc hậu, phụ thuộc vào chính quốc; đời sống nhân dân cực khổ, mâu thuẫn dân tộc sâu sắc dẫn đến <u>sự bùng nổ của các phong trào đấu tranh giành độc lập</u>.'
  },
  {
    id: 'his_3c',
    exKey: 'his_sea',
    exTitle: 'Lịch sử 8 - Câu 3c: Phản Biện Luận Điệu "Giúp Đỡ" [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 3c. Có ý kiến cho rằng: "Các nước tư bản phương Tây đến Đông Nam Á là để giúp đỡ những nước này thoát khỏi nghèo nàn, lạc hậu". Em có đồng ý với ý kiến đó không? Vì sao?',
    totalPoints: 2,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Thái độ và Quan điểm dứt khoát',
        template: 'Em {k1} với ý kiến trên, vì đây chỉ là luận điệu ngụy biện nhằm che đậy hành vi {k2} tàn bạo.',
        slots: [
          { id: 'k1', expected: 'hoàn toàn không đồng ý', options: ['hoàn toàn không đồng ý', 'đồng ý hoàn toàn', 'đồng ý phần lớn'] },
          { id: 'k2', expected: 'xâm lược và bóc lột thuộc địa', options: ['xâm lược và bóc lột thuộc địa', 'hợp tác phát triển', 'giao lưu văn hóa'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Lý giải thực chất mục đích và chính sách (Chuẩn cô giáo)',
        template: 'Mục đích thực sự là vơ vét tài nguyên, bóc lột nhân công rẻ mạt và {k3}; đồng thời thi hành chính sách {k4}, đầu độc bằng rượu cồn, thuốc phiện để làm suy yếu nòi giống.',
        slots: [
          { id: 'k3', expected: 'độc chiếm thị trường tiêu thụ', options: ['độc chiếm thị trường tiêu thụ', 'giải quyết nạn đói', 'xây dựng nhà máy tự chủ'] },
          { id: 'k4', expected: 'ngu dân, cổ súy hủ tục', options: ['ngu dân, cổ súy hủ tục', 'phổ cập đại học', 'xóa bỏ giai cấp'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Quan điểm:</strong> <u>Hoàn toàn không đồng ý</u> với ý kiến trên.<br>• <strong>Vì sao (Lý giải theo đáp án cô giáo):</strong><br>1. <u>Mục đích thực sự:</u> vơ vét tài nguyên thiên nhiên, bóc lột sức lao động rẻ mạt, độc chiếm thị trường tiêu thụ.<br>2. <u>Chính sách tàn độc:</u> Thi hành chính sách "ngu dân", đầu độc thuốc phiện, cổ súy các hủ tục lạc hậu để <u>làm suy yếu nòi giống</u> và dễ bề cai trị.<br>3. <u>Hậu quả:</u> Biến các nước Đông Nam Á thành thuộc địa nghèo nàn, lạc hậu, mất độc lập chủ quyền, chứ <u>không hề có sự "giúp đỡ" hay "khai hóa văn minh"</u>.'
  },

  // --- CÂU 4: XUNG ĐỘT NAM - BẮC TRIỀU & TRỊNH - NGUYỄN ---
  {
    id: 'his_4a',
    exKey: 'his_conflict',
    exTitle: 'Lịch sử 8 - Câu 4a: Xung Đột Nam - Bắc Triều [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 4a. Trình bày nguyên nhân, diễn biến và hệ quả của cuộc xung đột Nam – Bắc triều (thế kỉ XVI).',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân (Các mốc 1527, 1533)',
        template: 'Năm 1527, {k1} cướp ngôi nhà Lê lập ra Bắc triều (nhà Mạc); năm 1533 {k2} tập hợp lực lượng "phù Lê diệt Mạc", lập ra Nam triều.',
        slots: [
          { id: 'k1', expected: 'Mạc Đăng Dung', options: ['Mạc Đăng Dung', 'Trịnh Kiểm', 'Nguyễn Hoàng'] },
          { id: 'k2', expected: 'Nguyễn Kim', options: ['Nguyễn Kim', 'Lê Chiêu Thống', 'Trịnh Tùng'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Diễn biến thời gian (Chuẩn 60 năm: 1533 - 1592)',
        template: 'Cuộc chiến kéo dài {k3} (1533 - 1592); đến năm 1592 quân Nam triều chiếm được Thăng Long, họ Mạc phải rút lên {k4}.',
        slots: [
          { id: 'k3', expected: '60 năm', options: ['60 năm', '20 năm', '100 năm'] },
          { id: 'k4', expected: 'Cao Bằng', options: ['Cao Bằng', 'Thanh Hóa', 'Gia Định'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Hệ quả đối với đất nước (Trọng tâm gạch chân)',
        template: 'Đất nước bị chia cắt, vùng {k5} trở thành chiến trường chính; kinh tế tàn phá, ruộng đồng bỏ hoang, nhân dân bần cùng đói rét ly tán.',
        slots: [
          { id: 'k5', expected: 'Thanh - Nghệ và đồng bằng Bắc Bộ', options: ['Thanh - Nghệ và đồng bằng Bắc Bộ', 'Tây Nguyên và Nam Bộ', 'vùng Duyên hải Nam Trung Bộ'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Nguyên nhân:</strong><br>- Năm 1527, <u>Mạc Đăng Dung cướp ngôi nhà Lê lập ra Bắc triều (nhà Mạc)</u>.<br>- Năm 1533, <u>Nguyễn Kim tập hợp lực lượng "phù Lê diệt Mạc", lập ra Nam triều</u>.<br>• <strong>Diễn biến:</strong> Kéo dài <u>60 năm (1533 - 1592)</u>. Năm 1592, quân Nam triều chiếm Thăng Long, <u>Mạc chạy lên vùng Cao Bằng</u>.<br>• <strong>Hệ quả:</strong><br>- Đất nước bị chia cắt, vùng <u>Thanh - Nghệ và đồng bằng Bắc Bộ là chiến trường chính</u>.<br>- Kinh tế bị tàn phá nặng nề, sản xuất đình trệ, ruộng đồng bỏ hoang.<br>- Nhân dân rơi vào cảnh <u>bần cùng, đói rét, phiêu bạt ly tán</u>.'
  },
  {
    id: 'his_4b',
    exKey: 'his_conflict',
    exTitle: 'Lịch sử 8 - Câu 4b: Xung Đột Trịnh - Nguyễn [Đáp án cô giáo verify]',
    type: 'keypoint_checklist',
    questionText: 'Câu 4b. Trình bày nguyên nhân, diễn biến và hệ quả của cuộc xung đột Trịnh – Nguyễn (thế kỉ XVII).',
    visualComponent: `
      <div class="my-3 p-4 bg-orange-50/70 border border-orange-200 rounded-2xl flex flex-col items-center">
        <svg viewBox="0 0 600 140" class="w-full max-w-xl h-auto">
          <rect x="10" y="10" width="580" height="120" rx="12" fill="#fffaf0" stroke="#ea580c" stroke-width="1.5"/>
          <text x="300" y="30" font-size="12" font-weight="bold" fill="#9a3412" text-anchor="middle">LƯỢC ĐỒ PHÂN CHIA ĐÀNG NGOÀI - ĐÀNG TRONG (THẾ KỈ XVII - XVIII)</text>
          
          <!-- Đàng Ngoài -->
          <rect x="40" y="45" width="220" height="70" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1"/>
          <text x="150" y="65" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="middle">ĐÀNG NGOÀI</text>
          <text x="150" y="82" font-size="9.5" fill="#7c2d12" text-anchor="middle">Vua Lê - Chúa Trịnh</text>
          <text x="150" y="98" font-size="8.5" fill="#9a3412" text-anchor="middle">Kinh đô: Thăng Long</text>

          <!-- Ranh giới Sông Gianh & Lũy Thầy -->
          <line x1="280" y1="40" x2="280" y2="120" stroke="#dc2626" stroke-width="3" stroke-dasharray="4"/>
          <text x="300" y="70" font-size="10" font-weight="bold" fill="#dc2626" text-anchor="middle">SÔNG GIANH</text>
          <text x="300" y="86" font-size="9" font-weight="bold" fill="#b91c1c" text-anchor="middle">& LŨY THẦY</text>
          <text x="300" y="102" font-size="8" fill="#7f1d1d" text-anchor="middle">(Quảng Bình)</text>

          <!-- Đàng Trong -->
          <rect x="340" y="45" width="220" height="70" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1"/>
          <text x="450" y="65" font-size="11" font-weight="bold" fill="#c2410c" text-anchor="middle">ĐÀNG TRONG</text>
          <text x="450" y="82" font-size="9.5" fill="#7c2d12" text-anchor="middle">Các Chúa Nguyễn</text>
          <text x="450" y="98" font-size="8.5" fill="#9a3412" text-anchor="middle">Khai hoang mở rộng về phía Nam</text>
        </svg>
        <span class="text-[11px] text-orange-900 font-bold mt-1">Sông Gianh & Lũy Thầy (Quảng Bình) chia cắt đất nước hơn 1 thế kỉ</span>
      </div>
    `,
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân (1545, 1558)',
        template: 'Năm 1545 Nguyễn Kim chết, con rể là {k1} nắm binh quyền; năm 1558 {k2} xin vào trấn thủ Thuận Hóa; đến thời Nguyễn Phúc Nguyên cắt đứt hoàn toàn quan hệ.',
        slots: [
          { id: 'k1', expected: 'Trịnh Kiểm', options: ['Trịnh Kiểm', 'Trịnh Tùng', 'Mạc Đăng Dung'] },
          { id: 'k2', expected: 'Nguyễn Hoàng', options: ['Nguyễn Hoàng', 'Nguyễn Uông', 'Nguyễn Huệ'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Diễn biến (1627 - 1672, 7 lần đại chiến)',
        template: 'Năm 1627 bùng nổ xung đột, kéo dài gần nửa thế kỉ với {k3} lớn không phân thắng bại; hai bên lấy {k4} làm giới tuyến chia cắt.',
        slots: [
          { id: 'k3', expected: '7 lần đại chiến', options: ['7 lần đại chiến', '3 lần', '12 lần'] },
          { id: 'k4', expected: 'sông Gianh và Luỹ Thầy (Quảng Bình)', options: ['sông Gianh và Luỹ Thầy (Quảng Bình)', 'sông Bến Hải', 'đèo Hải Vân'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Hệ quả và Điểm tích cực khách quan',
        template: 'Đất nước bị chia cắt hơn {k5}; mặt tích cực khách quan là chúa Nguyễn đã di dân {k6}.',
        slots: [
          { id: 'k5', expected: '100 năm (hơn 1 thế kỉ)', options: ['100 năm (hơn 1 thế kỉ)', '10 năm', '500 năm'] },
          { id: 'k6', expected: 'mở rộng lãnh thổ về phía Nam', options: ['mở rộng lãnh thổ về phía Nam', 'liên kết với phương Tây', 'đánh chiếm Bắc Triều'] }
        ]
      }
    ],
    fullSolution: '<strong>[Đáp án cô giáo verify]</strong><br>• <strong>Nguyên nhân:</strong><br>- Năm 1545, <u>Nguyễn Kim chết, Trịnh Kiểm nắm binh quyền (chúa Trịnh)</u>.<br>- Năm 1558, <u>Nguyễn Hoàng vào trấn thủ Thuận Hóa</u>.<br>- Đến đời <u>Nguyễn Phúc Nguyên cắt đứt quan hệ</u>.<br>• <strong>Diễn biến:</strong> Năm 1627 bùng nổ, kéo dài gần nửa thế kỉ <u>(1627 - 1672) với 7 lần đại chiến</u>; lấy <u>sông Gianh và Luỹ Thầy (Quảng Bình) làm ranh giới chia cắt Đàng Ngoài - Đàng Trong</u>.<br>• <strong>Hệ quả:</strong><br>- Chia cắt đất nước <u>hơn 1 thế kỉ (hơn 100 năm)</u>, gây suy kiệt sức người sức của.<br>- <u>Mặt tích cực khách quan:</u> Chúa Nguyễn ở Đàng Trong đẩy mạnh công cuộc khai hoang, <u>di dân mở rộng lãnh thổ về phía Nam</u>.'
  },

  // =======================================================================
  // PHẦN II: 8 CÂU TRẮC NGHIỆM LỊCH SỬ CHUẨN CÔ GIÁO VERIFY (TRANG 8 PDF)
  // =======================================================================
  {
    id: 'his_mc_1',
    exKey: 'his_mc',
    exTitle: 'Lịch sử 8 - Trắc nghiệm [Đáp án cô giáo verify]',
    questionText: 'Câu 1. Đâu không phải là đặc điểm của cuộc chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ?',
    options: [
      { text: 'A. Do tầng lớp tư sản và chủ nô lãnh đạo.', isCorrect: false },
      { text: 'B. Diễn ra dưới hình thức chiến tranh giải phóng dân tộc.', isCorrect: false },
      { text: 'C. Đưa đến sự thành lập Hợp chúng quốc Hoa Kỳ.', isCorrect: false },
      { text: 'D. Thiết lập chế độ quân chủ lập hiến.', isCorrect: true }
    ],
    explanation: '<strong>[Đáp án cô giáo verify]</strong> Chọn D. Cuộc chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ thiết lập <em>chế độ cộng hòa tổng thống</em>, không phải quân chủ lập hiến (chế độ quân chủ lập hiến được thiết lập ở Cách mạng tư sản Anh).'
  },
  {
    id: 'his_mc_2',
    exKey: 'his_mc',
    exTitle: 'Lịch sử 8 - Trắc nghiệm [Đáp án cô giáo verify]',
    questionText: 'Câu 2. Giai cấp lãnh đạo cuộc Cách mạng tư sản Pháp cuối thế kỉ XVIII là:',
    options: [
      { text: 'A. Giai cấp tư sản.', isCorrect: true },
      { text: 'B. Tăng lữ giáo hội.', isCorrect: false },
      { text: 'C. Quý tộc phong kiến phong kiến.', isCorrect: false },
      { text: 'D. Giai cấp công nhân vô sản.', isCorrect: false }
    ],
    explanation: '<strong>[Đáp án cô giáo verify]</strong> Chọn A. Giai cấp tư sản là lực lượng đứng đầu Đẳng cấp thứ ba, lãnh đạo quần chúng nhân dân lật đổ chế độ quân chủ chuyên chế Pháp.'
  },
  {
    id: 'his_mc_3',
    exKey: 'his_mc',
    exTitle: 'Lịch sử 8 - Trắc nghiệm [Đáp án cô giáo verify]',
    questionText: 'Câu 3. Cuộc cách mạng tư sản nào thời cận đại được ví như "cái chổi khổng lồ quét sạch rác rưởi phong kiến"?',
    options: [
      { text: 'A. Cách mạng tư sản Hà Lan.', isCorrect: false },
      { text: 'B. Cách mạng tư sản Anh.', isCorrect: false },
      { text: 'C. Cách mạng tư sản Pháp.', isCorrect: true },
      { text: 'D. Chiến tranh giành độc lập Bắc Mỹ.', isCorrect: false }
    ],
    explanation: '<strong>[Đáp án cô giáo verify]</strong> Chọn C. Cách mạng tư sản Pháp là cuộc cách mạng triệt để nhất, lật đổ tận gốc chế độ quân chủ chuyên chế và tàn dư phong kiến, ban bố bản Tuyên ngôn Nhân quyền và Dân quyền lịch sử.'
  },
  {
    id: 'his_mc_4',
    exKey: 'his_mc',
    exTitle: 'Lịch sử 8 - Trắc nghiệm [Đáp án cô giáo verify]',
    questionText: 'Câu 4. Năm 1764, Giêm Ha-gri-vơ đã phát minh ra cỗ máy nào đánh dấu bước khởi đầu Cách mạng công nghiệp ở Anh?',
    options: [
      { text: 'A. Máy kéo sợi chạy bằng sức nước.', isCorrect: false },
      { text: 'B. Máy kéo sợi Gien-ni.', isCorrect: true },
      { text: 'C. Máy hơi nước.', isCorrect: false },
      { text: 'D. Đầu máy xe lửa.', isCorrect: false }
    ],
    explanation: '<strong>[Đáp án cô giáo verify]</strong> Chọn B. Năm 1764 Giêm Ha-gri-vơ sáng chế ra máy kéo sợi Gien-ni (lấy tên con gái ông), nâng cao năng suất kéo sợi lên nhiều lần so với xa quay tay thủ công.'
  },
  {
    id: 'his_mc_5',
    exKey: 'his_mc',
    exTitle: 'Lịch sử 8 - Trắc nghiệm [Đáp án cô giáo verify]',
    questionText: 'Câu 5. Ai là người chế tạo thành công máy hơi nước năm 1784, tạo ra động lực mới không phụ thuộc vào dòng sông hay địa hình?',
    options: [
      { text: 'A. Giêm Oát (James Watt).', isCorrect: true },
      { text: 'B. Ác-rai.', isCorrect: false },
      { text: 'C. Ét-mơn Các-rai.', isCorrect: false },
      { text: 'D. G. Xti-phen-xơn.', isCorrect: false }
    ],
    explanation: '<strong>[Đáp án cô giáo verify]</strong> Chọn A. Năm 1784, Giêm Oát (James Watt) đã hoàn thiện máy hơi nước, đánh dấu bước ngoặt đưa nền sản xuất bước vào thời đại cơ khí đại công nghiệp.'
  },
  {
    id: 'his_mc_6',
    exKey: 'his_mc',
    exTitle: 'Lịch sử 8 - Trắc nghiệm [Đáp án cô giáo verify]',
    questionText: 'Câu 6. Tính chất của cuộc Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ là gì?',
    options: [
      { text: 'A. Một cuộc cách mạng vô sản.', isCorrect: false },
      { text: 'B. Một cuộc chiến tranh phong kiến thuần túy.', isCorrect: false },
      { text: 'C. Mang tính chất một cuộc cách mạng tư sản.', isCorrect: true },
      { text: 'D. Một cuộc bạo loạn nông dân tự phát.', isCorrect: false }
    ],
    explanation: '<strong>[Đáp án cô giáo verify]</strong> Chọn C. Cuộc chiến tranh giành độc lập của 13 thuộc địa Bắc Mỹ vừa là chiến tranh giải phóng dân tộc vừa mang tính chất cách mạng tư sản vì lật đổ ách thống trị thực dân Anh, mở đường cho CNTB phát triển.'
  },
  {
    id: 'his_mc_7',
    exKey: 'his_mc',
    exTitle: 'Lịch sử 8 - Trắc nghiệm [Đáp án cô giáo verify]',
    questionText: 'Câu 7. Văn kiện lịch sử công bố ngày 4-7-1776 chính thức khai sinh ra Hợp chúng quốc Hoa Kỳ là:',
    options: [
      { text: 'A. Hiến pháp năm 1787.', isCorrect: false },
      { text: 'B. Tuyên ngôn Độc lập.', isCorrect: true },
      { text: 'C. Tuyên ngôn Nhân quyền và Dân quyền.', isCorrect: false },
      { text: 'D. Sắc lệnh ruộng đất.', isCorrect: false }
    ],
    explanation: '<strong>[Đáp án cô giáo verify]</strong> Chọn B. Ngày 4-7-1776, Đại hội lục địa thông qua bản Tuyên ngôn Độc lập do T. Giép-phéc-xơn soạn thảo, khẳng định mọi người sinh ra đều có quyền bình đẳng, quyền sống, quyền tự do và quyền mưu cầu hạnh phúc.'
  },
  {
    id: 'his_mc_8',
    exKey: 'his_mc',
    exTitle: 'Lịch sử 8 - Trắc nghiệm [Đáp án cô giáo verify]',
    questionText: 'Câu 8. Quốc gia nào là nước khởi đầu cuộc Cách mạng công nghiệp thế kỉ XVIII - XIX và được mệnh danh là "công xưởng của thế giới"?',
    options: [
      { text: 'A. Nước Pháp.', isCorrect: false },
      { text: 'B. Nước Mỹ.', isCorrect: false },
      { text: 'C. Nước Anh.', isCorrect: true },
      { text: 'D. Nước Đức.', isCorrect: false }
    ],
    explanation: '<strong>[Đáp án cô giáo verify]</strong> Chọn C. Nước Anh là nước khởi đầu cuộc Cách mạng công nghiệp (từ những năm 60 của thế kỉ XVIII trong ngành dệt), vươn lên thành nền kinh tế công nghiệp số một thế giới.'
  }
];
