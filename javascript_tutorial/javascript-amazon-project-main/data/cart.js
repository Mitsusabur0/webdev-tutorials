
export const cart = []

// Add products to cart
export function addToCart(productId, quantity) {
	const matchingItem = cart.find(item => item.productId === productId)
	if (matchingItem) {
		matchingItem.quantity += quantity;
	} else {
		cart.push({
			productId: productId,
			quantity: quantity,
		});
	}
}



