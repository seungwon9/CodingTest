const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];
const m = +input[2];
const arr = input[1].split(" ").map(Number);
const cards = input[3].split(" ").map(Number);
const cardSet = new Set([...arr]);
const answer = [];
for (let i = 0; i < m; i++) {
  if (cardSet.has(cards[i])) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}
console.log(answer.join(" "));
