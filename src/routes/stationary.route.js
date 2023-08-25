const express = require("express");
const { stationaryValidation } = require("../validations");
const { stationaryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Stationary */
router.post(
  "/create-Stationary",
  validate(stationaryValidation.createStationary),
  stationaryController.createStationary
);
/** Get Stationary list */
router.get(
  "/Stationary-list",
  validate(stationaryValidation.getStationaryList),
  stationaryController.getStationaryList
);

/** Get Stationary details by id */
// router.get(
//     "/get-details/:StationaryId",
//     validate(stationaryValidation.getDetails),
//     stationaryController.getStationaryDetails
//   );

/** Delete Stationary */
router.delete(
  "/delete-Stationary/:StationaryId",
  validate(stationaryValidation.getDetails),
  stationaryController.deleteStationary
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(stationaryValidation.sendMail),
//   stationaryController.sendMail
// );

module.exports = router;
