const tables = require("../../database/tables");

const browse = async (req, res) => {
  const gamesfromDB = await tables.game.readAll();

  res.json(gamesfromDB);
};

const read = async (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const game = await tables.game.read(parsedId);

  if (game !== null) {
    res.json(game);
  } else {
    res.sendStatus(404);
  }
};
const add = async (req, res, next) => {
  const item = req.body;

  try {
    const insertId = await tables.game.create(item);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, read, add };
