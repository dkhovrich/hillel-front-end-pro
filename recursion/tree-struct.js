const company = {
    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 600
        }],

    development: {
        sites: [
            {
                name: 'Peter',
                salary: 2000
            },
            {
                name: 'Alex',
                salary: 1800
            }
        ],

        internals: [
            {
                name: 'Jack',
                salary: 1300
            }
        ]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        let sum = 0;
        for (const worker of department) {
            sum += worker.salary;
        }
        return sum;
    } else {
        let sum = 0;
        for (const subDep of Object.values(department)) {
            sum += sumSalaries(subDep);
        }
        return sum;
    }
}

console.log("sumSalaries", sumSalaries(company));