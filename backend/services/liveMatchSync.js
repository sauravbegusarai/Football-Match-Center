const {
    syncLiveMatches
} = require("../controllers/matchController");

async function startLiveMatchSync() {

    console.log("Live match sync service started.");

    try {
        await syncLiveMatches();
    } catch (error) {
        console.error(
            "Initial live match sync failed:",
            error.message
        );
    }

    setInterval(async () => {

        try {

            console.log(
                "\nRunning scheduled live match sync..."
            );

            await syncLiveMatches();

        } catch (error) {

            console.error(
                "Scheduled live match sync failed:",
                error.message
            );

        }

    }, 15 * 60 * 1000);
}

module.exports = startLiveMatchSync;