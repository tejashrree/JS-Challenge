let arr1 = [1, 2, 3, 4];
let arr2 = [2, 6, 7, 8];

for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
        console.log(`${arr1[i]} is true`);
    } else {
        console.log(`${arr1[i]} is false`);
    }
}
