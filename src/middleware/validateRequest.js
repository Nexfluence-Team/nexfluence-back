// Example validator stub — optional if you use a validation library
exports.validateContact = (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: 'name, email and message are required' });
  }
  next();
};
