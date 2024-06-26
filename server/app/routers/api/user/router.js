const express = require("express");

const router = express.Router();

const { hashpassword } = require("../../../services/auth");

// Import item-related actions
const { browse, add } = require("../../../controllers/userActions");

// Route to get a list of user
router.get("/", browse);

// Route to add a new user
router.post("/add", hashpassword , add);

module.exports = router;