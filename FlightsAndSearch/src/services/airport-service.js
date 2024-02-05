const { AirportRepository } = require("../repository/index");

class AirportService {
    constructor() {
        this.airportRepository = new AirportRepository();
    }

    async createAirport(data) {
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in Airport service Level");
            throw { error };
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await this.airportRepository.deleteAirport(
                airportId
            );
            return response;
        } catch (error) {
            console.log("Something went wrong in Airport service Level");
            throw { error };
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = this.airportRepository.updateAirport(
                airportId,
                data
            );
            return airport;
        } catch (error) {
            console.log("Something went wrong in Airport service Level");
            throw { error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in Airport service Level");
            throw { error };
        }
    }

    async getAllAirports(filter) {
        try {
            const airports = await this.airportRepository.getAllAirports(
                filter
            );
            return airports;
        } catch (error) {
            console.log("Something went wrong at airport service layer");
            throw { error };
        }
    }
}

module.exports = AirportService;
