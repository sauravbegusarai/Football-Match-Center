// =========================================
// MATCH DATA
// =========================================



const matches = [
    {
        id: 1,
        competition: "Premier League",
        status: "LIVE",
        minute: 67,

        homeTeam: "Manchester City",
        awayTeam: "Arsenal",

        homeScore: 2,
        awayScore: 1,

        venue: "Etihad Stadium",

        events: [
            {
                minute: "67'",
                icon: "⚽",
                type: "Goal",
                player: "Erling Haaland"
            },
            {
                minute: "54'",
                icon: "🟨",
                type: "Yellow Card",
                player: "Declan Rice"
            },
            {
                minute: "45'",
                icon: "⏱️",
                type: "Half Time",
                player: "Manchester City 2 - 1 Arsenal"
            },
            {
                minute: "23'",
                icon: "⚽",
                type: "Goal",
                player: "Bukayo Saka"
            }
        ],

        statistics: {
            possession: "58% - 42%",
            shots: "12 - 8",
            shotsOnTarget: "6 - 4",
            corners: "7 - 3",
            fouls: "8 - 11"
        },

        lineups: {
    home: [
        { number: 31, name: "Ederson" },
        { number: 2, name: "Kyle Walker" },
        { number: 3, name: "Rúben Dias" },
        { number: 25, name: "Manuel Akanji" },
        { number: 5, name: "John Stones" },
        { number: 17, name: "Kevin De Bruyne" },
        { number: 16, name: "Rodri" },
        { number: 20, name: "Bernardo Silva" },
        { number: 47, name: "Phil Foden" },
        { number: 9, name: "Erling Haaland" },
        { number: 10, name: "Jack Grealish" }
    ],

    away: [
        { number: 22, name: "David Raya" },
        { number: 4, name: "Ben White" },
        { number: 2, name: "William Saliba" },
        { number: 6, name: "Gabriel Magalhães" },
        { number: 35, name: "Oleksandr Zinchenko" },
        { number: 8, name: "Martin Ødegaard" },
        { number: 41, name: "Declan Rice" },
        { number: 7, name: "Bukayo Saka" },
        { number: 29, name: "Kai Havertz" },
        { number: 11, name: "Gabriel Martinelli" },
        { number: 9, name: "Gabriel Jesus" }
    ]
}
    },

    {
        id: 2,
        competition: "La Liga",
        status: "LIVE",
        minute: 54,

        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",

        homeScore: 1,
        awayScore: 1,

        venue: "Camp Nou",

        events: [
            {
                minute: "54'",
                icon: "⚽",
                type: "Goal",
                player: "Robert Lewandowski"
            },
            {
                minute: "41'",
                icon: "🟨",
                type: "Yellow Card",
                player: "Jude Bellingham"
            },
            {
                minute: "28'",
                icon: "⚽",
                type: "Goal",
                player: "Vinicius Junior"
            }
        ],

        statistics: {
            possession: "51% - 49%",
            shots: "9 - 10",
            shotsOnTarget: "4 - 5",
            corners: "4 - 5",
            fouls: "10 - 9"
        }
    }
];


// =========================================
// GET MATCH ID FROM URL
// =========================================

const urlParams = new URLSearchParams(window.location.search);

const matchId = Number(urlParams.get("id"));


// =========================================
// FIND MATCH
// =========================================

const match = matches.find(item => item.id === matchId);


// =========================================
// CHECK MATCH
// =========================================

if (!match) {

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

} else {

    renderMatchDetails(match);

}


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


    // Statistics
    renderStatistics(match.statistics);
    renderLineups(match.lineups);
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
                        ${event.minute}
                    </div>

                    <div class="event-icon">
                        ${event.icon}
                    </div>

                    <div class="event-description">

                        <strong>
                            ${event.type}
                        </strong>

                        <p>
                            ${event.player}
                        </p>

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

    statisticsList.innerHTML = `
        <div>
            <span>Possession</span>
            <strong>${statistics.possession}</strong>
        </div>

        <div>
            <span>Shots</span>
            <strong>${statistics.shots}</strong>
        </div>

        <div>
            <span>Shots on Target</span>
            <strong>${statistics.shotsOnTarget}</strong>
        </div>

        <div>
            <span>Corners</span>
            <strong>${statistics.corners}</strong>
        </div>

        <div>
            <span>Fouls</span>
            <strong>${statistics.fouls}</strong>
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

function renderLineups(lineups) {

    const homePlayers =
        document.getElementById("homePlayers");

    const awayPlayers =
        document.getElementById("awayPlayers");

    const homeTitle =
        document.getElementById("homeLineupTitle");

    const awayTitle =
        document.getElementById("awayLineupTitle");


    if (!homePlayers || !awayPlayers) return;


    // Team names
    homeTitle.textContent = match.homeTeam;
    awayTitle.textContent = match.awayTeam;


    // Home players
    homePlayers.innerHTML = "";

    lineups.home.forEach(player => {

        homePlayers.innerHTML += `
            <div class="lineup-player">
                <strong>${player.number}</strong>
                ${player.name}
            </div>
        `;

    });


    // Away players
    awayPlayers.innerHTML = "";

    lineups.away.forEach(player => {

        awayPlayers.innerHTML += `
            <div class="lineup-player">
                <strong>${player.number}</strong>
                ${player.name}
            </div>
        `;

    });

}