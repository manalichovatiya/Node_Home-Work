const Joi = require("joi");

/** create Pharmacy */
const createPharmacy = {
  body: Joi.object().keys({
    pharmacy_name: Joi.string().required().trim(),
    pharmacy_product: Joi.string().required().trim(),
    pharmacy_product_price: Joi.number().integer().required().trim(),
    pharmacy_address: Joi.string().required().trim(),
  }),
};

module.exports = {
    createPharmacy
}