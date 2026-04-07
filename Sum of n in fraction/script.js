let num = prompt("Enter Number : ");
let num1 = Number(num);

while (num1 > 0) {
    let sum = 0;
    sum += num1;
    num1 = Math.floor(num/2);
}
console.log(sum);

// let input = prompt("Enter Number : ");
// let num = Number(input);

// if (isNaN(num) || num <= 0) {
//     console.log("Enter a valid positive number");
// } else {
//     let sum = 0;  

//     while (num > 0) {
//         sum = sum + num;   
//         num = Math.floor(num / 2);
//     }

//     console.log(sum);
// }