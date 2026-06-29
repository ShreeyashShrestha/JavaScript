const container = document.getElementById('products-container');

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        const products = await response.json();
        displayProducts(products);

    } catch (error) {
        console.error("Oops, something went wrong:", error);
        container.innerHTML = `<p>Failed to load products. Please try again later.</p>`;
    }
}

function displayProducts(products) {
    container.innerHTML = '';

    products.forEach(product => {
        // Create a card element for each item
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title.slice(0, 30)}...</h3>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;

        container.appendChild(card);
    });
}

fetchProducts();