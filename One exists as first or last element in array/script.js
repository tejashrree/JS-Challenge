let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[0] === 1 || arr[arr.length - 1] === 1) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}