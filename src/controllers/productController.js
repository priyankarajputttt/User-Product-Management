const productService = require("../services/productService");

async function createProduct(req, res) {
  try {
    const { name, description, price } = req.body;
    const product = await productService.createProduct(
      name,
      description,
      price
    );
    res.status(201).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
}

async function getProducts(req, res) {
  try {
    const { page, limit } = req.query;
    const products = await productService.getProducts(page, limit);
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: `Internal server error : ${error}` });
  }
}
module.exports = {
  createProduct,
  getProducts,
};
