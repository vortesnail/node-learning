const http = require('http');

const server = http.createServer((req, res) => {
  // 模拟日志
  console.log('cut time: ', Date.now());
  // 模拟错误
  console.error('假装我错了');

  // 模拟会导致程序崩溃的错误
  if (req.url === '/err') {
    throw new Error('/err 出错了');
  }

  res.setHeader('Content-type', 'application/json');
  res.end(
    JSON.stringify({
      errno: 0,
      msg: 'pm2 test server 1'
    })
  );
});

server.listen(8000, () => {
  console.log('Ths server is listening on port 8000');
});
