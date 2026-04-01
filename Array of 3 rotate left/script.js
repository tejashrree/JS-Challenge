let arr = [1, 2, 3];
let result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[(i + 1) % arr.length];
}

console.log(result); 