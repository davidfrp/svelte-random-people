import { faker } from "@faker-js/faker";

faker.locale = "nb_NO";

function usersService() {
    const usersPromise = new Promise((resolve, reject) => {
        const users = [];
        for (let i = 1; i <= 1000; i++) {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();

            users.push({
                id: i,
                avatar: faker.image.avatar(),
                name: `${firstName} ${lastName}`,
                username: faker.internet.userName(firstName, lastName),
                email: faker.internet.email(firstName, lastName).toLowerCase()
            });
        }

        resolve(users);
    });

    function getPage(page, perPage, items) {
        const totalPages = Math.ceil(items.length / perPage);
        const start = (page - 1) * perPage;
        const end = start + perPage;

        return {
            page,
            perPage,
            totalCount: items.length,
            items: items.slice(start, end)
        }
    }

    return {
        findById: async (id) => {
            const users = await usersPromise;
            return users.find(user => user.id === id);
        },
        findAll: async (page = 1, perPage = 100) => {
            return getPage(page, perPage, await usersPromise);
        },
        findAllByName: (name, page = 1, perPage = 100) => {
            const users = await usersPromise;
            const filteredUsers = users.filter(user => 
                user.name.toLowerCase().includes(name.toLowerCase())
            );
            
            return getPage(page, perPage, filteredUsers);
        }
    };
}

export default usersService;
