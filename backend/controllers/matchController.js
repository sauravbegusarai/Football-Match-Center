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

const {
    getFootballAPI,
    convertFixtureToMatch
} = require("../services/footballApi");


async function getLiveMatches(req, res) {
    try {

        const matches = await Match.find({
            source: "api",
            status: {
                $regex: /first half|second half|halftime|live/i
            }
        });

        res.json({
            success: true,
            count: matches.length,
            data: matches
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch live matches",
            error: error.message
        });
    }
}

// ==================================================
// SYNC LIVE MATCHES FROM FOOTBALL API TO MONGODB
// ==================================================

async function syncLiveMatches() {

    try {

        const data =
            await getFootballAPI("fixtures?live=all");

        if (data.results === 0) {

            console.log("No live matches available from API.");

            return [];
        }

        const matches =
            data.response.map(convertFixtureToMatch);


        for (const match of matches) {

    // Check if this match already exists
    const existingMatch =
        await Match.findOne({
            id: match.id
        });

    // Protect existing lineups
    if (
        existingMatch &&
        existingMatch.lineups &&
        (
            existingMatch.lineups.home.length > 0 ||
            existingMatch.lineups.away.length > 0
        ) &&
        (
            !match.lineups ||
            (
                match.lineups.home.length === 0 &&
                match.lineups.away.length === 0
            )
        )
    ) {

        match.lineups =
            existingMatch.lineups;
    }


    await Match.findOneAndUpdate(
        { id: match.id },
        match,
        {
            upsert: true,
            returnDocument: "after"
        }
    );
}

        console.log(
            `${matches.length} live matches synced to MongoDB.`
        );

        return matches;

    } catch (error) {

        console.error(
            "Live match sync failed:",
            error.message
        );

        throw error;
    }
}
module.exports = {
    getAllMatches,
    getMatchById,
    getLiveMatches,
    syncLiveMatches
};