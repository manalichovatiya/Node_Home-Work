const express = require("express");
const { busValidation } = require("../validations");
const { busController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Bus */
router.post(
  "/create-bus",
  validate(busValidation.createBus),
  busController.createBus
);
/** Get Bus list */
router.get(
  "/bus-list",
  validate(busValidation.getBusList),
  busController.getBusList
);

/** Get Bus details by id */
// router.get(
//     "/get-details/:busId",
//     validate(busValidation.getDetails),
//     busController.getBusDetails
//   );

/** Delete Bus */
router.delete(
  "/delete-bus/:busId",
  validate(busValidation.getDetails),
  busController.deleteBus
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(busValidation.sendMail),
//   busController.sendMail
// );

module.exports = router;
