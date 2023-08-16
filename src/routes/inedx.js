const express = require("express");
const productRoutes = require("./product.routes");
const userRoute = require("./user.routes");

const router = express.Router();

router.use("/token", productRoutes);
router.use("/user", userRoute);

module.exports = router;