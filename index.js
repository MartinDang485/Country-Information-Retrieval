const country = document.querySelector('#searchbar');
const submit = document.querySelector('#search-button');

let countryName = document.querySelector('#country-name');
let continent = document.querySelector('#continent');
let moreInfoHeader = document.querySelector('#more-information');
let currency = document.querySelector('#currency');
let population = document.querySelector('#population');


submit.addEventListener('click',() => {
    yes(country.value);
})

function yes(country) {
    console.log(country);

 fetch('https://restcountries.com/v3.1/name/' + country)
 .then(response => {
    return response.json()
 })
 .then(data => {
    console.log(data)

    countryName.textContent = country;
    continent.textContent = 'Continent: ' + data[0].continents;
    moreInfoHeader.textContent = 'More About ' + country;
    currency.textContent = 'Currency: ' + data[0].currencies.CAD.name;
    population.textContent = 'Population: ' + data[0].population;
    capital.textContent = 'Capital: ' + data[0].capital;
 })
}
