const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const { rateLimit } = require("express-rate-limit");
const axios = require("axios");
const server = express();

const PORT = 3005;

const limiter = rateLimit({
    windowMs: 2 * 60 * 1000,
    max: 5
});
server.use(limiter);
server.use(morgan("combined"));

server.use("/bookingservice", async (req, res, next) => {
    console.log(req.headers["x-access-token"]);
    try {
        const response = await axios.get(
            "http://localhost:3001/api/v1/isAuthenticated",
            {
                headers: {
                    "x-access-token": req.headers["x-access-token"]
                }
            }
        );
        next();
    } catch (error) {
        res.status(402).json({ unautorized: false });
    }
});
server.use(
    "/bookingservice",
    createProxyMiddleware({
        target: "http://localhost:3003",
        changeOrigin: true
    })
);

server.get("/home", (req, res) => {
    return res.json({ Message: "OK" });
});
server.listen(PORT, () => {
    console.log("Server started at PORT", PORT);
});
