const express = require("express");

const {
    getAllMatches,
    getMatchById
} = require("../controllers/matchController");

const router = express.Router();


// GET all matches
router.get("/", getAllMatches);


// GET single match
router.get("/:id", getMatchById);


module.exports = router;