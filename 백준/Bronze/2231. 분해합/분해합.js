const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);

let dn = n;
let count = 0;
let bool = false;
while(dn>1){
    dn/=10;
    count ++;
}
let m = n - 9*count;
while(m<n){
    let sum = m;
    let d = sum;
    for(let i=1;i<=count;i++){
        sum = sum + (d%10);
        d = parseInt(d/10);
    }
    if(sum===n){
        bool = true;
        break;
    }
    m ++;
}
console.log(bool?m:0);