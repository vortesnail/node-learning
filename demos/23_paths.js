const path = require('path');

const mod = require('./02_cusmod');
console.log(mod.testVar);

// __dirname 文件所在绝对路径
console.log('__dirname    ', __dirname);
// process.cwd() ./ 总是返回 node 命令执行的所在文件夹路径
console.log('process.cwd()', process.cwd());
console.log('./           ', path.resolve('./'));