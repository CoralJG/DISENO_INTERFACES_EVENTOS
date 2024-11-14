// Función que se ejecuta cuando se hace clic en "Añadir al carrito"
function añadirAlCarrito(evento) {
    const contenedorJuego = evento.target.closest('.wishlist_container_gris');
    const juego = {
        titulo: contenedorJuego.querySelector('.wishlist_title h2').textContent,
        precio: contenedorJuego.querySelector('.Wishlist_price h3').textContent,
        imagen: contenedorJuego.querySelector('.wishlist_img img').src,
        description: contenedorJuego.querySelector('.Wishlist_description').textContent
    };
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(juego);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = 'carrito.html';
}
// Función para mostrar los productos en el wishlist
function mostrarWhislist() {
    const contenedorWhislist = document.querySelector('.wishlist_container_flex');
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    contenedorWhislist.innerHTML = '';
    wishlist.forEach((juego) => {
        const productoHTML = `
            <div class="wishlist_container_gris">
            <div class="wishlist_img"><img src="${juego.image}" alt=""></div>
            <div class="wishlist_title">
            <h2>${juego.name}</h2>
            </div>
            <div class="Wishlist_price">
            <h3>${juego.price}</h3>
            </div>
            <div class="Wishlist_rating">
            <div><img src="./img/pegi.png" alt=""></div>
            <div class="Wishlist_pegi">
            <h4>PEGI 16</h4>
            <p>Strong Violence</p>
            <p class="Wishlist_description">${juego.description}</p>
            </div>
            </div>
            <div class="Wishlist_buttons">
            <button class="wishlist_btn_delete">Eliminar</button>
            <button class="wishlist_btn_add">Añadir al carrito</button>
            </div>
            </div>
        `;
        contenedorWhislist.innerHTML += productoHTML;
    });
 
    document.querySelectorAll('.wishlist_btn_delete').forEach(boton => {
        boton.addEventListener('click', eliminarWhishlist);
    });
    // Selecciona todos los botones "Añadir al carrito" en la página
    document.querySelectorAll('.wishlist_btn_add').forEach(boton => {
        boton.addEventListener('click', añadirAlCarrito);
    });
 
}
 
// Función para eliminar un elemento del wishlist
function eliminarWhishlist(evento) {
    const index = evento.target.dataset.index;
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    mostrarWhislist();
}
 

// Cargar el wishlist al cargar el contenido de la página
document.addEventListener('DOMContentLoaded', mostrarWhislist);



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