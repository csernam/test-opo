#!/usr/bin/env python3
import re
from pathlib import Path

in_path = Path('preguntas.clean.js')
out_path = Path('preguntas.clean2.js')
orig_answers = Path('preguntas.js').read_text(encoding='utf-8')
text = in_path.read_text(encoding='utf-8')

# regex to find entries
entries = re.findall(r"\{\n\s*id:\s*(\d+),\n([\s\S]*?)\n\s*\},", text, flags=re.S)

# extract answers from original preguntas.js
pairs = re.findall(r"id:\s*(\d+),[\s\S]*?correct:\s*\"([a-z])\"", orig_answers)
ans = {int(k): v for k, v in pairs}

out_lines = []
out_lines.append('const db = [')

# pattern to remove: any 'Tema' heading and everything after it in the field
# We'll remove occurrences of '\n?\s*Tema\s+\d+[\s\S]*$' in each field conservatively
pattern_tema = re.compile(r"\s*Tema\s+\d+[\s\S]*$", flags=re.I)

for id_str, body in entries:
    qid = int(id_str)
    # extract fields q,a,b,c,d,correct from body
    m_q = re.search(r"q:\s*\"(.*?)\",\n", body, flags=re.S)
    def extract_field(name):
        m = re.search(rf"{name}:\s*\"(.*?)\",\n", body, flags=re.S)
        if m:
            return m.group(1)
        # try without trailing comma (last field)
        m2 = re.search(rf"{name}:\s*\"(.*?)\"", body, flags=re.S)
        if m2:
            return m2.group(1)
        return ''
    q = extract_field('q')
    a = extract_field('a')
    b = extract_field('b')
    c = extract_field('c')
    d = extract_field('d')
    # Remove trailing Tema ... blocks from each field
    def strip_tema(s):
        if not s:
            return s
        # If pattern exists, remove from that point
        s2 = pattern_tema.sub('', s)
        # If it removed something, also strip trailing whitespace and stray page markers
        s2 = s2.strip()
        # Remove stray multiple newlines
        s2 = re.sub(r"\n{2,}", "\n", s2)
        return s2
    q = strip_tema(q)
    a = strip_tema(a)
    b = strip_tema(b)
    c = strip_tema(c)
    d = strip_tema(d)

    correct = ans.get(qid, '')

    out_lines.append('    {')
    out_lines.append(f'        id: {qid},')
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

out_path.write_text('\n'.join(out_lines), encoding='utf-8')
print('Wrote cleaned file without Tema blocks to', out_path)
