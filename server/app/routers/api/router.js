const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

const prizesRouter = require("./prizes/router");

router.use("/prizes", prizesRouter);

const userRouter = require("./user/router");

router.use("/user", userRouter);

/* ************************************************************************* */

module.exports = router;
