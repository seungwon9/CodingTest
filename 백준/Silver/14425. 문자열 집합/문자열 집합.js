const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ');
const arr = input.slice(1).map(a=>a.trim());
const set = new Set(arr.slice(0,n));
const marr=arr.slice(n);
let count = 0;
for(let i = 0;i<m;i++){
    if(set.has(marr[i])){
        count ++;
    }
}
console.log(count);