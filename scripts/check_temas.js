// Script to compare tema assignments in preguntas.js vs the original PDF text
const fs = require('fs');
const path = require('path');

// Read the text extracted from PDF
const txtContent = fs.readFileSync(
    path.join(__dirname, '..', 'preguntas', 'temarioaux-advo-oep2020-23_v2.txt'),
    'utf-8'
);

const lines = txtContent.split(/\r?\n/);

// Find where each tema section starts (in the actual content, not the index)
// We look for lines like "Tema X. ..." followed by questions numbered "N.-"
// The actual content sections start after line ~100 (after the index)
const temaSections = [];
for (let i = 100; i < lines.length; i++) {
    const match = lines[i].trim().match(/^Tema\s+(\d+)\.\s*/);
    if (match) {
        temaSections.push({
            tema: parseInt(match[1]),
            startLine: i,
            lineContent: lines[i].trim()
        });
    }
}

console.log('=== Tema sections found in PDF text ===');
temaSections.forEach(s => {
    console.log(`  Tema ${s.tema} starts at line ${s.startLine + 1}: ${s.lineContent.substring(0, 80)}`);
});

// Now find all question numbers and which tema section they belong to
// Questions are numbered like "N.-" at the start of a line
const questionsInPDF = [];
for (let i = 100; i < lines.length; i++) {
    const qMatch = lines[i].trim().match(/^(\d+)\.-\s/);
    if (qMatch) {
        const qNum = parseInt(qMatch[1]);
        // Find which tema section this question belongs to
        let tema = null;
        for (let j = temaSections.length - 1; j >= 0; j--) {
            if (i >= temaSections[j].startLine) {
                tema = temaSections[j].tema;
                break;
            }
        }
        questionsInPDF.push({ questionNum: qNum, tema: tema, line: i + 1 });
    }
}

console.log(`\n=== Total questions found in PDF text: ${questionsInPDF.length} ===`);

// Now read preguntas.js
const preguntasContent = fs.readFileSync(
    path.join(__dirname, '..', 'preguntas.js'),
    'utf-8'
);

// Extract the db array - find all question objects with their id and tema
const questionRegex = /"id":\s*(\d+)[\s\S]*?"tema":\s*(\d+)/g;
const questionsInJS = [];
let m;
while ((m = questionRegex.exec(preguntasContent)) !== null) {
    questionsInJS.push({
        id: parseInt(m[1]),
        tema: parseInt(m[2])
    });
}

console.log(`=== Total questions found in preguntas.js: ${questionsInJS.length} ===`);

// Create mappings
const pdfMap = {}; // questionNum -> tema (from PDF)
questionsInPDF.forEach(q => {
    pdfMap[q.questionNum] = q.tema;
});

const jsMap = {}; // id -> tema (from JS)
questionsInJS.forEach(q => {
    jsMap[q.id] = q.tema;
});

// Compare: note that in preguntas.js, "id" corresponds to question number in the PDF
// But the IDs in preguntas.js might be different from plain sequential numbering
// Let's first check if the IDs match the question numbers

// Actually, looking at the data, the questions in the JS use sequential odd IDs (1,3,5,7...)
// but the PDF uses sequential numbers (1,2,3,4...)
// We need to map JS question ID -> PDF question number

// Let's check the pattern
console.log('\n=== First 10 questions in JS ===');
questionsInJS.slice(0, 10).forEach(q => {
    console.log(`  ID: ${q.id}, Tema: ${q.tema}`);
});

console.log('\n=== First 10 questions in PDF ===');
questionsInPDF.slice(0, 10).forEach(q => {
    console.log(`  Num: ${q.questionNum}, Tema: ${q.tema}`);
});

// The JS IDs are odd numbers (1,3,5,...) - this means each JS id corresponds to
// a PDF question number: JS_id = 2*pdf_num - 1, or pdf_num = (JS_id + 1) / 2
// Actually looking more closely, the ID in JS IS the question number from the PDF
// Let's verify by looking at question text

// Let's build the comparison differently - use the ID in JS as the question number
// and compare the tema
console.log('\n\n=== MISMATCHES: Questions with different tema in JS vs PDF ===');
let mismatches = 0;
const mismatchDetails = [];

questionsInJS.forEach(jsQ => {
    const pdfTema = pdfMap[jsQ.id];
    if (pdfTema !== undefined && pdfTema !== jsQ.tema) {
        mismatches++;
        mismatchDetails.push({
            id: jsQ.id,
            jsTema: jsQ.tema,
            pdfTema: pdfTema
        });
        console.log(`  Question ID ${jsQ.id}: JS has tema ${jsQ.tema}, PDF has tema ${pdfTema}`);
    }
});

// Also check for questions in JS not found in PDF
const jsNotInPdf = questionsInJS.filter(q => pdfMap[q.id] === undefined);
if (jsNotInPdf.length > 0) {
    console.log(`\n=== Questions in JS but NOT in PDF (${jsNotInPdf.length}): ===`);
    jsNotInPdf.forEach(q => {
        console.log(`  ID: ${q.id}, Tema in JS: ${q.tema}`);
    });
}

// Questions in PDF not in JS
const pdfNotInJs = questionsInPDF.filter(q => jsMap[q.questionNum] === undefined);
if (pdfNotInJs.length > 0) {
    console.log(`\n=== Questions in PDF but NOT in JS (${pdfNotInJs.length}): ===`);
    pdfNotInJs.forEach(q => {
        console.log(`  Num: ${q.questionNum}, Tema in PDF: ${q.tema}`);
    });
}

console.log(`\n=== Summary ===`);
console.log(`Total mismatches: ${mismatches}`);
console.log(`Questions in JS not in PDF: ${jsNotInPdf.length}`);
console.log(`Questions in PDF not in JS: ${pdfNotInJs.length}`);

// Summary by tema
if (mismatchDetails.length > 0) {
    console.log('\n=== Mismatches grouped by tema transition ===');
    const grouped = {};
    mismatchDetails.forEach(m => {
        const key = `JS tema ${m.jsTema} -> should be PDF tema ${m.pdfTema}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(m.id);
    });
    Object.keys(grouped).forEach(key => {
        console.log(`  ${key}: questions [${grouped[key].join(', ')}]`);
    });
}
