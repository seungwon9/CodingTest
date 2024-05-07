const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = parseInt(input[0]);

for(let i=0;i<n;i++){
    const [west,east] = input[i+1].split(' ').map(Number);
    if(west === east){
        console.log(1);
    }else{
        let mul = 1n;
        let div = 1n;
        for(let j=0;j<west;j++){
            mul *= BigInt(east - j);
            div *= BigInt(j + 1);
        }
        console.log((mul/div).toString());
    }
}