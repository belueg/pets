var n = document.getElementById("user-name");
var menu = document.getElementById("menu-header");
var b = document.getElementById("button");
var print = document.getElementById("print-nombre");

var name;
var notVisible = true;

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
