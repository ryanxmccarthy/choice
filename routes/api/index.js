const router = require("express").Router();
const concertController = require("./concerts");
const restaurantController = require("./restaurants")

// Book routes
router.use("/concerts", concertController);
router.use("/restaurants", restaurantController);

module.exports = router;
