const express = require("express");
const router = express.Router();

const {
  submitAgencySignup
} = require("../controllers/agencySignupController");

const validateAgencySignup = require("../middleware/validateAgencySignup");

router.post(
  "/",
  validateAgencySignup,
  submitAgencySignup
);

module.exports = router;
