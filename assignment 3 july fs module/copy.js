const fs = require('fs');

fs.copyFile('hello.txt', 'hello1.txt', (err) => {
  if (err) throw err;
  console.log('File copied!');
});
