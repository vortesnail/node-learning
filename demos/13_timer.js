setImmediate(() => {
  console.log('setImmediate');
})

setTimeout(() => {
  console.log('setTimeout');
}, 0);

process.nextTick(() => {
  console.log('nextTick1');
  process.nextTick(() => {
    console.log('nextTick2');
  })
})