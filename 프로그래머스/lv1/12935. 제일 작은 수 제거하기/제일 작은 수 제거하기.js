function solution(arr) {

    let newArr = [...arr]
    newArr.sort((a,b)=>b-a);
    
    if(newArr.length===1){
        return [-1];
    } else{
        const index = arr.indexOf(newArr.pop());
        arr.splice(index, 1);
        return arr;
    }

}