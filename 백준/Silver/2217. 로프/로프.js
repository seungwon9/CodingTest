const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);
const weight = [];
for (let i = 0; i < n; i++) {
  weight.push(arr[i] * (n - i));
}
console.log(Math.max(...weight));
