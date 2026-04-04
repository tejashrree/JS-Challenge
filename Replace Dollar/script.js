function replaceDollar(x, y, z) {
    if (x + y == z) {
        return '+';
    }
    else if (x - y == z) {
        return '-';
    }
    else if (x * y == z) {
        return '*';
    }
    else if (x / y == z) {
        return '/';
    }
    return "Not possible";
}

console.log(replaceDollar(2, 5, 10));