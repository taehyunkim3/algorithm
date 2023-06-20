function solution(s, n) {
    let answer = '';
    for (i in s){
        let code = s.charCodeAt(i);
        if(code === 32){   // 공백은 pass
            answer = answer.concat(String.fromCharCode(code));
        } else {
            code += n;
            if(code - n <= 90 && code > 90){ //대문자->소문자경우
                code -= 26;
            }else if(code > 90 && code < 97){  // 대문자 초과시
            code -= 26;
             } else if(code > 122){   // 소문자 초과시
            code -= 26;
             }
        answer = answer.concat(String.fromCharCode(code));
        }
        
       
    }
    return answer;
}