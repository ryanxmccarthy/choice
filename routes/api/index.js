const router = require("express").Router();
const concertController = require("./concerts");

// Book routes
router.use("/concerts", concertController);

module.exports = router;
