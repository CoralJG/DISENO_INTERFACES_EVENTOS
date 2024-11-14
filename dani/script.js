let contenedor= document.querySelector('.productos');
const array1 = ['a', 'b', 'c', 'd'];

array1.forEach((item) => {
    contenedor.innerHTML += `
        <div class="producto">
            <img src="../img/fortnite.jpg" alt="Imagen del juego">
            <div class="titulo">
                <h2>${item.titulo}</h2>
                <p>Pequeño resumen</p>
            </div>
            <h1>Precio</h1>
        </div>`;
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