/*
 *  require 特性：
 *    - module 被加载的时候执行，加载后缓存
 *    - 一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出
 */

const modA = require('./05_modA');
const modB = require('./05_modB');

console.log(modA.test);
console.log(modB.test);