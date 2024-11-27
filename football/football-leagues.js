/* function renderAllFootballLeaguesOne(countryName) {
    for (let e = 0; e < 200; e++) {
        const league = footballGlobalData[e];
        allFootballLeagues(countryName, league);
    }
    renderAllFootballLeaguesTwo(countryName);
}


function renderAllFootballLeaguesTwo(countryName) {
    for (let e = 200; e < 400; e++) {
        const league = footballGlobalData[e];
        allFootballLeagues(countryName, league);
    }
    renderAllFootballLeaguesThree(countryName);
}


function renderAllFootballLeaguesThree(countryName) {
    for (let e = 400; e < 600; e++) {
        const league = footballGlobalData[e];
        allFootballLeagues(countryName, league);
    }
    renderAllFootballLeaguesFour(countryName);
}


function renderAllFootballLeaguesFour(countryName) {
    for (let e = 600; e < 800; e++) {
        const league = footballGlobalData[e];
        allFootballLeagues(countryName, league);
    }
    renderAllFootballLeaguesFive(countryName);
}


function renderAllFootballLeaguesFive(countryName) {
    for (let e = 800; e < 1000; e++) {
        const league = footballGlobalData[e];
        allFootballLeagues(countryName, league);
    }
    renderAllFootballLeaguesSix(countryName);
}


function renderAllFootballLeaguesSix(countryName) {
    for (let e = 1000; e < 1165; e++) {
        const league = footballGlobalData[e];
        allFootballLeagues(countryName, league);
    }
}


function allFootballLeagues(countryName, league) {
    let leagueName = league['league']['name'];
    let leagues = document.getElementById('competition');

    leagues.innerHTML += html `
        <div onclick="renderFootballLeague('${leagueName}', '${countryName}')" class='container'>
            <img class='logo' src="${league['league']['logo']}" loading="lazy">
            <div>${league['league']['name']}</div>
        </div>
    `;
} */


function renderFootballLeagues(countryName) {
    clearAllLeagues();
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
    addOnclickFootballCountries(); // on wrong position in code ?
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
            <img class='leagueLogo' src="${competition['league']['logo']}" loading="lazy">
            <div onclick="switchYear()" class="leagueInfoContainer">
                <div class="leagueName">${competition['league']['name']}</div>
                <div class="year">
                    Season 
                    <div id="year"></div>
                    <div id="yearArrow">▼</div>
                </div>
            </div>
        </div>
    `;
    renderYear(competition);
}


function renderYear(competition) {
    for (let a = 0; a < competition['seasons'].length; a++) {
        const season = competition['seasons'][a];
        showYear(season);
    }
}


function showYear(season) {
    if (season['year'] === 2020) {
        year(season, 2020);
    } else if (season['year'] === 2021) {
        year(season, 2021);
    } else if (season['year'] === 2022) {
        year(season, 2022);
    }
}


function year(season, seasonYear) {
    let year = document.getElementById('year');

    year.innerHTML = /* html */ `
        <div>${seasonYear}</div>
    `;
    renderLeaguesTable(season, seasonYear);
}


function renderLeaguesTable(season, yearNumber) {

}


function addOnclickFootballCountries() {
    let goBackContainer = document.getElementById('goBackContainer');
    let goBack = document.getElementById('goBack');

    goBackContainer.style.display = 'flex';
    goBack.onclick = () => goBackToCountries();
}


function addOnclickFootballCountries() {
    let goBackContainer = document.getElementById('goBackContainer');
    let goBack = document.getElementById('goBack');

    goBackContainer.style.display = 'flex';
    goBack.onclick = () => goBackToCountries();
}


function dnGoBackContainer() {
    let goBackContainer = document.getElementById('goBackContainer');

    goBackContainer.style.display = 'none';
}


function goBackToCountries() {
    dnGoBackContainer();
    dfNumberOfAll();
    loadFootballData();
}