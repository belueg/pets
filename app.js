var n = document.getElementById("user-name");
var menu = document.getElementById("menu-header");
var b = document.getElementById("button");
var print = document.getElementById("print-nombre");



var name;
var notVisible = true;

b.addEventListener("click", saludar);


// Form gretting

function saludar() {
  name = n.value;
  if (name) {
    print.innerHTML = `Hola! ${name}, te damos la bienvenida a +mascotas.<br> Esperamos que encuentres tu compañero perfecto`;
    n.value = null;
  } else {
    print.innerHTML = " ";
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



