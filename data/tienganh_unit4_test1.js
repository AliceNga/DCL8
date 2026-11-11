/**
 * BỘ ĐỀ THI ĐỊNH KỲ — UNIT 4. ETHNIC GROUP IN VIET NAM - TEST 1
 * Ảnh chụp ngày: 10T11 (Học thêm trên lớp môn Tiếng Anh)
 *
 * Tổng số: 40 câu trắc nghiệm chuẩn 100% theo 4 trang bài thi:
 * - Trang 1: Q1 - Q16 (Phát âm /k/, trọng âm, từ vựng ngữ pháp, thông báo Cultural Exchange Day)
 * - Trang 2: Q17 - Q27 (Sắp xếp câu, kết thúc đoạn văn, bài đọc điền từ 54 ethnic groups, viết lại câu)
 * - Trang 3: Q28 - Q34 (Viết câu từ gợi ý, câu hỏi biển báo Q29 & bảng thông báo Q30, bài đọc Sa Pa Market)
 * - Trang 4: Q35 - Q40 (Đoạn văn chợ nổi, bài đọc điền 4 câu người Mường Q37 - Q40)
 */

window.EXAM_UNIT4_TEST1_DATABASE = [
  // ==========================================
  // TRANG 1: QUESTION 1 - 16
  // ==========================================
  {
    id: 'u4t1_1',
    exKey: 'phonetics',
    exTitle: 'Part 1: Pronunciation',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 1.</strong> Mark the letter A, B, C or D to indicate the word whose underlined part differs from the other three in pronunciation:',
    options: [
      { text: 'A. <u>ch</u>emist', isCorrect: false },
      { text: 'B. s<u>ch</u>ool', isCorrect: false },
      { text: 'C. <u>ch</u>ance', isCorrect: true },
      { text: 'D. <u>ch</u>aos', isCorrect: false }
    ],
    explanation: '<strong>chance</strong> có phần gạch chân phát âm là /tʃ/ (/tʃɑːns/ hoặc /tʃæns/). Các từ còn lại phát âm là /k/: chemist /ˈkemɪst/, school /skuːl/, chaos /ˈkeɪɒs/.'
  },
  {
    id: 'u4t1_2',
    exKey: 'phonetics',
    exTitle: 'Part 1: Pronunciation',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 2.</strong> Mark the letter A, B, C or D to indicate the word whose underlined part differs from the other three in pronunciation:',
    options: [
      { text: 'A. <u>kn</u>ock', isCorrect: true },
      { text: 'B. <u>k</u>ey', isCorrect: false },
      { text: 'C. poc<u>k</u>et', isCorrect: false },
      { text: 'D. mil<u>k</u>', isCorrect: false }
    ],
    explanation: '<strong>knock</strong> có chữ "k" là âm câm (silent k), phát âm là /nɒk/. Các từ còn lại chữ "k" được phát âm là /k/: key /kiː/, pocket /ˈpɒkɪt/, milk /mɪlk/.'
  },
  {
    id: 'u4t1_3',
    exKey: 'stress',
    exTitle: 'Part 2: Stress',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 3.</strong> Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress:',
    options: [
      { text: 'A. peoples', isCorrect: false },
      { text: 'B. poultry', isCorrect: false },
      { text: 'C. preserve', isCorrect: true },
      { text: 'D. worship', isCorrect: false }
    ],
    explanation: '<strong>preserve</strong> /prɪˈzɜːv/ có trọng âm rơi vào âm tiết thứ 2. Các từ còn lại có trọng âm rơi vào âm tiết thứ 1: peoples /ˈpiːplz/, poultry /ˈpəʊltri/, worship /ˈwɜːʃɪp/.'
  },
  {
    id: 'u4t1_4',
    exKey: 'stress',
    exTitle: 'Part 2: Stress',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 4.</strong> Mark the letter A, B, C or D to indicate the word that differs from the other three in the position of primary stress:',
    options: [
      { text: 'A. diversity', isCorrect: false },
      { text: 'B. pharmacy', isCorrect: true },
      { text: 'C. establish', isCorrect: false },
      { text: 'D. religious', isCorrect: false }
    ],
    explanation: '<strong>pharmacy</strong> /ˈfɑːməsi/ có trọng âm rơi vào âm tiết thứ 1. Các từ còn lại trọng âm rơi vào âm tiết thứ 2: diversity /daɪˈvɜːsəti/, establish /ɪˈstæblɪʃ/, religious /rɪˈlɪdʒəs/.'
  },
  {
    id: 'u4t1_5',
    exKey: 'vocab_grammar',
    exTitle: 'Part 3: Vocabulary & Grammar',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 5.</strong> A boy is ________ the buffalo in the rice field.',
    options: [
      { text: 'A. playing', isCorrect: false },
      { text: 'B. fighting', isCorrect: false },
      { text: 'C. herding', isCorrect: true },
      { text: 'D. running', isCorrect: false }
    ],
    explanation: 'Cụm từ cố định: <em>herd the buffalo</em> (chăn trâu). Câu hoàn chỉnh: "A boy is herding the buffalo in the rice field."'
  },
  {
    id: 'u4t1_6',
    exKey: 'vocab_grammar',
    exTitle: 'Part 3: Vocabulary & Grammar',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 6.</strong> There are not many high buildings to block ________ in our village.',
    options: [
      { text: 'A. view', isCorrect: false },
      { text: 'B. a view', isCorrect: false },
      { text: 'C. some views', isCorrect: false },
      { text: 'D. the view', isCorrect: true }
    ],
    explanation: 'Dùng cụm <em>block the view</em> (chắn tầm nhìn/tầm mắt cụ thể trong không gian làng quê).'
  },
  {
    id: 'u4t1_7',
    exKey: 'vocab_grammar',
    exTitle: 'Part 3: Vocabulary & Grammar',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 7.</strong> Terraced fields are often found in ________ area.',
    options: [
      { text: 'A. mountain', isCorrect: false },
      { text: 'B. mountainous', isCorrect: true },
      { text: 'C. mountaineer', isCorrect: false },
      { text: 'D. mountainful', isCorrect: false }
    ],
    explanation: 'Trước danh từ <em>area</em> cần một tính từ bổ nghĩa: <em>mountainous</em> (thuộc miền núi). <em>mountainous area</em> = vùng miền núi.'
  },
  {
    id: 'u4t1_8',
    exKey: 'vocab_grammar',
    exTitle: 'Part 3: Vocabulary & Grammar',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 8.</strong> My Son sanctuary has been recognized by UNESCO as a world ________.',
    options: [
      { text: 'A. ethnic minorities', isCorrect: false },
      { text: 'B. open-air market', isCorrect: false },
      { text: 'C. heritage site', isCorrect: true },
      { text: 'D. terraced field', isCorrect: false }
    ],
    explanation: 'Cụm danh từ: <em>world heritage site</em> (di sản thế giới). Thánh địa Mỹ Sơn được UNESCO công nhận là Di sản Thế giới.'
  },
  {
    id: 'u4t1_9',
    exKey: 'vocab_grammar',
    exTitle: 'Part 3: Vocabulary & Grammar',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 9.</strong> If you go to Sapa, you can distinguish people from different ethnic groups by their ________.',
    options: [
      { text: 'A. costumes', isCorrect: true },
      { text: 'B. livestock', isCorrect: false },
      { text: 'C. highlands', isCorrect: false },
      { text: 'D. staircases', isCorrect: false }
    ],
    explanation: '<em>costumes</em> (trang phục truyền thống). Ta phân biệt người dân các dân tộc thiểu số qua trang phục đặc trưng của họ.'
  },
  {
    id: 'u4t1_10',
    exKey: 'vocab_grammar',
    exTitle: 'Part 3: Vocabulary & Grammar',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: "<strong>Question 10.</strong> There's ________ milk left in the fridge. It should be enough for our coffee.",
    options: [
      { text: 'A. a little', isCorrect: true },
      { text: 'B. little', isCorrect: false },
      { text: 'C. a few', isCorrect: false },
      { text: 'D. few', isCorrect: false }
    ],
    explanation: '<em>milk</em> là danh từ không đếm được. Vế sau nói "It should be enough for our coffee" (vẫn đủ pha cà phê) mang nghĩa tích cực, nên dùng <em>a little</em> (một ít, đủ dùng).'
  },
  {
    id: 'u4t1_11',
    exKey: 'vocab_grammar',
    exTitle: 'Part 3: Vocabulary & Grammar',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 11.</strong> How ________ ethnic groups in Viet Nam do you know?',
    options: [
      { text: 'A. much', isCorrect: false },
      { text: 'B. often', isCorrect: false },
      { text: 'C. many', isCorrect: true },
      { text: 'D. tall', isCorrect: false }
    ],
    explanation: '<em>ethnic groups</em> là danh từ đếm được số nhiều, nên câu hỏi số lượng dùng <em>How many</em>.'
  },
  {
    id: 'u4t1_12',
    exKey: 'vocab_grammar',
    exTitle: 'Part 3: Vocabulary & Grammar',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    questionText: '<strong>Question 12.</strong> Andrew: "Whose is this book?" - Alex: "________"',
    options: [
      { text: "A. It's a book.", isCorrect: false },
      { text: 'B. Thanks.', isCorrect: false },
      { text: "C. It's mine.", isCorrect: true },
      { text: 'D. Here you are.', isCorrect: false }
    ],
    explanation: 'Câu hỏi với <em>Whose</em> hỏi về quyền sở hữu (Của ai?), câu trả lời dùng đại từ sở hữu <em>It\'s mine</em> (Nó là của tôi).'
  },
  {
    id: 'u4t1_13',
    exKey: 'announcement',
    exTitle: 'Part 4: Announcement Cloze',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    readingContext: `
      <div class="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <div class="font-black text-center text-amber-950 uppercase tracking-wide mb-2 text-sm">
          CULTURAL EXCHANGE DAY: CELEBRATING DIVERSITY!
        </div>
        <p>Dear Students and Staff,</p>
        <p class="mt-1">
          Our school is proud to host a special Cultural Exchange Day to celebrate the rich diversity of (13) ________ groups in Viet Nam. This event aims to introduce you to the unique customs and traditions of various communities across our country.
        </p>
        <p class="mt-1">
          You will have the chance to see traditional costumes, listen to folk music, and try authentic dishes from different ethnic groups. For example, you can learn about the intricate patterns of the H'Mong's traditional clothing, which are (14) ________ beautiful as their dances. There will also be displays of traditional musical instruments and handmade crafts. We believe that learning about these cultures is (15) ________ important as protecting them. Come and explore the beauty of Vietnamese ethnic cultures! The event will take place (16) ________ the school yard.
        </p>
      </div>
    `,
    questionText: '<strong>Question 13.</strong> Choose the correct option for blank (13):',
    options: [
      { text: 'A. foreign', isCorrect: false },
      { text: 'B. ethnic', isCorrect: true },
      { text: 'C. modern', isCorrect: false },
      { text: 'D. urban', isCorrect: false }
    ],
    explanation: 'Cụm từ phù hợp ngữ cảnh nói về các dân tộc ở Việt Nam: <em>ethnic groups</em> (các nhóm dân tộc).'
  },
  {
    id: 'u4t1_14',
    exKey: 'announcement',
    exTitle: 'Part 4: Announcement Cloze',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    readingContext: `
      <div class="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <div class="font-black text-center text-amber-950 uppercase tracking-wide mb-2 text-sm">
          CULTURAL EXCHANGE DAY: CELEBRATING DIVERSITY!
        </div>
        <p class="text-slate-600">...patterns of the H'Mong's traditional clothing, which are <strong>(14) ________</strong> beautiful as their dances...</p>
      </div>
    `,
    questionText: '<strong>Question 14.</strong> Choose the correct option for blank (14):',
    options: [
      { text: 'A. as', isCorrect: true },
      { text: 'B. so', isCorrect: false },
      { text: 'C. more', isCorrect: false },
      { text: 'D. than', isCorrect: false }
    ],
    explanation: 'Cấu trúc so sánh bằng: <em>as + adj + as</em>. Phía sau đã có "beautiful as" nên phía trước cần <em>as</em>.'
  },
  {
    id: 'u4t1_15',
    exKey: 'announcement',
    exTitle: 'Part 4: Announcement Cloze',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    readingContext: `
      <div class="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <div class="font-black text-center text-amber-950 uppercase tracking-wide mb-2 text-sm">
          CULTURAL EXCHANGE DAY: CELEBRATING DIVERSITY!
        </div>
        <p class="text-slate-600">...We believe that learning about these cultures is <strong>(15) ________</strong> important as protecting them...</p>
      </div>
    `,
    questionText: '<strong>Question 15.</strong> Choose the correct option for blank (15):',
    options: [
      { text: 'A. as', isCorrect: true },
      { text: 'B. so', isCorrect: false },
      { text: 'C. more', isCorrect: false },
      { text: 'D. than', isCorrect: false }
    ],
    explanation: 'Cấu trúc so sánh bằng: <em>as + adj + as</em> (is as important as protecting them = cũng quan trọng như việc bảo vệ chúng).'
  },
  {
    id: 'u4t1_16',
    exKey: 'announcement',
    exTitle: 'Part 4: Announcement Cloze',
    examCode: 'Unit 4 - Test 1',
    page: 1,
    readingContext: `
      <div class="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <div class="font-black text-center text-amber-950 uppercase tracking-wide mb-2 text-sm">
          CULTURAL EXCHANGE DAY: CELEBRATING DIVERSITY!
        </div>
        <p class="text-slate-600">...The event will take place <strong>(16) ________</strong> the school yard.</p>
      </div>
    `,
    questionText: '<strong>Question 16.</strong> Choose the correct option for blank (16):',
    options: [
      { text: 'A. at', isCorrect: false },
      { text: 'B. in', isCorrect: true },
      { text: 'C. on', isCorrect: false },
      { text: 'D. inside', isCorrect: false }
    ],
    explanation: 'Giới từ đi với sân trường: <em>in the school yard</em> (tại sân trường).'
  },

  // ==========================================
  // TRANG 2: QUESTION 17 - 27
  // ==========================================
  {
    id: 'u4t1_17',
    exKey: 'sentence_order',
    exTitle: 'Part 5: Sentence Ordering',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    readingContext: `
      <div class="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-800 leading-relaxed font-sans mb-2">
        <p class="font-bold text-slate-900 mb-1.5">Question 17. Viet Nam is home to 54 ethnic groups, each with its own unique culture. Their diversity adds richness to our country's heritage ________.</p>
        <p class="pl-2">a. Many groups have their own traditional costumes, often with intricate patterns and vibrant colours.</p>
        <p class="pl-2">b. These groups also have distinct customs, festivals, and folk music that reflect their way of life.</p>
        <p class="pl-2">c. Moreover, they usually live in different regions, from the high mountains to the vast deltas.</p>
      </div>
    `,
    questionText: '<strong>Question 17.</strong> Mark the letter A, B, C or D to indicate the correct order of sentences:',
    options: [
      { text: 'A. a-b-c', isCorrect: true },
      { text: 'B. b-a-c', isCorrect: false },
      { text: 'C. c-a-b', isCorrect: false },
      { text: 'D. a-c-b', isCorrect: false }
    ],
    explanation: 'Thứ tự logic: Câu (a) giới thiệu trang phục truyền thống độc đáo -> Câu (b) liên kết bằng "These groups also have distinct customs..." -> Câu (c) bổ sung bằng liên từ "Moreover, they usually live in different regions...". Đáp án chuẩn: <strong>a-b-c</strong>.'
  },
  {
    id: 'u4t1_18',
    exKey: 'sentence_order',
    exTitle: 'Part 5: Sentence Ordering',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    questionText: '<strong>Question 18.</strong> Choose the sentence that most appropriately ends the text (in question 17):',
    options: [
      { text: 'A. Learning about these cultures is a fascinating journey for everyone.', isCorrect: true },
      { text: 'B. The Kinh people are the largest ethnic group in Viet Nam.', isCorrect: false },
      { text: 'C. Some ethnic groups are very small in number, living in remote areas.', isCorrect: false },
      { text: 'D. We should try their traditional food when we visit their villages.', isCorrect: false }
    ],
    explanation: 'Câu kết đoạn văn cần mang tính tổng kết, khép lại ý nghĩa của việc tìm hiểu sự đa dạng văn hóa: <em>"Learning about these cultures is a fascinating journey for everyone."</em>'
  },
  {
    id: 'u4t1_19',
    exKey: 'cloze_reading',
    exTitle: 'Part 6: Reading Cloze (54 Ethnic Groups)',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    readingContext: `
      <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p>
          Viet Nam is a multi-nationality country with 54 ethnic <strong>(19) ________</strong>. The Viet (Kinh) people account <strong>(20) ________</strong> 87% of the country's population and mainly inhabit the Red River delta, the central coastal delta, the Mekong delta and major cities. The other 53 ethnic <strong>(21) ________</strong> groups, totalling over 8 million people, are scattered over mountain areas (covering two-thirds of the country's territory) spreading from the North to the South. Among ethnic minorities, the largest ones are Tay, Thai, Muong, Hoa, Khmer, and Nung with a <strong>(22) ________</strong> of around 1 million each, while the smallest are Brau, Roman, Odu with several hundred people each.
        </p>
        <p class="mt-2">
          A number of ethnic minorities had mastered some farming techniques. They grew rice plants in swamped paddy fields and carried out irrigation. Others <strong>(23) ________</strong> hunting, fishing, collecting and lived a semi-nomadic life. Each group <strong>(24) ________</strong> its own culture, diverse and special. Beliefs and religions of the Vietnamese ethnic minority groups were also disparate from each other.
        </p>
      </div>
    `,
    questionText: '<strong>Question 19.</strong> Choose the best answer for blank (19):',
    options: [
      { text: 'A. groups', isCorrect: true },
      { text: 'B. team', isCorrect: false },
      { text: 'C. minorities', isCorrect: false },
      { text: 'D. majorities', isCorrect: false }
    ],
    explanation: 'Cụm từ cố định: <em>54 ethnic groups</em> (54 nhóm dân tộc / dân tộc anh em).'
  },
  {
    id: 'u4t1_20',
    exKey: 'cloze_reading',
    exTitle: 'Part 6: Reading Cloze (54 Ethnic Groups)',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    readingContext: `
      <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...The Viet (Kinh) people account <strong>(20) ________</strong> 87% of the country's population...</p>
      </div>
    `,
    questionText: '<strong>Question 20.</strong> Choose the best answer for blank (20):',
    options: [
      { text: 'A. in', isCorrect: false },
      { text: 'B. for', isCorrect: true },
      { text: 'C. of', isCorrect: false },
      { text: 'D. at', isCorrect: false }
    ],
    explanation: 'Cụm động từ cố định: <em>account for</em> (chiếm, ví dụ chiếm 87% dân số).'
  },
  {
    id: 'u4t1_21',
    exKey: 'cloze_reading',
    exTitle: 'Part 6: Reading Cloze (54 Ethnic Groups)',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    readingContext: `
      <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...The other 53 ethnic <strong>(21) ________</strong> groups, totalling over 8 million people...</p>
      </div>
    `,
    questionText: '<strong>Question 21.</strong> Choose the best answer for blank (21):',
    options: [
      { text: 'A. large', isCorrect: false },
      { text: 'B. majority', isCorrect: false },
      { text: 'C. small', isCorrect: false },
      { text: 'D. minority', isCorrect: true }
    ],
    explanation: 'Cụm từ chỉ dân tộc thiểu số: <em>ethnic minority groups</em>.'
  },
  {
    id: 'u4t1_22',
    exKey: 'cloze_reading',
    exTitle: 'Part 6: Reading Cloze (54 Ethnic Groups)',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    readingContext: `
      <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...with a <strong>(22) ________</strong> of around 1 million each...</p>
      </div>
    `,
    questionText: '<strong>Question 22.</strong> Choose the best answer for blank (22):',
    options: [
      { text: 'A. religion', isCorrect: false },
      { text: 'B. inhabitants', isCorrect: false },
      { text: 'C. population', isCorrect: true },
      { text: 'D. people', isCorrect: false }
    ],
    explanation: 'Cụm từ chỉ quy mô dân số: <em>with a population of around 1 million each</em> (với dân số khoảng 1 triệu người mỗi dân tộc).'
  },
  {
    id: 'u4t1_23',
    exKey: 'cloze_reading',
    exTitle: 'Part 6: Reading Cloze (54 Ethnic Groups)',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    readingContext: `
      <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...Others <strong>(23) ________</strong> hunting, fishing, collecting and lived a semi-nomadic life...</p>
      </div>
    `,
    questionText: '<strong>Question 23.</strong> Choose the best answer for blank (23):',
    options: [
      { text: 'A. did', isCorrect: true },
      { text: 'B. went', isCorrect: false },
      { text: 'C. made', isCorrect: false },
      { text: 'D. used', isCorrect: false }
    ],
    explanation: 'Động từ trong quá khứ đi với danh động từ chỉ hoạt động sinh kế: <em>did hunting, fishing, collecting</em> (thực hiện việc săn bắt, câu cá, hái lượm).'
  },
  {
    id: 'u4t1_24',
    exKey: 'cloze_reading',
    exTitle: 'Part 6: Reading Cloze (54 Ethnic Groups)',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    readingContext: `
      <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...Each group <strong>(24) ________</strong> its own culture, diverse and special...</p>
      </div>
    `,
    questionText: '<strong>Question 24.</strong> Choose the best answer for blank (24):',
    options: [
      { text: 'A. have', isCorrect: false },
      { text: 'B. has', isCorrect: true },
      { text: 'C. are having', isCorrect: false },
      { text: 'D. had', isCorrect: false }
    ],
    explanation: 'Chủ ngữ là <em>Each group</em> (số ít), diễn tả sự thật hiển nhiên về nét văn hóa của mỗi dân tộc nên chia hiện tại đơn ngôi thứ 3 số ít: <em>has</em>.'
  },
  {
    id: 'u4t1_25',
    exKey: 'sentence_transform',
    exTitle: 'Part 7: Sentence Transformation',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    questionText: '<strong>Question 25.</strong> In this mountainous area, it often takes the students two hours to go to their boarding school.',
    options: [
      { text: 'A. How much does it take the students in this mountainous area to go to their boarding school?', isCorrect: false },
      { text: 'B. How long does it take the students in this mountainous area to go to their boarding school?', isCorrect: true },
      { text: 'C. How much do the students in this mountainous area go to their boarding school?', isCorrect: false },
      { text: 'D. How long do the students in this mountainous area go to their boarding school?', isCorrect: false }
    ],
    explanation: 'Hỏi về khoảng thời gian cần để làm việc gì (two hours) dùng cấu trúc: <em>How long does it take + O + to V?</em>'
  },
  {
    id: 'u4t1_26',
    exKey: 'sentence_transform',
    exTitle: 'Part 7: Sentence Transformation',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    questionText: '<strong>Question 26.</strong> Tet is the most important festival in Vietnam.',
    options: [
      { text: 'A. Which is the most important festival in Vietnam?', isCorrect: true },
      { text: 'B. When is the most important festival in Vietnam?', isCorrect: false },
      { text: 'C. Where is the most important festival in Vietnam?', isCorrect: false },
      { text: 'D. Why is the most important festival in Vietnam?', isCorrect: false }
    ],
    explanation: 'Hỏi xem lễ hội nào (lựa chọn danh từ sự vật) là quan trọng nhất ở Việt Nam: <em>Which is the most important festival in Vietnam?</em>'
  },
  {
    id: 'u4t1_27',
    exKey: 'sentence_cues',
    exTitle: 'Part 8: Sentence Building from Cues',
    examCode: 'Unit 4 - Test 1',
    page: 2,
    questionText: '<strong>Question 27.</strong> The H’Mong / traditional / costumes / be / colorful / as / their / festivals.',
    options: [
      { text: 'A. The H’Mong traditional costumes are as colorful as their festivals.', isCorrect: true },
      { text: 'B. The H’Mong traditional costumes are more colorful as their festivals.', isCorrect: false },
      { text: 'C. The H’Mong traditional costumes are as colorful than their festivals.', isCorrect: false },
      { text: 'D. The H’Mong traditional costumes is as colorful as their festivals.', isCorrect: false }
    ],
    explanation: 'Chủ ngữ <em>costumes</em> là danh từ số nhiều nên to be là <em>are</em>. Cấu trúc so sánh bằng: <em>as + adj + as</em>. Đáp án đúng: <em>"The H’Mong traditional costumes are as colorful as their festivals."</em>'
  },

  // ==========================================
  // TRANG 3: QUESTION 28 - 34
  // ==========================================
  {
    id: 'u4t1_28',
    exKey: 'sentence_cues',
    exTitle: 'Part 8: Sentence Building from Cues',
    examCode: 'Unit 4 - Test 1',
    page: 3,
    questionText: '<strong>Question 28.</strong> Could / you / tell / me / where / traditional / market / be / ?',
    options: [
      { text: 'A. Could you tell me where is the traditional market?', isCorrect: false },
      { text: 'B. Could you tell me where the traditional market is?', isCorrect: true },
      { text: 'C. Could you tell me where the traditional market?', isCorrect: false },
      { text: 'D. Could you tell me where the traditional market was?', isCorrect: false }
    ],
    explanation: 'Cấu trúc câu hỏi gián tiếp: <em>Could you tell me + Wh-word + S + V?</em> (trật tự từ sau từ để hỏi là thể khẳng định, không đảo to be lên trước chủ ngữ). Do đó: <em>"...where the traditional market is?"</em>'
  },
  {
    id: 'u4t1_29',
    exKey: 'signs_notices',
    exTitle: 'Part 9: Signs & Notices',
    examCode: 'Unit 4 - Test 1',
    page: 3,
    visualComponent: `
      <div class="flex flex-col items-center justify-center p-3 bg-white rounded-2xl border-2 border-slate-300 max-w-xs mx-auto shadow-sm">
        <img src="assets/test1_q29_sign.jpg" alt="No Dogs Allowed In Park" class="w-56 h-auto rounded-lg border border-slate-200" />
        <div class="mt-2 text-center">
          <span class="inline-block px-2.5 py-0.5 rounded bg-red-100 text-red-800 text-[11px] font-black uppercase tracking-wider">
            Biển Báo: NO DOGS ALLOWED IN PARK
          </span>
        </div>
      </div>
    `,
    questionText: '<strong>Question 29.</strong> What does the sign say?',
    options: [
      { text: 'A. Pets are allowed in the park.', isCorrect: false },
      { text: 'B. You are not allowed to bring pets here.', isCorrect: true },
      { text: 'C. Pets are not allowed unless they are on a leash.', isCorrect: false },
      { text: 'D. Pets are not allowed in this area.', isCorrect: false }
    ],
    explanation: 'Biển báo ghi rõ: <strong>"NO DOGS ALLOWED IN PARK"</strong> (Cấm chó/thú cưng vào công viên), đồng nghĩa với việc bạn không được phép mang thú cưng vào đây: <em>"You are not allowed to bring pets here."</em>'
  },
  {
    id: 'u4t1_30',
    exKey: 'signs_notices',
    exTitle: 'Part 9: Signs & Notices',
    examCode: 'Unit 4 - Test 1',
    page: 3,
    visualComponent: `
      <div class="flex flex-col items-center justify-center p-3 bg-amber-50 rounded-2xl border-2 border-amber-300 max-w-sm mx-auto shadow-sm">
        <div class="w-full p-4 rounded-xl bg-white border border-slate-300 text-slate-800 shadow-2xs font-sans text-xs">
          <div class="w-3 h-3 rounded-full border border-slate-400 mx-auto mb-2 bg-slate-100"></div>
          <p class="font-bold text-slate-900 leading-snug">
            Lost: a blue backpack with a science textbook. Found near the school gate yesterday. Please contact office if yours.
          </p>
        </div>
        <span class="mt-2 text-[11px] font-bold text-amber-900">Bảng tin tìm đồ thất lạc tại cổng trường</span>
      </div>
    `,
    questionText: '<strong>Question 30.</strong> What should the owner do to get the item back?',
    options: [
      { text: 'A. Go to the school gate.', isCorrect: false },
      { text: 'B. Contact the school office.', isCorrect: true },
      { text: 'C. Wait for someone to call.', isCorrect: false },
      { text: 'D. Buy a new one.', isCorrect: false }
    ],
    explanation: 'Bảng thông báo ghi rõ: <em>"Please contact office if yours"</em> (Vui lòng liên hệ văn phòng trường nếu là đồ của bạn).'
  },
  {
    id: 'u4t1_31',
    exKey: 'reading_comprehension',
    exTitle: 'Part 10: Reading Comprehension (Traditional Markets)',
    examCode: 'Unit 4 - Test 1',
    page: 3,
    readingContext: `
      <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <div class="font-black text-center text-teal-950 uppercase tracking-wide mb-2 text-sm">
          TRADITIONAL MARKETS IN VIET NAM
        </div>
        <p>
          In Viet Nam, a market is a trading place, but many markets are not only about buying and selling things. They <span class="underline font-bold text-teal-900">reflect</span> the life of the community. A traditional market is a social gathering point for people of all ages and it is a new and exciting experience for children, a trading place for local craftsmen, and a chance for young people to meet. People go to the traditional market not only to buy and sell things but also to eat, drink, play games, and socialize. For example, if you go to Sa Pa Market, which is in the highlands in the north of Viet Nam, you can see people wearing their nicest clothes and spending all day long at the market. They buy things, play the flute, dance, and sing. This is also a time to meet, make friends or look for lovers. That is why this kind of gathering is also called "Love Market". Some other countryside markets in the Mekong Delta are held on boats. Most of the goods are sold at a floating market. The most exciting time is in the early morning when boats arrive loaded up with agricultural products.
        </p>
      </div>
    `,
    questionText: '<strong>Question 31.</strong> In Viet Nam, all markets are ________.',
    options: [
      { text: 'A. only trading places', isCorrect: false },
      { text: 'B. only about buying things', isCorrect: false },
      { text: 'C. only about selling things', isCorrect: false },
      { text: 'D. not only about buying and selling things', isCorrect: true }
    ],
    explanation: 'Đoạn văn đầu ghi rõ: <em>"In Viet Nam, a market is a trading place, but many markets are not only about buying and selling things."</em>'
  },
  {
    id: 'u4t1_32',
    exKey: 'reading_comprehension',
    exTitle: 'Part 10: Reading Comprehension (Traditional Markets)',
    examCode: 'Unit 4 - Test 1',
    page: 3,
    readingContext: `
      <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...A traditional market is a social gathering point for people of all ages and it is a new and exciting experience for children...</p>
      </div>
    `,
    questionText: '<strong>Question 32.</strong> A traditional market is a social gathering point for ________.',
    options: [
      { text: 'A. young people', isCorrect: false },
      { text: 'B. people of all ages', isCorrect: true },
      { text: 'C. local craftsmen', isCorrect: false },
      { text: 'D. children', isCorrect: false }
    ],
    explanation: 'Bài đọc viết: <em>"A traditional market is a social gathering point for people of all ages"</em> (điểm tụ họp xã hội cho mọi lứa tuổi).'
  },
  {
    id: 'u4t1_33',
    exKey: 'reading_comprehension',
    exTitle: 'Part 10: Reading Comprehension (Traditional Markets)',
    examCode: 'Unit 4 - Test 1',
    page: 3,
    readingContext: `
      <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...People go to the traditional market not only to buy and sell things but also to eat, drink, play games, and socialize...</p>
      </div>
    `,
    questionText: '<strong>Question 33.</strong> What can people do at the traditional market?',
    options: [
      { text: 'A. Sell and buy things only.', isCorrect: false },
      { text: 'B. Buy and sell things, eat, drink and play games.', isCorrect: false },
      { text: 'C. Buy things and eat.', isCorrect: false },
      { text: 'D. Buy and sell things, eat, drink, play games and socialize.', isCorrect: true }
    ],
    explanation: 'Bài đọc nêu đầy đủ: <em>"not only to buy and sell things but also to eat, drink, play games, and socialize."</em>'
  },
  {
    id: 'u4t1_34',
    exKey: 'reading_comprehension',
    exTitle: 'Part 10: Reading Comprehension (Traditional Markets)',
    examCode: 'Unit 4 - Test 1',
    page: 3,
    readingContext: `
      <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...For example, if you go to Sa Pa Market... you can see people wearing their nicest clothes and spending all day long at the market. They buy things, play the flute, dance, and sing...</p>
      </div>
    `,
    questionText: '<strong>Question 34.</strong> What do the ethnic people who go to Sa Pa Market do?',
    options: [
      { text: 'A. They wear their nicest clothes, buy things, play the flute, dance and sing.', isCorrect: true },
      { text: 'B. They ride on a horse and sing.', isCorrect: false },
      { text: 'C. They drink a lot of wine and dance.', isCorrect: false },
      { text: 'D. They buy the nicest clothes at the market and look for lovers.', isCorrect: false }
    ],
    explanation: 'Trích từ bài đọc: <em>"wearing their nicest clothes and spending all day long at the market. They buy things, play the flute, dance, and sing."</em>'
  },

  // ==========================================
  // TRANG 4: QUESTION 35 - 40
  // ==========================================
  {
    id: 'u4t1_35',
    exKey: 'reading_comprehension',
    exTitle: 'Part 10: Reading Comprehension (Traditional Markets)',
    examCode: 'Unit 4 - Test 1',
    page: 4,
    readingContext: `
      <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...Some other countryside markets in the Mekong Delta are held on boats. Most of the goods are sold at a floating market...</p>
      </div>
    `,
    questionText: '<strong>Question 35.</strong> Some of the markets in the Mekong Delta are held ________ are called floating markets.',
    options: [
      { text: 'A. along the roads', isCorrect: false },
      { text: 'B. on the paddy fields', isCorrect: false },
      { text: 'C. on boats', isCorrect: true },
      { text: 'D. in the morning', isCorrect: false }
    ],
    explanation: 'Trích bài đọc: <em>"Some other countryside markets in the Mekong Delta are held on boats. Most of the goods are sold at a floating market."</em>'
  },
  {
    id: 'u4t1_36',
    exKey: 'reading_comprehension',
    exTitle: 'Part 10: Reading Comprehension (Traditional Markets)',
    examCode: 'Unit 4 - Test 1',
    page: 4,
    readingContext: `
      <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...In Viet Nam, a market is a trading place, but many markets are not only about buying and selling things. They <span class="underline font-bold text-teal-900">reflect</span> the life of the community...</p>
      </div>
    `,
    questionText: '<strong>Question 36.</strong> The word "reflect" is CLOSEST in meaning to ________.',
    options: [
      { text: 'A. hide', isCorrect: false },
      { text: 'B. show', isCorrect: true },
      { text: 'C. ignore', isCorrect: false },
      { text: 'D. change', isCorrect: false }
    ],
    explanation: 'Từ <em>reflect</em> (phản ánh, phản chiếu) đồng nghĩa với từ <em>show</em> (thể hiện, bày tỏ cho thấy cuộc sống cộng đồng).'
  },
  {
    id: 'u4t1_37',
    exKey: 'missing_sentences',
    exTitle: 'Part 11: Missing Sentence Cloze (Muong People)',
    examCode: 'Unit 4 - Test 1',
    page: 4,
    readingContext: `
      <div class="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <div class="font-black text-center text-rose-950 uppercase tracking-wide mb-2 text-sm">
          THE MUONG ETHNIC PEOPLE
        </div>
        <p>
          Hoa Binh and Thanh Hoa are two main provinces where there are more than 1.4 million Muong people living. They speak the Muong language which belongs to the Mon - Khmer group.(37) ________ . They cultivate mainly wet rice on terraced land, watered by small brooks. They also make handicrafts and exploit forest products (38) ________ .
        </p>
        <p class="mt-2">
          Men dress in Indigo pajamas and women wear skirts with many colorful patterns knitted on. The Muong build their houses on stilts with 4-roof architecture, (39) ________ . They are wooden houses in the shade of big trees, huddling against the mountain, and looking out on their vast rice fields. (40) ________ . The Muong follow traditional religious animism, which means that they believe that non-living objects have spirits. They build altars in their houses to worship ancestral spirits and other supernatural spirits. One of their most important festivals is the "Going to the Fields" ceremony.
        </p>
        <div class="mt-3 pt-2 border-t border-rose-200 font-semibold space-y-1 text-slate-700">
          <p>A. such as mushrooms, dried fungus, and ammonium to improve their living condition</p>
          <p>B. Therefore, it is convenient for their living and farming</p>
          <p>C. which are about six feet off the ground</p>
          <p>D. However, some of them also know the Kinh language</p>
        </div>
      </div>
    `,
    questionText: '<strong>Question 37.</strong> Which sentence fits blank (37)?',
    options: [
      { text: 'A. such as mushrooms, dried fungus, and ammonium to improve their living condition', isCorrect: false },
      { text: 'B. Therefore, it is convenient for their living and farming', isCorrect: false },
      { text: 'C. which are about six feet off the ground', isCorrect: false },
      { text: 'D. However, some of them also know the Kinh language', isCorrect: true }
    ],
    explanation: 'Câu trước nói về ngôn ngữ người Mường: "They speak the Muong language...", do đó câu tiếp theo nói về sự kết nối ngôn ngữ: <em>"However, some of them also know the Kinh language"</em> (Tuy nhiên, một số người trong số họ cũng biết tiếng Kinh).'
  },
  {
    id: 'u4t1_38',
    exKey: 'missing_sentences',
    exTitle: 'Part 11: Missing Sentence Cloze (Muong People)',
    examCode: 'Unit 4 - Test 1',
    page: 4,
    readingContext: `
      <div class="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...They also make handicrafts and exploit forest products <strong>(38) ________</strong> .</p>
        <div class="mt-2 text-[11px] text-slate-500 font-medium">A: such as mushrooms... | B: Therefore... | C: which are... | D: However...</div>
      </div>
    `,
    questionText: '<strong>Question 38.</strong> Which sentence fits blank (38)?',
    options: [
      { text: 'A. such as mushrooms, dried fungus, and ammonium to improve their living condition', isCorrect: true },
      { text: 'B. Therefore, it is convenient for their living and farming', isCorrect: false },
      { text: 'C. which are about six feet off the ground', isCorrect: false },
      { text: 'D. However, some of them also know the Kinh language', isCorrect: false }
    ],
    explanation: 'Liệt kê các lâm sản khai thác được từ rừng: <em>"such as mushrooms, dried fungus, and ammonium to improve their living condition"</em> (như nấm, mộc nhĩ khô, và sa nhân...).'
  },
  {
    id: 'u4t1_39',
    exKey: 'missing_sentences',
    exTitle: 'Part 11: Missing Sentence Cloze (Muong People)',
    examCode: 'Unit 4 - Test 1',
    page: 4,
    readingContext: `
      <div class="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...The Muong build their houses on stilts with 4-roof architecture, <strong>(39) ________</strong> . They are wooden houses in the shade of big trees...</p>
        <div class="mt-2 text-[11px] text-slate-500 font-medium">A: such as mushrooms... | B: Therefore... | C: which are... | D: However...</div>
      </div>
    `,
    questionText: '<strong>Question 39.</strong> Which sentence fits blank (39)?',
    options: [
      { text: 'A. such as mushrooms, dried fungus, and ammonium to improve their living condition', isCorrect: false },
      { text: 'B. Therefore, it is convenient for their living and farming', isCorrect: false },
      { text: 'C. which are about six feet off the ground', isCorrect: true },
      { text: 'D. However, some of them also know the Kinh language', isCorrect: false }
    ],
    explanation: 'Mệnh đề quan hệ giải thích cho đặc điểm nhà sàn (houses on stilts): <em>"which are about six feet off the ground"</em> (cách mặt đất khoảng 6 feet / gần 2 mét).'
  },
  {
    id: 'u4t1_40',
    exKey: 'missing_sentences',
    exTitle: 'Part 11: Missing Sentence Cloze (Muong People)',
    examCode: 'Unit 4 - Test 1',
    page: 4,
    readingContext: `
      <div class="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
        <p class="text-slate-600">...They are wooden houses in the shade of big trees, huddling against the mountain, and looking out on their vast rice fields. <strong>(40) ________</strong> . The Muong follow traditional religious animism...</p>
        <div class="mt-2 text-[11px] text-slate-500 font-medium">A: such as mushrooms... | B: Therefore... | C: which are... | D: However...</div>
      </div>
    `,
    questionText: '<strong>Question 40.</strong> Which sentence fits blank (40)?',
    options: [
      { text: 'A. such as mushrooms, dried fungus, and ammonium to improve their living condition', isCorrect: false },
      { text: 'B. Therefore, it is convenient for their living and farming', isCorrect: true },
      { text: 'C. which are about six feet off the ground', isCorrect: false },
      { text: 'D. However, some of them also know the Kinh language', isCorrect: false }
    ],
    explanation: 'Kết luận về vị trí thế đất của ngôi nhà nhìn ra cánh đồng: <em>"Therefore, it is convenient for their living and farming"</em> (Vì vậy, rất thuận tiện cho sinh hoạt và canh tác nông nghiệp của họ).'
  }
];
