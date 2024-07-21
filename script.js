// Array of products
const products = [
    {
        id: 0,
        image: '1.jpg',
        title: 'iPhone 15 Pro Max',
        price: 1083,
        description: 'The latest iPhone with advanced features and high performance.',
        reviews: '★★★★☆'
    },
    {
        id: 1,
        image: '2.jpg',
        title: 'Bluetooth AirPods',
        price: 10,
        description: 'High-quality wireless earbuds with excellent sound quality.',
        reviews: '★★★☆☆'
    },
    {
        id: 2,
        image: '3.png',
        title: 'INSTAX Cameras ',
        price: 59,
        description: 'A powerful camera perfect for both beginners and professionals.',
        reviews: '★★★★★'
    },
    {
        id: 3,
        image: '4.jpg',
        title: 'Head Phones',
        price: 119,
        description: 'Comfortable headphones with superior sound quality and noise cancellation.',
        reviews: '★★★★☆'
    },
    {
        id: 4,
        image: '5.jpg',
        title: 'Smartwatch',
        price: 29,
        description: 'A sleek smartwatch with various health tracking features.',
        reviews: '★★★★☆'
    }
];

let cart = [];
let wishlist = [];

// Display products on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    displayCart();
    displayWishlist();
});

// Display Products Function
function displayProducts() {
    const root = document.getElementById('root');
    root.innerHTML = products.map((item, index) => {
        const { image, title, price, description, reviews } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image} alt=${title}>
                </div>
                <div class='bottom'>
                    <p class='title'><strong>${title}</strong></p>
                    <h2 class='price'>$${price}.00</h2>
                    <p class='description'>${description}</p>
                    <p class='reviews'>Reviews: <span>${reviews}</span></p>
                    <button onclick='addToCart(${index})'>Add to Cart</button>
                    <button onclick='addToWishlist(${index})'>Add to Wishlist</button>
                    <button onclick='submitReview(${index})'>Submit Review</button>
                </div>
            </div>`
        );
    }).join('');
}

// Add to Cart Function
function addToCart(index) {
    cart.push({ ...products[index] });
    displayCart();
    alert('Item added to cart!');
}

// Remove Cart Item Function
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Display Cart Function
function displayCart() {
    const cartItem = document.getElementById('cartItem');
    const totalElement = document.getElementById('total');
    let total = 0;

    if (cart.length === 0) {
        cartItem.innerHTML = 'Your cart is empty';
        totalElement.innerHTML = '$0.00';
    } else {
        cartItem.innerHTML = cart.map((item, index) => {
            const { image, title, price } = item;
            total += price;
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image} alt=${title}>
                    </div>
                    <p>${title}</p>
                    <h2>$${price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='removeFromCart(${index})'></i>
                </div>`
            );
        }).join('');
        totalElement.innerHTML = `$${total}.00`;
    }
}

// Add to Wishlist Function
function addToWishlist(index) {
    if (!wishlist.some(item => item.id === products[index].id)) {
        wishlist.push({ ...products[index] });
        displayWishlist();
        alert('Item added to wishlist!');
    } else {
        alert('Item already in wishlist!');
    }
}

// Remove Wishlist Item Function
function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    displayWishlist();
}

// Display Wishlist Function
function displayWishlist() {
    const wishlistItem = document.getElementById('wishlistItem');
    
    if (wishlist.length === 0) {
        wishlistItem.innerHTML = 'Your wishlist is empty';
    } else {
        wishlistItem.innerHTML = wishlist.map((item, index) => {
            const { image, title } = item;
            return (
                `<div class='wishlist-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image} alt=${title}>
                    </div>
                    <p>${title}</p>
                    <i class='fa-solid fa-trash' onclick='removeFromWishlist(${index})'></i>
                </div>`
            );
        }).join('');
    }
}

// Submit Review Function
function submitReview(index) {
    const review = prompt("Please enter your review:");
    if (review) {
        products[index].reviews = review;
        displayProducts();
        alert('Review submitted!');
    }
}

// Search Products Function
function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.box');
    items.forEach(item => {
        const name = item.querySelector('.bottom .title').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Show Login Modal Function
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

// Close Login Modal Function
function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// Show Subscribe Modal Function
function showSubscribe() {
    document.getElementById('subscribeModal').style.display = 'block';
}

// Close Subscribe Modal Function
function closeSubscribe() {
    document.getElementById('subscribeModal').style.display = 'none';
}

// Show Wishlist Modal Function
function showWishlist() {
    document.getElementById('wishlistModal').style.display = 'block';
}

// Close Wishlist Modal Function
function closeWishlist() {
    document.getElementById('wishlistModal').style.display = 'none';
}

// Login Form Submit Handler
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
    closeLogin();
});

// Subscribe Form Submit Handler
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Subscribed successfully!');
    closeSubscribe();
});