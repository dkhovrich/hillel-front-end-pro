function isObject(a) {
    return typeof a === "object" && a !== null && !Array.isArray(a);
}

function deepClone(a) {
    if (Array.isArray(a)) {
        const t = [];
        for (const i of a) {
            t.push(deepClone(i));
        }
        return t;
    } else if (isObject(a)) {
        const t = {};
        for (const key in a) {
            t[key] = deepClone(a[key]);
        }
        return t;
    } else {
        return a;
    }
}