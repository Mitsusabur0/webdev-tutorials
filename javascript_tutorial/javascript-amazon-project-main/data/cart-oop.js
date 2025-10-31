function Cart(localStorageKey) {
    const cart = {
        // Variables
        cartItems: undefined,


        // Methods
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems) {
                this.cartItems = [
                {
                    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: 1
                },
                {
                    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionId: 2
                }];
            };
        },

        saveCartStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        addToCart(productId, quantity) {
            const matchingItem = this.cartItems.find(item => item.id === productId)
            if (matchingItem) {
                matchingItem.quantity += quantity;
            } else {
                this.cartItems.push({
                    id: productId,
                    quantity: quantity,
                    deliveryOptionId: 1
                });
            }
            this.saveCartStorage();
        },

        removeFromCart(event) {
            const toDelete = this.cartItems.findIndex(item => item.id === event.target.dataset.productId);
            if (typeof toDelete === 'number') {
                this.cartItems.splice(toDelete, 1);
                this.saveCartStorage();
            }
        },

        updateCart(event) {
            const itemToUpdate = this.cartItems.find(item => item.id === event.target.dataset.productId);
            if (itemToUpdate) {
                itemToUpdate.quantity = Number(prompt('New quantity'))
                this.saveCartStorage();
            }
        },

        clearCart() {
            localStorage.clear();
            this.cartItems = [];
            this.saveCartStorage();
        },
    };
    return cart;
}



// const cart = Cart('cart-oop');

// const businessCart = Cart('cart-business');

// cart.loadFromStorage();
// businessCart.loadFromStorage();

// console.log(cart);
// console.log(businessCart);