const argon2 = require("argon2");
const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  async run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        email: this.faker.internet.email(),
        /* eslint-disable no-await-in-loop */
        password: await argon2.hash("admin"),
        pseudo: this.faker.internet.displayName(),
        lastname: this.faker.person.lastName(),
        firstname: this.faker.person.firstName(),
        role: "admin",
        refName: `user_${i}`,
      };

      this.insert(fakeUser);
    }
  }
}

module.exports = UserSeeder;
