const express = require("express");

const {
    getAllMatches,
    getMatchById,
    getLiveMatches
} = require("../controllers/matchController");

const router = express.Router();

router.get("/live", getLiveMatches);

router.get("/", getAllMatches);

router.get("/:id", getMatchById);

module.exports = router;