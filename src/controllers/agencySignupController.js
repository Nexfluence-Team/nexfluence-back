const AgencySignup = require("../models/AgencySignup");

exports.submitAgencySignup = async (req, res, next) => {
  try {
    const submission = await AgencySignup.create(req.body);

    res.status(201).json({
      success: true,
      message: "Agency partnership request submitted successfully",
      data: {
        id: submission._id
      }
    });
  } catch (error) {
    next(error);
  }
};
