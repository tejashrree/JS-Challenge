function countAlpha(str) {
    let countP = 0;
    let countT = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === 'p' || str[i] === 'P') {
            countP++;
        }
        else if (str[i] === 't' || str[i] === 'T') {
            countT++;
        }
    }
    return countP === countT;
}
console.log(countAlpha('poptext'));