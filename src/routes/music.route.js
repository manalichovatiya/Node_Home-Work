const express = require("express");
const { musicValidation } = require("../validations");
const { musicController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Music */
router.post(
  "/create-Music",
  validate(musicValidation.createMusic),
  musicController.createMusic
);
/** Get Music list */
router.get(
  "/Music-list",
  validate(musicValidation.getMusicList),
  musicController.getMusicList
);

/** Get Music details by id */
// router.get(
//     "/get-details/:MusicId",
//     validate(musicValidation.getDetails),
//     musicController.getMusicDetails
//   );

/** Delete Music */
router.delete(
  "/delete-Music/:MusicId",
  validate(musicValidation.getDetails),
  musicController.deleteMusic
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(musicValidation.sendMail),
//   musicController.sendMail
// );

module.exports = router;
