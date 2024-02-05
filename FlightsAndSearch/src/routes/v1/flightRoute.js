const express = require("express");
const FlightController = require("../../controllers/flight-controller");
const { FlightMiddleware } = require("../../middlewares/index");

const router = express.Router();

router.post(
    "/flight",
    FlightMiddleware.validateCreateFlight,
    FlightController.create
);
router.get("/flight", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
router.patch("/flights/:id", FlightController.update);

module.exports = router;
