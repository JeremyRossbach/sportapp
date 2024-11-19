const API_HOST = "v3.football.api-sports.io";
const MAIN_URL = "https://v3.football.api-sports.io/leagues";
let globalData;
let topFive = [];
let countries = [];

async function init() {
    await loadFootballData();  // Ruft die Daten asynchron ab und wartet, bis die Daten geladen sind
}

async function loadFootballData() {
    try {
        // Headers definieren
        let myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", API_KEY);
        myHeaders.append("x-rapidapi-host", API_HOST);

        // Optionen für die Anfrage definieren
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        // Anfrage an die API senden und auf die Antwort warten
        let response = await fetch(MAIN_URL, requestOptions);

        // Antwort in JSON umwandeln
        let data = await response.json();

        globalData = data.response;

        // Daten in der Konsole ausgeben (könnte durch weitere Verarbeitungen ersetzt werden)
        console.log('Whole data', globalData);

        renderCountriesOne(data);
        // Hier könntest du die Daten weiterverarbeiten, z. B. in eine Liste hinzufügen
        // allLeagues.push(data); // Falls du die Daten speichern möchtest

    } catch (error) {
        // Fehlerbehandlung
        console.log('Fehler beim Abrufen der Daten:', error);
    }
}


function renderCountriesOne(data) {
    for (let i = 0; i < 200; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    renderCountriesTwo(data);
}


function renderCountriesTwo(data) {
    for (let i = 200; i < 400; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    renderCountriesThree(data);
}


function renderCountriesThree(data) {
    for (let i = 400; i < 600; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    renderCountriesFour(data);
}


function renderCountriesFour(data) {
    for (let i = 600; i < 800; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    renderCountriesFive(data);
}


function renderCountriesFive(data) {
    for (let i = 800; i < 1000; i++) {
        let competition = data.response[i];
        checkCountry(competition);
    }
    renderCountriesSix(data)
}


function renderCountriesSix(data) {
    for (let i = 1000; i < 1165; i++) {
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
    return countryName === 'England' ||
        countryName === 'Germany' ||
        countryName === 'Spain' ||
        countryName === 'Italy' ||
        countryName === 'France';
}


function showCountry(competition, countryName) {
    let countryContainer = document.getElementById('competition');

    countryContainer.innerHTML += /* html */ `
        <div onclick="renderCompetition('${countryName}')" class='container'>
            <img class='logo' src="${competition['country']['flag']}" loading="lazy">
            <div><b>${competition['country']['name']}</b></div>
        </div>
    `;
}


function showTopFive(competition, countryName) {
    let topFiveContainer = document.getElementById('topFive');

    topFiveContainer.innerHTML += /* html */ `
        <div onclick="renderCompetition('${countryName}')" class='container'>
            <img class='logo' src="${competition['country']['flag']}" loading="lazy">
            <div><b>${competition['country']['name']}</b></div>
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