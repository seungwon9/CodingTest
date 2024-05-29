const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const student = input.map(Number);
const arr = Array(31).fill(0);

for (const s of student) {
  arr[s] = 1;
}
const answer = [];
for (let i = 1; i <= 30; i++) {
  if (arr[i] === 0) answer.push(i);
}
console.log(answer.sort((a, b) => a - b).join("\n"));
