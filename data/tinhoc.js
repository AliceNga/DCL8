// =========================================================================
// DATA: TIN HỌC 8 (23 CÂU = 20 TRẮC NGHIỆM + 3 TRẮC NGHIỆM ĐÚNG/SAI)
// Đề cương Giữa Học Kì I - THCS Nghĩa Tân (2026-2027)
// =========================================================================

window.TIN_DATABASE = [
  // --- PHẦN I: 20 CÂU TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN ---
  {
    id: 'tin_1',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 1: Các phép tính đầu tiên được con người thực hiện bằng cách?',
    options: [
      { text: 'Sử dụng máy tính để bàn.', isCorrect: false },
      { text: 'Sử dụng máy tính cầm tay.', isCorrect: false },
      { text: 'Sử dụng 10 ngón tay.', isCorrect: true },
      { text: 'Cả hai đáp án A, B đều sai.', isCorrect: false }
    ],
    explanation: 'Thuở sơ khai, con người dùng 10 ngón tay và các que gỗ, sỏi đá để đếm và thực hiện tính toán đơn giản.'
  },
  {
    id: 'tin_2',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 2: Con người đã biết làm các phép tính số học từ bao giờ?',
    options: [
      { text: 'Hơn 1000 năm trước Công nguyên.', isCorrect: false },
      { text: 'Hơn 1000 năm sau Công nguyên.', isCorrect: false },
      { text: 'Hơn 2000 năm sau Công nguyên.', isCorrect: false },
      { text: 'Hơn 2000 năm trước Công nguyên.', isCorrect: true }
    ],
    explanation: 'Từ hơn 2000 năm trước Công nguyên, con người đã phát minh ra bàn tính cổ ở vùng Lưỡng Hà để thực hiện các phép tính số học.'
  },
  {
    id: 'tin_3',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 3: Chiếc máy tính cơ học Pascal do ai sáng tạo ra?',
    options: [
      { text: 'Charles Babbage.', isCorrect: false },
      { text: 'John Mauchly.', isCorrect: false },
      { text: 'Blaise Pascal.', isCorrect: true },
      { text: 'J. Presper Eckert.', isCorrect: false }
    ],
    explanation: 'Nhà toán học và triết học người Pháp Blaise Pascal đã sáng chế ra chiếc máy tính cơ học Pascaline vào năm 1642.'
  },
  {
    id: 'tin_4',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 4: Sau Pascal, Gottfried Leibniz đã cải tiến và thêm vào phép tính gì để máy tính của Pascal thực hiện cả bốn phép tính số học?',
    options: [
      { text: 'Phép chia và phép trừ.', isCorrect: false },
      { text: 'Phép nhân và phép cộng.', isCorrect: false },
      { text: 'Phép nhân và phép chia.', isCorrect: true },
      { text: 'Phép nhân và phép trừ.', isCorrect: false }
    ],
    explanation: 'Leibniz đã cải tiến cơ cấu bánh xe số để thực hiện thêm phép nhân và phép chia.'
  },
  {
    id: 'tin_5',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 5: Ai được coi là cha đẻ của công nghệ máy tính?',
    options: [
      { text: 'Charles Babbage.', isCorrect: true },
      { text: 'Gottfried Leibniz.', isCorrect: false },
      { text: 'John Mauchly.', isCorrect: false },
      { text: 'Blaise Pascal.', isCorrect: false }
    ],
    explanation: 'Charles Babbage (1791 - 1871) được coi là cha đẻ của máy tính nhờ thiết kế máy sai phân và máy phân tích (Analytical Engine).'
  },
  {
    id: 'tin_6',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 6: Ý tưởng nào đóng vai trò quan trọng trong lịch sử phát triển của máy tính?',
    options: [
      { text: 'Cơ giới hóa việc lao động.', isCorrect: false },
      { text: 'Trí óc hóa việc tính toán.', isCorrect: false },
      { text: 'Cơ giới hóa việc tính toán.', isCorrect: true },
      { text: 'Trí óc hóa việc lao động.', isCorrect: false }
    ],
    explanation: 'Cơ giới hóa việc tính toán: Chuyển các thao tác tính toán bằng trí não sang máy móc tự động thực hiện.'
  },
  {
    id: 'tin_7',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 7: Nền tảng cho việc thiết kế các máy tính kĩ thuật số hiện đại là?',
    options: [
      { text: 'Cơ giới hóa việc tính toán.', isCorrect: false },
      { text: 'Claude Shannon có thể sử dụng các rơ le để thực hiện các tính toán trên dãy các bit.', isCorrect: true },
      { text: 'Sáng tạo ra chiếc máy tính cơ học Pascal.', isCorrect: false },
      { text: 'Cả ba đáp án trên đều sai.', isCorrect: false }
    ],
    explanation: 'Claude Shannon đã ứng dụng đại số Boole vào mạch chuyển mạch rơ le, đặt nền móng cho thiết kế mạch logic số hiện đại.'
  },
  {
    id: 'tin_8',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 8: Thời kì đầu các máy tính được thiết kế dựa trên các rơ le được gọi là?',
    options: [
      { text: 'Máy tính thông minh.', isCorrect: false },
      { text: 'Máy tính hiện đại.', isCorrect: false },
      { text: 'Máy tính khoa học.', isCorrect: false },
      { text: 'Máy tính điện cơ.', isCorrect: true }
    ],
    explanation: 'Các máy tính thời kỳ này kết hợp bộ phận điện và cơ khí chuyển động rơ le nên gọi là máy tính điện cơ.'
  },
  {
    id: 'tin_9',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 9: Năm 1943, Howard Aiken đã chế tạo thành công?',
    options: [
      { text: 'Máy tính cơ giới hóa.', isCorrect: false },
      { text: 'Máy tính cơ học Pascal.', isCorrect: false },
      { text: 'Máy tính điều khiển tuần tự tự động.', isCorrect: true },
      { text: 'Máy tính cầm tay.', isCorrect: false }
    ],
    explanation: 'Năm 1943, Howard Aiken cùng hãng IBM chế tạo máy tính điều khiển tuần tự tự động (ASCC, hay Harvard Mark I).'
  },
  {
    id: 'tin_10',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 10: Theo nguyên lý "chương trình được lưu trữ" thì cấu tạo của máy tính không có?',
    options: [
      { text: 'Thiết bị ra.', isCorrect: false },
      { text: 'Bộ xử lý.', isCorrect: false },
      { text: 'Bộ nhớ.', isCorrect: false },
      { text: 'Con chuột.', isCorrect: true }
    ],
    explanation: 'Kiến trúc Von Neumann cơ bản gồm: Bộ xử lý trung tâm (CPU), Bộ nhớ, và Thiết bị vào/ra. Con chuột là thiết bị ngoại vi được phát minh sau.'
  },
  {
    id: 'tin_11',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 11: Công nghệ nào thay thế rơ le điện cơ?',
    options: [
      { text: 'Công nghệ cơ giới hóa.', isCorrect: false },
      { text: 'Công nghệ tự động hóa.', isCorrect: false },
      { text: 'Công nghệ đèn điện tử.', isCorrect: true },
      { text: 'Công nghệ chế tạo.', isCorrect: false }
    ],
    explanation: 'Đèn điện tử chân không (Vacuum tube) thay thế rơ le, mở ra thế hệ máy tính điện tử đầu tiên (ENIAC).'
  },
  {
    id: 'tin_12',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 12: Bức ảnh số khác với ảnh trên giấy ở?',
    options: [
      { text: 'Không tốn vật liệu.', isCorrect: false },
      { text: 'Khi bức ảnh được gửi đi thì người gửi vẫn có ảnh.', isCorrect: false },
      { text: 'Cả hai đáp án trên đều đúng.', isCorrect: true },
      { text: 'Cả hai đáp án trên đều sai.', isCorrect: false }
    ],
    explanation: 'Ảnh số lưu dưới dạng dữ liệu dãy bit: không tốn giấy in và có thể sao chép vô hạn mà không mất bản gốc.'
  },
  {
    id: 'tin_13',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 13: Thông tin số là?',
    options: [
      { text: 'Thông tin được mã hóa thành dãy bit.', isCorrect: false },
      { text: 'Thông tin được chuyển vào máy tính, điện thoại thông minh, máy tính bảng,... để có thể lan truyền, trao đổi trong một môi trường kĩ thuật số.', isCorrect: false },
      { text: 'Thông tin được mã hóa thành dãy bit, được chuyển vào máy tính, điện thoại thông minh, máy tính bảng,… để có thể lan truyền, trao đổi trong một môi trường kĩ thuật số.', isCorrect: true },
      { text: 'Thông tin có thể trao đổi dựa trên thông tin trên giấy.', isCorrect: false }
    ],
    explanation: 'Khái niệm chuẩn SGK Tin học 8: Thông tin số là thông tin được mã hóa thành dãy bit để máy tính và thiết bị số xử lý, lưu trữ và truyền tải.'
  },
  {
    id: 'tin_14',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 14: Đặc điểm của thông tin số là?',
    options: [
      { text: 'Có thể trao đổi không cần mạng.', isCorrect: false },
      { text: 'Có thể trao đổi dựa trên thông tin trên giấy.', isCorrect: false },
      { text: 'Có thể truy cập từ xa thông qua kết nối Internet.', isCorrect: true },
      { text: 'Có thể trao đổi trên đài Radio.', isCorrect: false }
    ],
    explanation: 'Thông tin số có đặc điểm nổi bật là có thể truy cập từ xa mọi lúc mọi nơi thông qua kết nối Internet.'
  },
  {
    id: 'tin_15',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 15: Đâu không phải là đặc điểm của thông tin số?',
    options: [
      { text: 'Thông tin số có thể truy cập từ xa qua Internet.', isCorrect: false },
      { text: 'Thông tin số dễ dàng được nhân bản và chia sẻ.', isCorrect: false },
      { text: 'Thông tin số chỉ có thể truy cập ở khoảng cách gần.', isCorrect: true },
      { text: 'Thông tin số có thể được lan truyền tự động do nhiều thiết bị được đồng bộ với nhau.', isCorrect: false }
    ],
    explanation: 'Khẳng định "chỉ có thể truy cập ở khoảng cách gần" là SAI, vì thông tin số có thể truyền tải toàn cầu tức thì.'
  },
  {
    id: 'tin_16',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 16: Thông tin số có thể được truy cập từ xa nếu:',
    options: [
      { text: 'Người quản lý thông tin đó cho phép.', isCorrect: true },
      { text: 'Thông tin có khả năng truyền tải xa.', isCorrect: false },
      { text: 'Thông tin ít dữ liệu.', isCorrect: false },
      { text: 'Người quản lý thông tin không cho phép.', isCorrect: false }
    ],
    explanation: 'Quyền truy cập thông tin số phụ thuộc vào phân quyền (permission) do người quản lý thông tin thiết lập.'
  },
  {
    id: 'tin_17',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 17: Thông tin số có thể:',
    options: [
      { text: 'Được lưu trữ rất lớn bởi nhiều cá nhân, tổ chức.', isCorrect: false },
      { text: 'Được cấp quyền truy cập khác nhau.', isCorrect: false },
      { text: 'Cả hai đáp án A, B đều đúng.', isCorrect: true },
      { text: 'Cả hai đáp án A, B đều sai.', isCorrect: false }
    ],
    explanation: 'Thông tin số vừa có dung lượng lưu trữ khổng lồ, vừa được phân cấp quyền truy cập bảo mật linh hoạt.'
  },
  {
    id: 'tin_18',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 18: Mức độ tin cậy của thông tin số phụ thuộc vào?',
    options: [
      { text: 'Nguồn gốc.', isCorrect: false },
      { text: 'Mục tiêu thông tin.', isCorrect: false },
      { text: 'Cả hai đáp án A, B đều đúng.', isCorrect: true },
      { text: 'Cả hai đáp án A, B đều sai.', isCorrect: false }
    ],
    explanation: 'Độ tin cậy phụ thuộc vào cơ quan/tác giả phát hành (nguồn gốc) và mục đích thông tin (thông tin khách quan hay vì mục đích thương mại/lừa đảo).'
  },
  {
    id: 'tin_19',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 19: Độ tin cậy của ý kiến thấp hơn sự kiện vì?',
    options: [
      { text: 'Mang nhiều cảm xúc.', isCorrect: false },
      { text: 'Mang định kiến cá nhân.', isCorrect: false },
      { text: 'Cả hai đáp án A, B đều đúng.', isCorrect: true },
      { text: 'Cả hai đáp án A, B đều sai.', isCorrect: false }
    ],
    explanation: 'Sự kiện là dữ liệu xác thực, còn ý kiến bị chi phối bởi cảm xúc chủ quan và định kiến của người nói.'
  },
  {
    id: 'tin_20',
    exKey: 'tin_mc',
    exTitle: 'Tin học 8 (Trắc nghiệm)',
    questionText: 'Câu 20: Điều gì quyết định thông tin có còn ý nghĩa hay không?',
    options: [
      { text: 'Sự chính xác của thông tin.', isCorrect: false },
      { text: 'Thông tin mang tính sự kiện.', isCorrect: false },
      { text: 'Thời điểm công bố thông tin.', isCorrect: true },
      { text: 'Đặc điểm của thông tin.', isCorrect: false }
    ],
    explanation: 'Tính cập nhật/thời sự: Thông tin cũ, lỗi thời dù chính xác tại thời điểm trước thì hiện tại cũng mất đi ý nghĩa thực tiễn.'
  },

  // --- PHẦN II: 3 CÂU TRẮC NGHIỆM ĐÚNG / SAI ---
  {
    id: 'tin_21',
    exKey: 'tin_tf',
    exTitle: 'Tin học 8 (Đúng/Sai)',
    questionText: 'Câu 21 (Phần II - Câu 1): Khẳng định nào sau đây là ĐÚNG về đặc điểm và tính pháp lý của thông tin số?',
    options: [
      { text: 'Các thông tin số trên Internet đều có độ tin cậy và chính xác cao tuyệt đối.', isCorrect: false },
      { text: 'Nguồn tài nguyên trên Internet là miễn phí hoàn toàn, không cần xin phép khi sử dụng.', isCorrect: false },
      { text: 'Quyền tác giả của thông tin số được pháp luật bảo hộ và thông tin số rất khó bị xóa bỏ hoàn toàn.', isCorrect: true },
      { text: 'Thông tin số rất khó chỉnh sửa nên luôn chính xác.', isCorrect: false }
    ],
    explanation: 'Luật Sở hữu trí tuệ bảo hộ quyền tác giả số; thông tin số khi đã phát tán trên mạng để lại dấu vết kỹ thuật số rất khó xóa sạch.'
  },
  {
    id: 'tin_22',
    exKey: 'tin_tf',
    exTitle: 'Tin học 8 (Đúng/Sai)',
    questionText: 'Câu 22 (Phần II - Câu 2): Khẳng định nào sau đây là ĐÚNG về lịch sử phát triển của các thế hệ máy tính?',
    options: [
      { text: 'Máy tính thế hệ thứ ba sử dụng bóng bán dẫn và có kích thước lớn hơn thế hệ thứ hai.', isCorrect: false },
      { text: 'Mạch tích hợp (IC) giúp máy tính nhỏ gọn hơn và tăng tốc độ tính toán nhưng chưa có bộ nhớ.', isCorrect: false },
      { text: 'Máy tính xách tay chúng ta đang dùng ngày nay được coi là đại diện cho máy tính thế hệ thứ tư.', isCorrect: true },
      { text: 'Máy tính thế hệ thứ nhất hoạt động nhanh hơn và tiết kiệm điện năng hơn máy tính thế hệ thứ hai.', isCorrect: false }
    ],
    explanation: 'Máy tính cá nhân/xách tay hiện đại dùng chip vi xử lý (VLSI) là đại diện tiêu biểu của máy tính thế hệ thứ tư.'
  },
  {
    id: 'tin_23',
    exKey: 'tin_tf',
    exTitle: 'Tin học 8 (Đúng/Sai)',
    questionText: 'Câu 23 (Phần II - Câu 3): Khẳng định nào sau đây là ĐÚNG về việc khai thác và đánh giá độ tin cậy của thông tin?',
    options: [
      { text: 'Thông tin được nhiều người chia sẻ trên mạng xã hội luôn đáng tin cậy hơn trang web ít người biết.', isCorrect: false },
      { text: 'Khi tìm hiểu về tác hại rác thải nhựa, đọc thông tin từ một bài viết trong nhóm mạng xã hội là nguồn tin đáng tin cậy nhất.', isCorrect: false },
      { text: 'Để chuẩn bị bài thuyết trình y tế/khoa học, cần đối chiếu và so sánh các số liệu từ nguồn chính thống uy tín như Bộ Y tế và WHO.', isCorrect: true },
      { text: 'Không thể sử dụng công cụ tìm kiếm Google hoặc Bing để tra cứu thông tin bằng từ khóa.', isCorrect: false }
    ],
    explanation: 'Các cơ quan chuyên môn quốc tế và quốc gia (như WHO, Bộ Y tế) là nguồn dữ liệu chuẩn mực, tin cậy nhất để trích dẫn.'
  }
];
