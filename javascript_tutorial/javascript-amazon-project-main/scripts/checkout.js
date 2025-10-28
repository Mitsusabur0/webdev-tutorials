import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { cart, removeFromCart, updateCart, clearCart } from "../data/cart.js";
import { getShippingDate } from "./utils/dates.js";

let cartSummaryHtml = '';
let totalProducts = 0;




renderCart();
export function renderCart() {
    cartSummaryHtml = '';
    totalProducts = 0;
    cart.forEach((cartItem) => {
        const item = products.find((product) => product.id === cartItem.id);
        cartSummaryHtml += `
            <div class="cart-item-container">
                <div class="delivery-date">
                    Delivery date: Tuesday, June 21
                </div>

                <div class="cart-item-details-grid">
                    <img class="product-image"
                    src="${item.image}">

                    <div class="cart-item-details">
                        <div class="product-name">
                            ${item.name}
                        </div>
                        <div class="product-price">
                            $${formatCurrency(item.priceCents)}
                        </div>
                        <div class="product-quantity">
                            <span>
                            Quantity: <span class="quantity-label">${
                                cartItem.quantity
                            }</span>
                            </span>
                            <span class="update-quantity-link link-primary js-update-link"
                            data-product-id='${item.id}'>
                                Update
                            </span>
                            <span class="delete-quantity-link link-primary js-delete-link"
                            data-product-id='${item.id}'>
                                Delete
                            </span>
                        </div>
                    </div>

                    <div class="delivery-options">
                        <div class="delivery-options-title">
                            Choose a delivery option:
                        </div>
                        <div class="delivery-option">
                            <input type="radio" checked
                            class="delivery-option-input"
                            name="delivery-option-${item.id}">
                            <div>
                                <div class="delivery-option-date">
                                    ${getShippingDate(7)}
                                </div>
                                <div class="delivery-option-price">
                                    FREE Shipping
                                </div>
                            </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${item.id}">
                        <div>
                            <div class="delivery-option-date">
                                Wednesday, June 15
                            </div>
                            <div class="delivery-option-price">
                                $4.99 - Shipping
                            </div>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${item.id}">
                        <div>
                            <div class="delivery-option-date">
                                Monday, June 13
                            </div>
                            <div class="delivery-option-price">
                                $9.99 - Shipping
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        `;
        totalProducts += cartItem.quantity;
    });
    document.querySelector('.js-product-total').textContent = `${totalProducts} items`;
    document.querySelector(".js-order-summary").innerHTML = cartSummaryHtml;

    // For development, delete later
    // console.log('Cart after render:');
    // console.log(cart);
}

// Listener for update and delete links
document.querySelector('.js-order-summary').addEventListener('click', (event) => {
    if (event.target.closest('.js-delete-link')) {
        removeFromCart(event);
        renderCart();
    } else if (event.target.closest('.js-update-link')) {
        updateCart(event);
        renderCart();
    }
});

document.querySelector('.js-clear-cart').addEventListener('click', () => {
    clearCart();
    renderCart();
});