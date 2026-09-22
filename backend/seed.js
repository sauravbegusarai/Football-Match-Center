require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = require("./config/db");
const Match = require("./models/Match");
const matches = require("./data/matches");

const seedMatches = async () => {
    try {
        await connectDB();

        for (const match of matches) {

            await Match.findOneAndUpdate(
                { id: match.id },
                match,
                {
                    upsert: true,
                    new: true
                }
            );

        }

        console.log(
            "Demo matches inserted/updated successfully"
        );

        process.exit(0);

    } catch (error) {

        console.error(
            "Error seeding matches:",
            error.message
        );

        process.exit(1);
    }
};

seedMatches();