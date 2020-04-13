const handleBlogRouter = (req, res) => {
  const method = req.method;

  // 获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    return {
      mas: '这是获取博客列表的接口!'
    };
  }

  // 获取博客详情
  if (method === 'GET' && req.path === '/api/blog/detail') {
    return {
      mas: '这是获取博客详情的接口!'
    };
  }

  // 新建一篇博客
  if (method === 'POST' && req.path === '/api/blog/new') {
    return {
      mas: '这是新建博客的接口!'
    };
  }

  // 更新一篇博客
  if (method === 'POST' && req.path === '/api/blog/update') {
    return {
      mas: '这是更新博客的接口!'
    };
  }

  // 删除一篇博客
  if (method === 'POST' && req.path === '/api/blog/delete') {
    return {
      mas: '这是删除博客的接口!'
    };
  }
};

module.exports = handleBlogRouter;
