const { Movie } = require("../models");

/**
 * Create Movie
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (reqBody) => {
  return Movie.create(reqBody);
};

/**
 * Get Movie list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Movie>}
 */
const getMovieList = async (filter, options) => {
//   const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Movie.find();
  // return Movie.find({$or:[{movie_director:"James Cameron"},{movie_title:"Pulp Fiction"}]});
};

/**
 * Get Movie details by id
 * @param {ObjectId} MovieId
 * @returns {Promise<Movie>}
 */
const getMovieById = async (MovieId) => {
  return Movie.findById(MovieId);
};

/**
 * Delete Movie
 * @param {ObjectId} MovieId
 * @returns {Promise<Movie>}
 */
const deleteMovie = async (MovieId) => {
  return Movie.findByIdAndDelete(MovieId);
};

const updateMovie = async (MovieId,reqBody) => {
  return Movie.findByIdAndUpdate(MovieId,{$set:reqBody});
};
module.exports = {
    createMovie,
    getMovieList,
    getMovieById,
    deleteMovie,
    updateMovie
};