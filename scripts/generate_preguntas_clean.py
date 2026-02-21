#!/usr/bin/env python3
import re
from pathlib import Path

in_path = Path('/home/bok/repos/opo/test-opo/preguntas/temarioaux-advo-oep2020-23_v2.txt')
out_path = Path('/home/bok/repos/opo/test-opo/preguntas.clean.js')

text = in_path.read_text(encoding='utf-8')
lines = text.splitlines()

# Define patterns to remove (common headers/footers observed in the PDF extraction)
remove_substrings = [
    'Temario Específico. Auxiliar Administrativo',
    'Temario Específico. Auxiliar Administrativo/a',
    'OFERTA DE EMPLEO PÚBLICO',
    'MATERIAL DIDÁCTICO Y',
    'ÍNDICE',
    'MATERIAL DIDÁCTICO',
]
remove_regexes = [
    re.compile(r'^V\.\d{2}\.\d{2}\.\d{2}'),
    re.compile(r'^Página\s*\d+', re.IGNORECASE),
    re.compile(r'^Página\s*$'),
    re.compile(r'^\s*[-]{2,}\s*$'),
]

clean_lines = []
for ln in lines:
    s = ln.strip()
    if s == '':
        clean_lines.append('')
        continue
    skip = False
    for sub in remove_substrings:
        if sub in s:
            skip = True
            break
    if skip:
        continue
    for rx in remove_regexes:
        if rx.search(s):
            skip = True
            break
    if skip:
        continue
    # Remove lines that are short and look like headers (all caps and short)
    if len(s) < 40 and s.upper() == s and re.search(r'[A-ZÑÁÉÍÓÚ]', s):
        # ignore if it looks like a question number (e.g., 'Tema 1. ...')
        if not re.match(r'^(Tema\s+\d+\.)', s):
            continue
    clean_lines.append(ln)

# Collapse multiple blank lines to a single blank line
collapsed = []
prev_blank = False
for ln in clean_lines:
    if ln.strip() == '':
        if not prev_blank:
            collapsed.append('')
        prev_blank = True
    else:
        collapsed.append(ln)
        prev_blank = False

# Now reuse parsing logic from the original generator to extract questions and answers
lines = collapsed

# Parse RESPUESTAS block
resp_index = None
for i,l in enumerate(lines):
    if l.strip().startswith('RESPUESTAS'):
        resp_index = i
        break

answers = {}
if resp_index is not None:
    for l in lines[resp_index+1:]:
        parts = re.findall(r"(\d+)\s+([A-Z])", l)
        for num,letter in parts:
            answers[int(num)] = letter.lower()

# Parse questions
questions = []
q_re = re.compile(r'^(\d+)\.\-\s*(.*)')
opt_re = re.compile(r'^\s*([abcd])\)\s*(.*)')

i = 0
nlines = len(lines)
while i < nlines:
    m = q_re.match(lines[i])
    if m:
        qnum = int(m.group(1))
        qtext = m.group(2).rstrip()
        i += 1
        # accumulate question text lines until we hit option a)
        while i < nlines and not opt_re.match(lines[i]):
            if lines[i].strip() == '':
                qtext += '\n'
            else:
                qtext += ' ' + lines[i].strip()
            i += 1
        opts = {'a':'', 'b':'', 'c':'', 'd':''}
        current = None
        while i < nlines:
            mo = opt_re.match(lines[i])
            if mo:
                current = mo.group(1)
                opts[current] = mo.group(2).rstrip()
                i += 1
                # collect following wrapped lines until next option or next question
                while i < nlines and not opt_re.match(lines[i]) and not q_re.match(lines[i]) and not lines[i].strip().startswith('RESPUESTAS'):
                    if lines[i].strip() == '':
                        opts[current] += '\n'
                    else:
                        opts[current] += ' ' + lines[i].strip()
                    i += 1
            else:
                break
        questions.append({'id': qnum, 'q': qtext.strip(), 'a': opts['a'].strip(), 'b': opts['b'].strip(), 'c': opts['c'].strip(), 'd': opts['d'].strip(), 'correct': answers.get(qnum, '')})
    else:
        i += 1

# Sort questions by id
questions.sort(key=lambda x: x['id'])

# Build JS file content
out_lines = []
out_lines.append('const db = [')
for q in questions:
    out_lines.append('    {')
    out_lines.append(f"        id: {q['id']},")
    def esc(s):
        return s.replace('\\', '\\\\').replace('"', '\\"')
    out_lines.append(f"        q: \"{esc(q['q'])}\",")
    out_lines.append(f"        a: \"{esc(q['a'])}\",")
    out_lines.append(f"        b: \"{esc(q['b'])}\",")
    out_lines.append(f"        c: \"{esc(q['c'])}\",")
    out_lines.append(f"        d: \"{esc(q['d'])}\",")
    out_lines.append(f"        correct: \"{q['correct']}\"")
    out_lines.append('    },')
out_lines.append('];')
out_lines.append('\nmodule.exports = db;\n')

out_path.write_text('\n'.join(out_lines), encoding='utf-8')
print(f'Wrote {len(questions)} cleaned questions to {out_path}')
