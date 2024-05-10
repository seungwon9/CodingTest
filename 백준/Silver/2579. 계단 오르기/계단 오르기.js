const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);

const scores = input.splice(1).map(Number);
const dp = Array(n+1).fill(0);
dp[1] = scores[0];
dp[2] = scores[0]+scores[1];
dp[3] = scores[2]+Math.max(scores[0],scores[1]);
for(let i=4;i<=n;i++){
    dp[i]=scores[i-1]+Math.max(dp[i-3]+scores[i-2],dp[i-2]);
}
console.log(dp[n]);
