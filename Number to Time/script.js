let userNum = Number(prompt("Enter number : "));
let hours = Math.floor(userNum / 60);
let minutes = userNum % 60;
let time = `${hours} hours ${minutes} minutes`;
console.log(time);