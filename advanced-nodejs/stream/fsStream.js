const fs = require('fs');
const wt = fs.createWriteStream('.file.txt');
process.stdin.pipe(wt);