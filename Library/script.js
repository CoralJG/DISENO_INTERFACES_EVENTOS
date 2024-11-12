const showLibrary =  () => {
	const gameContainer = document.querySelector('#list_games');
	const games = JSON.parse(localStorage.getItem('biblioteca')) || [];
	
	games.forEach((juego) =>{
		const htmlAdd = `
			<div class="items">
				<img src="${juego.imagen}" alt="${juego.titulo}">
				<div class="description-game">
					<h3>${juego.titulo}</h3>
					<p>${juego.description}</p>
					<button class="del">Delete</button>
				</div>
			</div>`;

			gameContainer.innerHTML += htmlAdd;
	});

	const deleteButtons = document.querySelectorAll('.del');
	deleteButtons.forEach(button => {
		button.addEventListener('click', delProduct);
	});
}

const delProduct = (event) =>{
	const index = event.target.dataset.index;

	let games = JSON.parse(localStorage.getItem('biblioteca')) || [];

	games.splice(index,1);

	localStorage.setItem('biblioteca',JSON.stringify(games));

	showLibrary();
}

document.addEventListener('DOMContentLoaded',showLibrary);
