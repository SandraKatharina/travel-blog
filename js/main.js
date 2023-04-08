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
  //   console.log(newDestination);
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

// //   destinationContainer.innerHtml = "";
//   for (let i = 0; i < destinations.length; i++) {
//     const newDestination = `
//         <div class="destination">
//             <img src="${destinations[i].imageSrc}">
//             <h1>"${destinations[i].titel}"</h1>
//             <p>"${destinations[i].country}"</p>
//             <p>"${destinations[i].date}"</p>
//         </div>`;
//     // console.log(newDestination);
//     destinationContainer.innerHtml = newDestination;
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
