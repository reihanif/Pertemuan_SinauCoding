import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import Product from '../assets/product/Product.json';

export const useCartStore = defineStore('cart', () => {
	const product = reactive(Product);

	const cart = reactive([]);
	const totalCart = ref(cart.length);

	function addToCart(item) {
		const itemExists = cart.some((cartItem) => cartItem.id === item.id);
		if (!itemExists) {
			cart.push(item);
			totalCart.value = cart.length;
		} else {
			alert(item.title + ' is already in the cart');
		}
	}

	function removeFromCart(item) {
		cart.splice(item, 1);
		totalCart.value = cart.length;
	}

	return { product, cart, totalCart, addToCart, removeFromCart };
});
