let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};

setTimeout(user.sayHi, 1000);

setTimeout(function () {
    user.sayHi();
}, timeout);