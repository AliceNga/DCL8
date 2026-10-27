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

print(f"Loaded {len(source_items)} SOURCE items.")
for subj, val in app_databases.items():
    print(f"  APP {subj}: {len(val['data'])} records ({val['file']})")

