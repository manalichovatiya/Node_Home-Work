const express = require("express");
const productRoutes = require("./product.routes");
const userRoute = require("./user.routes");
const categoryRoute = require("./category.routes");

const router = express.Router();

router.use("/token", productRoutes);
router.use("/user", userRoute);
router.use("/category", categoryRoute);

module.exports = router;