const express = require("express");

const router = express.Router();

// Import item-related actions
const { browse, read, add} = require("../../../controllers/prizeAction"); 

// Route to get a list of user
router.get("/", browse);

// Route to get a specific user by ID
router.get("/:id", read);

// Route to add a new user
router.post("/add", add);


