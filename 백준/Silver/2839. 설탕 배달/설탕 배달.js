const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = parseInt(input[0]);
let count = parseInt(num/5);
while(1){
    let n = num;
    n-=count * 5;
    if(n%3===0){
        count += n/3;
        break;
    }
    count --;
    if(count<0){
        break;
    }
}
console.log(count);