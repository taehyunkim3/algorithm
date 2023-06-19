function solution(arr, query) {
    let temp = []

    for (i in query) {
        if(i%2){  // 홀수
            temp = arr.slice(query[i]);
            arr = [...temp]
        } else{
            temp = arr.slice(0, query[i]+1);
            arr = [...temp]
        }
    }
    return arr;
}