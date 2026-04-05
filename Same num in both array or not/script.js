function sameArrays(arr1, arr2) {
    let count = 0;
    for (let i of arr1) {
        if (arr2.includes(i)) {
            count++;
        }
    }
    return count;
}
console.log(sameArrays([1, 2, 3], [1, 2, 7]));