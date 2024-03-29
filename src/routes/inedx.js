const express = require("express");
const userRoute = require("./user.routes");
const categoryRoute = require("./category.routes");
const busRoute = require("./bus.route");
const groceryRoute = require("./grocery.route");
const hotelRoute = require("./hotel.route");
const jewelleryRoute = require("./jewellery.route");
const movieRoute = require("./movie.route");
const musicRoute = require("./music.route");
const pharmacyRoute = require("./pharmacy.route");
const schoolRoute = require("./school.route");
const stationaryRoute = require("./stationary.route");
const travelRoute = require("./travel.route");
const mobileRoute = require("./mobile.route");
const tokenRoute = require("./token.route");
const bannerRoute = require("./banner.route");
const productRoute = require("./product.route");


const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/bus", busRoute);
router.use("/grocery", groceryRoute);
router.use("/hotel", hotelRoute);
router.use("/jewellery", jewelleryRoute);
router.use("/movie", movieRoute);
router.use("/music", musicRoute);
router.use("/pharmacy", pharmacyRoute);
router.use("/school", schoolRoute);
router.use("/stationary", stationaryRoute);
router.use("/travel", travelRoute);
router.use("/mobile", mobileRoute);
router.use("/token", tokenRoute);
router.use("/banner", bannerRoute);
router.use("/product", productRoute);

module.exports = router;