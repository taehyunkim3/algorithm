function solution(nums) {

    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if(strainer(nums[i] + nums[j] + nums[k])===2){
                    cnt++;
                };
            }
        }
    }

    return cnt;

    function strainer(n) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                count++;
            }
        }
        return count;
    }
}