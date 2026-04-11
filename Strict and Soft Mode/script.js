let firstNum = Number(prompt("Enter positive integer : "));
let secondNum = Number(prompt("Enter positive integer : "));
let thirdNum = Number(prompt("Enter positive integer : "));

if (firstNum < secondNum < thirdNum) {
    console.log("Strict Mode");
}
else if (firstNum > secondNum > thirdNum) {
    console.log("Soft Mode");
}
else{
    console.log("Try Again");
}