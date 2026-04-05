function sameNums(num1, num2) {
    let count = 0;
    num1 = num1.toString();
    num2 = num2.toString();
    for (let i of num1) {
        if (num2.includes(i)) {
            count++;
        }
    }
    return count;
}
console.log(sameNums(27, 25));