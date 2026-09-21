const express = require("express");
const cors = require("cors");

const matchRoutes = require("./routes/matchRoutes");

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



app.use("/api/matches", matchRoutes);





// =========================================
// START SERVER
// =========================================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});