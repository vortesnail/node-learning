const { join } = require('path');

// 拼接路径
console.log(join('/user', 'local', 'bin'));
console.log(join('/user/', '/local/', '/bin/'));
console.log(join('/user', 'local', '../', 'bin/'));