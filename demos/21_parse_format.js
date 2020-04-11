const path = require('path');
const { parse, format } = path;

const filePath = '/usr/local/node_modules/n/package.json';

const ret = parse(filePath);
console.log(ret);

const ret2 = format(ret);
console.log(ret2);
