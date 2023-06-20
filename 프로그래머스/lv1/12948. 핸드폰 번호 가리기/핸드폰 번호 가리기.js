function solution(phone_number) {
const len = phone_number.length;

const star = '*';
const starArr = star.repeat(len -4);


    const slicedArr = phone_number.slice(len-4);
    return starArr.concat(slicedArr)
  
}