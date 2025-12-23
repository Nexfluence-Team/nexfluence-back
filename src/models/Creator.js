const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  handle: { type: String, required: true }
});

const creatorSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true },
    phone: { type: String },
    location: { type: String, required: true },

    profiles: {
      type: [profileSchema],
      validate: v => v.length > 0
    },

    contentTopics: [String],
    formats: [String],
    availability: String,
    hasPaidCollabs: { type: String },
    brands: [String],
    mediaKitLink: String,
    rateRange: String,
    audienceCountry: String,
    languages: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Creator", creatorSchema);
