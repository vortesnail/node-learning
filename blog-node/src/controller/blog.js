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

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title、content 等

  return {
    id: 3,    // 表示新建博客，插入到数据库中的 id
  };
};

const updateBlog = (id, blogData = {}) => {
  // id 为当前需要更新的博客 id
  // blogData 是一个博客对象，包含 title、content 等

  return true;
};

const delBlog = (id) => {
  // id 就是要删除博客的 id

  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
