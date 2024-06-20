const tables = require("../../database/tables");

const browse = async (req, res) => {
  const prizesfromDB = await tables.prize.readAll();

  res.json(prizesfromDB);
};

module.exports = { browse };
