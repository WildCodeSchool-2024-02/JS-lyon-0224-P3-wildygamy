const tables = require("../../database/tables");

const browse = async (req, res) => {
  const userfromDB = await tables.user.readAll();

  res.json(userfromDB);
};
const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const item = req.body;
  const pseudoExist = await tables.user.isPseudoExist(item.username);

  try {
    if (pseudoExist === false) {
      const insertId = await tables.user.create(item);
      res.status(201).json({ insertId });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, add, read };
