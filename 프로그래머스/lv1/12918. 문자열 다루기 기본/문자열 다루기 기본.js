function solution(s) {
    if(s.match(/[a-zA-Z]/g)===null){
        if(s.length===4 || s.length===6){
            return true
        }
        return false;
    } else{
        return false
    }
} 