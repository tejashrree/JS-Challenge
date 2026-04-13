let str = 'Programming';
let newStr = str.split('');
console.log(newStr);
for (let i = 0; i < newStr.length; i++) {
    var count = 0;
    for (let j = 1; j <= newStr.length; j++) {
        if (newStr[i] === newStr[j])
            count++;
    }
}
console.log(count);