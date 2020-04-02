let human = {
    eats: true,
    walk() {
        if (this.isWorking) {
            console.log("Working hard!")
        } else {
            console.log("Human walks");
        }
    }
};

let developer = {
    writesCode: true,
    work() {
        this.isWorking = true;
    }
};

developer.__proto__ = human;

developer.work();
developer.walk();

human.walk();
console.log(human.isWorking);