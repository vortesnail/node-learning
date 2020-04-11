const fs = require('fs');

const ws = fs.createWriteStream('./test.txt');

const tid = setInterval(() => {
  const num = parseInt(Math.random() * 10);
  console.log(num);
  if (num < 7) {
    ws.write(num + '');
  } else {
    clearInterval(tid);
    ws.end();
  }
}, 500);

ws.on('finish', () => {
  console.log('done!');
})