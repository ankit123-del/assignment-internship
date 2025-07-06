const fs = require('fs');

if (!fs.existsSync('myFolder')) {
  fs.mkdir('myFolder', (err) => {
    if (err) throw err;
    console.log('Directory created!');
  });
} else {
  console.log('Directory already exists.');
}
