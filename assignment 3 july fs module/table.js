const fs = require('fs');

for (let i = 1; i <= 10; i++) {
  let table = '';
  for (let j = 1; j <= 10; j++) {
    table += `${i} x ${j} = ${i * j}\n`;
  }
  fs.writeFile(`table-${i}.txt`, table, (err) => {
    if (err) throw err;
    console.log(`table-${i}.txt created`);
  });
}
