function solution(d, budget) {

    d.sort((a,b)=>a-b);
    let index = 0;
    let answer = 0;
    for (i in d){
        index ++;        
        answer += d[i];
        if( answer == budget){

            break;
        }else if (answer>budget) {
            index--;
            break;
        }

    }
    return index;
}