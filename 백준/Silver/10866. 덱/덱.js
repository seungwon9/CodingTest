const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input[0]);
let deque = [];
let answer = [];
for(let i = 0;i<n;i++){
    const method = input[i+1];
    let num;
    switch(true){
        case method.startsWith('push_front') :
            num = parseInt(method.split(' ')[1]);
            deque.unshift(num);
            break;
        case method.startsWith('push_back') :
            num = parseInt(method.split(' ')[1]);
            deque.push(num);
            break;
        case method.startsWith('pop_front') :
            if(deque.length===0){
                answer.push(-1);
            }else{
                answer.push(deque.shift());
            }
            break;
        case method.startsWith('pop_back') :
            if(deque.length===0){
                answer.push(-1);
            }else{
                answer.push(deque.pop());
            }
            break;
        case method.startsWith('size') :
            answer.push(deque.length);
            break;
        case method.startsWith('empty') :
            answer.push(deque.length===0?1:0);
            break;
        case method.startsWith('front') :
            if(deque.length===0){
                answer.push(-1);
            }else{
                answer.push(deque[0]);
            }
            break;
        case method.startsWith('back') :
            if(deque.length===0){
                answer.push(-1);
            }else{
                answer.push(deque[deque.length-1]);
            }
            break;
    }
}
console.log(answer.join('\n'));