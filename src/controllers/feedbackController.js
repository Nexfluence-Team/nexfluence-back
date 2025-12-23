const Feedback = require("../models/Feedback");

exports.submitFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      id: feedback._id
    });
  } catch (error) {
    next(error);
  }
};
