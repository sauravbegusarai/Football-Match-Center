const express = require("express");
const cors = require("cors");

const matches = require("./data/matches");

const app = express();
app.use(cors());

const PORT = 5000;


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
// MATCHES API
// =========================================




app.get("/api/matches", (req, res) => {

    res.json({
        success: true,
        count: matches.length,
        data: matches
    });

});

app.get("/api/matches/:id", (req, res) => {
    const matchId = Number(req.params.id);

    const match = matches.find(match => match.id === matchId);

    if (!match) {
        return res.status(404).json({
            success: false,
            message: "Match not found"
        });
    }

    res.json({
        success: true,
        data: match
    });
});


// =========================================
// START SERVER
// =========================================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});