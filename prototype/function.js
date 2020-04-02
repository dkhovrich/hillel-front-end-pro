let human = {
    eats: true,
    walk() {
        console.log("Human walks");
    }
};

function Developer(name) {
    this.name = name;
}

Developer.prototype = human;

const dev = new Developer("Peter Parker");
dev.walk();