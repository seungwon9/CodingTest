const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n,m,v] = input[0].split(' ').map(Number);
const arr = input.slice(1).map((input) => input.trim().split(" ").map(Number));
const graph = Array.from(Array(n+1),()=>[]);
arr.forEach(([a,b])=>{
    graph[a].push(b);
    graph[b].push(a);
});
const bGraph = graph.map(g=>[...g].sort((a,b)=>a-b));
const dGraph = graph.map(g=>[...g].sort((a,b)=>b-a));
const dvisited = Array(n+1).fill(false);
const bvisited = [...dvisited];
bvisited[v] = true;
const stack = [v];
const queue = [v];
const danswer = [];
const banswer = [];

const dfs = ()=>{
    while(stack.length){
    const node = stack.pop();
    if(!dvisited[node]){
        danswer.push(node);
    dvisited[node] = true;
    for(const g of dGraph[node]){
        stack.push(g);
    }
    }
    
}
}

const bfs =()=>{
    while(queue.length){
    const node = queue.shift();
    banswer.push(node);
    for(const g of bGraph[node]){
        if(!bvisited[g]){
            queue.push(g);
            bvisited[g]=true;
        }
    }
}
}
dfs();
bfs();
console.log(danswer.join(' '));
console.log(banswer.join(' '));
