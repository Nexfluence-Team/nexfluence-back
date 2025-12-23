const express = require("express");
const router = express.Router();

const {
  submitCampaignPlanner
} = require("../controllers/campaignPlannerController");

const validateCampaignPlanner = require("../middleware/validateCampaignPlanner");

router.post(
  "/",
  validateCampaignPlanner,
  submitCampaignPlanner
);

module.exports = router;
