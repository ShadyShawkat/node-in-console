
const fs = require('fs');

exports.getNotes = () => fs.readFileSync('notes.txt', 'utf8');
