const express = require("express");
const productRoutes = require("./product.routes");
const userRoute = require("./user.routes");
const categoryRoute = require("./category.routes");
const busRoute = require("./bus.route");

const router = express.Router();

router.use("/token", productRoutes);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/bus", busRoute);

module.exports = router;