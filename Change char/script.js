function changeAlphabets(str) {
    let result = '';

    for (let char of str) {
        let newCharCode = 219 - char.charCodeAt(0);
        result += String.fromCharCode(newCharCode);
    }

    return result;
}
console.log(changeAlphabets('abc'));


// DOUBT 