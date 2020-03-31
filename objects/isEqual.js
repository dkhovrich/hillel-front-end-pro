function isObject(a) {
    return a !== null && typeof a === "object";
}

function getPropertiesCount(a) {
    return Object.keys(a).length;
}

function isEqual(a, b) {
    if (typeof a !== typeof b) return false;

    if (a === null && b !== null) return false;

    if (a !== null && b === null) return false;

    if (isObject(a) && isObject(b)) {
        if (getPropertiesCount(a) !== getPropertiesCount(b)) return false;

        if (getPropertiesCount(a) === 0 && getPropertiesCount(b) === 0) return true;

        for (const key in a) {
            if (!isEqual(a[key], b[key])) {
                return false;
            }

            return true;
        }
    }

    return a === b;
}

console.log(isEqual({ a: 1 }, { a: 2 }));
console.log(isEqual({}, {}));
