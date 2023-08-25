const express = require("express");
const { groceryValidation } = require("../validations");
const { groceryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create Grocery */
router.post(
  "/create-Grocery",
  validate(groceryValidation.createGrocery),
  groceryController.createGrocery
);
/** Get Grocery list */
router.get(
  "/Grocery-list",
  validate(groceryValidation.getGroceryList),
  groceryController.getGroceryList
);

/** Get Grocery details by id */
// router.get(
//     "/get-details/:GroceryId",
//     validate(groceryValidation.getDetails),
//     groceryController.getGroceryDetails
//   );

/** Delete Grocery */
router.delete(
  "/delete-Grocery/:GroceryId",
  validate(groceryValidation.getDetails),
  groceryController.deleteGrocery
);

/** Send mail */
// router.post(
//   "/send-mail",
//   validate(groceryValidation.sendMail),
//   groceryController.sendMail
// );

module.exports = router;
