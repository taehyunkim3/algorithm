function solution(s) {
let answer = '';
    
    if(s.length%2){    //홀수일 경우
        const index = parseInt(s.length/2); 
        //절반값에서 소수점.5 빼면 가운데 인덱스
        
        answer = s.slice(index, index+1);
    } else {    //짝수일 경우
        const index = (s.length/2)-1;
        //절반값에서 1을 빼면 자르는 시작 인덱스
        
        answer = s.slice(index, index+2);
        //+2 해줘야 2개 나옴.
    }
    return answer;
}