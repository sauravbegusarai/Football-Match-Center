// =========================================
// TEAM DATA
// =========================================

const teamDetails = {

    1: {
        name: "Manchester City",
        league: "Premier League",
        country: "England",
        shortName: "MCI",

        form: ["W", "W", "D", "W", "L"],

        squad: [
            { number: 31, name: "Ederson", position: "Goalkeeper" },
            { number: 2, name: "Kyle Walker", position: "Defender" },
            { number: 3, name: "Rúben Dias", position: "Defender" },
            { number: 25, name: "Manuel Akanji", position: "Defender" },
            { number: 17, name: "Kevin De Bruyne", position: "Midfielder" },
            { number: 16, name: "Rodri", position: "Midfielder" },
            { number: 20, name: "Bernardo Silva", position: "Midfielder" },
            { number: 47, name: "Phil Foden", position: "Midfielder" },
            { number: 9, name: "Erling Haaland", position: "Forward" },
            { number: 10, name: "Jack Grealish", position: "Forward" }
        ],

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
        ],

        statistics: {
            matchesPlayed: 20,
            wins: 14,
            draws: 4,
            losses: 2,
            goalsScored: 45,
            goalsConceded: 18
        }
    },


    2: {
        name: "Arsenal",
        league: "Premier League",
        country: "England",
        shortName: "ARS",

        form: ["L", "W", "W", "D", "W"],

        squad: [
            { number: 22, name: "David Raya", position: "Goalkeeper" },
            { number: 4, name: "Ben White", position: "Defender" },
            { number: 2, name: "William Saliba", position: "Defender" },
            { number: 6, name: "Gabriel", position: "Defender" },
            { number: 8, name: "Martin Ødegaard", position: "Midfielder" },
            { number: 41, name: "Declan Rice", position: "Midfielder" },
            { number: 7, name: "Bukayo Saka", position: "Forward" },
            { number: 29, name: "Kai Havertz", position: "Forward" },
            { number: 11, name: "Gabriel Martinelli", position: "Forward" }
        ],

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
        ],

        statistics: {
            matchesPlayed: 20,
            wins: 13,
            draws: 5,
            losses: 2,
            goalsScored: 41,
            goalsConceded: 19
        }
    },

        3: {
        name: "Liverpool",
        league: "Premier League",
        country: "England",
        shortName: "LIV",

        form: ["W", "D", "W", "W", "L"],

        squad: [
            { number: 1, name: "Alisson Becker", position: "Goalkeeper" },
            { number: 4, name: "Virgil van Dijk", position: "Defender" },
            { number: 66, name: "Trent Alexander-Arnold", position: "Defender" },
            { number: 5, name: "Ibrahima Konaté", position: "Defender" },
            { number: 26, name: "Andy Robertson", position: "Defender" },
            { number: 8, name: "Dominik Szoboszlai", position: "Midfielder" },
            { number: 10, name: "Alexis Mac Allister", position: "Midfielder" },
            { number: 11, name: "Mohamed Salah", position: "Forward" },
            { number: 7, name: "Luis Díaz", position: "Forward" },
            { number: 9, name: "Darwin Núñez", position: "Forward" }
        ],

        matches: [
            {
                opponent: "Chelsea",
                competition: "Premier League",
                score: "2 - 0",
                result: "WIN"
            },
            {
                opponent: "Manchester City",
                competition: "Premier League",
                score: "1 - 2",
                result: "LOSS"
            },
            {
                opponent: "Arsenal",
                competition: "Premier League",
                score: "1 - 1",
                result: "DRAW"
            }
        ],

        statistics: {
            matchesPlayed: 20,
            wins: 12,
            draws: 5,
            losses: 3,
            goalsScored: 39,
            goalsConceded: 21
        }
    },


    4: {
        name: "Chelsea",
        league: "Premier League",
        country: "England",
        shortName: "CHE",

        form: ["W", "L", "D", "W", "W"],

        squad: [
            { number: 1, name: "Robert Sánchez", position: "Goalkeeper" },
            { number: 2, name: "Axel Disasi", position: "Defender" },
            { number: 6, name: "Levi Colwill", position: "Defender" },
            { number: 3, name: "Marc Cucurella", position: "Defender" },
            { number: 25, name: "Moisés Caicedo", position: "Midfielder" },
            { number: 8, name: "Enzo Fernández", position: "Midfielder" },
            { number: 20, name: "Cole Palmer", position: "Midfielder" },
            { number: 7, name: "Pedro Neto", position: "Forward" },
            { number: 15, name: "Nicolas Jackson", position: "Forward" },
            { number: 10, name: "Mykhailo Mudryk", position: "Forward" }
        ],

        matches: [
            {
                opponent: "Liverpool",
                competition: "Premier League",
                score: "0 - 2",
                result: "LOSS"
            },
            {
                opponent: "Arsenal",
                competition: "Premier League",
                score: "2 - 2",
                result: "DRAW"
            },
            {
                opponent: "Manchester City",
                competition: "Premier League",
                score: "1 - 3",
                result: "LOSS"
            }
        ],

        statistics: {
            matchesPlayed: 20,
            wins: 9,
            draws: 6,
            losses: 5,
            goalsScored: 31,
            goalsConceded: 27
        }
    },

        5: {
        name: "Barcelona",
        league: "La Liga",
        country: "Spain",
        shortName: "BAR",

        form: ["W", "W", "D", "W", "W"],

        squad: [
            { number: 1, name: "Marc-André ter Stegen", position: "Goalkeeper" },
            { number: 4, name: "Ronald Araújo", position: "Defender" },
            { number: 23, name: "Jules Koundé", position: "Defender" },
            { number: 3, name: "Alejandro Balde", position: "Defender" },
            { number: 8, name: "Pedri", position: "Midfielder" },
            { number: 6, name: "Gavi", position: "Midfielder" },
            { number: 21, name: "Frenkie de Jong", position: "Midfielder" },
            { number: 11, name: "Raphinha", position: "Forward" },
            { number: 9, name: "Robert Lewandowski", position: "Forward" },
            { number: 19, name: "Lamine Yamal", position: "Forward" }
        ],

        matches: [
            {
                opponent: "Real Madrid",
                competition: "La Liga",
                score: "1 - 1",
                result: "DRAW"
            },
            {
                opponent: "Atlético Madrid",
                competition: "La Liga",
                score: "3 - 1",
                result: "WIN"
            },
            {
                opponent: "Valencia",
                competition: "La Liga",
                score: "2 - 0",
                result: "WIN"
            }
        ],

        statistics: {
            matchesPlayed: 20,
            wins: 15,
            draws: 3,
            losses: 2,
            goalsScored: 48,
            goalsConceded: 17
        }
    },


    6: {
        name: "Real Madrid",
        league: "La Liga",
        country: "Spain",
        shortName: "RMA",

        form: ["W", "W", "L", "W", "D"],

        squad: [
            { number: 1, name: "Thibaut Courtois", position: "Goalkeeper" },
            { number: 2, name: "Dani Carvajal", position: "Defender" },
            { number: 22, name: "Antonio Rüdiger", position: "Defender" },
            { number: 3, name: "Éder Militão", position: "Defender" },
            { number: 5, name: "Jude Bellingham", position: "Midfielder" },
            { number: 8, name: "Federico Valverde", position: "Midfielder" },
            { number: 10, name: "Luka Modrić", position: "Midfielder" },
            { number: 7, name: "Vinícius Júnior", position: "Forward" },
            { number: 11, name: "Rodrygo", position: "Forward" },
            { number: 9, name: "Kylian Mbappé", position: "Forward" }
        ],

        matches: [
            {
                opponent: "Barcelona",
                competition: "La Liga",
                score: "1 - 1",
                result: "DRAW"
            },
            {
                opponent: "Atlético Madrid",
                competition: "La Liga",
                score: "2 - 1",
                result: "WIN"
            },
            {
                opponent: "Sevilla",
                competition: "La Liga",
                score: "3 - 0",
                result: "WIN"
            }
        ],

        statistics: {
            matchesPlayed: 20,
            wins: 14,
            draws: 4,
            losses: 2,
            goalsScored: 44,
            goalsConceded: 16
        }
    },


    7: {
        name: "Bayern Munich",
        league: "Bundesliga",
        country: "Germany",
        shortName: "BAY",

        form: ["W", "W", "W", "D", "L"],

        squad: [
            { number: 1, name: "Manuel Neuer", position: "Goalkeeper" },
            { number: 4, name: "Matthijs de Ligt", position: "Defender" },
            { number: 2, name: "Dayot Upamecano", position: "Defender" },
            { number: 19, name: "Alphonso Davies", position: "Defender" },
            { number: 6, name: "Joshua Kimmich", position: "Midfielder" },
            { number: 8, name: "Leon Goretzka", position: "Midfielder" },
            { number: 42, name: "Jamal Musiala", position: "Midfielder" },
            { number: 10, name: "Leroy Sané", position: "Forward" },
            { number: 7, name: "Serge Gnabry", position: "Forward" },
            { number: 9, name: "Harry Kane", position: "Forward" }
        ],

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
            },
            {
                opponent: "Bayer Leverkusen",
                competition: "Bundesliga",
                score: "1 - 2",
                result: "LOSS"
            }
        ],

        statistics: {
            matchesPlayed: 20,
            wins: 13,
            draws: 4,
            losses: 3,
            goalsScored: 46,
            goalsConceded: 22
        }
    },


    8: {
        name: "Borussia Dortmund",
        league: "Bundesliga",
        country: "Germany",
        shortName: "BVB",

        form: ["W", "L", "W", "D", "W"],

        squad: [
            { number: 1, name: "Gregor Kobel", position: "Goalkeeper" },
            { number: 15, name: "Mats Hummels", position: "Defender" },
            { number: 25, name: "Niklas Süle", position: "Defender" },
            { number: 26, name: "Julian Ryerson", position: "Defender" },
            { number: 23, name: "Emre Can", position: "Midfielder" },
            { number: 8, name: "Felix Nmecha", position: "Midfielder" },
            { number: 10, name: "Julian Brandt", position: "Midfielder" },
            { number: 21, name: "Donyell Malen", position: "Forward" },
            { number: 14, name: "Niclas Füllkrug", position: "Forward" },
            { number: 27, name: "Karim Adeyemi", position: "Forward" }
        ],

        matches: [
            {
                opponent: "Bayern Munich",
                competition: "Bundesliga",
                score: "1 - 3",
                result: "LOSS"
            },
            {
                opponent: "RB Leipzig",
                competition: "Bundesliga",
                score: "2 - 1",
                result: "WIN"
            },
            {
                opponent: "Mainz",
                competition: "Bundesliga",
                score: "1 - 1",
                result: "DRAW"
            }
        ],

        statistics: {
            matchesPlayed: 20,
            wins: 11,
            draws: 5,
            losses: 4,
            goalsScored: 37,
            goalsConceded: 24
        }
    }

};


// =========================================
// GET TEAM ID FROM URL
// =========================================

const urlParams =
    new URLSearchParams(window.location.search);

const teamId =
    Number(urlParams.get("id"));

const team =
    teamDetails[teamId];


// =========================================
// TEAM NOT FOUND
// =========================================

if (!team) {

    document.querySelector(".team-details-section").innerHTML = `

        <div class="container">

            <div class="team-details-card">

                <div>

                    <h2>
                        Team Not Found
                    </h2>

                    <p>
                        The requested team does not exist.
                    </p>

                    <br>

                    <a href="teams.html">
                        ← Back to Teams
                    </a>

                </div>

            </div>

        </div>

    `;

} else {

    renderTeamDetails(team);

}


// =========================================
// RENDER TEAM DETAILS
// =========================================

function renderTeamDetails(team) {

    document.getElementById("teamLogo")
        .textContent = team.shortName;

    document.getElementById("teamName")
        .textContent = team.name;

    document.getElementById("teamLeague")
        .textContent = team.league;

    document.getElementById("teamCountry")
        .textContent = team.country;


    // Overview information

    document.getElementById("infoTeamName")
        .textContent = team.name;

    document.getElementById("infoLeague")
        .textContent = team.league;

    document.getElementById("infoCountry")
        .textContent = team.country;

    document.getElementById("infoShortName")
        .textContent = team.shortName;


    renderForm(team.form);

    renderSquad(team.squad);

    renderMatches(team.matches);

    renderStatistics(team.statistics);

}


// =========================================
// RENDER FORM
// =========================================

function renderForm(form) {

    const teamForm =
        document.getElementById("teamForm");

    teamForm.innerHTML = "";

    form.forEach(result => {

        teamForm.innerHTML += `

            <span>
                ${result}
            </span>

        `;

    });

}


// =========================================
// RENDER SQUAD
// =========================================

function renderSquad(squad) {

    const squadGrid =
        document.getElementById("squadGrid");

    squadGrid.innerHTML = "";

    squad.forEach(player => {

        squadGrid.innerHTML += `

            <div class="squad-player">

                <div class="squad-number">
                    ${player.number}
                </div>

                <div class="squad-player-info">

                    <h4>
                        ${player.name}
                    </h4>

                    <p>
                        ${player.position}
                    </p>

                </div>

            </div>

        `;

    });

}


// =========================================
// RENDER MATCHES
// =========================================

function renderMatches(matches) {

    const teamMatches =
        document.getElementById("teamMatches");

    teamMatches.innerHTML = "";

    matches.forEach(match => {

        teamMatches.innerHTML += `

            <div class="team-match">

                <div class="team-match-info">

                    <strong>
                        vs ${match.opponent}
                    </strong>

                    <span>
                        ${match.competition}
                    </span>

                </div>

                <div class="team-match-score">

                    ${match.score}

                </div>

                <strong>
                    ${match.result}
                </strong>

            </div>

        `;

    });

}


// =========================================
// RENDER STATISTICS
// =========================================

function renderStatistics(statistics) {

    const statisticsContainer =
        document.getElementById("teamStatistics");

    statisticsContainer.innerHTML = `

        <div>
            <span>Matches Played</span>
            <strong>${statistics.matchesPlayed}</strong>
        </div>

        <div>
            <span>Wins</span>
            <strong>${statistics.wins}</strong>
        </div>

        <div>
            <span>Draws</span>
            <strong>${statistics.draws}</strong>
        </div>

        <div>
            <span>Losses</span>
            <strong>${statistics.losses}</strong>
        </div>

        <div>
            <span>Goals Scored</span>
            <strong>${statistics.goalsScored}</strong>
        </div>

        <div>
            <span>Goals Conceded</span>
            <strong>${statistics.goalsConceded}</strong>
        </div>

    `;

}


// =========================================
// TEAM TABS
// =========================================

const teamTabs =
    document.querySelectorAll(".team-tab");

const teamTabContents =
    document.querySelectorAll(".team-tab-content");


teamTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        teamTabs.forEach(item => {
            item.classList.remove("active");
        });

        teamTabContents.forEach(content => {
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