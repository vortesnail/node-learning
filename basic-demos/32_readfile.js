const fs = require('fs');

fs.readFile('./32_readfile.js', 'utf-8',(err, data) => {
  if (err) throw err;

  console.log(data);
});

const data = fs.readFileSync('./01_run.js', 'utf-8');

console.log(data);