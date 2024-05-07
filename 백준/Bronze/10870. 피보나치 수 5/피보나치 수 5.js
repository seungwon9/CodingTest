const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n=parseInt(input);

let answer = [0,1];
for(let i=2;i<=n;i++){
    answer.push(answer[i-1]+answer[i-2]);
}

console.log(answer[n]);