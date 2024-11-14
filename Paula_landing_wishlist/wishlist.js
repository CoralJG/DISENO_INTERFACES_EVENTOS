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

function mostrarWhislist() {
    const contenedorWhislist = document.querySelector('.wishlist_container_flex');
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    contenedorWhislist.innerHTML = '';
    wishlist.forEach((juego, index) => {
        const productoHTML = `
            <div class="wishlist_container_gris">
                <div class="wishlist_img"><img src="${juego.imagen}" alt="${juego.titulo}"></div>
                <div class="wishlist_title"><h2>${juego.titulo}</h2></div>
                <div class="Wishlist_price"><h3>${juego.precio}</h3></div>
                <div class="Wishlist_rating">
                    <div><img src="./img/pegi.png" alt="PEGI"></div>
                    <div class="Wishlist_pegi">
                        <h4>PEGI 16</h4>
                        <p>Strong Violence</p>
                        <p class="Wishlist_description">${juego.description}</p>
                    </div>
                </div>
                <div class="Wishlist_buttons">
                    <button class="wishlist_btn_delete" data-index="${index}">Eliminar</button>
                    <button class="wishlist_btn_add">Añadir al carrito</button>
                </div>
            </div>
        `;
        contenedorWhislist.innerHTML += productoHTML;
    });
    document.querySelectorAll('.wishlist_btn_delete').forEach(boton => {
        boton.addEventListener('click', eliminarWhishlist);
    });
    document.querySelectorAll('.wishlist_btn_add').forEach(boton => {
        boton.addEventListener('click', añadirAlCarrito);
    });
}
function eliminarWhishlist(evento) {
    const index = evento.target.dataset.index;
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    mostrarWhislist();
}

document.addEventListener('DOMContentLoaded', mostrarWhislist);


function landingPage() {
    window.location.href = '../Paula_landing_wishlist/index.html';
}
function accountPage() {
    window.location.href = '../ACCOUNT/account.html';
}
function cartPage() {
    window.location.href = '../Paula_landing_wishlist/carrito.html';
}
function libraryPage() {
    window.location.href = '../Library/index.html';
}
document.getElementById('landingPage').addEventListener('click', landingPage);
document.getElementById('accountPage').addEventListener('click', accountPage);
document.getElementById('cartPage').addEventListener('click', cartPage);
document.getElementById('libraryPage').addEventListener('click', libraryPage);
