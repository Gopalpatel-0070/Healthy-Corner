// healthy.js

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to navigation links
    var navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Hide all sections
            var sections = document.querySelectorAll("main section");
            sections.forEach(function (section) {
                section.classList.add("hidden");
            });

            // Show the selected section
            var targetId = link.getAttribute("href").substring(1);
            var targetSection = document.getElementById(targetId);
            targetSection.classList.remove("hidden");
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // Search Functionality
    document.getElementById('search-button').addEventListener('click', () => {
        const searchQuery = document.getElementById('search-bar').value.toLowerCase();
        const sections = document.querySelectorAll('main section');
        
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            section.style.display = text.includes(searchQuery) ? 'block' : 'none';
        });
    });

    

    // Smooth Scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Date in Footer
    document.querySelector('footer').innerText += ` - ${new Date().getFullYear()}`;

});
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and the recipe boxes
    var hideButton = document.getElementById('hide-recipes-button');
    var recipeBoxes = document.querySelectorAll('#nutrition .content-box');

    // Define the click event listener
    hideButton.addEventListener('click', function() {
        recipeBoxes.forEach(function(box) {
            if (box.style.display === 'none') {
                box.style.display = '';  // Show the recipe box
                hideButton.textContent = 'Hide Recipes';
            } else {
                box.style.display = 'none';  // Hide the recipe box
                hideButton.textContent = 'Show Recipes';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and the workout boxes
    var hideWorkoutsButton = document.getElementById('hide-workouts-button');
    var workoutBoxes = document.querySelectorAll('#fitness .content-box');

    // Define the click event listener
    hideWorkoutsButton.addEventListener('click', function() {
        workoutBoxes.forEach(function(box) {
            if (box.style.display === 'none') {
                box.style.display = '';  // Show the workout box
                hideWorkoutsButton.textContent = 'Hide Workouts';
            } else {
                box.style.display = 'none';  // Hide the workout box
                hideWorkoutsButton.textContent = 'Show Workouts';
            }
        });
    });
});

document.getElementById('toggle-tips-button').addEventListener('click', function () {
    var tipsSection = document.getElementById('tipsSection');
    tipsSection.style.display = (tipsSection.style.display === 'none' || tipsSection.style.display === '') ? 'block' : 'none';
});
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;
    const customerName = document.getElementById('customerName').value;
    const customerEmail = document.getElementById('customerEmail').value;

    // Simple validation to ensure all fields are filled
    if (productName && quantity && customerName && customerEmail) {
        document.getElementById('orderMessage').innerText = `Thank you, ${customerName}. Your order for ${quantity} unit(s) of ${productName} has been received and a confirmation email is sent to ${customerEmail}.`;

        // Optionally, you can implement logic to send order details to a server or an email address here.

        // Clear the form fields after submission
        this.reset();
    } else {
        document.getElementById('orderMessage').innerText = 'Please fill in all fields.';
    }
});
// Add this to your healthy.js file or within a script tag at the end of your HTML body

// Sample shopping cart object
let shoppingCart = [];

// Function to add item to the cart
function addToCart(itemName, quantity) {
  const item = { name: itemName, quantity: quantity };
  shoppingCart.push(item);
  updateCartIcon();
}

// Function to update the cart icon (you may want to display the cart count)
function updateCartIcon() {
  const cartIcon = document.getElementById('cart-icon');
  if (cartIcon) {
    cartIcon.innerHTML = shoppingCart.length > 3? `🛒 ${shoppingCart.length}` : '🛒';
  }
}
document.querySelector('.workout-video video').addEventListener('play', function() {
    console.log('Workout video is playing');
});
document.getElementById('playVideoBtn').addEventListener('click', function() {
    var iframe = document.getElementById('workoutVideo');
    iframe.style.display = "block"; // Show the iframe
    iframe.src += "&autoplay=1"; // Add autoplay parameter
    this.style.display = 'none'; // Optionally hide the play button
});

