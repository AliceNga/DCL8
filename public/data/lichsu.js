// =========================================================================
// DATA: LỊCH SỬ 8 (4 CÂU LỚN BAO QUÁT 11 LUẬN ĐIỂM CHUẨN ĐỀ CƯƠNG)
// Đề cương Giữa Học Kì I - THCS Nghĩa Tân (2026-2027)
// =========================================================================

window.HISTORY_DATABASE = [
  // --- CÂU 1: CÁC CUỘC CÁCH MẠNG TƯ SẢN ĐẦU TIÊN (1a: Anh, 1b: Bắc Mỹ, 1c: Pháp) ---
  {
    id: 'his_1a',
    exKey: 'his_rev',
    exTitle: 'Lịch sử 8 - Câu 1: Các cuộc CMTS',
    type: 'keypoint_checklist',
    questionText: 'Câu 1a. Lập bảng hệ thống về Cách mạng tư sản Anh (thế kỉ XVII): Nguyên nhân, kết quả, ý nghĩa, tính chất và đặc điểm chính.',
    totalPoints: 4,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân bùng nổ',
        template: 'Mâu thuẫn sâu sắc giữa giai cấp tư sản, {k1} và quần chúng nhân dân với chế độ {k2} kìm hãm kinh tế tư bản chủ nghĩa.',
        slots: [
          { id: 'k1', expected: 'quý tộc mới', options: ['quý tộc mới', 'nô lệ da đen', 'địa chủ phong kiến'] },
          { id: 'k2', expected: 'quân chủ chuyên chế Sác-lơ I', options: ['quân chủ chuyên chế Sác-lơ I', 'thực dân phương Tây', 'cộng hòa lập hiến'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Kết quả của cách mạng',
        template: 'Lật đổ chế độ quân chủ chuyên chế, thiết lập chế độ {k3}, mở đường cho chủ nghĩa tư bản phát triển.',
        slots: [
          { id: 'k3', expected: 'quân chủ lập hiến', options: ['quân chủ lập hiến', 'cộng hòa dân chủ', 'chuyên chế phong kiến'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Ý nghĩa và Tính chất',
        template: 'Mở đường cho CNTB phát triển mạnh mẽ; là cuộc cách mạng tư sản {k4} vì chưa giải quyết vấn đề ruộng đất cho nông dân.',
        slots: [
          { id: 'k4', expected: 'không triệt để', options: ['không triệt để', 'triệt để nhất', 'vô sản'] }
        ]
      },
      {
        pointNum: 4,
        title: 'Ý 4: Đặc điểm chính',
        template: 'Lãnh đạo cuộc cách mạng là liên minh giữa {k5}, hình thức là cuộc nội chiến giữa Quốc hội và Nhà vua.',
        slots: [
          { id: 'k5', expected: 'tư sản và quý tộc mới', options: ['tư sản và quý tộc mới', 'tư sản và vô sản', 'nông dân và thợ thủ công'] }
        ]
      }
    ],
    fullSolution: '• <strong>Nguyên nhân:</strong> Kinh tế TBCN phát triển mạnh (kinh tế rào đất, ngoại thương) bị chế độ phong kiến chuyên chế Sác-lơ I kìm hãm; mâu thuẫn gay gắt giữa Tư sản + Quý tộc mới + Quần chúng với Nhà vua.<br>• <strong>Kết quả:</strong> Xóa bỏ chế độ phong kiến chuyên chế, thiết lập nền <em>quân chủ lập hiến</em> (1689).<br>• <strong>Ý nghĩa & Tính chất:</strong> Mở đường cho chủ nghĩa tư bản Anh phát triển nhanh chóng. Mang tính chất cách mạng tư sản <em>không triệt để</em> (không xóa bỏ hoàn toàn chế độ phong kiến, không chia ruộng đất cho nông dân).<br>• <strong>Đặc điểm:</strong> Do liên minh tư sản và quý tộc mới lãnh đạo dưới hình thức nội chiến cách mạng.'
  },
  {
    id: 'his_1b',
    exKey: 'his_rev',
    exTitle: 'Lịch sử 8 - Câu 1: Các cuộc CMTS',
    type: 'keypoint_checklist',
    questionText: 'Câu 1b. Lập bảng hệ thống về Chiến tranh giành độc lập của 13 thuộc địa Anh ở Bắc Mỹ (thế kỉ XVIII): Nguyên nhân, kết quả, ý nghĩa, tính chất và đặc điểm chính.',
    totalPoints: 4,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân chiến tranh',
        template: 'Chính phủ thực dân Anh áp đặt chính sách {k1}, kìm hãm sự phát triển kinh tế thương mại của 13 thuộc địa Bắc Mỹ.',
        slots: [
          { id: 'k1', expected: 'thuế khóa nặng nề và cấm đoán vô lý', options: ['thuế khóa nặng nề và cấm đoán vô lý', 'hỗ trợ mở rộng sản xuất', 'tự do buôn bán'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Kết quả và Văn kiện tiêu biểu',
        template: 'Lật đổ ách thống trị của thực dân Anh, thông qua bản {k2} (1776) và thành lập Hợp chúng quốc Hoa Kỳ (Mỹ).',
        slots: [
          { id: 'k2', expected: 'Tuyên ngôn Độc lập', options: ['Tuyên ngôn Độc lập', 'Tuyên ngôn Nhân quyền', 'Sắc lệnh ruộng đất'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Ý nghĩa lịch sử',
        template: 'Giải phóng Bắc Mỹ khỏi ách thực dân, mở đường cho CNTB phát triển, thúc đẩy mạnh mẽ phong trào {k3} ở Mỹ Latinh và thế giới.',
        slots: [
          { id: 'k3', expected: 'giải phóng dân tộc', options: ['giải phóng dân tộc', 'khôi phục phong kiến', 'bảo hoàng'] }
        ]
      },
      {
        pointNum: 4,
        title: 'Ý 4: Tính chất và Đặc điểm',
        template: 'Mang tính chất là một cuộc {k4}, do liên minh tư sản và tầng lớp {k5} lãnh đạo dưới sự chỉ huy của Oa-sinh-tơn.',
        slots: [
          { id: 'k4', expected: 'cách mạng tư sản giải phóng dân tộc', options: ['cách mạng tư sản giải phóng dân tộc', 'nội chiến phong kiến', 'cách mạng vô sản'] },
          { id: 'k5', expected: 'chủ nô đồn điền', options: ['chủ nô đồn điền', 'quý tộc mới', 'nông dân nghèo'] }
        ]
      }
    ],
    fullSolution: '• <strong>Nguyên nhân:</strong> Thực dân Anh kìm hãm kinh tế 13 thuộc địa Bắc Mỹ qua các đạo luật thuế vô lý (thuế tem, thuế chè - biến cố Bô-xtơn 1773).<br>• <strong>Kết quả:</strong> Thực dân Anh ký Hiệp ước Véc-xai (1783) công nhận độc lập của 13 bang; bản Tuyên ngôn Độc lập 4/7/1776 ra đời; Hợp chúng quốc Hoa Kỳ thành lập.<br>• <strong>Ý nghĩa:</strong> Giải phóng dân tộc, mở đường cho CNTB phát triển ở Bắc Mỹ; cổ vũ phong trào chống phong kiến và ách thực dân khắp thế giới.<br>• <strong>Tính chất & Đặc điểm:</strong> Cách mạng tư sản dưới hình thức chiến tranh giải phóng dân tộc; chưa triệt để vì duy trì chế độ nô lệ da đen; do tư sản và chủ nô lãnh đạo (đứng đầu là George Washington).'
  },
  {
    id: 'his_1c',
    exKey: 'his_rev',
    exTitle: 'Lịch sử 8 - Câu 1: Các cuộc CMTS',
    type: 'keypoint_checklist',
    questionText: 'Câu 1c. Lập bảng hệ thống về Cách mạng tư sản Pháp (1789): Nguyên nhân, kết quả, ý nghĩa, tính chất và đặc điểm chính.',
    totalPoints: 4,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân kinh tế - chính trị - xã hội',
        template: 'Mâu thuẫn gay gắt giữa {k1} (tư sản, nông dân, bình dân) với chế độ phong kiến chuyên chế của vua Lu-i XVI và 2 đẳng cấp đặc quyền là {k2}.',
        slots: [
          { id: 'k1', expected: 'Đẳng cấp thứ ba', options: ['Đẳng cấp thứ ba', 'Giai cấp công nhân', 'Tầng lớp chủ nô'] },
          { id: 'k2', expected: 'Tăng lữ và Quý tộc', options: ['Tăng lữ và Quý tộc', 'Tư sản và Quý tộc mới', 'Thương nhân và Thợ thủ công'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Kết quả của cách mạng',
        template: 'Lật đổ chế độ phong kiến chuyên chế, xử tử vua Lu-i XVI, thiết lập nền {k3}, ban bố bản Tuyên ngôn Nhân quyền và Dân quyền nổi tiếng.',
        slots: [
          { id: 'k3', expected: 'Cộng hòa', options: ['Cộng hòa', 'Quân chủ lập hiến', 'Đế chế phong kiến'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Ý nghĩa lịch sử',
        template: 'Mở đường cho CNTB phát triển mạnh mẽ ở Pháp; làm lung lay tận gốc rễ {k4} khắp châu Âu; cổ vũ phong trào đấu tranh vì tự do, dân chủ.',
        slots: [
          { id: 'k4', expected: 'chế độ phong kiến', options: ['chế độ phong kiến', 'chế độ tư bản', 'chủ nghĩa xã hội'] }
        ]
      },
      {
        pointNum: 4,
        title: 'Ý 4: Tính chất và Đặc điểm',
        template: 'Là cuộc cách mạng tư sản {k5} nhất thời cận đại, diễn ra dưới hình thức đấu tranh giai cấp quyết liệt và chống thù trong giặc ngoài.',
        slots: [
          { id: 'k5', expected: 'triệt để', options: ['triệt để', 'không triệt để', 'thỏa hiệp'] }
        ]
      }
    ],
    fullSolution: '• <strong>Nguyên nhân:</strong> Kinh tế tư bản bị chế độ phong kiến kìm hãm; trật tự 3 đẳng cấp bất công (Đẳng cấp 1: Tăng lữ, Đẳng cấp 2: Quý tộc không phải nộp thuế; Đẳng cấp 3: Tư sản, nông dân, thị dân chịu mọi thuế khóa không có quyền chính trị); trào lưu Triết học Ánh sáng dọn đường tư tưởng.<br>• <strong>Kết quả:</strong> Lật đổ nền quân chủ phong kiến, lập nền cộng hòa; xóa bỏ quyền chiếm hữu phong kiến về ruộng đất, ban bố Tuyên ngôn Nhân quyền và Dân quyền (1789).<br>• <strong>Ý nghĩa:</strong> Lật đổ chế độ phong kiến lỗi thời, mở ra thời đại thắng lợi của CNTB trên toàn thế giới.<br>• <strong>Tính chất & Đặc điểm:</strong> Cuộc cách mạng tư sản triệt để nhất thời cận đại vì giải quyết được vấn đề ruộng đất cho nông dân và thiết lập nền cộng hòa dân chủ.'
  },

  // --- CÂU 2: CÁCH MẠNG CÔNG NGHIỆP ANH ---
  {
    id: 'his_2',
    exKey: 'his_ind',
    exTitle: 'Lịch sử 8 - Câu 2: CM Công nghiệp',
    type: 'keypoint_checklist',
    questionText: 'Câu 2. Trình bày những thành tựu tiêu biểu của Cách mạng công nghiệp Anh và nêu những tác động quan trọng đối với sản xuất và đời sống xã hội.',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Những thành tựu tiêu biểu',
        template: 'Khởi đầu từ ngành dệt với {k1} (1764); đột phá mang tính thời đại là {k2} của Giêm Oát (1784); tiếp nối là đầu máy xe lửa của Xti-phen-xơn (1814).',
        slots: [
          { id: 'k1', expected: 'máy kéo sợi Gien-ni', options: ['máy kéo sợi Gien-ni', 'máy bay phản lực', 'máy in kim'] },
          { id: 'k2', expected: 'máy hơi nước', options: ['máy hơi nước', 'động cơ điện xoay chiều', 'động cơ đốt trong'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Tác động đối với sản xuất',
        template: 'Thay thế lao động thủ công bằng {k3}, nâng cao năng suất vọt bậc, đưa nước Anh trở thành {k4} đầu tiên trên thế giới.',
        slots: [
          { id: 'k3', expected: 'máy móc cơ khí', options: ['máy móc cơ khí', 'sức kéo động vật', 'lao động nô lệ'] },
          { id: 'k4', expected: 'công xưởng của thế giới', options: ['công xưởng của thế giới', 'đất nước nông nghiệp', 'nơi xuất khẩu khoáng sản thô'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Tác động đối với đời sống xã hội',
        template: 'Thúc đẩy quá trình đô thị hóa nhanh chóng, đồng thời hình thành 2 giai cấp cơ bản đối lập sâu sắc là {k5}.',
        slots: [
          { id: 'k5', expected: 'tư sản công nghiệp và vô sản công nghiệp', options: ['tư sản công nghiệp và vô sản công nghiệp', 'địa chủ và nông dân tá điền', 'chủ nô và nô lệ'] }
        ]
      }
    ],
    fullSolution: '• <strong>Thành tựu tiêu biểu:</strong><br>- Ngành dệt: 1764 Giêm Ha-gri-vơ sáng chế máy kéo sợi Gien-ni; 1785 Ét-mơn Các-rai phát minh máy dệt chạy bằng sức nước.<br>- Đột phá năng lượng: 1784 Giêm Oát (James Watt) phát minh máy hơi nước hoàn chỉnh, tạo động lực không phụ thuộc vào địa hình/dòng sông.<br>- Giao thông vận tải: 1814 Xti-phen-xơn chế tạo thành công đầu máy xe lửa chạy trên đường ray; tàu thủy chở khách chạy bằng hơi nước.<br>• <strong>Tác động đối với sản xuất:</strong> Chuyển từ sản xuất thủ công phân tán sang nền sản xuất đại cơ khí tập trung; năng suất lao động tăng vọt; bộ mặt kinh tế thay đổi hoàn toàn, Anh thành "công xưởng thế giới".<br>• <strong>Tác động đối với đời sống xã hội:</strong> Các trung tâm công nghiệp và thành phố lớn mọc lên; hình thành 2 giai cấp xã hội mới là giai cấp tư sản (nắm tư liệu sản xuất) và giai cấp vô sản (làm thuê, bị bóc lột), mâu thuẫn giai cấp ngày càng sâu sắc dẫn đến phong trào công nhân.'
  },

  // --- CÂU 3: ĐÔNG NAM Á DƯỚI ÁCH ĐÔ HỘ (3a, 3b, 3c) ---
  {
    id: 'his_3a',
    exKey: 'his_sea',
    exTitle: 'Lịch sử 8 - Câu 3: Đông Nam Á',
    type: 'keypoint_checklist',
    questionText: 'Câu 3a. Trình bày những nét chính về tình hình chính trị, kinh tế, văn hóa - xã hội của các nước Đông Nam Á dưới ách đô hộ của thực dân phương Tây.',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Về Chính trị',
        template: 'Các nước thực dân tước đoạt {k1}, thiết lập bộ máy cai trị trực tiếp kết hợp gián tiếp thông qua phong kiến tay sai, thi hành chính sách {k2} để chia rẽ các dân tộc.',
        slots: [
          { id: 'k1', expected: 'độc lập, chủ quyền', options: ['độc lập, chủ quyền', 'quyền bầu cử tự do', 'các hiệp ước bình đẳng'] },
          { id: 'k2', expected: 'chia để trị', options: ['chia để trị', 'bảo vệ toàn vẹn lãnh thổ', 'hòa hợp dân tộc'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Về Kinh tế',
        template: 'Thực dân phương Tây đẩy mạnh {k3}, khai thác khoáng sản, độc quyền thị trường buôn bán và kìm hãm không cho nền công nghiệp bản địa phát triển độc lập.',
        slots: [
          { id: 'k3', expected: 'cướp đoạt ruộng đất lập đồn điền', options: ['cướp đoạt ruộng đất lập đồn điền', 'phát triển công nghiệp nặng', 'chia ruộng đất cho nông dân'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Về Văn hóa - Xã hội',
        template: 'Thi hành chính sách {k4}, du nhập văn hóa ngoại lai đồi trụy; xã hội phân hóa sâu sắc, đa số nhân dân lao động bị {k5} và bần cùng hóa cùng cực.',
        slots: [
          { id: 'k4', expected: 'ngu dân, hạn chế mở trường học', options: ['ngu dân, hạn chế mở trường học', 'phổ cập giáo dục đại học', 'bảo tồn nguyên vẹn văn hóa cổ truyền'] },
          { id: 'k5', expected: 'bóc lột nặng nề', options: ['bóc lột nặng nề', 'được bảo hiểm xã hội', 'nâng cao mức sống'] }
        ]
      }
    ],
    fullSolution: '• <strong>Chính trị:</strong> Mất độc lập chủ quyền; chịu sự cai trị hà khắc của thực dân (Anh, Pháp, Hà Lan, Tây Ban Nha, Mỹ...); chính sách "chia để trị" khoét sâu mâu thuẫn giữa các sắc tộc và tôn giáo.<br>• <strong>Kinh tế:</strong> Biến các nước thành nơi cung cấp tài nguyên, nông sản nhiệt đới (cao su, cà phê, thiếc, lúa gạo...) và thị trường độc quyền tiêu thụ hàng công nghiệp; kinh tế què quặt, lệ thuộc nặng nề vào chính quốc.<br>• <strong>Văn hóa - Xã hội:</strong> Chính sách ngu dân để dễ bề cai trị; các giá trị văn hóa truyền thống bị xói mòn; nhân dân lao động (đặc biệt là nông dân) chịu cảnh áp bức "một cổ hai tròng", phân hóa giai cấp sâu sắc.'
  },
  {
    id: 'his_3b',
    exKey: 'his_sea',
    exTitle: 'Lịch sử 8 - Câu 3: Đông Nam Á',
    type: 'keypoint_checklist',
    questionText: 'Câu 3b. Em có nhận xét gì về chính sách đô hộ của thực dân phương Tây đối với các nước Đông Nam Á?',
    totalPoints: 2,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Bản chất phản động và tàn bạo',
        template: 'Chính sách đô hộ mang tính chất {k1}, vô nhân đạo, nhằm mục đích duy nhất là phục vụ lợi ích tối đa của giai cấp tư sản chính quốc.',
        slots: [
          { id: 'k1', expected: 'vơ vét, bóc lột tàn nhẫn', options: ['vơ vét, bóc lột tàn nhẫn', 'nhân đạo cao cả', 'phát triển kinh tế địa phương'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Hệ quả đối với các dân tộc Đông Nam Á',
        template: 'Kìm hãm nghiêm trọng sức sản xuất, làm cho xã hội Đông Nam Á rơi vào cảnh {k2}, lạc hậu kéo dài, mâu thuẫn dân tộc bùng nổ thành các cuộc {k3}.',
        slots: [
          { id: 'k2', expected: 'nghèo nàn, kiệt quệ', options: ['nghèo nàn, kiệt quệ', 'phát triển rực rỡ', 'công nghiệp hóa hiện đại'] },
          { id: 'k3', expected: 'đấu tranh giành độc lập', options: ['đấu tranh giành độc lập', 'thỏa hiệp hòa bình', 'chấp nhận cam chịu'] }
        ]
      }
    ],
    fullSolution: '• <strong>Bản chất:</strong> Là chính sách áp bức dân tộc và bóc lột thuộc địa tàn bạo, phản động; duy trì tàn tích phong kiến lạc hậu để làm chỗ dựa cho ách thống trị.<br>• <strong>Hệ quả:</strong> Kìm hãm sự phát triển của khu vực Đông Nam Á, tước đoạt tự do và quyền sống của con người, biến Đông Nam Á thành khu vực nghèo đói, phụ thuộc.<br>• <strong>Tác động lịch sử:</strong> Làm bùng cháy ngọn lửa yêu nước, thúc đẩy các phong trào giải phóng dân tộc quật khởi chống thực dân xâm lược.'
  },
  {
    id: 'his_3c',
    exKey: 'his_sea',
    exTitle: 'Lịch sử 8 - Câu 3: Đông Nam Á',
    type: 'keypoint_checklist',
    questionText: 'Câu 3c. Có ý kiến cho rằng: "Các nước tư bản phương Tây đến Đông Nam Á là để giúp đỡ những nước này thoát khỏi nghèo nàn, lạc hậu". Em có đồng ý với ý kiến đó không? Vì sao?',
    totalPoints: 2,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Quan điểm rõ ràng',
        template: 'Em {k1} với ý kiến trên, vì đây chỉ là luận điệu giả tạo nhằm {k2} cho hành vi xâm lược phi nghĩa.',
        slots: [
          { id: 'k1', expected: 'hoàn toàn không đồng ý', options: ['hoàn toàn không đồng ý', 'đồng ý hoàn toàn', 'đồng ý một nửa'] },
          { id: 'k2', expected: 'ngụy biện, che đậy', options: ['ngụy biện, che đậy', 'khẳng định tính đúng đắn', 'tuyên dương công lao'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Lý giải thực chất mục đích phương Tây',
        template: 'Mục đích thực sự của thực dân phương Tây đến Đông Nam Á là tìm kiếm {k3}, nguồn nguyên liệu dồi dào và nguồn nhân công giá rẻ để phục vụ nền kinh tế chính quốc.',
        slots: [
          { id: 'k3', expected: 'thị trường tiêu thụ hàng hóa', options: ['thị trường tiêu thụ hàng hóa', 'cơ hội viện trợ nhân đạo', 'nơi xóa nạn mù chữ'] }
        ]
      }
    ],
    fullSolution: '• <strong>Quan điểm:</strong> Hoàn toàn KHÔNG ĐỒNG Ý với ý kiến trên.<br>• <strong>Giải thích lý do:</strong><br>1. Luận điệu "khai hóa văn minh", "giúp đỡ các dân tộc lạc hậu" chỉ là vỏ bọc dối trá để xoa dịu dư luận tiến bộ thế giới và che giấu tội ác xâm lược.<br>2. Bản chất của chủ nghĩa tư bản giai đoạn này là tìm kiếm thị trường tiêu thụ hàng hóa dư thừa, vơ vét khoáng sản - nông sản nhiệt đới rẻ mạt, và bóc lột sức lao động nô dịch của người dân bản địa.<br>3. Bằng chứng lịch sử: Trong suốt thời kỳ đô hộ, phương Tây không xây dựng nền công nghiệp hoàn chỉnh cho thuộc địa, tỷ lệ mù chữ chiếm trên 90%, nhân dân chịu hàng trăm thứ thuế vô lý, đẩy các nước vào vòng xoáy nghèo đói và lạc hậu hơn.'
  },

  // --- CÂU 4: XUNG ĐỘT PHONG KIẾN NAM - BẮC TRIỀU & TRỊNH - NGUYỄN ---
  {
    id: 'his_4a',
    exKey: 'his_conflict',
    exTitle: 'Lịch sử 8 - Câu 4: Xung đột Đàng Trong - Đàng Ngoài',
    type: 'keypoint_checklist',
    questionText: 'Câu 4a. Trình bày nguyên nhân, diễn biến và hệ quả của cuộc xung đột Nam – Bắc triều (thế kỉ XVI).',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân bùng nổ xung đột',
        template: 'Năm 1527, {k1} cướp ngôi nhà Lê lập ra Bắc triều; một số cựu thần nhà Lê do {k2} đứng đầu đã khởi binh "phù Lê diệt Mạc", lập ra Nam triều.',
        slots: [
          { id: 'k1', expected: 'Mạc Đăng Dung', options: ['Mạc Đăng Dung', 'Nguyễn Kim', 'Trịnh Kiểm'] },
          { id: 'k2', expected: 'Nguyễn Kim', options: ['Nguyễn Kim', 'Lê Chiêu Thống', 'Nguyễn Hoàng'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Diễn biến chiến tranh',
        template: 'Chiến tranh Nam - Bắc triều kéo dài hơn {k3} (1533 - 1592), chiến trường chính diễn ra ác liệt ở vùng Thanh Hóa, Nghệ An và đồng bằng Bắc Bộ; đến năm 1592 Nam triều chiếm được Thăng Long, họ Mạc phải rút lên {k4}.',
        slots: [
          { id: 'k3', expected: '50 năm', options: ['50 năm', '10 năm', '100 năm'] },
          { id: 'k4', expected: 'Cao Bằng', options: ['Cao Bằng', 'Huế', 'Gia Định'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Hệ quả đối với đất nước',
        template: 'Gây ra sự tàn phá nặng nề về kinh tế, đất nước bị {k5}, đồng ruộng bị bỏ hoang, đời sống nhân dân vô cùng cực khổ, ly tán.',
        slots: [
          { id: 'k5', expected: 'chia cắt và tổn thương sâu sắc', options: ['chia cắt và tổn thương sâu sắc', 'phát triển thịnh vượng vượt bậc', 'hợp nhất toàn vẹn'] }
        ]
      }
    ],
    fullSolution: '• <strong>Nguyên nhân:</strong> Đầu thế kỉ XVI nhà Hậu Lê suy thoái; 1527 Mạc Đăng Dung ép vua Lê nhường ngôi, lập ra nhà Mạc (Bắc triều). Cựu thần nhà Lê là Nguyễn Kim tập hợp lực lượng đưa Lê Trang Tông lên ngôi ở Thanh Hóa, lập ra Nam triều ("phù Lê diệt Mạc").<br>• <strong>Diễn biến:</strong> Kéo dài hơn nửa thế kỷ (1533 - 1592) với hàng chục trận giao tranh lớn nhỏ tại Ninh Bình, Thanh Hóa, Nghệ An. Năm 1592, quân Nam triều (do Trịnh Tùng chỉ huy) đánh chiếm Thăng Long, nhà Mạc chạy lên cát cứ ở Cao Bằng đến năm 1677 mới chấm dứt.<br>• <strong>Hệ quả:</strong> Gây ra thảm họa chiến tranh huynh đệ tương tàn kéo dài; đất nước bị chia cắt tạm thời; sản xuất nông nghiệp đình trệ, làng mạc xơ xác; nhân dân bị bắt lính, chết đói và ly tán khắp nơi.'
  },
  {
    id: 'his_4b',
    exKey: 'his_conflict',
    exTitle: 'Lịch sử 8 - Câu 4: Xung đột Đàng Trong - Đàng Ngoài',
    type: 'keypoint_checklist',
    questionText: 'Câu 4b. Trình bày nguyên nhân, diễn biến và hệ quả của cuộc xung đột Trịnh – Nguyễn (thế kỉ XVII).',
    totalPoints: 3,
    keypoints: [
      {
        pointNum: 1,
        title: 'Ý 1: Nguyên nhân bùng nổ',
        template: 'Sau khi Nguyễn Kim chết, con rể là {k1} nắm toàn bộ binh quyền ở Đàng Ngoài; con thứ Nguyễn Kim là {k2} xin vào trấn thủ Thuận Hóa, xây dựng thế lực cát cứ ở Đàng Trong.',
        slots: [
          { id: 'k1', expected: 'Trịnh Kiểm', options: ['Trịnh Kiểm', 'Trịnh Cương', 'Mạc Đăng Dung'] },
          { id: 'k2', expected: 'Nguyễn Hoàng', options: ['Nguyễn Hoàng', 'Nguyễn Uông', 'Nguyễn Huệ'] }
        ]
      },
      {
        pointNum: 2,
        title: 'Ý 2: Diễn biến xung đột',
        template: 'Từ năm 1627 đến 1672, hai tập đoàn Trịnh - Nguyễn đánh nhau {k3} lớn mà không phân thắng bại; cuối cùng hai bên lấy {k4} (Quảng Bình) làm ranh giới chia cắt đất nước.',
        slots: [
          { id: 'k3', expected: '7 lần', options: ['7 lần', '3 lần', '12 lần'] },
          { id: 'k4', expected: 'sông Gianh', options: ['sông Gianh', 'sông Bến Hải', 'sông Hồng'] }
        ]
      },
      {
        pointNum: 3,
        title: 'Ý 3: Hệ quả lịch sử',
        template: 'Đất nước bị chia cắt thành Đàng Ngoài và Đàng Trong hơn {k5}; gây tổn hại lớn về người và của, cản trở phát triển kinh tế; mặt khác các chúa Nguyễn đã đẩy mạnh việc mở rộng lãnh thổ về phía {k6}.',
        slots: [
          { id: 'k5', expected: 'một thế kỉ (hơn 100 năm)', options: ['một thế kỉ (hơn 100 năm)', '10 năm', '500 năm'] },
          { id: 'k6', expected: 'Nam', options: ['Nam', 'Bắc', 'Tây'] }
        ]
      }
    ],
    fullSolution: '• <strong>Nguyên nhân:</strong> Mâu thuẫn tranh giành quyền lực trong nội bộ tập đoàn phong kiến họ Lê. Sau khi Nguyễn Kim chết, Trịnh Kiểm thâu tóm quyền lực, ngấm ngầm sát hại con cả Nguyễn Uông. Để tránh họa, năm 1558 Nguyễn Hoàng xin vào trấn thủ Thuận Hóa - Quảng Nam, xây dựng cơ đồ họ Nguyễn đối địch với họ Trịnh.<br>• <strong>Diễn biến:</strong> Trong 45 năm (1627 - 1672), hai bên đại chiến 7 lần, chiến trường ác liệt nhất là vùng Quảng Bình, Hà Tĩnh với hệ thống Lũy Thầy kiên cố. Nhận thấy không thể tiêu diệt được nhau, hai bên đình chiến, lấy <em>sông Gianh</em> (Quảng Bình) làm giới tuyến quân sự.<br>• <strong>Hệ quả:</strong><br>- <em>Tiêu cực:</em> Đất nước bị chia cắt thành Đàng Ngoài (vua Lê - chúa Trịnh) và Đàng Trong (chúa Nguyễn) kéo dài hơn một thế kỷ; nhân dân chịu cảnh binh đao, chia lìa ruột thịt; kìm hãm sự phát triển chung của dân tộc.<br>- <em>Tích cực (mặt khách quan):</em> Để củng cố thế lực và mở rộng không gian sinh tồn, các chúa Nguyễn ở Đàng Trong đã tổ chức khai hoang, xác lập chủ quyền và mở mang bờ cõi xuống vùng đồng bằng sông Cửu Long và các hải đảo (Hoàng Sa, Trường Sa).'
  }
];
