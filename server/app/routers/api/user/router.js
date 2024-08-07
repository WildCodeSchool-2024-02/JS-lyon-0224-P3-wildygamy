const express = require("express");

const router = express.Router();

// Import item-related actions
const { browse, add } = require("../../../controllers/userActions");
const { hashPassword } = require("../../../services/auth");

const { login, logout } = require("../../../controllers/AuthAction");

router.post("/login", login);

router.get("/logout", logout);

// Route to get a list of user
router.get("/", browse);

// Route to add a new user
router.post("/add", hashPassword, add);

module.exports = router;
