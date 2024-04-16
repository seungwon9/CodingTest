const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input.shift();
let stack = [];
let answer = [];
for(let i = 0;i<n;i++){
    const method = input.shift();
    switch(true){
        case method.includes('push'):
            const a = method.slice(5,);
            stack.push(a);
            break;
    
        case method.includes('pop'):
            if(stack.length === 0){
                answer.push(-1);
            }else{
                answer.push(stack.pop());
            }
            break;
        case method.includes('size'):
            answer.push(stack.length);
            break;
    
        case method.includes('empty'):
            if(stack.length===0){
                answer.push(1);
            }else{
                answer.push(0);
            }
            break;
        case method.includes('top'):
            if(stack.length===0){
                answer.push(-1);
            }else{
                answer.push(stack[stack.length-1]);
            }
            break;
    }
}
console.log(answer.join('\n'));