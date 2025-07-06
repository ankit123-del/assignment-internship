const fs = require('fs');

fs.writeFile('hello.txt', 'Hello World', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});
