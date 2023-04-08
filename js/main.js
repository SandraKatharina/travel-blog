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
    link: "http://127.0.0.1:5500/travel-blog/marocco.html",
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
  console.log(newDestination);
  destinations.push(newDestination);
  saveToLocalStorage();
});

// Functions

const destinationContainer = document.querySelector(".destinationContainer");

destinationContainer.innerHTML = destinations
  .map(
    (destinations) => ` <div class="destination">
        <a href=${destinations.link}
        ><img
          id="imgHigh"
          src=${destinations.imageSrc}
          alt="Boucharouite closeup"
      /></a>
        <a href=${destinations.link}
        ><h1>${destinations.titel}</h1></a
      >
        <p class="country">
        <a href=${destinations.link}>${destinations.country}</a>
      </p>
        <p class="date">${destinations.date}</p>
        <div id="divider" class="sectionDivider"></div>
        </div>`
  )
  .join("");

// function filldestinationContainer() {
//   const destinationContainer = document.querySelector(".destinationContainer");

//   destinationContainer.innerHtml = "";
//   for (let i = 0; i < destinations.length; i++) {
//     const newDestination = `<div class="destination">
//     <a href=${destinations[i].link}
//     ><img
//       id="imgHigh"
//       src=${destinations[i].imageSrc}
//       alt="Boucharouite closeup"
//   /></a>
//     <a href=${destinations[i].link}
//     ><h1>${destinations[i].titel}</h1></a
//   >
//     <p class="country">
//     <a href=${destinations[i].link}>${destinations[i].country}</a>
//   </p>
//     <p class="date">${destinations[i].date}</p>
//     <div id="divider" class="sectionDivider"></div>
//     </div>`;
//     console.log(newDestination);
//     destinationContainer.innerHtml += newDestination;
//   }
// }
// filldestinationContainer();

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

// const localWeather = document.querySelector(".weatherApi");
// fetch(
//   "https://api.openweathermap.org/data/2.5/weather?q=Paris,FR&appid={4d52d38088073627a3b3628993c298c0}"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     localWeather.innerHTML = data.results
//       .map((location) => `<li>${location.q}</li>`)
//       .join("");
//   });

// function weatherBalloon(cityID) {
//   var key = "{4d52d38088073627a3b3628993c298c0}";
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
//   weatherBalloon(6167865);
// };
