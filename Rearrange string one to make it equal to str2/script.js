let str1 = 'JavaScript';
let str2 = 'Python';
str1 = str1.split('').sort().join('');
str2 = str2.split('').sort().join('');
let len1 = str1.length;
let len2 = str2.length;
let diff = Math.abs(len1 - len2);

if (len1 > len2) {
    let result = str1.slice(0, diff);
    console.log("Extra from str1:", result);
} else {
    let result = str2.slice(0, diff);
    console.log("Extra from str2:", result);
}

console.log("Sorted str1:", str1);
console.log("Sorted str2:", str2);
