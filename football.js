const API_HOST = "v3.football.api-sports.io";
const MAIN_URL = "https://v3.football.api-sports.io/leagues";
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

        // Daten in der Konsole ausgeben (könnte durch weitere Verarbeitungen ersetzt werden)
        console.log('Whole data', data.response);

        renderHundredCountries(data);
        // Hier könntest du die Daten weiterverarbeiten, z. B. in eine Liste hinzufügen
        // allLeagues.push(data); // Falls du die Daten speichern möchtest

    } catch (error) {
        // Fehlerbehandlung
        console.log('Fehler beim Abrufen der Daten:', error);
    }
}


function renderHundredCountries(data) {
    for (let i = 0; i < 100; i++) {
        let compitition = data.response[i];
        checkCountry(compitition);
    }
    renderTwoHundredCountries(data);
}


function renderTwoHundredCountries(data) {
    for (let i = 100; i < 200; i++) {
        let compitition = data.response[i];
        checkCountry(compitition);
    }
    renderThreeHundredCountries(data);
}


function renderThreeHundredCountries(data) {
    for (let i = 200; i < 300; i++) {
        let compitition = data.response[i];
        checkCountry(compitition);
    }
    renderFourHundredCountries(data);
}


function renderFourHundredCountries(data) {
    for (let i = 300; i < 400; i++) {
        let compitition = data.response[i];
        checkCountry(compitition);
    }
    console.log('In top 5:', topFive);
    console.log('Countries:', countries);
    /* renderFiveHundredCountries(data); */ // continue until end of array
}


function checkCountry(compitition) {
    let countryName = compitition['country']['name'];

    if (!countries.includes(countryName) && !inTopFive(countryName)) {
        showCountry(compitition);
        pushCountry(countryName);
    } else if (!topFive.includes(countryName) && inTopFive(countryName)) {
        showTopFive(compitition);
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


function showCountry(compitition) {
    let countryContainer = document.getElementById('compitition');

    countryContainer.innerHTML += /* html */ `
        <div onclick="showCompetition(${compitition})" class='container'>
            <img class='logo' src="${compitition['country']['flag']}">
            <div><b>${compitition['country']['name']}</b></div>
        </div>
    `;
}


function showTopFive(compitition) {
    let topFiveContainer = document.getElementById('topFive');

    topFiveContainer.innerHTML += /* html */ `
        <div onclick="showCompetition(${compitition})" class='container'>
            <img class='logo' src="${compitition['country']['flag']}">
            <div><b>${compitition['country']['name']}</b></div>
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


function showCompetition(compitition) {
    let container = document.getElementById('compitition');

    container.innerHTML = '';
    container.innerHTML += /* html */ `
        <div>
            <div><b>${compitition['name']}</b></div>
        </div>
    `;
}