let firstNum = Number(prompt("Enter first number : "));
let secondNum = Number(prompt("Enter second number : "));
let arr = [firstNum, secondNum];
console.log(arr);
if (arr[0] === 1 || arr[1] === 1 && arr[0] == 3 || arr[1] === 3) {
    console.log("Array contains both 1 and 3");
}
else if (arr[0] === 3 || arr[1] === 3) {
    console.log("Array contains 3");
}
else if (arr[0] === 1 || arr[1] === 1 ) {
    console.log("Array contains 1");
}
else {
    console.log("Try again");
}