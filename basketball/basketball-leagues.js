function renderBasketballCompetition(countryName) {
    clearContent();

    for (let i = 0; i < basketballGlobalData.length; i++) {
        let competition = basketballGlobalData[i];
        checkBasketballLeague(countryName, competition);
    }
}


function checkBasketballLeague(countryName, competition) {
    if (countryName === competition['country']['name']) {
        showBasketballLeague(competition);
    }
}


function showBasketballLeague(competition) {
    let leaguesContainer = document.getElementById('competition');

    leaguesContainer.innerHTML += /* html */ `
        <div onclick="renderLeague()" class='container'>
            <img class='logo' src="${competition['logo']}" loading="lazy">
            <div>${competition['name']}</div>
        </div>
    `;
}