const fs = require('fs');

const content = Buffer.from('This is a writeFile test...');

fs.writeFile('./text', content, {
  encoding: 'utf-8'
}, err => {
  if (err) throw err;

  console.log('done!');
});