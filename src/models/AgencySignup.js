const mongoose = require("mongoose");

const AgencySignupSchema = new mongoose.Schema(
  {
    // Agency Info
    agencyName: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String, required: true },
    contactName: { type: String },
    phone: { type: String },

    country: { type: String, required: true },
    customCountry: { type: String },

    agencyType: { type: String, required: true },
    customAgencyType: { type: String },

    // Services
    serviceOffering: { type: String, required: true },
    currentInfluencerService: { type: String, required: true },
    monthlyVolume: { type: String, required: true },
    campaignBudget: { type: String, required: true },

    // Partnership
    deliveryMode: { type: String, required: true },
    partnershipGoal: { type: String, required: true },

    hearAbout: { type: String },
    additionalInfo: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("AgencySignup", AgencySignupSchema);
