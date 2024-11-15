function mostrarBiblioteca() {
    const contenedorJuegos = document.querySelector('.list_games');
    const biblioteca = JSON.parse(localStorage.getItem('libreria')) || [];
    contenedorJuegos.innerHTML = '';

    biblioteca.forEach((juego, index) => {
        const juegoHTML = `
            <div class="games-container">
                <div class="games" 
                     data-index="${index}" 
                     style="background-image: url(${juego.imagen});">
                </div>
                <div class="delete-cont">
                    <button id="instal">Install</button>
                    <button id="del" data-index="${index}">Delete</button>
                </div>
            </div>
        `;
        contenedorJuegos.innerHTML += juegoHTML;
    });

    const gamesCards = document.querySelectorAll('.games');
    const deleteConts = document.querySelectorAll('.delete-cont');

    gamesCards.forEach((games_cont, index) => {
        games_cont.addEventListener('click', () => {
            deleteConts.forEach((menu, menuIndex) => {
                if (menuIndex !== index) {
                    menu.style.opacity = '0';
                    menu.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        menu.style.display = 'none';
                    }, 2000); 
                }
            });

            const deleteCont = deleteConts[index];
            if (deleteCont.style.display === 'none' || !deleteCont.style.display) {
                deleteCont.style.display = 'block';
                setTimeout(() => {
                    deleteCont.style.opacity = '1';
                    deleteCont.style.transform = 'translateY(0)';
                }, 10);
            } else {
                deleteCont.style.opacity = '0';
                deleteCont.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    deleteCont.style.display = 'none';
                }, 2000);
            }
        });
    });

    document.querySelectorAll('#del').forEach(button => {
        button.addEventListener('click', eliminarJuego);
    });
    document.querySelectorAll('#instal').forEach(button => {
        button.addEventListener('click', alert_install);
    });
}

function alert_install() {
    alert('Juego instalado');
}

function eliminarJuego(event) {
    const index = event.target.dataset.index;
    let biblioteca = JSON.parse(localStorage.getItem('libreria')) || [];
    biblioteca.splice(index, 1);
    localStorage.setItem('libreria', JSON.stringify(biblioteca));
    mostrarBiblioteca();
}

document.addEventListener('DOMContentLoaded', mostrarBiblioteca);
