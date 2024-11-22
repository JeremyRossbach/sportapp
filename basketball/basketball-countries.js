const BASKETBALL_API_HOST = "v1.basketball.api-sports.io";
const BASKETBALL_MAIN_URL = "https://v1.basketball.api-sports.io/leagues";
let basketballGlobalData;
let basketballTopFive = [];
let basketballCountries = [];


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

        basketballGlobalData = data.response;

        console.log('Whole data', basketballGlobalData);

        clearContent();
        removeHighlight();
        highlightCategoryBasketball();
        renderBasketballCountriesOne(data);

    } catch (error) {
        console.log('Fehler beim Abrufen der Daten:', error);
    }
}


function highlightCategoryBasketball() {
    document.getElementById('categoryBasketball').style.borderBottom = '3px solid yellow';
}


function renderBasketballCountriesOne(data) {
    for (let i = 0; i < 100; i++) {
        let competition = data.response[i];
        checkBasketballCountry(competition);
    }
    renderBasketballCountriesTwo(data);
}


function renderBasketballCountriesTwo(data) {
    for (let i = 100; i < 200; i++) {
        let competition = data.response[i];
        checkBasketballCountry(competition);
    }
    renderBasketballCountriesThree(data);
}


function renderBasketballCountriesThree(data) {
    for (let i = 200; i < 300; i++) {
        let competition = data.response[i];
        checkBasketballCountry(competition);
    }
    renderBasketballCountriesFour(data);
}


function renderBasketballCountriesFour(data) {
    for (let i = 300; i < 420; i++) {
        let competition = data.response[i];
        checkBasketballCountry(competition);
    }
    console.log('In top 5:', basketballTopFive);
    console.log('Countries:', basketballCountries);
}


function checkBasketballCountry(competition) {
    let countryName = competition['country']['name'];

    if (!basketballCountries.includes(countryName) && !inBasketballTopFive(countryName)) {
        showBasketballCountry(competition, countryName);
        pushBasketballCountry(countryName);
    } else if (!basketballTopFive.includes(countryName) && inBasketballTopFive(countryName)) {
        showBasketballTopFive(competition, countryName);
        pushBasketballCountry(countryName);
    }
}


function inBasketballTopFive(countryName) {
    return countryName === 'USA' ||
        countryName === 'Europe' ||
        countryName === 'China' ||
        countryName === 'Australia' ||
        countryName === 'Spain';
}


function showBasketballCountry(competition, countryName) {
    let countryContainer = document.getElementById('competition');

    countryContainer.innerHTML += /* html */ `
        <div onclick="renderBasketballLeagues('${countryName}')" class='container'>
            <img class='logo' src="${competition['country']['flag']}" loading="lazy">
            <div>${competition['country']['name']}</div>
        </div>
    `;
}


function showBasketballTopFive(competition, countryName) {
    let topFiveContainer = document.getElementById('topFive');

    topFiveContainer.innerHTML += /* html */ `
        <div onclick="renderBasketballLeagues('${countryName}')" class='container'>
            <img class='logo' src="${competition['country']['flag']}" loading="lazy">
            <div>${competition['country']['name']}</div>
        </div>
    `;
}


function pushBasketballCountry(countryName) {
    if (inBasketballTopFive(countryName)) {
        basketballTopFive.push(countryName);
    } else {
        basketballCountries.push(countryName);
    }
}