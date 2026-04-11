let userChar = prompt("Enter char");
let str = prompt("Enter String");

var newStr = str.split('');
console.log(newStr);

for (let char of newStr) {
    if (newStr[2] === userChar || newStr[3] === userChar || newStr[4] === userChar) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}