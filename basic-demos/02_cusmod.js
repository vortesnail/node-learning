console.log('This is a module');

const testVar = 100;

function test () {
  console.log(testVar + 1);
}

module.exports.testVar = testVar;
module.exports.testFn = test;