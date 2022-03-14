# Assignment 14-03-2022 23:59

Create a table with users. Use this package to generate fake user data. 
https://github.com/faker-js/faker

Unfortunately no support for Danish sounding names:
https://fakerjs.dev/api/localization.html

You must use all of the the following components: `PeopleTable`, `TableHead`, `TableRow`
All dynamic data should be defined in `PeopleTable`. 

The assignment can be solved in several ways and can be done in a more dynamic and thus reusable way (smarter). 
For instance, you could hardcode the table headers or you could use `Object.keys` to make it more dynamic. 

* Bonus: Use `faker.image.avatar()` to display an image of the users.
* Bonus++: Implement sorting. Implement pagination. 
* Bonus++: After solving the above task find any library for tables in Svelte and use it.