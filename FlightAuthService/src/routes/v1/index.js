const express = require("express");
const UserController = require("../../controllers/user-controller");
const router = express.Router();

router.post("/signup", UserController.create);
router.get("/user/:id", UserController.getById);
router.post("/signin", UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
router.get("/isAdmin", UserController.isAdmin);
module.exports = router;
