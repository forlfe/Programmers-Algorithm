using System;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        for (int i = 1; i <= n; i++){
            if (n/7 > 0 && n%7 == 0){
                answer = (n/7);
            }else if (n/7 > 0 && n/7 !=0){
                answer = (n/7) + 1;
            }
            else if(n/7 == 0){
                answer = 1;
            }
        }
        return answer;
    }
}