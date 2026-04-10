function Palindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] < str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
function makePalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        let suffix = str.slice(i);

        if (Palindrome(suffix)) {
            let prefix = str.slice(0, i);
            let toAdd = prefix.split('').reverse().join('');
            return str + toAdd;
        }
    }
}
console.log(Palindrome('abc'));