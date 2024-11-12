function mostrarPerfil() {
    const profileImage = document.getElementById('profileImage');
    const profileName = document.getElementById('profileName');
    const perfil = JSON.parse(localStorage.getItem('perfil')) || { name: 'KurtleTurtle', image: './img/fortnite.jpg' };
    profileName.textContent = perfil.name;
    profileImage.src = perfil.image;
    document.getElementById('name').value = perfil.name;
    document.getElementById('image').value = perfil.image;
}

function actualizarPerfil(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const imageInput = document.getElementById('image');

    const newName = nameInput.value;
    const newImage = imageInput.value;

    const perfil = { name: newName, image: newImage };
    localStorage.setItem('perfil', JSON.stringify(perfil));
    mostrarPerfil();
    cerrarModal();
}

function mostrarModal() {
    document.getElementById('editProfileModal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('editProfileModal').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarPerfil();
    document.getElementById('editProfileBtn').addEventListener('click', mostrarModal);
    document.querySelector('.close').addEventListener('click', cerrarModal);
    document.getElementById('editProfileForm').addEventListener('submit', actualizarPerfil);

    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('editProfileModal')) {
            cerrarModal();
        }
    });
});
