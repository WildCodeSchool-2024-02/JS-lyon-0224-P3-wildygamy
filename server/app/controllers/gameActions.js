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

module.exports = { browse, read };
