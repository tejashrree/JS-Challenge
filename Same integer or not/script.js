let num1 = Number(prompt("Enter first number : "));
let num2 = Number(prompt("Enter second number : "));
let divisor = Number(prompt("Enter divisor : "))
if (num1 === num2) {
    console.log("Both numbers are equal");
    if (num1 % divisor === 0) {
        console.log(num1 + " is divided by " + divisor);
    }
    else if (num2 % divisor === 0) {
        console.log(num2 + " is divided by" + divisor);
    }
    else {
        console.log("Neither is divided by divisor");
    }
}
else {
    if (num1 % divisor === 0) {
        console.log(num1 + " is divided by " + divisor);
    }
    else if (num2 % divisor === 0) {
        console.log(num2 + " is divided by" + divisor);
    }
    else {
        console.log("Neither is divided by divisor");
    }
}