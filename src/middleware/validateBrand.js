module.exports = (req, res, next) => {
  const {
    companyName,
    email,
    website,
    country,
    industry,
    campaignGoal,
    monthlyBudget,
    campaignTimeline,
    preferredPlatforms,
    promoting,
    conversionEvent,
    trackingReadiness
  } = req.body;

  if (!companyName || !email || !website) {
    return res.status(400).json({
      error: "Company name, email, and website are required"
    });
  }

  if (!country || !industry) {
    return res.status(400).json({
      error: "Country and industry are required"
    });
  }

  if (
    !campaignGoal ||
    !monthlyBudget ||
    !campaignTimeline ||
    !preferredPlatforms
  ) {
    return res.status(400).json({
      error: "Incomplete campaign details"
    });
  }

  if (!promoting || !conversionEvent || !trackingReadiness) {
    return res.status(400).json({
      error: "Conversion and tracking details are required"
    });
  }

  next();
};
