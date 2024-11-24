const API_KEY = "702bba9e4e6eb4d460f04e521c4df251";
let openLevelSwitch = false;
let proLevel = true;


function start() {
    location.reload();
}


function level() {
    let pro = document.getElementById('logoPro');
    let amateur = document.getElementById('logoAmateur');
    let arrow = document.getElementById('');

    if (!openLevelSwitch) {
        amateur.style.display = 'flex';
        openLevelSwitch = true;
    } else {
        amateur.style.display = 'none';
        openLevelSwitch = false;
    }
}


function switchLevel() {
    let pro = document.getElementById('logoPro');
    let amateur = document.getElementById('logoAmateur');

    if (proLevel) {
        pro.innerHTML = 'LOGO AMATEUR';
        amateur.innerHTML = 'LOGO PRO';
        proLevel = false;
        openLevelSwitch = false;
    } else {
        pro.innerHTML = 'LOGO PRO';
        amateur.innerHTML = 'LOGO AMATEUR';
        proLevel = true;
        openLevelSwitch = false;
    }
    amateur.style.display = 'none';
}


function removeHighlight() {
    document.getElementById('categoryFootball').style.border = 'none';
    document.getElementById('categoryBasketball').style.border = 'none';
    document.getElementById('categoryAmericanfootball').style.border = 'none';
    document.getElementById('categoryMma').style.border = 'none';
}


function clearContent() {
    let topFiveContainer = document.getElementById('topFive');
    let countryContainer = document.getElementById('competition');

    topFiveContainer.innerHTML = /* html */ `<div class="topFiveContainer">TOP 5</div>`;
    countryContainer.innerHTML = /* html */ `<div class="aToZContainer">A - Z</div>`;

    topFive = [];
    countries = [];
}


function clearContent() {
    let topFiveContainer = document.getElementById('topFive');
    let countryContainer = document.getElementById('competition');

    topFiveContainer.innerHTML = /* html */ `<div class="topFiveContainer">TOP 5</div>`;
    countryContainer.innerHTML = /* html */ `<div class="aToZContainer">A - Z</div>`;

    footballTopFive = [];
    footballCountries = [];
    basketballTopFive = [];
    basketballCountries = [];
}


function clearAllLeagues() {
    let all = document.getElementById('all');

    all.innerHTML = '';
}


function clearTopFive() {
    let topFiveContainer = document.getElementById('topFive');

    topFiveContainer.innerHTML = '';
}


function clearCategories() {
    let countryContainer = document.getElementById('competition');

    countryContainer.innerHTML = '';
}