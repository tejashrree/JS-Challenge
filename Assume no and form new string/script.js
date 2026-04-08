function newString(str, n) {
    if (str.length < n) {
        console.log("Invalid Output");
    }
    let firstStr = str.slice(0, n);
    let secondStr = str.slice(-n);
    return firstStr + secondStr;
}
console.log(newString('Javascript', 3));