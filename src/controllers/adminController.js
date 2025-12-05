const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Generate JWT (valid for 7 days)
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register Admin (ONE TIME ONLY)
exports.registerAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Ensure only one admin exists
    const existing = await Admin.findOne({});
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({ username, password });

    res.status(201).json({
      message: "Admin created successfully",
      admin: { username: admin.username }
    });
  } catch (err) {
    next(err);
  }
};

// Login Admin
exports.loginAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      token: generateToken(admin._id)
    });

  } catch (err) {
    next(err);
  }
};
