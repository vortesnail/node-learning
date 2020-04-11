const fs = require('fs');

fs.unlink('./text.txt', (err) => {
  if (err) throw err;

  console.log('done!');
})