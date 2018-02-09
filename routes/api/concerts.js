const router = require("express").Router();
const concertController = require("../../controllers/concertController");

// Matches with "/api/concerts"
// router.route("/")
//   .get(concertController.findAll)
//   .post(concertController.create);

// Matches with "/api/concerts/:id"
// router
//   .route("/:id")
//   .get(concertController.findById)
//   .put(concertController.update)
//   .delete(concertController.remove);

module.exports = router;
