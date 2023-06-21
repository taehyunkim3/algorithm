function solution(answers) {
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2 ,2, 4, 4, 5, 5];
    const score = (student)=>{    
         return answers.filter((a, index)=>student[index%student.length]===a).length;
    };

    let firstScore = score(first); 
    let secondScore = score(second);
    let thirdScore = score(third);
    
    let compare = [{name: 1, score: firstScore},{name: 2, score: secondScore},{ name: 3, score: thirdScore}];
    const scores = [firstScore, secondScore, thirdScore];
    return compare.filter(student => student.score === Math.max(...scores)).map(a=>a.name).sort();
    
    

    
}