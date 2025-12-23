module.exports = (req, res, next) => {
  const { userType, mainBlocker, urgency, followUpMethod, contactInfo } = req.body;

  if (!userType || !mainBlocker || !urgency || !followUpMethod) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields"
    });
  }

  if (
    followUpMethod &&
    !followUpMethod.toLowerCase().includes("anonymous") &&
    !contactInfo
  ) {
    return res.status(400).json({
      success: false,
      message: "Contact info required for follow-up"
    });
  }

  next();
};
