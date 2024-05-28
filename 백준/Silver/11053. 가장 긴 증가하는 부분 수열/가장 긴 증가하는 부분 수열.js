const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array(a).fill(1);
for (let i = 1; i < a; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(Math.max(...dp));
