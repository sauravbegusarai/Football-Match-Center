const express = require("express");
const cors = require("cors");

const matchRoutes = require("./routes/matchRoutes");
const connectDB = require("./config/db");

const app = express();

app.use(cors());


// =========================================
// DATABASE
// =========================================

connectDB();


// =========================================
// HOME ROUTE
// =========================================

app.get("/", (req, res) => {

    res.send("Football Match Center Backend is running!");

});


// =========================================
// TEST API
// =========================================

app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        message: "Football Match Center API is working"
    });

});


// =========================================
// MATCH ROUTES
// =========================================

app.use("/api/matches", matchRoutes);


// =========================================
// EXPORT APP FOR VERCEL
// =========================================

module.exports = app;