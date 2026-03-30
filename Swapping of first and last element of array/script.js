let arr = [1, 2, 3, 4, 5];
let a = arr[0];
arr[0] = arr[4];
arr[4] = a;
console.log(arr);