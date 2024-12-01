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
        showBasketballLeagues(competition);
    }
}


function showBasketballLeagues(competition) {
    let leaguesContainer = document.getElementById('competition');

    leaguesContainer.innerHTML += /* html */ `
        <div onclick="renderBasketballLeague()" class='container'>
            <img class='logo' src="${competition['logo']}" loading="lazy">
            <div>${competition['name']}</div>
        </div>
    `;
}