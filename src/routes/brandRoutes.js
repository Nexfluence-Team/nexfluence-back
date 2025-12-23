const express = require("express");
const router = express.Router();

const {
  submitBrandSignup,
  getBrands
} = require("../controllers/brandController");

const validateBrand = require("../middleware/validateBrand");

router.post("/", validateBrand, submitBrandSignup);
router.get("/", getBrands); // admin usage later

module.exports = router;
