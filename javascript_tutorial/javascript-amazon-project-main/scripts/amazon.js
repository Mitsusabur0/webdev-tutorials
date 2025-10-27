import { cart, addToCart } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

const productsGrid = document.querySelector(".js-products-grid");
const body = document.querySelector("body");
let productsHTML = '';	


// Create the HTML string with all products
products.forEach((product) => {

      productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

		  <button 
		  	class='add-to-cart-button button-primary js-add-to-cart'
			data-product-id='${product.id}'
		  >
		  	Add to Cart
		  </button>
        </div>    
    `;
});
productsGrid.innerHTML = productsHTML;



// Listener for add to cart Buttons
productsGrid.addEventListener("click", (event) => {
	const button = event.target.closest('.js-add-to-cart');

    if (button) {
		
      const productContainer = button.closest('.product-container')
      const quantity = Number(productContainer.querySelector('select').value);
      const productId = button.dataset.productId;

      addToCart(productId, quantity)
      
      updateCartDisplayQuantity();

      const notificationDisplay = productContainer.querySelector('.js-added-to-cart')
      notifyAddedProduct(button, notificationDisplay);


    }
});


// Function to update cart total number display
const cartQuantityDisplay = document.querySelector('.js-cart-quantity');
function updateCartDisplayQuantity() {
	let total = 0;
	cart.forEach((product) => {
		total += product.quantity;
	})
	cartQuantityDisplay.textContent = total;
}


// Show 'product added' notification
function notifyAddedProduct(button, notificationDisplay) {
	clearTimeout(button.dataset.timeoutId);
	notificationDisplay.classList.add('visible');
	const timeoutId = setTimeout(() => {
		notificationDisplay.classList.remove('visible');
	}, 2000)
	button.dataset.timeoutId = timeoutId;
}


// Log the cart with 'q' keydown
document.addEventListener('keydown', (event) => {
	if (event.key === 'q') {
		console.log('#########################')
		cart.forEach((item, index) => {
			console.log(index+1)
			console.log(`Product ID: ${item.productId.slice(0,8)}`);
			console.log(`Quantity: ${item.quantity}`);
		})
		console.log('#########################')

	}
})