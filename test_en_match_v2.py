import json
import re
import html

with open('danh_sach_kiem_tra_PDF_K8.json', 'r', encoding='utf-8') as f:
    source_items = json.load(f)

with open('app_all_databases.json', 'r', encoding='utf-8') as f:
    app_databases = json.load(f)

def clean(text):
    if not text:
        return ''
    t = html.unescape(str(text))
    t = re.sub(r'<[^>]+>', ' ', t)
    # remove option labels A. B. C. D. or a) b) c) d)
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

en_src = [x for x in source_items if x['subject'] == 'Tiếng Anh']
en_app = app_databases['Tiếng Anh']['data']

matched = 0
partial = 0
missing = 0

for s in en_src:
    s_tokens = get_tokens(s['text'])
    if not s_tokens:
        matched += 1
        continue
    best_sim = 0.0
    best_aid = None
    for a in en_app:
        a_opts = ' '.join([clean(o.get('text', '')) + ' ' + clean(o.get('raw', '')) for o in a.get('options', [])])
        a_full = clean(a.get('questionText', '')) + ' ' + a_opts + ' ' + clean(a.get('readingContext', ''))
        a_tokens = set(a_full.split())
        cont = len(s_tokens & a_tokens) / len(s_tokens)
        if cont > best_sim:
            best_sim = cont
            best_aid = a['id']
            
    if best_sim >= 0.90:
        matched += 1
    elif best_sim >= 0.60:
        partial += 1
        print(f"  PARTIAL EN ({best_sim:.2f}): {s['id']} -> {s['text'][:60].replace(chr(10), ' ')}")
    else:
        missing += 1
        print(f"  MISSING EN ({best_sim:.2f}): {s['id']} -> {s['text'][:60].replace(chr(10), ' ')}")

print(f"English: Matched={matched}, Partial={partial}, Missing={missing}, Total={len(en_src)}")
