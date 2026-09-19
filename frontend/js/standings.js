// =========================================
// STANDINGS DATA
// =========================================

const standingsData = {

    "Premier League": [

        {
            team: "Manchester City",
            played: 20,
            wins: 14,
            draws: 4,
            losses: 2,
            goalsFor: 45,
            goalsAgainst: 18
        },

        {
            team: "Arsenal",
            played: 20,
            wins: 13,
            draws: 5,
            losses: 2,
            goalsFor: 41,
            goalsAgainst: 19
        },

        {
            team: "Liverpool",
            played: 20,
            wins: 12,
            draws: 5,
            losses: 3,
            goalsFor: 39,
            goalsAgainst: 21
        },

        {
            team: "Chelsea",
            played: 20,
            wins: 9,
            draws: 6,
            losses: 5,
            goalsFor: 31,
            goalsAgainst: 27
        }

    ],


    "La Liga": [

        {
            team: "Barcelona",
            played: 20,
            wins: 15,
            draws: 3,
            losses: 2,
            goalsFor: 48,
            goalsAgainst: 17
        },

        {
            team: "Real Madrid",
            played: 20,
            wins: 14,
            draws: 4,
            losses: 2,
            goalsFor: 44,
            goalsAgainst: 16
        },

        {
            team: "Atlético Madrid",
            played: 20,
            wins: 12,
            draws: 5,
            losses: 3,
            goalsFor: 36,
            goalsAgainst: 20
        },

        {
            team: "Valencia",
            played: 20,
            wins: 8,
            draws: 5,
            losses: 7,
            goalsFor: 28,
            goalsAgainst: 25
        }

    ],


    "Bundesliga": [

        {
            team: "Bayern Munich",
            played: 20,
            wins: 13,
            draws: 4,
            losses: 3,
            goalsFor: 46,
            goalsAgainst: 22
        },

        {
            team: "Borussia Dortmund",
            played: 20,
            wins: 11,
            draws: 5,
            losses: 4,
            goalsFor: 37,
            goalsAgainst: 24
        },

        {
            team: "RB Leipzig",
            played: 20,
            wins: 10,
            draws: 5,
            losses: 5,
            goalsFor: 35,
            goalsAgainst: 26
        },

        {
            team: "Bayer Leverkusen",
            played: 20,
            wins: 9,
            draws: 6,
            losses: 5,
            goalsFor: 33,
            goalsAgainst: 25
        }

    ]

};


// =========================================
// CALCULATE POINTS
// =========================================

function calculatePoints(team) {

    return (team.wins * 3) + team.draws;

}


// =========================================
// CALCULATE GOAL DIFFERENCE
// =========================================

function calculateGoalDifference(team) {

    return team.goalsFor - team.goalsAgainst;

}


// =========================================
// RENDER STANDINGS
// =========================================

function renderStandings(league) {

    const standingsBody =
        document.getElementById("standingsBody");

    const leagueTitle =
        document.getElementById("leagueTitle");

    if (!standingsBody) return;


    const teams = standingsData[league];

    if (!teams) return;


    // Calculate points and goal difference

    const calculatedTeams = teams.map(team => {

        return {
            ...team,
            goalDifference:
                calculateGoalDifference(team),
            points:
                calculatePoints(team)
        };

    });


    // Sort by points first
    // then goal difference

    calculatedTeams.sort((a, b) => {

        if (b.points !== a.points) {
            return b.points - a.points;
        }

        return b.goalDifference - a.goalDifference;

    });


    // Update league title

    leagueTitle.textContent = league;


    // Clear old table rows

    standingsBody.innerHTML = "";


    // Render rows

    calculatedTeams.forEach((team, index) => {

        const position = index + 1;


        standingsBody.innerHTML += `

            <tr>

                <td>
                    ${position}
                </td>

                <td>
                    <strong>
                        ${team.team}
                    </strong>
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
                    ${team.goalsFor}
                </td>

                <td>
                    ${team.goalsAgainst}
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

    });

}


// =========================================
// LEAGUE FILTER
// =========================================

const leagueFilter =
    document.getElementById("leagueFilter");


if (leagueFilter) {

    leagueFilter.addEventListener(
        "change",
        () => {

            const selectedLeague =
                leagueFilter.value;

            renderStandings(selectedLeague);

        }
    );

}


// =========================================
// INITIAL RENDER
// =========================================

renderStandings("Premier League");