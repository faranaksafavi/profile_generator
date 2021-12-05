const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let qS = ['What do you think of Node.js?', 'What about python?']
let aN=[]
rl.question(`${qS[0]}`, (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  aN.push(`${qS[0]}:  ${answer}`);
  rl.question(`${qS[1]}`, (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    aN.push(`${qS[1]}:  ${answer}`);
  });
  rl.close();
});