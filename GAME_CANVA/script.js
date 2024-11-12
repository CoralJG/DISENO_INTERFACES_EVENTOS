function añadirAlCarrito() {
    const juego = {
        titulo: document.getElementById('title').textContent,
        descripcion: document.getElementById('description').textContent,
        precio: document.getElementById('price').textContent,
        imagen: document.getElementById('image').src
    };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(juego);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = '../Paula_landing_wishlist/carrito.html';
}

function añadirAWishlist() {
    const juego = {
        titulo: document.getElementById('title').textContent,
        descripcion: document.getElementById('description').textContent,
        precio: document.getElementById('price').textContent,
        imagen: document.getElementById('image').src
    };

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.push(juego);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert("Juego añadido a la wishlist");
}

document.getElementById('addCarrito').addEventListener('click', añadirAlCarrito);
document.getElementById('addWishlist').addEventListener('click', añadirAWishlist);