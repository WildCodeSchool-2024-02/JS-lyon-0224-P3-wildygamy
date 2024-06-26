const tables = require("../../database/tables");

const browse = async (req, res) => {
  const userfromDB = await tables.user.readAll();

  res.json(userfromDB);
};

const add = async (req, res, next) => {
  const item = req.body;
  const pseudoExist = await tables.user.readbypseudo(item.username)

  try {
    if(pseudoExist===false){
    const insertId = await tables.user.create(item);
    res.status(201).json({ insertId });
    }
    else{
    res.send(401)
    }
  }
   catch (err) {
    next(err);
  }
};

module.exports = { browse, add };
