function solution(board, moves) {

    let count = 0;
    let bucket = [];

    function crane(i, move) {
        if (i === board.length) {   //바닥에 닿으면 (바닥 뚫으려고 하면!(5길이에선 index5가 없는데 5까지 가려고할때))
            return 0;
        } else if (board[i][move - 1] !== 0) {  //뭐가 있으면
            bucket.push(board[i][move - 1]);
            if (bucket[bucket.length - 1] == bucket[bucket.length - 2]) {
                bucket.pop();
                bucket.pop()
                count += 2;//수정됨 2개씩 터져야함
            }
            board[i][move - 1] = 0;
        } else if (board[i][move - 1] === 0) {  //없으면
            crane(i + 1, move);
        }
    }

    for (n of moves) {
        crane(0, n);
    }
    return count;
}