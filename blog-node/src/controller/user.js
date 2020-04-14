const loginCheck = (username, password) => {
  // 先使用假数据
  if (username === 'vortesnail' && password === '1234') {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck
};
