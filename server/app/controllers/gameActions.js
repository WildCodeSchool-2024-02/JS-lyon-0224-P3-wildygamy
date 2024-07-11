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

const edit = async (req, res, next) => {
  // Extract the item data from the request body
  const news = req.body;
  try {
    // Update the item into the database
    const updatedGame = await tables.game.update(news);
    // Respond with HTTP 201 (OK) and the response data
    res.status(200).json({ updatedGame });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy = async (req, res, next) => {
  // Extract the item id from the request body
  const { id } = req.body;
  try {
    // Delete the news from the database
    const deletedGame = await tables.game.delete(id);
    // Respond with HTTP 200 (OK) and the response data
    res.status(200).json({ deletedGame });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
module.exports = { browse, read, add , edit , destroy};
