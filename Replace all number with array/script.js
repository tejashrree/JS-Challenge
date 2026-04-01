function replaceAll(arr, num) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = num;
    }
    console.log(num);
}

replaceAll([5,8,7],9);