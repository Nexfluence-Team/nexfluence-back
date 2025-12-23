const CampaignPlanner = require("../models/CampaignPlanner");

exports.submitCampaignPlanner = async (req, res, next) => {
  try {
    const submission = await CampaignPlanner.create(req.body);

    res.status(201).json({
      success: true,
      message: "Campaign planner request submitted",
      data: {
        id: submission._id
      }
    });
  } catch (error) {
    next(error);
  }
};
