const Joi = require("joi");

/** create School */
const createSchool = {
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    school_address: Joi.string().required().trim(),
    school_time: Joi.string().required().trim(),
    standard: Joi.number().integer().required().trim(),
  }),
};

module.exports = {
    createSchool
}