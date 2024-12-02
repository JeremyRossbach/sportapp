function renderBasketballLeagues(countryName) {
    clearAllLeagues();
    clearContent();
    clearTopFive();

    for (let i = 0; i < basketballGlobalData.length; i++) {
        let competition = basketballGlobalData[i];
        checkBasketballLeagues(countryName, competition);
    }
}


function checkBasketballLeagues(countryName, competition) {
    if (countryName === competition['country']['name']) {
        showBasketballLeagues(countryName, competition);
    }
}


function showBasketballLeagues(countryName, competition) {
    let league = competition['name'];
    let leaguesContainer = document.getElementById('competition');

    leaguesContainer.innerHTML += /* html */ `
        <div onclick="renderBasketballLeague('${league}', '${countryName}')" class='container'>
            <img class='logo' src="${competition['logo']}" loading="lazy">
            <div>${competition['name']}</div>
        </div>
    `;
    addOnclickBasketballCountries(); // on wrong position in code ?
}


function renderBasketballLeague(league, countryName) {
    clearContent();
    clearTopFive();
    clearCategories();

    for (let i = 0; i < basketballGlobalData.length; i++) {
        let competition = basketballGlobalData[i];
        checkBasketballLeague(league, countryName, competition);
    }
}


function checkBasketballLeague(league, countryName, competition) {
    if (league === competition['name'] && countryName === competition['country']['name']) {
        showBasketballLeague(countryName, competition);
    }
}


function showBasketballLeague(countryName, competition) {
    let leagueContainer = document.getElementById('competition');

    leagueContainer.innerHTML += /* html */ `
        <div onclick="renderBasketballLeague()" class='container'>
            <img class='leagueLogo' src="${competition['logo']}" loading="lazy">
            <div onclick="switchYear()" class="leagueInfoContainer">
                <div class="leagueName">${competition['name']}</div>
                <div class="year">
                    Season 
                    <div id="year"></div>
                    <div id="yearArrow">▼</div>
                </div>
            </div>
        </div>
    `;
    renderYear(competition);
    addOnclickBasketballLeague(countryName);
}


function renderYear(competition) {
    for (let a = 0; a < competition['seasons'].length; a++) {
        const season = competition['seasons'][a];
        showYear(season);
    }
}


function showYear(season) {
    if (season['season'] === '2019-2020') {
        year(season, '2019-2020');
    } else if (season['season'] === '2020-2021') {
        year(season, '2020-2021');
    } else if (season['season'] === '2021-2022') {
        year(season, '2021-2022');
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


function addOnclickBasketballCountries() {
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
    loadBasketballData();
}


function addOnclickBasketballLeague(countryName) {
    let goBackContainer = document.getElementById('goBackContainer');
    let goBack = document.getElementById('goBack');

    removeOnclickBasketballCountries();

    goBackContainer.style.display = 'flex';
    goBack.onclick = () => goBackToLeagues(countryName);
}


function removeOnclickBasketballCountries() {
    let goBack = document.getElementById('goBack');
    goBack.onclick = null;
}


function goBackToLeagues(countryName) {
    loadBasketballData();
    renderBasketballLeagues(countryName);
}