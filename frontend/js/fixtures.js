// =========================================
// FIXTURES DATA
// =========================================

const fixtures = [

    {
        id: 1,
        competition: "Premier League",
        date: "2026-09-20",
        time: "18:30",
        homeTeam: "Manchester City",
        awayTeam: "Arsenal",
        venue: "Etihad Stadium"
    },

    {
        id: 2,
        competition: "Premier League",
        date: "2026-09-20",
        time: "21:00",
        homeTeam: "Liverpool",
        awayTeam: "Chelsea",
        venue: "Anfield"
    },

    {
        id: 3,
        competition: "La Liga",
        date: "2026-09-21",
        time: "20:00",
        homeTeam: "Barcelona",
        awayTeam: "Real Madrid",
        venue: "Camp Nou"
    },

    {
        id: 4,
        competition: "La Liga",
        date: "2026-09-21",
        time: "18:30",
        homeTeam: "Valencia",
        awayTeam: "Atlético Madrid",
        venue: "Mestalla Stadium"
    },

    {
        id: 5,
        competition: "Bundesliga",
        date: "2026-09-22",
        time: "19:30",
        homeTeam: "Bayern Munich",
        awayTeam: "Borussia Dortmund",
        venue: "Allianz Arena"
    },

    {
        id: 6,
        competition: "Bundesliga",
        date: "2026-09-22",
        time: "21:00",
        homeTeam: "RB Leipzig",
        awayTeam: "Bayer Leverkusen",
        venue: "Red Bull Arena"
    }

];


// =========================================
// FORMAT DATE
// =========================================

function formatFixtureDate(date) {

    const dateObject =
        new Date(`${date}T00:00:00`);

    return dateObject.toLocaleDateString(
        "en-GB",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );
}


// =========================================
// RENDER FIXTURES
// =========================================

function renderFixtures(fixtureList) {

    const fixturesList =
        document.getElementById("fixturesList");

    if (!fixturesList) return;


    fixturesList.innerHTML = "";


    if (fixtureList.length === 0) {

        fixturesList.innerHTML = `

            <div class="no-fixtures">

                <h3>
                    No Fixtures Found
                </h3>

                <p>
                    No upcoming matches match
                    the selected filters.
                </p>

            </div>

        `;

        return;
    }


    fixtureList.forEach(fixture => {

        fixturesList.innerHTML += `

            <article class="fixture-card">

                <div class="fixture-header">

                    <span class="fixture-competition">
                        ${fixture.competition}
                    </span>

                    <span class="fixture-date">
                        ${formatFixtureDate(fixture.date)}
                    </span>

                </div>


                <div class="fixture-main">

                    <div class="fixture-team home-team">

                        <strong>
                            ${fixture.homeTeam}
                        </strong>

                        <span>
                            HOME
                        </span>

                    </div>


                    <div class="fixture-time">

                        <strong>
                            ${fixture.time}
                        </strong>

                        <span>
                            VS
                        </span>

                    </div>


                    <div class="fixture-team away-team">

                        <strong>
                            ${fixture.awayTeam}
                        </strong>

                        <span>
                            AWAY
                        </span>

                    </div>

                </div>


                <div class="fixture-footer">

                    <span>
                        📍 ${fixture.venue}
                    </span>

                </div>

            </article>

        `;

    });

}


// =========================================
// FILTER FIXTURES
// =========================================

function filterFixtures() {

    const competitionFilter =
        document.getElementById(
            "competitionFilter"
        );

    const dateFilter =
        document.getElementById(
            "dateFilter"
        );


    const selectedCompetition =
        competitionFilter.value;

    const selectedDate =
        dateFilter.value;


    const filteredFixtures =
        fixtures.filter(fixture => {

            const competitionMatch =
                selectedCompetition === "all" ||
                fixture.competition === selectedCompetition;


            const dateMatch =
                selectedDate === "all" ||
                fixture.date === selectedDate;


            return competitionMatch && dateMatch;

        });


    renderFixtures(filteredFixtures);

}


// =========================================
// FILTER EVENTS
// =========================================

const competitionFilter =
    document.getElementById(
        "competitionFilter"
    );

const dateFilter =
    document.getElementById(
        "dateFilter"
    );


if (competitionFilter) {

    competitionFilter.addEventListener(
        "change",
        filterFixtures
    );

}


if (dateFilter) {

    dateFilter.addEventListener(
        "change",
        filterFixtures
    );

}


// =========================================
// INITIAL RENDER
// =========================================

renderFixtures(fixtures);