


// =========================================
// GET MATCH ID FROM URL
// =========================================

const urlParams = new URLSearchParams(window.location.search);

const matchId = Number(urlParams.get("id"));


// =========================================
// LOAD MATCH FROM BACKEND
// =========================================

async function loadMatch() {

    try {

       const response = await fetch(
    `https://football-match-center-tau.vercel.app/api/matches/${matchId}`
);

        const result = await response.json();

        if (!result.success) {

            showMatchNotFound();
            return;

        }

        renderMatchDetails(result.data);

    } catch (error) {

        console.error(
            "Failed to load match:",
            error
        );

    }

}


// =========================================
// MATCH NOT FOUND
// =========================================

function showMatchNotFound() {

    document.querySelector(".match-details-section").innerHTML = `
        <div class="container">
            <div class="match-details-card">
                <h2>Match Not Found</h2>

                <p>
                    The requested match does not exist.
                </p>

                <br>

                <a href="../index.html">
                    ← Back to Matches
                </a>

            </div>
        </div>
    `;

}


loadMatch();

// =========================================
// RENDER MATCH DETAILS
// =========================================

function renderMatchDetails(match) {

    // Competition
    const competitionElement =
        document.querySelector(".match-competition span");

    competitionElement.textContent =
        match.competition;


    // Match status
    const statusElement =
        document.querySelector(".match-status");

    statusElement.innerHTML = `
        <span class="live-dot"></span>
        ${match.status} ${match.minute}'
    `;


    // Home team
    const teamElements =
        document.querySelectorAll(".large-team h2");

    teamElements[0].textContent =
        match.homeTeam;

    teamElements[1].textContent =
        match.awayTeam;


    // Score
    const scoreElement =
        document.querySelector(".score-number");

    scoreElement.textContent =
        `${match.homeScore} - ${match.awayScore}`;


    // Minute
    const scoreMinute =
        document.querySelector(".large-score span");

    scoreMinute.textContent =
        `${match.minute}'`;


    // Venue
    const information =
        document.querySelectorAll(".match-information p");

    information[0].innerHTML = `
        <strong>Venue</strong>
        ${match.venue}
    `;


    // Events
    renderEvents(match.events);

renderStatistics(match.statistics);
renderLineups(
    match.lineups,
    match.homeTeam,
    match.awayTeam
);
}


// =========================================
// RENDER EVENTS
// =========================================

function renderEvents(events) {

    const timelines =
        document.querySelectorAll(".events-timeline");

    timelines.forEach(timeline => {

        timeline.innerHTML = "";

        events.forEach(event => {

            timeline.innerHTML += `
                <div class="event-item">

                    <div class="event-minute">
                        ${event.minute}'
                        ${event.extraMinute
                            ? `+${event.extraMinute}`
                            : ""
                        }
                    </div>

                    <div class="event-icon">
                        ${event.icon}
                    </div>

                    <div class="event-description">

                        <strong>
                            ${event.type}
                            ${event.detail
                                ? ` - ${event.detail}`
                                : ""
                            }
                        </strong>

                        <p>
                            ${event.player}
                        </p>

                        ${
                            event.assist
                                ? `<small>Assist: ${event.assist}</small>`
                                : ""
                        }

                    </div>

                </div>
            `;

        });

    });
}

// =========================================
// RENDER STATISTICS
// =========================================

function renderStatistics(statistics) {

    const statisticsList =
        document.querySelector(".statistics-list");

    if (!statisticsList) return;

    // Statistics not available
    if (!statistics) {

        statisticsList.innerHTML = `
            <div class="no-statistics">
                <p>Statistics are not available for this match.</p>
            </div>
        `;

        return;
    }

    statisticsList.innerHTML = `
        <div>
            <span>Possession</span>
            <strong>${statistics.possession ?? "N/A"}</strong>
        </div>

        <div>
            <span>Shots</span>
            <strong>${statistics.shots ?? "N/A"}</strong>
        </div>

        <div>
            <span>Shots on Target</span>
            <strong>${statistics.shotsOnTarget ?? "N/A"}</strong>
        </div>

        <div>
            <span>Corners</span>
            <strong>${statistics.corners ?? "N/A"}</strong>
        </div>

        <div>
            <span>Fouls</span>
            <strong>${statistics.fouls ?? "N/A"}</strong>
        </div>
    `;
}
// =========================================
// TAB FUNCTIONALITY
// =========================================

const tabs = document.querySelectorAll(".match-tab");

const tabContents = {
    Overview: document.getElementById("overviewContent"),
    Events: document.getElementById("eventsContent"),
    Lineups: document.getElementById("lineupsContent"),
    Statistics: document.getElementById("statisticsContent")
};


tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // Remove active class from all tabs
        tabs.forEach(item => {
            item.classList.remove("active");
        });

        // Add active class to clicked tab
        tab.classList.add("active");


        // Hide all tab contents
        Object.values(tabContents).forEach(content => {
            content.classList.remove("active");
        });


        // Get clicked tab name
        const tabName = tab.textContent.trim();


        // Show selected content
        if (tabContents[tabName]) {
            tabContents[tabName].classList.add("active");
        }

    });

});



// =========================================
// RENDER LINEUPS
// =========================================

function renderLineups(lineups, homeTeam, awayTeam) {

    const homePlayers =
        document.getElementById("homePlayers");

    const awayPlayers =
        document.getElementById("awayPlayers");

    const homeTitle =
        document.getElementById("homeLineupTitle");

    const awayTitle =
        document.getElementById("awayLineupTitle");

    if (!homePlayers || !awayPlayers) return;


    // Lineups not available
    if (
        !lineups ||
        !lineups.home ||
        !lineups.away
    ) {

        homePlayers.innerHTML = `
            <p>Home lineup is not available.</p>
        `;

        awayPlayers.innerHTML = `
            <p>Away lineup is not available.</p>
        `;

        return;
    }


    // Team names
    homeTitle.textContent =
        homeTeam || "Home Team";

    awayTitle.textContent =
        awayTeam || "Away Team";


    // Home lineup
    homePlayers.innerHTML = "";

    lineups.home.forEach(player => {

        homePlayers.innerHTML += `
            <div class="lineup-player">

                <strong>
                    ${player.number ?? "-"}
                </strong>

                ${player.name}

            </div>
        `;

    });


    // Away lineup
    awayPlayers.innerHTML = "";

    lineups.away.forEach(player => {

        awayPlayers.innerHTML += `
            <div class="lineup-player">

                <strong>
                    ${player.number ?? "-"}
                </strong>

                ${player.name}

            </div>
        `;

    });

}