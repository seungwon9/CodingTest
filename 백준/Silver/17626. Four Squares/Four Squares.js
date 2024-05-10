const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);

const dp = new Array(n+1).fill(4);
dp[0] = 0;
dp[1] = 1;
for (let i = 2; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}
console.log(dp[n]);
