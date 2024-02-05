const express = require("express");
const server = express();
const { PORT } = require("../src/config/serverConfig");
const apiRouter = require("./routes/index");
const { User, Role } = require("./models/index");
const prepareAndStartServer = () => {
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use("/api", apiRouter);

    server.listen(PORT, async () => {
        console.log("Server has Started at PORT", PORT);

        //db.sequelize.sync({ alter: true });
    });
};

prepareAndStartServer();
