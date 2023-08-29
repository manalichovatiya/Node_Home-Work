const { School } = require("../models");

/**
 * Create School
 * @param {object} reqBody
 * @returns {Promise<School>}
 */
const createSchool = async (reqBody) => {
  return School.create(reqBody);
};

/**
 * Get School list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<School>}
 */
const getSchoolList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return School.find();
  // return School.find({$or:[{standard : 3}]});
};

/**
 * Get School details by id
 * @param {ObjectId} SchoolId
 * @returns {Promise<School>}
 */
const getSchoolById = async (SchoolId) => {
  return School.findById(SchoolId);
};

/**
 * Delete School
 * @param {ObjectId} SchoolId
 * @returns {Promise<School>}
 */
const deleteSchool = async (SchoolId) => {
  return School.findByIdAndDelete(SchoolId);
};

const updateSchool = async (SchoolId,reqBody) => {
  return School.findByIdAndUpdate(SchoolId,{$set:reqBody});
};
module.exports = {
    createSchool,
    getSchoolList,
    getSchoolById,
    deleteSchool,
    updateSchool
};