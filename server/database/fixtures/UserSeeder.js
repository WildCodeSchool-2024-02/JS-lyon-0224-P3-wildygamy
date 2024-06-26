const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        email: this.faker.internet.email(),
        pseudo: this.faker.internet.displayName(),
        lastname:this.faker.person.lastName(),
        firstname:this.faker.person.firstName(),
        password: this.faker.internet.password(),
        role: "admin",
        refName: `user_${i}`,
      };

      this.insert(fakeUser);
    }
  }
}

module.exports = UserSeeder;
