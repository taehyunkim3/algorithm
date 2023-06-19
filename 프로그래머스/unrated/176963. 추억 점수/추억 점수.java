import java.util.HashMap;

class Solution {
    public int[] solution(String[] name, int[] yearning, String[][] photo) {
      
        HashMap<String, Integer> map = new HashMap<>();
        
        int[] answer = new int[photo.length];
    
        for(int i = 0; i < name.length; i++){ 
                map.put(name[i], yearning[i]);
        }
        
        for(int i = 0; i < photo.length; i++) {
            int temp_score = 0;
            for(int j = 0; j < photo[i].length; j++) {
                if(map.get(photo[i][j]) != null)
               temp_score = temp_score + map.get(photo[i][j]);
            }
            answer[i] = temp_score;
        }
                 return answer;
    }

}