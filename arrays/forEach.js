function forEach(arr, cb) {
    for (let index = 0; index < arr.length; index++) {
        const value = arr[index];
        cb(value, index); // cb это ф-ция callback, которую передали вторым параметром в forEach. здесь она вызывается и ей передаются аргументы
    }
}

// value и index берутся из цикла
function callback(value, index) {
    console.log("Value: " + value + ", Index: " + index);
}

forEach([1, 2, 3], callback);
