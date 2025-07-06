const fs = require('fs');

fs.appendFile('hello.txt', 'Appended Text\n', (err) => {
  if (err) throw err;
  console.log('Text appended!');
});
