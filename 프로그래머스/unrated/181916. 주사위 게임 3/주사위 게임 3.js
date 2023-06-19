
function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const object = {};
    arr.forEach((a) => {
        if (object[a]) {
            object[a] += 1
        } else {
            object[a] = 1;
        }
    })

    let keys = Object.keys(object);
    let tempkeys = keys.map(x => parseInt(x));
    keys = [...tempkeys];
    const values = Object.values(object).sort((a, b) => b - a);

    let answer = 0;

    switch (keys.length) {
        case 1:
            answer = 1111 * keys[0];
            break;
        case 2:
            if (values[0] === 3) {
                const max = keys.filter(x => object[x] === 3)[0];
                const min = keys.filter(x => object[x] === 1)[0];
                answer = ((10 * max) + min) ** 2;
            } else {
                answer = (keys[0] + keys[1]) * Math.abs(keys[0] - keys[1]);
            }
            break;
        case 3:
            const max = keys.filter(x => object[x] === 2)[[0]];
            const rest = keys.filter(x => object[x] !== 2);
            answer = rest[0] * rest[1];
            break;
        case 4:
            answer = Math.min(...keys);
            break;
    }
    return answer;
}
