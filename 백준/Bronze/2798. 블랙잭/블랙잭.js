const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,k] = input[0].split(' ');
const arr = input[1].split(' ').map(Number);

let max=0;
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        for(let l=j+1;l<n;l++){
            const sum = arr[i]+arr[j]+arr[l];
            if(sum<=k && sum>max){
                max = sum;
            }
        }
    }
}
console.log(max);