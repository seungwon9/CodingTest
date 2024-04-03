function solution(array, commands) {
    var answer = [];
    for(let command of commands){
        let [i, j, k] = command;
        const slicedArray = array.slice(i-1,j).sort((a,b)=>a-b);
        answer.push(slicedArray[k-1]);
    }
    return answer;
}