const EventEmitter = require('events');

class CustomEvent extends EventEmitter {}

const ce = new CustomEvent();

ce.once('test', () => {
  console.log('This is a once test');
});

setInterval(() => {
  ce.emit('test');
}, 1000);