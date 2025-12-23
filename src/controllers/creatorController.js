const Creator = require("../models/Creator");

exports.createCreator = async (req, res, next) => {
  try {
    const creator = await Creator.create(req.body);

    res.status(201).json({
      success: true,
      message: "Creator application submitted successfully",
      id: creator._id
    });
  } catch (error) {
    next(error);
  }
};

exports.getCreators = async (req, res, next) => {
  try {
    const creators = await Creator.find().sort({ createdAt: -1 });
    res.json(creators);
  } catch (error) {
    next(error);
  }
};
