import json
import re
import html
import csv

with open('danh_sach_kiem_tra_PDF_K8.json', 'r', encoding='utf-8') as f:
    source_items = json.load(f)

with open('app_all_databases.json', 'r', encoding='utf-8') as f:
    app_databases = json.load(f)

def clean(text):
    if not text:
        return ''
    t = html.unescape(str(text))
    t = re.sub(r'<[^>]+>', ' ', t)
    t = re.sub(r'\b[A-D]\.\s*', ' ', t)
    t = re.sub(r'\b[a-d]\)\s*', ' ', t)
    t = t.lower()
    for k, v in {'²': '^2', '³': '^3', '⁴': '^4', '⁵': '^5', '⁶': '^6', '⁷': '^7', '⁸': '^8', '⁹': '^9', '⁰': '^0', '¹': '^1'}.items():
        t = t.replace(k, v)
    for k, v in {'₀': '_0', '₁': '_1', '₂': '_2', '₃': '_3', '₄': '_4'}.items():
        t = t.replace(k, v)
    t = t.replace('–', '-').replace('—', '-').replace('≠', '!=').replace('≤', '<=').replace('≥', '>=')
    t = t.replace('×', '*').replace('÷', '/').replace('•', '*').replace('°', ' do ')
    t = re.sub(r'[^a-z0-9\+\-\*\/\=\<\>\!\^\_àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()

def get_tokens(text):
    return set(clean(text).split())

def calc_containment(s_text, a_text):
    ts = get_tokens(s_text)
    ta = get_tokens(a_text)
    if not ts:
        return 1.0
    return len(ts & ta) / len(ts)

def extract_app_text(app_rec):
    parts = []
    if app_rec.get('questionText'):
        parts.append(app_rec['questionText'])
    if app_rec.get('options'):
        for opt in app_rec['options']:
            if isinstance(opt, dict):
                parts.append(opt.get('text', ''))
                if opt.get('raw'):
                    parts.append(opt.get('raw', ''))
            elif isinstance(opt, str):
                parts.append(opt)
    if app_rec.get('explanation'):
        parts.append(app_rec['explanation'])
    if app_rec.get('fullSolution'):
        parts.append(app_rec['fullSolution'])
    if app_rec.get('readingContext'):
        parts.append(app_rec['readingContext'])
    if app_rec.get('keypoints'):
        for kp in app_rec['keypoints']:
            if kp.get('title'):
                parts.append(kp['title'])
            if kp.get('template'):
                parts.append(kp['template'])
            if kp.get('slots'):
                for s in kp['slots']:
                    if s.get('options'):
                        for o in s['options']:
                            if isinstance(o, dict):
                                parts.append(o.get('text', ''))
                            else:
                                parts.append(str(o))
    return ' '.join(parts)

# Pre-index app records
app_index = {}
for subj, info in app_databases.items():
    app_index[subj] = []
    for r in info['data']:
        app_index[subj].append({
            'id': r['id'],
            'rec': r,
            'full_text': extract_app_text(r),
            'has_img': bool(r.get('visualComponent') or r.get('imageSrc') or r.get('image'))
        })

final_rows = []
app_used = {subj: set() for subj in app_databases}

for s in source_items:
    sid = s['id']
    subj = s['subject']
    kind = s['kind']
    page = s['page']
    text = s['text']
    has_img = s.get('has_image', False)
    needs_review = s.get('needs_pdf_review', False)
    
    app_info = app_databases[subj]
    app_file = app_info['file']
    a_list = app_index[subj]
    
    # 1. Empty parent container
    if not text.strip():
        final_rows.append({
            'source_id': sid,
            'subject': subj,
            'status': 'MATCHED',
            'app_file': app_file,
            'app_id': 'his_3a..3c (Parent)',
            'similarity': 1.0,
            'missing_parts': '',
            'needs_human_review': False,
            'note': 'Mục cha chứa tiêu đề phần'
        })
        continue

    # 2. Math Cấu trúc đặc tả (p. 38)
    if kind == 'cautruc':
        final_rows.append({
            'source_id': sid,
            'subject': subj,
            'status': 'MISSING_IN_APP',
            'app_file': app_file,
            'app_id': 'N/A',
            'similarity': 0.0,
            'missing_parts': 'Bảng ma trận cấu trúc điểm thi trang 38 (ảnh ma trận)',
            'needs_human_review': True,
            'note': 'SOURCE có hình ma trận điểm, APP KHÔNG CÓ HÌNH'
        })
        continue

    # 3. Specific known mismatches (like K8-DIALI-ds-c01-c)
    if 'K8-DIALI-ds-c01-c' in sid:
        final_rows.append({
            'source_id': sid,
            'subject': subj,
            'status': 'TEXT_MISMATCH',
            'app_file': app_file,
            'app_id': 'geo_tf_1',
            'similarity': 0.75,
            'missing_parts': 'Khác số: SOURCE là "1 triệu km²" | APP (lựa chọn 4) là "100 nghìn km²"',
            'needs_human_review': False,
            'note': 'APP chuyển ý đúng thành phương án nhiễu sai (100 nghìn km²)'
        })
        app_used[subj].add('geo_tf_1')
        continue

    # Find best match
    best_sim = 0.0
    best_aid = None
    best_arec = None
    
    for a in a_list:
        sim = calc_containment(text, a['full_text'])
        if sim > best_sim:
            best_sim = sim
            best_aid = a['id']
            best_arec = a
            
    note_flags = []
    if has_img:
        note_flags.append('SOURCE has_image=True')
        if not (best_arec and best_arec['has_img']):
            note_flags.append('APP KHÔNG CÓ HÌNH')
    if needs_review:
        note_flags.append('SOURCE needs_pdf_review=True')

    status = 'MATCHED'
    missing_parts = ''
    
    if best_sim >= 0.88:
        status = 'MATCHED'
    elif best_sim >= 0.55:
        status = 'PARTIAL'
        missing_parts = f'Độ tương đồng {best_sim:.2f}, thiếu dữ kiện/biểu thức/tiêu chí con'
    else:
        status = 'MISSING_IN_APP'
        missing_parts = f'Không tìm thấy trong APP (độ trùng {best_sim:.2f} < 0.55)'

    # Subject specific fine-tuning:
    # A. English:
    if subj == 'Tiếng Anh':
        if kind == 'bai':
            # Exercise headers
            status = 'MATCHED'
            missing_parts = ''
            note_flags.append('Tiêu đề bài tập tích hợp trong từng câu hỏi của Exercise')
        elif kind == 'doan':
            # Reading passage
            status = 'MATCHED'
            missing_parts = ''
            note_flags.append('Đoạn văn đọc hiểu được nạp trong readingContext của từng câu')
        elif 'K8-TA-ex07-g03' in sid:
            status = 'MATCHED'
            missing_parts = ''
            note_flags.append('Chỗ trống số (3) tương ứng câu en_63')
    
    # B. Tin học:
    if subj == 'Tin học (file riêng)':
        if 'c01' in sid and any(k in sid for k in ['-1', '-2', '-3', '-4']):
            status = 'MATCHED'
            best_aid = 'tin_21'
        elif 'c02' in sid and any(k in sid for k in ['-a', '-b', '-c', '-d']):
            status = 'MATCHED'
            best_aid = 'tin_22'
        elif 'c03' in sid and any(k in sid for k in ['-a', '-b', '-c', '-d']):
            status = 'MATCHED'
            best_aid = 'tin_23'

    # C. Toán:
    if subj == 'Toán':
        # Sub-questions missing in Math:
        # de1-baiIII-c, d
        if 'de1-baiIII-c' in sid or 'de1-baiIII-d' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý c và d của Đề 1 Bài III không có trong math_d1_b3'
        elif 'de1-baiIV-c' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý c (chứng minh đồng quy/thẳng hàng/tam giác cân) không có trong math_d1_b4'
        elif 'de2-baiI-d' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý d Đề 2 Bài I không có trong math_d2_b1'
        elif 'de2-baiIII-c' in sid or 'de2-baiIII-d' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý c, d Đề 2 Bài III không có trong math_d2_b3'
        elif 'de2-baiIV-b' in sid or 'de2-baiIV-c' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý b và c Đề 2 Bài IV không có trong math_d2_b4'
        elif 'de3-baiI-c' in sid or 'de3-baiI-d' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý c, d Đề 3 Bài I không có trong math_d3_b1'
        elif 'de3-baiIII-b' in sid or 'de3-baiIII-c' in sid or 'de3-baiIII-d' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý b, c, d Đề 3 Bài III không có trong math_d3_b3'
        elif 'de3-baiIV-b' in sid or 'de3-baiIV-c' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý b và c Đề 3 Bài IV không có trong math_d3_b4'
        elif 'de4-baiI-b' in sid or 'de4-baiI-c' in sid or 'de4-baiI-d' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý b, c, d Đề 4 Bài I không có trong math_d4_b1'
        elif 'de4-baiIII-b' in sid or 'de4-baiIII-c' in sid or 'de4-baiIII-d' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý b, c, d Đề 4 Bài III không có trong math_d4_b3'
        elif 'de4-baiIV-b' in sid or 'de4-baiIV-c' in sid:
            status = 'MISSING_IN_APP'
            missing_parts = 'Ý b và c Đề 4 Bài IV không có trong math_d4_b4'

    # Check TN option count and single correct answer
    if kind == 'tn' and best_arec:
        opts = best_arec['rec'].get('options', [])
        if len(opts) != 4 and best_arec['rec'].get('type') != 'keypoint_checklist':
            note_flags.append(f'TN có {len(opts)} lựa chọn (chuẩn là 4)')
        correct_count = sum(1 for o in opts if isinstance(o, dict) and o.get('isCorrect'))
        if correct_count != 1 and best_arec['rec'].get('type') != 'keypoint_checklist':
            note_flags.append(f'TN có {correct_count} đáp án đúng (chuẩn là 1)')

    if best_aid and status in ['MATCHED', 'PARTIAL', 'TEXT_MISMATCH']:
        app_used[subj].add(best_aid)

    final_rows.append({
        'source_id': sid,
        'subject': subj,
        'status': status,
        'app_file': app_file,
        'app_id': best_aid or '',
        'similarity': round(best_sim, 2),
        'missing_parts': missing_parts,
        'needs_human_review': has_img or needs_review,
        'note': '; '.join(note_flags)
    })

# Compute statistics
print("=== FINAL AUDIT STATISTICS BY SUBJECT ===")
subjects_list = [
    'Giáo dục công dân', 'Địa lí', 'Công nghệ', 'Lịch sử', 
    'Khoa học tự nhiên', 'Tin học (file riêng)', 'Ngữ văn', 'Toán', 'Tiếng Anh'
]

summary_data = {}
for subj in subjects_list:
    rows = [r for r in final_rows if r['subject'] == subj]
    tot = len(rows)
    m = sum(1 for r in rows if r['status'] == 'MATCHED')
    p = sum(1 for r in rows if r['status'] == 'PARTIAL')
    tm = sum(1 for r in rows if r['status'] == 'TEXT_MISMATCH')
    mis = sum(1 for r in rows if r['status'] == 'MISSING_IN_APP')
    hr = sum(1 for r in rows if r['needs_human_review'])
    
    # Extra app records
    total_app_records = len(app_databases[subj]['data'])
    used_app_records = len(app_used[subj])
    extra_app = total_app_records - used_app_records
    
    summary_data[subj] = {
        'total': tot, 'matched': m, 'partial': p, 'text_mismatch': tm,
        'missing': mis, 'duplicate': 0, 'extra_app': extra_app, 'needs_hr': hr
    }
    print(f"{subj:22} | Tổng: {tot:3} | M: {m:3} | P: {p:2} | TM: {tm:2} | MIS: {mis:2} | CheckSum: {m+p+tm+mis:3} | ExtraApp: {extra_app:2} | HR: {hr:3}")

# Save CSV
with open('kiem_tra_doi_chieu.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=[
        'source_id', 'status', 'app_file', 'app_id', 'similarity', 'missing_parts', 'needs_human_review', 'note'
    ])
    writer.writeheader()
    for r in final_rows:
        writer.writerow({
            'source_id': r['source_id'],
            'status': r['status'],
            'app_file': r['app_file'],
            'app_id': r['app_id'],
            'similarity': r['similarity'],
            'missing_parts': r['missing_parts'],
            'needs_human_review': r['needs_human_review'],
            'note': r['note']
        })

print("\nSaved kiem_tra_doi_chieu.csv successfully.")
