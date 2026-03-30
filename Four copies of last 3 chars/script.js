let str = prompt("Enter a string : ");
let count = Number(prompt("Enter count number : "));
if (count === 4) {
    let LastThree = str.slice(-3);
    console.log(LastThree.repeat(count));
}
else {
    console.log("Invalid Count");
}


