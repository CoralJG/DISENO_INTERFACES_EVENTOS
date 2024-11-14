function mostrarBiblioteca() {
    const contenedorJuegos = document.querySelector('.list_games');
    const biblioteca = JSON.parse(localStorage.getItem('libreria')) || [];
    contenedorJuegos.innerHTML = '';
    biblioteca.forEach((juego, index) => {
        const juegoHTML = `
            <div class="games">
                <img src="${juego.imagen}" alt="${juego.titulo}">
                <div class="description-game">
                    <h3>${juego.titulo}</h3>
                    <p>${juego.description}</p>
                    <button class="del" data-index="${index}">Delete</button>
                </div>
            </div>
        `;
        contenedorJuegos.innerHTML += juegoHTML;
    });

    document.querySelectorAll('.del').forEach(boton => {
        boton.addEventListener('click', eliminarJuego);
    });
}
function eliminarJuego(event) {
    const index = event.target.dataset.index;
    let biblioteca = JSON.parse(localStorage.getItem('libreria')) || [];
    biblioteca.splice(index, 1);
    localStorage.setItem('libreria', JSON.stringify(biblioteca));
    mostrarBiblioteca();
}

document.addEventListener('DOMContentLoaded', mostrarBiblioteca);
