const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = +input[0];
const arr = input[1].split(" ").map(Number);

const dp = Array(a).fill(0);
dp[0] = arr[0];
for (let i = 1; i < a; i++) {
  dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
}
console.log(Math.max(...dp));
