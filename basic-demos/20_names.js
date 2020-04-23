const path = require('path');
const { basename, extname, dirname } = path;

const filePath = '/usr/local/bin/no.txt';

// basename 文件名
// extname 后缀名
// dirname 路径名
console.log(basename(filePath));
console.log(extname(filePath));
console.log(dirname(filePath));