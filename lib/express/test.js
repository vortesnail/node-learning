const express = require('./like-express');

// 本次 http 请求的实例
const app = express();

app.use((req, res, next) => {
  console.log('请求开始...', req.method, req.url);
  next();
});

app.use((req, res, next) => {
  // 假设在处理 cookie
  console.log('处理 cookie ...');
  req.cookie = {
    userId: 'abc123'
  };
  next();
});

app.use('/api', (req, res, next) => {
  console.log('处理 /api 路由');
  next();
});

app.get('/api', (req, res, next) => {
  console.log('get /api 路由');
  next();
});

// 模拟登录
function loginCheck(req, res, next) {
  setTimeout(() => {
    console.log('模拟登录成功...');
  }, 1000);
}

app.get('/api/get-cookie', loginCheck, (req, res, next) => {
  console.log('get /api/get-cookie ...');
  res.json({
    errno: 0,
    data: req.cookie
  });
});

app.listen(7777, () => {
  console.log('The server is runing on post 7777 ...');
});
