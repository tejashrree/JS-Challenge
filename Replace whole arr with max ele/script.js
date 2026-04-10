let arr = [20, 30, 40, 10];
let first = arr[0];
let last = arr.length - 1;
let max = 0;
if (first > last) {
    max = first;
}
else {
    max = last;
}
console.log(max);

for (let i = 0; i < arr.length; i++) {
    arr[i] = max;
}
console.log(arr);