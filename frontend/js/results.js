 // =========================================
 // RESULTS DATA
 // =========================================

const results = [

    {
        id: 1,
        competition: "Premier League",
        date: "2026-09-18",
        homeTeam: "Manchester City",
        awayTeam: "Chelsea",
        homeScore: 3,
        awayScore: 1,
        venue: "Etihad Stadium"
    },

    {
        id: 2,
        competition: "Premier League",
        date: "2026-09-18",
        homeTeam: "Arsenal",
        awayTeam: "Liverpool",
        homeScore: 2,
        awayScore: 2,
        venue: "Emirates Stadium"
    },

    {
        id: 3,
        competition: "La Liga",
        date: "2026-09-17",
        homeTeam: "Real Madrid",
        awayTeam: "Barcelona",
        homeScore: 1,
        awayScore: 2,
        venue: "Santiago Bernabéu"
    },

    {
        id: 4,
        competition: "La Liga",
        date: "2026-09-17",
        homeTeam: "Atlético Madrid",
        awayTeam: "Valencia",
        homeScore: 2,
        awayScore: 0,
        venue: "Metropolitano Stadium"
    },

    {
        id: 5,
        competition: "Bundesliga",
        date: "2026-09-16",
        homeTeam: "Bayern Munich",
        awayTeam: "Borussia Dortmund",
        homeScore: 4,
        awayScore: 2,
        venue: "Allianz Arena"
    },

    {
        id: 6,
        competition: "Bundesliga",
        date: "2026-09-16",
        homeTeam: "Bayer Leverkusen",
        awayTeam: "RB Leipzig",
        homeScore: 1,
        awayScore: 1,
        venue: "BayArena"
    }

];


// =========================================
// FORMAT DATE
// =========================================

function formatResultDate(date) {

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
// RENDER RESULTS
// =========================================

function renderResults(resultList) {

    const resultsList =
        document.getElementById("resultsList");

    if (!resultsList) return;


    resultsList.innerHTML = "";


    // No results

    if (resultList.length === 0) {

        resultsList.innerHTML = `

            <div class="no-results">

                <h3>
                    No Results Found
                </h3>

                <p>
                    No completed matches match
                    the selected filters.
                </p>

            </div>

        `;

        return;
    }


    // Render each result

    resultList.forEach(result => {

        resultsList.innerHTML += `

           <article
    class="result-card"
    data-result-id="${result.id}"
>

                <div class="result-header">

                    <span class="result-competition">
                        ${result.competition}
                    </span>

                    <span class="result-date">
                        ${formatResultDate(result.date)}
                    </span>

                </div>


                <div class="result-main">

                    <div class="result-team home-result-team">

                        <strong>
                            ${result.homeTeam}
                        </strong>

                        <span>
                            HOME
                        </span>

                    </div>


                    <div class="result-score">

                        <strong>
                            ${result.homeScore}
                            -
                            ${result.awayScore}
                        </strong>

                        <span>
                            FT
                        </span>

                    </div>


                    <div class="result-team away-result-team">

                        <strong>
                            ${result.awayTeam}
                        </strong>

                        <span>
                            AWAY
                        </span>

                    </div>

                </div>


                <div class="result-footer">

                    <span>
                        📍 ${result.venue}
                    </span>

                </div>

            </article>

        `;

    });
    setupResultCardEvents();

}


// =========================================
// FILTER RESULTS
// =========================================

function filterResults() {

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


    const filteredResults =
        results.filter(result => {

            const competitionMatch =
                selectedCompetition === "all" ||
                result.competition === selectedCompetition;


            const dateMatch =
                selectedDate === "all" ||
                result.date === selectedDate;


            return competitionMatch && dateMatch;

        });


    renderResults(filteredResults);

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
        filterResults
    );

}


if (dateFilter) {

    dateFilter.addEventListener(
        "change",
        filterResults
    );

}


// =========================================
// INITIAL RENDER
// =========================================

renderResults(results);

// =========================================
// RESULT CARD EVENTS
// =========================================

function setupResultCardEvents() {

    const resultCards =
        document.querySelectorAll(".result-card");

    resultCards.forEach(card => {

        card.addEventListener("click", () => {

            const resultId =
                card.dataset.resultId;

            window.location.href =
                `match-details.html?id=${resultId}`;

        });

    });

}