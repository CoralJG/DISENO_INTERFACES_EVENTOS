document.addEventListener('DOMContentLoaded', () => {
    const carritoIcon = document.querySelector('.fa-cart-shopping');
    const wishlistIcon = document.querySelector('.fa-heart');
    const accountIcon = document.querySelector('.fa-user');
    const addwishlistButton = document.getElementById('addWishlist');

    carritoIcon.addEventListener('click', () => {
        window.location.href = 'carrito.html'; 
    });

    wishlistIcon.addEventListener('click', () => {
        window.location.href = 'whishlist.html'; 
    });

    accountIcon.addEventListener('click', () => {
        window.location.href = 'account.html'; 
    });

    addwishlistButton.addEventListener('click', () => {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const title = document.getElementById('title').textContent;
        const description = document.getElementById('description').textContent;
        const price = document.getElementById('price').textContent;
        const image = document.getElementById('image').src;

        const product = {
            name: title,
            description: description,
            price: price,
            image: image
        };

        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        alert('¡Producto añadido a la wishlist ✅!');
    });
});
