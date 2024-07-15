const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  add,
  destroy,
  edit,
} = require("../../../controllers/gameActions");
const { verifyCookie, verifyIsAdmin } = require("../../../services/auth");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add items

router.post("/add", verifyCookie, verifyIsAdmin, add);

router.delete("/delete", verifyCookie, verifyIsAdmin, destroy);

router.patch("/edit", verifyCookie, verifyIsAdmin, edit);
/* ************************************************************************* */

module.exports = router;
