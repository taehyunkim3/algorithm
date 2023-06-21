function solution(N, stages) {

    let points = [];
    let stageSort = [];
    for(let i = 1; i <= N; i++){
        let approach = stages.filter(a=>a>=i).length;
        let clear = stages.filter(a=>a>i).length;
        if(approach === 0){
            points.push(0)
        } else{
            points.push((approach-clear)/approach)
        }
        stageSort.push(i);
    }
    
    return stageSort.sort((a, b)=>points[b-1]-points[a-1])

    
    
}