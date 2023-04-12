// FUNCTION ON TOP

function filldestinationContainer() {
  const destinationContainer = document.querySelector(".destinationContainer");
  destinationContainer.innerHtml = "";

  destinationContainer.innerHTML = destinations
    .map(
      // Helder: added data-city to the `div` so we know with ease which city was clicked
      // removed all the href from `a` tags since they were not being used, and were causing issues
      (
        destinations
      ) => ` <div class="destination" data-city="${destinations.location}">
        <a
        ><img
          src=${destinations.imageSrc}
        
      /></a>
        <a href="http://127.0.0.1:5500/travel-blog/index.html#destinationDetails"
        ><h1>${destinations.location}</h1></a
      >
        <p class="country">
        <a>${destinations.country}</a>
      </p>
        <p class="date">${destinations.date}</p>

        </div>`
    )
    .join("");
}

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

function deleteFromLocalStorage() {
  localStorage.removeItem("Destinations");
}

// WEATHER API

function updateListeners() {
  // Helder: find all `divs` with the class destination so we can loop through them
  // find the cityName based on the data-city element and then add a click listener to update
  // weatherMap info
  const destinationCards = document.querySelectorAll(".destination");

  console.log(destinationCards);

  for (let i = 0; i < destinationCards.length; i++) {
    // Helder: because we added data-city on the HTML we can now easily read the city from the div attribute
    // (data-city in HTML can be read as dataset.city in Javascript)
    // const cityName = destinationCards[i].dataset.city;

    const currentDestination = destinations[i];
    console.log(currentDestination);
    const cityName = currentDestination.location;

    destinationCards[i].addEventListener("click", function () {
      getWeatherData(cityName);
      // alert(currentDestination);
      destinationsBox.innerHTML = `
      <div><img
        src=${currentDestination.detailImageSrc}
    /></div>`;
      destinationsTitelBox.innerHTML = `<h1>${currentDestination.location}</h1>
      <h2>${currentDestination.titel}</h2>
      <p id="descriptionP">${currentDestination.description}`;
    });
  }
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
      weatherBox.innerHTML = `<h1>The temperature in ${cityName} is ${result.main.temp} degrees Celsius</h1>`;
    });
}

// ASIDE MENU

const buttonShowMenu = document.getElementById("buttonShowMenu");
const buttonHideMenu = document.getElementById("buttonHideMenu");

const aside = document.getElementById("aside");

buttonShowMenu.addEventListener("click", function () {
  aside.classList.remove("hidden");
});

buttonHideMenu.addEventListener("click", function () {
  aside.classList.add("hidden");
});

// DEFAULT LOCATIONS (ORIGINAL ARRAY)

let destinations = [
  {
    imageSrc:
      "http://127.0.0.1:5500/travel-blog/img/marocco-marrakech-boucharouite-closeup.jpg",
    detailImageSrc:
      "http://127.0.0.1:5500/travel-blog/img/marocco-marrakech-boucharouite-window.jpg",
    titel: "–– most beautiful traditional way of Upcycling",
    location: "Marrakech",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.",
    country: "Marocco",
    date: "march 2018",
  },
  {
    imageSrc:
      "http://127.0.0.1:5500/travel-blog/img/france-paris-deco-off-bistro-detail.jpg",
    detailImageSrc:
      "http://127.0.0.1:5500/travel-blog/img/france-paris-deco-off-fornasetti.jpg",
    titel: "–– colorful patters at Paris Deco Off",
    location: "Paris",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.",
    country: "France",
    date: "january 2019",
  },
];

// EVENT LISTENER FOR FORM

addButton.addEventListener("click", function () {
  const newDestination = {
    imageSrc: imageInput.value,
    titel: inputTitle.value,
    location: inputCity.value,
    description: inputDescription.value,
    country: inputCountry.value,
    date: inputDate.value,
  };

  destinations.push(newDestination);
  saveToLocalStorage();
  filldestinationContainer();

  // Helder: update the listeners so the newly added cities can be clicked for weather Info too
  updateListeners();
});

// Helder: moved weatherBox here, so it can be accessed in all functions
const weatherBox = document.querySelector("#weatherBox");
const destinationsBox = document.querySelector("#destinationsBox");
const destinationsTitelBox = document.querySelector("#destinationsTitelBox");

// APPLICATION START
loadFromLocalStorage();
filldestinationContainer();
updateListeners();

// const buttonShowMenu = document.getElementById("buttonShowMenu");
// const buttonHideMenu = document.getElementById("buttonHideMenu");

// const aside = document.getElementById("aside");

// buttonShowMenu.addEventListener("click", function () {
//   aside.classList.remove("hidden");
// });

// buttonHideMenu.addEventListener("click", function () {
//   aside.classList.add("hidden");
// });

// // Original Array

// let destinations = [
//   {
//     imageSrc:
//       "http://127.0.0.1:5500/travel-blog/img/marocco-marrakech-boucharouite-closeup.jpg",
//     titel: "Marrakech–– most beautiful traditional way of Upcycling",
//     location: "Marrakech",
//     country: "Marocco",
//     date: "march 2018",
//   },
//   {
//     imageSrc:
//       "http://127.0.0.1:5500/travel-blog/img/france-paris-deco-off-bistro-detail.jpg",
//     titel: "Paris–– colorful patters at Paris Deco Off",
//     location: "Paris",
//     country: "France",
//     date: "january 2019",
//   },
// ];

// // Event Listeners

// addButton.addEventListener("click", function () {
//   const newDestination = {
//     imageSrc: imageInput.value,
//     titel: inputTitle.value,
//     location: inputCity.value,
//     country: inputCountry.value,
//     date: inputDate.value,
//   };

//   destinations.push(newDestination);
//   filldestinationContainer();
//   saveToLocalStorage();
// });

// // Functions

// function filldestinationContainer() {
//   const destinationContainer = document.querySelector(".destinationContainer");
//   destinationContainer.innerHtml = "";

//   destinationContainer.innerHTML = destinations
//     .map(
//       (destinations) => ` <div class="destination">
//         <a href=""
//         ><img
//           src=${destinations.imageSrc}

//       /></a>
//         <a href=""
//         ><h1>${destinations.location}</h1></a
//       >
//         <p class="country">
//         <a href=${destinations.link}>${destinations.country}</a>
//       </p>
//         <p class="date">${destinations.date}</p>

//         </div>`
//     )
//     .join("");
// }
// filldestinationContainer();

// function saveToLocalStorage() {
//   const myJsonString = JSON.stringify(destinations);
//   localStorage.setItem("Destinations", myJsonString);
// }

// function loadFromLocalStorage() {
//   const myJsonString = localStorage.getItem("Destinations");
//   if (myJsonString) {
//     destinations = JSON.parse(myJsonString);
//   }
// }

// loadFromLocalStorage();
// filldestinationContainer();

// function deleteFromLocalStorage() {
//   localStorage.removeItem("Destinations");
// }

// // WEATHER API

// const weatherBox = document.querySelector("#weatherBox");

// for (let i = 0; i < destinations.length; i++) {
//   const cityAI = destinations[i].location;
//   console.log(cityAI);

//   cityAI.addEventListener("click", function () {
//     const cityName = cityAI.innerHTML;

//     getWeatherData(cityName);
//   });
// }

// function getWeatherData(cityName) {
//   const apiKey = "4d52d38088073627a3b3628993c298c0";
//   const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

//   fetch(URL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (result) {
//       console.log(result);
//       weatherBox.innerHTML = `The weather in ${cityName} is ${result.main.temp}`;
//     });
// }

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
