import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { cart, removeFromCart, updateCart, clearCart, saveCartStorage } from "../data/cart.js";
import { getShippingDate } from "./utils/dates.js";
import { deliveryOptions } from "../data/deliveryOptions.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

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
                    Delivery date: ${getShippingDate(cartItem.deliveryOptionId)}
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
                        ${deliveryOptionsHTML(item, cartItem)}
                    </div>
                </div>
            </div>
        `;
        totalProducts += cartItem.quantity;
    });
    document.querySelector('.js-product-total').textContent = `${totalProducts} items`;
    document.querySelector(".js-order-summary").innerHTML = cartSummaryHtml;

}


function deliveryOptionsHTML(item, cartItem) {
    let html = ''
    deliveryOptions.forEach((deliveryOption, index) => {
        const dateString = getShippingDate(Number(deliveryOption.id));
        const priceString = deliveryOption.priceCents === 0
            ? 'FREE Shipping'
            : `${formatCurrency(deliveryOption.priceCents)} - Shipping`;
        const isChecked = Number(deliveryOption.id) === cartItem.deliveryOptionId;

        html +=
        `
            <div class="delivery-option">
                <input type="radio"
                ${isChecked ? 'checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${item.id}"
                data-product-id="${item.id}"
                value="${index+1}">
                <div>
                    <div class="delivery-option-date">
                        ${dateString}
                    </div>
                    <div class="delivery-option-price">
                        ${priceString}
                    </div>
                </div>
            </div>
        `
    })

    return(html);

}


// Event Listener for update and delete links
document.querySelector('.js-order-summary').addEventListener('click', (event) => {
    if (event.target.closest('.js-delete-link')) {
        removeFromCart(event);
        renderCart();
    } else if (event.target.closest('.js-update-link')) {
        updateCart(event);
        renderCart();
    }
});


// Event listener to change delivery option values
document.querySelector('.js-order-summary').addEventListener('click', (event) => {
    const selectedOption = event.target.closest('.delivery-option-input');

    if (selectedOption) {
        const item = cart.find(cartItem => cartItem.id === selectedOption.dataset.productId)

        item.deliveryOptionId = Number(selectedOption.value);
        saveCartStorage();
        renderCart();
    }
})


// DEV helper function to clear cart
document.querySelector('.js-clear-cart').addEventListener('click', () => {
    clearCart();
    renderCart();
});