const buttonShowMenu = document.getElementById("buttonShowMenu");
const buttonHideMenu = document.getElementById("buttonHideMenu");

const aside = document.getElementById("aside");

buttonShowMenu.addEventListener("click", function () {
  aside.classList.remove("hidden");
});

buttonHideMenu.addEventListener("click", function () {
  aside.classList.add("hidden");
});
