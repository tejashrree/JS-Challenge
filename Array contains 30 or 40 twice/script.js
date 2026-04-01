let userNum = prompt("Enter an Number : ");
const arr = userNum.split(",").map(Number);
console.log(arr);
if (arr[0] === 30 && arr[1] === 30 || arr[1] === 30 && arr[2] === 30 || arr[0] === 30 && arr[2] === 30) {
    console.log("30 is twice");
}
else if (arr[0] === 40 && arr[1] === 40 || arr[1] === 40 && arr[2] === 40 || arr[0] === 40 && arr[2] === 40) {
    console.log("40 is twice");
}
else {
    console.log("no repetation");
}