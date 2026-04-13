let str1 = 'hello';
let str2 = 'worldofdemons';
let result1 = str1.concat(str2);
console.log(result1);
let minLength = Math.min(str1.length, str2.length);
if (str1 > minLength) {
    str1 = str1.substring(0, minLength);
    console.log(str1);
}
else {
    str2 = str2.substring(0, minLength);
    console.log(str2);
}
let result = str1.concat(str2);
console.log(result);