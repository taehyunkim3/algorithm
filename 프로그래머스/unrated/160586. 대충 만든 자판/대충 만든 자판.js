function solution(keymap, targets) {

    let result = [];
    //타겟1개중
    for (targetsIndex in targets) {

        let targetCount = [];


        for (targetElement of targets[targetsIndex]) {//타겟 한개중 타겟한글자
            let keymapCount = [];
            for (a of keymap) { //키맵 종류 하나씩 테스트
                let index = a.search(targetElement);
                index === -1
                    ? keymapCount.push(index)
                    : keymapCount.push(index + 1);
            }
            keymapCount.sort((a, b) => b - a);
            let max = Math.max(...keymapCount);

            let newKeymapCount = keymapCount.filter((a) => a > 0);
            let min = Math.min(...newKeymapCount);
            max === -1
                ? targetCount.push(-1)
                : targetCount.push(min);

        }


        let sum = targetCount.reduce((accu, curr) => accu + curr);
        targetCount.includes(-1)
            ? result.push(-1)
            : result.push(sum);

        //타켓의 i번째 요소가 키맵에서 인덱스 몇번인지+1
        //타겟요소 갯수만큼 루프


    }

    return result;

}
