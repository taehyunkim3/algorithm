function solution(nums) {
    const set = [...new Set(nums)];
      
    if(nums.length/2>set.length){
        return set.length;
    }else{
        return nums.length/2;
    }
    
}