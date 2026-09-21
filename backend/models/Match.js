const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },

        competition: {
            type: String,
            required: true
        },

        status: {
            type: String,
            required: true
        },

        minute: {
            type: Number,
            default: 0
        },

        homeTeam: {
            type: String,
            required: true
        },

        awayTeam: {
            type: String,
            required: true
        },

        homeScore: {
            type: Number,
            default: 0
        },

        awayScore: {
            type: Number,
            default: 0
        },

        venue: {
            type: String,
            required: true
        },

        events: [
    new mongoose.Schema(
        {
            minute: String,
            icon: String,
            type: String,
            player: String
        },
        {
            _id: false
        }
    )
],

        statistics: {
            possession: String,
            shots: String,
            shotsOnTarget: String,
            corners: String,
            fouls: String
        },

        lineups: {
            home: [
                {
                    number: Number,
                    name: String
                }
            ],

            away: [
                {
                    number: Number,
                    name: String
                }
            ]
        }
    },

    {
        timestamps: true
    }
);

const Match = mongoose.model("Match", matchSchema);

module.exports = Match;