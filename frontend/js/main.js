// ==================================================
// FOOTBALL MATCH CENTER
// Main JavaScript
// ==================================================


// ==================================================
// MOCK DATA
// ==================================================

const searchButton =
    document.getElementById("searchButton");

const searchBox =
    document.getElementById("searchBox");


if (searchButton && searchBox) {

    searchButton.addEventListener("click", () => {

        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {

            document
                .getElementById("searchInput")
                .focus();

        }

    });

}  

function setupMatchCardEvents() {

    const cards =
        document.querySelectorAll(".match-card-clickable");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const matchId =
                card.dataset.matchId;

            window.location.href =
                `pages/match-details.html?id=${matchId}`;

        });

    });

}

function getTeamLogo(path, fallback = "⚽") {

    if (!path) {
        return fallback;
    }

    return `
        <img
            src="${path}"
            alt="Team logo"
            class="team-logo-image"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >

        <span
            class="team-logo-fallback"
            style="display:none;"
        >
            ${fallback}
        </span>
    `;
}

const liveMatches = [

    {
        id: 1,
        competition: "Premier League",
        status: "LIVE",
        minute: 67,

        homeTeam: "Manchester City",
        awayTeam: "Arsenal",

        homeLogo: "assets/images/manchester-city.png",
        awayLogo: "assets/images/arsenal.png",

        homeScore: 2,
        awayScore: 1,

        venue: "Etihad Stadium"
    },

    {
        id: 2,
        competition: "La Liga",
        status: "LIVE",
        minute: 54,

        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",

        homeLogo: "assets/images/barcelona.png",
        awayLogo: "assets/images/real-madrid.png",

        homeScore: 1,
        awayScore: 1,

        venue: "Camp Nou"
    }

];


const upcomingMatches = [

    {
        competition: "Premier League",

        homeTeam: "Liverpool",
        awayTeam: "Chelsea",

        homeLogo: "🔴",
        awayLogo: "🔵",

        time: "18:30",

        date: "Tomorrow",

        venue: "Anfield"
    },

    {
        competition: "Bundesliga",

        homeTeam: "Bayern Munich",
        awayTeam: "Borussia Dortmund",

        homeLogo: "🔴",
        awayLogo: "🟡",

        time: "20:00",

        date: "Tomorrow",

        venue: "Allianz Arena"
    }

];


const recentResults = [

    {
        competition: "Premier League",

        homeTeam: "Manchester United",
        awayTeam: "Liverpool",

        homeLogo: "🔴",
        awayLogo: "🔴",

        homeScore: 1,
        awayScore: 3,

        status: "FT",

        venue: "Old Trafford"
    },

    {
        competition: "La Liga",

        homeTeam: "Real Madrid",
        awayTeam: "Barcelona",

        homeLogo: "⚪",
        awayLogo: "🔵",

        homeScore: 2,
        awayScore: 2,

        status: "FT",

        venue: "Santiago Bernabéu"
    }

];


const standings = [

    {
        position: 1,
        team: "Manchester City",
        played: 10,
        wins: 8,
        draws: 1,
        losses: 1,
        goalDifference: "+18",
        points: 25
    },

    {
        position: 2,
        team: "Arsenal",
        played: 10,
        wins: 7,
        draws: 2,
        losses: 1,
        goalDifference: "+14",
        points: 23
    },

    {
        position: 3,
        team: "Liverpool",
        played: 10,
        wins: 7,
        draws: 1,
        losses: 2,
        goalDifference: "+12",
        points: 22
    },

    {
        position: 4,
        team: "Chelsea",
        played: 10,
        wins: 6,
        draws: 2,
        losses: 2,
        goalDifference: "+9",
        points: 20
    }

];


const topPlayers = [

    {
        name: "Erling Haaland",
        position: "Forward",
        photo: "⚽",
        goals: 12,
        assists: 4
    },

    {
        name: "Mohamed Salah",
        position: "Forward",
        photo: "⚽",
        goals: 10,
        assists: 6
    },

    {
        name: "Bukayo Saka",
        position: "Forward",
        photo: "⚽",
        goals: 8,
        assists: 7
    },

    {
        name: "Kevin De Bruyne",
        position: "Midfielder",
        photo: "⚽",
        goals: 5,
        assists: 9
    }

];


// ==================================================
// MATCH CARD
// ==================================================

function createMatchCard(match, type) {

    if (type === "live") {

        return `

            <article
    class="match-card ${type === "live" ? "match-card-clickable" : ""}"
    data-match-id="${type === "live" ? match.id : ""}"
>

                <div class="match-header">

                    <span class="competition">
                        ${match.competition}
                    </span>

                    <span class="live-badge">
                        LIVE ${match.minute}'
                    </span>

                </div>


                <div class="match-teams">

                    <div class="team">

                        <div class="team-logo">
    ${getTeamLogo(match.homeLogo, "⚽")}
</div>

                        <span class="team-name">
                            ${match.homeTeam}
                        </span>

                    </div>


                    <div>

                        <div class="score">
                            ${match.homeScore} - ${match.awayScore}
                        </div>

                        <div class="match-time">
                            ${match.minute}'
                        </div>

                    </div>


                    <div class="team">

                       <div class="team-logo">
    ${getTeamLogo(match.awayLogo, "⚽")}
</div>

                        <span class="team-name">
                            ${match.awayTeam}
                        </span>

                    </div>

                </div>


                <div class="match-footer">
                    ${match.venue}
                </div>

            </article>

        `;
    }


    if (type === "upcoming") {

        return `

           <article
    class="match-card ${type === "live" ? "match-card-clickable" : ""}"
    data-match-id="${type === "live" ? match.id : ""}"
>
                <div class="match-header">

                    <span class="competition">
                        ${match.competition}
                    </span>

                    <span class="competition">
                        ${match.date}
                    </span>

                </div>


                <div class="match-teams">

                    <div class="team">

                        <div class="team-logo">
    ${getTeamLogo(match.homeLogo, "⚽")}
</div>

                        <span class="team-name">
                            ${match.homeTeam}
                        </span>

                    </div>


                    <div>

                        <div class="score">
                            VS
                        </div>

                        <div class="match-time">
                            ${match.time}
                        </div>

                    </div>


                    <div class="team">

                        <div class="team-logo">
    ${getTeamLogo(match.awayLogo, "⚽")}
</div>

                        <span class="team-name">
                            ${match.awayTeam}
                        </span>

                    </div>

                </div>


                <div class="match-footer">
                    ${match.venue}
                </div>

            </article>

        `;
    }


    if (type === "result") {

        return `

            <article
    class="match-card ${type === "live" ? "match-card-clickable" : ""}"
    data-match-id="${type === "live" ? match.id : ""}"
>

                <div class="match-header">

                    <span class="competition">
                        ${match.competition}
                    </span>

                    <span class="competition">
                        ${match.status}
                    </span>

                </div>


                <div class="match-teams">

                    <div class="team">

                        <div class="team-logo">
    ${getTeamLogo(match.homeLogo, "⚽")}
</div>
                        <span class="team-name">
                            ${match.homeTeam}
                        </span>

                    </div>


                    <div>

                        <div class="score">
                            ${match.homeScore} - ${match.awayScore}
                        </div>

                    </div>


                    <div class="team">

                       <div class="team-logo">
    ${getTeamLogo(match.awayLogo, "⚽")}
</div>

                        <span class="team-name">
                            ${match.awayTeam}
                        </span>

                    </div>

                </div>


                <div class="match-footer">
                    ${match.venue}
                </div>

            </article>

        `;
    }

}


// ==================================================
// RENDER LIVE MATCHES
// ==================================================

function renderLiveMatches() {

    const container =
        document.getElementById("liveMatches");

    container.innerHTML =
        liveMatches
            .map(match =>
                createMatchCard(match, "live")
            )
            .join("");

}


// ==================================================
// RENDER UPCOMING MATCHES
// ==================================================

function renderUpcomingMatches() {

    const container =
        document.getElementById("upcomingMatches");

    container.innerHTML =
        upcomingMatches
            .map(match =>
                createMatchCard(match, "upcoming")
            )
            .join("");

}


// ==================================================
// RENDER RECENT RESULTS
// ==================================================

function renderRecentResults() {

    const container =
        document.getElementById("recentResults");

    container.innerHTML =
        recentResults
            .map(match =>
                createMatchCard(match, "result")
            )
            .join("");

}


// ==================================================
// RENDER STANDINGS
// ==================================================

function renderStandings() {

    const container =
        document.getElementById("standingsTable");


    container.innerHTML =
        standings.map(team => {

            return `

                <tr>

                    <td>
                        ${team.position}
                    </td>

                    <td>
                        ${team.team}
                    </td>

                    <td>
                        ${team.played}
                    </td>

                    <td>
                        ${team.wins}
                    </td>

                    <td>
                        ${team.draws}
                    </td>

                    <td>
                        ${team.losses}
                    </td>

                    <td>
                        ${team.goalDifference}
                    </td>

                    <td>
                        <strong>
                            ${team.points}
                        </strong>
                    </td>

                </tr>

            `;

        }).join("");

}


// ==================================================
// RENDER TOP PLAYERS
// ==================================================

function renderTopPlayers() {

    const container =
        document.getElementById("topPlayers");


    container.innerHTML =
        topPlayers.map(player => {

            return `

                <article class="player-card">

                    <div class="player-photo">
                        ${player.photo}
                    </div>

                    <div class="player-name">
                        ${player.name}
                    </div>

                    <div class="player-position">
                        ${player.position}
                    </div>


                    <div class="player-stats">

                        <div class="player-stat">

                            <strong>
                                ${player.goals}
                            </strong>

                            <span>
                                Goals
                            </span>

                        </div>


                        <div class="player-stat">

                            <strong>
                                ${player.assists}
                            </strong>

                            <span>
                                Assists
                            </span>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


// ==================================================
// MOBILE MENU
// ==================================================

const menuButton =
    document.getElementById("menuButton");


if (menuButton) {

    menuButton.addEventListener(
        "click",
        () => {

            alert(
                "Mobile navigation will be implemented in the next UI phase."
            );

        }
    );

}


// ==================================================
// INITIALIZE APPLICATION
// ==================================================

function initializeApp() {

    renderLiveMatches();

    renderUpcomingMatches();

    renderRecentResults();

    renderStandings();

    renderTopPlayers();

    setupMatchCardEvents();
}

initializeApp();


// =========================================
// LOAD LIVE MATCHES FROM BACKEND
// =========================================

async function loadLiveMatchesFromBackend() {

    try {

        const response =
            await fetch("http://localhost:5000/api/matches");

        const result =
            await response.json();

        if (!result.success) {
            return;
        }

        const liveMatches =
            document.getElementById("liveMatches");

        if (!liveMatches) {
            return;
        }

        liveMatches.innerHTML = "";

        result.data.forEach(match => {

            liveMatches.innerHTML += `

                <article class="match-card">

                    <div class="match-card-header">

                        <span>
                            ${match.competition}
                        </span>

                        <span>
                            ${match.status}
                        </span>

                    </div>

                    <div class="match-card-teams">

                        <div>
                            ${match.homeTeam}
                        </div>

                        <strong>
                            ${match.homeScore}
                            -
                            ${match.awayScore}
                        </strong>

                        <div>
                            ${match.awayTeam}
                        </div>

                    </div>

                </article>

            `;

        });

    } catch (error) {

        console.error(
            "Failed to load matches:",
            error
        );

    }

}

loadLiveMatchesFromBackend();