var n = document.getElementById("user-name");
var name;

var b = document.getElementById("button");
var print = document.getElementById("print-nombre");

b.addEventListener("click", saludar);

function saludar() {
  name = n.value;
  if (name) {
    print.innerHTML = `Hola! ${name}, te damos la bienvenida a Ado-mascotas.<br> Esperamos que encuentres tu compañero perfecto`;
    n.value = null;
  } else {
    print.innerHTML = " ";
  }
}
