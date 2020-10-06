const cities = [
    { name: "Houston", population: 2099451, landmark: "NASA Space Center" },
    { name: "Los Angeles", population: 3792621, landmark: "Hollywood Sign" },
    { name: "New York", population: 8175133, landmark: "Statue of Liberty" },
    { name: "Chicago", population: 2695598, landmark: "Willis Tower" },
    { name: "Philadelphia", population: 1526006, landmark: "Independence Hall" }
];

let greet = document.getElementsByClassName("greet")[0];
let searchBar = document.getElementsByClassName("searchBar")[0];
let result = document.getElementsByClassName("result")[0];

function showGreeting(){
    greet.innerHTML = "Welcome to City Search";
}
showGreeting()

const displayCities = (bigTown) => {
    const cityListings = bigTown.map(bigTown => {
        return `<div class="cityName"><span class="lighter">City:</span>  ${bigTown.name}</div>
                <div class="cityPop"><span class="lighter">Population:</span>  ${commafy(bigTown.population)}</div>
                <div class="cityLandmark"><span class="lighter">Landmark:</span>  ${bigTown.landmark}</div>`;
    });
    result.innerHTML = cityListings.join("");
};

displayCities(cities)

function cityFiltered(event) {
    searchBar = document.getElementsByClassName("searchBar")[0];
    let inSearchBar = event.target.value;
    let sVal = inSearchBar.toLowerCase();
    let answer = searchBar.value.toLowerCase();

    let selectedCity = cities.filter(city => city.name.toLowerCase().includes(sVal));

    result.innerHTML = "";

    let searchEntered = selectedCity.map((selectedCity) => {
            return `<div class="cityName"><span class="lighter">City:</span>  ${selectedCity.name}</div>
                <div class="cityPop"><span class="lighter">Population:</span>  ${commafy(selectedCity.population)}</div>
                <div class="cityLandmark"><span class="lighter">Landmark:</span>  ${selectedCity.landmark}</div>`;
    });
    result.innerHTML = searchEntered.join("");
};

function commafy(num) {
    var str = num.toString().split('.');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
};

searchBar.addEventListener('keyup', cityFiltered)