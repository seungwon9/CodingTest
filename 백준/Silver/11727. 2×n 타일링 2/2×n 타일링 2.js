const fs = require("fs");

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = +input[0];

const MOD = 10007;

// DP 배열 초기화
let dp = new Array(n + 1).fill(0);

// 초기 조건 설정
dp[0] = 1;
dp[1] = 1;

// DP 점화식
for (let i = 2; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + (i >= 2 ? dp[i - 2] : 0)) % MOD;
}

console.log(dp[n]);
