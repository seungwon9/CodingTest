const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,k]=input[0].split(' ').map(Number);
let count = 0;
for(let i = 0;i<=n;i++){
    for(let j=0;j<60;j++){
        for(let l=0;l<60;l++){
            const s = i.toString().padStart(2, '0')+j.toString().padStart(2, '0')+l.toString().padStart(2, '0');
            if(s.includes(k.toString())){
                count ++;
            }
        }
    }
}
console.log(count);