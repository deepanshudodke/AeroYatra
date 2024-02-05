const express = require("express");
const AirportController = require("../../controllers/airport-controller");

const router = express.Router();

router.post("/airport", AirportController.create);
router.delete("/airport/:id", AirportController.destroy);
router.get("/airport/:id", AirportController.get);
router.get("/airport", AirportController.getAll);
router.patch("/airport/:id", AirportController.update);

module.exports = router;
