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
	update_price();
}

function update_price() {
	cart = JSON.parse(localStorage.getItem("user_cart"))
	price = (5.99 * (cart.length));
	price = price.toFixed(2);
	price = "$" + price;
	$(document).ready(function() {
		$("#total_price").text(price);
	});

}