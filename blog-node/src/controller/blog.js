const getList = (author, keyword) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1586871728847,
      author: 'vortesnail'
    }, {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1586871728880,
      author: 'kaisei'
    }
  ];
};

const getDetail = (id) => {
  // 先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1586871728847,
      author: 'vortesnail'
    }
  ];
};

module.exports = {
  getList,
  getDetail
};
