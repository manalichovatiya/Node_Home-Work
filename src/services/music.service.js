const { Music } = require("../models");

/**
 * Create Music
 * @param {object} reqBody
 * @returns {Promise<Music>}
 */
const createMusic = async (reqBody) => {
  return Music.create(reqBody);
};

/**
 * Get Music list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Music>}
 */
const getMusicList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Music.find();
  // return Music.find({music_release_year:{$lt:"2010"}});
};

/**
 * Get Music details by id
 * @param {ObjectId} MusicId
 * @returns {Promise<Music>}
 */
const getMusicById = async (MusicId) => {
  return Music.findById(MusicId);
};

/**
 * Delete Music
 * @param {ObjectId} MusicId
 * @returns {Promise<Music>}
 */
const deleteMusic = async (MusicId) => {
  return Music.findByIdAndDelete(MusicId);
};
const updateMusic = async (MusicId,reqBody) => {
  return Music.findByIdAndUpdate(MusicId,{$set:reqBody});
};
module.exports = {
    createMusic,
    getMusicList,
    getMusicById,
    deleteMusic,
    updateMusic
};