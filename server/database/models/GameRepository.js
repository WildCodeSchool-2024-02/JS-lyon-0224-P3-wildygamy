const AbstractRepository = require("./AbstractRepository");

class GameRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "game" });
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async create(game) {
    let gameChallenge = false;
    let gamePopular = false;
    if (game.challenge === "on") {
      gameChallenge = true;
    }
    if (game.popular === "on") {
      gamePopular = true;
    }

    const [result] = await this.database.query(
      `insert into ${this.table} (name, category, is_challenge, is_popular, image, synopsis) values (?, ?, ?, ?, ?, ?)`,
      [
        game.name,
        game.category,
        gameChallenge,
        gamePopular,
        game.image,
        game.synopsis,
      ]
    );
    return result.insertId;
  }

  async update(game) {
    let gameChallenge = false;
    let gamePopular = false;
    if (game.challenge === "on") {
      gameChallenge = true;
    }
    if (game.popular === "on") {
      gamePopular = true;
    }
    const gameId = parseInt(game.id,10)
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, category = ?, is_challenge = ?, is_popular = ?, image = ?, synopsis = ? WHERE id = ?`,
      [game.name, game.category, gameChallenge, gamePopular, game.image, game.synopsis, gameId]
    );
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }
}

module.exports = GameRepository;
