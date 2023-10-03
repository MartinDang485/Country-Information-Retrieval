let country = document.querySelector('#searchbar');


let submit = document.querySelector('#search-button');
submit.addEventListener('click' ,() => {
    yes(country);
})

function yes(country) {
    console.log(country.value);
}