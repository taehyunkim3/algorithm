function solution(k, tangerine) {


    // let obj = [[key, value], [key, value], []]; 10,000,000
    //{ '1': 1, '2': 2, '3': 2, '4': 1, '5': 2 }

    let obj = {};
    for (a of tangerine) {
        obj[a] = (obj[a] || 0) + 1
    }


    //obj의 value값만 배열에 넣기

    // const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    const sorted = Object.values(obj).sort((a, b) => b - a);

    let answer = 0;  // 횟수
    let temp_sum = 0;   // 갯수비교용
    for (a of sorted) {
        if (temp_sum < k) {  // a의 값과 k를 비교
            answer++;
            temp_sum += a;
        } else {
            break;
        }
    }
    return answer;

}