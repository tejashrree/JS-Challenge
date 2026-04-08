function adjacentNumber(arr) {
    let max =arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr.length; j++) {
            if ((arr[j]) > max) {
                max = arr[j];
            }
            else if ((arr[j]) < min) {
                min = arr[j];
            }

        }
    }
    return max - min;
}
console.log(adjacentNumber([2, 3, 4, 5]));