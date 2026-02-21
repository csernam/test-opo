#!/usr/bin/env python3
import re
from pathlib import Path
p = Path('preguntas.clean.js')
s = p.read_text(encoding='utf-8')
entries = re.findall(r"\{\n\s*id: (\d+),\n\s*q: \"(.*?)\",\n\s*a: \"(.*?)\",\n\s*b: \"(.*?)\",\n\s*c: \"(.*?)\",\n\s*d: \"(.*?)\",\n\s*correct: \"(.*?)\"\n\s*\},", s, flags=re.S)
print('Found', len(entries), 'entries')
missing = [int(e[0]) for e in entries if e[6].strip()=='' ]
print('Entries with empty correct field:', len(missing))
if len(missing) < 20:
    print('Sample missing ids:', missing[:20])
else:
    print('Sample missing ids (first 20):', missing[:20])
