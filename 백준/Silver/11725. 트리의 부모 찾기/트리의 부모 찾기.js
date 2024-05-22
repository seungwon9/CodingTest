const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = input.slice(1).map((input) => input.trim().split(" ").map(Number));
const graph = Array.from(Array(n+1),()=>[]);
arr.forEach(([a,b])=>{
    graph[a].push(b);
    graph[b].push(a);
});
const visited = Array(n + 1).fill(false);
const queue = [1];
const priority = Array(n+1).fill(0);
priority[1] = 1;
let count = 1;
visited[1] = true;
while(queue.length){
    const node = queue.shift();
    priority[node] = count;
    count += 1;
    for(const g of graph[node]){
        if(!visited[g]){
            visited[g] = true;
            queue.push(g);
        }
    }
}
const answer = [];
for(let i=2;i<=n;i++){
    const a = Math.max(...graph[i].filter(g=>priority[g]<priority[i]));
    answer.push(a);
}
console.log(answer.join('\n'));