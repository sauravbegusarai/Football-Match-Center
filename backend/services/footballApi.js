require("dotenv").config();

async function getFootballAPI(endpoint) {
    try {
        const response = await fetch(
            `https://v3.football.api-sports.io/${endpoint}`,
            {
                method: "GET",
                headers: {
                    "x-apisports-key": process.env.API_FOOTBALL_KEY
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                `API request failed with status ${response.status}`
            );
        }

        return data;

    } catch (error) {
        console.error("Football API Error:", error.message);
        throw error;
    }
}

// API-Football data → हमारे Match format
function convertFixtureToMatch(fixture) {

    // ---------- EVENTS ----------

    const events = (fixture.events || []).map(event => {

        let icon = "📌";

        if (event.type === "Goal") {
            icon = "⚽";
        }
        else if (event.type === "Card") {

            if (event.detail === "Yellow Card") {
                icon = "🟨";
            }
            else if (event.detail === "Red Card") {
                icon = "🟥";
            }

        }
        else if (event.type === "subst") {
            icon = "🔄";
        }
        else if (event.type === "VAR") {
            icon = "🎥";
        }

        return {
            minute: event.time?.elapsed ?? 0,
            extraMinute: event.time?.extra ?? null,
            icon,
            type: event.type,
            detail: event.detail || "",
            player: event.player?.name || "Unknown",
            assist: event.assist?.name || null,
            team: event.team?.name || "Unknown"
        };
    });


    // ---------- LINEUPS ----------

    let homeLineup = [];
    let awayLineup = [];

    if (fixture.lineups && fixture.lineups.length >= 2) {

        homeLineup =
            (fixture.lineups[0].startXI || []).map(item => ({
                number: item.player.number,
                name: item.player.name,
                position: item.player.pos,
                grid: item.player.grid
            }));

        awayLineup =
            (fixture.lineups[1].startXI || []).map(item => ({
                number: item.player.number,
                name: item.player.name,
                position: item.player.pos,
                grid: item.player.grid
            }));
    }


    // ---------- FINAL MATCH OBJECT ----------

    return {

        id: fixture.fixture.id,

        source: "api",

        competition: fixture.league.name,

        status: fixture.fixture.status.long,

        minute: fixture.fixture.status.elapsed || 0,

        homeTeam: fixture.teams.home.name,

        awayTeam: fixture.teams.away.name,

        homeLogo: fixture.teams.home.logo,

        awayLogo: fixture.teams.away.logo,

        homeScore: fixture.goals.home ?? 0,

        awayScore: fixture.goals.away ?? 0,

        venue: fixture.fixture.venue.name || "Unknown",

        lineups: {
            home: homeLineup,
            away: awayLineup
        },

        events
    };
}


module.exports = {
    getFootballAPI,
    convertFixtureToMatch
};