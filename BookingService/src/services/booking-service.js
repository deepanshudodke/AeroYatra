const BookingRepository = require("../repository/booking-repository");
const axios = require("axios");
const { ServiceError } = require("../utils/errors");

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data) {
        try {
            const flightId = Number(data.flightId);
            //console.log(flightId);
            let getFlightRequestURL = `http://localhost:3000/api/v1/flights/${flightId}`;

            const response = await axios.get(getFlightRequestURL);

            const flightData = response.data.data;
            const priceOfTheFlight = flightData.price;

            if (data.noOfSeats > flightData.totalSeats) {
                console.log("Insufficient");
                throw { error };
            }

            const totalCost = priceOfTheFlight * data.noOfSeats;
            const bookingPayload = { ...data, totalCost, flightId };
            //console.log(bookingPayload);
            const booking = await this.bookingRepository.create(bookingPayload);
            const updateFlightRequestURL = `http://localhost:3000/api/v1/flights/${booking.flightId}`;
            await axios.patch(updateFlightRequestURL, {
                totalSeats: flightData.totalSeats - booking.noOfSeats
            });
            await this.bookingRepository.update(booking.id, {
                status: "Booked"
            });
            return booking;
        } catch (error) {
            console.log("Something went wrong at Bookings service layer");
            throw error;
        }
    }
}

module.exports = BookingService;
