const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = input[0];
let wrong = false;

let arr = n.split('.');
for(let i=0;i<arr.length;i++){
    if((arr[i].length%2===1)&&arr[i].length>0){
        wrong = true;
        break;
    }
    let count = parseInt(arr[i].length/4);
    let rest = arr[i].length%4;
    arr[i] = 'AAAA'.repeat(count);
    count = parseInt(rest/2);
    arr[i] += 'BB'.repeat(count);
}
console.log(wrong?-1:arr.join('.'));