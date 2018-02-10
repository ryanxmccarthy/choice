const restaurantRouter = require("express").Router();
const restaurantController = require("../../controllers/restaurantController");

// Matches with "/api/restaurants"
restaurantRouter.route("/restaurants")
  .get(restaurantController.findAll)
  .post(restaurantController.create);

// Matches with "/api/restaurants/:id"
restaurantRouter.route("/:id")
  .get(restaurantController.findById)
  // .put(restaurantController.update)
  .delete(restaurantController.remove);

module.exports = restaurantRouter;