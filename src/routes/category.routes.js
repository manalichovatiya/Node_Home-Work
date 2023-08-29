const express = require("express");
const { categoryValidation } = require("../validations");
const { categoryController } = require("../controllers");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/** category list */
router.get(
  "/list",
  categoryController.categoryList
)

router.delete(
  "/delete/:categoryId",
  categoryController.deleteRecord
)

router.put(
  "/update-category/:categoryId",
  categoryController.updateCategory
)

module.exports = router;