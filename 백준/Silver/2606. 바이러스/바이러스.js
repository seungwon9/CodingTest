const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input.shift();
const m = +input.shift();
const arr = input.map((input) => input.trim().split(" ").map(Number));

const graph = Array.from(Array(n+1),()=>[]);
arr.forEach(([a,b])=>{
    graph[a].push(b);
    graph[b].push(a);
});
const visited = Array(n+1).fill(false);
visited[1] = true;
const queue = [1];
let count = 0;
while(queue.length){
    const node = queue.shift();
    for(const g of graph[node]){
        if(!visited[g]){
            visited[g] = true;
            queue.push(g);
            count += 1;
        }
        
    }
}
console.log(count);