const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

rl.question("Enter username: ", (user) => {
  rl.question("Enter password: ", (pass) => {
    if (user === credentials.username && parseInt(pass) === credentials.password) {
      console.log("✅ Login successful!");
    } else {
      console.log("❌ Invalid credentials.");
    }
    rl.close();
  });
});
