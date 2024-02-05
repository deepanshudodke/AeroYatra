const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully created the flight"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the flight",
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlightData(req.params.id);
        return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully fetched the flight"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the flight",
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const flight = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully fetched all the flight"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the flight",
            err: error
        });
    }
};

const update = async (req, res) => {
    try {
        const flight = await flightService.updateFlight(
            req.params.id,
            req.body
        );
        return res.status(200).json({
            data: flight,
            success: true,
            err: {},
            message: "Successfully updated the flight"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the flight",
            err: error
        });
    }
};

module.exports = {
    create,
    get,
    getAll,
    update
};
