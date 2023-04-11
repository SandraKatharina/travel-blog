const buttonShowMenu = document.getElementById("buttonShowMenu");
const buttonHideMenu = document.getElementById("buttonHideMenu");

const aside = document.getElementById("aside");

buttonShowMenu.addEventListener("click", function () {
  aside.classList.remove("hidden");
});

buttonHideMenu.addEventListener("click", function () {
  aside.classList.add("hidden");
});

// Original Array

let destinations = [
  {
    imageSrc:
      "http://127.0.0.1:5500/travel-blog/img/marocco-marrakech-boucharouite-closeup.jpg",
    titel: "Marrakech–– most beautiful traditional way of Upcycling",
    location: "Marrakech",
    country: "Marocco",
    date: "march 2018",
  },
  {
    imageSrc:
      "http://127.0.0.1:5500/travel-blog/img/france-paris-deco-off-bistro-detail.jpg",
    titel: "Paris–– colorful patters at Paris Deco Off",
    location: "Paris",
    country: "France",
    date: "january 2019",
  },
];

// Event Listeners

addButton.addEventListener("click", function () {
  const newDestination = {
    imageSrc: imageInput.value,
    titel: inputTitle.value,
    location: inputCity.value,
    country: inputCountry.value,
    date: inputDate.value,
  };

  destinations.push(newDestination);
  filldestinationContainer();
  saveToLocalStorage();
});

// Functions

function filldestinationContainer() {
  const destinationContainer = document.querySelector(".destinationContainer");
  destinationContainer.innerHtml = "";

  destinationContainer.innerHTML = destinations
    .map(
      (destinations) => ` <div class="destination">
        <a href=""
        ><img
          src=${destinations.imageSrc}
        
      /></a>
        <a href=""
        ><h1>${destinations.location}</h1></a
      >
        <p class="country">
        <a href=${destinations.link}>${destinations.country}</a>
      </p>
        <p class="date">${destinations.date}</p>

        </div>`
    )
    .join("");
}
filldestinationContainer();

function saveToLocalStorage() {
  const myJsonString = JSON.stringify(destinations);
  localStorage.setItem("Destinations", myJsonString);
}

function loadFromLocalStorage() {
  const myJsonString = localStorage.getItem("Destinations");
  if (myJsonString) {
    destinations = JSON.parse(myJsonString);
  }
}

loadFromLocalStorage();
filldestinationContainer();

function deleteFromLocalStorage() {
  localStorage.removeItem("Destinations");
}

// WEATHER API

const weatherBox = document.querySelector("#weatherBox");

for (let i = 0; i < destinations.length; i++) {
  const cityAI = destinations[i].location;
  console.log(cityAI);

  cityAI.addEventListener("click", function () {
    const cityName = cityAI.innerHTML;

    getWeatherData(cityName);
  });
}

function getWeatherData(cityName) {
  const apiKey = "4d52d38088073627a3b3628993c298c0";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(URL)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result);
      weatherBox.innerHTML = `The weather in ${cityName} is ${result.main.temp}`;
    });
}

// const localWeather = document.querySelector(".weatherApi");
// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=Paris,FR&appid=4d52d38088073627a3b3628993c298c0"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     localWeather.innerHTML = data.results
//       .map((location) => `<li>${location.q}</li>`)
//       .join("");
//   });

// function weatherBalloon(cityID) {
//   var key = "4d52d38088073627a3b3628993c298c0";
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?id=" +
//       cityID +
//       "&appid=" +
//       key
//   )
//     .then(function (resp) {
//       return resp.json();
//     }) // Convert data to json
//     .then(function (data) {
//       console.log(data);
//     })
//     .catch(function () {
//       // catch any errors
//     });
// }

// window.onload = function () {
//   weatherBalloon(cityAI);
// };
