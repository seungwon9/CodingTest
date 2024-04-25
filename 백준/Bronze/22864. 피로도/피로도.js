const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a,b,c,m]=input[0].split(' ').map(Number);

let t = 0;
let w = 0;

for(let i=0;i<24;i++){
    if(t+a<=m){
        t+=a;
        w++;
    }else{
        t-=c;
        if(t<0){
            t=0;
        }
    }
}
console.log(b*w);