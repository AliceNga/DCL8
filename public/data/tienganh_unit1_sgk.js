/**
 * Tiếng Anh 8 Global Success – Unit 1: Leisure Time
 * Nội dung ôn SGK/SBT, đối chiếu trực tiếp từng trang sách học sinh:
 * PDF trang 10–19 (tương ứng trang in trong sách 8–17).
 * Không bao gồm bài nghe (audio tracks) hoặc hoạt động nói trên lớp.
 */
const U1_THREE_TEENS_CONTEXT = `<div class="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm leading-relaxed">
  <strong>Sakura (Kyoto, Japan):</strong> “Origami is the art of paper folding. I love doing it on my own in my free time. With just some sheets of paper, I can create almost anything: flowers, birds, or fans. Doing origami helps me to relax.”<br><br>
  <strong>Eric (St. Gallen, Switzerland):</strong> “My home town has some famous ski resorts. I’m into snowboarding and usually go to a nearby ski resort with my parents at weekends. Snowboarding improves my overall health and balance.”<br><br>
  <strong>Lan (Quang Binh, Viet Nam):</strong> “I’m keen on playing sport, especially badminton. My best friend lives next door, so we play badminton almost every afternoon. It’s an easy sport, and it also improves my muscle strength and helps reduce stress.”
</div>`;

const U1_TRANG_FAMILY_CONTEXT = `<div class="rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm leading-relaxed">
  Some teenagers enjoy spending free time with their friends. Others prefer doing leisure activities with their family members. I love spending time with my family because it’s a great way to <strong>connect</strong> with them.<br><br>
  At the weekend, we usually go for a bike ride. We cycle to some nearby villages to enjoy the fresh air. We take photos and look at them later. My big brother and I are also into cooking. My brother looks for easy recipes. After that, we prepare the ingredients and cook. Sometimes the food is good, but sometimes it isn’t; nevertheless, we love whatever we cook. The leisure activity I like the most is doing DIY projects with my mum. She teaches me to make my own dresses and doll clothes. On special occasions, we make special dresses together. Once I won the first prize in a costume contest at my school.
</div>`;

window.ENGLISH_UNIT1_SGK_DATABASE = [
  // ==========================================================
  // GETTING STARTED (Book pp. 8–9 / PDF pp. 10–11)
  // ==========================================================
  {
    id: 'en_u1_vocab_1', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [10, 11],
    questionText: 'In the Getting Started dialogue, Trang tells Tom she loves knitting, building dollhouses, and making paper flowers. Which phrase describes all of these activities?',
    options: [
      { text: 'doing DIY', isCorrect: true }, { text: 'doing puzzles', isCorrect: false },
      { text: 'surfing the net', isCorrect: false }, { text: 'messaging friends', isCorrect: false }
    ], explanation: '<em>Doing DIY (do-it-yourself)</em> là tự làm/sửa đồ hoặc làm đồ thủ công như đan len, làm nhà búp bê, làm hoa giấy.'
  },
  {
    id: 'en_u1_vocab_20', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [10, 11],
    questionText: 'Complete the sentence from Getting Started (Ex 2): Trang is looking for a ________.',
    options: [
      { text: 'knitting kit', isCorrect: true }, { text: 'cooking recipe', isCorrect: false },
      { text: 'football match', isCorrect: false }, { text: 'film ticket', isCorrect: false }
    ], explanation: 'Trong hội thoại trang 8 SGK (PDF tr. 10), Trang nói: <em>"I’m looking for a knitting kit."</em>'
  },
  {
    id: 'en_u1_vocab_21', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [10, 11],
    questionText: 'Complete the sentence from Getting Started (Ex 2): She likes doing DIY in her ________.',
    options: [
      { text: 'leisure time', isCorrect: true }, { text: 'school time', isCorrect: false },
      { text: 'lunch break', isCorrect: false }, { text: 'office hours', isCorrect: false }
    ], explanation: 'Trang nói: <em>"In my leisure time, I love knitting, building dollhouses, and making paper flowers."</em> (cũng có thể dùng <em>free time</em>).'
  },
  {
    id: 'en_u1_vocab_22', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [10, 11],
    questionText: 'Complete the sentence from Getting Started (Ex 2): Tom loves spending his free time with ________.',
    options: [
      { text: 'other people / his friends', isCorrect: true }, { text: 'only his dolls', isCorrect: false },
      { text: 'nobody at all', isCorrect: false }, { text: 'only his teachers', isCorrect: false }
    ], explanation: 'Trang nhận xét: <em>"You love spending free time with other people, don’t you?"</em> và Tom đồng ý.'
  },
  {
    id: 'en_u1_vocab_23', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [10, 11],
    questionText: 'Complete the sentence from Getting Started (Ex 2): Tom and his friends usually ________ together.',
    options: [
      { text: 'hang out', isCorrect: true }, { text: 'stay alone', isCorrect: false },
      { text: 'knit scarves', isCorrect: false }, { text: 'fold paper', isCorrect: false }
    ], explanation: 'Tom nói: <em>"I usually hang out with my friends. We go to the cinema, go cycling, or play sport in the park."</em>'
  },
  {
    id: 'en_u1_vocab_24', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [10, 11],
    questionText: 'Complete the sentence from Getting Started (Ex 2): Tom, Mark, Trang, and Mai are going to see a comedy this ________.',
    options: [
      { text: 'Sunday', isCorrect: true }, { text: 'Monday', isCorrect: false },
      { text: 'Friday', isCorrect: false }, { text: 'Tuesday', isCorrect: false }
    ], explanation: 'Tom rủ Trang: <em>"Would you like to go to the cinema with me and Mark this Sunday?"</em> và Trang rủ thêm Mai.'
  },
  {
    id: 'en_u1_vocab_2', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [11, 18],
    questionText: 'Complete the sentence: Mai loves ________ online for about 30 minutes a day. She thinks puzzles are good for the brain.',
    options: [
      { text: 'doing puzzles', isCorrect: true }, { text: 'messaging friends', isCorrect: false },
      { text: 'watching a film', isCorrect: false }, { text: 'going for a walk', isCorrect: false }
    ], explanation: 'Sách nêu puzzles có lợi cho trí nhớ và não bộ (Ex 4 trang 9 & Looking Back Ex 1 trang 16).'
  },
  {
    id: 'en_u1_vocab_3', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [11, 18],
    questionText: 'Complete the sentence: ________ is a popular way for teens to spend their free time. Many of them send messages to each other every day.',
    options: [
      { text: 'Messaging friends', isCorrect: true }, { text: 'Doing origami', isCorrect: false },
      { text: 'Playing puzzles', isCorrect: false }, { text: 'Making sport', isCorrect: false }
    ], explanation: '<em>Messaging friends</em> là nhắn tin cho bạn bè (Looking Back Ex 1 câu 3).'
  },
  {
    id: 'en_u1_vocab_4', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [11, 12, 15, 18],
    questionText: 'Choose the correct verb to go with “badminton / football / sport”.',
    options: [
      { text: 'play badminton / football / sport', isCorrect: true }, { text: 'do badminton / football / sport', isCorrect: false },
      { text: 'make badminton / football / sport', isCorrect: false }, { text: 'go badminton / football / sport', isCorrect: false }
    ], explanation: 'Ta nói <em>play badminton, play football, play sport</em>.'
  },
  {
    id: 'en_u1_vocab_5', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [11, 12, 18],
    questionText: 'Choose the correct phrase that means “browsing websites on the Internet”.',
    options: [
      { text: 'surf the net', isCorrect: true }, { text: 'ride the net', isCorrect: false },
      { text: 'do the net', isCorrect: false }, { text: 'make the net', isCorrect: false }
    ], explanation: '<em>Surf the net</em> nghĩa là lướt Internet.'
  },
  {
    id: 'en_u1_vocab_25', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [11, 16],
    questionText: 'Which activity in Getting Started (Ex 3) involves preparing ingredients and making meals in the kitchen?',
    options: [
      { text: 'cooking', isCorrect: true }, { text: 'doing puzzles', isCorrect: false },
      { text: 'surfing the net', isCorrect: false }, { text: 'knitting', isCorrect: false }
    ], explanation: '<em>Cooking</em> là một trong 6 hoạt động ở Ex 3 trang 9 SGK (PDF tr. 11).'
  },
  {
    id: 'en_u1_vocab_6', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [11, 15, 16, 18],
    questionText: 'Which phrase means “riding a bicycle for pleasure”?',
    options: [
      { text: 'go for a bike ride', isCorrect: true }, { text: 'go for a bike cook', isCorrect: false },
      { text: 'do a bike ride', isCorrect: false }, { text: 'make a bike ride', isCorrect: false }
    ], explanation: 'Trong bài đọc Skills 1, gia đình Trang thường <em>go for a bike ride</em> vào cuối tuần.'
  },
  {
    id: 'en_u1_vocab_7', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [14, 15],
    questionText: 'Choose the activity that matches the definition: “the art of paper folding, creating flowers, birds, or fans”.',
    options: [
      { text: 'doing origami', isCorrect: true }, { text: 'snowboarding', isCorrect: false },
      { text: 'doing judo', isCorrect: false }, { text: 'surfing the net', isCorrect: false }
    ], explanation: '<em>Origami</em> là nghệ thuật gấp giấy Nhật Bản (Communication Ex 3–4, trang 12–13 SGK).'
  },
  {
    id: 'en_u1_vocab_8', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [14, 15],
    questionText: 'According to Communication (Ex 4), which activity helps Eric improve his overall health and balance?',
    options: [
      { text: 'snowboarding', isCorrect: true }, { text: 'doing origami', isCorrect: false },
      { text: 'doing puzzles', isCorrect: false }, { text: 'cooking', isCorrect: false }
    ], explanation: 'Eric (Thụy Sĩ) nói trượt ván tuyết giúp cải thiện sức khỏe tổng thể và khả năng giữ thăng bằng.'
  },
  {
    id: 'en_u1_vocab_9', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [15],
    questionText: 'What does playing badminton help Lan improve and reduce?',
    options: [
      { text: 'Muscle strength and stress', isCorrect: true }, { text: 'Memory and sleepiness', isCorrect: false },
      { text: 'Balance and hunger', isCorrect: false }, { text: 'Reading speed and worry', isCorrect: false }
    ], explanation: 'Lan (Quảng Bình) cho biết cầu lông giúp tăng sức mạnh cơ bắp và giảm căng thẳng.'
  },
  {
    id: 'en_u1_vocab_10', exKey: 'vocabulary', exTitle: 'Từ vựng • Lợi ích hoạt động', sourcePages: [11],
    questionText: 'In Getting Started (Ex 4), which activity matches the clues “improve memory, a mental exercise”?',
    options: [
      { text: 'doing puzzles', isCorrect: true }, { text: 'playing sport', isCorrect: false },
      { text: 'messaging friends', isCorrect: false }, { text: 'surfing the net', isCorrect: false }
    ], explanation: 'Ex 4 câu 1: <em>doing puzzles</em> giúp rèn trí nhớ và là bài tập cho trí não.'
  },
  {
    id: 'en_u1_vocab_16', exKey: 'vocabulary', exTitle: 'Từ vựng • Lợi ích hoạt động', sourcePages: [10],
    questionText: 'In the Getting Started dialogue, what activity does Trang like and which expression does she use?',
    options: [
      { text: 'Doing DIY — I’m keen on many DIY activities.', isCorrect: true }, { text: 'Cooking — I’m keen at cooking.', isCorrect: false },
      { text: 'Puzzles — I’m keen in puzzles.', isCorrect: false }, { text: 'Surfing the net — I’m keen of surfing the net.', isCorrect: false }
    ], explanation: 'Tiêu đề bài hội thoại là <em>"I’m keen on doing DIY (do-it-yourself)."</em>'
  },
  {
    id: 'en_u1_vocab_17', exKey: 'vocabulary', exTitle: 'Từ vựng • Lợi ích hoạt động', sourcePages: [11],
    questionText: 'In Getting Started (Ex 4), which activity matches the clues “save money, increase creativity”?',
    options: [
      { text: 'doing DIY', isCorrect: true }, { text: 'playing sport', isCorrect: false },
      { text: 'surfing the net', isCorrect: false }, { text: 'messaging friends', isCorrect: false }
    ], explanation: 'Ex 4 câu 2: Tự làm đồ (<em>doing DIY</em>) giúp tiết kiệm tiền và tăng khả năng sáng tạo.'
  },
  {
    id: 'en_u1_vocab_18', exKey: 'vocabulary', exTitle: 'Từ vựng • Lợi ích hoạt động', sourcePages: [11],
    questionText: 'In Getting Started (Ex 4), match “messaging friends” and “surfing the net” with their clues.',
    options: [
      { text: 'keep in touch, be relaxed; learn something about IT, computer skills', isCorrect: true },
      { text: 'improve physical health, make friends; improve memory', isCorrect: false },
      { text: 'save money, increase creativity; fold paper flowers', isCorrect: false },
      { text: 'improve muscle strength; win a costume contest', isCorrect: false }
    ], explanation: 'Ex 4 câu 4 & 5: <em>messaging friends</em> (keep in touch, be relaxed); <em>surfing the net</em> (learn something about IT, computer skills).'
  },
  {
    id: 'en_u1_vocab_19', exKey: 'vocabulary', exTitle: 'Từ vựng • Lợi ích hoạt động', sourcePages: [11],
    questionText: 'In Getting Started (Ex 4), which activity matches the clues “improve physical health, make friends”?',
    options: [
      { text: 'playing sport', isCorrect: true }, { text: 'doing puzzles', isCorrect: false },
      { text: 'doing DIY', isCorrect: false }, { text: 'surfing the net', isCorrect: false }
    ], explanation: 'Ex 4 câu 3: <em>playing sport</em> giúp cải thiện sức khỏe thể chất và kết bạn.'
  },

  // ==========================================================
  // A CLOSER LOOK 1: VOCABULARY & PRONUNCIATION (Book p. 10 / PDF p. 12)
  // ==========================================================
  {
    id: 'en_u1_vocab_11', exKey: 'vocabulary', exTitle: 'Từ vựng • Nói về sở thích', sourcePages: [12],
    questionText: 'Complete the sentence (Ex 2.1): I’m ________ of taking photos. In my free time, I usually go out and take photos of people and things.',
    options: [
      { text: 'fond', isCorrect: true }, { text: 'keen', isCorrect: false }, { text: 'interested', isCorrect: false }, { text: 'into', isCorrect: false }
    ], explanation: 'Cụm đúng là <em>be fond of + V-ing</em>.'
  },
  {
    id: 'en_u1_vocab_13', exKey: 'vocabulary', exTitle: 'Từ vựng • Nói về sở thích', sourcePages: [12],
    questionText: 'Complete the sentence (Ex 2.2): Mai is ________ in history. She often goes to museums to see new exhibits and learn about the past.',
    options: [
      { text: 'interested', isCorrect: true }, { text: 'fond', isCorrect: false }, { text: 'keen', isCorrect: false }, { text: 'crazy', isCorrect: false }
    ], explanation: 'Cụm đúng là <em>be interested in</em>.'
  },
  {
    id: 'en_u1_vocab_12', exKey: 'vocabulary', exTitle: 'Từ vựng • Nói về sở thích', sourcePages: [12],
    questionText: 'Complete the sentence (Ex 2.3): My sister is ________ on cooking. She wants to become a chef in the future.',
    options: [
      { text: 'keen', isCorrect: true }, { text: 'fond', isCorrect: false }, { text: 'interested', isCorrect: false }, { text: 'about', isCorrect: false }
    ], explanation: 'Cụm đúng là <em>be keen on</em>.'
  },
  {
    id: 'en_u1_vocab_26', exKey: 'vocabulary', exTitle: 'Từ vựng • Nói về sở thích', sourcePages: [12],
    questionText: 'Match column A and B (Ex 1.5): Which preposition goes with “be ___” to express liking?',
    options: [
      { text: 'into', isCorrect: true }, { text: 'of', isCorrect: false }, { text: 'about', isCorrect: false }, { text: 'on', isCorrect: false }
    ], explanation: 'Trong Ex 1 trang 10 SGK: <em>1. be fond of, 2. be keen on, 3. be interested in, 4. be crazy about, 5. be into</em>.'
  },
  {
    id: 'en_u1_vocab_27', exKey: 'vocabulary', exTitle: 'Từ vựng • Nói về sở thích', sourcePages: [12],
    questionText: 'Complete the sentence (Ex 2.4): My brother spends lots of time surfing the net, but I’m not ________ it.',
    options: [
      { text: 'into', isCorrect: true }, { text: 'fond', isCorrect: false }, { text: 'keen', isCorrect: false }, { text: 'interested', isCorrect: false }
    ], explanation: 'Cụm đúng là <em>be not into something</em> (không hứng thú với cái gì).'
  },
  {
    id: 'en_u1_vocab_14', exKey: 'vocabulary', exTitle: 'Từ vựng • Nói về sở thích', sourcePages: [12],
    questionText: 'Which expression means “very enthusiastic or excited about” an activity?',
    options: [
      { text: 'be crazy about', isCorrect: true }, { text: 'be crazy of', isCorrect: false }, { text: 'be crazy in', isCorrect: false }, { text: 'be crazy on', isCorrect: false }
    ], explanation: 'Cụm đúng là <em>be crazy about</em>.'
  },
  {
    id: 'en_u1_vocab_28', exKey: 'vocabulary', exTitle: 'Từ vựng • Nói về sở thích', sourcePages: [12],
    questionText: 'Complete the sentence (Ex 2.5): I’m not crazy ________ doing DIY. I’m never able to finish any DIY projects I start.',
    options: [
      { text: 'about', isCorrect: true }, { text: 'of', isCorrect: false }, { text: 'in', isCorrect: false }, { text: 'on', isCorrect: false }
    ], explanation: 'Cụm đúng là <em>be crazy about</em>.'
  },
  {
    id: 'en_u1_vocab_15', exKey: 'vocabulary', exTitle: 'Từ vựng • Nói về sở thích', sourcePages: [12],
    questionText: 'How do you make the sentence “She is keen on cooking” negative to express dislike?',
    options: [
      { text: 'Put “not” after “be”: She is not keen on cooking.', isCorrect: true },
      { text: 'Put “not” before “cooking”: She is keen on not cooking.', isCorrect: false },
      { text: 'Put “not” before “keen”: She not is keen on cooking.', isCorrect: false },
      { text: 'Add “not” at the end of the sentence.', isCorrect: false }
    ], explanation: 'Theo hộp <em>Remember!</em> trang 10 SGK: đặt <em>not</em> sau động từ <em>be</em>: <em>She is not keen on cooking.</em>'
  },

  // Pronunciation /ʊ/ and /uː/ (Book p. 10 / PDF p. 12). Every option has a speaker button.
  {
    id: 'en_u1_pron_1', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'Which word has the underlined part pronounced /uː/? Click the speaker icon to listen.',
    options: [
      { text: 'c<u>oo</u>k', raw: 'cook', isCorrect: false }, { text: 'gr<u>ou</u>p', raw: 'group', isCorrect: true },
      { text: 'p<u>u</u>sh', raw: 'push', isCorrect: false }, { text: 'w<u>ou</u>ld', raw: 'would', isCorrect: false }
    ], explanation: '<em>Group</em> có âm /uː/. <em>Cook, push, would</em> có âm /ʊ/.'
  },
  {
    id: 'en_u1_pron_2', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'Which word contains the long vowel sound /uː/? Click the speaker icon to listen.',
    options: [
      { text: 'J<u>u</u>ne', raw: 'June', isCorrect: true }, { text: 'w<u>o</u>man', raw: 'woman', isCorrect: false },
      { text: 'c<u>oo</u>k', raw: 'cook', isCorrect: false }, { text: 'p<u>u</u>sh', raw: 'push', isCorrect: false }
    ], explanation: '<em>June</em> có /uː/; <em>woman, cook, push</em> có /ʊ/.'
  },
  {
    id: 'en_u1_pron_3', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'Which word has the sound /uː/? Click the speaker icon to listen.',
    options: [
      { text: 'school', raw: 'school', isCorrect: true }, { text: 'would', raw: 'would', isCorrect: false },
      { text: 'woman', raw: 'woman', isCorrect: false }, { text: 'cook', raw: 'cook', isCorrect: false }
    ], explanation: '<em>School</em> có /uː/; <em>would, woman, cook</em> có /ʊ/.'
  },
  {
    id: 'en_u1_pron_4', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'Which word has the sound /uː/? Click the speaker icon to listen.',
    options: [
      { text: 'move', raw: 'move', isCorrect: true }, { text: 'push', raw: 'push', isCorrect: false },
      { text: 'would', raw: 'would', isCorrect: false }, { text: 'woman', raw: 'woman', isCorrect: false }
    ], explanation: '<em>Move</em> có /uː/; <em>push, would, woman</em> có /ʊ/.'
  },
  {
    id: 'en_u1_pron_6', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'In the sentence “She likes reading books and swimming in the pool”, which bold word has the sound /uː/? Click the speaker icon to listen.',
    options: [
      { text: 'books', raw: 'books', isCorrect: false }, { text: 'pool', raw: 'pool', isCorrect: true },
      { text: 'reading', raw: 'reading', isCorrect: false }, { text: 'swimming', raw: 'swimming', isCorrect: false }
    ], explanation: 'Ex 5 câu 1: <em>books</em> /bʊks/ có âm /ʊ/; <em>pool</em> /puːl/ có âm /uː/.'
  },
  {
    id: 'en_u1_pron_7', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'In the sentence “When it is cool, we like to play football”, which bold word has the sound /ʊ/? Click the speaker icon to listen.',
    options: [
      { text: 'cool', raw: 'cool', isCorrect: false }, { text: 'football', raw: 'football', isCorrect: true },
      { text: 'like', raw: 'like', isCorrect: false }, { text: 'play', raw: 'play', isCorrect: false }
    ], explanation: 'Ex 5 câu 2: <em>cool</em> /kuːl/ có âm /uː/; <em>football</em> /ˈfʊtbɔːl/ có âm /ʊ/.'
  },
  {
    id: 'en_u1_pron_8', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'In the sentence “She drew and made puddings in her free time”, which bold word has the sound /ʊ/? Click the speaker icon to listen.',
    options: [
      { text: 'puddings', raw: 'puddings', isCorrect: true }, { text: 'drew', raw: 'drew', isCorrect: false },
      { text: 'made', raw: 'made', isCorrect: false }, { text: 'free', raw: 'free', isCorrect: false }
    ], explanation: 'Ex 5 câu 3: <em>puddings</em> /ˈpʊdɪŋz/ có âm /ʊ/.'
  },
  {
    id: 'en_u1_pron_5', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'In the sentence “My mum loves pumpkin soup and coffee with a little sugar”, which bold word has the sound /uː/? Click the speaker icon to listen.',
    options: [
      { text: 'mum', raw: 'mum', isCorrect: false }, { text: 'soup', raw: 'soup', isCorrect: true },
      { text: 'sugar', raw: 'sugar', isCorrect: false }, { text: 'coffee', raw: 'coffee', isCorrect: false }
    ], explanation: 'Ex 5 câu 4: <em>soup</em> /suːp/ có âm /uː/; <em>sugar</em> /ˈʃʊɡər/ có âm /ʊ/.'
  },
  {
    id: 'en_u1_pron_9', exKey: 'phonetics', exTitle: 'Phát âm • /ʊ/ và /uː/', isAudioQuiz: true, sourcePages: [12],
    questionText: 'In the sentence “My brother is fond of watching the cartoon about a clever wolf”, which bold word has the sound /uː/? Click the speaker icon to listen.',
    options: [
      { text: 'cartoon', raw: 'cartoon', isCorrect: true }, { text: 'wolf', raw: 'wolf', isCorrect: false },
      { text: 'clever', raw: 'clever', isCorrect: false }, { text: 'brother', raw: 'brother', isCorrect: false }
    ], explanation: 'Ex 5 câu 5: <em>cartoon</em> /kɑːˈtuːn/ có âm /uː/; <em>wolf</em> /wʊlf/ có âm /ʊ/.'
  },

  // ==========================================================
  // A CLOSER LOOK 2: GRAMMAR (Book pp. 11–12 / PDF pp. 13–14)
  // ==========================================================
  {
    id: 'en_u1_grammar_4', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Which group of verbs in Unit 1 (Ex 1) is followed ONLY by gerunds (-ing forms)?',
    options: [
      { text: 'dislike, enjoy, fancy, detest', isCorrect: true }, { text: 'love, like, hate, prefer', isCorrect: false },
      { text: 'love, enjoy, hate, fancy', isCorrect: false }, { text: 'like, prefer, detest, love', isCorrect: false }
    ], explanation: 'Theo bảng Ex 1 trang 11 SGK: nhóm chỉ đi với V-ing gồm <em>dislike, enjoy, fancy, detest</em>.'
  },
  {
    id: 'en_u1_grammar_11', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Which group of verbs in Unit 1 (Ex 1) can be followed by BOTH gerunds and to-infinitives?',
    options: [
      { text: 'love, like, hate, prefer', isCorrect: true }, { text: 'dislike, enjoy, fancy, detest', isCorrect: false },
      { text: 'only detest and fancy', isCorrect: false }, { text: 'only enjoy and dislike', isCorrect: false }
    ], explanation: 'Theo bảng Ex 1 trang 11 SGK: <em>love, like, hate, prefer</em> đi được với cả V-ing và to-infinitive.'
  },
  {
    id: 'en_u1_grammar_1', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Choose the correct answer (Ex 2.1): I love ________, so in my leisure time, I go to some villages near Ha Noi to relax and enjoy the outdoors.',
    options: [
      { text: 'travelling', isCorrect: true }, { text: 'travelled', isCorrect: false }, { text: 'a travel', isCorrect: false }, { text: 'travel', isCorrect: false }
    ], explanation: '<em>Love</em> đi với danh động từ V-ing (<em>travelling</em>) hoặc to-infinitive.'
  },
  {
    id: 'en_u1_grammar_5', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Choose the correct answer (Ex 2.2): Tom enjoys ________ puzzles, especially Sudoku.',
    options: [
      { text: 'doing', isCorrect: true }, { text: 'do', isCorrect: false }, { text: 'to do', isCorrect: false }, { text: 'did', isCorrect: false }
    ], explanation: '<em>Enjoy</em> luôn theo sau bởi V-ing: <em>enjoy doing</em>.'
  },
  {
    id: 'en_u1_grammar_12', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Choose the correct answer (Ex 2.3): When do you like ________ TV?',
    options: [
      { text: 'to watch', isCorrect: true }, { text: 'watched', isCorrect: false }, { text: 'watch', isCorrect: false }, { text: 'watches', isCorrect: false }
    ], explanation: '<em>Like</em> có thể theo sau bởi to-infinitive (<em>like to watch</em>) hoặc V-ing.'
  },
  {
    id: 'en_u1_grammar_2', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Choose the correct answer (Ex 2.4): Do you fancy ________ to the cinema this weekend?',
    options: [
      { text: 'going', isCorrect: true }, { text: 'to go', isCorrect: false },
      { text: 'go', isCorrect: false }, { text: 'went', isCorrect: false }
    ], explanation: '<em>Fancy</em> chỉ theo sau bởi danh động từ V-ing: <em>fancy going</em>.'
  },
  {
    id: 'en_u1_grammar_3', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Choose the correct answer (Ex 2.5): I detest ________. I think it’s cruel to harm animals.',
    options: [
      { text: 'hunting', isCorrect: true }, { text: 'to hunt', isCorrect: false }, { text: 'hunt', isCorrect: false }, { text: 'hunted', isCorrect: false }
    ], explanation: '<em>Detest</em> chỉ theo sau bởi V-ing: <em>detest hunting</em>.'
  },
  {
    id: 'en_u1_grammar_13', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Complete the sentence with the correct verb form (Ex 3.1): Mark ________ the net on his laptop in his free time. (like / surf)',
    options: [
      { text: 'likes surfing / likes to surf', isCorrect: true }, { text: 'like surfing', isCorrect: false },
      { text: 'likes surf', isCorrect: false }, { text: 'is like surfing', isCorrect: false }
    ], explanation: 'Chủ ngữ ngôi 3 số ít <em>Mark</em> → <em>likes</em>; sau <em>like</em> dùng V-ing hoặc to-V.'
  },
  {
    id: 'en_u1_grammar_14', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Complete the sentence with the correct verb form (Ex 3.2): The girls ________ together. (enjoy / knit)',
    options: [
      { text: 'enjoy knitting', isCorrect: true }, { text: 'enjoys knitting', isCorrect: false },
      { text: 'enjoy to knit', isCorrect: false }, { text: 'enjoy knit', isCorrect: false }
    ], explanation: 'Chủ ngữ số nhiều <em>The girls</em> → <em>enjoy</em>; <em>enjoy</em> chỉ đi với V-ing (<em>knitting</em>).'
  },
  {
    id: 'en_u1_grammar_15', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Complete the sentence with the correct verb form (Ex 3.3): My cousin ________. (dislike / cook)',
    options: [
      { text: 'dislikes cooking', isCorrect: true }, { text: 'dislike cooking', isCorrect: false },
      { text: 'dislikes to cook', isCorrect: false }, { text: 'dislikes cook', isCorrect: false }
    ], explanation: 'Chủ ngữ <em>My cousin</em> → <em>dislikes</em>; <em>dislike</em> chỉ đi với V-ing (<em>cooking</em>).'
  },
  {
    id: 'en_u1_grammar_16', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Complete the sentence with the correct verb form (Ex 3.4): My father ________. (hate / go shopping)',
    options: [
      { text: 'hates going shopping / hates to go shopping', isCorrect: true }, { text: 'hate going shopping', isCorrect: false },
      { text: 'hates go shopping', isCorrect: false }, { text: 'hates went shopping', isCorrect: false }
    ], explanation: 'Chủ ngữ <em>My father</em> → <em>hates</em>; sau <em>hate</em> dùng V-ing hoặc to-V.'
  },
  {
    id: 'en_u1_grammar_17', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [13],
    questionText: 'Complete the sentence with the correct verb form (Ex 3.5): Tom and his sister ________ puzzles together. (prefer / do)',
    options: [
      { text: 'prefer doing / prefer to do', isCorrect: true }, { text: 'prefers doing', isCorrect: false },
      { text: 'prefer do', isCorrect: false }, { text: 'prefer to doing', isCorrect: false }
    ], explanation: 'Chủ ngữ số nhiều <em>Tom and his sister</em> → <em>prefer</em>; sau <em>prefer</em> dùng V-ing hoặc to-V.'
  },

  // ==========================================================
  // LOOKING BACK: GRAMMAR & CUES (Book p. 16 / PDF p. 18)
  // ==========================================================
  {
    id: 'en_u1_vocab_29', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [18],
    questionText: 'Complete the sentence (Looking Back Ex 1.2): My favourite leisure activity is ________. I can make many things myself, such as paper flowers and bracelets.',
    options: [
      { text: 'doing DIY', isCorrect: true }, { text: 'doing puzzles', isCorrect: false },
      { text: 'playing sport', isCorrect: false }, { text: 'surfing the net', isCorrect: false }
    ], explanation: 'Tự làm đồ thủ công như hoa giấy, vòng tay là <em>doing DIY</em>.'
  },
  {
    id: 'en_u1_vocab_30', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [18],
    questionText: 'Complete the sentence (Looking Back Ex 1.4): My brother is fond of ________ with his friends. On Sundays, he usually plays football, goes swimming, or plays badminton with them.',
    options: [
      { text: 'playing sport', isCorrect: true }, { text: 'doing DIY', isCorrect: false },
      { text: 'messaging friends', isCorrect: false }, { text: 'doing puzzles', isCorrect: false }
    ], explanation: 'Chơi bóng đá, bơi lội, cầu lông thuộc hoạt động <em>playing sport</em>.'
  },
  {
    id: 'en_u1_vocab_31', exKey: 'vocabulary', exTitle: 'Từ vựng • Hoạt động lúc rảnh', sourcePages: [18],
    questionText: 'Complete the sentence (Looking Back Ex 1.5): Tom spends one hour on the Internet almost every day. He is keen on ________.',
    options: [
      { text: 'surfing the net', isCorrect: true }, { text: 'messaging friends', isCorrect: false },
      { text: 'doing DIY', isCorrect: false }, { text: 'playing sport', isCorrect: false }
    ], explanation: 'Lên mạng hằng ngày là <em>surfing the net</em>.'
  },
  {
    id: 'en_u1_grammar_7', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [18],
    questionText: 'Fill in the blank (Looking Back Ex 3.1): Does Tom enjoy ________ in the park with his friends? (cycle)',
    options: [
      { text: 'cycling', isCorrect: true }, { text: 'cycle', isCorrect: false }, { text: 'to cycle', isCorrect: false }, { text: 'cycled', isCorrect: false }
    ], explanation: '<em>Enjoy</em> chỉ đi với V-ing: <em>cycling</em>.'
  },
  {
    id: 'en_u1_grammar_18', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [18],
    questionText: 'Fill in the blank (Looking Back Ex 3.2): Some teenagers don’t like ________ comic books. (read)',
    options: [
      { text: 'reading / to read', isCorrect: true }, { text: 'read', isCorrect: false }, { text: 'reads', isCorrect: false }, { text: 'to reading', isCorrect: false }
    ], explanation: '<em>Like</em> đi được với cả V-ing và to-infinitive (<em>reading / to read</em>).'
  },
  {
    id: 'en_u1_grammar_19', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [18],
    questionText: 'Fill in the blank (Looking Back Ex 3.3): Mai detests ________ sport because it’s tiring. (play)',
    options: [
      { text: 'playing', isCorrect: true }, { text: 'play', isCorrect: false }, { text: 'to play', isCorrect: false }, { text: 'played', isCorrect: false }
    ], explanation: '<em>Detest</em> chỉ đi với V-ing: <em>playing</em>.'
  },
  {
    id: 'en_u1_grammar_8', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [18],
    questionText: 'Fill in the blank (Looking Back Ex 3.4): Trang and Ann love ________ with each other in their free time. (chat)',
    options: [
      { text: 'chatting / to chat', isCorrect: true }, { text: 'chat', isCorrect: false }, { text: 'chatted', isCorrect: false }, { text: 'to chatting', isCorrect: false }
    ], explanation: '<em>Love</em> có thể đi với V-ing hoặc to-infinitive (<em>chatting / to chat</em>).'
  },
  {
    id: 'en_u1_grammar_6', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [18],
    questionText: 'Fill in the blank (Looking Back Ex 3.5): What do Nam and Mark prefer ________ at the weekend? (do)',
    options: [
      { text: 'doing / to do', isCorrect: true }, { text: 'do', isCorrect: false },
      { text: 'did', isCorrect: false }, { text: 'to doing', isCorrect: false }
    ], explanation: '<em>Prefer</em> có thể đi với V-ing hoặc to-infinitive (<em>doing / to do</em>).'
  },
  {
    id: 'en_u1_grammar_9', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [18],
    questionText: 'Choose the correct sentence built from the cues (Looking Back Ex 2.1): “my cousin / crazy about / play / computer / games”.',
    options: [
      { text: 'My cousin is crazy about playing computer games.', isCorrect: true },
      { text: 'My cousin crazy about play computer games.', isCorrect: false },
      { text: 'My cousin is crazy in playing computer games.', isCorrect: false },
      { text: 'My cousin is crazy about to play computer games.', isCorrect: false }
    ], explanation: 'Cấu trúc: <em>be crazy about + V-ing</em>.'
  },
  {
    id: 'en_u1_grammar_10', exKey: 'grammar', exTitle: 'Ngữ pháp • Động từ chỉ sở thích', sourcePages: [18],
    questionText: 'Choose the correct sentence built from the cues (Looking Back Ex 2.3): “I / not fond / make models / because / I / not patient”.',
    options: [
      { text: "I'm not fond of making models because I'm not patient.", isCorrect: true },
      { text: "I not fond of make models because I don't patient.", isCorrect: false },
      { text: "I'm not fond to make models because I'm not patient.", isCorrect: false },
      { text: "I'm fond not making models because I'm not patient.", isCorrect: false }
    ], explanation: '<em>Be not fond of + V-ing</em>; tính từ <em>patient</em> đi với động từ <em>be</em>.'
  },

  // ==========================================================
  // COMMUNICATION: EVERYDAY ENGLISH (Book p. 12 / PDF p. 14)
  // ==========================================================
  {
    id: 'en_u1_communication_1', exKey: 'communication', exTitle: 'Giao tiếp • Mời và nhận lời', sourcePages: [14],
    questionText: 'Trang asks Ann: “Would you like to go to the cooking club with me this Sunday?” What is the best reply to accept?',
    options: [
      { text: "I'd love to. Thanks.", isCorrect: true }, { text: "I don't like cooking yesterday.", isCorrect: false },
      { text: 'Yes, I went there.', isCorrect: false }, { text: 'No, I am Sunday.', isCorrect: false }
    ], explanation: '<em>Would you like to…?</em> là lời mời; <em>I’d love to. Thanks.</em> là cách nhận lời lịch sự trong SGK trang 12.'
  },
  {
    id: 'en_u1_communication_2', exKey: 'communication', exTitle: 'Giao tiếp • Mời và nhận lời', sourcePages: [14],
    questionText: 'Tom asks Mark: “Do you fancy going for a walk?” Choose the natural reply to accept.',
    options: [
      { text: "That's great. Thanks.", isCorrect: true }, { text: 'I fancy to go.', isCorrect: false },
      { text: 'I am great thanks.', isCorrect: false }, { text: 'Do you like walk?', isCorrect: false }
    ], explanation: 'Mẫu trong sách trang 12: <em>Do you fancy going for a walk? — That’s great. Thanks.</em>'
  },
  {
    id: 'en_u1_communication_3', exKey: 'communication', exTitle: 'Giao tiếp • Mời và nhận lời', sourcePages: [14],
    questionText: 'Which sentence is a polite invitation to make paper flowers together?',
    options: [
      { text: 'Would you like to make paper flowers with me?', isCorrect: true },
      { text: 'Would you like making paper flowers yesterday?', isCorrect: false },
      { text: 'Do you fancy to make paper flowers?', isCorrect: false },
      { text: 'I would like you make paper flowers.', isCorrect: false }
    ], explanation: 'Dùng <em>Would you like to + V…?</em> hoặc <em>Do you fancy + V-ing…?</em> để mời bạn.'
  },
  {
    id: 'en_u1_communication_4', exKey: 'communication', exTitle: 'Giao tiếp • Mời và nhận lời', sourcePages: [14],
    questionText: 'Choose the correct way to invite a friend to play badminton.',
    options: [
      { text: 'Would you like to play badminton with me?', isCorrect: true }, { text: 'Would you like playing badminton yesterday?', isCorrect: false },
      { text: 'Do you fancy to play badminton?', isCorrect: false }, { text: 'I would like play badminton you.', isCorrect: false }
    ], explanation: 'Cấu trúc mời: <em>Would you like to + V…?</em>'
  },
  {
    id: 'en_u1_communication_5', exKey: 'communication', exTitle: 'Giao tiếp • Mời và nhận lời', sourcePages: [14],
    questionText: 'Your friend invites you to try their home-made pizza. What is the most natural way to accept?',
    options: [
      { text: "I'd love to. Thanks.", isCorrect: true }, { text: 'I love to pizza.', isCorrect: false },
      { text: 'That is making pizza.', isCorrect: false }, { text: 'I fancy to eat it.', isCorrect: false }
    ], explanation: 'Dùng <em>I’d love to. Thanks.</em> hoặc <em>That’s great. Thanks.</em> để nhận lời mời.'
  },

  // ==========================================================
  // COMMUNICATION EX 4: THREE TEENAGERS (Book p. 13 / PDF p. 15)
  // ==========================================================
  {
    id: 'en_u1_reading_1', exKey: 'reading', exTitle: 'Đọc hiểu • Sở thích quanh thế giới', sourcePages: [15],
    questionText: 'Read the profiles and answer: Where does Sakura live?',
    readingContext: U1_THREE_TEENS_CONTEXT,
    options: [
      { text: 'Kyoto, Japan', isCorrect: true }, { text: 'St. Gallen, Switzerland', isCorrect: false },
      { text: 'Quang Binh, Viet Nam', isCorrect: false }, { text: 'Ha Noi, Viet Nam', isCorrect: false }
    ], explanation: 'Sakura đến từ Kyoto, Nhật Bản.'
  },
  {
    id: 'en_u1_reading_2', exKey: 'reading', exTitle: 'Đọc hiểu • Sở thích quanh thế giới', sourcePages: [15],
    questionText: 'What does Sakura love doing on her own in her free time?',
    readingContext: U1_THREE_TEENS_CONTEXT,
    options: [
      { text: 'Doing origami', isCorrect: true }, { text: 'Snowboarding', isCorrect: false },
      { text: 'Playing badminton', isCorrect: false }, { text: 'Cooking with her brother', isCorrect: false }
    ], explanation: 'Sakura thích gấp giấy origami một mình; hoạt động này giúp bạn ấy thư giãn.'
  },
  {
    id: 'en_u1_reading_3', exKey: 'reading', exTitle: 'Đọc hiểu • Sở thích quanh thế giới', sourcePages: [15],
    questionText: 'Who does Eric usually go snowboarding with, and when?',
    readingContext: U1_THREE_TEENS_CONTEXT,
    options: [
      { text: 'With his parents at weekends', isCorrect: true }, { text: 'With his best friend every afternoon', isCorrect: false },
      { text: 'On his own every morning', isCorrect: false }, { text: 'With his brother on weekdays', isCorrect: false }
    ], explanation: 'Eric thường đến khu trượt tuyết gần nhà cùng bố mẹ vào cuối tuần.'
  },
  {
    id: 'en_u1_reading_4', exKey: 'reading', exTitle: 'Đọc hiểu • Sở thích quanh thế giới', sourcePages: [15],
    questionText: 'Who does Lan play badminton with, and how often?',
    readingContext: U1_THREE_TEENS_CONTEXT,
    options: [
      { text: 'With her best friend who lives next door, almost every afternoon', isCorrect: true },
      { text: 'With her family at weekends', isCorrect: false }, { text: 'On her own every morning', isCorrect: false },
      { text: 'With her classmates once a month', isCorrect: false }
    ], explanation: 'Bạn thân của Lan sống cạnh nhà, hai bạn chơi cầu lông gần như mỗi buổi chiều.'
  },
  {
    id: 'en_u1_reading_5', exKey: 'reading', exTitle: 'Đọc hiểu • Sở thích quanh thế giới', sourcePages: [15],
    questionText: 'Which set of columns does the table in Communication (Ex 4) ask you to complete?',
    readingContext: U1_THREE_TEENS_CONTEXT,
    options: [
      { text: 'Name, Country, Leisure activity, Person / People to do the activity with, and Benefits of the activity', isCorrect: true },
      { text: 'Age, school, subjects, grades, and future job', isCorrect: false },
      { text: 'Address, weather, transport, and cost', isCorrect: false },
      { text: 'Friends’ names, favourite food, bedtime, and birthday', isCorrect: false }
    ], explanation: 'Bảng ở Ex 4 trang 13 SGK gồm 5 cột: Name, Country, Leisure activity, Person/People to do the activity with, Benefits of the activity.'
  },

  // ==========================================================
  // SKILLS 1: READING (Book p. 14 / PDF p. 16)
  // ==========================================================
  {
    id: 'en_u1_reading_6', exKey: 'reading', exTitle: 'Đọc hiểu • Trang và gia đình', sourcePages: [16],
    questionText: 'Read the passage and choose the correct answer (Ex 2.1): The text is about Trang’s leisure activities ________.',
    readingContext: U1_TRANG_FAMILY_CONTEXT,
    options: [
      { text: 'with her family', isCorrect: true }, { text: 'with her friends', isCorrect: false },
      { text: 'in the past', isCorrect: false }, { text: 'with her neighbours', isCorrect: false }
    ], explanation: 'Bài đọc nói về các hoạt động giải trí của Trang cùng gia đình.'
  },
  {
    id: 'en_u1_reading_10', exKey: 'reading', exTitle: 'Đọc hiểu • Trang và gia đình', sourcePages: [16],
    questionText: 'Choose the correct answer (Ex 2.2): The word “connect” is closest in meaning to ________.',
    readingContext: U1_TRANG_FAMILY_CONTEXT,
    options: [
      { text: 'better understand someone', isCorrect: true }, { text: 'join with something', isCorrect: false },
      { text: 'speak to someone by phone', isCorrect: false }, { text: 'search for cooking recipes', isCorrect: false }
    ], explanation: 'Trong câu <em>"a great way to connect with them"</em>, <em>connect</em> đồng nghĩa với <em>better understand someone</em> (thấu hiểu và gắn kết hơn).'
  },
  {
    id: 'en_u1_reading_7', exKey: 'reading', exTitle: 'Đọc hiểu • Trang và gia đình', sourcePages: [16],
    questionText: 'Answer the question (Ex 3.1): What does Trang do with her family members at the weekend?',
    readingContext: U1_TRANG_FAMILY_CONTEXT,
    options: [
      { text: 'She goes for a bike ride (cycles to nearby villages, enjoys fresh air, and takes photos).', isCorrect: true },
      { text: 'She goes snowboarding at a nearby ski resort.', isCorrect: false },
      { text: 'She goes to the cinema with her friends.', isCorrect: false },
      { text: 'She attends a poetry club at school.', isCorrect: false }
    ], explanation: 'Cuối tuần gia đình Trang thường đạp xe đến các làng gần đó hít thở không khí trong lành và chụp ảnh.'
  },
  {
    id: 'en_u1_reading_8', exKey: 'reading', exTitle: 'Đọc hiểu • Trang và gia đình', sourcePages: [16],
    questionText: 'Answer the question (Ex 3.2): Who looks for recipes when Trang and her brother cook?',
    readingContext: U1_TRANG_FAMILY_CONTEXT,
    options: [
      { text: 'Trang’s big brother', isCorrect: true }, { text: 'Trang’s mum', isCorrect: false },
      { text: 'Trang’s best friend', isCorrect: false }, { text: 'Trang’s dad', isCorrect: false }
    ], explanation: 'Trong bài: <em>"My brother looks for easy recipes."</em>'
  },
  {
    id: 'en_u1_reading_9', exKey: 'reading', exTitle: 'Đọc hiểu • Trang và gia đình', sourcePages: [16],
    questionText: 'Answer the question (Ex 3.3): Which leisure activity does she love the most?',
    readingContext: U1_TRANG_FAMILY_CONTEXT,
    options: [
      { text: 'Doing DIY projects with her mum', isCorrect: true }, { text: 'Cycling on her own', isCorrect: false },
      { text: 'Cooking with her best friend', isCorrect: false }, { text: 'Taking photos at a ski resort', isCorrect: false }
    ], explanation: 'Trang viết: <em>"The leisure activity I like the most is doing DIY projects with my mum."</em>'
  },
  {
    id: 'en_u1_reading_12', exKey: 'reading', exTitle: 'Đọc hiểu • Trang và gia đình', sourcePages: [16],
    questionText: 'Answer the question (Ex 3.4): What does Trang’s mum teach her to do?',
    readingContext: U1_TRANG_FAMILY_CONTEXT,
    options: [
      { text: 'Make her own dresses and doll clothes', isCorrect: true }, { text: 'Make paper flowers and bracelets', isCorrect: false },
      { text: 'Cook meals from online recipes', isCorrect: false }, { text: 'Play badminton and ride a bike', isCorrect: false }
    ], explanation: 'Mẹ dạy Trang tự may váy của mình và quần áo cho búp bê.'
  },
  {
    id: 'en_u1_reading_11', exKey: 'reading', exTitle: 'Đọc hiểu • Trang và gia đình', sourcePages: [16],
    questionText: 'Answer the question (Ex 3.5): What did she win?',
    readingContext: U1_TRANG_FAMILY_CONTEXT,
    options: [
      { text: 'First prize in a costume contest at her school', isCorrect: true }, { text: 'First prize in a badminton tournament', isCorrect: false },
      { text: 'A city snowboarding medal', isCorrect: false }, { text: 'A TV cooking award', isCorrect: false }
    ], explanation: 'Trang từng giành giải nhất trong một cuộc thi trang phục ở trường.'
  },

  // ==========================================================
  // SKILLS 2 (WRITING), LOOKING BACK EX 2 & 4, PROJECT
  // (Book pp. 15–17 / PDF pp. 17–19)
  // ==========================================================
  {
    id: 'en_u1_writing_1', exKey: 'writing', exTitle: 'Viết • Email về thời gian rảnh', sourcePages: [17],
    questionText: 'Skills 2 (Ex 5) asks you to write an 80–100 word email to a penfriend. What should the email be about?',
    options: [
      { text: 'What you usually do with your friends in your free time and why you do these activities', isCorrect: true },
      { text: 'A past family holiday trip', isCorrect: false },
      { text: 'Your school timetable and upcoming exams', isCorrect: false },
      { text: 'Instructions for cooking a traditional dish', isCorrect: false }
    ], explanation: 'Dựa vào 3 câu hỏi ở Ex 4 trang 15 SGK: khi nào rảnh, thường làm gì với bạn bè và lý do.'
  },
  {
    id: 'en_u1_writing_2', exKey: 'writing', exTitle: 'Viết • Email về thời gian rảnh', sourcePages: [17],
    questionText: 'Choose the logical order of parts in the model email (Skills 2 Ex 5).',
    options: [
      { text: 'Subject → greeting / reply → activities & reasons → closing → signature', isCorrect: true },
      { text: 'Signature → Subject → closing → greeting → main body', isCorrect: false },
      { text: 'Vocabulary list → quiz answers → title', isCorrect: false },
      { text: 'Closing → main body → greeting → Subject', isCorrect: false }
    ], explanation: 'Email mẫu có Subject “My free time”, lời chào “Hi …”, mở đầu “It’s nice to hear from you again. Let me tell you about…”, thân bài và kết “Bye for now,”.'
  },
  {
    id: 'en_u1_writing_3', exKey: 'writing', exTitle: 'Viết • Email về thời gian rảnh', sourcePages: [17],
    questionText: 'Plan an 80–100 word email about your free time with friends. Choose the key points needed to develop your email.',
    type: 'keypoint_checklist', totalPoints: 3,
    keypoints: [
      { pointNum: 1, title: 'Opening the email', template: 'Respond to your penfriend and introduce the topic: {open}.', slots: [{ id: 'open', expected: 'It’s nice to hear from you again. Let me tell you about my free time.', options: ['It’s nice to hear from you again. Let me tell you about my free time.', 'I am writing a recipe for dinner.', 'This is my school timetable.'] }] },
      { pointNum: 2, title: 'Developing the body', template: 'Include {when}, {what}, and {why}.', slots: [{ id: 'when', expected: 'when you usually have free time', options: ['when you usually have free time', 'your school address', 'last year’s weather'] }, { id: 'what', expected: 'the activities you do with friends', options: ['the activities you do with friends', 'your teachers’ favourite subjects', 'phone instructions'] }, { id: 'why', expected: 'reasons why you do these activities', options: ['reasons why you do these activities', 'the price of a textbook', 'your favourite colour'] }] },
      { pointNum: 3, title: 'Closing the email', template: 'End in a friendly way and sign off, e.g. {close}.', slots: [{ id: 'close', expected: 'Bye for now, + your name', options: ['Bye for now, + your name', 'Yours faithfully, + exam code', 'Good night, + school address'] }] }
    ],
    fullSolution: '<strong>Bài mẫu tham khảo (86 từ):</strong><br><em>Subject: My free time<br><br>Hi Alex,<br>It’s nice to hear from you again. Let me tell you about my free time. I usually have free time at weekends. I often ride my bike or play badminton with my friends near my house. Sometimes we cook a simple meal together. I like these activities because they are fun and help us stay healthy. We also have time to talk and share our stories. What do you usually do with your friends?<br><br>Bye for now,<br>Minh</em><br><br>Hãy thay hoạt động, thời gian và lý do bằng trải nghiệm thật của em, giữ độ dài 80–100 từ.'
  },
  {
    id: 'en_u1_writing_4', exKey: 'writing', exTitle: 'Viết • Khảo sát Leisure Time', sourcePages: [19],
    questionText: 'What information does the Leisure Time Survey project (Book p. 17) ask you to collect from classmates?',
    options: [
      { text: 'When they have free time; activities with family, with friends, on their own, and activities they want to try in the future', isCorrect: true },
      { text: 'Grades, height, favourite food, and birthdays', isCorrect: false },
      { text: 'Teachers’ names, classrooms, and exam subjects', isCorrect: false },
      { text: 'Weather, transport to school, and bedtime', isCorrect: false }
    ], explanation: 'Bảng khảo sát có 5 câu hỏi: lúc rảnh; hoạt động với gia đình, bạn bè, một mình; và hoạt động muốn thử trong tương lai.'
  },
  {
    id: 'en_u1_writing_5', exKey: 'writing', exTitle: 'Viết • Khảo sát Leisure Time', sourcePages: [19],
    questionText: 'After collecting the survey answers, what should your group do to present the findings (Ex 3)?',
    options: [
      { text: 'Report how many students were interviewed, when they have free time, and the most popular activities for each category', isCorrect: true },
      { text: 'Only read every single answer aloud without summarising', isCorrect: false },
      { text: 'Delete the table and choose one student representative', isCorrect: false },
      { text: 'Write a story about a snowboarding trip', isCorrect: false }
    ], explanation: 'Ex 3 trang 17 SGK hướng dẫn báo cáo 6 ý: số học sinh phỏng vấn, thời gian rảnh, và hoạt động phổ biến theo từng nhóm.'
  },
  {
    id: 'en_u1_writing_6', exKey: 'writing', exTitle: 'Viết • Khảo sát Leisure Time', sourcePages: [19],
    questionText: 'Organise the survey report outline: state the number of students interviewed and the most popular activities for each category.',
    type: 'keypoint_checklist', totalPoints: 2,
    keypoints: [
      { pointNum: 1, title: 'State the sample size', template: 'Our group interviewed {number} students.', slots: [{ id: 'number', expected: 'some / a number of', options: ['some / a number of', 'one hundred thousand', 'no'] }] },
      { pointNum: 2, title: 'Summarise the findings', template: 'Report when they have free time and the most popular activities with {groups}.', slots: [{ id: 'groups', expected: 'family, friends, on their own, and activities they want to try in the future', options: ['family, friends, on their own, and activities they want to try in the future', 'teachers, exams, and classrooms', 'food, weather, and transport'] }] }
    ],
    fullSolution: 'Bài báo cáo cần nêu rõ nhóm đã phỏng vấn bao nhiêu bạn, thời gian rảnh của các bạn, hoạt động phổ biến nhất với gia đình, bạn bè, khi ở một mình và hoạt động các bạn muốn thử trong tương lai.'
  },
  {
    id: 'en_u1_writing_7', exKey: 'writing', exTitle: 'Viết • Từ gợi ý thành câu', sourcePages: [18],
    questionText: 'Choose the correct question from the cues (Looking Back Ex 2.2): “they / interested / play / badminton / after school?”.',
    options: [
      { text: 'Are they interested in playing badminton after school?', isCorrect: true },
      { text: 'Do they interested in play badminton after school?', isCorrect: false },
      { text: 'Are they interested to playing badminton after school?', isCorrect: false },
      { text: 'They are interested on playing badminton after school?', isCorrect: false }
    ], explanation: 'Câu hỏi với cấu trúc <em>be interested in + V-ing</em> đảo động từ <em>Are</em> lên đầu câu.'
  },
  {
    id: 'en_u1_writing_8', exKey: 'writing', exTitle: 'Viết • Từ gợi ý thành câu', sourcePages: [18],
    questionText: 'Complete the mini-dialogue from the cues (Looking Back Ex 2.4): “- why / you / not into / cook? - because / often / burn myself.”',
    options: [
      { text: 'Why are you not into cooking? — Because I often burn myself.', isCorrect: true },
      { text: 'Why you not into cook? — Because I often burn myself.', isCorrect: false },
      { text: 'Why do you not into cooking? — Because I often burn myself.', isCorrect: false },
      { text: 'Why are you not into to cook? — Because I often burn myself.', isCorrect: false }
    ], explanation: '<em>Be into + V-ing</em>; câu hỏi với <em>be</em> đảo <em>are</em> lên trước chủ ngữ.'
  },
  {
    id: 'en_u1_writing_9', exKey: 'writing', exTitle: 'Viết • Từ gợi ý thành câu', sourcePages: [18],
    questionText: 'Choose the complete sentence from the cues (Looking Back Ex 2.5): “my friends / keen / do judo / and / they / go / judo club / every Sunday”.',
    options: [
      { text: 'My friends are keen on doing judo, and they go to the judo club every Sunday.', isCorrect: true },
      { text: 'My friends keen on do judo, and they goes judo club every Sunday.', isCorrect: false },
      { text: 'My friends are keen in doing judo, and they go the judo club every Sunday.', isCorrect: false },
      { text: 'My friends are keen on to do judo, and they go to judo club every Sundays.', isCorrect: false }
    ], explanation: '<em>Be keen on + V-ing</em>; đến câu lạc bộ: <em>go to the judo club</em>.'
  },
  {
    id: 'en_u1_writing_10', exKey: 'writing', exTitle: 'Viết • Từ vựng trong ngữ cảnh', sourcePages: [18],
    questionText: 'Complete the passage about Ann (Looking Back Ex 4.1): “Ann is my best friend. She usually has free time at the weekend. She enjoys ________ at the riding club.” (1. ride)',
    options: [
      { text: 'riding a horse', isCorrect: true }, { text: 'to ride a horse', isCorrect: false }, { text: 'ride a horse', isCorrect: false }, { text: 'rode a horse', isCorrect: false }
    ], explanation: '<em>Enjoy</em> chỉ đi với V-ing: <em>riding a horse</em>.'
  },
  {
    id: 'en_u1_writing_12', exKey: 'writing', exTitle: 'Viết • Từ vựng trong ngữ cảnh', sourcePages: [18],
    questionText: 'Complete the passage about Ann (Looking Back Ex 4.2–3): “Sometimes, she likes (2. read) ________ or (3. message) ________.”',
    options: [
      { text: 'reading (books) or messaging (friends)', isCorrect: true },
      { text: 'read (books) or message (friends)', isCorrect: false },
      { text: 'to reading (books) or messaging (friends)', isCorrect: false },
      { text: 'reads (books) or messages (friends)', isCorrect: false }
    ], explanation: 'Sau <em>likes</em> dùng V-ing hoặc to-infinitive (ở đây cần chia song song hai động từ: <em>reading ... or messaging ...</em> hoặc <em>to read ... or to message ...</em>).'
  },
  {
    id: 'en_u1_writing_11', exKey: 'writing', exTitle: 'Viết • Từ vựng trong ngữ cảnh', sourcePages: [18],
    questionText: 'Complete the passage about Ann (Looking Back Ex 4.4–5): “She also loves (4. make) ________ and (5. knit) ________.”',
    options: [
      { text: 'making paper flowers and knitting', isCorrect: true }, { text: 'make paper flowers and to knit', isCorrect: false },
      { text: 'to making paper flowers and knit', isCorrect: false }, { text: 'made paper flowers and knitting', isCorrect: false }
    ], explanation: 'Hình 4 minh họa hoa giấy (<em>making paper flowers</em>) và hình 5 minh họa đan len (<em>knitting</em>) sau <em>loves</em>.'
  },
  {
    id: 'en_u1_writing_13', exKey: 'writing', exTitle: 'Viết • Từ vựng trong ngữ cảnh', sourcePages: [18],
    questionText: 'Complete the passage about Ann (Looking Back Ex 4.6): “However, there is one thing she doesn’t like doing in her free time. She dislikes (6. play) ________.”',
    options: [
      { text: 'playing badminton', isCorrect: true }, { text: 'to play badminton', isCorrect: false },
      { text: 'play badminton', isCorrect: false }, { text: 'played badminton', isCorrect: false }
    ], explanation: 'Hình 6 minh họa vợt cầu lông (<em>badminton</em>); <em>dislike</em> chỉ đi với V-ing → <em>playing badminton</em>.'
  }
];
