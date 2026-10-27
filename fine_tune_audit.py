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
    t = re.sub(r'<[^>]+>', ' ', t).lower()
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

# Test English matching specifically
en_src = [x for x in source_items if x['subject'] == 'Tiếng Anh']
en_app = app_databases['Tiếng Anh']['data']

print("=== ENGLISH DETAILED AUDIT ===")
matched_en = 0
for s in en_src:
    s_tokens = get_tokens(s['text'])
    best_sim = 0.0
    best_id = None
    for a in en_app:
        # combine questionText and options text
        a_opts = ' '.join([clean(o.get('text', '')) + ' ' + clean(o.get('raw', '')) for o in a.get('options', [])])
        a_full = clean(a.get('questionText', '')) + ' ' + a_opts + ' ' + clean(a.get('readingContext', ''))
        a_tokens = set(a_full.split())
        
        # Containment of source tokens in app tokens
        if s_tokens:
            cont = len(s_tokens & a_tokens) / len(s_tokens)
            if cont > best_sim:
                best_sim = cont
                best_id = a['id']
                
    if best_sim >= 0.85:
        matched_en += 1
    else:
        print(f"  Unmatched EN: {s['id']} (kind={s['kind']}, sim={best_sim:.2f}): {s['text'][:60].replace(chr(10), ' ')}")

print(f"English matched: {matched_en} / {len(en_src)}")
