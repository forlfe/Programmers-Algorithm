function solution(n) {
    var answer = 0;
    
    var str = n.toString();
    const arr = str.split("");
    
    const arr2 = arr.sort((a, b) => b-a );
    
    const str2 = arr2.join("");
    
    return parseInt(str2);

}