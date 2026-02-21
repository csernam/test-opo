#!/usr/bin/env python3
import re
from pathlib import Path

raw = Path('preguntas.js').read_text(encoding='utf-8')
clean = Path('preguntas.clean.js').read_text(encoding='utf-8')

ids = [5,9,19,48]

def extract(text, qid):
    m = re.search(r"\{\n\s*id:\s*%d,([\s\S]*?)\n\s*\}," % qid, text)
    if not m:
        return None
    return m.group(0)

for qid in ids:
    r = extract(raw, qid)
    c = extract(clean, qid)
    print('='*80)
    print(f'QUESTION ID {qid}')
    print('-'*80)
    print('RAW:')
    print(r or '<<not found>>')
    print('-'*40)
    print('CLEAN:')
    print(c or '<<not found>>')
    print('\n')
