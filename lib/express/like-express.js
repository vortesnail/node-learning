const http = require('http');

class LikeExpress {
  constructor() {
    // 存放中间件的列表
    this.routes = {
      all: [],  // app.use
      get: [],  // app.get
      post: []  // app.post
    };
  }

  register(path) {
    const info = {};
    if (typeof path === 'string') {
      info.path = path;
      // 从第二个参数开始，转化为数组，存入 stack
      info.stack = Array.prototype.slice.call(arguments, 1);
    } else {
      info.path = '/';
      // 从第一个参数开始，转化为数组，存入 stack
      info.stack = Array.prototype.slice.call(arguments, 0);
    }
    return info;
  }

  use() {
    const info = this.register.apply(this, arguments);
    this.routes.all.push(info);
  }

  get() {
    const info = this.register.apply(this, arguments);
    this.routes.get.push(info);
  }

  post() {
    const info = this.register.apply(this, arguments);
    this.routes.post.push(info);
  }

  match(method, url) {
    let stack = [];
    if (url === '/favicon.icon') {
      return stack;
    }

    // 获取 routes
    let curRoutes = [];
    curRoutes = curRoutes.concat(this.routes.all);
    curRoutes = curRoutes.concat(this.routes[method]);

    curRoutes.forEach(routerInfo => {
      if (url.indexOf(routerInfo.path) === 0) {
        // url === '/api/get-cookie' 且 routerInfo.path === '/'
        // url === '/api/get-cookie' 且 routerInfo.path === '/api'
        // url === '/api/get-cookie' 且 routerInfo.path === '/api/get-cookie'
        stack = stack.concat(routerInfo.stack);
      }
    });

    return stack;
  }

  // 核心的 next 机制
  handle(req, res, stack) {
    const next = () => {
      // 拿到第一个匹配的中间件
      const middleWare = stack.shift();
      if (middleWare) {
        // 执行中间件函数
        // 传入的 next 作用仔细想想即为
        // 当使用的时候 next()，就会继续执行第二个中间件函数，非常巧妙
        middleWare(req, res, next);
      }
    };

    next();
  }

  callback() {
    console.log(1111111);
    return (req, res) => {
      res.json = (data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify(data)
        );
      };
      const url = req.url;
      const method = req.method.toLowerCase();

      const resultList = this.match(method, url);
      this.handle(req, res, resultList);

      console.log(222);
    };
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

// 工厂函数
module.exports = () => {
  return new LikeExpress();
};
