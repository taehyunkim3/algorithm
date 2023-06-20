function solution(s) {
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(i in word){
        const regex = new RegExp(`${word[i]}`, 'g');
        s = s.replaceAll(regex, i);
    }
    
    return Number(s);
}