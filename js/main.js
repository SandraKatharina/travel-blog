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

// Functions

function filldestinationContainer() {
  const destinationContainer = document.querySelector(".destinationContainer");

  destinationContainer.innerHtml = "";
  for (let i = 0; i < destinations.length; i++) {
    const newDestination = `
        <div class="destination">
            <img src="${destinations[i].imageSrc}">
            <h1>"${destinations[i].titel}"</h1>
            <p>"${destinations[i].country}"</p>
            <p>"${destinations[i].date}"</p>
        </div>`;
    // console.log(newDestination);
    destinationContainer.innerHtml = newDestination;
  }
}
filldestinationContainer();
