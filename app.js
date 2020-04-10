const menu = document.getElementById("menu-header");
const paw_Button = document.getElementById("pawId");
const my_Modal = document.getElementById("myModal");
const li_cat = document.getElementById("cats-btn");
const li_dog = document.getElementById("dogs-btn");
const dog_cont = document.getElementById("dogs-cont");
const cat_cont = document.getElementById("cats-cont");

paw_Button.addEventListener("click", responsiveMenu);
my_Modal.addEventListener("click", removeBurgerMenu);

// Responsive menu

function responsiveMenu(ev) {
  menu.classList.toggle("visibility");
  my_Modal.classList.toggle("modal");
}
//Remove responsive menu modal
function removeBurgerMenu(ev) {
  menu.classList.add("visibility");
  my_Modal.classList.remove("modal");
}
