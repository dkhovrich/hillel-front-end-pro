let user = {
    firstName: "John",
    lastName: "Smith"
};

Object.defineProperty(user, 'fullName', {
    get() {
        return this.firstName + " " + this.lastName;
    },

    set(value) {
        const parts = value.split(" ");

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
});