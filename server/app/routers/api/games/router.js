const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read, add , destroy , edit } = require("../../../controllers/gameActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add items

router.post("/add", add);

router.delete("/delete" , destroy)

router.patch("/edit" , edit)
/* ************************************************************************* */

module.exports = router;
