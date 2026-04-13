let str = 'Programminp';
let newStr = str.split('');

if (str.charAt(0) === 'P') {
    newStr.shift();

    if (str.slice(-1) === 'p') {
        newStr.pop();
    }
}
console.log(newStr.join(''));


