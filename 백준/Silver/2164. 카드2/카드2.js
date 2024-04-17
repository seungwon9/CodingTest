const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
const array = Array.from({length: n}, (_,index)=>index + 1);
let front = 0;
let rear = n;
while(rear-front>1){
    front ++;
    array.push(array[front]);
    front ++;
    rear ++;
}

console.log(array[front]);