const user = {
    name: "Peter",
    surname: "Parker",
    age: 25
};

function copy(target, origin) {
    for (const key in origin) {
        target[key] = origin[key];
    }
    return target;
}

const userCopy = copy({}, user);

console.log(user, userCopy);

console.log(user === userCopy); // should be false
console.log(user.age === userCopy.age); // should be true
console.log(user.name === userCopy.name); // should be true
console.log(user.surname === userCopy.surname); // should be true
