function makeWorker() {
    let name = "Peter Parker";

    return function () {
        console.log(name);
    };
}

let name = "John Jameson";

let work = makeWorker();

work();