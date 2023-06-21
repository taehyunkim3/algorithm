function solution(n) {

    let array = Array(n + 1).fill(true).fill(false, 0, 2);

    for (let i = 2; (i * i) <= n; i++) {
        if (array[i]) {
            for (let j = i * i; j <= n; j += i) {
                array[j] = false;
            }
        }
    }
    return array.filter(a => a === true).length;

}