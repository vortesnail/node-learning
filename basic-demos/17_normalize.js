const path = require('path');
const normalize = path.normalize;

// 规范化给定的 path
console.log(normalize('/user//local/bin'));
console.log(normalize('/user//local/../bin'));