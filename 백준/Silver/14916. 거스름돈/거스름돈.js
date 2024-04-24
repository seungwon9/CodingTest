const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = parseInt(input[0]);
let count = 0;
let rest = -1;
let maxCount = parseInt(n/5);
let change = false;

for(let i = maxCount;i>=0;i--){
    count = i;
    rest = n - i*5;
    if(rest%2===0){
        count += parseInt(rest/2);
        change = true;
        console.log(count);
        break;
    }
}
if(!change){
    console.log(-1);
}