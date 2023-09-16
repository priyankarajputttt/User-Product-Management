const Joi = require("joi");

// Define user schemas
const productSchemas = {
  createProduct: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  }),
};

module.exports = productSchemas;
