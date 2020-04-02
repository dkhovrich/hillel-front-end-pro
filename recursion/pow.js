function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

function powRecursion(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * powRecursion(x, n - 1);
    }
}

function powRecursionTernar(x, n) {
    return n === 1 ? x : x * powRecursionTernar(x, n - 1);
}

console.log("pow", pow(2, 4));
console.log("powRecursion", powRecursion(2, 4));
console.log("powRecursionTernar", powRecursionTernar(2, 4));