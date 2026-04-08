let str = 'abc';
let newStr = str.split('');
for (let i = 0; i < newStr.length; i++) {
   newStr[i] = String.fromCharCode(newStr[i].charCodeAt(0) + 1)
}
console.log(newStr);