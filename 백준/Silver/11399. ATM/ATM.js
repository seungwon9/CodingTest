const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
let arr = input[1].split(' ').map(Number);
arr = arr.sort((a,b)=> a-b);
let time = 0;
let sum = 0;
for(let i=0;i<n;i++){
    time += arr[i];
    sum += time;
}
console.log(sum);