#!/usr/bin/env python3
import re
import random
from pathlib import Path

raw_text = Path('preguntas.js').read_text(encoding='utf-8')
clean_text = Path('preguntas.clean.js').read_text(encoding='utf-8')

N = 12
MAX_ID = 315
ids = random.sample(range(1, MAX_ID+1), N)

def extract(text, qid):
    m = re.search(r"\{\n\s*id:\s*%d,([\s\S]*?)\n\s*\}," % qid, text)
    if not m:
        return None
    return m.group(0).strip()

changed = []
for qid in ids:
    r = extract(raw_text, qid)
    c = extract(clean_text, qid)
    if r is None or c is None:
        changed.append((qid, 'missing', r, c))
        continue
    # Normalize whitespace for comparison
    rn = re.sub(r'\s+', ' ', r).strip()
    cn = re.sub(r'\s+', ' ', c).strip()
    if rn == cn:
        changed.append((qid, 'same', r, c))
    else:
        changed.append((qid, 'diff', r, c))

# Print report
print('Sampled IDs:', ids)
print('-'*70)
for qid, status, r, c in changed:
    print(f'ID {qid}: {status}')
    if status == 'diff' or status == 'missing':
        print('RAW:')
        print(r if r is not None else '<<not found>>')
        print('---')
        print('CLEAN:')
        print(c if c is not None else '<<not found>>')
        print('-'*70)

# Summary
same = sum(1 for _,s,_,_ in changed if s=='same')
diff = sum(1 for _,s,_,_ in changed if s=='diff')
missing = sum(1 for _,s,_,_ in changed if s=='missing')
print(f'Summary: {same} same, {diff} different, {missing} missing (out of {N} sampled)')
