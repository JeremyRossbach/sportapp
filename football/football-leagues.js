function renderCompetition(countryName) {
    clearContent();

    for (let i = 0; i < globalData.length; i++) {
        let competition = globalData[i];
        checkLeague(countryName, competition);
    }
}


function checkLeague(countryName, competition) {
    if (countryName === competition['country']['name']) {
        showLeague(competition);
    }
}


function showLeague(competition) {
    let leaguesContainer = document.getElementById('competition');

    leaguesContainer.innerHTML += /* html */ `
        <div onclick="renderLeague()" class='container'>
            <img class='logo' src="${competition['league']['logo']}" loading="lazy">
            <div>${competition['league']['name']}</div>
        </div>
    `;
}