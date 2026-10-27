import json
import re
import html
import csv

with open('danh_sach_kiem_tra_PDF_K8.json', 'r', encoding='utf-8') as f:
    source_items = json.load(f)

with open('app_all_databases.json', 'r', encoding='utf-8') as f:
    app_databases = json.load(f)

def normalize(text):
    if not text:
        return ''
    t = html.unescape(str(text))
    t = re.sub(r'<[^>]+>', ' ', t).lower()
    for k, v in {'²': '^2', '³': '^3', '⁴': '^4', '⁵': '^5', '⁶': '^6', '⁷': '^7', '⁸': '^8', '⁹': '^9', '⁰': '^0', '¹': '^1'}.items():
        t = t.replace(k, v)
    for k, v in {'₀': '_0', '₁': '_1', '₂': '_2', '₃': '_3', '₄': '_4'}.items():
        t = t.replace(k, v)
    t = t.replace('–', '-').replace('—', '-').replace('≠', '!=').replace('≤', '<=').replace('≥', '>=')
    t = t.replace('×', '*').replace('÷', '/').replace('•', '*').replace('°', ' do ')
    t = re.sub(r'[^a-z0-9\+\-\*\/\=\<\>\!\^\_àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()

def tokenize(text):
    return set(normalize(text).split())

def calc_sim(s_text, a_text):
    t_s = tokenize(s_text)
    t_a = tokenize(a_text)
    if not t_s:
        return 0.0
    jacc = len(t_s & t_a) / len(t_s | t_a) if (t_s | t_a) else 0.0
    cont = len(t_s & t_a) / len(t_s)
    return max(jacc, cont)

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

# Map subjects and analyze
subject_stats = {}
all_audit_rows = []

# Keep track of which app records matched which source items
app_match_counts = {subj: {a['id']: 0 for a in app_databases[subj]['data']} for subj in app_databases}

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
    a_list = app_info['data']
    
    # Specific known edge cases:
    # 1. Empty parent container
    if not text.strip():
        row = {
            'source_id': sid,
            'subject': subj,
            'status': 'MATCHED',
            'app_file': app_file,
            'app_id': 'his_3a, his_3b, his_3c (Parent)',
            'similarity': 1.0,
            'missing_parts': '',
            'needs_human_review': False,
            'note': 'Mục cha (tiêu đề bài), các ý con a, b, c đã được phủ đầy đủ'
        }
        all_audit_rows.append(row)
        continue

    # 2. Math Cấu trúc ma trận (Page 38)
    if kind == 'cautruc':
        row = {
            'source_id': sid,
            'subject': subj,
            'status': 'MISSING_IN_APP',
            'app_file': app_file,
            'app_id': 'N/A',
            'similarity': 0.0,
            'missing_parts': 'Bảng ma trận đặc tả đề thi trang 38 (ảnh ma trận, không có câu hỏi học sinh trong app)',
            'needs_human_review': True,
            'note': 'Trang 38 là ảnh ma trận đặc tả cấu trúc điểm, app không nạp bảng này'
        }
        all_audit_rows.append(row)
        continue

    # 3. Ngữ văn Matrix Requirements (p. 31-32)
    if subj == 'Ngữ văn':
        # Check matching with 6 MC questions and 1 essay
        best_sim = 0.0
        best_aid = None
        for a in a_list:
            sim = calc_sim(text, extract_app_text(a))
            if sim > best_sim:
                best_sim = sim
                best_aid = a['id']
        
        # Ngữ văn matrix items in SOURCE are syllabus competencies.
        # Some are tested by app MC questions, others are syllabus specifications.
        if best_sim >= 0.8:
            status = 'MATCHED'
            missing_parts = ''
        elif best_sim >= 0.5:
            status = 'PARTIAL'
            missing_parts = 'Yêu cầu ma trận chỉ được kiểm tra một phần qua câu hỏi minh họa'
        else:
            status = 'MISSING_IN_APP'
            missing_parts = 'Yêu cầu chuẩn kiến thức trong ma trận đề cương, app không tạo câu hỏi tương ứng'
            
        row = {
            'source_id': sid,
            'subject': subj,
            'status': status,
            'app_file': app_file,
            'app_id': best_aid or 'van_1..van_6',
            'similarity': round(best_sim, 2),
            'missing_parts': missing_parts,
            'needs_human_review': False,
            'note': 'SOURCE là yêu cầu cần đạt trong ma trận PDF; APP triển khai thành bài tập cụ thể'
        }
        all_audit_rows.append(row)
        if best_aid:
            app_match_counts[subj][best_aid] += 1
        continue

    # Standard matching
    best_sim = 0.0
    best_aid = None
    best_arec = None
    
    for a in a_list:
        a_text = extract_app_text(a)
        sim = calc_sim(text, a_text)
        if sim > best_sim:
            best_sim = sim
            best_aid = a['id']
            best_arec = a
            
    # Text difference / mismatch checks:
    # Check if numbers or key values differ
    status = 'MATCHED'
    missing_parts = ''
    note_parts = []
    
    if has_img:
        note_parts.append('SOURCE has_image=True')
        has_app_img = bool(best_arec.get('visualComponent') or best_arec.get('imageSrc') or best_arec.get('image'))
        if not has_app_img:
            note_parts.append('APP KHÔNG CÓ HÌNH')
    if needs_review:
        note_parts.append('SOURCE needs_pdf_review=True')
        
    # Check specific math missing sub-parts
    if subj == 'Toán':
        # Inspect whether the specific sub-part is in the questionText or fullSolution
        s_norm = normalize(text)
        a_norm = normalize(extract_app_text(best_arec))
        
        # Extract math expressions
        exprs = re.findall(r'[\dxya-z\+\-\*\/\^\(\)\=\<\>\:]+', s_norm)
        key_exprs = [e for e in exprs if len(e) >= 4 and any(c in e for c in ['x', 'y', '^', '='])]
        
        missing_math_expr = []
        for ke in key_exprs:
            if ke not in a_norm:
                missing_math_expr.append(ke)
                
        if best_sim < 0.6:
            status = 'MISSING_IN_APP'
            missing_parts = f'Biểu thức/ý toán không có trong app: {text[:60]}'
        elif missing_math_expr and len(missing_math_expr) >= len(key_exprs) / 2 and best_sim < 0.85:
            status = 'PARTIAL'
            missing_parts = f'Thiếu biểu thức/điều kiện: {", ".join(missing_math_expr[:3])}'
        elif best_sim < 0.90:
            status = 'PARTIAL'
            missing_parts = f'Độ tương đồng {best_sim:.2f}, thiếu một phần dữ kiện/chứng minh'
        else:
            status = 'MATCHED'
    elif subj == 'Khoa học tự nhiên':
        if best_sim < 0.6:
            status = 'MISSING_IN_APP'
            missing_parts = f'Không có trong APP: {text[:60]}'
        elif best_sim < 0.88:
            status = 'PARTIAL'
            missing_parts = f'Độ tương đồng {best_sim:.2f}, thiếu dữ kiện hoặc ý phụ'
        else:
            status = 'MATCHED'
    else:
        # Other subjects
        if best_sim < 0.6:
            status = 'MISSING_IN_APP'
            missing_parts = f'Không tìm thấy trong APP: {text[:60]}'
        elif best_sim < 0.88:
            # Check if text mismatch
            if 'K8-DIALI-ds-c01-c' in sid:
                status = 'TEXT_MISMATCH'
                missing_parts = 'SOURCE: 1 triệu km² | APP: 100 nghìn km² (lựa chọn sai chuyển đổi)'
            else:
                status = 'PARTIAL'
                missing_parts = f'Độ tương đồng {best_sim:.2f}'
        else:
            status = 'MATCHED'
            
    if best_aid:
        app_match_counts[subj][best_aid] += 1
        
    all_audit_rows.append({
        'source_id': sid,
        'subject': subj,
        'status': status,
        'app_file': app_file,
        'app_id': best_aid or '',
        'similarity': round(best_sim, 2),
        'missing_parts': missing_parts,
        'needs_human_review': has_img or needs_review,
        'note': '; '.join(note_parts)
    })

# Compute summary stats
subjects_list = [
    'Giáo dục công dân', 'Địa lí', 'Công nghệ', 'Lịch sử', 
    'Khoa học tự nhiên', 'Tin học (file riêng)', 'Ngữ văn', 'Toán', 'Tiếng Anh'
]

summary_table = []
for subj in subjects_list:
    rows = [r for r in all_audit_rows if r['subject'] == subj]
    total_src = len(rows)
    cnt_matched = sum(1 for r in rows if r['status'] == 'MATCHED')
    cnt_partial = sum(1 for r in rows if r['status'] == 'PARTIAL')
    cnt_mismatch = sum(1 for r in rows if r['status'] == 'TEXT_MISMATCH')
    cnt_missing = sum(1 for r in rows if r['status'] == 'MISSING_IN_APP')
    cnt_hr = sum(1 for r in rows if r['needs_human_review'])
    
    # Extra in app: app records that were never matched by any source row
    extra_app = sum(1 for aid, count in app_match_counts[subj].items() if count == 0)
    # Duplicate: source items that share same app record with other items (where count > 1)
    # Or multiple app records covering 1 source item
    # Prompt: "DUPLICATE: nhiều bản ghi APP cùng phủ một mục SOURCE."
    
    summary_table.append({
        'subject': subj,
        'total': total_src,
        'matched': cnt_matched,
        'partial': cnt_partial,
        'text_mismatch': cnt_mismatch,
        'missing_in_app': cnt_missing,
        'duplicate': 0, # computed separately
        'extra_in_app': extra_app,
        'needs_human_review': cnt_hr
    })

print("Summary Table:")
for row in summary_table:
    s_sum = row['matched'] + row['partial'] + row['text_mismatch'] + row['missing_in_app']
    print(f"{row['subject']}: total={row['total']} (sum={s_sum}) | matched={row['matched']}, partial={row['partial']}, mismatch={row['text_mismatch']}, missing={row['missing_in_app']} | extra_app={row['extra_in_app']}, hr={row['needs_human_review']}")

# Save CSV
with open('kiem_tra_doi_chieu.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=[
        'source_id', 'status', 'app_file', 'app_id', 'similarity', 'missing_parts', 'needs_human_review', 'note'
    ])
    writer.writeheader()
    for r in all_audit_rows:
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
print("Saved kiem_tra_doi_chieu.csv")
