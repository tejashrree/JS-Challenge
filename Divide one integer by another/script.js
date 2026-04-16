let num1 = Number(prompt("Enter number 1 :"));
let num2 = Number(prompt("Enter number 2 :"));
let result;
if (num1 % 1 == 0 && num2 % 1 == 0) {
    result = Math.floor(num2 / num1);
}
console.log(result);