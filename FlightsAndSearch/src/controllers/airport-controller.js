const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created a Airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the airport",
            err: error
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await airportService.createAirport(req.param.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully deleted a Airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete the airport",
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully fetched a Airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the airport",
            err: error
        });
    }
};

const update = async (req, res) => {
    try {
        const airport = await airportService.updateAirport(
            req.params.id,
            req.body
        );
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully updated a Airport",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the airport",
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Successfully fetched all Airports",
            err: {}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the airports",
            err: error
        });
    }
};
module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};
