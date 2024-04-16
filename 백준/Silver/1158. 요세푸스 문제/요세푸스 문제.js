const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,k] = input[0].split(' ');

let array = Array.from( {length: n}, (_, index) => index + 1);
let answer = [];
while(array.length>0){
    for(let i=1;i<k;i++){
        array.push(array.shift());
    }
    answer.push(array.shift());
}
console.log(`<${answer.join(', ')}>`);