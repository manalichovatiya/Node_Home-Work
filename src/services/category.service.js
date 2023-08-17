const { Category } = require("../models");

/**
 * Create Category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};
module.exports = {
  createCategory
};
