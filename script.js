document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    products.forEach(product => {
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Add to Cart';
        buyButton.classList.add('buy-btn');
        
        product.appendChild(buyButton);

        buyButton.addEventListener('click', () => {
            cartCount++;
            
            cartCountElement.textContent = cartCount;

            buyButton.textContent = "Added!";
            setTimeout(() => {
                buyButton.textContent = "Add to Cart";
            }, 500);
        });
    });

    const footer = document.getElementById('footer-text');
});