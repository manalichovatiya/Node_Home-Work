const express = require("express");
const { hotelValidation } = require("../validations");
const { hotelController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Hotel */
router.post(
  "/create-Hotel",
  validate(hotelValidation.createHotel),
  hotelController.createHotel
);
/** Get Hotel list */
router.get(
  "/Hotel-list",
  validate(hotelValidation.getHotelList),
  hotelController.getHotelList
);

/** Get Hotel details by id */
// router.get(
//     "/get-details/:HotelId",
//     validate(hotelValidation.getDetails),
//     hotelController.getHotelDetails
//   );

/** Delete Hotel */
router.delete(
  "/delete-Hotel/:HotelId",
  validate(hotelValidation.getDetails),
  hotelController.deleteHotel
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(hotelValidation.sendMail),
//   hotelController.sendMail
// );

module.exports = router;
