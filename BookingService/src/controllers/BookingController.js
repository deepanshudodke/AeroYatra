const { BookingService } = require("../services/index");
const bookingService = new BookingService();
const StatusCodes = require("http-status-code");

const REMINDER_BINDING_KEY = "REMINDER_SERVICE";

const { createChannel, publishMessage } = require("../utils/messageQueue");
const { response } = require("express");

class BookingController {
    constructor() {}

    async sendMessageToQueue(req, res) {
        const channel = await createChannel();
        const payload = {
            data: {
                subject: "This is noti from queue",
                content: "Some queue will subscribe this",
                recepientEmail: "deepanshudodke20012015@gmail.com",
                notificationTime: "2023-10-17T02:48:20.292Z"
            },
            service: "CREATE_TICKET"
        };
        publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(payload));
        return res.status(200).json({
            message: "Successfully published the event 2"
        });
    }

    async create(req, res) {
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(202).json({
                message: "Successfully completed Booking",
                success: true,
                err: {},
                data: response
            });
        } catch (error) {
            return res.status(400).json({
                message: {},
                success: false,
                err: "kuch hua",
                data: {}
            });
        }
    }
}

module.exports = BookingController;
