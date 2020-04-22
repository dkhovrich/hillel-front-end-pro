const user = {
    firstName: "Peter",
    lastName: "Parker",

    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    set fullName(value) {
        const parts = value.split(" ");

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(user.fullName); // Peter Parker

user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper