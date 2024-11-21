const API_HOST = "v3.football.api-sports.io";
const MAIN_URL = "https://v3.football.api-sports.io/leagues";
let footballGlobalData;
let footballTopFive = [];
let footballCountries = [];

async function init() {
    await loadFootballData();
}

async function loadFootballData() {
    try {
        let myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", API_KEY);
        myHeaders.append("x-rapidapi-host", API_HOST);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        let response = await fetch(MAIN_URL, requestOptions);

        let data = await response.json();

        footballGlobalData = data.response;

        console.log('Whole data', footballGlobalData);

        clearContent();
        renderFootballCountriesOne(data);

    } catch (error) {
        console.log('Fehler beim Abrufen der Daten:', error);
    }
}


function renderFootballCountriesOne(data) {
    for (let i = 0; i < 200; i++) {
        let competition = data.response[i];
        checkFootballCountry(competition);
    }
    renderFootballCountriesTwo(data);
}


function renderFootballCountriesTwo(data) {
    for (let i = 200; i < 400; i++) {
        let competition = data.response[i];
        checkFootballCountry(competition);
    }
    renderFootballCountriesThree(data);
}


function renderFootballCountriesThree(data) {
    for (let i = 400; i < 600; i++) {
        let competition = data.response[i];
        checkFootballCountry(competition);
    }
    renderFootballCountriesFour(data);
}


function renderFootballCountriesFour(data) {
    for (let i = 600; i < 800; i++) {
        let competition = data.response[i];
        checkFootballCountry(competition);
    }
    renderFootballCountriesFive(data);
}


function renderFootballCountriesFive(data) {
    for (let i = 800; i < 1000; i++) {
        let competition = data.response[i];
        checkFootballCountry(competition);
    }
    renderFootballCountriesSix(data)
}


function renderFootballCountriesSix(data) {
    for (let i = 1000; i < 1165; i++) {
        let competition = data.response[i];
        checkFootballCountry(competition);
    }
    console.log('In top 5:', footballTopFive);
    console.log('Countries:', footballCountries);
}


function checkFootballCountry(competition) {
    let countryName = competition['country']['name'];

    if (!footballCountries.includes(countryName) && !inFootballTopFive(countryName)) {
        showFootballCountry(competition, countryName);
        pushFootballCountry(countryName);
    } else if (!footballTopFive.includes(countryName) && inFootballTopFive(countryName)) {
        showFootballTopFive(competition, countryName);
        pushFootballCountry(countryName);
    }
    showAllFootballLeagues(countryName);
}


function inFootballTopFive(countryName) {
    return countryName === 'England' ||
        countryName === 'Germany' ||
        countryName === 'Spain' ||
        countryName === 'Italy' ||
        countryName === 'France';
}


function showFootballCountry(competition, countryName) {
    let countryContainer = document.getElementById('competition');

    countryContainer.innerHTML += /* html */ `
        <div onclick="renderFootballLeagues('${countryName}')" class='container'>
            <img class='logo' src="${competition['country']['flag']}" loading="lazy">
            <div>${competition['country']['name']}</div>
        </div>
    `;
}


function showFootballTopFive(competition, countryName) {
    let topFiveContainer = document.getElementById('topFive');

    topFiveContainer.innerHTML += /* html */ `
        <div onclick="renderFootballLeagues('${countryName}')" class='container'>
            <img class='logo' src="${competition['country']['flag']}" loading="lazy">
            <div>${competition['country']['name']}</div>
        </div>
    `;
}


function pushFootballCountry(countryName) {
    if (inFootballTopFive(countryName)) {
        footballTopFive.push(countryName);
    } else {
        footballCountries.push(countryName);
    }
}


function showAllFootballLeagues(countryName) {
    let numberOfAll = document.getElementById('numberOfAll');

    numberOfAll.onclick = () => renderAllFootballLeagues(countryName);

    numberOfAll.innerHTML = /* html */ `
    <div class="numberOfAll">${footballGlobalData.length}</div> All Leagues
    `;
}