function solution(n) {
    var answer = 0;
    for(let i=0;i<n;i++){
        answer += 1;
        answer = sol(answer);
    }
    return answer;
}
function sol(n){
    if(n % 3 === 0 || n.toString().includes('3')){
        n+=1;
        return sol(n);
    }
    return n;
}