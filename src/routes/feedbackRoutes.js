const express = require("express");
const router = express.Router();

const { submitFeedback } = require("../controllers/feedbackController");
const validateFeedback = require("../middleware/validateFeedback");

router.post("/", validateFeedback, submitFeedback);

module.exports = router;
