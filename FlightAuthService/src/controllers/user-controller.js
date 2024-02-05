const UserService = require("../services/user-service");
const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            data: response,
            message: "Successfully created the user",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });
    }
};

const getById = async (req, res) => {
    try {
        const response = await userService.getById(req.params.id);
        return res.status(200).json({
            data: response,
            message: "Successfully fetched the user",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });
    }
};

const destroy = async (req, res) => {};

const signIn = async (req, res) => {
    try {
        const response = await userService.signIn(
            req.body.email,
            req.body.password
        );
        return res.status(200).json({
            data: response,
            message: "Successfully signed in the user",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong",
            success: false,
            err: error
        });
    }
};

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers["x-access-token"];
        const response = await userService.isAuthenticated(token);
        return res.status(200).json({
            data: response,
            message: "user is authenticated and token is valid",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong in authentication",
            success: false,
            err: error
        });
    }
};

const isAdmin = async (req, res) => {
    try {
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            data: response,
            message: "Successfully fethced whether user is admin",
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Something went wrong in isAdmin controller",
            success: false,
            err: error
        });
    }
};

module.exports = {
    create,
    destroy,
    getById,
    signIn,
    isAuthenticated,
    isAdmin
};
