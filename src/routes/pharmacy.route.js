const express = require("express");
const { pharmacyValidation } = require("../validations");
const { pharmacyController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Pharmacy */
router.post(
  "/create-Pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);
/** Get Pharmacy list */
router.get(
  "/Pharmacy-list",
  validate(pharmacyValidation.getPharmacyList),
  pharmacyController.getPharmacyList
);

/** Get Pharmacy details by id */
// router.get(
//     "/get-details/:PharmacyId",
//     validate(pharmacyValidation.getDetails),
//     pharmacyController.getPharmacyDetails
//   );

/** Delete Pharmacy */
router.delete(
  "/delete-Pharmacy/:PharmacyId",
  validate(pharmacyValidation.getDetails),
  pharmacyController.deletePharmacy
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(pharmacyValidation.sendMail),
//   pharmacyController.sendMail
// );

module.exports = router;
