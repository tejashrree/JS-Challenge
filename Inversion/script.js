let a = [8, 4, 2, 1];
for (let i = 0; i < a.length; i++) {
    for (let j = i+1; j < a.length; j++) {
        if (a[i] > a[j] && i < j) {
            console.log("inversion")
        }
    }
}