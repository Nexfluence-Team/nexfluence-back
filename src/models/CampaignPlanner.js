const mongoose = require("mongoose");

const CampaignPlannerSchema = new mongoose.Schema(
  {
    workEmail: { type: String, required: true },
    websiteLink: { type: String, required: true },
    role: { type: String, required: true },
    phone: { type: String },

    goal: { type: String, required: true },
    promoting: { type: String, required: true },
    orderValue: { type: String },
    location: { type: String, required: true },
    targetRegion: { type: String },

    monthlyBudget: { type: String, required: true },
    primaryPlatform: { type: String, required: true },
    biggestBlocker: { type: String, required: true },
    hasRunCampaigns: { type: String, required: true },

    whatWorked: { type: String },
    pastMetrics: { type: String },
    currentChallenges: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("CampaignPlanner", CampaignPlannerSchema);
