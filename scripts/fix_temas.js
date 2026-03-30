// Script to fix tema assignments in preguntas.js
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'preguntas.js');
let content = fs.readFileSync(filePath, 'utf-8');

// We need to update questions 75-98: tema 3 -> tema 4, tema_title for temas 4+5
// Questions 99-122: tema 3 -> tema 6, tema_title for temas 6+7  
// Questions 148-172: tema 8 -> tema 9, tema_title for temas 9+10
// Questions 173-197: tema 8 -> tema 11, tema_title for temas 11+12

const temaMap = {
    '4': {
        title: "Funcionamiento electrónico del Sector Público (I) y (II)",
        ids: Array.from({ length: 24 }, (_, i) => i + 75) // 75-98
    },
    '6': {
        title: "Funcionamiento electrónico del Sector Público (III) y (IV)",
        ids: Array.from({ length: 24 }, (_, i) => i + 99) // 99-122
    },
    '9': {
        title: "La Ley de Contratos del Sector Público (I) y (II)",
        ids: Array.from({ length: 25 }, (_, i) => i + 148) // 148-172
    },
    '11': {
        title: "La actividad subvencional de las Administraciones Públicas (I) y (II)",
        ids: Array.from({ length: 25 }, (_, i) => i + 173) // 173-197
    }
};

// Parse the JS file to find and fix each question
// Since the file has a structure like:
//   "id": X,
//   ...
//   "tema": Y,
//   "tema_title": "...",

// Build a map of id -> { newTema, newTitle }
const idToFix = {};
for (const [newTema, info] of Object.entries(temaMap)) {
    for (const id of info.ids) {
        idToFix[id] = { newTema: parseInt(newTema), newTitle: info.title };
    }
}

// Use regex to find each question block and fix tema/tema_title
let fixCount = 0;

// Match each question object
const regex = /("id":\s*)(\d+)([\s\S]*?)("tema":\s*)(\d+)(,\s*\n\s*"tema_title":\s*")([^"]*?)(")/g;

content = content.replace(regex, (match, idPre, idVal, between, temaPre, temaVal, titlePre, titleVal, titlePost) => {
    const id = parseInt(idVal);
    if (idToFix[id]) {
        fixCount++;
        const fix = idToFix[id];
        return `${idPre}${idVal}${between}${temaPre}${fix.newTema}${titlePre}${fix.newTitle}${titlePost}`;
    }
    return match;
});

console.log(`Fixed ${fixCount} questions in preguntas.js`);
fs.writeFileSync(filePath, content, 'utf-8');
console.log('File saved successfully.');
