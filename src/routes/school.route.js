const express = require("express");
const { schoolValidation } = require("../validations");
const { schoolController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create School */
router.post(
  "/create-School",
  validate(schoolValidation.createSchool),
  schoolController.createSchool
);
/** Get School list */
router.get(
  "/School-list",
  validate(schoolValidation.getSchoolList),
  schoolController.getSchoolList
);

/** Get School details by id */
// router.get(
//     "/get-details/:SchoolId",
//     validate(schoolValidation.getDetails),
//     schoolController.getSchoolDetails
//   );

/** Delete School */
router.delete(
  "/delete-School/:SchoolId",
  validate(schoolValidation.getDetails),
  schoolController.deleteSchool
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(schoolValidation.sendMail),
//   schoolController.sendMail
// );

module.exports = router;
