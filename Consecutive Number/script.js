function consecutiveNumber(arr, k) {
    let max = 0;
    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum = sum + arr[j];
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}
console.log(consecutiveNumber([5, 4, 7, 8, 6], 2));
