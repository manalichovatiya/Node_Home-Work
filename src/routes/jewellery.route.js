const express = require("express");
const { jewelleryValidation } = require("../validations");
const { jewelleryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Jewellery */
router.post(
  "/create-Jewellery",
  validate(jewelleryValidation.createJewellery),
  jewelleryController.createJewellery
);
/** Get Jewellery list */
router.get(
  "/Jewellery-list",
  validate(jewelleryValidation.getJewelleryList),
  jewelleryController.getJewelleryList
);

/** Get Jewellery details by id */
// router.get(
//     "/get-details/:JewelleryId",
//     validate(jewelleryValidation.getDetails),
//     jewelleryController.getJewelleryDetails
//   );

/** Delete Jewellery */
router.delete(
  "/delete-Jewellery/:JewelleryId",
  validate(jewelleryValidation.getDetails),
  jewelleryController.deleteJewellery
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(jewelleryValidation.sendMail),
//   jewelleryController.sendMail
// );

module.exports = router;
