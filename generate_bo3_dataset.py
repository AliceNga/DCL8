import json

questions = []

# ==========================================
# PART 1: PHONETICS (10 CÂU)
# ==========================================
# Ex 3: Sound difference (5 câu)
phonetics_sound = [
    {
        "q": "Choose the word whose underlined part is pronounced differently from the others: <u>kn</u>ock, <u>k</u>ey, poc<u>k</u>et, mil<u>k</u>",
        "opts": [("A. knock", True), ("B. key", False), ("C. pocket", False), ("D. milk", False)],
        "exp": "<strong>knock</strong> có âm /k/ câm (silent k, phát âm là /nɒk/). Các từ còn lại phát âm là /k/."
    },
    {
        "q": "Choose the word whose underlined part is pronounced differently from the others: q<u>ueen</u>, sq<u>ua</u>re, q<u>ue</u>ue, q<u>ui</u>ck",
        "opts": [("A. queen", False), ("B. square", False), ("C. queue", True), ("D. quick", False)],
        "exp": "<strong>queue</strong> phát âm là /kjuː/ (qu phát âm là /k/). Các từ còn lại 'qu' phát âm là /kw/."
    },
    {
        "q": "Choose the word whose underlined part is pronounced differently from the others: <u>c</u>arrot, <u>c</u>ity, <u>c</u>ake, <u>c</u>lass",
        "opts": [("A. carrot", False), ("B. city", True), ("C. cake", False), ("D. class", False)],
        "exp": "<strong>city</strong> phát âm là /s/ (/ˈsɪti/). Các từ còn lại chữ c phát âm là /k/."
    },
    {
        "q": "Choose the word whose underlined part is pronounced differently from the others: <u>ch</u>opstick, <u>ch</u>icken, <u>ch</u>eek, <u>ch</u>aracter",
        "opts": [("A. chopstick", False), ("B. chicken", False), ("C. cheek", False), ("D. character", True)],
        "exp": "<strong>character</strong> có 'ch' phát âm là /k/ (/ˈkærəktər/). Các từ còn lại 'ch' phát âm là /tʃ/."
    },
    {
        "q": "Choose the word whose underlined part is pronounced differently from the others: a<u>g</u>e, <u>g</u>ive, <u>g</u>arden, <u>g</u>uitar",
        "opts": [("A. age", True), ("B. give", False), ("C. garden", False), ("D. guitar", False)],
        "exp": "<strong>age</strong> có 'g' phát âm là /dʒ/ (/eɪdʒ/). Các từ còn lại phát âm là /ɡ/."
    }
]

for idx, item in enumerate(phonetics_sound, 1):
    questions.append({
        "id": f"b3_phon_diff_{idx}",
        "exKey": "phonetics",
        "exTitle": "Part I: Phonetics - Odd Sound Out",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 4,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {item['q']}",
        "options": [{"text": t, "isCorrect": c} for t, c in item["opts"]],
        "explanation": item["exp"]
    })

# Ex 4: Stress difference (5 câu)
stress_items = [
    {
        "q": "Choose the word that differs from the other three in the position of primary stress: costume, diverse, feature, market",
        "opts": [("A. costume", False), ("B. diverse", True), ("C. feature", False), ("D. market", False)],
        "exp": "<strong>diverse</strong> /daɪˈvɜːs/ có trọng âm rơi vào âm tiết thứ 2. Các từ còn lại rơi vào âm tiết 1."
    },
    {
        "q": "Choose the word that differs from the other three in the position of primary stress: custom, livestock, highland, bamboo",
        "opts": [("A. custom", False), ("B. livestock", False), ("C. highland", False), ("D. bamboo", True)],
        "exp": "<strong>bamboo</strong> /bæmˈbuː/ có trọng âm rơi vào âm tiết thứ 2. Các từ còn lại rơi vào âm tiết 1."
    },
    {
        "q": "Choose the word that differs from the other three in the position of primary stress: diversity, pharmacy, establish, religious",
        "opts": [("A. diversity", False), ("B. pharmacy", True), ("C. establish", False), ("D. religious", False)],
        "exp": "<strong>pharmacy</strong> /ˈfɑːməsi/ có trọng âm rơi vào âm tiết thứ 1. Các từ còn lại rơi vào âm tiết 2."
    },
    {
        "q": "Choose the word that differs from the other three in the position of primary stress: overlook, plantation, religion, minority",
        "opts": [("A. overlook", True), ("B. plantation", False), ("C. religion", False), ("D. minority", False)],
        "exp": "<strong>overlook</strong> /ˌəʊvəˈlʊk/ có trọng âm chính rơi vào âm tiết thứ 3. Các từ còn lại rơi vào âm tiết 2."
    },
    {
        "q": "Choose the word that differs from the other three in the position of primary stress: peoples, poultry, preserve, worship",
        "opts": [("A. peoples", False), ("B. poultry", False), ("C. preserve", True), ("D. worship", False)],
        "exp": "<strong>preserve</strong> /prɪˈzɜːv/ có trọng âm rơi vào âm tiết thứ 2. Các từ còn lại rơi vào âm tiết 1."
    }
]

for idx, item in enumerate(stress_items, 1):
    questions.append({
        "id": f"b3_stress_{idx}",
        "exKey": "stress",
        "exTitle": "Part I: Phonetics - Word Stress",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 4,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {item['q']}",
        "options": [{"text": t, "isCorrect": c} for t, c in item["opts"]],
        "explanation": item["exp"]
    })

# ==========================================
# PART 2: VOCABULARY IN CONTEXT (10 CÂU - EX 4 TRANG 4)
# ==========================================
vocab_ex4 = [
    ("You can find a lot of traditional ________ houses in this area.", [("A. communal", False), ("B. stilt", True), ("C. ethnic", False), ("D. floating", False)], "<em>stilt houses</em>: nhà sàn truyền thống ở vùng núi."),
    ("Hoi An ancient town was recognized as a World Cultural ________ in 1999.", [("A. Heritage Site", True), ("B. Speciality", False), ("C. Subculture", False), ("D. Costumes", False)], "<em>World Heritage Site</em>: Di sản Thế giới."),
    ("If you go to Sapa, you can distinguish people from different ethnic groups by their ________.", [("A. bamboo", False), ("B. poultry", False), ("C. costumes", True), ("D. stilt", False)], "<em>costumes</em>: trang phục truyền thống giúp nhận biết các dân tộc."),
    ("Famous ________ rice fields can be found in Yen Bai, Ha Giang.", [("A. terraced", True), ("B. floating", False), ("C. communal", False), ("D. stilt", False)], "<em>terraced rice fields</em>: ruộng bậc thang nổi tiếng ở Yên Bái, Hà Giang."),
    ("Some ________ farmers keep ducks and geese in their farms.", [("A. costume", False), ("B. poultry", True), ("C. ethnic", False), ("D. heritage", False)], "<em>poultry farmers</em>: người chăn nuôi gia cầm (vịt, ngỗng)."),
    ("When we went on a trip to Tay Nguyen, we stayed in a ________ house with local people.", [("A. communal", True), ("B. poultry", False), ("C. floating", False), ("D. specialty", False)], "<em>communal house</em> (nhà rông): nhà sinh hoạt cộng đồng tại Tây Nguyên."),
    ("________ is a sustainable building material that is actually stronger than wood, bricks or even concrete.", [("A. Bamboo", True), ("B. Stilt", False), ("C. Terraced", False), ("D. Poultry", False)], "<em>Bamboo</em> (tre) là vật liệu xây dựng bền vững, dẻo dai."),
    ("There are 54 ________ groups in Viet Nam recognized by the Vietnamese government, and each has their own language, traditions, and subculture.", [("A. communal", False), ("B. ethnic", True), ("C. terraced", False), ("D. specialty", False)], "<em>ethnic groups</em>: các nhóm dân tộc ở Việt Nam."),
    ("If you visit the north-western region of Viet Nam, you must try five-coloured sticky rice which is well-known as a ________ of this area.", [("A. poultry", False), ("B. costume", False), ("C. speciality", True), ("D. communal", False)], "<em>speciality</em> (hoặc specialty): món ăn đặc sản vùng miền."),
    ("One of the most famous ________ markets in Viet Nam is Nga Bay floating market in Hau Giang province.", [("A. floating", True), ("B. stilt", False), ("C. terraced", False), ("D. bamboo", False)], "<em>floating markets</em>: chợ nổi đặc trưng miền Tây Nam Bộ.")
]

for idx, (q, opts, exp) in enumerate(vocab_ex4, 1):
    questions.append({
        "id": f"b3_vocab_ex4_{idx}",
        "exKey": "vocabulary",
        "exTitle": "Part II: Vocabulary - Complete Sentences",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 4,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

# ==========================================
# PART 3: GRAMMAR - PLURAL NOUNS & FORM (15 CÂU)
# ==========================================
grammar_plurals = [
    ("Give the plural form of 'buffalo':", [("A. buffalos", False), ("B. buffaloes", True), ("C. buffaloies", False), ("D. buffalies", False)], "buffalo &rarr; buffaloes (hoặc buffalo trong một số ngữ cảnh), quy tắc chuẩn thêm -es."),
    ("Give the plural form of 'leaf':", [("A. leafs", False), ("B. leaves", True), ("C. leafes", False), ("D. leavs", False)], "leaf kết thúc bằng -f &rarr; leaves."),
    ("Give the plural form of 'tooth':", [("A. tooths", False), ("B. teeth", True), ("C. teethes", False), ("D. toothes", False)], "tooth số nhiều bất quy tắc đổi thành teeth."),
    ("Give the plural form of 'goose':", [("A. gooses", False), ("B. geeses", False), ("C. geese", True), ("D. goosies", False)], "goose &rarr; geese."),
    ("Give the plural form of 'sheep':", [("A. sheeps", False), ("B. sheep", True), ("C. sheepes", False), ("D. sheepies", False)], "sheep giữ nguyên dạng số nhiều: sheep."),
    ("Put the word in brackets into correct form: Minority groups have their own musical ________ (instrument) like dan tinh and gong.", [("A. instruments", True), ("B. instrument", False), ("C. instrumentes", False), ("D. instrumenties", False)], "Sau 'their own' và có từ liệt kê dan tinh and gong nên danh từ ở số nhiều: instruments."),
    ("Put the word in brackets into correct form: The King use sticky ________ (rice) to make Banh Chung.", [("A. rices", False), ("B. rice", True), ("C. ricing", False), ("D. a rice", False)], "rice là danh từ không đếm được, giữ nguyên rice."),
    ("Put the word in brackets into correct form: My grandmother used to teach me many folk ________ (song).", [("A. songs", True), ("B. song", False), ("C. songes", False), ("D. songies", False)], "many + N số nhiều đếm được: songs."),
    ("Put the word in brackets into correct form: The staircase of a Muong's stilt house has an odd number of ________ (step) such as 5, 7 or 9.", [("A. step", False), ("B. steps", True), ("C. stepes", False), ("D. stepping", False)], "number of + N số nhiều: steps (bậc cầu thang)."),
    ("Put the word in brackets into correct form: A big stilt house stands on high ________ (post).", [("A. posts", True), ("B. post", False), ("C. postes", False), ("D. posties", False)], "stands on high posts (đứng trên các cột gỗ/cột nhà cao)."),
    ("Put the word in brackets into correct form: The Lahu build their houses from wood and wild banana ________ (leaf).", [("A. leafs", False), ("B. leaves", True), ("C. leafes", False), ("D. leavs", False)], "wild banana leaves (những chiếc lá chuối rừng)."),
    ("Put the word in brackets into correct form: Most minority ________ (woman) weave clothes and do housework.", [("A. womans", False), ("B. women", True), ("C. womens", False), ("D. womenn", False)], "Số nhiều của woman là women."),
    ("Put the word in brackets into correct form: In the mountains, there is not much ________ (land) for growing crops.", [("A. lands", False), ("B. land", True), ("C. a land", False), ("D. landes", False)], "land (đất đai) là danh từ không đếm được, sau much dùng land."),
    ("Put the word in brackets into correct form: The number of minority ________ (child) going to school is going up.", [("A. childs", False), ("B. childrens", False), ("C. children", True), ("D. child", False)], "Số nhiều của child là children."),
    ("Put the word in brackets into correct form: People in the mountains live close to ________ (nature).", [("A. natures", False), ("B. nature", True), ("C. a nature", False), ("D. natural", False)], "nature (thiên nhiên) là danh từ không đếm được, giữ nguyên nature.")
]

for idx, (q, opts, exp) in enumerate(grammar_plurals, 1):
    questions.append({
        "id": f"b3_grammar_plur_{idx}",
        "exKey": "grammar_nouns",
        "exTitle": "Part II: Grammar - Plural Forms & Countability",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 5,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

# ==========================================
# PART 4: AUXILIARY VERBS & QUESTION WORDS (15 CÂU - EX 4 & EX 6 TRANG 5)
# ==========================================
aux_and_wh = [
    ("Fill in the blank with correct auxiliary verb: ________ minority children usually learn to work at ten?", [("A. Does", False), ("B. Do", True), ("C. Are", False), ("D. Did", False)], "Chủ ngữ 'minority children' là số nhiều, động từ nguyên mẫu learn, câu hỏi hiện tại đơn dùng trợ động từ <strong>Do</strong>."),
    ("Fill in the blank: ________ a stilt house made from natural materials?", [("A. Does", False), ("B. Is", True), ("C. Are", False), ("D. Do", False)], "Câu bị động hiện tại đơn với 'a stilt house' số ít: <strong>Is</strong> a stilt house made from...?"),
    ("Fill in the blank: ________ the Music Festival occur annually?", [("A. Do", False), ("B. Does", True), ("C. Is", False), ("D. Are", False)], "Chủ ngữ 'the Music Festival' số ít, động từ nguyên mẫu occur, dùng trợ động từ <strong>Does</strong>."),
    ("Fill in the blank: ________ stilts house popular among different ethnic minority groups?", [("A. Are", True), ("B. Do", False), ("C. Is", False), ("D. Does", False)], "'stilts house' ở đây đóng vai trò vị ngữ với tính từ 'popular', câu to be số nhiều: <strong>Are</strong>..."),
    ("Fill in the blank: ________ the Bahnar and Ede have a communal house as the heart of their village?", [("A. Are", False), ("B. Do", True), ("C. Does", False), ("D. Is", False)], "Chủ ngữ số nhiều 'the Bahnar and Ede' với động từ thường 'have', dùng <strong>Do</strong>."),
    ("Fill in the blank: ________ your trip to Korea cost a lot of money last month?", [("A. Does", False), ("B. Did", True), ("C. Was", False), ("D. Were", False)], "Có trạng từ quá khứ 'last month' và động từ thường 'cost', dùng <strong>Did</strong>."),
    ("Fill in the blank: ________ it far from your town to the city centre?", [("A. Does", False), ("B. Is", True), ("C. Are", False), ("D. Did", False)], "Hỏi khoảng cách với tính từ 'far', dùng to be: <strong>Is</strong> it far from...?"),
    ("Fill in the blank: ________ the Khmer mostly earn their living from weaving and farming?", [("A. Do", True), ("B. Does", False), ("C. Are", False), ("D. Did", False)], "The Khmer (người Khmer, số nhiều) với động từ earn, dùng <strong>Do</strong>."),
    ("Fill in the blank: ________ these communal houses the largest and tallest ones in the village?", [("A. Do", False), ("B. Are", True), ("C. Is", False), ("D. Does", False)], "Chủ ngữ số nhiều 'these communal houses' với tính từ so sánh nhất 'the largest', dùng <strong>Are</strong>."),
    ("Fill in the blank: ________ you go to Ha Giang with your friend next week?", [("A. Did", False), ("B. Will", True), ("C. Do", False), ("D. Are", False)], "Có trạng từ tương lai 'next week' và động từ go, dùng <strong>Will</strong> you go...?"),
    ("Complete with suitable question word: '________ ethnic group has a larger population, the Ede or the Thai?' - 'The Thai.'", [("A. What", False), ("B. Which", True), ("C. Who", False), ("D. Whose", False)], "Lựa chọn giữa 2 đối tượng (the Ede or the Thai) dùng từ để hỏi <strong>Which</strong>."),
    ("Complete with suitable question word: '________ languages can you speak?' - 'Four languages.'", [("A. How many", True), ("B. How much", False), ("C. Which", False), ("D. What", False)], "Hỏi số lượng đếm được dùng <strong>How many</strong>."),
    ("Complete with suitable question word: '________ is the biggest house in the village?' - 'I think it's the communal house.'", [("A. Which", False), ("B. What", True), ("C. Where", False), ("D. When", False)], "Hỏi về sự vật, đặc điểm lớn nhất dùng <strong>What</strong> (hoặc Which)."),
    ("Complete with suitable question word: '________ books are on the table?' - 'Mine.'", [("A. Who", False), ("B. Whose", True), ("C. Whom", False), ("D. Which", False)], "Câu trả lời 'Mine' (Của tôi) hỏi về chủ sở hữu dùng <strong>Whose</strong>."),
    ("Complete with suitable question word: '________ is it from here to the campfire?' - 'Just about two kilometres.'", [("A. How long", False), ("B. How far", True), ("C. How often", False), ("D. How much", False)], "Hỏi khoảng cách (two kilometres) dùng <strong>How far</strong>.")
]

for idx, (q, opts, exp) in enumerate(aux_and_wh, 1):
    questions.append({
        "id": f"b3_aux_wh_{idx}",
        "exKey": "questions",
        "exTitle": "Part II: Grammar - Auxiliary Verbs & Wh-words",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 5,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

# ==========================================
# PART 5: MULTIPLE CHOICE PRACTICE (15 CÂU - EX 8 TRANG 6)
# ==========================================
mcq_ex8 = [
    ("My uncle works in ________ coffee plantation in Dak Lak.", [("A. a", True), ("B. an", False), ("C. some", False), ("D. much", False)], "Danh từ đếm được số ít 'coffee plantation' bắt đầu bằng phụ âm, dùng mạo từ <strong>a</strong>."),
    ("How ________ ethnic groups in Viet Nam do you know?", [("A. much", False), ("B. often", False), ("C. many", True), ("D. tall", False)], "ethnic groups là danh từ đếm được số nhiều, dùng <strong>many</strong>."),
    ("There are only ________ waterwheels left in this village.", [("A. much", False), ("B. some", False), ("C. a few", True), ("D. a little", False)], "waterwheels (guồng nước) là danh từ đếm được số nhiều, sau only dùng <strong>a few</strong>."),
    ("You can get ________ information if you go to the museum with me.", [("A. a lot of", True), ("B. many", False), ("C. a", False), ("D. any", False)], "information là danh từ không đếm được. Trong câu khẳng định dùng <strong>a lot of</strong>."),
    ("________ stilt houses stand on wood, bamboo, and ________.", [("A. Do - leaf", False), ("B. Does - leaves", False), ("C. Do - leaves", True), ("D. Does - leaf", False)], "Câu hỏi với stilt houses (số nhiều) dùng Do, và số nhiều của leaf là leaves."),
    ("________ your grandmother like folk ________?", [("A. Do - music", False), ("B. Do - musics", False), ("C. Does - music", True), ("D. Is - music", False)], "grandmother là số ít dùng Does, music là danh từ không đếm được."),
    ("________ there 54 ethnic groups in Viet Nam?", [("A. Are", True), ("B. Is", False), ("C. Do", False), ("D. Does", False)], "There are chuyển sang nghi vấn: <strong>Are</strong> there 54 ethnic groups...?"),
    ("Do Vietnamese ________ often eat moon cakes at the Mid-Autumn Festival?", [("A. person", False), ("B. people", True), ("C. persons", False), ("D. peoples", False)], "Vietnamese people = người Việt Nam."),
    ("Among mountainous regions in Viet Nam, ________ one will you want to travel to?", [("A. what", False), ("B. when", False), ("C. how", False), ("D. which", True)], "Lựa chọn trong một nhóm đối tượng xác định dùng <strong>which</strong> one."),
    ("________ did you go with last year when you participated in the Hoa Ban festival?", [("A. Whom", True), ("B. When", False), ("C. Where", False), ("D. Whose", False)], "Hỏi về tân ngữ người đi cùng (go with) dùng <strong>Whom</strong> (hoặc Who)."),
    ("________ does it cost to visit this bamboo village?", [("A. How many", False), ("B. How much", True), ("C. How often", False), ("D. How", False)], "Hỏi về chi phí giá cả (cost) dùng <strong>How much</strong> does it cost...?"),
    ("We are going to cook Vietnamese food including ________ and ________.", [("A. fried rices / beef noodle soup", False), ("B. fried rice / beef noodle soups", False), ("C. fried rice / beef noodle soup", True), ("D. fried rices / beef noodle soups", False)], "fried rice và beef noodle soup đóng vai trò danh từ chỉ tên món ăn/thực phẩm không đếm được."),
    ("I'll make a tuna ________ for you.", [("A. sandwiches", False), ("B. sandwichs", False), ("C. sandwhiches", False), ("D. sandwich", True)], "Sau mạo từ 'a' dùng danh từ đếm được số ít: <strong>sandwich</strong>."),
    ("My grandfather raised ________.", [("A. some deer", True), ("B. a few deers", False), ("C. much deer", False), ("D. many deers", False)], "deer là danh từ số nhiều không thêm s, raised <strong>some deer</strong>."),
    ("Vietnamese people are used to using ________ when having meals.", [("A. chopstick", False), ("B. chopsticks", True), ("C. chopstickes", False), ("D. chopstiekces", False)], "chopsticks (đôi đũa) luôn dùng ở dạng số nhiều.")
]

for idx, (q, opts, exp) in enumerate(mcq_ex8, 1):
    questions.append({
        "id": f"b3_mcq_ex8_{idx}",
        "exKey": "multiple_choice",
        "exTitle": "Part II: Grammar - Multiple Choice Exercise",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 6,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

# ==========================================
# PART 6: QUESTION TRANSFORMATION & BUILDING (15 CÂU - EX 3 & 5 TRANG 7)
# ==========================================
transforms = [
    ("Transform into Yes/No Question: 'The local people walk to the market every day.'", [("A. Do the local people walk to the market every day?", True), ("B. Does the local people walk to the market every day?", False), ("C. Are the local people walk to the market every day?", False), ("D. Did the local people walk to the market every day?", False)], "Chủ ngữ số nhiều 'The local people', hiện tại đơn dùng trợ động từ <strong>Do</strong>."),
    ("Transform into Yes/No Question: 'Artists from the Central Highlands will give Gong performances in the festival.'", [("A. Will artists from the Central Highlands give Gong performances in the festival?", True), ("B. Do artists from the Central Highlands will give Gong performances in the festival?", False), ("C. Are artists from the Central Highlands give Gong performances in the festival?", False), ("D. Did artists from the Central Highlands give Gong performances in the festival?", False)], "Đảo trợ động từ khiếm khuyết <strong>Will</strong> lên đầu câu."),
    ("Transform into Yes/No Question: 'The Hoa Ban Festival takes place in Lai Chau.'", [("A. Does the Hoa Ban Festival take place in Lai Chau?", True), ("B. Do the Hoa Ban Festival takes place in Lai Chau?", False), ("C. Is the Hoa Ban Festival takes place in Lai Chau?", False), ("D. Did the Hoa Ban Festival take place in Lai Chau?", False)], "Chủ ngữ số ít 'The Hoa Ban Festival', hiện tại đơn dùng <strong>Does</strong> và đưa động từ về nguyên mẫu 'take'."),
    ("Transform into Yes/No Question: 'It is three kilometres from the village to the nearest river.'", [("A. Is it three kilometres from the village to the nearest river?", True), ("B. Does it three kilometres from the village to the nearest river?", False), ("C. Do it three kilometres from the village to the nearest river?", False), ("D. Was it three kilometres from the village to the nearest river?", False)], "Đảo to be <strong>Is</strong> lên đầu câu."),
    ("Transform into Yes/No Question: 'I have been to Sapa several times.'", [("A. Have you been to Sapa several times?", True), ("B. Did you have been to Sapa several times?", False), ("C. Do you have been to Sapa several times?", False), ("D. Were you been to Sapa several times?", False)], "Đảo trợ động từ hoàn thành <strong>Have</strong> lên đầu câu và chuyển 'I' thành 'you'."),
    ("Transform into Yes/No Question: 'The girls with a shawl on their heads are members of the Thai.'", [("A. Are the girls with a shawl on their heads members of the Thai?", True), ("B. Do the girls with a shawl on their heads members of the Thai?", False), ("C. Is the girls with a shawl on their heads members of the Thai?", False), ("D. Were the girls with a shawl on their heads members of the Thai?", False)], "Đảo to be <strong>Are</strong> lên đầu câu."),
    ("Transform into Yes/No Question: 'We can find terraced fields in the northern mountainous regions.'", [("A. Can we find terraced fields in the northern mountainous regions?", True), ("B. Do we can find terraced fields in the northern mountainous regions?", False), ("C. Are we find terraced fields in the northern mountainous regions?", False), ("D. Could we find terraced fields in the northern mountainous regions?", False)], "Đảo động từ khuyết thiếu <strong>Can</strong> lên đầu câu."),
    ("Transform into Yes/No Question: 'They built their houses on stilts to prevent flooding from tides or storms.'", [("A. Did they build their houses on stilts to prevent flooding from tides or storms?", True), ("B. Do they built their houses on stilts to prevent flooding from tides or storms?", False), ("C. Were they build their houses on stilts to prevent flooding from tides or storms?", False), ("D. Did they built their houses on stilts to prevent flooding from tides or storms?", False)], "Quá khứ đơn dùng <strong>Did</strong> và đưa built về nguyên mẫu <strong>build</strong>."),
    ("Transform into Yes/No Question: 'The Tay are the earliest known minority in Viet Nam.'", [("A. Are the Tay the earliest known minority in Viet Nam?", True), ("B. Do the Tay the earliest known minority in Viet Nam?", False), ("C. Is the Tay the earliest known minority in Viet Nam?", False), ("D. Were the Tay the earliest known minority in Viet Nam?", False)], "Đảo to be <strong>Are</strong> lên đầu câu."),
    ("Transform into Yes/No Question: 'The population of the Tay ethnic group is about 1.7 million.'", [("A. Is the population of the Tay ethnic group about 1.7 million?", True), ("B. Does the population of the Tay ethnic group is about 1.7 million?", False), ("C. Do the population of the Tay ethnic group about 1.7 million?", False), ("D. Was the population of the Tay ethnic group about 1.7 million?", False)], "Đảo to be <strong>Is</strong> lên đầu câu."),
    ("Write question from clues: 'How / you / live / this / mountainous / village? - For 2 years.'", [("A. How long have you lived in this mountainous village?", True), ("B. How do you live in this mountainous village?", False), ("C. How often do you live in this mountainous village?", False), ("D. How long did you live in this mountainous village?", False)], "Hỏi về khoảng thời gian (For 2 years) kéo dài đến hiện tại dùng thì HTHT: <strong>How long have you lived in this mountainous village?</strong>"),
    ("Write question from clues: 'Why / you / want / visit / National / Museum?'", [("A. Why do you want to visit the National Museum?", True), ("B. Why you want to visit the National Museum?", False), ("C. Why are you want visit the National Museum?", False), ("D. Why did you wanted to visit the National Museum?", False)], "Cấu trúc: <strong>Why do you want to visit the National Museum?</strong>"),
    ("Write question from clues: 'the / Rong / house / serve / centre / Ede / house?'", [("A. Does the Rong house serve as the centre of the village?", True), ("B. Is the Rong house serve as centre of Ede house?", False), ("C. Do the Rong house serve centre of Ede house?", False), ("D. Does Rong house serves centre Ede house?", False)], "Rong house số ít dùng <strong>Does the Rong house serve as...</strong>"),
    ("Write question from clues: 'the / Cham / Ninh Thuan / raise / sheep / cows?'", [("A. Do the Cham in Ninh Thuan raise sheep and cows?", True), ("B. Does the Cham in Ninh Thuan raise sheep and cows?", False), ("C. Are the Cham in Ninh Thuan raise sheep and cows?", False), ("D. Did the Cham in Ninh Thuan raised sheep and cows?", False)], "The Cham số nhiều dùng trợ động từ <strong>Do</strong>."),
    ("Write question from clues: 'How / three-day / trip / Mu Cang Chai / cost?'", [("A. How much does a three-day trip to Mu Cang Chai cost?", True), ("B. How long does a three-day trip to Mu Cang Chai cost?", False), ("C. How much is a three-day trip to Mu Cang Chai costs?", False), ("D. How far does a three-day trip to Mu Cang Chai cost?", False)], "Hỏi chi phí chuyến đi 3 ngày dùng: <strong>How much does a three-day trip to Mu Cang Chai cost?</strong>")
]

for idx, (q, opts, exp) in enumerate(transforms, 1):
    questions.append({
        "id": f"b3_trans_{idx}",
        "exKey": "transformation",
        "exTitle": "Part II: Grammar - Question Transformations & Building",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 7,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

# ==========================================
# PART 7: READING COMPREHENSION & PASSAGES (15 CÂU - TRANG 8, 9, 10)
# ==========================================
# Reading 1: 54 Ethnic Groups Passage (Q1 - 5)
reading1_context = """
<div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
  <div class="font-black text-center text-amber-950 uppercase tracking-wide mb-2 text-sm">
    THE 54 ETHNIC GROUPS OF VIET NAM
  </div>
  <p>
    Viet Nam is a multi-nationality country with 54 ethnic groups. The Viet (Kinh) people account for 87% of the country's population and mainly inhabit the Red River delta, the central coastal delta, the Mekong delta and major cities. The other 53 ethnic minority groups, totalling over 8 million people, are scattered over mountain areas spreading from the North to the South.
  </p>
  <p class="mt-2">
    Among ethnic minorities, the largest ones are Tay, Thai, Muong, Hoa, Khmer, and Nung with a population of around 1 million each, while the smallest are Brau, Roman, Odu with several hundred people each. A number of ethnic minorities had mastered farming techniques such as growing wet rice in terraced fields. Others lived a semi-nomadic life and engaged in hunting, fishing and collecting.
  </p>
</div>
"""

reading1_items = [
    ("What percentage of the population does the Viet (Kinh) people account for?", [("A. 87%", True), ("B. 54%", False), ("C. 8 million", False), ("D. 13%", False)], "Trích bài đọc: 'The Viet (Kinh) people account for 87% of the country's population.'"),
    ("Where do the other 53 ethnic minority groups mainly live?", [("A. Major cities only", False), ("B. Scattered over mountain areas", True), ("C. Red River delta only", False), ("D. Central coastal delta only", False)], "Trích: 'scattered over mountain areas spreading from the North to the South.'"),
    ("Which of the following ethnic minority groups has a population of around 1 million each?", [("A. Brau, Roman, Odu", False), ("B. Tay, Thai, Muong, Hoa, Khmer, and Nung", True), ("C. Only the Kinh", False), ("D. Only the Odu", False)], "Trích: 'the largest ones are Tay, Thai, Muong, Hoa, Khmer, and Nung with a population of around 1 million each.'"),
    ("Which are the smallest ethnic groups with several hundred people each?", [("A. Brau, Roman, Odu", True), ("B. Tay, Thai, Muong", False), ("C. Khmer, Nung", False), ("D. Kinh, Dao", False)], "Trích: 'while the smallest are Brau, Roman, Odu with several hundred people each.'"),
    ("How did some ethnic groups who lived a semi-nomadic life get food?", [("A. Working in factories", False), ("B. By hunting, fishing and collecting", True), ("C. By buying from supermarkets", False), ("D. Only by planting corn", False)], "Trích: 'engaged in hunting, fishing and collecting.'")
]

for idx, (q, opts, exp) in enumerate(reading1_items, 1):
    questions.append({
        "id": f"b3_read1_{idx}",
        "exKey": "reading_54_ethnic",
        "exTitle": "Part III: Reading Comprehension - 54 Ethnic Groups",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 8,
        "readingContext": reading1_context,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

# Reading 2: The Dao Ethnic Group (Q6 - 10)
reading2_context = """
<div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
  <div class="font-black text-center text-teal-950 uppercase tracking-wide mb-2 text-sm">
    THE DAO ETHNIC GROUP IN VIET NAM
  </div>
  <p>
    The Dao ethnic group, which has many names such as Động, Trại, Dìu Miền, and Kim Miền, has a total population of nearly 1 million people. They live mainly in the northern mountain provinces of Cao Bang, Ha Giang, Lao Cai, Yen Bai, Lai Chau and Tuyen Quang and the midland provinces of Phu Tho, Vinh Phuc, and Hoa Binh.
  </p>
  <p class="mt-2">
    There are many subgroups differentiated by habits, customs, and costumes: the Red Dao, Dao Quần Chẹt, Dao Lô Ga, White Pants Dao, and Dao Thanh Y. Each Dao group is easily identified by their costumes. Generally, a woman's costume includes a shirt, skirt, headscarf, a pair of leggings, and jewellery. The Red Dao people wear red costumes from top to toe. The Dao Quan Chat are also called Sơn Đầu because the women shave off their hair, paint their heads, and cover their heads with traditional headscarves. The White Pants Dao always wear white pants.
  </p>
</div>
"""

reading2_items = [
    ("Which ethnic group is mentioned in the passage?", [("A. the Viet Kinh", False), ("B. the Dao", True), ("C. the Thai", False), ("D. the Ede", False)], "Bài đọc nói về nhóm dân tộc Dao (The Dao ethnic group)."),
    ("Which of the following provinces is NOT mentioned as the place they live in the passage?", [("A. Ha Giang", False), ("B. Phu Tho", False), ("C. Lai Chau", False), ("D. Ca Mau", True)], "Cà Mau ở cực Nam, không thuộc vùng cư trú phía Bắc được nêu trong bài."),
    ("How is each Dao group easily identified?", [("A. By their costumes", True), ("B. By their traditions", False), ("C. By their appearance", False), ("D. By their language", False)], "Trích bài đọc: 'Each Dao group is easily identified by their costumes.'"),
    ("Which of the following is TRUE according to the passage?", [("A. A man wears a long shirt with a line of buttons.", False), ("B. The Dao ethnic group has a total population of nearly 1.5 million people.", False), ("C. The Dao speak one language and have many subgroups.", True), ("D. The Red Dao people wear red costumes from top to knee.", False)], "Dân số gần 1 triệu (không phải 1.5 triệu), họ có chung một ngôn ngữ và chia thành nhiều nhóm nhỏ đặc sắc."),
    ("Why are the Dao Quan Chat called Sơn Đầu?", [("A. Because the women shave off their hair, paint their heads, and cover their heads with traditional headscarves.", True), ("B. Because a woman's costume includes a shirt, skirt, headscarf.", False), ("C. Because they are the only Dao group who wear skirts with coins.", False), ("D. Because they live in many different localities.", False)], "Trích bài: 'The Dao Quan Chat are also called Sơn Đầu because the women shave off their hair, paint their heads, and cover their heads with traditional headscarves.'")
]

for idx, (q, opts, exp) in enumerate(reading2_items, 1):
    questions.append({
        "id": f"b3_read2_{idx}",
        "exKey": "reading_dao",
        "exTitle": "Part III: Reading Comprehension - The Dao Ethnic Group",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 9,
        "readingContext": reading2_context,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

# Reading 3: The H'mong Cloze (Q11 - 15)
reading3_context = """
<div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-slate-800 leading-relaxed font-sans mb-3">
  <div class="font-black text-center text-indigo-950 uppercase tracking-wide mb-2 text-sm">
    THE H'MONG PEOPLE IN VIET NAM
  </div>
  <p>
    The Hmong, or Meo, who number about 800,000, are found in villages known as giao throughout the (1) ________ of northern Viet Nam. The Hmong group has been subdivided into branches classified by women's (2) ________, dialect and customs. (3) ________ is the main staple of Hmong people, but rice is often grown on terraces. As skilled (4) ________, the Hmong produce a variety of items, including handwoven indigo-dyed cloth. The Hmong have no written (5) ________; their legends and folklore have been passed down through the spoken word.
  </p>
</div>
"""

reading3_items = [
    ("Choose the best word for blank (1): 'throughout the (1) ________ of northern Viet Nam'", [("A. highlands", True), ("B. corn", False), ("C. language", False), ("D. goods", False)], "Vùng cao nguyên phía Bắc: highlands."),
    ("Choose the best word for blank (2): 'classified by women's (2) ________, dialect and customs'", [("A. costume", True), ("B. minority", False), ("C. artisans", False), ("D. goods", False)], "Trang phục phụ nữ: costume."),
    ("Choose the best word for blank (3): '(3) ________ is the main staple of Hmong people'", [("A. Corn", True), ("B. Language", False), ("C. Artisans", False), ("D. Goods", False)], "Ngô (bắp) là lương thực chính: Corn."),
    ("Choose the best word for blank (4): 'As skilled (4) ________, the Hmong produce a variety of items'", [("A. artisans", True), ("B. minority", False), ("C. language", False), ("D. highlands", False)], "Nghệ nhân khéo tay: skilled artisans."),
    ("Choose the best word for blank (5): 'The Hmong have no written (5) ________'", [("A. language", True), ("B. costume", False), ("C. goods", False), ("D. corn", False)], "Không có chữ viết riêng trong quá khứ: no written language.")
]

for idx, (q, opts, exp) in enumerate(reading3_items, 1):
    questions.append({
        "id": f"b3_read3_{idx}",
        "exKey": "reading_hmong",
        "exTitle": "Part III: Reading Cloze - The H'mong",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 10,
        "readingContext": reading3_context,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

# ==========================================
# PART 8: WRITING - MAKE QUESTIONS FOR UNDERLINED WORDS (15 CÂU - TRANG 10)
# ==========================================
writing_items = [
    ("Make question for underlined part: 'We want to present <u class=\"text-indigo-600 font-bold\">some interesting facts about the ethnic groups of Viet Nam</u>.'", [("A. What do you want to present?", True), ("B. Who wants to present some interesting facts?", False), ("C. How do you want to present some interesting facts?", False), ("D. When do you want to present some interesting facts?", False)], "Hỏi về nội dung muốn thuyết trình (some interesting facts...): What do you want to present?"),
    ("Make question for underlined part: 'The Tay don't allow guests to sit in the room of <u class=\"text-indigo-600 font-bold\">their altar</u>.'", [("A. Where don't the Tay allow guests to sit?", True), ("B. Why don't the Tay allow guests to sit in the altar room?", False), ("C. Whose altar do the Tay sit in?", False), ("D. What room don't the Tay allow guests to sit in?", False)], "Hỏi về địa điểm phòng đặt bàn thờ (in the room of their altar): Where don't the Tay allow guests to sit?"),
    ("Make question for underlined part: 'My mother bought a costume of the Bahnar <u class=\"text-indigo-600 font-bold\">at an open-air market in Kon Tum</u>.'", [("A. Where did your mother buy a costume of the Bahnar?", True), ("B. What did your mother buy in Kon Tum?", False), ("C. When did your mother buy a costume of the Bahnar?", False), ("D. How did your mother buy a costume of the Bahnar?", False)], "Hỏi về nơi chốn (at an open-air market in Kon Tum) trong quá khứ: Where did your mother buy...?"),
    ("Make question for underlined part: 'They dug canals <u class=\"text-indigo-600 font-bold\">to bring water to their rice fields</u>.'", [("A. What did they dig canals for?", True), ("B. Where did they dig canals?", False), ("C. When did they dig canals?", False), ("D. Who dug canals?", False)], "Hỏi mục đích (to bring water...) dùng Why did they dig canals? hoặc What did they dig canals for?"),
    ("Make question for underlined part: 'The Kinh speak <u class=\"text-indigo-600 font-bold\">Vietnamese language</u>.'", [("A. What language do the Kinh speak?", True), ("B. How do the Kinh speak Vietnamese?", False), ("C. Where do the Kinh speak Vietnamese language?", False), ("D. Why do the Kinh speak Vietnamese language?", False)], "Hỏi ngôn ngữ: What language do the Kinh speak?"),
    ("Make question for underlined part: 'The Khmer have <u class=\"text-indigo-600 font-bold\">three</u> main festivals in a year.'", [("A. How many main festivals do the Khmer have in a year?", True), ("B. How much main festivals do the Khmer have in a year?", False), ("C. Which main festivals do the Khmer have in a year?", False), ("D. What festivals do the Khmer have in a year?", False)], "Hỏi số lượng lễ hội (three): How many main festivals do the Khmer have in a year?"),
    ("Make question for underlined part: 'The visitors can get to the Cat Cat village <u class=\"text-indigo-600 font-bold\">by motorbikes</u>.'", [("A. How can the visitors get to the Cat Cat village?", True), ("B. What can the visitors get to the Cat Cat village by?", False), ("C. When can the visitors get to the Cat Cat village?", False), ("D. Where can the visitors get to the Cat Cat village?", False)], "Hỏi phương tiện đi lại (by motorbikes): How can the visitors get to the Cat Cat village?"),
    ("Make question for underlined part: 'The stilt house is made <u class=\"text-indigo-600 font-bold\">from wood, bamboo and leaves</u>.'", [("A. What is the stilt house made from?", True), ("B. How is the stilt house made?", False), ("C. Where is the stilt house made?", False), ("D. Why is the stilt house made?", False)], "Hỏi về chất liệu tạo nên ngôi nhà sàn: What is the stilt house made from?"),
    ("Make question for underlined part: 'The communal house is used for <u class=\"text-indigo-600 font-bold\">village meetings and festivals</u>.'", [("A. What is the communal house used for?", True), ("B. Where is the communal house used?", False), ("C. When is the communal house used?", False), ("D. Who uses the communal house?", False)], "Hỏi công năng sử dụng của nhà rông: What is the communal house used for?"),
    ("Make question for underlined part: 'The Thai people live in <u class=\"text-indigo-600 font-bold\">stilt houses</u>.'", [("A. What kind of houses do the Thai people live in?", True), ("B. Where do the Thai people live?", False), ("C. How do the Thai people live in stilt houses?", False), ("D. When do the Thai people live in stilt houses?", False)], "Hỏi loại nhà ở: What kind of houses do the Thai people live in?"),
    ("Make question for underlined part: 'The festival takes place <u class=\"text-indigo-600 font-bold\">in spring</u> every year.'", [("A. When does the festival take place every year?", True), ("B. Where does the festival take place every year?", False), ("C. Why does the festival take place every year?", False), ("D. What does the festival take place every year?", False)], "Hỏi về thời gian (in spring): When does the festival take place every year?"),
    ("Make question for underlined part: 'There are <u class=\"text-indigo-600 font-bold\">54</u> ethnic groups in Viet Nam.'", [("A. How many ethnic groups are there in Viet Nam?", True), ("B. How much ethnic groups are there in Viet Nam?", False), ("C. Which ethnic groups are there in Viet Nam?", False), ("D. What ethnic groups are there in Viet Nam?", False)], "Hỏi số lượng 54: How many ethnic groups are there in Viet Nam?"),
    ("Make question for underlined part: 'The local people weave cloth <u class=\"text-indigo-600 font-bold\">by hand</u>.'", [("A. How do the local people weave cloth?", True), ("B. Why do the local people weave cloth?", False), ("C. What do the local people weave cloth by?", False), ("D. Where do the local people weave cloth?", False)], "Hỏi cách thức dệt vải (by hand): How do the local people weave cloth?"),
    ("Make question for underlined part: 'The Red Dao women wear red scarves <u class=\"text-indigo-600 font-bold\">to bring good luck</u>.'", [("A. Why do the Red Dao women wear red scarves?", True), ("B. How do the Red Dao women wear red scarves?", False), ("C. When do the Red Dao women wear red scarves?", False), ("D. Where do the Red Dao women wear red scarves?", False)], "Hỏi nguyên nhân, mục đích (to bring good luck): Why do the Red Dao women wear red scarves?"),
    ("Make question for underlined part: 'The ethnic market opens <u class=\"text-indigo-600 font-bold\">every Sunday morning</u>.'", [("A. How often does the ethnic market open?", True), ("B. How long does the ethnic market open?", False), ("C. Where does the ethnic market open?", False), ("D. What does the ethnic market open?", False)], "Hỏi tần suất (every Sunday morning): How often does the ethnic market open? (hoặc When does it open?)")
]

for idx, (q, opts, exp) in enumerate(writing_items, 1):
    questions.append({
        "id": f"b3_writing_{idx}",
        "exKey": "writing_questions",
        "exTitle": "Part IV: Writing - Make Questions for Underlined Words",
        "examCode": "Bộ 3 - Unit 4 Practice",
        "page": 10,
        "questionText": f"<strong>Question {len(questions)+1}.</strong> {q}",
        "options": [{"text": t, "isCorrect": c} for t, c in opts],
        "explanation": exp
    })

print(f"Generated {len(questions)} questions.")

js_content = f"""/**
 * BỘ 3: TÀI LIỆU CHỦ ĐỀ & BÀI TẬP — TOPIC 4: ETHNIC GROUPS OF VIET NAM (10 Trang)
 * Ảnh chụp ngày: 10T11 (Học thêm trên lớp môn Tiếng Anh)
 * 
 * Tổng hợp 100 câu trắc nghiệm & bài tập nâng cao phân bổ đều qua 7 trang bài tập:
 * - Part 1: Phonetics (Odd Sound Out & Word Stress - 10 câu)
 * - Part 2: Vocabulary in Context (Complete Sentences - 10 câu)
 * - Part 3: Grammar - Plural Nouns & Countability (15 câu)
 * - Part 4: Auxiliary Verbs & Wh-words (15 câu)
 * - Part 5: Multiple Choice Practice (15 câu)
 * - Part 6: Question Transformations & Sentence Building (15 câu)
 * - Part 7: Reading Comprehension (54 Ethnic Groups, The Dao, The H'mong - 15 câu)
 * - Part 8: Writing - Make Questions for Underlined Words (15 câu)
 */

window.EXAM_TOPIC4_BO3_DATABASE = {json.dumps(questions, ensure_ascii=False, indent=2)};
"""

with open("data/tienganh_unit4_bo3.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Saved to data/tienganh_unit4_bo3.js successfully!")
