// CSS Pointers
const show = {
	"display": "block"
}

const hide = {
	"display": "none"
}


// Default for if cart is empty
function display_default() {
	cart = JSON.parse(localStorage.getItem("user_cart"))
	// If cart is not empty hide default
	if (cart.length != 0) {
		css_update("empty_def", hide)
	} else {
		css_update("empty_def", show)
	}
}

// Runs on load
function onLoadCart() {
	display_default();
}