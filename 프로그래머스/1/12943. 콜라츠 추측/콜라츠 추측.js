function solution(num) {
    var r = 0;
    if(num === 1)return 0;
    while(num > 1){
        r += 1;
        if(r%500===0){
            return -1;
        }
     if(num%2===0){
        num/=2;
    }else{
        num = num * 3 + 1;
    }   
    }
    
    return r;
}