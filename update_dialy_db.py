import re

with open('data/dialy.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the block of geo_tf_1 to geo_tf_4
old_tf_block_pattern = r"// --- 4 CÂU ĐÚNG / SAI \(TRANG 8-10\) ---.*?// --- 3 CÂU TỰ LUẬN"
new_tf_block = """// --- 4 CÂU ĐÚNG / SAI (TRANG 8-10) - CHUẨN ĐỦ 16 Ý ĐỐI CHIẾU PDF ---
  {
    id: 'geo_tf_1',
    exKey: 'geo_tf',
    exTitle: 'Địa lí 8 (Đúng/Sai - Bài 1)',
    questionText: 'Câu 21 (Đ/S Câu 1). Cho các nhận định sau về vị trí địa lí và phạm vi lãnh thổ Việt Nam:<br>' +
      'a) Việt Nam có chung biên giới đất liền với Trung Quốc, Lào và Cam-pu-chia.<br>' +
      'b) Vùng lãnh thổ Việt Nam chỉ bao gồm phần đất liền.<br>' +
      'c) Vùng biển của Việt Nam có diện tích khoảng 1 triệu km² trong Biển Đông.<br>' +
      'd) Nước ta nằm hoàn toàn ngoài vùng nội chí tuyến bán cầu Bắc.<br>' +
      'Phương án ghép Đúng (Đ) / Sai (S) chính xác là:',
    options: [
      { text: 'a-Đ, b-S, c-Đ, d-S', isCorrect: true },
      { text: 'a-Đ, b-Đ, c-S, d-S', isCorrect: false },
      { text: 'a-S, b-S, c-Đ, d-Đ', isCorrect: false },
      { text: 'a-Đ, b-S, c-S, d-S', isCorrect: false }
    ],
    explanation: '• a-Đ: Nước ta chung đường biên giới đất liền với 3 nước: Trung Quốc, Lào, Cam-pu-chia.<br>' +
      '• b-S: Lãnh thổ nước ta là một khối thống nhất và toàn vẹn bao gồm vùng đất, vùng biển và vùng trời.<br>' +
      '• c-Đ: Vùng biển Việt Nam có diện tích khoảng 1 triệu km² trong Biển Đông.<br>' +
      '• d-S: Nước ta nằm hoàn toàn TRONG vùng nội chí tuyến bán cầu Bắc (khoảng từ 8°34′B đến 23°23′B).'
  },
  {
    id: 'geo_tf_2',
    exKey: 'geo_tf',
    exTitle: 'Địa lí 8 (Đúng/Sai - Bài 2)',
    questionText: 'Câu 22 (Đ/S Câu 2). Cho các nhận định sau về đặc điểm địa hình Việt Nam:<br>' +
      'a) Địa hình nước ta chủ yếu là đồi núi thấp.<br>' +
      'b) Hai hướng địa hình chính là tây bắc – đông nam và vòng cung.<br>' +
      'c) Hoạt động của con người hoàn toàn không làm thay đổi địa hình.<br>' +
      'd) Trồng rừng trên đất dốc góp phần hạn chế xói mòn và trượt lở đất.<br>' +
      'Phương án ghép Đúng (Đ) / Sai (S) chính xác là:',
    options: [
      { text: 'a-Đ, b-Đ, c-S, d-Đ', isCorrect: true },
      { text: 'a-Đ, b-S, c-S, d-Đ', isCorrect: false },
      { text: 'a-S, b-Đ, c-Đ, d-S', isCorrect: false },
      { text: 'a-Đ, b-Đ, c-Đ, d-S', isCorrect: false }
    ],
    explanation: '• a-Đ: Đồi núi chiếm 3/4 diện tích lãnh thổ, nhưng chủ yếu là đồi núi thấp dưới 1000m (chiếm 85%).<br>' +
      '• b-Đ: Hai hướng chính của địa hình nước ta là hướng tây bắc - đông nam và hướng vòng cung.<br>' +
      '• c-S: Con người tác động mạnh mẽ làm biến đổi địa hình (đắp đê, xẻ núi, xây hầm, đô thị hóa...).<br>' +
      '• d-Đ: Trồng và bảo vệ rừng đầu nguồn, rừng phòng hộ trên đất dốc giúp giữ đất, chống xói mòn và sạt lở.'
  },
  {
    id: 'geo_tf_3',
    exKey: 'geo_tf',
    exTitle: 'Địa lí 8 (Đúng/Sai - Bài 3)',
    questionText: 'Câu 23 (Đ/S Câu 3). Cho các nhận định sau về tài nguyên khoáng sản Việt Nam:<br>' +
      'a) Nước ta có nhiều loại khoáng sản thuộc các nhóm khác nhau.<br>' +
      'b) Khoáng sản phân bố đồng đều trên toàn lãnh thổ.<br>' +
      'c) Khoáng sản cần được khai thác và sử dụng tiết kiệm.<br>' +
      'd) Than đá thuộc nhóm khoáng sản phi kim loại.<br>' +
      'Phương án ghép Đúng (Đ) / Sai (S) chính xác là:',
    options: [
      { text: 'a-Đ, b-S, c-Đ, d-S', isCorrect: true },
      { text: 'a-Đ, b-Đ, c-S, d-S', isCorrect: false },
      { text: 'a-S, b-S, c-Đ, d-Đ', isCorrect: false },
      { text: 'a-Đ, b-S, c-S, d-Đ', isCorrect: false }
    ],
    explanation: '• a-Đ: Cơ cấu khoáng sản phong phú (khoáng sản năng lượng, kim loại, phi kim loại...).<br>' +
      '• b-S: Khoáng sản phân bố không đồng đều, tập trung chủ yếu ở miền Bắc, Bắc Trung Bộ.<br>' +
      '• c-Đ: Khoáng sản là tài nguyên không tái tạo, cần được bảo vệ, khai thác hợp lí và sử dụng tiết kiệm.<br>' +
      '• d-S: Than đá, dầu mỏ, khí đốt thuộc nhóm khoáng sản năng lượng (nhiên liệu), không phải phi kim loại.'
  },
  {
    id: 'geo_tf_4',
    exKey: 'geo_tf',
    exTitle: 'Địa lí 8 (Đúng/Sai - Bài 4)',
    questionText: 'Câu 24 (Đ/S Câu 4). Cho các nhận định sau về khai thác và sử dụng tài nguyên khoáng sản Việt Nam:<br>' +
      'a) Tài nguyên khoáng sản góp phần quan trọng vào phát triển kinh tế - xã hội.<br>' +
      'b) Khoáng sản chỉ có ý nghĩa đối với hoạt động công nghiệp, không liên quan đến sinh hoạt đời sống.<br>' +
      'c) Khai thác khoáng sản cần gắn với sử dụng tiết kiệm tài nguyên và bảo vệ môi trường.<br>' +
      'd) Cần khai thác tối đa mọi loại khoáng sản, không phải quan tâm đến thế hệ tương lai.<br>' +
      'Phương án ghép Đúng (Đ) / Sai (S) chính xác là:',
    options: [
      { text: 'a-Đ, b-S, c-Đ, d-S', isCorrect: true },
      { text: 'a-Đ, b-Đ, c-S, d-S', isCorrect: false },
      { text: 'a-S, b-S, c-Đ, d-Đ', isCorrect: false },
      { text: 'a-Đ, b-S, c-S, d-S', isCorrect: false }
    ],
    explanation: '• a-Đ: Khoáng sản là nguồn nguyên - nhiên liệu quan trọng phục vụ công nghiệp hóa, hiện đại hóa.<br>' +
      '• b-S: Khoáng sản liên quan mật thiết đến nhiều ngành và cả đời sống sinh hoạt (năng lượng điện, vật liệu xây dựng...).<br>' +
      '• c-Đ: Cần gắn khai thác với chế biến sâu, bảo vệ môi trường sinh thái và sử dụng tiết kiệm.<br>' +
      '• d-S: Cần khai thác hợp lí để phát triển bền vững, giữ gìn tài nguyên cho các thế hệ tương lai.'
  }
];

// --- 3 CÂU TỰ LUẬN"""

# Notice the end of the array is at the end of the file
pattern = r"// --- 4 CÂU ĐÚNG / SAI \(TRANG 8-10\) ---.*?(?=// --- 3 CÂU TỰ LUẬN)"
content = re.sub(pattern, new_tf_block + "\n", content, flags=re.DOTALL)

with open('data/dialy.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open('public/data/dialy.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated data/dialy.js and public/data/dialy.js successfully.")
