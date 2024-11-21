function renderFootballLeagues(countryName) {
    clearContent();
    clearTopFive();

    for (let i = 0; i < footballGlobalData.length; i++) {
        let competition = footballGlobalData[i];
        checkFootballLeagues(countryName, competition);
    }
}


function checkFootballLeagues(countryName, competition) {
    if (countryName === competition['country']['name']) {
        showFootballLeagues(countryName, competition);
    }
}


function showFootballLeagues(countryName, competition) {
    let league = competition['league']['name']
    let leaguesContainer = document.getElementById('competition');

    leaguesContainer.innerHTML += /* html */ `
        <div onclick="renderFootballLeague('${league}', '${countryName}')" class='container'>
            <img class='logo' src="${competition['league']['logo']}" loading="lazy">
            <div>${competition['league']['name']}</div>
        </div>
    `;
}


function renderFootballLeague(league, countryName) {
    clearContent();
    clearTopFive();
    clearCategories();

    for (let i = 0; i < footballGlobalData.length; i++) {
        let competition = footballGlobalData[i];
        checkFootballLeague(league, countryName, competition);
    }
}


function checkFootballLeague(league, countryName, competition) {
    if (league === competition['league']['name'] && countryName === competition['country']['name']) {
        showFootballLeague(competition);
    }
}


function showFootballLeague(competition) {
    let leagueContainer = document.getElementById('competition');

    leagueContainer.innerHTML += /* html */ `
        <div onclick="renderFootballLeague()" class='container'>
            <img class='logo' src="${competition['league']['logo']}" loading="lazy">
            <div>${competition['league']['name']}</div>
        </div>
    `;
}