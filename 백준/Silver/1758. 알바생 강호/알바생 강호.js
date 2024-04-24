const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
let arr = input.slice(1).map((i)=>i.trim());
arr.sort((a,b)=>b-a);
let tip = 0;

for(let i = 0;i<n;i++){
    const t = arr[i]-i;
    if(t>0){
        tip += t;
    }
}
console.log(tip);