const Joi = require("joi");

/** Create token  */
const generateToken = {
  body: Joi.object({
    user: Joi.string().required().trim(),
  }),
};

module.exports = {
  generateToken,
};