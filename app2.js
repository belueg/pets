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

//change animals gallery

li_cat.addEventListener("click", showCats);
li_dog.addEventListener("click", showDogs);

function showCats(ev) {
  if (cat_cont.classList.contains("invisible")) {
    cat_cont.classList.remove("invisible");
    dog_cont.classList.add("invisible");
    li_cat.classList.add("selected");
    li_dog.classList.remove("selected");
  }
}

function showDogs(ev) {
  if (dog_cont.classList.contains("invisible")) {
    dog_cont.classList.remove("invisible");
    cat_cont.classList.add("invisible");
    li_dog.classList.add("selected");
    li_cat.classList.remove("selected");
  }
}
