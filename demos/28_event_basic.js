const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();

ce.on('test', () => {
  console.log('This is a test...');
})

setInterval(() => {
  ce.emit('test');
}, 1000);