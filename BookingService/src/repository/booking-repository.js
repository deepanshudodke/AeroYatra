const { Booking } = require("../models/index");
//const { ValidationError, AppError } = require("../utils/errors/index");
class BookingRepository {
    async create(data) {
        try {
            console.log(data);
            const booking = await Booking.create(data);

            return booking;
        } catch (error) {
            console.log("Something went wrong at Booking repo layer");
            throw { error };
        }
    }

    async update(bookingId, data) {
        try {
            await Booking.update(data, {
                where: {
                    id: bookingId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong at Booking repo layer");
            throw { error };
        }
    }
}

module.exports = BookingRepository;
