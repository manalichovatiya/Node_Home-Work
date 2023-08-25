const express = require("express");
const { travelValidation } = require("../validations");
const { travelController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Travel */
router.post(
  "/create-Travel",
  validate(travelValidation.createTravel),
  travelController.createTravel
);
/** Get Travel list */
router.get(
  "/Travel-list",
  validate(travelValidation.getTravelList),
  travelController.getTravelList
);

/** Get Travel details by id */
// router.get(
//     "/get-details/:TravelId",
//     validate(travelValidation.getDetails),
//     travelController.getTravelDetails
//   );

/** Delete Travel */
router.delete(
  "/delete-Travel/:TravelId",
  validate(travelValidation.getDetails),
  travelController.deleteTravel
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(travelValidation.sendMail),
//   travelController.sendMail
// );

module.exports = router;
