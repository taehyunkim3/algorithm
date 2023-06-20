function solution(n, lost, reserve) {

    
    let doubleReserve = [];
    let singleReserve = [];
    let plus = lost.map((a)=>a+1);
    let minus = lost.map((b)=>b+1);
    
    for (n of plus){
        if(minus.includes(n)){
            doubleReserve.push(n-1);
        
        } else{
            singleReserve.push(n-1);
        }
    }
    
    for (i in singleReserve){
        for (j in lost){
                 if(singleReserve[i]+1 === lost[j]||singleReserve[i]-1 === lost[j]){
                     lost = lost.splice(j, 1);
                     singleReserve = singleReserve.splice(i, 1);
                 }   
        }

    }
    
        for (i in doubleReserve){
        for (j in lost){
                 if(doubleReserve[i]+1 === lost[j]||doubleReserve[i]-1 === lost[j]){
                     lost = lost.splice(j, 1);
                     doubleReserve = doubleReserve.splice(i, 1);
                 }   
        }

    }
    
    return n - lost.length
    
    
    
    
    
    
    
    
    

    return
    
    
    
    
}