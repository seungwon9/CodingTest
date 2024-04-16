const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input.shift();
for(let i = 0;i<n;i++){
    const arr = input.shift();
    let num = 0;
    let answer = true;
    for(let j=0;j<arr.length;j++){
        if(arr[j]==='('){
            num += 1;
        }else if(arr[j]===')'){
            num -= 1;
        }
        if(num<0){
            answer = false;
            break;
        }
    }
    if(answer){
      console.log(num === 0 ? 'YES':'NO');  
    } else {
        console.log("NO");
    } 
}
