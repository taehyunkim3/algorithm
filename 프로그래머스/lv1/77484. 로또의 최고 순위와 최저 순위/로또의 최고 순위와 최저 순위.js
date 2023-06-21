function solution(lottos, win_nums) {
    const ranks = [6, 6, 5, 4, 3, 2, 1]
    
    const zeros = lottos.filter((a)=>a===0).length;
    const match = lottos.filter((b)=>win_nums.includes(b)).length;
    
    return [ranks[match+zeros], ranks[match]]
    
}