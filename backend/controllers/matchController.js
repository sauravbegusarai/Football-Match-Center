const matches = require("../data/matches");


// GET all matches
function getAllMatches(req, res) {

    res.json({
        success: true,
        count: matches.length,
        data: matches
    });

}


// GET single match
function getMatchById(req, res) {

    const matchId = Number(req.params.id);

    const match =
        matches.find(match => match.id === matchId);

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

}


module.exports = {
    getAllMatches,
    getMatchById
};