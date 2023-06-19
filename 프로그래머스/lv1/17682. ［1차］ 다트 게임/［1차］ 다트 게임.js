function solution(dartResult) {

const scoreArray = dartResult.match(/\d+[SDT][*#]?/g);
    //각 회차 숫자 분리하기
const scores = scoreArray.map(a=>a.match(/\d+|[SDT]|[#*]/g));
    //각 요소 분리하기
    
let sum = [];
    
    for (i in scores){
        let tempScore = Number(scores[i][0]);
        if(scores[i][1]==='D'){
            tempScore = tempScore**2;
        } else if(scores[i][1]==='T'){
            tempScore = tempScore**3; 
        }
        sum.push(tempScore);
        if(scores[i][2]==="*"){
            sum[sum.length-1] *= 2;
            if(sum.length>1){
                sum[sum.length-2] *= 2;
            }
        } else if(scores[i][2]==="#"){
            sum[sum.length-1] = -(sum[sum.length-1]);
        }
    }
    
return sum.reduce((acc, curr)=>acc+curr);
    
    
    
}