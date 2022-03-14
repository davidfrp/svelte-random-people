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
                email: faker.internet.email(firstName, lastName).toLowerCase(),
                createdAt: faker.date.past().getTime()
            });
        }

        resolve(users);
    });

    function getPage(page, perPage, items) {
        const totalPages = Math.ceil(items.length / perPage);

        if (page > totalPages) {
            page = totalPages;
        } else if (page < 1) {
            page = 1;
        }

        const start = (page - 1) * perPage;
        const end = start + perPage;

        return {
            page,
            perPage,
            totalCount: items.length,
            items: items.slice(start, end)
        };
    }

    return {
        findById: async (id) => {
            const users = await usersPromise;
            return users.find((user) => user.id === id);
        },
        findAll: async (page = 1, perPage = 100) => {
            return getPage(page, perPage, await usersPromise);
        },
        findAllByName: async (name, page = 1, perPage = 100) => {
            const users = await usersPromise;
            const filteredUsers = users.filter((user) =>
                user.name
                    .trim()
                    .toLowerCase()
                    .includes(name.trim().toLowerCase())
            );

            return getPage(page, perPage, filteredUsers);
        },
    };
}

export default usersService;
