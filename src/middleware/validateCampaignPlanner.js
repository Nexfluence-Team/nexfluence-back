module.exports = (req, res, next) => {
  const {
    workEmail,
    websiteLink,
    role,
    goal,
    promoting,
    location,
    monthlyBudget,
    primaryPlatform,
    biggestBlocker,
    hasRunCampaigns
  } = req.body;

  if (!workEmail || !websiteLink || !role) {
    return res.status(400).json({
      error: "Missing required Step 1 fields"
    });
  }

  if (
    !goal ||
    !promoting ||
    !location ||
    !monthlyBudget ||
    !primaryPlatform ||
    !biggestBlocker ||
    !hasRunCampaigns
  ) {
    return res.status(400).json({
      error: "Missing required Step 2 fields"
    });
  }

  next();
};
