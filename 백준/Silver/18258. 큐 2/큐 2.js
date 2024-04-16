const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

/*
shift 메서드는 시간복잡도 O(n)이므로 인덱스로 큐 구현
*/

const n = input[0];
let queue = [];
let answer = [];
let front = 0;
let rear = 0;
for(let i = 0;i<n;i++){
    const method = input[i+1];
    switch(true){
        case method.includes('push'):
            const a = method.slice(5,);
            queue.push(a);
            rear ++;
            break;
    
        case method.includes('pop'):
            if(rear-front === 0){
                answer.push(-1);
            }else{
                answer.push(queue[front]);
                front ++;
            }
            break;
        case method.includes('size'):
            answer.push(rear - front);
            break;
    
        case method.includes('empty'):
            if(rear-front===0){
                answer.push(1);
            }else{
                answer.push(0);
            }
            break;
        case method.includes('front'):
            if(rear-front===0){
                answer.push(-1);
            }else{
                answer.push(queue[front]);
            }
            break;
        case method.includes('back'):
            if(rear-front===0){
                answer.push(-1);
            }else{
                answer.push(queue[rear-1]);
            }
            break;
    }
}
console.log(answer.join('\n'));