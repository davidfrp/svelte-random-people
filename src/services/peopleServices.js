import { faker } from '@faker-js/faker';

faker.locale = 'nb_NO';

function peopleService() {
    
    const result = new Promise((resolve, reject) => {
        const people = [];
        for (let i = 1; i <= 1000; i++) {
            people.push({
                id: i,
                name: faker.name.findName(),
                phone: faker.phone.phoneNumber(),
                address: faker.address.streetAddress(),
                city: faker.address.city(),
                country: faker.address.country(),
                avatar: faker.image.avatar()
            });
        }
        setTimeout(() => {
            resolve(people);
        }, 2000);
    });

    return {
        findAll: () => result,
        findById: (id) => result.then(people => 
            people.find(person => person.id === id)
        ),
        findAllPaged: (page, perPage) => {
            const start = (page - 1) * perPage;
            const end = start + perPage;
            return result.then(people => 
                people.slice(start, end)
            );
        }
    };
}

export default peopleService;