module.exports = (req, res, next) => {
  const {
    agencyName,
    email,
    website,
    country,
    agencyType,
    serviceOffering,
    currentInfluencerService,
    monthlyVolume,
    campaignBudget,
    deliveryMode,
    partnershipGoal
  } = req.body;

  if (!agencyName || !email || !website) {
    return res.status(400).json({
      error: "Missing required agency information"
    });
  }

  if (!country || !agencyType) {
    return res.status(400).json({
      error: "Missing agency location or type"
    });
  }

  if (
    !serviceOffering ||
    !currentInfluencerService ||
    !monthlyVolume ||
    !campaignBudget
  ) {
    return res.status(400).json({
      error: "Missing service or volume details"
    });
  }

  if (!deliveryMode || !partnershipGoal) {
    return res.status(400).json({
      error: "Missing partnership goals"
    });
  }

  next();
};
