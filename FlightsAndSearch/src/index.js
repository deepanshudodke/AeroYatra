const express = require("express");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");
const ApiRoutes = require("./routes/index");

const { Airport, City } = require("../src/models/index");

const setupAndStartServer = async () => {
    // Create express object
    const server = express();

    // Middleware
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    //API
    server.use("/api", ApiRoutes);

    server.listen(PORT, async () => {
        console.log("Server has started at", PORT);
    });
};

setupAndStartServer();
