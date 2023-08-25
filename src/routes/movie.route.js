const express = require("express");
const { movieValidation } = require("../validations");
const { movieController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Movie */
router.post(
  "/create-Movie",
  validate(movieValidation.createMovie),
  movieController.createMovie
);
/** Get Movie list */
router.get(
  "/Movie-list",
  validate(movieValidation.getMovieList),
  movieController.getMovieList
);

/** Get Movie details by id */
// router.get(
//     "/get-details/:MovieId",
//     validate(movieValidation.getDetails),
//     movieController.getMovieDetails
//   );

/** Delete Movie */
router.delete(
  "/delete-Movie/:MovieId",
  validate(movieValidation.getDetails),
  movieController.deleteMovie
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(movieValidation.sendMail),
//   movieController.sendMail
// );

module.exports = router;
