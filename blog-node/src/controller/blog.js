const { exec, escape } = require('../db/mysql');
const xss = require('xss');

const getList = (author, keyword) => {
  author = escape(author);
  // where 1=1 是为了防止 author 和 keyword 都为空情况下 sql 不报错
  let sql = 'select * from blogs where 1=1 ';
  if (author) {
    sql += `and author=${author} `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`;
  }
  sql += 'order by createTime desc';

  // 返回 promise
  return exec(sql);
};

const getDetail = (id) => {
  id = escape(id);
  const sql = `select * from blogs where id=${id}`;
  return exec(sql).then(rows => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title、content 等
  const title = escape(xss(blogData.title));
  const content = escape(blogData.content);
  const author = escape(blogData.author);
  const createTime = Date.now();

  const sql = `
    insert into blogs (title, content, author, createTime)
    values (${title}, ${content}, ${author}, '${createTime}');
  `;

  return exec(sql).then(insertData => {
    // console.log(insertData);
    return {
      id: insertData.insertId
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  // id 为当前需要更新的博客 id
  // blogData 是一个博客对象，包含 title、content 等
  const title = escape(xss(blogData.title));
  const content = escape(blogData.content);

  const sql = `
    update blogs set title=${title}, content=${content} where id=${id};
  `;

  return exec(sql).then(updateData => {
    // console.log(updateData);
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

const delBlog = (id, author) => {
  id = escape(id);
  author = escape(author);
  // id 就是要删除博客的 id
  const sql = `
    delete from blogs where id=${id} and author=${author};
  `;

  return exec(sql).then(deleteData => {
    // console.log(deleteData);
    if (deleteData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
};
