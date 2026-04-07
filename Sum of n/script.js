let a = 10;
let sum = 0;
let n = 0;
while (sum + (n + 1) <= a) {
    n++;
    sum += n;
}
console.log(n);