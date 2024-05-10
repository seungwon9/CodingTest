const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);


for (let i = 1; i <= n; i++) {
    const dp = new Array(parseInt(input[i])+1).fill(0);
dp[0] = 1;
dp[1] = 1;
    for(let j=2;j<=parseInt(input[i]);j++){
        if(j>=1) dp[j]+=dp[j-1];
        if(j>=2) dp[j]+=dp[j-2];
        if(j>=3) dp[j]+=dp[j-3];
    }
    console.log(dp[parseInt(input[i])]);
}
