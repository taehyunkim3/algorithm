function solution(n, lost, reserve) {

    
    let realReserve = reserve.filter((a)=>!lost.includes(a)).sort((a,b)=>a-b);
    let realLost = lost.filter((a)=>!reserve.includes(a)).sort((a,b)=>a-b);
    
    let notBorrowed = realLost.filter((a)=>{
        let found = realReserve.find((b)=>Math.abs(a-b)==1);
         realReserve = realReserve.filter((c)=>c!==found);
        if(!found){  //find에 아무것도 없으면
            return true;
        }
 
        }).length;
    
    return n-notBorrowed;
    
    
}