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