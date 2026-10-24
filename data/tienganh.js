/**
 * ĐỀ CƯƠNG ÔN TẬP TIẾNG ANH 8 - GIỮA HỌC KÌ 1
 * THCS Nghĩa Tân - Năm học 2026-2027
 * Tổng số câu: 70 câu (55 câu trắc nghiệm + 15 câu tự luận / viết lại)
 * Hỗ trợ phát âm Audio Speech cho Ex 1 (Ngữ âm) và Ex 2 (Trọng âm)
 */

window.ENGLISH_DATABASE = [
  // ==========================================
  // EXERCISE 1: PHÁT ÂM (10 CÂU - AUDIO SPEECH)
  // ==========================================
  {
    id: 'en_1',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: 'f<u>oo</u>d', raw: 'food', isCorrect: true },
      { text: 'f<u>oo</u>t', raw: 'foot', isCorrect: false },
      { text: 'h<u>oo</u>k', raw: 'hook', isCorrect: false },
      { text: 'w<u>oo</u>d', raw: 'wood', isCorrect: false }
    ],
    explanation: '<strong>food</strong> phát âm là /fuːd/ (âm u dài). Các từ còn lại phát âm là /ʊ/ (u ngắn): foot /fʊt/, hook /hʊk/, wood /wʊd/.'
  },
  {
    id: 'en_2',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: 'ent<u>er</u>', raw: 'enter', isCorrect: false },
      { text: 'gath<u>er</u>', raw: 'gather', isCorrect: false },
      { text: 'pref<u>er</u>', raw: 'prefer', isCorrect: true },
      { text: 'diff<u>er</u>', raw: 'differ', isCorrect: false }
    ],
    explanation: '<strong>prefer</strong> phát âm là /prɪˈfɜːr/ (âm /ɜː/ dài, mang trọng âm chính). Các từ còn lại mang âm schwa nhẹ /ə/.'
  },
  {
    id: 'en_3',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: 'gr<u>ou</u>p', raw: 'group', isCorrect: true },
      { text: 'sh<u>ou</u>ld', raw: 'should', isCorrect: false },
      { text: 'w<u>ou</u>ld', raw: 'would', isCorrect: false },
      { text: 'c<u>ou</u>ld', raw: 'could', isCorrect: false }
    ],
    explanation: '<strong>group</strong> phát âm là /ɡruːp/ (âm /uː/ dài). should /ʃʊd/, would /wʊd/, could /kʊd/ đều phát âm là /ʊ/ ngắn (âm "l" câm).'
  },
  {
    id: 'en_4',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: '<u>e</u>xciting', raw: 'exciting', isCorrect: false },
      { text: 'conv<u>e</u>nient', raw: 'convenient', isCorrect: true },
      { text: 'rack<u>e</u>t', raw: 'racket', isCorrect: false },
      { text: 'b<u>e</u>gin', raw: 'begin', isCorrect: false }
    ],
    explanation: '<strong>convenient</strong> phát âm là /kənˈviːniənt/ (chữ e gạch chân phát âm là /iː/). Các từ còn lại phát âm là /ɪ/.'
  },
  {
    id: 'en_5',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: 'fr<u>ui</u>t', raw: 'fruit', isCorrect: false },
      { text: 's<u>ui</u>t', raw: 'suit', isCorrect: false },
      { text: 'j<u>ui</u>ce', raw: 'juice', isCorrect: false },
      { text: 'b<u>ui</u>ld', raw: 'build', isCorrect: true }
    ],
    explanation: '<strong>build</strong> phát âm là /bɪld/ (âm /ɪ/). Các từ fruit /fruːt/, suit /suːt/, juice /dʒuːs/ đều phát âm là /uː/ dài.'
  },
  {
    id: 'en_6',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: 'l<u>o</u>se', raw: 'lose', isCorrect: false },
      { text: 'impr<u>o</u>ve', raw: 'improve', isCorrect: false },
      { text: 'm<u>o</u>vie', raw: 'movie', isCorrect: false },
      { text: 'd<u>o</u>ve', raw: 'dove', isCorrect: true }
    ],
    explanation: '<strong>dove</strong> phát âm là /dʌv/ (âm /ʌ/). Các từ lose /luːz/, improve /ɪmˈpruːv/, movie /ˈmuːvi/ đều phát âm là /uː/.'
  },
  {
    id: 'en_7',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: 'p<u>u</u>ll', raw: 'pull', isCorrect: false },
      { text: 'l<u>u</u>nar', raw: 'lunar', isCorrect: true },
      { text: 'f<u>u</u>ll', raw: 'full', isCorrect: false },
      { text: 'p<u>u</u>t', raw: 'put', isCorrect: false }
    ],
    explanation: '<strong>lunar</strong> phát âm là /ˈluːnər/ (âm /uː/ dài). pull /pʊl/, full /fʊl/, put /pʊt/ đều phát âm là /ʊ/ ngắn.'
  },
  {
    id: 'en_8',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: 'ch<u>oi</u>ce', raw: 'choice', isCorrect: false },
      { text: 'p<u>oi</u>nt', raw: 'point', isCorrect: false },
      { text: 'tort<u>oi</u>se', raw: 'tortoise', isCorrect: true },
      { text: 'n<u>oi</u>se', raw: 'noise', isCorrect: false }
    ],
    explanation: '<strong>tortoise</strong> phát âm là /ˈtɔːtəs/ (đuôi -oise phát âm là âm schwa /əs/). Các từ còn lại phát âm là nguyên âm đôi /ɔɪ/.'
  },
  {
    id: 'en_9',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: 'j<u>our</u>ney', raw: 'journey', isCorrect: true },
      { text: 't<u>our</u>ist', raw: 'tourist', isCorrect: false },
      { text: 't<u>our</u>nament', raw: 'tournament', isCorrect: false },
      { text: 't<u>our</u>', raw: 'tour', isCorrect: false }
    ],
    explanation: '<strong>journey</strong> phát âm là /ˈdʒɜːni/ (âm /ɜː/ dài). Các từ tourist, tournament, tour phát âm là /ʊə/ hoặc /ɔː/.'
  },
  {
    id: 'en_10',
    exKey: 'ex1',
    exTitle: 'Ex 1: Phát âm',
    isAudioQuiz: true,
    questionText: 'Choose the word whose underlined part is pronounced differently from that of the others:',
    options: [
      { text: '<u>a</u>gain', raw: 'again', isCorrect: false },
      { text: 'c<u>a</u>mera', raw: 'camera', isCorrect: false },
      { text: 'vill<u>a</u>ge', raw: 'village', isCorrect: true },
      { text: 'wom<u>a</u>n', raw: 'woman', isCorrect: false }
    ],
    explanation: '<strong>village</strong> phát âm là /ˈvɪlɪdʒ/ (chữ a phát âm là /ɪ/). Các từ again, camera, woman chữ a phát âm là âm schwa /ə/.'
  },

  // ==========================================
  // EXERCISE 2: TRỌNG ÂM (5 CÂU - AUDIO SPEECH)
  // ==========================================
  {
    id: 'en_11',
    exKey: 'ex2',
    exTitle: 'Ex 2: Trọng âm',
    isAudioQuiz: true,
    questionText: 'Choose the word that is stressed differently from that of the other words:',
    options: [
      { text: 'enjoyment', raw: 'enjoyment', isCorrect: true },
      { text: 'concentrate', raw: 'concentrate', isCorrect: false },
      { text: 'practical', raw: 'practical', isCorrect: false },
      { text: 'media', raw: 'media', isCorrect: false }
    ],
    explanation: '<strong>enjoyment</strong> /ɪnˈdʒɔɪmənt/ có trọng âm rơi vào âm tiết thứ 2. Các từ còn lại: <strong>concentrate</strong> /ˈkɒnsntreɪt/, <strong>practical</strong> /ˈpræktɪkl/, <strong>media</strong> /ˈmiːdiə/ có trọng âm rơi vào âm tiết thứ 1.'
  },
  {
    id: 'en_12',
    exKey: 'ex2',
    exTitle: 'Ex 2: Trọng âm',
    isAudioQuiz: true,
    questionText: 'Choose the word that is stressed differently from that of the other words:',
    options: [
      { text: 'account', raw: 'account', isCorrect: false },
      { text: 'bully', raw: 'bully', isCorrect: true },
      { text: 'discuss', raw: 'discuss', isCorrect: false },
      { text: 'upload', raw: 'upload', isCorrect: false }
    ],
    explanation: '<strong>bully</strong> /ˈbʊli/ có trọng âm rơi vào âm tiết thứ 1. Các từ còn lại: <strong>account</strong> /əˈkaʊnt/, <strong>discuss</strong> /dɪˈskʌs/, <strong>upload</strong> /ˌʌpˈləʊd/ trọng âm 2.'
  },
  {
    id: 'en_13',
    exKey: 'ex2',
    exTitle: 'Ex 2: Trọng âm',
    isAudioQuiz: true,
    questionText: 'Choose the word that is stressed differently from that of the other words:',
    options: [
      { text: 'harmful', raw: 'harmful', isCorrect: false },
      { text: 'data', raw: 'data', isCorrect: false },
      { text: 'effect', raw: 'effect', isCorrect: true },
      { text: 'leisure', raw: 'leisure', isCorrect: false }
    ],
    explanation: '<strong>effect</strong> /ɪˈfekt/ có trọng âm rơi vào âm tiết thứ 2. Các từ <strong>harmful</strong> /ˈhɑːmfl/, <strong>data</strong> /ˈdeɪtə/, <strong>leisure</strong> /ˈleʒər/ đều có trọng âm rơi vào âm tiết thứ 1.'
  },
  {
    id: 'en_14',
    exKey: 'ex2',
    exTitle: 'Ex 2: Trọng âm',
    isAudioQuiz: true,
    questionText: 'Choose the word that is stressed differently from that of the other words:',
    options: [
      { text: 'improve', raw: 'improve', isCorrect: true },
      { text: 'forum', raw: 'forum', isCorrect: false },
      { text: 'message', raw: 'message', isCorrect: false },
      { text: 'website', raw: 'website', isCorrect: false }
    ],
    explanation: '<strong>improve</strong> /ɪmˈpruːv/ là động từ 2 âm tiết có trọng âm rơi vào âm tiết thứ 2. Các từ <strong>forum</strong> /ˈfɔːrəm/, <strong>message</strong> /ˈmesɪdʒ/, <strong>website</strong> /ˈwebsaɪt/ có trọng âm rơi vào âm tiết 1.'
  },
  {
    id: 'en_15',
    exKey: 'ex2',
    exTitle: 'Ex 2: Trọng âm',
    isAudioQuiz: true,
    questionText: 'Choose the word that is stressed differently from that of the other words:',
    options: [
      { text: 'snowboarding', raw: 'snowboarding', isCorrect: false },
      { text: 'positive', raw: 'positive', isCorrect: false },
      { text: 'harvester', raw: 'harvester', isCorrect: false },
      { text: 'picturesque', raw: 'picturesque', isCorrect: true }
    ],
    explanation: '<strong>picturesque</strong> /ˌpɪktʃəˈresk/ có đuôi -esque nhận trọng âm (trọng âm rơi vào âm tiết 3). Các từ snowboarding, positive, harvester trọng âm 1.'
  },

  // ==========================================
  // EXERCISE 3: TỪ VỰNG & NGỮ PHÁP (25 CÂU)
  // ==========================================
  {
    id: 'en_16',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '1. Many young people don’t _________ walking to school or playing outdoor games.',
    options: [
      { text: 'need', isCorrect: false },
      { text: 'enjoy', isCorrect: true },
      { text: 'suggest', isCorrect: false },
      { text: 'want', isCorrect: false }
    ],
    explanation: 'Cấu trúc: <strong>enjoy + V-ing</strong> (thích làm gì). Ở đây là walking / playing outdoor games.'
  },
  {
    id: 'en_17',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '2. Daisy is _________ social media. She spends lots of time on Facebook and Instagram.',
    options: [
      { text: 'tired of', isCorrect: false },
      { text: 'bored with', isCorrect: false },
      { text: 'addicted to', isCorrect: true },
      { text: 'afraid of', isCorrect: false }
    ],
    explanation: 'Cụm từ cố định: <strong>be addicted to something</strong> = say mê, nghiện điều gì (ở đây là nghiện mạng xã hội).'
  },
  {
    id: 'en_18',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '3. _________ leisure time is free from compulsory activities, it is often referred to as “free time”.',
    options: [
      { text: 'Because', isCorrect: true },
      { text: 'Although', isCorrect: false },
      { text: 'When', isCorrect: false },
      { text: 'As long as', isCorrect: false }
    ],
    explanation: 'Liên từ chỉ nguyên nhân: <strong>Because</strong> (Bởi vì thời gian rảnh rỗi không bị ràng buộc bởi các hoạt động bắt buộc, nên nó thường được gọi là "thời gian tự do").'
  },
  {
    id: 'en_19',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '4. On YouTube you can find many videos on _________ all aspects of your English.',
    options: [
      { text: 'surfing', isCorrect: false },
      { text: 'working', isCorrect: false },
      { text: 'taking', isCorrect: false },
      { text: 'improving', isCorrect: true }
    ],
    explanation: 'Sau giới từ "on" dùng V-ing. Cụm từ phù hợp ngữ cảnh: <strong>improve one\'s English</strong> = trau dồi, cải thiện tiếng Anh.'
  },
  {
    id: 'en_20',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '5. It’s not always true that rich people donate _________ than poor people do.',
    options: [
      { text: 'generously', isCorrect: false },
      { text: 'more generously', isCorrect: true },
      { text: 'most generously', isCorrect: false },
      { text: 'more generous', isCorrect: false }
    ],
    explanation: 'Động từ "donate" là động từ thường nên bổ nghĩa bằng trạng từ. So sánh hơn của trạng từ dài là: <strong>more generously than</strong>.'
  },
  {
    id: 'en_21',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '6. _________ times have you seen this film? - I have seen it twice.',
    options: [
      { text: 'How much', isCorrect: false },
      { text: 'How often', isCorrect: false },
      { text: 'How many', isCorrect: true },
      { text: 'How long', isCorrect: false }
    ],
    explanation: '"times" ở dạng số nhiều (số lần), nên dùng từ để hỏi số lượng đếm được: <strong>How many times</strong>.'
  },
  {
    id: 'en_22',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '7. Farmers are extremely busy _________ harvest time.',
    options: [
      { text: 'on', isCorrect: false },
      { text: 'in', isCorrect: false },
      { text: 'to', isCorrect: false },
      { text: 'at', isCorrect: true }
    ],
    explanation: 'Giới từ chỉ thời điểm mùa vụ: <strong>at harvest time</strong> = vào thời điểm mùa thu hoạch.'
  },
  {
    id: 'en_23',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '8. I went with the village children to _________ the buffaloes.',
    options: [
      { text: 'bring', isCorrect: false },
      { text: 'herd', isCorrect: true },
      { text: 'play', isCorrect: false },
      { text: 'take', isCorrect: false }
    ],
    explanation: 'Cụm từ vựng đồng quê Unit 2: <strong>herd the buffaloes / cattle</strong> = chăn trâu / gia súc.'
  },
  {
    id: 'en_24',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '9. My cousin rode the bike _________ through the narrow soil paths.',
    options: [
      { text: 'clearly', isCorrect: false },
      { text: 'skillfully', isCorrect: true },
      { text: 'exactly', isCorrect: false },
      { text: 'hardly', isCorrect: false }
    ],
    explanation: 'Bổ nghĩa cho động từ "rode" (đạp xe) qua lối mòn hẹp là trạng từ <strong>skillfully</strong> = một cách khéo léo, điêu luyện.'
  },
  {
    id: 'en_25',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '10. The farm has a _________ expanse of grassland for us to play football.',
    options: [
      { text: 'vast', isCorrect: true },
      { text: 'short', isCorrect: false },
      { text: 'limited', isCorrect: false },
      { text: 'strong', isCorrect: false }
    ],
    explanation: 'Cụm từ miêu tả cánh đồng cỏ: <strong>vast expanse</strong> = dải đất mênh mông, rộng bao la.'
  },
  {
    id: 'en_26',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '11. We _________ the farmers herd cattle.',
    options: [
      { text: 'helped', isCorrect: true },
      { text: 'improved', isCorrect: false },
      { text: 'unloaded', isCorrect: false },
      { text: 'raised', isCorrect: false }
    ],
    explanation: 'Cấu trúc: <strong>help somebody (to) do something</strong> = giúp ai đó làm việc gì. Ở đây: We helped the farmers herd cattle.'
  },
  {
    id: 'en_27',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '12. Mai dances _________ than Hoa does.',
    options: [
      { text: 'beautifully', isCorrect: false },
      { text: 'more beautiful', isCorrect: false },
      { text: 'more beautifully', isCorrect: true },
      { text: 'beautiful', isCorrect: false }
    ],
    explanation: '"dance" là động từ thường -> so sánh hơn của trạng từ là: <strong>more beautifully than</strong>.'
  },
  {
    id: 'en_28',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '13. Please write _________. I can’t read it.',
    options: [
      { text: 'clearer', isCorrect: false },
      { text: 'more clear', isCorrect: false },
      { text: 'more clearly than', isCorrect: false },
      { text: 'more clearly', isCorrect: true }
    ],
    explanation: 'Yêu cầu viết rõ ràng hơn: động từ "write" đi kèm trạng từ ở dạng so sánh hơn: <strong>more clearly</strong>.'
  },
  {
    id: 'en_29',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '14. She is a smart student, _________ she is an active member of our club.',
    options: [
      { text: 'and', isCorrect: true },
      { text: 'or', isCorrect: false },
      { text: 'but', isCorrect: false },
      { text: 'for', isCorrect: false }
    ],
    explanation: 'Liên từ kết hợp: <strong>and</strong> (nối 2 mệnh đề bổ sung tính chất tích cực: vừa thông minh vừa là thành viên năng động).'
  },
  {
    id: 'en_30',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '15. My friend and I _________ a sports competition last year.',
    options: [
      { text: 'provided', isCorrect: false },
      { text: 'took part', isCorrect: false },
      { text: 'participated', isCorrect: false },
      { text: 'joined', isCorrect: true }
    ],
    explanation: '<strong>join + a competition</strong> = tham gia cuộc thi (take part và participate phải có giới từ "in": take part in / participate in).'
  },
  {
    id: 'en_31',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '16. Lan wants to join the school music club; _________, she can’t sing or play any instruments.',
    options: [
      { text: 'however', isCorrect: true },
      { text: 'and', isCorrect: false },
      { text: 'otherwise', isCorrect: false },
      { text: 'so', isCorrect: false }
    ],
    explanation: 'Trạng từ liên kết đứng sau dấu chấm phẩy và trước dấu phẩy mang ý tương phản: <strong>; however,</strong> (tuy nhiên).'
  },
  {
    id: 'en_32',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '17. She wanted to prepare for the exam; _________, she turned off her mobile phone.',
    options: [
      { text: 'however', isCorrect: false },
      { text: 'otherwise', isCorrect: false },
      { text: 'therefore', isCorrect: true },
      { text: 'although', isCorrect: false }
    ],
    explanation: 'Trạng từ liên kết chỉ kết quả logic: <strong>; therefore,</strong> = do đó, vì vậy.'
  },
  {
    id: 'en_33',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '18. The company has spent thousands of pounds _________ their computer systems.',
    options: [
      { text: 'updated', isCorrect: false },
      { text: 'updating', isCorrect: true },
      { text: 'to update', isCorrect: false },
      { text: 'update', isCorrect: false }
    ],
    explanation: 'Cấu trúc: <strong>spend time / money (on) doing something</strong> -> updating.'
  },
  {
    id: 'en_34',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '19. My brother is a real DIY _________.',
    options: [
      { text: 'enthusiasm', isCorrect: false },
      { text: 'enthusiastically', isCorrect: false },
      { text: 'enthusiastic', isCorrect: false },
      { text: 'enthusiast', isCorrect: true }
    ],
    explanation: 'Cần một danh từ chỉ người sau cụm danh từ "a real DIY": <strong>enthusiast</strong> = người say mê, đam mê đồ tự chế.'
  },
  {
    id: 'en_35',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '20. Would you like _________ to the cinema this Sunday?',
    options: [
      { text: 'to go', isCorrect: true },
      { text: 'going', isCorrect: false },
      { text: 'go', isCorrect: false },
      { text: 'goes', isCorrect: false }
    ],
    explanation: 'Cấu trúc mời lịch sự: <strong>Would you like + to V</strong> -> to go.'
  },
  {
    id: 'en_36',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '21. Hollum is one of the ancient villages on the island of Ameland, _________ Netherlands.',
    options: [
      { text: 'a', isCorrect: false },
      { text: 'an', isCorrect: false },
      { text: 'the', isCorrect: true },
      { text: '∅', isCorrect: false }
    ],
    explanation: 'Tên quốc gia ở dạng số nhiều luôn có mạo từ xác định: <strong>the Netherlands</strong> (Hà Lan).'
  },
  {
    id: 'en_37',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '22. I _________ the school website and found pictures of school activities.',
    options: [
      { text: 'messaged', isCorrect: false },
      { text: 'posted', isCorrect: false },
      { text: 'uploaded', isCorrect: false },
      { text: 'browsed', isCorrect: true }
    ],
    explanation: '<strong>browse a website</strong> = lướt xem trang web.'
  },
  {
    id: 'en_38',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '23. Willy _________ playing football and doing exercise, so he looks sporty.',
    options: [
      { text: 'dislikes', isCorrect: false },
      { text: 'hates', isCorrect: false },
      { text: 'fancies', isCorrect: true },
      { text: 'detests', isCorrect: false }
    ],
    explanation: 'Dựa vào vế sau "so he looks sporty" (trông cậu ấy rất thể thao) -> Willy thích chơi thể thao: <strong>fancies + V-ing</strong>.'
  },
  {
    id: 'en_39',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '24. - John: “What a beautiful kite you have, Mai!” - Mai: “_________”',
    options: [
      { text: 'It’s a kite.', isCorrect: false },
      { text: 'Thank you, John.', isCorrect: true },
      { text: 'Never mind.', isCorrect: false },
      { text: 'I’d love to.', isCorrect: false }
    ],
    explanation: 'Đáp lại một lời khen ngợi (compliment), phép lịch sự thông dụng nhất là nói lời cảm ơn: <strong>Thank you, John.</strong>'
  },
  {
    id: 'en_40',
    exKey: 'ex3',
    exTitle: 'Ex 3: Từ vựng & Ngữ pháp',
    questionText: '25. - Hannah: “Can you tell me how to go to the music club, please?” - Mary: “_________”',
    options: [
      { text: 'Certainly. Go past this block, then turn left. It’s on your right.', isCorrect: true },
      { text: 'The music club is full of students who love music and art.', isCorrect: false },
      { text: 'Remember not to eat or drink during music lessons.', isCorrect: false },
      { text: 'Keep going straight ahead, and you will see the canteen on your right.', isCorrect: false }
    ],
    explanation: 'Hỏi đường chỉ tới câu lạc bộ âm nhạc -> Đáp lại: <strong>Certainly. Go past this block, then turn left. It’s on your right.</strong>'
  },

  // ==========================================
  // EXERCISE 4: ĐỌC ĐIỀN TỪ (10 CÂU: ĐOẠN 1 + ĐOẠN 2)
  // ==========================================
  {
    id: 'en_41',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 1)',
    questionText: 'Đoạn 1: The country and the city have both advantages and (1) _________.',
    options: [
      { text: 'benefits', isCorrect: false },
      { text: 'enjoyment', isCorrect: false },
      { text: 'happiness', isCorrect: false },
      { text: 'disadvantages', isCorrect: true }
    ],
    explanation: 'Cặp từ tương phản kinh điển: <strong>advantages and disadvantages</strong> = những mặt thuận lợi và khó khăn/bất lợi.'
  },
  {
    id: 'en_42',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 1)',
    questionText: 'Đoạn 1: People in the country enjoy beautiful surroundings, (2) _________ and quietness...',
    options: [
      { text: 'peace-loving', isCorrect: false },
      { text: 'peace', isCorrect: true },
      { text: 'peaceful', isCorrect: false },
      { text: 'peacefully', isCorrect: false }
    ],
    explanation: 'Cấu trúc song hành với danh từ "quietness": cần một danh từ <strong>peace</strong> (sự thanh bình).'
  },
  {
    id: 'en_43',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 1)',
    questionText: 'Đoạn 1: This can be a serious problem if they become ill or need (3) _________ their children to school...',
    options: [
      { text: 'to take', isCorrect: true },
      { text: 'taking', isCorrect: false },
      { text: 'took', isCorrect: false },
      { text: 'take', isCorrect: false }
    ],
    explanation: 'Cấu trúc: <strong>need + to V</strong> = cần làm gì -> need to take.'
  },
  {
    id: 'en_44',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 1)',
    questionText: 'Đoạn 1: Cities offer many services that may not be available in the countryside, (4) _________ they also have disadvantages.',
    options: [
      { text: 'although', isCorrect: false },
      { text: 'because', isCorrect: false },
      { text: 'but', isCorrect: true },
      { text: 'so', isCorrect: false }
    ],
    explanation: 'Liên từ nối hai mệnh đề độc lập mang nghĩa tương phản: <strong>, but they also have disadvantages</strong> (nhưng chúng cũng có nhược điểm).'
  },
  {
    id: 'en_45',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 1)',
    questionText: 'Đoạn 1: City life is usually fast-paced, so people may have (5) _________ time to get to know their neighbors and make friends.',
    options: [
      { text: 'few', isCorrect: false },
      { text: 'a lot', isCorrect: false },
      { text: 'many', isCorrect: false },
      { text: 'little', isCorrect: true }
    ],
    explanation: '"time" là danh từ không đếm được -> dùng <strong>little time</strong> = hầu như rất ít thời gian để giao lưu bạn bè.'
  },
  {
    id: 'en_46',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 2)',
    questionText: 'Đoạn 2: Many people also take part (1) _________ voluntary work, especially for charities.',
    options: [
      { text: 'on', isCorrect: false },
      { text: 'in', isCorrect: true },
      { text: 'at', isCorrect: false },
      { text: 'for', isCorrect: false }
    ],
    explanation: 'Cụm động từ cố định: <strong>take part in</strong> = tham gia vào.'
  },
  {
    id: 'en_47',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 2)',
    questionText: 'Đoạn 2: People spend a lot of their free time at home, where (2) _________ popular leisure activity is watching television.',
    options: [
      { text: 'more than', isCorrect: false },
      { text: 'most', isCorrect: false },
      { text: 'more', isCorrect: false },
      { text: 'the most', isCorrect: true }
    ],
    explanation: 'So sánh nhất của tính từ dài: <strong>the most popular leisure activity</strong> = hoạt động thư giãn giải trí phổ biến nhất.'
  },
  {
    id: 'en_48',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 2)',
    questionText: 'Đoạn 2: People often (3) _________ TV programs so that they can watch them later.',
    options: [
      { text: 'record', isCorrect: true },
      { text: 'scan', isCorrect: false },
      { text: 'print', isCorrect: false },
      { text: 'power', isCorrect: false }
    ],
    explanation: 'Động từ phù hợp ngữ cảnh xem sau: <strong>record TV programs</strong> = ghi hình / thu lại các chương trình truyền hình.'
  },
  {
    id: 'en_49',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 2)',
    questionText: 'Đoạn 2: The British (4) _________ a lot of time reading newspapers and magazines.',
    options: [
      { text: 'spend', isCorrect: true },
      { text: 'spends', isCorrect: false },
      { text: 'are spending', isCorrect: false },
      { text: 'will spend', isCorrect: false }
    ],
    explanation: '"The British" là danh từ tập hợp chỉ người dân Anh (số nhiều) -> động từ chia nguyên thể ở hiện tại đơn: <strong>spend</strong>.'
  },
  {
    id: 'en_50',
    exKey: 'ex4',
    exTitle: 'Ex 4: Đọc điền từ (Đoạn 2)',
    questionText: 'Đoạn 2: Many people also have (5) _________ to look after, and walking the dog every day is part of their daily routine.',
    options: [
      { text: 'worms', isCorrect: false },
      { text: 'bugs', isCorrect: false },
      { text: 'pets', isCorrect: true },
      { text: 'insects', isCorrect: false }
    ],
    explanation: 'Câu sau có nhắc tới "walking the dog" (dắt chó đi dạo) -> danh từ cần điền là <strong>pets</strong> (thú cưng).'
  },

  // ==========================================
  // EXERCISE 5: ĐỌC HIỂU (5 CÂU)
  // ==========================================
  {
    id: 'en_51',
    exKey: 'ex5',
    exTitle: 'Ex 5: Đọc hiểu văn bản',
    questionText: '1. The countryside of Britain is NOT famous for its _________.',
    options: [
      { text: 'farmland', isCorrect: true },
      { text: 'moorland', isCorrect: false },
      { text: 'bare mountains', isCorrect: false },
      { text: 'lakes, rivers, and woods', isCorrect: false }
    ],
    explanation: 'Dẫn chứng câu đầu: "the countryside of Britain is well known for many contrasts: its bare mountains and moorland, its lakes, rivers and woods, and its long, often wild coastline." Do đó farmland không nằm trong danh sách sự tương phản nổi tiếng này.'
  },
  {
    id: 'en_52',
    exKey: 'ex5',
    exTitle: 'Ex 5: Đọc hiểu văn bản',
    questionText: '2. Individual people or independent companies own _________.',
    options: [
      { text: 'some of the farmland in Britain', isCorrect: false },
      { text: 'most farmland in Britain', isCorrect: true },
      { text: 'footpaths across the farmland', isCorrect: false },
      { text: 'a network of public footpaths', isCorrect: false }
    ],
    explanation: 'Dẫn chứng trong bài: "Most farmland is now owned by individual people or independent companies."'
  },
  {
    id: 'en_53',
    exKey: 'ex5',
    exTitle: 'Ex 5: Đọc hiểu văn bản',
    questionText: '3. Many British people think the countryside goes with _________.',
    options: [
      { text: 'work in towns', isCorrect: false },
      { text: 'work on farms', isCorrect: false },
      { text: 'peace and relaxation', isCorrect: true },
      { text: 'public farmland', isCorrect: false }
    ],
    explanation: 'Dẫn chứng: "Many British people enjoy the peace and relaxation of life in the countryside..."'
  },
  {
    id: 'en_54',
    exKey: 'ex5',
    exTitle: 'Ex 5: Đọc hiểu văn bản',
    questionText: '4. The word "commute" in the passage is CLOSEST in meaning to _________.',
    options: [
      { text: 'go on foot', isCorrect: false },
      { text: 'travel a long distance to get to work', isCorrect: true },
      { text: 'go by bicycle', isCorrect: false },
      { text: 'travel or move around an area', isCorrect: false }
    ],
    explanation: '"commute to work" nghĩa là đi lại đều đặn hàng ngày một quãng đường xa giữa nơi ở và chỗ làm việc.'
  },
  {
    id: 'en_55',
    exKey: 'ex5',
    exTitle: 'Ex 5: Đọc hiểu văn bản',
    questionText: '5. What does the word "they" in the passage refer to?',
    options: [
      { text: 'Those who commute to work in towns', isCorrect: false },
      { text: 'Those who go to the countryside for a picnic', isCorrect: false },
      { text: 'Those who go to fruit farms in summer', isCorrect: false },
      { text: 'Those who dream of living in the countryside', isCorrect: true }
    ],
    explanation: 'Dẫn chứng câu cuối: "Many others wish to live in the countryside so that <strong>they</strong> would have a better and healthier lifestyle." Từ "they" thay thế cho "Many others (who wish to live in the countryside)".'
  },

  // ==========================================
  // EXERCISE 6: BIỂN BÁO & THÔNG BÁO (5 CÂU CÓ HÌNH ẢNH MINH HỌA)
  // ==========================================
  {
    id: 'en_56',
    exKey: 'ex6',
    exTitle: 'Ex 6: Biển báo & Thông báo (Có ảnh)',
    questionText: '1. What does the notice say?',
    visualComponent: `
      <div class="flex flex-col items-center justify-center p-3 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs max-w-md mx-auto">
        <img src="/assets/eng_notice_1.png" alt="Notice 1 - Email from Adam to Linda" class="max-h-56 object-contain rounded-xl shadow-sm border border-slate-100" onerror="this.onerror=null; this.src='assets/eng_notice_1.png';" />
        <span class="text-[11px] text-slate-500 font-medium mt-2 italic flex items-center gap-1">
          <i data-lucide="image" class="w-3.5 h-3.5 text-indigo-500"></i> Thông báo email: Adam mượn sách Địa lí từ Linda
        </span>
      </div>
    `,
    options: [
      { text: 'Linda wants to study in the fitness center.', isCorrect: false },
      { text: 'Adam requests to take Linda\'s book.', isCorrect: false },
      { text: 'On Tuesday, Adam has a geography exam.', isCorrect: true },
      { text: 'The book belongs to Linda.', isCorrect: false }
    ],
    explanation: 'Nội dung thông báo (email): Adam nhắn Linda <em>"Big test on Tuesday!"</em> (Có bài thi lớn vào thứ Ba). Do đó đáp án chuẩn là: <strong>On Tuesday, Adam has a geography exam.</strong>'
  },
  {
    id: 'en_57',
    exKey: 'ex6',
    exTitle: 'Ex 6: Biển báo & Thông báo (Có ảnh)',
    questionText: '2. What does the sign say?',
    visualComponent: `
      <div class="flex flex-col items-center justify-center p-3 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs max-w-xs mx-auto">
        <img src="/assets/eng_sign_2.png" alt="Sign 2 - NO! Pushing" class="max-h-52 object-contain rounded-xl shadow-sm border border-slate-100" onerror="this.onerror=null; this.src='assets/eng_sign_2.png';" />
        <span class="text-[11px] text-slate-500 font-medium mt-2 italic flex items-center gap-1">
          <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-amber-500"></i> Biển cảnh báo hồ nước: NO! Pushing
        </span>
      </div>
    `,
    options: [
      { text: 'You must not run near the water.', isCorrect: false },
      { text: 'You must not push other people.', isCorrect: true },
      { text: 'You must not swim in this area.', isCorrect: false },
      { text: 'You must not climb the stairs.', isCorrect: false }
    ],
    explanation: 'Biển báo có hình hai người đang xô đẩy nhau bên mép nước kèm chữ <strong>"NO! Pushing"</strong> -> Cấm xô đẩy người khác: <strong>You must not push other people.</strong>'
  },
  {
    id: 'en_58',
    exKey: 'ex6',
    exTitle: 'Ex 6: Biển báo & Thông báo (Có ảnh)',
    questionText: '3. What does the notice say?',
    visualComponent: `
      <div class="flex flex-col items-center justify-center p-3 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs max-w-xs mx-auto">
        <img src="/assets/eng_notice_3.png" alt="Notice 3 - RING BELL FOR SERVICE" class="max-h-52 object-contain rounded-xl shadow-sm border border-slate-100" onerror="this.onerror=null; this.src='assets/eng_notice_3.png';" />
        <span class="text-[11px] text-slate-500 font-medium mt-2 italic flex items-center gap-1">
          <i data-lucide="bell" class="w-3.5 h-3.5 text-blue-500"></i> Thông báo quầy dịch vụ: RING BELL FOR SERVICE
        </span>
      </div>
    `,
    options: [
      { text: 'You have to ring the bell to ask for help.', isCorrect: true },
      { text: 'The bell will ring when you come in.', isCorrect: false },
      { text: 'The bell will ring when you go out.', isCorrect: false },
      { text: 'The staff will ring the bell for you.', isCorrect: false }
    ],
    explanation: 'Bảng thông báo ghi <strong>"NOTICE - RING BELL FOR SERVICE"</strong> (Rung chuông nếu cần phục vụ). Do đó người đến cần rung chuông để yêu cầu hỗ trợ: <strong>You have to ring the bell to ask for help.</strong>'
  },
  {
    id: 'en_59',
    exKey: 'ex6',
    exTitle: 'Ex 6: Biển báo & Thông báo (Có ảnh)',
    questionText: '4. What does the notice say?',
    visualComponent: `
      <div class="flex flex-col items-center justify-center p-3 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs max-w-md mx-auto">
        <img src="/assets/eng_notice_4.png" alt="Notice 4 - NEW STUDENTS" class="max-h-48 object-contain rounded-xl shadow-sm border border-slate-100" onerror="this.onerror=null; this.src='assets/eng_notice_4.png';" />
        <span class="text-[11px] text-slate-500 font-medium mt-2 italic flex items-center gap-1">
          <i data-lucide="info" class="w-3.5 h-3.5 text-indigo-500"></i> Bảng tin: Hướng dẫn học sinh mới nhận sách
        </span>
      </div>
    `,
    options: [
      { text: 'Wait at Reception until the teacher arrives.', isCorrect: false },
      { text: 'Collect their coursebooks from their teacher.', isCorrect: false },
      { text: 'See their teacher before going to Reception.', isCorrect: false },
      { text: 'Collect their coursebooks from Reception.', isCorrect: true }
    ],
    explanation: 'Thông báo ghi rõ: <em>"NEW STUDENTS - Go to Reception to collect your coursebooks before seeing your teacher"</em> -> Học sinh mới phải đến quầy tiếp tân nhận sách: <strong>Collect their coursebooks from Reception.</strong>'
  },
  {
    id: 'en_60',
    exKey: 'ex6',
    exTitle: 'Ex 6: Biển báo & Thông báo (Có ảnh)',
    questionText: '5. What does the sign say?',
    visualComponent: `
      <div class="flex flex-col items-center justify-center p-3 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs max-w-xs mx-auto">
        <img src="/assets/eng_sign_5.png" alt="Sign 5 - No Horn" class="max-h-52 object-contain rounded-xl shadow-sm border border-slate-100" onerror="this.onerror=null; this.src='assets/eng_sign_5.png';" />
        <span class="text-[11px] text-slate-500 font-medium mt-2 italic flex items-center gap-1">
          <i data-lucide="volume-x" class="w-3.5 h-3.5 text-rose-500"></i> Biển giao thông: Cấm bóp còi
        </span>
      </div>
    `,
    options: [
      { text: 'You must not play music here.', isCorrect: false },
      { text: 'You must not sound your horn here.', isCorrect: true },
      { text: 'You must not shout here.', isCorrect: false },
      { text: 'You must not use your camera here.', isCorrect: false }
    ],
    explanation: 'Biển báo giao thông hình chiếc còi bị gạch chéo đỏ là biển cấm bóp còi: <strong>You must not sound your horn here.</strong>'
  },

  // ==========================================
  // EXERCISE 7: ĐIỀN CÂU VÀO ĐOẠN VĂN (4 CÂU)
  // ==========================================
  {
    id: 'en_61',
    exKey: 'ex7',
    exTitle: 'Ex 7: Điền câu vào đoạn văn',
    questionText: `
      <div class="space-y-2">
        <p class="text-xs text-slate-500 font-normal italic">Chọn phương án đúng nhất điền vào vị trí <strong>(1)</strong> trong đoạn văn sau:</p>
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700 font-normal">
          Life in the countryside is often peaceful and quiet. Unlike cities, the pace of life is slower, and <strong>(1) _________</strong>. In addition, people living in rural areas are surrounded by nature, which helps reduce stress...
        </div>
      </div>
    `,
    options: [
      { text: 'Despite these drawbacks', isCorrect: false },
      { text: 'it is easier to find fresh, locally-grown food', isCorrect: true },
      { text: 'Another difficulty is transportation', isCorrect: false },
      { text: 'While the countryside offers many benefits', isCorrect: false }
    ],
    explanation: 'Vị trí (1) đứng sau liên từ <em>"and"</em> nối tiếp các ưu điểm của nông thôn (nhịp sống chậm hơn và dễ tìm thực phẩm tươi ngon tự trồng tại địa phương): <strong>it is easier to find fresh, locally-grown food</strong>.'
  },
  {
    id: 'en_62',
    exKey: 'ex7',
    exTitle: 'Ex 7: Điền câu vào đoạn văn',
    questionText: `
      <div class="space-y-2">
        <p class="text-xs text-slate-500 font-normal italic">Chọn phương án đúng nhất điền vào vị trí <strong>(2)</strong> trong đoạn văn sau:</p>
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700 font-normal">
          ...In addition, people living in rural areas are surrounded by nature, which helps reduce stress. It is also safer since the crime rate is much lower. <strong>(2) _________</strong>, it also has its challenges. Access to healthcare, education, and job opportunities may be limited compared to urban areas...
        </div>
      </div>
    `,
    options: [
      { text: 'Despite these drawbacks', isCorrect: false },
      { text: 'it is easier to find fresh, locally-grown food', isCorrect: false },
      { text: 'Another difficulty is transportation', isCorrect: false },
      { text: 'While the countryside offers many benefits', isCorrect: true }
    ],
    explanation: 'Vị trí (2) mở đầu mệnh đề chuyển tiếp từ những ưu điểm sang thách thức: <em>"...it also has its challenges"</em> -> chọn <strong>While the countryside offers many benefits</strong> (Trong khi nông thôn mang lại nhiều lợi ích, nó cũng có những thách thức).'
  },
  {
    id: 'en_63',
    exKey: 'ex7',
    exTitle: 'Ex 7: Điền câu vào đoạn văn',
    questionText: `
      <div class="space-y-2">
        <p class="text-xs text-slate-500 font-normal italic">Chọn phương án đúng nhất điền vào vị trí <strong>(3)</strong> trong đoạn văn sau:</p>
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700 font-normal">
          ...Access to healthcare, education, and job opportunities may be limited compared to urban areas. <strong>(3) _________</strong>. Public transport is often lacking, making it difficult for people to commute or access services that are readily available in cities...
        </div>
      </div>
    `,
    options: [
      { text: 'Despite these drawbacks', isCorrect: false },
      { text: 'it is easier to find fresh, locally-grown food', isCorrect: false },
      { text: 'Another difficulty is transportation', isCorrect: true },
      { text: 'While the countryside offers many benefits', isCorrect: false }
    ],
    explanation: 'Vị trí (3) là câu chủ đề cho phần giải thích tiếp theo <em>"Public transport is often lacking..."</em> -> chọn <strong>Another difficulty is transportation</strong> (Một khó khăn khác là vấn đề đi lại / giao thông).'
  },
  {
    id: 'en_64',
    exKey: 'ex7',
    exTitle: 'Ex 7: Điền câu vào đoạn văn',
    questionText: `
      <div class="space-y-2">
        <p class="text-xs text-slate-500 font-normal italic">Chọn phương án đúng nhất điền vào vị trí <strong>(4)</strong> trong đoạn văn sau:</p>
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm leading-relaxed text-slate-700 font-normal">
          ...making it difficult for people to commute or access services that are readily available in cities. <strong>(4) _________</strong>, the countryside provides a strong sense of community, which appeals to many people...
        </div>
      </div>
    `,
    options: [
      { text: 'Despite these drawbacks', isCorrect: true },
      { text: 'it is easier to find fresh, locally-grown food', isCorrect: false },
      { text: 'Another difficulty is transportation', isCorrect: false },
      { text: 'While the countryside offers many benefits', isCorrect: false }
    ],
    explanation: 'Sau khi kể ra các hạn chế (drawbacks), vị trí (4) chuyển ý sang điểm gắn kết cộng đồng tích cực -> chọn <strong>Despite these drawbacks</strong> (Bất chấp những hạn chế này).'
  },

  // ==========================================
  // EXERCISE 8: SẮP XẾP ĐOẠN VĂN LOGIC (4 CÂU)
  // ==========================================
  {
    id: 'en_65',
    exKey: 'ex8',
    exTitle: 'Ex 8: Sắp xếp đoạn văn logic',
    questionText: `
      <div class="space-y-2">
        <span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">1a. Sắp xếp thứ tự các câu (a-c)</span>
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-normal text-slate-800 leading-relaxed space-y-1.5">
          <p class="font-medium italic text-slate-600">"After a busy week of work, I always look forward to my leisure time. It’s the perfect opportunity to unwind. _________"</p>
          <div class="border-t border-slate-200 pt-1.5 space-y-1 text-slate-700 text-xs">
            <p><strong>a.</strong> No matter how I choose to spend my free time, these moments help me keep a balance between work and relaxation.</p>
            <p><strong>b.</strong> On some weekends, I love gathering with friends for a movie night or taking a short trip out of the city.</p>
            <p><strong>c.</strong> On other occasions, I enjoy reading quietly in a park, letting the peaceful surroundings help me relax and clear my mind.</p>
          </div>
        </div>
        <p class="text-xs font-semibold text-slate-800 pt-1">Thứ tự sắp xếp đúng để hoàn thành đoạn văn là:</p>
      </div>
    `,
    options: [
      { text: 'b – c – a', isCorrect: true },
      { text: 'c – a – b', isCorrect: false },
      { text: 'c – b – a', isCorrect: false },
      { text: 'b – a – c', isCorrect: false }
    ],
    explanation: 'Trật tự phát triển logic: <strong>b</strong> ("On some weekends...") nêu hoạt động đầu tiên -> <strong>c</strong> ("On other occasions...") nêu hoạt động tiếp theo -> <strong>a</strong> ("No matter how I choose...") đúc kết ý nghĩa cân bằng cuộc sống.'
  },
  {
    id: 'en_66',
    exKey: 'ex8',
    exTitle: 'Ex 8: Sắp xếp đoạn văn logic',
    questionText: `
      <div class="space-y-2">
        <span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">1b. Chọn câu kết thúc phù hợp nhất</span>
        <p class="text-xs sm:text-sm font-semibold text-slate-900">Choose the sentence that can end the text (in Question 1a) most appropriately:</p>
      </div>
    `,
    options: [
      { text: 'By the time the weekend is over, I feel recharged and ready for another week.', isCorrect: true },
      { text: 'On Monday, I feel overwhelmed and wish for the weekend to come fast.', isCorrect: false },
      { text: 'By the time the weekend is over, I can’t wait to work again.', isCorrect: false },
      { text: 'Nevertheless, leisure activities are more of a distraction than a benefit.', isCorrect: false }
    ],
    explanation: 'Câu kết đoạn văn phù hợp nhất với tinh thần thư giãn tái tạo năng lượng của cả bài là phương án A: <strong>By the time the weekend is over, I feel recharged and ready for another week.</strong>'
  },
  {
    id: 'en_67',
    exKey: 'ex8',
    exTitle: 'Ex 8: Sắp xếp đoạn văn logic',
    questionText: `
      <div class="space-y-2">
        <span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">2a. Sắp xếp thứ tự các câu (a-c)</span>
        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-normal text-slate-800 leading-relaxed space-y-1.5">
          <p class="font-medium italic text-slate-600">"Our school held a special art exhibition last week. Everyone was keen to see the artworks. _________"</p>
          <div class="border-t border-slate-200 pt-1.5 space-y-1 text-slate-700 text-xs">
            <p><strong>a.</strong> The students created amazing pieces, and we were proud of their creativity.</p>
            <p><strong>b.</strong> The exhibition was a great success, and many parents came to see the art.</p>
            <p><strong>c.</strong> Each class contributed their best artworks, and they were displayed in the school hall.</p>
          </div>
        </div>
        <p class="text-xs font-semibold text-slate-800 pt-1">Thứ tự sắp xếp đúng để hoàn thành đoạn văn là:</p>
      </div>
    `,
    options: [
      { text: 'c – b – a', isCorrect: false },
      { text: 'c – a – b', isCorrect: true },
      { text: 'b – c – a', isCorrect: false },
      { text: 'a – c – b', isCorrect: false }
    ],
    explanation: 'Trật tự phát triển sự việc theo mạch thời gian: <strong>c</strong> (mỗi lớp đóng góp tác phẩm trưng bày ở hội trường) -> <strong>a</strong> (học sinh tạo nên các tác phẩm tuyệt vời và đầy tự hào) -> <strong>b</strong> (triển lãm thành công lớn và đông đảo phụ huynh đến xem).'
  },
  {
    id: 'en_68',
    exKey: 'ex8',
    exTitle: 'Ex 8: Sắp xếp đoạn văn logic',
    questionText: `
      <div class="space-y-2">
        <span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">2b. Chọn câu kết thúc phù hợp nhất</span>
        <p class="text-xs sm:text-sm font-semibold text-slate-900">Choose the sentence that can end the text (in Question 2a) most appropriately:</p>
      </div>
    `,
    options: [
      { text: 'The art exhibition was canceled due to a scheduling conflict.', isCorrect: false },
      { text: 'The students were excited to receive awards for their work.', isCorrect: false },
      { text: 'We all enjoyed seeing the artworks and had a wonderful time at the exhibition.', isCorrect: true },
      { text: 'The hall was decorated with colorful banners and balloons.', isCorrect: false }
    ],
    explanation: 'Câu kết đoạn đúc kết cảm xúc chung tuyệt vời của mọi người: <strong>We all enjoyed seeing the artworks and had a wonderful time at the exhibition.</strong>'
  },

  // ==========================================
  // EXERCISE 9: VIẾT LẠI CÂU (10 CÂU TỰ LUẬN)
  // ==========================================
  {
    id: 'en_69',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '1. My sister and I fancy reading novels when we have free time. (Viết lại dùng từ gợi ý trong ngoặc: <strong>adore</strong>)',
    options: [
      { text: 'My sister and I adore reading novels when we have free time.', isCorrect: true },
      { text: 'My sister and I adore to read novels when we have free time.', isCorrect: false },
      { text: 'My sister and I are adore reading novels when we have free time.', isCorrect: false },
      { text: 'My sister and I adore read novels when we have free time.', isCorrect: false }
    ],
    explanation: 'Cấu trúc đồng nghĩa: <strong>fancy + V-ing = adore + V-ing</strong> (yêu thích làm gì).'
  },
  {
    id: 'en_70',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '2. She is good at playing the guitar. (Viết lại dùng từ gợi ý trong ngoặc: <strong>well</strong>)',
    options: [
      { text: 'She plays the guitar well.', isCorrect: true },
      { text: 'She plays the guitar good.', isCorrect: false },
      { text: 'She is play the guitar well.', isCorrect: false },
      { text: 'She plays guitar well.', isCorrect: false }
    ],
    explanation: 'Cấu trúc biến đổi tính từ thành trạng từ: <strong>be good at V-ing = play something well</strong>.'
  },
  {
    id: 'en_71',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '3. Life in the countryside isn’t as stressful as life in the city. (Viết lại dùng từ: <strong>more</strong>)',
    options: [
      { text: 'Life in the city is more stressful than life in the countryside.', isCorrect: true },
      { text: 'Life in the countryside is more stressful than life in the city.', isCorrect: false },
      { text: 'Life in the city is more stress than life in the countryside.', isCorrect: false },
      { text: 'Life in the city isn’t more stressful than life in the countryside.', isCorrect: false }
    ],
    explanation: 'So sánh không bằng chuyển sang so sánh hơn: A isn\'t as... as B -> <strong>B is more stressful than A</strong>.'
  },
  {
    id: 'en_72',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '4. They like watching movies on weekends. (Viết lại dùng từ: <strong>of</strong>)',
    options: [
      { text: 'They are fond of watching movies on weekends.', isCorrect: true },
      { text: 'They are keen of watching movies on weekends.', isCorrect: false },
      { text: 'They like of watching movies on weekends.', isCorrect: false },
      { text: 'They are interested of watching movies on weekends.', isCorrect: false }
    ],
    explanation: 'Cụm từ chỉ sở thích đi với giới từ "of": <strong>be fond of + V-ing</strong> = thích làm gì.'
  },
  {
    id: 'en_73',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '5. Her teammate didn’t respond to criticism as constructively as she did. (Viết lại dùng từ: <strong>than</strong>)',
    options: [
      { text: 'She responded to criticism more constructively than her teammate did.', isCorrect: true },
      { text: 'She responded to criticism constructively than her teammate did.', isCorrect: false },
      { text: 'Her teammate responded to criticism more constructively than she did.', isCorrect: false },
      { text: 'She responded to criticism as constructively than her teammate did.', isCorrect: false }
    ],
    explanation: 'Chuyển so sánh không bằng dạng phủ định sang so sánh hơn của trạng từ dài: <strong>more constructively than</strong>.'
  },
  {
    id: 'en_74',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '6. I can’t cook as well as my mother. (Viết lại dùng từ gợi ý: <strong>better</strong>)',
    options: [
      { text: 'My mother can cook better than me.', isCorrect: true },
      { text: 'My mother cooks gooder than me.', isCorrect: false },
      { text: 'I can cook better than my mother.', isCorrect: false },
      { text: 'My mother can’t cook better than me.', isCorrect: false }
    ],
    explanation: 'So sánh hơn của "well" là "better": Tôi không nấu ngon bằng mẹ -> <strong>Mẹ tôi nấu ăn ngon hơn tôi</strong> (My mother can cook better than me / than I can).'
  },
  {
    id: 'en_75',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '7. We are keen on trying new foods. (Viết lại dùng từ gợi ý: <strong>adore</strong>)',
    options: [
      { text: 'We adore trying new foods.', isCorrect: true },
      { text: 'We adore to try new foods.', isCorrect: false },
      { text: 'We are adore trying new foods.', isCorrect: false },
      { text: 'We adore try new foods.', isCorrect: false }
    ],
    explanation: 'Cấu trúc: <strong>be keen on + V-ing = adore + V-ing</strong>.'
  },
  {
    id: 'en_76',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '8. She would rather go shopping than watch TV. (Viết lại dùng từ gợi ý: <strong>prefers</strong>)',
    options: [
      { text: 'She prefers going shopping to watching TV.', isCorrect: true },
      { text: 'She prefers go shopping than watch TV.', isCorrect: false },
      { text: 'She prefers going shopping than watching TV.', isCorrect: false },
      { text: 'She prefers to go shopping to watching TV.', isCorrect: false }
    ],
    explanation: 'Cấu trúc tương đương: <strong>would rather V1 than V2 = prefer V1-ing to V2-ing</strong>.'
  },
  {
    id: 'en_77',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '9. They go to school by bike every day. (Viết lại dùng động từ: <strong>cycle</strong>)',
    options: [
      { text: 'They cycle to school every day.', isCorrect: true },
      { text: 'They are cycle to school every day.', isCorrect: false },
      { text: 'They cycle school by bike every day.', isCorrect: false },
      { text: 'They go to cycle school every day.', isCorrect: false }
    ],
    explanation: 'Cấu trúc tương đương: <strong>go to [place] by bike = cycle to [place]</strong>.'
  },
  {
    id: 'en_78',
    exKey: 'ex9',
    exTitle: 'Ex 9: Viết lại câu',
    questionText: '10. I can’t watch Mr. Bean because I have a lot of homework tonight. (Viết lại dùng liên từ: <strong>so</strong>)',
    options: [
      { text: 'I have a lot of homework tonight, so I can’t watch Mr. Bean.', isCorrect: true },
      { text: 'I can’t watch Mr. Bean, so I have a lot of homework tonight.', isCorrect: false },
      { text: 'Because I have homework tonight, so I can’t watch Mr. Bean.', isCorrect: false },
      { text: 'I have a lot of homework tonight so that I can’t watch Mr. Bean.', isCorrect: false }
    ],
    explanation: 'Chuyển mệnh đề chỉ nguyên nhân (because) sang mệnh đề chỉ kết quả với <strong>, so</strong>.'
  },

  // ==========================================
  // EXERCISE 10: VIẾT HOÀN CHỈNH CÂU TỪ TỪ GỢI Ý (5 CÂU)
  // ==========================================
  {
    id: 'en_79',
    exKey: 'ex10',
    exTitle: 'Ex 10: Hoàn chỉnh câu',
    questionText: '1. Mary/ crazy/ do puzzles/ because/ she/ think/ it/ good/ her brain.',
    options: [
      { text: 'Mary is crazy about doing puzzles because she thinks it is good for her brain.', isCorrect: true },
      { text: 'Mary crazy doing puzzles because she thinks it is good to her brain.', isCorrect: false },
      { text: 'Mary is crazy of doing puzzles because she thinks it is good for her brain.', isCorrect: false },
      { text: 'Mary is crazy about do puzzles because she think it is good for her brain.', isCorrect: false }
    ],
    explanation: 'Cấu trúc: <strong>be crazy about + V-ing</strong> (say mê), thì hiện tại đơn chủ ngữ số ít (Mary is..., she thinks...), và cụm <strong>good for...</strong> (tốt cho cái gì).'
  },
  {
    id: 'en_80',
    exKey: 'ex10',
    exTitle: 'Ex 10: Hoàn chỉnh câu',
    questionText: '2. Young people/ prefer/ message/ friends/ meet/ face-to-face.',
    options: [
      { text: 'Young people prefer messaging friends to meeting them face-to-face.', isCorrect: true },
      { text: 'Young people prefer to message friends than meeting them face-to-face.', isCorrect: false },
      { text: 'Young people prefer message friends to meet face-to-face.', isCorrect: false },
      { text: 'Young people prefers messaging friends to meeting face-to-face.', isCorrect: false }
    ],
    explanation: 'Cấu trúc: <strong>prefer V-ing to V-ing</strong> (thích làm gì hơn làm gì). Chủ ngữ số nhiều "Young people" động từ giữ nguyên mẫu.'
  },
  {
    id: 'en_81',
    exKey: 'ex10',
    exTitle: 'Ex 10: Hoàn chỉnh câu',
    questionText: '3. She/ sing/ beautiful/ her sister.',
    options: [
      { text: 'She sings more beautifully than her sister.', isCorrect: true },
      { text: 'She sings more beautiful than her sister.', isCorrect: false },
      { text: 'She is sing more beautifully than her sister.', isCorrect: false },
      { text: 'She sings beautifully than her sister.', isCorrect: false }
    ],
    explanation: 'Động từ thường "sings" bổ nghĩa bằng trạng từ ở dạng so sánh hơn: <strong>more beautifully than</strong>.'
  },
  {
    id: 'en_82',
    exKey: 'ex10',
    exTitle: 'Ex 10: Hoàn chỉnh câu',
    questionText: '4. Mai/ speak/ English/ good/ her friends.',
    options: [
      { text: 'Mai speaks English better than her friends.', isCorrect: true },
      { text: 'Mai speaks English more good than her friends.', isCorrect: false },
      { text: 'Mai speak English better than her friends.', isCorrect: false },
      { text: 'Mai is speak English well than her friends.', isCorrect: false }
    ],
    explanation: 'Động từ thường "speaks", trạng từ bất quy tắc của "good" là "well", dạng so sánh hơn là <strong>better than</strong>.'
  },
  {
    id: 'en_83',
    exKey: 'ex10',
    exTitle: 'Ex 10: Hoàn chỉnh câu',
    questionText: '5. They/ help/ parents/ pick/ fruit/ orchard/ now.',
    options: [
      { text: 'They are helping their parents pick fruit in the orchard now.', isCorrect: true },
      { text: 'They help their parents pick fruit in orchard now.', isCorrect: false },
      { text: 'They are helping their parents to picking fruit in the orchard now.', isCorrect: false },
      { text: 'They were helping their parents pick fruit in the orchard now.', isCorrect: false }
    ],
    explanation: 'Dấu hiệu nhận biết "now" chia thì hiện tại tiếp diễn: <strong>They are helping...</strong> Cấu trúc help somebody (to) V: pick fruit in the orchard.'
  }
];

// Đảm bảo tương thích toàn cục
if (typeof window !== 'undefined') {
  window.ENGLISH_DATABASE = window.ENGLISH_DATABASE || [];
}
