const express = require("express");
const {
  createCreator,
  getCreators
} = require("../controllers/creatorController");

const validateCreator = require("../middleware/validateCreator");

const router = express.Router();

router.post("/", validateCreator, createCreator);
router.get("/", getCreators);

module.exports = router;
