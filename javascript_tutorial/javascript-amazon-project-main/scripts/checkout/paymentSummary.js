// import { cart } from "../../data/cart.js";
import { cart } from "../../data/cart-class.js";
import { products } from "../../data/products.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingCostCents = 0;
    let totalQuantity = 0;
    let html = '';
    cart.cartItems.forEach((cartItem) => {
        const product = getProduct(cartItem.id);
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        productPriceCents += product.priceCents * cartItem.quantity;
        shippingCostCents += deliveryOption.priceCents;
        totalQuantity += cartItem.quantity;
        
    });
    const taxCents = (productPriceCents + shippingCostCents) * 0.1;
    const totalCost = productPriceCents + shippingCostCents;

    html = `
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${totalQuantity}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(
                shippingCostCents
            )}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCost)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCost + taxCents)}</div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;
    document.querySelector('.js-payment-summary').innerHTML = html;
}


