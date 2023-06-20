function solution(price, money, count) {
    const initialPrice = price;
    let sum = 0;


    for (let i = 0; i < count; i++) {
        price = initialPrice + initialPrice * i;

        sum = sum + price;

    }
    if (sum <= money) {
        return 0;
    } else {
        return sum - money;
    }

}