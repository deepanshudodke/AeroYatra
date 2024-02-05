const { StatusCodes } = require("http-status-codes");

class AppError extends Error {
    constructor(name, message, explanation, statusCode) {
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = AppError;
