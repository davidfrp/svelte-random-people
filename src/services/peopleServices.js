import { faker } from "@faker-js/faker";

faker.locale = "nb_NO";

function peopleService() {
    const result = new Promise((resolve, reject) => {
        const people = [];
        for (let i = 1; i <= 1000; i++) {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();

            people.push({
                id: i,
                name: `${firstName} ${lastName}`,
                username: faker.internet.userName(firstName, lastName),
                address: faker.address.streetAddress(),
                city: faker.address.city()
            });
        }
        setTimeout(() => {
            resolve(people);
        }, 1000);
    });

    return {
        findAll: () => result,
        findById: (id) =>
            result.then((people) => people.find((person) => person.id === id)),
        findAllPaged: (page, perPage) => {
            const start = (page - 1) * perPage;
            const end = start + perPage;
            return result.then((people) => people.slice(start, end));
        },
    };
}

export default peopleService;
