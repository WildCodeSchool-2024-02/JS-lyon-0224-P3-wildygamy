const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByPseudoWithPassword(
      req.body.formData.username
    );
    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.password,
      req.body.formData.password
    );

    if (verified === true) {
      delete user.hashed_password;

      const token = await jwt.sign(
        { sub: user.id, isAdmin: user.is_admin },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );

      delete user.id;

      res
        .cookie("access_token", token, {
          httpOnly: true,
          sameSite: "Lax",
          maxAge: 3600000,
        })
        .json({ user });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("access_token").sendStatus(200);
};

module.exports = {
  login,
  logout,
};
