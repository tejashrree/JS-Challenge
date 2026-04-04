let arr = prompt("Enter array number : ");
let newArr = arr.split('');

for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i] * newArr[i] * newArr[i];
}

console.log(newArr);