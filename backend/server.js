const express = require("express");
const cors = require("cors");

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

const matches = [
    {
        id: 1,
        competition: "Premier League",
        status: "LIVE",
        minute: 67,

        homeTeam: "Manchester City",
        awayTeam: "Arsenal",

        homeScore: 2,
        awayScore: 1,

        venue: "Etihad Stadium",

        events: [
            {
                minute: "67'",
                icon: "⚽",
                type: "Goal",
                player: "Erling Haaland"
            },
            {
                minute: "54'",
                icon: "🟨",
                type: "Yellow Card",
                player: "Declan Rice"
            },
            {
                minute: "45'",
                icon: "⏱️",
                type: "Half Time",
                player: "Manchester City 2 - 1 Arsenal"
            },
            {
                minute: "23'",
                icon: "⚽",
                type: "Goal",
                player: "Bukayo Saka"
            }
        ],

        statistics: {
            possession: "58% - 42%",
            shots: "12 - 8",
            shotsOnTarget: "6 - 4",
            corners: "7 - 3",
            fouls: "8 - 11"
        },

        lineups: {
            home: [
                { number: 31, name: "Ederson" },
                { number: 2, name: "Kyle Walker" },
                { number: 3, name: "Rúben Dias" },
                { number: 25, name: "Manuel Akanji" },
                { number: 5, name: "John Stones" },
                { number: 17, name: "Kevin De Bruyne" },
                { number: 16, name: "Rodri" },
                { number: 20, name: "Bernardo Silva" },
                { number: 47, name: "Phil Foden" },
                { number: 9, name: "Erling Haaland" },
                { number: 10, name: "Jack Grealish" }
            ],

            away: [
                { number: 22, name: "David Raya" },
                { number: 4, name: "Ben White" },
                { number: 2, name: "William Saliba" },
                { number: 6, name: "Gabriel Magalhães" },
                { number: 35, name: "Oleksandr Zinchenko" },
                { number: 8, name: "Martin Ødegaard" },
                { number: 41, name: "Declan Rice" },
                { number: 7, name: "Bukayo Saka" },
                { number: 29, name: "Kai Havertz" },
                { number: 11, name: "Gabriel Martinelli" },
                { number: 9, name: "Gabriel Jesus" }
            ]
        }
    },

    {
        id: 2,
        competition: "La Liga",
        status: "LIVE",
        minute: 54,

        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",

        homeScore: 1,
        awayScore: 1,

        venue: "Camp Nou",

        events: [
            {
                minute: "54'",
                icon: "⚽",
                type: "Goal",
                player: "Robert Lewandowski"
            },
            {
                minute: "41'",
                icon: "🟨",
                type: "Yellow Card",
                player: "Jude Bellingham"
            },
            {
                minute: "28'",
                icon: "⚽",
                type: "Goal",
                player: "Vinicius Junior"
            }
        ],

        statistics: {
            possession: "51% - 49%",
            shots: "9 - 10",
            shotsOnTarget: "4 - 5",
            corners: "4 - 5",
            fouls: "10 - 9"
        },

        lineups: {
            home: [],
            away: []
        }
    }
];


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