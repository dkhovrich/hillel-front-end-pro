let human = {
    eats: true,
    walk() {
        console.log("Human walks");
    }
};

let developer = {
    writesCode: true,
    // __proto__: human
};

developer.__proto__ = human;

console.log(developer.eats);
console.log(developer.writesCode);

developer.walk();