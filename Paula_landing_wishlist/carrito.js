// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    // Selecciona el contenedor donde se mostrarán los productos
    const contenedorProductos = document.querySelector('.productos');
    
    // Selecciona el elemento donde se mostrará el total a pagar
    const totalElement = document.querySelector('.final');
    
    // Inicializa el total a 0
    let total = 0;

    // Recupera el carrito del localStorage o crea uno nuevo si no existe
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Limpia el contenido actual del contenedor de productos
    contenedorProductos.innerHTML = '';

    // Itera sobre cada juego en el carrito
    carrito.forEach((juego) => {
        // Crea un bloque HTML para cada producto y lo añade al contenedor
        const productoHTML = `
            <div class="producto">
                <img src="${juego.imagen}" alt="${juego.titulo}">
                <div class="info">
                    <h3>${juego.titulo}</h3>
                    <p>${juego.description}</p>
                </div>
                <div class="valor">
                    <p>${juego.precio}</p>
                </div>
                <button class="eliminar">Eliminar</button>
            </div>
        `;
        contenedorProductos.innerHTML += productoHTML;

        // Suma el precio del juego al total (asumiendo que está en formato '€')
        total += parseFloat(juego.precio.replace('€', '').trim());
    });

    // Actualiza el texto del total a pagar
    totalElement.textContent = total.toFixed(2) + ' €';

    // Añade eventos click a los botones "Eliminar" para eliminar productos del carrito
    document.querySelectorAll('.eliminar').forEach(boton => {
        boton.addEventListener('click', eliminarProducto);
    });
}

// Función para eliminar un producto del carrito
function eliminarProducto(evento) {
    // Obtiene el índice del producto a eliminar desde el atributo data-index del botón
    const index = evento.target.dataset.index;
    
    // Recupera el carrito del localStorage o crea uno nuevo si no existe
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Elimina el producto del array usando su índice
    carrito.splice(index, 1);
    
    // Guarda el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // Vuelve a mostrar el carrito actualizado
    mostrarCarrito();
    
}

function comprar(){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let libreria = JSON.parse(localStorage.getItem('libreria')) || [];
    carrito.forEach((compra) => {
        libreria.push(compra);
    }); 
    localStorage.setItem('libreria', JSON.stringify(libreria));
    localStorage.removeItem('carrito');
    window.location.href = '../Library/index.html';
}

// Ejecuta la función mostrarCarrito cuando se carga la página del carrito
document.addEventListener('DOMContentLoaded', mostrarCarrito);

let boton=document.querySelector('.boton').addEventListener('click', comprar);


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