const API_KEY = "702bba9e4e6eb4d460f04e521c4df251";


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

    basketballTopFive = [];
    basketballCountries = [];
}


function clearTopFive() {
    let topFiveContainer = document.getElementById('topFive');

    topFiveContainer.innerHTML = '';
}


function clearCategories() {
    let countryContainer = document.getElementById('competition');

    countryContainer.innerHTML = '';
}