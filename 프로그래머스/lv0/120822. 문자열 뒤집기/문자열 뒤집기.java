class Solution {
    public String solution(String my_string) {
       String answer= "";

        StringBuilder tmp = new StringBuilder();
        tmp.append(my_string);
        tmp.reverse();
        
        return tmp.toString();
        
    }
}