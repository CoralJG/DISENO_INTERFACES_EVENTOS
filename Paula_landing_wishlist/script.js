
//Movimiento Carrusel
document.addEventListener('DOMContentLoaded', function () {
  const carrusel = document.getElementById('items');
  const items = carrusel.getElementsByClassName('item');
  const totalItems = items.length;
  let index = 0;

  // Función para mostrar el siguiente item en el carrusel
  function mostrarSiguiente() {
      // Ocultar el elemento actual
      items[index].classList.remove('active');
      // Calcular el siguiente índice
      index = (index + 1) % totalItems;
      // Mostrar el siguiente elemento
      items[index].classList.add('active');
      
      // Mover el carrusel para mostrar el siguiente item
      carrusel.style.transform = `translateX(-${index * 100}%)`;
  }

  // Iniciar el carrusel automático cada 3 segundos
  setInterval(mostrarSiguiente, 3000); // Cambia cada 3 segundos

  // Inicializa el primer elemento
  items[index].classList.add('active');
});


// Buscador
const listaJuegos = document.getElementById("listaJuegos");
const buscador = document.getElementById("buscador");

// Asegúrate de que la lista de juegos esté oculta inicialmente
listaJuegos.style.display = 'none';

document.addEventListener("keyup", e => {
  if (e.target.matches("#buscador")) {
    if (e.key === "Escape") {
      e.target.value = "";
      listaJuegos.style.display = 'none';
    }

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

// Cerrar el modal al hacer clic fuera de él
document.addEventListener('click', function(event) {
  if (!listaJuegos.contains(event.target) && event.target !== buscador) {
    listaJuegos.style.display = 'none';
    buscador.value = ''; // Opcional: limpiar el campo de búsqueda
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

function gamePage1(){
  document.getElementById('gamePage1').addEventListener('click', gamePage1);
  window.location.href = '../GAME_CANVA/game1.html';
}

function gamePage2(){
  document.getElementById('gamePage2').addEventListener('click', gamePage2);
  window.location.href = '../GAME_CANVA/game1.html';
}

function gamePage3(){
  document.getElementById('gamePage3').addEventListener('click', gamePage3);
  window.location.href = '../GAME_CANVA/game1.html';
}

function gamePage4(){
  document.getElementById('gamePage4').addEventListener('click', gamePage4);
  window.location.href = '../GAME_CANVA/game1.html';
}


// Seleccionar el campo de búsqueda
const searchInput = document.querySelector('.buscador');

// Aplicar evento focus
searchInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#331a38';
    this.style.outline = '2px solid #007bff';
});

// Aplicar evento blur
searchInput.addEventListener('blur', function() {
    this.style.backgroundColor = '';
    this.style.outline = '';
});