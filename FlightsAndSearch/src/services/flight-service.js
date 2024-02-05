const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            //console.log(data.airplaneId);

            if (compareTime(data.arrivalTime, data.departureTime) == false) {
                throw {
                    error: "Arrival time cannot be less than departure time"
                };
            }
            const airplane = await this.airplaneRepository.getAirplane(
                data.airplaneId
            );
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            });

            return flight;
        } catch (error) {
            console.log("Something went wrong at Flight service layer");
            throw { error };
        }
    }

    async getAllFlightData(data) {
        try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at Flight service layer");
            throw { error };
        }
    }

    async getFlightData(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at Flight service layer");
            throw { error };
        }
    }

    async updateFlight(flightId, data) {
        try {
            const flight = await this.flightRepository.updateFlight(
                flightId,
                data
            );
            return flight;
        } catch (error) {
            console.log("Something went wrong at Flight service layer");
            throw { error };
        }
    }
}

module.exports = FlightService;
