const express = require("express");

const router = express.Router();

const cityApiRoutes = require("./v1/cityRoute");
const airportApiRouter = require("./v1/airportRoute");
const flightApiRouter = require("./v1/flightRoute");
router.use("/v1", cityApiRoutes);
router.use("/v1", airportApiRouter);
router.use("/v1", flightApiRouter);

module.exports = router;
