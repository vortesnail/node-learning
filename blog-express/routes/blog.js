var express = require('express');
var router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog');
const { SuccessModel, ErrorModel } = require('../model/resModel');

router.get('/list', function(req, res, next) {
  let author = req.query.author || '';
  const keyword = req.query.keyword || '';

  if (req.query.isadmin) {
    // 管理员界面
    if (!req.session.username) {
      // 未登录
      res.json(
        new ErrorModel('未登录')
      );
      return;
    }
    // 强制查询自己的博客
    author = req.session.username;
  }
  const result = getList(author, keyword);
  return result.then(listData => {
    res.json(
      new SuccessModel(listData)
    );
  });
});

router.get('/detail', function(req, res, next) {
  res.json({
    errno: 0,
    data: 'OK'
  });
});

module.exports = router;
