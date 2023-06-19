


function solution(numbers, hand) {
    //좌표화 시켜야함. 
    //손가락 현위치 저장 필요.

    //keyPad의 index가 키번호
    const keypad = [[1, 0], [0, 3], [1, 3], [2, 3], [0, 2], [1, 2], [2, 2], [0, 1], [1, 1], [2, 1]]

    let leftP = [0, 0];
    let rightP = [2, 0];
    let answer = [];

    //true하면 오른손(right)
    function compare(currLeft, currRight, givenKey, hand) {


        const leftDifferece = Math.abs(currLeft[0] - keypad[givenKey][0]) + Math.abs(currLeft[1] - keypad[givenKey][1]);
        const rightDifferece = Math.abs(currRight[0] - keypad[givenKey][0]) + Math.abs(currRight[1] - keypad[givenKey][1]);

        if (leftDifferece > rightDifferece) {
            rightP = keypad[givenKey];
            return true;
        } else if (leftDifferece < rightDifferece) {
            leftP = keypad[givenKey];
            return false;
        } else {
            if (hand === 'right') {
                rightP = keypad[givenKey];
                return true;
            } else {
                leftP = keypad[givenKey];
                return false;
            }
            // return hand === 'right' ? (true, rightP = keypad[givenKey]) : (false, leftP = keypad[givenKey]);
        }
    }

    for (n of numbers) {
        switch (n) {
            case 0:
                compare(leftP, rightP, 0, hand) ? answer.push('R') : answer.push('L');
                break;
            case 1:
                answer.push('L');
                leftP = keypad[1];
                break;
            case 2:
                compare(leftP, rightP, 2, hand) ? answer.push('R') : answer.push('L');
                break;
            case 3:
                answer.push('R');
                rightP = keypad[3];
                break;
            case 4:
                answer.push('L');
                leftP = keypad[4];
                break;
            case 5:
                compare(leftP, rightP, 5, hand) ? answer.push('R') : answer.push('L');
                break;
            case 6:
                answer.push('R');
                rightP = keypad[6];
                break;
            case 7:
                answer.push('L');
                leftP = keypad[7];
                break;
            case 8:
                compare(leftP, rightP, 8, hand) ? answer.push('R') : answer.push('L');
                break;
            case 9:
                answer.push('R');
                rightP = keypad[9];
                break;
            case 0:
                compare(leftP, rightP, 0, hand) ? answer.push('R') : answer.push('L');
                break;
        }
    }

    return answer.join('');
}
