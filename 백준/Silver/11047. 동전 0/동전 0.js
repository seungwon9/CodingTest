const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [n,k] = input[0].split(' ');
const arr = input.slice(1).map(Number).sort((a,b)=>b-a);

let max=0;
let count=0;
for(let i=0;i<n;i++){
    while(k>=arr[i]){
        k-=arr[i];
        count ++;
    }
}
console.log(count);