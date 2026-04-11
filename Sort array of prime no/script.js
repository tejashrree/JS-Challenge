let n = 98;
let stack = [];

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
        stack.push(i);
    }
}

console.log(stack);