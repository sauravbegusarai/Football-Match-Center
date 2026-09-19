// =========================================
// PLAYERS DATA
// =========================================

const players = [

    {
        id: 1,
        name: "Erling Haaland",
        team: "Manchester City",
        position: "Forward",
        number: 9,
        country: "Norway"
    },

    {
        id: 2,
        name: "Kevin De Bruyne",
        team: "Manchester City",
        position: "Midfielder",
        number: 17,
        country: "Belgium"
    },

    {
        id: 3,
        name: "Bukayo Saka",
        team: "Arsenal",
        position: "Forward",
        number: 7,
        country: "England"
    },

    {
        id: 4,
        name: "Mohamed Salah",
        team: "Liverpool",
        position: "Forward",
        number: 11,
        country: "Egypt"
    },

    {
        id: 5,
        name: "Cole Palmer",
        team: "Chelsea",
        position: "Midfielder",
        number: 20,
        country: "England"
    },

    {
        id: 6,
        name: "Lamine Yamal",
        team: "Barcelona",
        position: "Forward",
        number: 19,
        country: "Spain"
    },

    {
        id: 7,
        name: "Jude Bellingham",
        team: "Real Madrid",
        position: "Midfielder",
        number: 5,
        country: "England"
    },

    {
        id: 8,
        name: "Harry Kane",
        team: "Bayern Munich",
        position: "Forward",
        number: 9,
        country: "England"
    }

];


// =========================================
// RENDER PLAYERS
// =========================================

function renderPlayers(playerList) {

    const playersGrid =
        document.getElementById("playersGrid");

    if (!playersGrid) return;

    playersGrid.innerHTML = "";

    playerList.forEach(player => {

        playersGrid.innerHTML += `

            <article
                class="player-card"
                data-player-id="${player.id}"
            >

                <div class="player-avatar">
                    ${player.number}
                </div>

                <div class="player-info">

                    <h3>
                        ${player.name}
                    </h3>

                    <p>
                        ${player.team}
                    </p>

                    <span>
                        ${player.position}
                    </span>

                </div>

            </article>

        `;

    });

    setupPlayerCardEvents();
}

// =========================================
// PLAYER CARD CLICK EVENTS
// =========================================

function setupPlayerCardEvents() {

    const playerCards =
        document.querySelectorAll(".player-card");

    playerCards.forEach(card => {

        card.addEventListener("click", () => {

            const playerId =
                card.dataset.playerId;

            window.location.href =
                `player-details.html?id=${playerId}`;

        });

    });

}

// =========================================
// INITIAL RENDER
// =========================================

renderPlayers(players);

// =========================================
// PLAYER FILTERING
// =========================================

const teamFilter = document.getElementById("teamFilter");
const positionFilter = document.getElementById("positionFilter");

function filterPlayers() {

    const selectedTeam = teamFilter.value;
    const selectedPosition = positionFilter.value;

    const filteredPlayers = players.filter(player => {

        const teamMatch =
            selectedTeam === "all" ||
            player.team === selectedTeam;

        const positionMatch =
            selectedPosition === "all" ||
            player.position === selectedPosition;

        return teamMatch && positionMatch;

    });

    renderPlayers(filteredPlayers);
}


// Team filter change
if (teamFilter) {
    teamFilter.addEventListener("change", filterPlayers);
}


// Position filter change
if (positionFilter) {
    positionFilter.addEventListener("change", filterPlayers);
}