import os
from pathlib import Path
from pypdf import PdfReader

dir_path = Path("D:/Documents/GitHub/test-opo/preguntas/Examen Práctico")

def dump_pdf_to_txt(pdf_path):
    print(f"Extracting {pdf_path.name}...")
    reader = PdfReader(pdf_path)
    text = ""
    for i, page in enumerate(reader.pages):
        text += f"--- PAGE {i+1} ---\n"
        page_text = page.extract_text()
        if page_text:
            text += page_text + "\n"
    txt_path = pdf_path.with_suffix(".txt")
    txt_path.write_text(text, encoding="utf-8")
    print(f"Saved to {txt_path.name}")

if __name__ == "__main__":
    for f in dir_path.glob("*.pdf"):
        dump_pdf_to_txt(f)
