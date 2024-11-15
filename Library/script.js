function mostrarBiblioteca() {
    const contenedorJuegos = document.querySelector('.list_games');
    const biblioteca = JSON.parse(localStorage.getItem('libreria')) || [];
    contenedorJuegos.innerHTML = '';
    biblioteca.forEach((juego) => {
        const juegoHTML = `
				<div class="games" style="background-image: url(${juego.imagen}); background-size:contain; background-repeat: no-repeat;">
            </div>
        `;
        contenedorJuegos.innerHTML += juegoHTML;
    });

	let games_cont = document.querySelector('.games');

	games_cont.addEventListener('click', () => {
		const new_html = 
		`<div class="delete_cont" style="opacity: 0; transform: translateY(20px); transition: opacity 2s ease, transform 2s ease;">
			<div style="padding:10px;">
				<button id="instal" style="width:100px; background-color:#02911F; border:none; height: 25px; border-radius: 5px; cursor: pointer;">Install</button>
				<button id="del" style="width:100px; margin-left:180px; background-color: #800000; border:none; height: 25px; border-radius: 5px; cursor: pointer;">Delete</button>
			</div>
		</div>`
		contenedorJuegos.innerHTML += new_html;
	  
		const newDiv = contenedorJuegos.querySelector('.delete_cont');
		
		setTimeout(() => {
		  newDiv.style.opacity = '1';
		  newDiv.style.transform = 'translateY(0)';
		}, 10);

		document.querySelectorAll('#del').forEach(boton => {
			boton.addEventListener('click', eliminarJuego);
		});

		document.querySelectorAll('#instal').forEach(boton => {
			boton.addEventListener('click', alert_install);
		});
	  });
}

function alert_install()
{
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
