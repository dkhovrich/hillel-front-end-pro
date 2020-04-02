function Developer(name) {
    this.name = name;
}

console.log(Developer.prototype);

Developer.prototype = {
    eat: true
};

const dev = new Developer("Vasya");
console.log(dev, dev.prototype);