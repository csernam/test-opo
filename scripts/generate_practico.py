import re
from pathlib import Path

dir_path = Path("D:/Documents/GitHub/test-opo/preguntas/Examen Práctico")
js_questions_path = Path("D:/Documents/GitHub/test-opo/preguntas_practico.js")
js_temas_path = Path("D:/Documents/GitHub/test-opo/temas_practico.js")

def parse_solutions():
    solutions_path = dir_path / "Soluciones.txt"
    text = solutions_path.read_text(encoding="utf-8")
    
    # We want to match all patterns like: \b\d+\s+[A-D]\b
    # e.g., "1 A", "45 A"
    matches = re.findall(r"\b(\d+)\s+([A-D])\b", text)
    solutions = {}
    for num, ans in matches:
        solutions[int(num)] = ans.lower()
    
    print(f"Parsed {len(solutions)} solutions.")
    return solutions

def clean_lines(lines):
    cleaned = []
    for line in lines:
        s = line.strip()
        # Remove page dividers
        if re.match(r"^---\s*PAGE\s*\d+\s*---$", s):
            continue
        # Remove headers
        if "Temario General. Grupo (C2)" in s:
            continue
        # Remove footers with page numbers
        if re.match(r"^V\.\d{2}\.\d{2}\.\d{2}\s*Página\s*\d+$", s):
            continue
        cleaned.append(line)
    return cleaned

def parse_theme_file(file_path, solutions):
    # Determine theme ID from filename (T1.txt -> 1)
    m_theme = re.match(r"^T(\d+)\.txt$", file_path.name)
    if not m_theme:
        return None, []
    theme_id = int(m_theme.group(1))
    
    lines = file_path.read_text(encoding="utf-8").splitlines()
    lines = clean_lines(lines)
    
    # Extract theme title
    # Theme title starts with "Tema X." at the beginning of the file and ends before the first question
    theme_title_lines = []
    i = 0
    q_re = re.compile(r"^(\d+)\.\-\s*(.*)")
    
    # Find the title start (usually line 0 or 1)
    title_started = False
    first_q_index = -1
    for idx, line in enumerate(lines):
        if q_re.match(line):
            first_q_index = idx
            break
        if line.strip().startswith(f"Tema {theme_id}."):
            title_started = True
            theme_title_lines.append(line.strip())
        elif title_started:
            if line.strip():
                theme_title_lines.append(line.strip())
    
    theme_title = " ".join(theme_title_lines)
    # Remove prefix "Tema X. "
    theme_title = re.sub(r"^Tema\s+\d+\.\s*", "", theme_title).strip()
    
    print(f"Theme {theme_id} Title: {theme_title}")
    
    questions = []
    opt_re = re.compile(r"^\s*([abcd])\)\s*(.*)")
    
    i = first_q_index
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
                    while i < nlines and not opt_re.match(lines[i]) and not q_re.match(lines[i]):
                        if lines[i].strip() == '':
                            opts[current] += '\n'
                        else:
                            opts[current] += ' ' + lines[i].strip()
                        i += 1
                else:
                    break
            
            # Match answer
            correct_ans = solutions.get(qnum, "")
            if not correct_ans:
                print(f"Warning: No answer found for question {qnum} in Theme {theme_id}")
            
            questions.append({
                'id': qnum,
                'q': qtext.strip(),
                'a': opts['a'].strip(),
                'b': opts['b'].strip(),
                'c': opts['c'].strip(),
                'd': opts['d'].strip(),
                'tema': theme_id,
                'tema_title': theme_title,
                'correct': correct_ans
            })
        else:
            i += 1
            
    print(f"Parsed {len(questions)} questions for Theme {theme_id}")
    return theme_title, questions

def main():
    solutions = parse_solutions()
    all_questions = []
    themes = []
    
    for f in sorted(dir_path.glob("T*.txt")):
        theme_title, questions = parse_theme_file(f, solutions)
        if questions:
            all_questions.extend(questions)
            m_theme = re.match(r"^T(\d+)\.txt$", f.name)
            theme_id = int(m_theme.group(1))
            themes.append({
                "id": theme_id,
                "title": theme_title,
                "hasQuestions": True
            })
            
    all_questions.sort(key=lambda x: x['id'])
    
    # Write preguntas_practico.js
    out_lines = [
        "// Banco de preguntas - Examen Práctico",
        "// Auto-generated",
        "",
        "const dbPractico = ["
    ]
    for q in all_questions:
        out_lines.append("    {")
        out_lines.append(f"        id: {q['id']},")
        def esc(s):
            return s.replace('\\', '\\\\').replace('"', '\\"')
        out_lines.append(f"        q: \"{esc(q['q'])}\",")
        out_lines.append(f"        a: \"{esc(q['a'])}\",")
        out_lines.append(f"        b: \"{esc(q['b'])}\",")
        out_lines.append(f"        c: \"{esc(q['c'])}\",")
        out_lines.append(f"        d: \"{esc(q['d'])}\",")
        out_lines.append(f"        tema: {q['tema']},")
        out_lines.append(f"        tema_title: \"{esc(q['tema_title'])}\",")
        out_lines.append(f"        correct: \"{q['correct']}\"")
        out_lines.append("    },")
    out_lines.append("];")
    
    js_questions_path.write_text("\n".join(out_lines), encoding="utf-8")
    print(f"Saved {len(all_questions)} questions to {js_questions_path.name}")
    
    # Write temas_practico.js
    tema_lines = [
        "// Metadatos de temas - Examen Práctico",
        "// Auto-generated",
        "",
        "const temasDataPractico = {",
        "    \"temas\": ["
    ]
    for t in themes:
        tema_lines.append("        {")
        tema_lines.append(f"            \"id\": {t['id']},")
        tema_lines.append(f"            \"title\": \"{t['title']}\",")
        tema_lines.append("            \"hasQuestions\": true")
        tema_lines.append("        },")
    # Clean up trailing comma for valid JSON representation if needed, but it's JS so it's fine
    tema_lines.append("    ]")
    tema_lines.append("};")
    
    js_temas_path.write_text("\n".join(tema_lines), encoding="utf-8")
    print(f"Saved {len(themes)} themes to {js_temas_path.name}")

if __name__ == "__main__":
    main()
