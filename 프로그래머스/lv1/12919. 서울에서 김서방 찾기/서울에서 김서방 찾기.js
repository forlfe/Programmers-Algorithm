function solution(seoul) {
    var answer = '';
    
    for(let i = 0 ; i < seoul.length; i++){
        if(seoul[i] == "Kim"){
            answer = i;
        }
    }
    
    var answer2 = "김서방은 " + answer + "에 있다" 
    return answer2;
}