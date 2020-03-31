function factorial(n) {
    let result = n;

    if (n === 0 || n === 1) {
        return 1;
    }

    while (n > 1) {
        n--;
        result = result * n;
    }

    return result;
}

function factorialRecursion(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorialRecursion(n - 1);
}

console.log("factorial", factorial(5));
console.log("factorialRecursion", factorialRecursion(5));