var li_cat = document.getElementById("cats-btn");
var li_dog = document.getElementById("dogs-btn");
var dog_cont = document.getElementById("dogs-cont");
var cat_cont = document.getElementById("cats-cont");
var menu = document.getElementById("menu-header");
var notVisible = true;

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

// Responsive menu

function burger() {
  if (notVisible) {
    menu.classList.remove("visibility");
    notVisible = false;
  } else {
    menu.classList.add("visibility");
    notVisible = true;
  }
}
