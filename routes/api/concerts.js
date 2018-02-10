const concertRouter = require("express").Router();
const concertController = require("../../controllers/concertController");

// Matches with "/api/concerts"
concertRouter.route("/concerts")
  .get(concertController.findAll)
  .post(concertController.create);

// Matches with "/api/concerts/:id"
concertRouter.route("/:id")
  .get(concertController.findById)
  // .put(concertController.update)
  // .delete(concertController.remove);

module.exports = concertRouter;
