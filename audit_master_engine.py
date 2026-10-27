import json
import re
import html
import csv
from collections import defaultdict, Counter

# Load source
with open('danh_sach_kiem_tra_PDF_K8.json', 'r', encoding='utf-8') as f:
    source_items = json.load(f)

# Load app databases
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
    jaccard = len(t_s & t_a) / len(t_s | t_a) if (t_s | t_a) else 0.0
    containment = len(t_s & t_a) / len(t_s)
    # If the core source keywords/tokens are almost entirely in app, high similarity
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

# Pre-extract all app texts
app_extracted = {}
for subj, info in app_databases.items():
    app_extracted[subj] = []
    for r in info['data']:
        text_all = extract_app_text(r)
        has_img = bool(r.get('visualComponent') or r.get('imageSrc') or r.get('image'))
        app_extracted[subj].append({
            'id': r['id'],
            'raw': r,
            'text': text_all,
            'has_image': has_img
        })

print("Extracted all APP texts.")
