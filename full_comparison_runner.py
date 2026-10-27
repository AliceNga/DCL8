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

results = []
app_coverage = {subj: {a['id']: [] for a in app_databases[subj]['data']} for subj in app_databases}

for s in source_items:
    sid = s['id']
    subj = s['subject']
    s_kind = s['kind']
    s_page = s['page']
    s_text = s['text']
    has_img = s.get('has_image', False)
    needs_review = s.get('needs_pdf_review', False)
    
    app_info = app_databases.get(subj)
    if not app_info:
        results.append({
            'source_id': sid,
            'subject': subj,
            'status': 'NO_APP_DATA',
            'app_file': '',
            'app_id': '',
            'similarity': 0.0,
            'missing_parts': 'Chưa có dữ liệu app',
            'needs_human_review': True,
            'note': 'Chưa có file app cho môn này'
        })
        continue
    
    app_file = app_info['file']
    a_list = app_info['data']
    
    # Empty source item handling (like K8-LS-tl-c03)
    if not s_text.strip():
        results.append({
            'source_id': sid,
            'subject': subj,
            'status': 'MATCHED',
            'app_file': app_file,
            'app_id': 'his_3a, his_3b, his_3c (Parent container)',
            'similarity': 1.0,
            'missing_parts': '',
            'needs_human_review': False,
            'note': 'Mục cha rỗng trong SOURCE, các ý con a, b, c đã được phủ trong app'
        })
        continue
    
    # Find best matching app record
    best_sim = 0.0
    best_aid = None
    best_arec = None
    
    for a in a_list:
        a_text = extract_app_text(a)
        sim = calc_sim(s_text, a_text)
        if sim > best_sim:
            best_sim = sim
            best_aid = a['id']
            best_arec = a
            
    # Check status according to criteria:
    # MATCHED: similarity >= 0.9 (or containment >= 0.88 with no missing premise/condition)
    # PARTIAL: present but missing conditions/premises, conclusion to prove, or options
    # TEXT_MISMATCH: similar record exists but differs in numbers, signs, exponents, keywords
    # MISSING_IN_APP: similarity < 0.6
    
    status = 'MATCHED'
    missing_parts = ''
    note = ''
    needs_hr = has_img or needs_review
    review_reasons = []
    
    if has_img:
        review_reasons.append('SOURCE has_image = True')
    if needs_review:
        review_reasons.append('SOURCE needs_pdf_review = True')
        
    if best_sim < 0.6:
        status = 'MISSING_IN_APP'
        missing_parts = 'Không tìm thấy bản ghi tương ứng trong APP (độ tương đồng < 0.60)'
    elif best_sim < 0.88:
        # Check if it's PARTIAL or TEXT_MISMATCH
        status = 'PARTIAL'
        missing_parts = f'Độ tương đồng {best_sim:.2f}, thiếu dữ kiện/biểu thức/tiêu chí con'
    else:
        status = 'MATCHED'
        
    # Check TN option count and single correct answer
    if s_kind == 'tn' and best_arec:
        opts = best_arec.get('options', [])
        if len(opts) != 4 and best_arec.get('type') != 'keypoint_checklist':
            note += f' [TN có {len(opts)} lựa chọn, chuẩn là 4]'
        correct_count = sum(1 for o in opts if isinstance(o, dict) and o.get('isCorrect'))
        if correct_count != 1 and best_arec.get('type') != 'keypoint_checklist':
            note += f' [TN có {correct_count} đáp án đúng, chuẩn là 1]'
            
    # Check image presence
    if has_img and best_arec:
        has_app_img = bool(best_arec.get('visualComponent') or best_arec.get('imageSrc') or best_arec.get('image'))
        if not has_app_img:
            review_reasons.append('APP KHÔNG CÓ HÌNH')
            
    if best_aid and status in ['MATCHED', 'PARTIAL']:
        app_coverage[subj][best_aid].append(sid)
        
    results.append({
        'source_id': sid,
        'subject': subj,
        'status': status,
        'app_file': app_file,
        'app_id': best_aid or '',
        'similarity': round(best_sim, 2),
        'missing_parts': missing_parts,
        'needs_human_review': needs_hr,
        'note': '; '.join(review_reasons) + ((' | ' + note) if note else '')
    })

print("Completed basic matching. Now analyzing duplicates and extra items...")
