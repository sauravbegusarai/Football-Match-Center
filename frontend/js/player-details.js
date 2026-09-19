// =========================================
// PLAYER DETAILS DATA
// =========================================

const playerDetails = {

    1: {
        name: "Erling Haaland",
        team: "Manchester City",
        position: "Forward",
        number: 9,
        country: "Norway",

        statistics: {
            matches: 20,
            goals: 18,
            assists: 5,
            shots: 62,
            shotsOnTarget: 38
        },

        matches: [
            {
                opponent: "Arsenal",
                competition: "Premier League",
                score: "2 - 1",
                result: "WIN"
            },
            {
                opponent: "Liverpool",
                competition: "Premier League",
                score: "1 - 1",
                result: "DRAW"
            },
            {
                opponent: "Chelsea",
                competition: "Premier League",
                score: "3 - 0",
                result: "WIN"
            }
        ]
    },


    2: {
        name: "Kevin De Bruyne",
        team: "Manchester City",
        position: "Midfielder",
        number: 17,
        country: "Belgium",

        statistics: {
            matches: 18,
            goals: 6,
            assists: 11,
            shots: 35,
            shotsOnTarget: 19
        },

        matches: [
            {
                opponent: "Arsenal",
                competition: "Premier League",
                score: "2 - 1",
                result: "WIN"
            },
            {
                opponent: "Liverpool",
                competition: "Premier League",
                score: "1 - 1",
                result: "DRAW"
            }
        ]
    },


    3: {
        name: "Bukayo Saka",
        team: "Arsenal",
        position: "Forward",
        number: 7,
        country: "England",

        statistics: {
            matches: 20,
            goals: 12,
            assists: 8,
            shots: 48,
            shotsOnTarget: 27
        },

        matches: [
            {
                opponent: "Manchester City",
                competition: "Premier League",
                score: "1 - 2",
                result: "LOSS"
            },
            {
                opponent: "Chelsea",
                competition: "Premier League",
                score: "2 - 0",
                result: "WIN"
            }
        ]
    },


    4: {
        name: "Mohamed Salah",
        team: "Liverpool",
        position: "Forward",
        number: 11,
        country: "Egypt",

        statistics: {
            matches: 20,
            goals: 15,
            assists: 7,
            shots: 55,
            shotsOnTarget: 31
        },

        matches: [
            {
                opponent: "Chelsea",
                competition: "Premier League",
                score: "2 - 1",
                result: "WIN"
            },
            {
                opponent: "Manchester City",
                competition: "Premier League",
                score: "1 - 1",
                result: "DRAW"
            }
        ]
    },


    5: {
        name: "Cole Palmer",
        team: "Chelsea",
        position: "Midfielder",
        number: 20,
        country: "England",

        statistics: {
            matches: 19,
            goals: 10,
            assists: 9,
            shots: 42,
            shotsOnTarget: 24
        },

        matches: [
            {
                opponent: "Liverpool",
                competition: "Premier League",
                score: "1 - 2",
                result: "LOSS"
            },
            {
                opponent: "Arsenal",
                competition: "Premier League",
                score: "2 - 0",
                result: "WIN"
            }
        ]
    },


    6: {
        name: "Lamine Yamal",
        team: "Barcelona",
        position: "Forward",
        number: 19,
        country: "Spain",

        statistics: {
            matches: 20,
            goals: 9,
            assists: 10,
            shots: 44,
            shotsOnTarget: 25
        },

        matches: [
            {
                opponent: "Real Madrid",
                competition: "La Liga",
                score: "2 - 1",
                result: "WIN"
            },
            {
                opponent: "Valencia",
                competition: "La Liga",
                score: "3 - 0",
                result: "WIN"
            }
        ]
    },


    7: {
        name: "Jude Bellingham",
        team: "Real Madrid",
        position: "Midfielder",
        number: 5,
        country: "England",

        statistics: {
            matches: 20,
            goals: 11,
            assists: 6,
            shots: 39,
            shotsOnTarget: 22
        },

        matches: [
            {
                opponent: "Barcelona",
                competition: "La Liga",
                score: "1 - 2",
                result: "LOSS"
            },
            {
                opponent: "Sevilla",
                competition: "La Liga",
                score: "2 - 0",
                result: "WIN"
            }
        ]
    },


    8: {
        name: "Harry Kane",
        team: "Bayern Munich",
        position: "Forward",
        number: 9,
        country: "England",

        statistics: {
            matches: 20,
            goals: 17,
            assists: 6,
            shots: 58,
            shotsOnTarget: 34
        },

        matches: [
            {
                opponent: "Borussia Dortmund",
                competition: "Bundesliga",
                score: "3 - 1",
                result: "WIN"
            },
            {
                opponent: "RB Leipzig",
                competition: "Bundesliga",
                score: "2 - 2",
                result: "DRAW"
            }
        ]
    }

};


// =========================================
// GET PLAYER ID FROM URL
// =========================================

const urlParams = new URLSearchParams(window.location.search);

const playerId = Number(urlParams.get("id"));

const player = playerDetails[playerId];


// =========================================
// PLAYER NOT FOUND
// =========================================

if (!player) {

    document.querySelector(".player-details-section").innerHTML = `

        <div class="container">

            <div class="player-details-card">

                <div>

                    <h2>
                        Player Not Found
                    </h2>

                    <p>
                        The requested player does not exist.
                    </p>

                    <br>

                    <a href="players.html">
                        ← Back to Players
                    </a>

                </div>

            </div>

        </div>

    `;

} else {

    renderPlayerDetails(player);

}


// =========================================
// RENDER PLAYER DETAILS
// =========================================

function renderPlayerDetails(player) {

    document.getElementById("playerAvatar").textContent =
        player.number;

    document.getElementById("playerPosition").textContent =
        player.position;

    document.getElementById("playerName").textContent =
        player.name;

    document.getElementById("playerTeam").textContent =
        player.team;

    document.getElementById("playerCountry").textContent =
        player.country;


    renderPlayerInfo(player);

    renderOverviewStats(player.statistics);

    renderPlayerMatches(player.matches);

    renderPlayerStatistics(player.statistics);

}


// =========================================
// PLAYER INFORMATION
// =========================================

function renderPlayerInfo(player) {

    const playerInfo =
        document.getElementById("playerInfo");

    playerInfo.innerHTML = `

        <div>
            <span>Full Name</span>
            <strong>${player.name}</strong>
        </div>

        <div>
            <span>Team</span>
            <strong>${player.team}</strong>
        </div>

        <div>
            <span>Position</span>
            <strong>${player.position}</strong>
        </div>

        <div>
            <span>Squad Number</span>
            <strong>#${player.number}</strong>
        </div>

        <div>
            <span>Country</span>
            <strong>${player.country}</strong>
        </div>

    `;
}


// =========================================
// OVERVIEW STATISTICS
// =========================================

function renderOverviewStats(statistics) {

    const statsContainer =
        document.getElementById("playerOverviewStats");

    statsContainer.innerHTML = `

        <div class="player-stat-card">
            <strong>${statistics.matches}</strong>
            <span>Matches</span>
        </div>

        <div class="player-stat-card">
            <strong>${statistics.goals}</strong>
            <span>Goals</span>
        </div>

        <div class="player-stat-card">
            <strong>${statistics.assists}</strong>
            <span>Assists</span>
        </div>

        <div class="player-stat-card">
            <strong>${statistics.shots}</strong>
            <span>Shots</span>
        </div>

    `;
}


// =========================================
// PLAYER MATCHES
// =========================================

function renderPlayerMatches(matches) {

    const matchesContainer =
        document.getElementById("playerMatches");

    matchesContainer.innerHTML = "";

    matches.forEach(match => {

        matchesContainer.innerHTML += `

            <div class="player-match">

                <div class="player-match-info">

                    <strong>
                        ${player.team}
                    </strong>

                    <span>
                        vs ${match.opponent}
                    </span>

                    <small>
                        ${match.competition}
                    </small>

                </div>

                <div class="player-match-score">

                    <strong>
                        ${match.score}
                    </strong>

                    <span>
                        ${match.result}
                    </span>

                </div>

            </div>

        `;

    });

}


// =========================================
// PLAYER STATISTICS
// =========================================

function renderPlayerStatistics(statistics) {

    const statisticsContainer =
        document.getElementById("playerStatistics");

    statisticsContainer.innerHTML = `

        <div>
            <span>Matches Played</span>
            <strong>${statistics.matches}</strong>
        </div>

        <div>
            <span>Goals</span>
            <strong>${statistics.goals}</strong>
        </div>

        <div>
            <span>Assists</span>
            <strong>${statistics.assists}</strong>
        </div>

        <div>
            <span>Total Shots</span>
            <strong>${statistics.shots}</strong>
        </div>

        <div>
            <span>Shots on Target</span>
            <strong>${statistics.shotsOnTarget}</strong>
        </div>

    `;
}


// =========================================
// PLAYER TABS
// =========================================

const playerTabs =
    document.querySelectorAll(".player-tab");

const playerTabContents =
    document.querySelectorAll(".player-tab-content");


playerTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        playerTabs.forEach(item => {
            item.classList.remove("active");
        });

        playerTabContents.forEach(content => {
            content.classList.remove("active");
        });


        tab.classList.add("active");


        const tabName =
            tab.dataset.tab;

        const selectedContent =
            document.getElementById(
                `${tabName}Tab`
            );

        if (selectedContent) {
            selectedContent.classList.add("active");
        }

    });

});