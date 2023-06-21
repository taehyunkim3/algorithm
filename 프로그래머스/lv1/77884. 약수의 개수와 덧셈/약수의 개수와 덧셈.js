function solution(left, right) {
    const max = Math.max(left, right);
    const min = Math.min(left, right);
    let arr = [];

    for (let i = min; i <= max; i++) {
        arr.push(i);
    }

    let odd = 0;
    let even = 0;

    for (n of arr) {
        let count = 1;
        for (let j = 2; j <= n; j++) {
            if (n % j === 0) count++;
        }
        count % 2 ? odd += n : even += n;
    }



    return even - odd;
}

