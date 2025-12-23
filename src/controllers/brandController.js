const Brand = require("../models/Brand");

exports.submitBrandSignup = async (req, res, next) => {
  try {
    const brand = await Brand.create(req.body);

    res.status(201).json({
      success: true,
      message: "Brand application submitted successfully",
      id: brand._id
    });
  } catch (error) {
    next(error);
  }
};

exports.getBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find().sort({ createdAt: -1 });
    res.json(brands);
  } catch (error) {
    next(error);
  }
};
