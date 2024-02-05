const TicketService = require("../services/email-service");

const create = async (req, res) => {
    try {
        //console.log(req.body);
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "Successfully registered email reminder"
        });
    } catch (error) {
        return res.status(500).json({
            error: error,
            message: "unable to register email reminder"
        });
    }
};

module.exports = {
    create
};
