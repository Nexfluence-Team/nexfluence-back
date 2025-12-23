module.exports = (req, res, next) => {
  const { email, location, profiles } = req.body;

  if (!email || !location) {
    return res.status(400).json({
      error: "Email and location are required"
    });
  }

  if (!Array.isArray(profiles) || profiles.length === 0) {
    return res.status(400).json({
      error: "At least one profile is required"
    });
  }

  const validProfile = profiles.some(
    p => p.platform && p.handle
  );

  if (!validProfile) {
    return res.status(400).json({
      error: "Profile platform and handle are required"
    });
  }

  next();
};
