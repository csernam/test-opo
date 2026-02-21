#!/usr/bin/env python3
import re
from pathlib import Path

orig_text = Path('preguntas.js').read_text(encoding='utf-8')
clean_p = Path('preguntas.clean.js')
clean_text = clean_p.read_text(encoding='utf-8')

# extract answers from original preguntas.js
pairs = re.findall(r"id:\s*(\d+),[\s\S]*?correct:\s*\"([a-z])\"", orig_text)
ans = {int(k): v for k, v in pairs}
print('Found', len(ans), 'answers in original')

# parse entries from cleaned file
entries = re.findall(r"\{\n\s*id:\s*(\d+),\n\s*q:\s*\"(.*?)\",\n\s*a:\s*\"(.*?)\",\n\s*b:\s*\"(.*?)\",\n\s*c:\s*\"(.*?)\",\n\s*d:\s*\"(.*?)\",\n\s*correct:\s*\"(.*?)\"\n\s*\},", clean_text, flags=re.S)

out_lines = []
out_lines.append('const db = [')
for e in entries:
    qid = int(e[0])
    q = e[1].replace('\\n', '\n')
    a = e[2].replace('\\n', '\n')
    b = e[3].replace('\\n', '\n')
    c = e[4].replace('\\n', '\n')
    d = e[5].replace('\\n', '\n')
    correct = ans.get(qid, e[6])
    out_lines.append('    {')
    out_lines.append(f'        id: {qid},')
    # escape backslashes and quotes
    def esc(s):
        return s.replace('\\', '\\\\').replace('"', '\\"')
    out_lines.append(f'        q: "{esc(q)}",')
    out_lines.append(f'        a: "{esc(a)}",')
    out_lines.append(f'        b: "{esc(b)}",')
    out_lines.append(f'        c: "{esc(c)}",')
    out_lines.append(f'        d: "{esc(d)}",')
    out_lines.append(f'        correct: "{correct}"')
    out_lines.append('    },')

out_lines.append('];')
out_lines.append('\nmodule.exports = db;\n')

clean_p.write_text('\n'.join(out_lines), encoding='utf-8')
print('Merged answers into', str(clean_p))
