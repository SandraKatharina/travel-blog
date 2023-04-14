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
        <a href="http://127.0.0.1:5500/travel-blog/index.html#destinationDetails"
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

function clearText() {
  const allInputFields = document.querySelectorAll(".inputField");
  allInputFields.value = "";
}

// WEATHER API

function updateListeners() {
  // Helder: find all `divs` with the class destination so we can loop through them
  // find the cityName based on the data-city element and then add a click listener to update
  // weatherMap info
  const destinationCards = document.querySelectorAll(".destination");

  // console.log(destinationCards);

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
        src=${currentDestination.imageSrc}
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
    // detailImageSrc:
    //   "http://127.0.0.1:5500/travel-blog/img/marocco-marrakech-boucharouite-window.jpg",
    titel: "–– most beautiful traditional way of Upcycling",
    location: "Marrakech",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi modi porro cumque necessitatibus consectetur quaeratb landitiis est odio recusandae nam deserunt omnis quisquam dolorum adlabore nisi molestias, eum soluta.",
    country: "Marocco",
    date: "march 2018",
  },
  {
    imageSrc:
      "http://127.0.0.1:5500/travel-blog/img/france-paris-deco-off-bistro-detail.jpg",
    // detailImageSrc:
    //   "http://127.0.0.1:5500/travel-blog/img/france-paris-deco-off-fornasetti.jpg",
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
  clearText();
});

function deleteLastDestination() {
  destinations.pop();
  saveToLocalStorage();
}

deleteButton.addEventListener("click", function () {
  deleteLastDestination();
  saveToLocalStorage();
  // filldestinationContainer();
  location.reload();
});

// Helder: moved weatherBox here, so it can be accessed in all functions
const weatherBox = document.querySelector("#weatherBox");
const destinationsBox = document.querySelector("#destinationsBox");
const destinationsTitelBox = document.querySelector("#destinationsTitelBox");

// APPLICATION START
loadFromLocalStorage();
filldestinationContainer();
updateListeners();
