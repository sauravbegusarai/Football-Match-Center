// =========================================
// TEAMS DATA
// =========================================

const teams = [
    {
        id: 1,
        name: "Manchester City",
        league: "Premier League",
        country: "England",
        shortName: "MCI"
    },

    {
        id: 2,
        name: "Arsenal",
        league: "Premier League",
        country: "England",
        shortName: "ARS"
    },

    {
        id: 3,
        name: "Liverpool",
        league: "Premier League",
        country: "England",
        shortName: "LIV"
    },

    {
        id: 4,
        name: "Chelsea",
        league: "Premier League",
        country: "England",
        shortName: "CHE"
    },

    {
        id: 5,
        name: "Barcelona",
        league: "La Liga",
        country: "Spain",
        shortName: "BAR"
    },

    {
        id: 6,
        name: "Real Madrid",
        league: "La Liga",
        country: "Spain",
        shortName: "RMA"
    },

    {
        id: 7,
        name: "Bayern Munich",
        league: "Bundesliga",
        country: "Germany",
        shortName: "BAY"
    },

    {
        id: 8,
        name: "Borussia Dortmund",
        league: "Bundesliga",
        country: "Germany",
        shortName: "BVB"
    }
];


// =========================================
// RENDER TEAMS
// =========================================

function renderTeams() {

    const teamsGrid =
        document.getElementById("teamsGrid");

    if (!teamsGrid) return;

    teamsGrid.innerHTML = "";

    teams.forEach(team => {

        teamsGrid.innerHTML += `

            <article
    class="team-card team-card-clickable"
    data-team-id="${team.id}"
>

                <div class="team-logo">
                    ${team.shortName}
                </div>

                <div class="team-info">

                    <h3>
                        ${team.name}
                    </h3>

                    <p>
                        ${team.league}
                    </p>

                    <span>
                        ${team.country}
                    </span>

                </div>

            </article>

        `;

    });

}


// =========================================
// INITIALIZE TEAMS PAGE
// =========================================

renderTeams();

// =========================================
// TEAM CARD CLICK
// =========================================

function setupTeamCardEvents() {

    const teamCards =
        document.querySelectorAll(".team-card-clickable");

    teamCards.forEach(card => {

        card.addEventListener("click", () => {

            const teamId =
                card.dataset.teamId;

            window.location.href =
                `team-details.html?id=${teamId}`;

        });

    });

}

setupTeamCardEvents();