var movement = document.getElementById("items");
var maxScrollLeft = movement.scrollWidth - movement.clientWidth;
var intervalo;

const start = () => {
let step = 1;
  intervalo = setInterval(function () {
    movement.scrollLeft = movement.scrollLeft + step;
	if (movement.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (movement.scrollLeft === 0) {
      step = step * -1; 
    }
  }, 10);
};

//start();


document.addEventListener("keyup", e => {
  if (e.target.matches("#buscador")) {
      const listaJuegos = document.getElementById("listaJuegos");

      if (e.key === "Escape") e.target.value = "";

      const textoBusqueda = e.target.value.toLowerCase();

      document.querySelectorAll(".juego").forEach(juego => {
          const coincide = juego.textContent.toLowerCase().includes(textoBusqueda);
          juego.classList.toggle("filtro", !coincide);
      });

      // Mostrar u ocultar la lista de juegos
      if (textoBusqueda.length > 0) {
          listaJuegos.style.display = 'block';
      } else {
          listaJuegos.style.display = 'none';
      }
  }
});

// Cerrar la lista si se hace clic fuera de ella
document.addEventListener('click', function(event) {
  const listaJuegos = document.getElementById("listaJuegos");
  const buscador = document.getElementById("buscador");
  if (!listaJuegos.contains(event.target) && event.target !== buscador) {
      listaJuegos.style.display = 'none';
  }
});



function landingPage(){
  document.getElementById('landingPage').addEventListener('click', landingPage);
  window.location.href = '../Paula_landing_wishlist/index.html';
}

function accountPage(){
  document.getElementById('accountPage').addEventListener('click', accountPage);
  window.location.href = '../ACCOUNT/account.html';
}

function cartPage(){
  document.getElementById('cartPage').addEventListener('click', cartPage);
  window.location.href = '../Paula_landing_wishlist/carrito.html';
}

function libraryPage(){
  document.getElementById('libraryPage').addEventListener('click', libraryPage);
  window.location.href = '../Library/index.html';
}