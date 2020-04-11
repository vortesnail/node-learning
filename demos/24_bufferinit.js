console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));
console.log(Buffer.alloc(5, 10));
console.log(Buffer.allocUnsafe(5, 11));
console.log(Buffer.from('test'));
console.log(Buffer.from('test', 'utf-8'));
console.log(Buffer.from('test', 'base64'));