import json
import re
import html

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

def calc_similarity(s_text, a_text):
    t_s = tokenize(s_text)
    t_a = tokenize(a_text)
    if not t_s:
        return 0.0
    # Jaccard
    jaccard = len(t_s & t_a) / len(t_s | t_a) if (t_s | t_a) else 0.0
    # Containment: how much of source tokens are contained in app tokens
    containment = len(t_s & t_a) / len(t_s)
    return max(jaccard, containment)

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

# Test matching for all subjects
for subj, app_info in app_databases.items():
    s_list = [x for x in source_items if x['subject'] == subj]
    a_list = app_info['data']
    print(f"\n==========================================")
    print(f"Subject: {subj} (SOURCE: {len(s_list)}, APP: {len(a_list)})")
    
    # Pre-extract app texts
    app_texts = {a['id']: extract_app_text(a) for a in a_list}
    
    matched = 0
    missing = 0
    for s in s_list:
        s_text = s['text']
        if not s_text.strip():
            # empty text in source (e.g. parent container)
            continue
        best_sim = 0.0
        best_aid = None
        for a in a_list:
            sim = calc_similarity(s_text, app_texts[a['id']])
            if sim > best_sim:
                best_sim = sim
                best_aid = a['id']
        if best_sim >= 0.6:
            matched += 1
        else:
            missing += 1
            print(f"  [MISSING <0.6] {s['id']} (p.{s['page']}, kind={s['kind']}, sim={best_sim:.2f}): {s['text'][:70].replace(chr(10), ' ')}")

