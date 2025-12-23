const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema(
  {
    // Company info
    companyName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    website: { type: String, required: true },
    contactName: { type: String },
    phone: { type: String },

    country: { type: String, required: true },
    customCountry: { type: String },

    industry: { type: String, required: true },
    customIndustry: { type: String },

    companySize: { type: String },

    // Campaign details
    campaignGoal: { type: String, required: true },
    customGoal: { type: String },

    monthlyBudget: { type: String, required: true },
    campaignTimeline: { type: String, required: true },
    preferredPlatforms: { type: String, required: true },

    previousCampaigns: { type: String },
    targetAudience: { type: String },

    promoting: { type: String, required: true },
    conversionEvent: { type: String, required: true },
    trackingReadiness: { type: String, required: true },

    // Additional
    additionalInfo: { type: String },
    hearAbout: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", BrandSchema);
