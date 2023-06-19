
function solution(n, arr1, arr2) {

    arr1Changed = [];
    arr2Changed = [];

    arrCombined = [];
    for (i in arr1) {
        arr1Changed.push(arr1[i].toString(2).padStart(n, '0'));
        arr2Changed.push(arr2[i].toString(2).padStart(n, '0'));
    }
    for (i in arr1Changed) {
        let temparr = [];
        for (j in arr1Changed) {

            if (arr1Changed[i][j] === '0' && arr2Changed[i][j] === '0') {
                temparr.push(' ');
            } else {
                temparr.push('#');
            }

        }
        arrCombined.push(temparr.join(''));
    }

    return arrCombined;
}