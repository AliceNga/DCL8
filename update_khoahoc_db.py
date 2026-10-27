import re

with open('data/khoahoc.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update sci_essay_2
old_sci_2_pattern = r"id:\s*'sci_essay_2',.*?fullSolution:\s*'.*?'\s*\}"
new_sci_2 = """id: 'sci_essay_2',
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
      '• d) Khối lượng của 1 m³ nước ước tính theo kết quả thực hành là: m = D × V = 1010 kg/m³ × 1 m³ = 1010 kg.'}"""

# 2. Update sci_essay_8
old_sci_8_pattern = r"id:\s*'sci_essay_8',.*?fullSolution:\s*'.*?'\s*\}"
new_sci_8 = """id: 'sci_essay_8',
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
      '  - n(CO₂) = 12,044·10²³ / (6,022·10²³) = 2 mol => V(CO₂) = 2 × 24,79 = 49,58 lít.'}"""

# 3. Update sci_essay_13
old_sci_13_pattern = r"id:\s*'sci_essay_13',.*?fullSolution:\s*'.*?'\s*\}"
new_sci_13 = """id: 'sci_essay_13',
    exKey: 'sci_bio_essay',
    exTitle: 'KHTN 8 - Sinh Học (Tự luận - Câu 4 đầy đủ các ý a, b, c)',
    type: 'keypoint_checklist',
    questionText: 'Phần C - Câu 4. Trong một ca cấp cứu do tai nạn giao thông, bệnh nhân Nam bị mất máu nhiều và cần được truyền máu khẩn cấp, bệnh nhân có nhóm máu B.<br>' +
      'a) Trong điều kiện cơ sở y tế có đầy đủ nguồn máu dự trữ, bác sĩ sẽ chỉ định truyền cho bệnh nhân Nam túi máu thuộc nhóm máu nào? Vì sao?<br>' +
      'b) Nếu ngân hàng máu tạm thời hết nhóm máu B, bác sĩ có thể truyền nhóm máu nào thay thế với thể tích không quá 250ml? Giải thích cơ sở khoa học;<br>' +
      'c) Nêu ý nghĩa của việc tham gia phong trào \"Hiến máu nhân đạo\".',
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
      '• c) <strong>Ý nghĩa hiến máu nhân đạo:</strong> Cứu sống người bệnh hiểm nghèo trong các ca cấp cứu và điều trị phẫu thuật; đồng thời lan tỏa thông điệp nhân văn sâu sắc trong cộng đồng.'}"""

content = re.sub(old_sci_2_pattern, new_sci_2, content, flags=re.DOTALL)
content = re.sub(old_sci_8_pattern, new_sci_8, content, flags=re.DOTALL)
content = re.sub(old_sci_13_pattern, new_sci_13, content, flags=re.DOTALL)

with open('data/khoahoc.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open('public/data/khoahoc.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated data/khoahoc.js and public/data/khoahoc.js successfully.")
