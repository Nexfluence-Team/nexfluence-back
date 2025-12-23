const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema(
  {
    userType: {
      type: String,
      enum: ["Creator", "Brand", "Agency"],
      required: true
    },

    // Shared fields
    mainBlocker: { type: String, required: true },
    urgency: { type: String, required: true },
    example: { type: String },
    followUpMethod: { type: String, required: true },
    contactInfo: { type: String },

    // Creator-specific
    platform: String,
    creatorType: String,
    frictionPoint: String,
    pricing: String,

    // Brand-specific
    role: String,
    campaignLocation: String,
    mainOutcome: String,

    // Agency-specific
    agencyType: String,
    campaignVolume: String,
    breakdownPoint: String,
    whiteLabelNeed: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", FeedbackSchema);
