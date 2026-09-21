const mongoose = require("mongoose");

const connectDB = require("./config/db");
const Match = require("./models/Match");
const matches = require("./data/matches");

const seedMatches = async () => {
    try {
        await connectDB();

        await Match.deleteMany();

        await Match.insertMany(matches);

        console.log("Matches inserted into MongoDB successfully");

        process.exit(0);
    } catch (error) {
        console.error("Error seeding matches:", error.message);
        process.exit(1);
    }
};

seedMatches();