const BASKETBALL_API_HOST = "v1.basketball.api-sports.io";
const BASKETBALL_MAIN_URL = "https://v1.basketball.api-sports.io/leagues";
let basketballGlobalData;
const now = new Date();


async function loadBasketballData() {
    try {
        let myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", API_KEY);
        myHeaders.append("x-rapidapi-host", BASKETBALL_API_HOST);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let response = await fetch(BASKETBALL_MAIN_URL, requestOptions);

        let data = await response.json();

        globalData = data.response;

        console.log('Whole data', globalData);

        clearContent();
        renderCountriesOne(data);

    } catch (error) {
        console.log('Fehler beim Abrufen der Daten:', error);
    }
}


function clearContent() {
    let topFiveContainer = document.getElementById('topFive');
    let countryContainer = document.getElementById('competition');

    topFiveContainer.innerHTML = /* html */ `<div class="topFiveContainer">TOP 5</div>`;
    countryContainer.innerHTML = /* html */ `<div class="aToZContainer">A - Z</div>`;

    topFive = [];
    countries = [];
}


function renderCountriesOne(data) {
    for (let i = 0; i < 100; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    renderCountriesTwo(data);
}


function renderCountriesTwo(data) {
    for (let i = 100; i < 200; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    renderCountriesThree(data);
}


function renderCountriesThree(data) {
    for (let i = 200; i < 300; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    renderCountriesFour(data);
}


function renderCountriesFour(data) {
    for (let i = 300; i < 420; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    console.log('In top 5:', topFive);
    console.log('Countries:', countries);
}


function checkCountry(competition) {
    let countryName = competition['country']['name'];

    if (!countries.includes(countryName) && !inTopFive(countryName)) {
        showCountry(competition, countryName);
        pushCountry(countryName);
    } else if (!topFive.includes(countryName) && inTopFive(countryName)) {
        showTopFive(competition, countryName);
        pushCountry(countryName);
    }
}


function inTopFive(countryName) {
    return countryName === 'USA' ||
        countryName === 'Europe' ||
        countryName === 'China' ||
        countryName === 'Australia' ||
        countryName === 'Spain';
}


function showCountry(competition, countryName) {
    let countryContainer = document.getElementById('competition');

    countryContainer.innerHTML += /* html */ `
        <div onclick="renderCompetition('${countryName}')" class='container'>
            <img class='logo' src="${competition['country']['flag']}" loading="lazy">
            <div>${competition['country']['name']}</div>
        </div>
    `;
}


function showTopFive(competition, countryName) {
    let topFiveContainer = document.getElementById('topFive');

    topFiveContainer.innerHTML += /* html */ `
        <div onclick="renderCompetition('${countryName}')" class='container'>
            <img class='logo' src="${competition['country']['flag']}" loading="lazy">
            <div>${competition['country']['name']}</div>
        </div>
    `;
}


function pushCountry(countryName) {
    if (inTopFive(countryName)) {
        topFive.push(countryName);
    } else {
        countries.push(countryName);
    }
}