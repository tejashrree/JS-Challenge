let string = prompt("Enter your string :");
// let newStr = string.split('');
// if (newStr[newStr.length - 1] === 't' && newStr[newStr.length - 2] === 'p' && newStr[newStr.length - 3] === 'i' && newStr[newStr.length] - 4 === 'r' && newStr[newStr.length - 5] === 'c' && newStr[newStr.length - 6] === 'S') {
//     console.log("Script is present");
// }

//OR

if (string.endsWith('Script')) {
    console.log("Script word present");
}
else {
    console.log("No");
}