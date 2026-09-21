const Match = require("../models/Match");

// GET all matches
async function getAllMatches(req, res) {
    try {
        const matches = await Match.find();

        res.json({
            success: true,
            count: matches.length,
            data: matches
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch matches",
            error: error.message
        });
    }
}

// GET single match
async function getMatchById(req, res) {
    try {
        const matchId = Number(req.params.id);

        const match = await Match.findOne({ id: matchId });

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
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch match",
            error: error.message
        });
    }
}


module.exports = {
    getAllMatches,
    getMatchById
};