function solution(A, B) {
    var answer = 0;
    while(A!==B){
        A = A.slice(A.length - 1,A.length)+A.slice(0,A.length-1);
        answer += 1;
        if(answer>A.length){
            answer = -1;
            break;
        }
    }
    return answer;
}