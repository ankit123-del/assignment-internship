const fs = require('fs');

fs.unlink('sher.txt', (err) => {
  if (err) throw err;
  console.log('deleteMe.txt deleted!');
});
