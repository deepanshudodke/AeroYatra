const express = require("express");
const { sendBasicEmail } = require("./services/email-service");
const TicketController = require("./controllers/ticket-controller");
const cron = require("node-cron");
const jobs = require("./utils/jobs");
const EmailService = require("./services/email-service");
const { createChannel, subscribeMessage } = require("./utils/messageQueue");

const REMINDER_BINDING_KEY = "REMINDER_SERVICE";
const setupAndStartServer = async () => {
    const server = express();
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.post("/api/v1/tickets", TicketController.create);
    const channel = await createChannel();
    subscribeMessage(
        channel,
        EmailService.subscribeEvents,
        REMINDER_BINDING_KEY
    );
    server.listen(3004, () => {
        console.log("Server started at port 3004");
        jobs();
        // sendBasicEmail(
        //     "support@admin.com",
        //     "xxx.com",
        //     "This is testing email",
        //     "Hey how are uh"
        // );

        // cron.schedule("* * * * *", () => {
        //     console.log("running a task every minute");
        // });
    });
};

setupAndStartServer();
