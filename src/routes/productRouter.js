const express = require("express");
const productController = require("../controllers/productController");
const authenticationMiddleware = require("../middleware/authentication");
const validateRequest = require("../validator/validator");
const productSchemas = require("../schemas/productSchema");

const router = express.Router();

router.post(
  "/createProduct",
  authenticationMiddleware,
  validateRequest(productSchemas.createProduct, "body"),
  productController.createProduct
);

router.get(
  "/getProducts",
  authenticationMiddleware,
  productController.getProducts
);

module.exports = router;
