const Product = require("../models/Product");

async function createProduct(name, description, price) {
  try {
    const product = new Product({ name, description, price });
    await product.save();
    return product;
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }
}

async function getProducts(page, limit) {
  try {
    const pageNumber = parseInt(page);
    const itemsPerPage = parseInt(limit);
    const skip = (pageNumber - 1) * itemsPerPage;

    const products = await Product.find().skip(skip).limit(itemsPerPage).exec();

    return products;
  } catch (error) {
    throw new Error("Error fetching products: " + error.message);
  }
}

module.exports = {
  createProduct,
  getProducts,
};
