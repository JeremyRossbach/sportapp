function renderFootballCompetition(countryName) {
    clearContent();

    for (let i = 0; i < footballGlobalData.length; i++) {
        let competition = footballGlobalData[i];
        checkFootballLeague(countryName, competition);
    }
}


function checkFootballLeague(countryName, competition) {
    if (countryName === competition['country']['name']) {
        showFootballLeague(competition);
    }
}


function showFootballLeague(competition) {
    let leaguesContainer = document.getElementById('competition');

    leaguesContainer.innerHTML += /* html */ `
        <div onclick="renderFootballLeague()" class='container'>
            <img class='logo' src="${competition['league']['logo']}" loading="lazy">
            <div>${competition['league']['name']}</div>
        </div>
    `;
}