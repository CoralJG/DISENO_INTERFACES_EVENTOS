// Función que se ejecuta cuando se hace clic en "Añadir al carrito"
function añadirAlCarrito(evento) {
    // Obtiene el contenedor del juego que contiene el botón clicado
    const contenedorJuego = evento.target.closest('.wishlist_container_gris');
    
    // Crea un objeto con la información del juego: título, precio e imagen
    const juego = {
        titulo: contenedorJuego.querySelector('.wishlist_title h2').textContent,
        precio: contenedorJuego.querySelector('.Wishlist_price h3').textContent,
        imagen: contenedorJuego.querySelector('.wishlist_img img').src
    };
    
    // Recupera el carrito actual del localStorage o crea uno nuevo si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Añade el juego al carrito
    carrito.push(juego);
    
    // Guarda el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Redirige a la página del carrito
    window.location.href = 'carrito.html';
}

// Selecciona todos los botones "Añadir al carrito" en la página
document.querySelectorAll('.wishlist_btn_add').forEach(boton => {
    // Añade un evento click a cada botón que ejecuta la función añadirAlCarrito
    boton.addEventListener('click', añadirAlCarrito);
});