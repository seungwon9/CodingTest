const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const t = +input[0];
const answer = [];
for (let i = 0; i < t * 2; i += 2) {
  const n = +input[i + 1];
  const arr = input[i + 2].split(" ").map(Number);
  answer.push([Math.min(...arr), Math.max(...arr)].join(" "));
}
console.log(answer.join("\n"));
