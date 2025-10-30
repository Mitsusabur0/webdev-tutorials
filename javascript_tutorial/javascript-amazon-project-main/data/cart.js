export let cart;

loadFromStorage();

export function loadFromStorage() {
	cart = JSON.parse(localStorage.getItem('cart'));

	if (!cart) {
		cart = [
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
}


export function addToCart(productId, quantity) {
	const matchingItem = cart.find(item => item.id === productId)
	if (matchingItem) {
		matchingItem.quantity += quantity;
	} else {
		cart.push({
			id: productId,
			quantity: quantity,
			deliveryOptionId: 1
		});
	}
	saveCartStorage();
}

export function removeFromCart(event) {
	const toDelete = cart.findIndex(item => item.id === event.target.dataset.productId);
	if (typeof toDelete === 'number') {
		cart.splice(toDelete, 1);
		// event.target.closest('.cart-item-container').remove();
		saveCartStorage();
	}
}

export function updateCart(event) {
	const itemToUpdate = cart.find(item => item.id === event.target.dataset.productId);
	if (itemToUpdate) {
		itemToUpdate.quantity = Number(prompt('New quantity'))
		saveCartStorage();
	}
}

export function clearCart() {
	localStorage.clear();
	cart = [];
	saveCartStorage();
}
export function saveCartStorage() {
	localStorage.setItem('cart', JSON.stringify(cart));
}