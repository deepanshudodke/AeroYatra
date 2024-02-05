const express = require("express");
const PORT = 3003;
const server = express();
const { Booking } = require("./models/index");
const apiRoutes = require("./routes/index");
const db = require("../src/models/index");
const setupAndStartServer = async () => {
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.get("/bookingservice/api/v1/home", (req, res) => {
        res.json({ success: "HAHAHAH" });
    });
    server.use("/api", apiRoutes);

    server.listen(PORT, async () => {
        console.log("Server has started at PORT =", PORT);
        //db.sequelize.sync({ alter: true });
        // await Booking.create({
        //     flightId: 1,
        //     userId: "1",
        //     noOfSeats: "3",
        //     totalCost: 13500
        // });
    });
};

setupAndStartServer();
