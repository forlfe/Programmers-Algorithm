function solution(x) {
    var answer = true;

    let str = String(x).split("");
    var sum = 0;
    
    for(let i = 0 ; i < str.length; i++) {
        sum += Number(str[i]);
    }
    console.log(sum);
    
    if(x % sum == 0 ) {
        answer = true;
    } else answer = false;
    
    return answer;
}