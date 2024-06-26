const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (pseudo, lastname, firstname, email, password) values (?,?,?,?, ?)`,
      [
        user.username,
        user.lastname,
        user.firstname,
        user.mail,
        user.hashedPassword,
      ]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select id, email, is_admin from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `select id, email, is_admin from ${this.table}`
    );

    return rows;
  }

  async isPseudoExist(pseudo) {
    let validPseudo = true;
    const [rows] = await this.database.query(
      `select pseudo from ${this.table} where pseudo = ?`,
      [pseudo]
    );
    if (rows.length === 0) {
      validPseudo = false;
    }
    return validPseudo    
  }

  async readByEmailWithPassword(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    return rows[0];
  }
}

module.exports = UserRepository;
