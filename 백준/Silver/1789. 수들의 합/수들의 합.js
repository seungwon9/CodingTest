const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
let x = 0;
while (x * x + x <= 2 * n) {
  x += 1;
}
console.log(x - 1);
